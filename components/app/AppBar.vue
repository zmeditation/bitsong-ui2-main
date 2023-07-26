<template>
  <v-app-bar>
    <v-app-bar-nav-icon
      v-if="mdAndDown"
      @click.stop="toggleDrawer"
    ></v-app-bar-nav-icon>
    <div class="d-flex pt-3 pb-1" v-if="mdAndDown">
      <div><app-logo> </app-logo></div>
      <div class="ml-3 text-h5 mt-1">Studio</div>
    </div>
    <v-app-bar-title v-if="!mdAndDown">
      <app-breadcrumb> </app-breadcrumb>
    </v-app-bar-title>
    <template #append>
      <v-menu class="pr-6" v-if="isLoggedIn">
        <template v-slot:activator="{ props }">
          <v-btn color="primary" v-bind="props" variant="flat" rounded="pill">
            Create
          </v-btn>
        </template>

        <v-card width="200">
          <v-list>
            <v-list-item
              class="pr-0 my-2"
              title="Launchparty"
              to="/create/launchparty"
              prepend-icon="mdi-music"
            >
            </v-list-item>
            <v-list-item
              class="pr-0 my-2"
              title="Collection"
              to="/create/collection"
              prepend-icon="mdi-folder-multiple"
            >
            </v-list-item>
            <v-list-item
              class="mt-2"
              to="/create/nft"
              title="NFT"
              prepend-icon="mdi-image"
            >
            </v-list-item>
            <v-list-item
              class="mt-2"
              to="/fantokens/create"
              title="Fantoken"
              prepend-icon="mdi-currency-usd"
            >
            </v-list-item>
          </v-list>
        </v-card>
      </v-menu>
      <app-wallet-btn></app-wallet-btn>
    </template>
  </v-app-bar>
</template>

<script lang="ts" setup>
import { useAppStore } from "@/store/app";
import { storeToRefs } from "pinia";
import { useDisplay } from "vuetify";
import useWalletStore from "~~/store/wallet";

const { isLoggedIn } = storeToRefs(useWalletStore());
const { toggleDrawer } = useAppStore();
const { mdAndDown } = useDisplay();
</script>
