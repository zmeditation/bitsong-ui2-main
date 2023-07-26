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
      <v-radio-group :error-messages="errors" v-model="value">
        <v-radio label="Limited Edition" value="limited"></v-radio>
        <v-radio label="Open Edition" value="open"></v-radio>
      </v-radio-group>
    </v-col>
  </v-row>
</template>

<script lang="ts" setup>
import { useField } from "vee-validate";
import { useDisplay } from "vuetify";

const { mdAndDown } = useDisplay();

const props = defineProps<{
  name: string;
  label: string;
  description?: string;
  required?: boolean;
}>();

const { value, handleBlur, errors } = useField(toRef(props, "name"), undefined);
</script>
