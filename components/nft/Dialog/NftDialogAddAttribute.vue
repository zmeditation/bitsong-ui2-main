<template>
  <v-dialog v-bind="$attrs" width="450" :model-value="modelValue" persistent>
    <v-form @submit.prevent="onSubmit">
      <v-card>
        <v-toolbar color="transparent">
          <v-toolbar-title>Add Attribute</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon @click="$emit('update:modelValue', false)">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>
        <v-card-text class="pt-0">
          Attributes are used to store additional information about the NFT.
        </v-card-text>
        <v-card-text class="pt-0">
          <app-form-label
            label="Attribute Type"
            description="es: Format"
          ></app-form-label>
          <app-form-text-field
            name="key"
            placeholder="Attribute Type"
            v-model="attribute.trait_type"
          ></app-form-text-field>
        </v-card-text>
        <v-card-text class="pt-0">
          <app-form-label
            label="Attribute Value"
            description="es: Video"
          ></app-form-label>
          <app-form-text-field
            name="value"
            placeholder="Trait Value"
            v-model="attribute.value"
          ></app-form-text-field>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="onClose"> Cancel </v-btn>
          <v-btn
            color="primary"
            variant="elevated"
            text
            type="submit"
            :disabled="disableSubmit"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-form>
  </v-dialog>
</template>

<script lang="ts" setup>
import { Attribute } from "~~/composables/useCreateNft";

defineProps<{
  modelValue?: boolean;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: boolean): void;
  (e: "success", value: Attribute): void;
}>();

const attribute = ref<Attribute>({
  trait_type: "",
  value: "",
});

const disableSubmit = computed(() => {
  return !attribute.value.trait_type.trim() || !attribute.value.value.trim();
});

const onSubmit = () => {
  if (disableSubmit.value) {
    return;
  }

  emit("success", attribute.value);
  onClose();
};

const onClose = () => {
  attribute.value = {
    trait_type: "",
    value: "",
  };
  emit("update:modelValue", false);
};
</script>
