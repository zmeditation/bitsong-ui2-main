<template>
  <app-page>
    <template v-slot:title>
      Fantokens
      <v-progress-circular
        v-if="loadingFantokens"
        size="small"
        indeterminate
        color="grey"
        class="ml-2"
        width="2"
      ></v-progress-circular>
    </template>
    <template v-slot:append>
      <v-btn v-if="isLoggedIn" to="/fantokens/create" color="primary">
        Create
      </v-btn>
    </template>
    <template v-slot:body>
      <div class="d-flex flex-row" v-if="isLoggedIn">
        <div class="py-2 mr-2">
          <v-chip
            variant="outlined"
            :prepend-icon="filters.length ? `` : `mdi-check`"
            @click.stop="filters = []"
          >
            All
          </v-chip>
        </div>

        <v-chip-group v-model="filters" column multiple>
          <v-chip
            filter
            variant="outlined"
            :value="FantokensFilterType.CREATOR"
          >
            Created by me
          </v-chip>
          <v-chip
            filter
            variant="outlined"
            :value="FantokensFilterType.AUTHORITY"
          >
            I'm the authority
          </v-chip>
          <v-chip filter variant="outlined" :value="FantokensFilterType.MINTER">
            I'm the minter
          </v-chip>
        </v-chip-group>
      </div>

      <v-card
        class="mt-6"
        variant="outlined"
        height="350"
        v-if="fantokens.length === 0 && !firstLoad"
      >
        <div class="d-flex justify-center flex-column align-center fill-height">
          <v-icon icon="mdi-emoticon-sad-outline" color="grey" size="64">
          </v-icon>
          <p class="text-h6 mt-4 font-weight-medium">no fantokens found</p>
          <v-btn color="primary" class="mt-4" small>Create Fantoken</v-btn>
        </div>
      </v-card>
      <v-table class="mt-6">
        <thead>
          <tr>
            <th>Name</th>
            <th class="text-right">
              {{ lgAndUp ? "Circulating Supply" : "C. Supply" }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="fantoken of fantokens" :key="fantoken?.cursor">
            <td class="d-flex mt-1">
              <v-avatar :size="36" class="mt-2">
                <v-img
                  v-if="fantoken.node?.metadata"
                  @click.stop="router.push(`/fantokens/${fantoken.node?.id}`)"
                  :src="proxyImage(replaceIpfsPrefix(fantoken.node?.metadata?.image), 50)"
                >
                </v-img>
              </v-avatar>
              <div class="ml-2">
                <span>
                  <nuxt-link
                    class="text-decoration-none text-white"
                    :to="`/fantokens/${fantoken.node?.id}`"
                  >
                    {{ fantoken.node?.name }}
                  </nuxt-link>
                </span>
                <span
                  class="ml-2 text-grey-darken-1 text-uppercase text-body-2"
                  >{{ fantoken.node?.symbol }}</span
                >
                <div class="text-grey-darken-1 text-body-2">
                  {{
                    lgAndUp
                      ? fantoken.node?.id
                      : formatShort(fantoken.node?.id, 5)
                  }}
                </div>
              </div>
            </td>
            <td class="text-right">
              {{ fantoken.node?.supply / Math.pow(10, 6) }}
              <span
                class="text-uppercase text-body-2 text-grey-darken-1"
                v-if="lgAndUp"
                >{{ fantoken.node?.symbol }}</span
              >
              <v-progress-linear
                color="primary"
                :model-value="
                  Math.round(
                    (fantoken.node?.supply / fantoken.node?.maxSupply) * 100
                  )
                "
                class="my-1"
              ></v-progress-linear>
            </td>
          </tr>
        </tbody>
      </v-table>
    </template>
  </app-page>
</template>

<script lang="ts" setup>
import { useAuthStore } from "@/store/auth";
import { storeToRefs } from "pinia";
import { useDisplay } from "vuetify/lib/framework.mjs";
import { useFantoken, FantokensFilterType } from "~~/composables/useFantoken";
import { formatShort } from "@/utils";

const router = useRouter();
const { lgAndUp } = useDisplay();

const firstLoad = ref(true);
const {
  filters,
  fantokens,
  loadingFantokens,
  loadFantokens,
  onResultFantokens,
} = useFantoken();
const { isLoggedIn } = storeToRefs(useAuthStore());

onBeforeMount(async () => {
  await loadFantokens();
});

onBeforeUnmount(() => {
  firstLoad.value = true;
});

onResultFantokens(() => {
  firstLoad.value = false;
});
</script>
