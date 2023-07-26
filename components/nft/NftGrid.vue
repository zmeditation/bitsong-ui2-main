<template>
  <v-row v-bind="$attrs">
    <v-col v-for="nft in nfts" :key="nft.node?.id" cols="12" :md="colMd ?? 2">
      <nft-grid-item :nft="nft.node"> </nft-grid-item>
    </v-col>
  </v-row>
</template>

<script lang="ts" setup>
defineProps<{
  colMd?: number;
  nfts:
    | Array<{
        __typename?: "NftsEdge";
        node?: {
          __typename?: "Nft";
          id: string;
          tokenId: string;
          collectionId: string;
          metadata?: {
            __typename?: "NftMetadatum";
            name?: string | null;
            image?: string | null;
          } | null;
        } | null;
      }>
    | undefined;
}>();
</script>
