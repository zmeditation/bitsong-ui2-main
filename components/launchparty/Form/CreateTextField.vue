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
    <v-col :cols="cols ?? 12" :md="colsMd ?? 7" :class="{ 'pt-0': mdAndDown }">
      <Field :name="name" v-slot="{ field, errors }">
        <v-text-field
          v-if="variant === 'text-field'"
          v-bind="field"
          :placeholder="placeholder"
          variant="outlined"
          :error-messages="errors"
          :counter="counter"
          style="border-color: #2d2d2d !important"
        >
          <template v-if="appendInner" #append-inner>
            {{ appendInner }}
          </template>
        </v-text-field>
        <v-textarea
          v-if="variant === 'text-area'"
          v-bind="field"
          :placeholder="placeholder"
          variant="outlined"
          :error-messages="errors"
          :counter="counter"
          :auto-grow="autoGrow"
        >
          <template v-if="appendInner" #append-inner>
            {{ appendInner }}
          </template>
        </v-textarea>
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
  cols?: number | string;
  colsMd?: number | string;
  description?: string;
  placeholder: string;
  required?: boolean;
  variant: "text-field" | "text-area";
  appendInner?: string;
  counter?: number | undefined;
  autoGrow?: boolean;
}>();
</script>
