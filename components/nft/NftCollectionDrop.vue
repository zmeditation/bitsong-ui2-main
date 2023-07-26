<template>
  <ConfettiExplosion
    :particleCount="200"
    :force="1.2"
    :duration="5000"
    v-if="showConfetti"
  />

  <v-card
    v-bind="$attrs"
    class="pa-4"
    variant="elevated"
    :loading="loading"
    :disabled="loading"
    :elevation="5"
  >
    <div class="d-flex align-center justify-space-between">
      <div class="align-center justify-center">
        <div class="text-grey text-subtitle-1 mt-n1">Price</div>
        <div class="text-h4 font-weight-medium">
          {{ splittedPrice.price
          }}<span class="text-grey text-subtitle-1"
            >.{{ splittedPrice.decimals }} BTSG</span
          >
        </div>
      </div>

      <v-chip color="green" prepend-icon="mdi-circle"> Live Now </v-chip>
    </div>

    <div class="d-flex flex-column">
      <v-progress-linear
        color="primary"
        :model-value="percentageMinted"
        class="mt-3 mb-1"
      >
      </v-progress-linear>
      <div class="d-flex justify-space-between align-center">
        <div class="text-body-1">{{ percentageMinted }}% minted</div>
        <div class="text-h6">
          {{ totalNftMinted
          }}<span class="text-body-2 text-grey">/{{ maxEditions }} </span>
        </div>
      </div>
    </div>

    <div class="d-flex flex-row align-center justify-space-between">
      <v-btn
        variant="text"
        icon="mdi-minus"
        @click.stop="decreaseMintAmount"
      ></v-btn>

      <div class="text-h4 pl-2">
        {{ mintAmount }}
      </div>

      <v-btn
        variant="text"
        icon="mdi-plus"
        @click.stop="increaseMintAmount"
      ></v-btn>
      <v-btn
        class="px-6"
        rounded="pill"
        color="primary"
        variant="flat"
        @click="onMint"
        :loading="loading"
      >
        Mint Now
      </v-btn>
    </div>
  </v-card>
</template>

<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { contracts } from "@bitsongjs/telescope";
import { parseCoins } from "@cosmjs/proto-signing";
import useWalletStore from "~/store/wallet";
import { useToast } from "vue-toastification";

const { LaunchpadFixedClient } = contracts.LaunchpadFixed;

const { success } = useToast();
const { getClient } = useWalletStore();
const { address } = storeToRefs(useWalletStore());

const props = defineProps<{
  price?: string;
  percentageMinted: number;
  totalNftMinted: number;
  maxEditions: number;
  contractAddress: string;
}>();

const emits = defineEmits<{
  (e: "refetch"): void;
  (e: "refetchLaunchparty"): void;
}>();

const loading = ref(false);
const showConfetti = ref(false);
const maxEditions = toRef(props, "maxEditions");
const totalNftMinted = toRef(props, "totalNftMinted");
const contractAddress = toRef(props, "contractAddress");
const price = toRef(props, "price");
const mintAmount = ref(1);

const coins = ref(parseCoins(price.value || "0ubtsg"));

const splittedPrice = computed(() =>
  splitAndFormatPrice(Number(coins.value[0].amount))
);

const increaseMintAmount = () => {
  const remainingAmt = maxEditions.value - totalNftMinted.value;
  if (mintAmount.value < remainingAmt) {
    mintAmount.value++;
  }
};

const decreaseMintAmount = () => {
  if (mintAmount.value > 1) {
    mintAmount.value--;
  }
};

const onMint = async () => {
  try {
    loading.value = true;

    const launchpartyClient = new LaunchpadFixedClient(
      await getClient(),
      address.value!,
      contractAddress.value
    );

    await launchpartyClient.mint("auto", "", coins.value);

    success("NFT minted successfully");
    showConfetti.value = true;

    await new Promise((resolve) => setTimeout(resolve, 3500));

    emits("refetch");
    emits("refetchLaunchparty");

    showConfetti.value = false;
  } catch (e) {
    console.log(e);
  } finally {
    loading.value = false;
  }
};
</script>
