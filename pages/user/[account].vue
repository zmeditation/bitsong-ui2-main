<template>
  <app-page :show-title="false">
    <template v-slot:body class="mt-2">
      <v-card variant="text" rounded="lg">
        <v-img
          src="/images/default-cover.png"
          :aspect-ratio="16 / 9"
          cover
          class="align-end"
          height="300"
        >
        </v-img>
        <v-avatar
          size="130"
          class="ml-4"
          style="margin-top: -80px !important; border: 2px solid white"
        >
          <v-img height="130" cover src="/images/default.png"> </v-img>
        </v-avatar>
      </v-card>
      <v-card variant="text" class="mt-2">
        <v-card-title>
          <div class="d-flex align-center">
            <div class="text-h4">
              {{ formatShortAddress(account?.id, 8) }}
            </div>
            <v-icon class="ml-2" size="small" color="blue">
              mdi-check-decagram
            </v-icon>
            <app-btn-copy
              v-if="account?.id"
              :text="account?.id"
              class="ml-2"
            ></app-btn-copy>
          </div>
        </v-card-title>
        <v-card-text>
          <v-row class="mt-2">
            <v-col cols="6" md="2">
              <div class="text-grey text-caption text-uppercase">Followers</div>
              <div class="text-body-1">0</div>
            </v-col>
            <v-col cols="6" md="2">
              <div class="text-grey text-caption text-uppercase">Following</div>
              <div class="text-body-1">0</div>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>

      <v-tabs v-model="tab" align-tabs="start">
        <v-tab :value="1">
          Owned
          <v-chip color="grey" variant="tonal" size="small" class="ml-3">
            {{ account?.nftsOwned?.totalCount }}
          </v-chip>
        </v-tab>
        <v-tab :value="2">
          Minted
          <v-chip color="grey" variant="tonal" size="small" class="ml-3">
            {{ account?.nftsMinted?.totalCount }}
          </v-chip>
        </v-tab>
      </v-tabs>

      <v-row class="mt-4">
        <v-col v-for="nft in nfts" :key="nft.node?.id" cols="12" md="2">
          <v-card
            rounded="lg"
            @click.stop="
              router.push(
                `/nfts/${nft.node?.collectionId}/${nft.node?.tokenId}`
              )
            "
          >
            <v-img
              cover
              :src="
                nft.node?.metadata?.image
                  ? proxyImage(
                      replaceIpfsPrefix(nft.node?.metadata?.image),
                      300
                    )
                  : '/images/default.png'
              "
              :aspect-ratio="4 / 3"
            >
            </v-img>
            <v-card-title style="min-height: 48px">
              <nuxt-link
                class="text-decoration-none text-white"
                :to="`/nfts/${nft.node?.collectionId}/${nft.node?.tokenId}`"
              >
                <span class="text-body-1">{{ nft.node?.metadata?.name }}</span>
              </nuxt-link>
            </v-card-title>
            <v-card-text>
              <v-row>
                <v-col cols="6">
                  <div class="text-grey text-caption">FLOOR</div>
                  <div>0 BTSG</div>
                </v-col>
                <v-col cols="6">
                  <div class="text-grey text-caption">7D VOL.</div>
                  <div>0 BTSG</div>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </template>
  </app-page>
</template>

<script lang="ts" setup>
import { useLazyQuery, useQuery } from "@vue/apollo-composable";
import { useDisplay } from "vuetify/lib/framework.mjs";
import {
  GetAccountDocument,
  GetAccountNftOwnedDocument,
  GetAccountNftMintedDocument,
} from "~~/gql/subql/client/graphql";

const route = useRoute();
const router = useRouter();
const { smAndDown } = useDisplay();

const { result } = useQuery(GetAccountDocument, {
  id: route.params.account as string,
});

const { result: resultNftOwned, load: loadNftOwned } = useLazyQuery(
  GetAccountNftOwnedDocument,
  {
    id: route.params.account as string,
  },
  {
    fetchPolicy: "network-only",
  }
);

const { result: resultNftMinted, load: loadNftMinted } = useLazyQuery(
  GetAccountNftMintedDocument,
  {
    id: route.params.account as string,
  },
  {
    fetchPolicy: "network-only",
  }
);

const tab = ref(1);

const account = computed(() => {
  return result.value?.account;
});

const nfts = computed(() => {
  if (tab.value === 1) {
    return resultNftOwned.value?.account?.nftsOwned.edges;
  } else {
    return resultNftMinted.value?.account?.nftsMinted.edges;
  }
});

watchEffect(() => {
  if (tab.value === 1) {
    loadNftOwned();
  } else {
    loadNftMinted();
  }
});

onBeforeMount(async () => {
  await loadNftOwned();
});
</script>
