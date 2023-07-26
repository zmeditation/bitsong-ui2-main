<template>
  <v-container :class="classes">
    <div
      v-if="showTitle"
      class="d-flex justify-space-between align-center mt-4 mb-6"
    >
      <div>
        <h1 class="text-h4 font-weight-medium">
          <slot name="title"> </slot>
        </h1>
      </div>
      <div>
        <slot name="append"> </slot>
      </div>
    </div>
    <div>
      <slot name="body"> </slot>
    </div>
  </v-container>
</template>

<script setup lang="ts">
import { useDisplay } from "vuetify/lib/framework.mjs";

defineProps({
  showTitle: {
    type: Boolean,
    default: true,
  },
});

const { lgAndUp } = useDisplay();
const classes = computed(() => {
  return {
    "v-col-10": lgAndUp.value,
    "v-col-12": !lgAndUp.value,
  };
});
</script>
