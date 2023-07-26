import { useLazyQuery, useQuery } from "@vue/apollo-composable";
import { storeToRefs } from "pinia";
import { GetFantokensDocument } from "~~/gql/subql/client/graphql";
import useAuthStore from "~~/store/auth";

export enum FantokensFilterType {
  CREATOR = "creator",
  AUTHORITY = "authority",
  MINTER = "minter",
}

interface OrFilter {
  [key: string]: { equalTo: string };
}

export function useFantoken() {
  const authStore = useAuthStore();
  const { getAddress } = storeToRefs(authStore);

  const filters = ref<FantokensFilterType[]>([]);

  const {
    load: loadFantokens,
    result,
    variables,
    loading: loadingFantokens,
    onResult: onResultFantokens,
  } = useLazyQuery(
    GetFantokensDocument,
    {
      first: 100,
    },
    {
      fetchPolicy: "network-only",
    }
  );

  watch(filters, () => {
    const orFilters: OrFilter[] = [];

    if (filters.value.includes(FantokensFilterType.CREATOR)) {
      orFilters.push({ creatorId: { equalTo: getAddress.value } });
    }
    if (filters.value.includes(FantokensFilterType.AUTHORITY)) {
      orFilters.push({ authorityId: { equalTo: getAddress.value } });
    }
    if (filters.value.includes(FantokensFilterType.MINTER)) {
      orFilters.push({ minterId: { equalTo: getAddress.value } });
    }

    variables.value = {
      first: 100,
      filter: orFilters.length ? { or: orFilters } : undefined,
    };
  });

  return {
    loadingFantokens,
    loadFantokens,
    filters,
    fantokens: computed(() => result.value?.fantokens?.edges ?? []),
    onResultFantokens,
  };
}
