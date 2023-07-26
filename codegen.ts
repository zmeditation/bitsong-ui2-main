import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  generates: {
    "./gql/subql/client/": {
      documents: ["gql/subql/*.graphql"],
      schema: "https://testnet-gql.bitsong.io",
      preset: "client",
      plugins: [],
      config: {
        useTypeImports: true,
      },
    },
    "./gql/bstudio/client/": {
      documents: ["gql/bstudio/*.graphql"],
      schema: "https://testnet-bstudio-api.bitsong.io/query",
      preset: "client",
      plugins: [],
      config: {
        useTypeImports: true,
      },
    },
  },
};

export default config;
