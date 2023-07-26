<template>
  <v-row class="mt-6">
    <v-col cols="12" md="5">
      <h6 class="text-subtitle-1">{{ label }}</h6>
      <p class="text-grey text-subtitle-2 font-weight-regular">
        {{ required ? "Required *" : "" }}
        <br v-if="description && required" />
        {{ description ?? null }}
      </p>
    </v-col>
    <v-col cols="12" md="7" :class="{ 'pt-0': mdAndDown }">
      <Field :name="name" v-slot="{ field, errors }">
        <v-select
          v-bind="field"
          :items="items"
          :label="label"
          :error-messages="errors"
          item-title="text"
          item-value="value"
          variant="outlined"
          single-line
        ></v-select>
      </Field>
    </v-col>
  </v-row>
</template>

<script lang="ts" setup>
import { Field } from "vee-validate";
import { useDisplay } from "vuetify";

const { mdAndDown } = useDisplay();

defineProps<{
  name: string;
  label: string;
  description?: string;
  placeholder: string;
  required?: boolean;
  items?: Array<{ text: string; value: string }>;
}>();
</script>
