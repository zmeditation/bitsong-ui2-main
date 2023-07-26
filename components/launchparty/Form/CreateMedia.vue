<template>
  <v-row :class="{ 'mt-8': !mdAndDown }">
    <v-col cols="12" md="5">
      <h6 class="text-subtitle-1">{{ label }}</h6>
      <p class="text-grey text-subtitle-2 font-weight-regular">
        {{ description }}
      </p>
    </v-col>
    <v-col cols="12" md="7" :class="{ 'pt-0': mdAndDown }">
      <app-form-file-picker
        :name="name"
        :placeholder="placeholder"
        alternative
        :file-types="fileTypes"
        :server="server"
        @on-cid="$emit('onCid', $event)"
      >
      </app-form-file-picker>

      <v-alert v-if="errors.length" variant="text" class="mt-4 text-error">
        <ul>
          <li v-for="error in errors" :key="error">
            {{ error }}
          </li>
        </ul>
      </v-alert>
    </v-col>
  </v-row>
</template>

<script lang="ts" setup>
import { useDisplay } from "vuetify";
import { useField } from "vee-validate";

const { mdAndDown } = useDisplay();

const props = defineProps<{
  name: string;
  label: string;
  description: string;
  fileTypes: string;
  placeholder: string;
  server?: string;
}>();

defineEmits<{
  (e: "onCid", value: string): void;
}>();

const { value, handleBlur, errors } = useField(toRef(props, "name"), undefined);
</script>
