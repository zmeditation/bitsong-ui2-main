<template>
  <div class="d-flex flex-wrap flex-column">
    <div
      class="d-flex flex-wrap align-center"
      v-for="(row, i) in modelValue"
      :key="i"
    >
      <v-select
        placeholder="Select"
        variant="outlined"
        class="mr-4 v-col-3 pa-0"
        color="primary"
        :items="items"
        v-model:model-value="row.key"
        @change="$emit('updated')"
        @select="$emit('updated')"
      ></v-select>
      <v-text-field
        class="mr-4 pa-0"
        placeholder="Link"
        variant="outlined"
        color="primary"
        v-model:model-value="row.value"
        @change="$emit('updated')"
        @input="$emit('updated')"
      ></v-text-field>
      <v-btn
        icon="mdi-delete"
        size="x-small"
        color="red"
        @click.stop="removeLink(i)"
      ></v-btn>
    </div>
    <v-btn variant="outlined" color="primary" @click.stop="addLink"
      >Add link</v-btn
    >
  </div>
</template>

<script lang="ts" setup>
import { KVPair } from "~~/types";

const props = defineProps<{
  modelValue: KVPair[];
}>();

const emit = defineEmits<{
  (e: "updated"): void;
}>();

const items = ref([
  "website",
  "twitter",
  "instagram",
  "facebook",
  "youtube",
  "github",
  "telegram",
  "discord",
  "medium",
  "reddit",
  "linkedin",
  "soundcloud",
  "spotify",
  "apple_music",
  "twitch",
  "other",
]);

const addLink = () => {
  if (!props.modelValue) return;
  props.modelValue.push({ key: "", value: "" });
  emit("updated");
};
const removeLink = (index: number) => {
  if (!props.modelValue) return;
  props.modelValue?.splice(index, 1);
  emit("updated");
};
</script>
