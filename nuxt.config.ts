import vuetify from "vite-plugin-vuetify";
import { esbuildCommonjs } from "@originjs/vite-plugin-commonjs";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
    preset: "cloudflare-pages",
  },
  ssr: false,
  app: {
    head: {
      title: "bStudio",
      titleTemplate: "%s | bStudio",
    },
  },
  css: ["@mdi/font/css/materialdesignicons.min.css"],
  build: {
    transpile: [
      "@apollo/client",
      "@vue/apollo-composable",
      "ts-invariant/process",
      "graphql",
    ],
  },
  vite: {
    optimizeDeps: {
      esbuildOptions: {
        plugins: [esbuildCommonjs(["apollo-upload-client"])],
        /*define: {
          global: "globalThis",
        },*/
      },
    },
    build: {},
    ssr: {
      noExternal: ["vuetify"],
    },
  },
  modules: [
    async (options, nuxt) => {
      /* Treeshaking: https://next.vuetifyjs.com/en/features/treeshaking/ */
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        config?.plugins?.push(
          vuetify({
            styles: { configFile: "assets/scss/app.scss" },
          })
        );
      });
    },
    "@pinia-plugin-persistedstate/nuxt",
    [
      "@pinia/nuxt",
      {
        autoImports: [
          // automatically imports `defineStore`
          "defineStore", // import { defineStore } from 'pinia'
          // automatically imports `defineStore` as `definePiniaStore`
          ["defineStore", "definePiniaStore"], // import { defineStore as definePiniaStore } from 'pinia'
        ],
      },
    ],
    "@vueuse/nuxt",
  ],
  piniaPersistedstate: {
    storage: "localStorage",
  },
  runtimeConfig: {
    storage: {
      nftStorage: {
        apiKey:
          (process.env.NUXT_STORAGE_NFTSTORAGE_APIKEY as string) ?? undefined,
      },
    },
    public: {
      network: (process.env.NUXT_PUBLIC_NETWORK as string) ?? "testnet",
      bstudioUpload:
        (process.env.NUXT_PUBLIC_BSTUDIO_UPLOAD as string) ??
        "https://testnet-bstudio-api.bitsong.io/upload",
      gqlBStudio:
        (process.env.NUXT_PUBLIC_GQL_BSTUDIO as string) ??
        "https://testnet-bstudio-api.bitsong.io/query",
      gqlSubql:
        (process.env.NUXT_PUBLIC_GQL_SUBQL as string) ??
        "https://testnet-gql.bitsong.io/",
    },
  },
  telemetry: false,
  typescript: {
    shim: false,
    strict: true,
  },
});
