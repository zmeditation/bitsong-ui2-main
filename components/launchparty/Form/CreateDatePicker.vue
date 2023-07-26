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
    <v-col cols="12" md="7" :class="{ 'pt-0': mdAndDown }">
      <Field :name="name" v-slot="{ field, value }">
        <VueDatePicker
          dark
          v-bind="field"
          :name="name"
          :clearable="clearable"
          :model-value="value"
        ></VueDatePicker>
      </Field>
    </v-col>
  </v-row>
</template>

<script lang="ts" setup>
import { Field } from "vee-validate";
import { useDisplay } from "vuetify";

import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

const { mdAndDown } = useDisplay();

defineProps<{
  name: string;
  label: string;
  description?: string;
  required?: boolean;
  clearable?: boolean;
}>();
</script>

<style>
.dp__input {
  height: 56px;
  font-family: "Circular Std", sans-serif;
  background-color: transparent;
  border-color: #606060;
}

.dp__instance_calendar {
  font-family: "Circular Std", sans-serif;
}

.dp__calendar_wrap {
  font-family: "Circular Std", sans-serif;
}

.dp__action_row {
  font-family: "Circular Std", sans-serif;
}

.dp__time_input {
  font-family: "Circular Std", sans-serif;
}
</style>
