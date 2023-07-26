<template>
  <v-card rounded="lg" @click.stop="router.push(`/nfts/${collection?.id}`)">
    <v-img
      v-if="collection?.image"
      cover
      :src="`${proxyImage(replaceIpfsPrefix(collection?.image), 500)}`"
      :aspect-ratio="4 / 3"
    >
    </v-img>
    <v-card-title>
      <nuxt-link
        class="text-decoration-none text-white"
        :to="`/nfts/${collection?.id}`"
      >
        <span class="text-body-1">{{ collection?.name }}</span>
        <v-icon class="ml-1" size="16" color="blue" v-if="collection?.verified">
          mdi-check-decagram
        </v-icon>
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
  collection:
    | {
        __typename?: "Collection";
        id: string;
        name: string;
        image?: string | null;
        verified: boolean;
      }
    | null
    | undefined;
}>();
</script>
