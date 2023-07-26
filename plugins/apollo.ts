import {
  ApolloClientOptions,
  ApolloClient,
  ApolloLink,
  InMemoryCache,
  createHttpLink,
  Operation,
  concat,
  Observable,
} from "@apollo/client/core";
import { createUploadLink } from "apollo-upload-client";
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";
import useAuthStore from "~~/store/auth";
import { DebugLink } from "@storipress/apollo-vue-devtool";
import { ApolloClients } from "@vue/apollo-composable";
import { error } from "console";
import useWalletStore from "~~/store/wallet";

const promiseToObservable = (promise: Promise<Operation>) =>
  new Observable<Operation>((subscriber) => {
    promise.then(
      (value) => {
        if (subscriber.closed) return;
        subscriber.next(value);
        subscriber.complete();
      },
      (err) => subscriber.error(err)
    );
  });

const retryAuth = async (operation: Operation, oldHeaders: any) => {
  const { getToken, generateToken } = useWalletStore();

  await generateToken();

  operation.setContext({
    headers: {
      ...oldHeaders,
      "x-btsg-web3-token": getToken ?? "",
    },
  });

  return operation;
};

const errorLink = onError(
  ({ graphQLErrors, networkError, operation, forward }) => {
    if (graphQLErrors) {
      for (const err of graphQLErrors) {
        //notifyError(err.message)
        console.error("graphQLErrors -> default client", err.message);
      }
    }

    // To retry on network errors, we recommend the RetryLink
    // instead of the onError link. This just logs the error.
    if (networkError) {
      console.error(`[Network error]: ${networkError}`);
    }
    return forward(operation);
  }
);

const errorLinkBStudio = onError(
  ({ graphQLErrors, networkError, operation, forward }) => {
    if (graphQLErrors) {
      for (const err of graphQLErrors) {
        //notifyError(err.message)
        console.error("graphQLErrors -> bstudio", err.message);
        const context = operation.getContext();
        const oldHeaders = context.headers;

        if (
          err.message.includes("invalid") ||
          err.message.includes("cannot unmarshal w3t") ||
          err.message.includes("token is expired")
        ) {
          return promiseToObservable(retryAuth(operation, oldHeaders)).flatMap(
            (op) => forward(op)
          );
        }
      }
    }

    // To retry on network errors, we recommend the RetryLink
    // instead of the onError link. This just logs the error.
    if (networkError) {
      console.error(`[Network error]: ${networkError}`);
    }
    return forward(operation);
  }
);

const authLink = setContext((_, { headers }) => {
  const { getToken } = useWalletStore();

  const modifiedHeaders = {
    headers: {
      ...headers,
    },
  };

  if (getToken !== undefined && getToken !== "") {
    modifiedHeaders.headers = {
      ...modifiedHeaders.headers,
      "x-btsg-web3-token": getToken,
    };
  }

  return modifiedHeaders;
});

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();

  const apolloClients: {
    [key: string]: ApolloClient<any>;
  } = {};

  const httpLinkBStudio = createUploadLink({ uri: config.public.gqlBStudio });
  const httpLink = createUploadLink({ uri: config.public.gqlSubql });

  const optsBStudio: ApolloClientOptions<any> = {
    link: ApolloLink.from([
      errorLinkBStudio,
      new DebugLink(),
      authLink.concat(httpLinkBStudio),
    ]),
    cache: new InMemoryCache(),
  };

  const opts: ApolloClientOptions<any> = {
    link: ApolloLink.from([errorLink, new DebugLink(), httpLink]),
    cache: new InMemoryCache(),
  };

  if (process.server) {
    const apolloClientBStudio = new ApolloClient(
      Object.assign(optsBStudio, {
        ssrMode: true,
      })
    );

    const apolloClientSubql = new ApolloClient(
      Object.assign(opts, {
        ssrMode: true,
      })
    );

    nuxtApp.hook("app:rendered", () => {
      // store the result
      nuxtApp.payload.data["apollo-bstudio"] = apolloClientBStudio.extract();
      nuxtApp.payload.data["apollo-default"] = apolloClientSubql.extract();
    });

    apolloClients["bstudio"] = apolloClientBStudio;
    apolloClients["default"] = apolloClientSubql;
  } else {
    // restore to cache, so the client won't request
    // cache.restore(JSON.parse(JSON.stringify(nuxtApp.payload.data['apollo-default'])))

    const apolloClientBStudio = new ApolloClient(
      Object.assign(optsBStudio, {
        ssrForceFetchDelay: 100,
      })
    );

    apolloClients["bstudio"] = apolloClientBStudio;

    const apolloClientSubql = new ApolloClient(
      Object.assign(opts, {
        ssrForceFetchDelay: 100,
      })
    );

    apolloClients["default"] = apolloClientSubql;
  }

  nuxtApp.vueApp.provide(ApolloClients, apolloClients);
});
