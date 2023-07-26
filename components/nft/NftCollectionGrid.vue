<template>
  <v-row>
    <v-col
      v-for="collection in collections"
      :key="collection?.node?.id"
      cols="12"
      md="2"
    >
      <nft-collection-grid-item
        :collection="collection.node"
      ></nft-collection-grid-item>
    </v-col>
  </v-row>
</template>

<script lang="ts" setup>
import { GetCollectionsQuery } from "~~/gql/subql/client/graphql";

defineProps<{
  collections:
    | Array<{
        __typename?: "CollectionsEdge";
        cursor?: any | null;
        node?: {
          __typename?: "Collection";
          id: string;
          name: string;
          image?: string | null;
          verified: boolean;
        } | null;
      }>
    | undefined;
}>();
</script>
