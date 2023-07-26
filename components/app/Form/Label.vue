<template>
  <label class="text-subtitle-1 font-weight-medium">{{ label }}</label>
  <p class="pb-2 text-grey text-body-2">{{ description }}</p>
</template>

<script lang="ts" setup>
const props = defineProps<{
  label: string
  description?: string
}>()
</script>