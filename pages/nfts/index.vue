<template>
  <app-page>
    <template v-slot:title>
      NFTs
      <v-progress-circular
        v-if="loadingVerified || loading"
        size="small"
        indeterminate
        color="grey"
        class="ml-2"
        width="2"
      ></v-progress-circular>
    </template>
    <template v-slot:append>
      <v-btn v-if="isLoggedIn" to="/create/collection" color="primary">
        Create
      </v-btn>
    </template>
    <template v-slot:body>
      <v-tabs v-model="tab" align-tabs="start" class="mb-6">
        <v-tab :value="1">
          Verified
          <v-chip color="grey" variant="tonal" size="small" class="ml-3">
            {{ verified?.collections?.totalCount }}
          </v-chip>
        </v-tab>
        <v-tab :value="2">
          All
          <v-chip color="grey" variant="tonal" size="small" class="ml-3">
            {{ result?.collections?.totalCount }}
          </v-chip>
        </v-tab>
      </v-tabs>

      <nft-collection-grid :collections="collections"></nft-collection-grid>
    </template>
  </app-page>
</template>

<script lang="ts" setup>
import { useLazyQuery } from "@vue/apollo-composable";
import { useAuthStore } from "@/store/auth";
import {
  GetVerifiedCollectionsDocument,
  GetCollectionsDocument,
} from "~~/gql/subql/client/graphql";

const tab = ref(1);

const { isLoggedIn } = useAuthStore();
const {
  load: loadVerified,
  result: verified,
  loading: loadingVerified,
} = useLazyQuery(
  GetVerifiedCollectionsDocument,
  {
    first: 200,
  },
  {
    fetchPolicy: "network-only",
  }
);

const { load, result, loading } = useLazyQuery(
  GetCollectionsDocument,
  {
    first: 200,
  },
  {
    fetchPolicy: "network-only",
  }
);

watchEffect(() => {
  if (tab.value === 1) {
    loadVerified();
  } else {
    load();
  }
});

onBeforeMount(async () => {
  await loadVerified();
  await load();
});

const collections = computed(() => {
  if (tab.value === 1) {
    return verified.value?.collections?.edges;
  } else {
    return result.value?.collections?.edges;
  }
});
</script>
