<template>
  <v-dialog v-model="showBroadcastDialog" max-width="450px" persistent>
    <v-card>
      <v-row class="mt-4" v-if="getStatus === WalletStatus.Loading">
        <v-col cols="12" class="text-center">
          <v-progress-circular
            indeterminate
            color="primary"
            size="60"
          ></v-progress-circular>
          <p class="pt-4 text-subtitle-1">continue on your wallet</p>
        </v-col>
      </v-row>
      <v-row class="mt-4" v-if="getStatus === WalletStatus.Broadcasting">
        <v-col cols="12" class="text-center">
          <v-progress-circular
            indeterminate
            color="primary"
            size="60"
          ></v-progress-circular>
          <p class="pt-4 text-subtitle-1">broadcasting transaction</p>
          <p class="pt-4 text-body-2">transaction is processing</p>
        </v-col>
      </v-row>
      <v-card-text>
        <v-row v-if="getStatus === WalletStatus.Success">
          <v-col cols="12" class="text-center">
            <v-icon icon="mdi-check" color="green" size="60"></v-icon>
            <p class="text-h5">Success!</p>
          </v-col>
          <v-col cols="12" class="text-center">
            <p class="text-grey-lighten-1 text-subtitle-2">TX hash</p>
            <code>{{ txHash }}</code>
          </v-col>
        </v-row>
        <v-row v-else-if="getStatus === WalletStatus.Error">
          <v-col cols="12" class="text-center">
            <v-icon
              icon="mdi-alert-circle-outline"
              color="red"
              size="60"
            ></v-icon>
          </v-col>
          <v-col cols="12" class="text-center text-body-2 text-grey-lighten-1">
            {{ errorMessage }}
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions
        class="ma-auto"
        v-if="
          getStatus === WalletStatus.Success || getStatus === WalletStatus.Error
        "
      >
        <v-btn color="primary" @click="keplrStore.closeDialog">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts" setup>
import { storeToRefs } from "pinia";
import useKeplrStore from "~~/store/keplr";
import { WalletStatus } from "~~/types";

const keplrStore = useKeplrStore();
const { getStatus, txHash, errorMessage } = storeToRefs(keplrStore);

const showBroadcastDialog = computed(
  () =>
    getStatus.value !== WalletStatus.Ready &&
    getStatus.value !== WalletStatus.NotReady
);
</script>
