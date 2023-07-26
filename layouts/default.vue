<template>
  <v-app>
    <app-drawer> </app-drawer>
    <app-bar> </app-bar>
    <v-main>
      <slot> </slot>
    </v-main>
    <app-dialog-broadcast v-if="showBroadcastDialog"></app-dialog-broadcast>
  </v-app>
</template>

<script lang="ts" setup>
import { storeToRefs } from "pinia";
import useKeplrStore from "~~/store/keplr";
import { WalletStatus } from "~~/types";
import useNetworkStore from "~~/store/network";
import { useTheme } from "vuetify";

const networkStore = useNetworkStore();

const { currentNetwork } = storeToRefs(networkStore);

const { global: globalTheme } = useTheme();

watch(
  currentNetwork,
  (network) => {
    globalTheme.name.value = network?.isTestnet ? "testnetDark" : "mainnetDark";
  },
  { immediate: true }
);

const keplrStore = useKeplrStore();
const { getStatus } = storeToRefs(keplrStore);

const showBroadcastDialog = computed(
  () =>
    getStatus.value !== WalletStatus.Ready &&
    getStatus.value !== WalletStatus.NotReady
);
</script>
