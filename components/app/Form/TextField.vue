<template>
  <v-text-field v-bind="$attrs" variant="outlined" :value="modelValue" color="primary" @blur="handleBlur"
    @update:model-value="updateModelValue($event)" :error-messages="errors" />
</template>

<script setup lang="ts">
import { toRef } from 'vue';
import { useField } from 'vee-validate';

const props = defineProps<{ modelValue?: string | number | null | undefined, name: string, type?: string | number | undefined }>()
const emit = defineEmits<{
  (e: "update:modelValue", value: string | number | null | undefined): void
}>()

const name = toRef(props, 'name')
const { handleBlur, handleChange, errors } = useField(name, undefined, {
  initialValue: props.modelValue,
});

const updateModelValue = (e: string | number) => {
  if (props.type === 'number') {
    e = Number(e)
  }
  emit("update:modelValue", props.modelValue)
  handleChange(e)
}
</script>