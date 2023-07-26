<template>
  <v-dialog :model-value="modelValue" max-width="400px" persistent>
    <v-card>
      <v-list>
        <v-list-item
          :disabled="step.status === 'pending'"
          lines="two"
          v-for="(step, index) in steps"
          :key="index"
        >
          <template v-slot:prepend>
            <v-list-item-action start>
              <v-progress-circular
                v-if="step.status === 'loading'"
                indeterminate
                color="primary"
                size="26"
                width="2"
              ></v-progress-circular>
              <v-icon
                v-else-if="step.status === 'done'"
                color="primary"
                size="26"
              >
                mdi-check
              </v-icon>
              <v-icon
                v-else-if="step.status === 'error'"
                color="error"
                size="26"
              >
                mdi-close
              </v-icon>
              <v-icon v-else-if="step.status === 'pending' && hasError">
                mdi-alert
              </v-icon>
              <v-icon v-else size="26">mdi-clock-time-four-outline</v-icon>
            </v-list-item-action>
          </template>
          <template v-slot:append v-if="step.txHash">
            <v-btn
              icon
              variant="plain"
              target="_blank"
              :href="`${txLinkPrefix}${step.txHash}`"
            >
              <v-icon size="18">mdi-open-in-new</v-icon>
            </v-btn>
          </template>
          <v-list-item-title>{{ step.title }}</v-list-item-title>
          <v-list-item-subtitle v-if="step.status !== 'error'">{{
            step.subtitle
          }}</v-list-item-subtitle>
          <v-list-item-subtitle
            v-else
            class="text-error"
            style="opacity: 1; -webkit-line-clamp: 10"
          >
            {{ step.errorMessage }}
          </v-list-item-subtitle>
        </v-list-item>
      </v-list>
      <v-card-actions v-if="allDone && !hasError">
        <v-btn
          variant="text"
          class="ma-auto"
          color="primary"
          @click.stop="$emit('update:modelValue', false)"
        >
          Continue
        </v-btn>
      </v-card-actions>
      <v-card-actions v-if="hasError">
        <v-btn
          variant="text"
          color="error"
          class="ma-auto"
          @click.stop="$emit('update:modelValue', false)"
          >Close</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts" setup>
import { Stepper } from "~/types";

const props = defineProps<{
  modelValue: boolean;
  steps: Stepper[];
  txLinkPrefix?: string;
  continueLink?: string;
}>();

const refs = toRefs(props);

defineEmits<{
  (e: "update:modelValue", value: boolean): void;
}>();

const allDone = computed(() => {
  return refs.steps.value.every((step) => step.status === "done");
});

const hasError = computed(() => {
  return refs.steps.value.some((step) => step.status === "error");
});
</script>
