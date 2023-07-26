<template>
  <div class="d-flex">
    <div class="d-flex flex-shrink-0">
      <v-avatar
        :style="cursorStyle"
        class="mx-auto mb-4"
        size="128"
        color="grey lighten-4"
        @click="onLogoClick"
      >
        <v-img :src="proxyImage(replaceIpfsPrefix(logo), 200)"></v-img>
      </v-avatar>
    </div>
    <div class="d-flex flex-column">
      <div class="ml-4 align-center">
        <div class="text-body-1 text-grey-lighten-1">
          {{ symbol }}
        </div>
        <div class="text-h4 font-medium">
          {{ name }}
        </div>
        <div class="text-body-2 text-grey-darken-2">
          {{ formatShort(denom, 10) }}
        </div>
      </div>
      <div class="ml-1 mt-1">
        <v-tooltip
          v-for="link in links"
          :key="link.key"
          location="bottom"
          :text="link.key"
        >
          <template v-slot:activator="{ props }">
            <v-btn
              :icon="keyToIcon(link.key)"
              v-bind="props"
              target="_blank"
              :href="link.value"
              variant="text"
              size="small"
            ></v-btn>
          </template>
        </v-tooltip>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { KVPair } from "~~/types";
import useKeplrStore from "~~/store/keplr";

const keplrStore = useKeplrStore();
const { getAddress } = storeToRefs(keplrStore);

const props = defineProps<{
  logo: string | undefined;
  symbol: string | undefined;
  name: string | undefined;
  denom: string | undefined;
  links: KVPair[] | undefined;
  authority?: string;
}>();
const emit = defineEmits(["logoClick"]);

const cursorStyle = computed(() => {
  if (!props.authority) return {};

  if (getAddress.value === props.authority) {
    return {
      cursor: "pointer",
    };
  }

  return {};
});

const onLogoClick = () => {
  if (!props.authority) return;

  if (getAddress.value === props.authority) {
    emit("logoClick");
  }
};
</script>
