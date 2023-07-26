<template>
  <v-card variant="text" class="mt-2">
    <v-card-text class="pb-0">
      <v-row>
        <v-col cols="6" md="3">
          <div class="text-h4 font-weight-medium">
            {{ totalNftMinted ?? 0
            }}<span class="text-grey text-subtitle-1"
              >/{{ maxEditions ?? 0 }}</span
            >
          </div>
          <div class="text-grey text-subtitle-1 mt-n1">Available</div>
        </v-col>

        <v-col cols="6" md="3">
          <div class="text-h4 font-weight-medium">{{ owners ?? 0 }}</div>
          <div class="text-grey text-subtitle-1 mt-n1">Owners</div>
        </v-col>

        <v-col cols="6" md="3">
          <div class="text-h4 font-weight-medium">
            {{ splittedPrice.price
            }}<span class="text-grey text-subtitle-1"
              >.{{ splittedPrice.decimals }} BTSG</span
            >
          </div>
          <div class="text-grey text-subtitle-1 mt-n1">Price</div>
        </v-col>

        <v-col cols="6" md="3">
          <div class="text-h4 font-weight-medium">
            {{ totalSales
            }}<span class="text-grey text-subtitle-1">,00 BTSG</span>
          </div>
          <div class="text-grey text-subtitle-1 mt-n1">Total Sales</div>
        </v-col>
      </v-row>

      <v-row class="mt-2" v-if="isMinter">
        <v-col cols="12">
          <v-btn
            color="primary"
            :to="`/create/nft?collection=${contractAddress}`"
          >
            Create NFT
          </v-btn>
        </v-col>
      </v-row>

      <div class="text-body-1 mt-4 text-grey">
        {{ description }}
      </div>
    </v-card-text>
  </v-card>
</template>

<script lang="ts" setup>
import { parseCoins } from "@cosmjs/proto-signing";

const props = defineProps<{
  totalNftMinted?: number;
  maxEditions?: number;
  owners?: number;
  price?: string;
  isMinter?: boolean;
  description?: string | null;
  contractAddress?: string;
}>();

const price = toRef(props, "price");

const totalSales = computed(() => {
  return 250;
});

const coins = ref(parseCoins(price.value || "0ubtsg"));
const splittedPrice = computed(() =>
  splitAndFormatPrice(Number(coins.value[0].amount))
);
</script>
