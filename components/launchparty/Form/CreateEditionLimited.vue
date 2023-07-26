<template>
  <v-row class="mt-6">
    <v-col cols="12" md="5">
      <h6 class="text-subtitle-1">
        {{ label }}
      </h6>
      <p class="text-grey text-subtitle-2 font-weight-regular">
        {{ required ? "Required *" : "" }}
        <br v-if="description && required" />
        {{ description ?? null }}
      </p>
    </v-col>
    <v-col cols="12" md="3" :class="{ 'pt-0': mdAndDown }">
      <Field :name="maxEditionName" v-slot="{ field, errors }">
        <v-text-field
          v-bind="field"
          :label="maxEditionLabel"
          :error-messages="errors"
          variant="outlined"
        ></v-text-field>
      </Field>
    </v-col>
    <v-col cols="12" md="3" :class="{ 'pt-0': mdAndDown }">
      <Field :name="priceEditionName" v-slot="{ field, errors }">
        <v-text-field
          v-bind="field"
          :label="priceEditionLabel"
          :error-messages="errors"
          variant="outlined"
        >
          <template #append-inner> BTSG </template>
        </v-text-field>
      </Field>
    </v-col>
  </v-row>
</template>

<script lang="ts" setup>
import { Field } from "vee-validate";
import { useDisplay } from "vuetify";

const { mdAndDown } = useDisplay();

const props = defineProps<{
  maxEditionName: string;
  maxEditionLabel: string;
  priceEditionName: string;
  priceEditionLabel: string;
  label: string;
  description?: string;
  required?: boolean;
}>();
</script>
