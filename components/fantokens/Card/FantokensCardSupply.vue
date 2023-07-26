<template>
  <v-card v-bind="$attrs" rounded="lg" class="mb-8">
    <v-list bg-color="transparent">
      <v-list-item>
        <template v-slot:default>
          <span class="text-grey">Total Supply</span>
          <v-tooltip
            location="bottom"
            text="The amount of coins that have been already created, minus any coins that have been burned. It is analogous to the outstanding shares in the stock market."
          >
            <template v-slot:activator="{ props }">
              <v-icon
                class="mt-n1 ml-1"
                size="x-small"
                v-bind="props"
                icon="mdi-information"
                color="grey"
              ></v-icon>
            </template>
          </v-tooltip>
        </template>
        <template v-slot:append>
          {{ totalSupply / Math.pow(10, decimals) }}
        </template>
      </v-list-item>
      <div class="px-4">
        <v-progress-linear
          color="primary"
          :model-value="Math.round((totalSupply / maxSupply) * 100)"
          class="px-2"
        ></v-progress-linear>
      </div>
      <v-list-item>
        <template v-slot:default>
          <span class="text-grey">Max Supply</span>
          <v-tooltip
            location="bottom"
            text="The maximum amount of coins that will ever exist in the lifetime of the cryptocurrency. It is analogous to the fully diluted shares in the stock market."
          >
            <template v-slot:activator="{ props }">
              <v-icon
                class="mt-n1 ml-1"
                size="x-small"
                v-bind="props"
                icon="mdi-information"
                color="grey"
              ></v-icon>
            </template>
          </v-tooltip>
        </template>
        <template v-slot:append>
          {{ maxSupply / Math.pow(10, decimals) }}
        </template>
      </v-list-item>
      <v-list-item>
        <template v-slot:default>
          <span class="text-grey">Decimals</span>
        </template>
        <template v-slot:append>
          {{ decimals }}
        </template>
      </v-list-item>
    </v-list>
    <v-card-actions v-if="burnable || mintable">
      <v-spacer></v-spacer>
      <v-btn v-if="burnable" color="red" @click.stop="$emit('clickBurn')"
        >Burn</v-btn
      >
      <v-btn
        v-if="mintable"
        color="primary"
        variant="elevated"
        @click.stop="$emit('clickMint')"
        >Mint</v-btn
      >
    </v-card-actions>
  </v-card>
</template>

<script lang="ts" setup>
defineProps<{
  decimals: number;
  totalSupply: number;
  maxSupply: number;
  burnable: boolean;
  mintable: boolean;
}>();

defineEmits<{
  (e: "clickBurn"): void;
  (e: "clickMint"): void;
}>();
</script>
