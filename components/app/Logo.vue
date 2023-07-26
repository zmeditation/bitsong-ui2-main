<template>
  <img :src="logo" height="40" />
</template>

<script lang="ts" setup>
import { useNetworkStore } from "@/store/network";
import { storeToRefs } from "pinia";

const networkStore = useNetworkStore();
const { currentNetwork } = storeToRefs(networkStore);

const logo = computed(() => {
  if (!currentNetwork.value.isTestnet) {
    return "/images/logo-circle.svg";
  } else {
    return "/images/logo-circle-green.svg";
  }
});
</script>
