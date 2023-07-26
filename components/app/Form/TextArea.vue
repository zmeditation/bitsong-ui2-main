<template>
  <v-textarea
    color="primary"
    variant="outlined"
    v-bind="$attrs"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  ></v-textarea>
</template>

<script setup lang="ts">
defineProps<{
  modelValue?: string | null;
}>();
defineEmits(["update:modelValue"]);
</script>
