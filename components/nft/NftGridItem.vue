<template>
  <v-card
    v-bind="$attrs"
    rounded="lg"
    @click.stop="router.push(`/nfts/${nft?.collectionId}/${nft?.tokenId}`)"
  >
    <v-img
      cover
      :src="
        nft?.metadata?.image
          ? `${proxyImage(replaceIpfsPrefix(nft?.metadata?.image), 500)}`
          : '/images/default.png'
      "
      :aspect-ratio="4 / 3"
    >
    </v-img>
    <v-card-title style="min-height: 48px">
      <nuxt-link
        class="text-decoration-none text-white"
        :to="`/nfts/${nft?.collectionId}/${nft?.tokenId}`"
      >
        <span class="text-body-1">{{ textShort(nft?.metadata?.name, lgAndUp ? 16 : 50) }}</span>
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
</template>

<script lang="ts" setup>
import { useDisplay } from "vuetify/lib/framework.mjs";

const router = useRouter();
const { lgAndUp } = useDisplay();

defineProps<{
  nft:
    | {
        __typename?: "Nft";
        id: string;
        tokenId: string;
        collectionId: string;
        metadata?: {
          __typename?: "NftMetadatum";
          name?: string | null;
          image?: string | null;
        } | null;
      }
    | null
    | undefined;
}>();
</script>
