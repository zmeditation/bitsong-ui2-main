<template>
  <app-page :class="smAndDown ? 'pa-0' : ''" :show-title="false">
    <template v-slot:body class="mt-2">
      <nft-collection-header
        :title="result?.collection?.name"
        :creator="result?.collection?.creatorId"
        :contract-address="result?.collection?.id"
        :artwork-url="artworkUrl"
        :header-url="headerUrl"
      >
      </nft-collection-header>
      <v-row :class="smAndDown ? 'px-4' : ''">
        <v-col cols="12" md="8">
          <nft-collection-stats
            :contract-address="result?.collection?.id"
            :total-nft-minted="totalNftMinted"
            :description="result?.collection?.description"
            :price="launchparty?.price"
            :owners="77"
            :is-minter="isMinter"
          >
          </nft-collection-stats>

          <nft-collection-drop
            class="mb-4"
            v-if="launchparty && smAndDown"
            :contract-address="launchparty.id"
            :max-editions="launchparty.maxEditions"
            :total-nft-minted="totalNftMinted"
            :percentage-minted="percentageMinted"
            :price="`${launchpartyPrice.price}ubtsg`"
            @refetch="refetch"
            @refetch-launchparty="refetchLaunchparty"
          >
          </nft-collection-drop>

          <v-tabs align-tabs="start">
            <v-tab :value="1"> Information </v-tab>
            <v-tab :value="2"> NFTs </v-tab>
          </v-tabs>

          <nft-grid
            :nfts="result?.collection?.nfts.edges"
            :class="smAndDown ? 'mt-4 px-4' : 'mt-4'"
            :col-md="3"
          ></nft-grid>
        </v-col>

        <v-col
          cols="12"
          md="4"
          class="mt-6"
          v-if="launchpartyResult?.launchparties?.totalCount! > 0"
        >
          <nft-collection-drop
            class="mb-4"
            v-if="launchparty"
            :contract-address="launchparty.id"
            :max-editions="launchparty.maxEditions"
            :total-nft-minted="totalNftMinted"
            :percentage-minted="percentageMinted"
            :price="`${launchpartyPrice.price}ubtsg`"
            @refetch="refetch"
            @refetch-launchparty="refetchLaunchparty"
          >
          </nft-collection-drop>
        </v-col>
      </v-row>
    </template>
  </app-page>
</template>

<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useDisplay } from "vuetify";
import { useQuery } from "@vue/apollo-composable";
import useWalletStore from "~/store/wallet";
import {
  GetCollectionDocument,
  LaunchpartyByCollectionDocument,
} from "~~/gql/subql/client/graphql";

const route = useRoute();
const { smAndDown } = useDisplay();
const { address } = storeToRefs(useWalletStore());

const { result, refetch } = await useQuery(GetCollectionDocument, {
  id: route.params.contract as string,
});

const { result: launchpartyResult, refetch: refetchLaunchparty } =
  await useQuery(LaunchpartyByCollectionDocument, {
    address: route.params.contract as string,
  });

const launchparty = computed(
  () => launchpartyResult.value?.launchparties?.edges[0].node
);

const artworkUrl = computed(() => {
  if (result.value?.collection?.image) {
    return proxyImage(replaceIpfsPrefix(result?.value?.collection?.image), 250);
  }

  return "https://picsum.photos/300";
});

const headerUrl = computed(() => {
  if (result.value?.collection?.image) {
    return proxyImage(
      replaceIpfsPrefix(result?.value?.collection?.image),
      1600
    );
  }

  return "https://picsum.photos/1600";
});

const launchpartyPrice = computed(() =>
  splitAndFormatPrice(launchparty.value?.price)
);

// TODO: fix it with the original minter address
const isMinter = computed(
  () =>
    result.value?.collection?.creatorId === address.value &&
    launchpartyResult.value?.launchparties?.totalCount === 0
);

const totalNftMinted = computed(() => {
  return result.value?.collection?.nfts.totalCount ?? 0;
});

const percentageMinted = computed(() => {
  if (launchparty.value) {
    return Math.round(
      (totalNftMinted.value / launchparty.value.maxEditions) * 100
    );
  }

  return 0;
});
</script>
