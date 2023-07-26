<template>
  <v-dialog width="350" v-model="dialog">
    <template v-slot:activator="{ props }">
      <v-list>
        <v-list-item
          rounded="lg"
          variant="outlined"
          style="border-color: gray"
          :prepend-avatar="logo"
          :title="currentNetwork.chainName"
          :subtitle="currentNetwork.chainId"
          @click.stop="dialog = true"
        >
        </v-list-item>
      </v-list>
    </template>

    <v-card>
      <v-card-title>Select network</v-card-title>
      <v-list class="mb-1 px-4 pt-0">
        <v-list-item
          v-for="network in networks"
          class="pa-2"
          :prepend-avatar="
            network.isTestnet
              ? '/images/logo-circle-green.svg'
              : '/images/logo-circle.svg'
          "
          :title="network.chainName"
          :subtitle="network.chainId"
          @click.stop="selectNetwork(network.chainId)"
          :append-icon="
            currentNetwork.chainId === network.chainId ? 'mdi-check' : ''
          "
        >
        </v-list-item>
      </v-list>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { useNetworkStore } from "@/store/network";
import { storeToRefs } from "pinia";
const networkStore = useNetworkStore();
const { currentNetwork, networks } = storeToRefs(networkStore);

const dialog = ref<boolean>(false);

const selectNetwork = (chainId: string) => {
  networkStore.selectNetwork(chainId);
  dialog.value = false;
};

const logo = computed(() => {
  if (!currentNetwork.value.isTestnet) {
    return "/images/logo-circle.svg";
  } else {
    return "/images/logo-circle-green.svg";
  }
});
</script>
