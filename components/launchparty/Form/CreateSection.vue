<template>
  <h2 class="text-h5">{{ title }}</h2>
  <p class="text-grey">
    {{ description }}
  </p>
</template>

<script lang="ts" setup>
defineProps<{
  title?: string;
  description?: string;
}>();
</script>
