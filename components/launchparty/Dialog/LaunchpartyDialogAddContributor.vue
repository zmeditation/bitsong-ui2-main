<template>
  <v-dialog v-bind="$attrs" width="450" :model-value="modelValue" persistent>
    <v-form @submit.prevent="onSubmit">
      <v-card>
        <v-toolbar color="transparent">
          <v-toolbar-title>Add Contributor</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon @click="$emit('update:modelValue', false)">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>
        <v-card-text class="pt-0">
          Contributors are used to get royalties from sales.
        </v-card-text>
        <v-card-text class="pt-0">
          <app-form-label
            label="Contributor Address"
            description="es: bitsong1...."
            v-model="values.address"
          ></app-form-label>
          <Field name="address" v-slot="{ errorMessage, field }">
            <v-text-field
              v-bind="field"
              variant="outlined"
              color="primary"
              v-model="values.address"
              :error-messages="errorMessage"
              placeholder="bitsong1...."
            />
          </Field>
        </v-card-text>
        <v-card-text class="pt-0">
          <app-form-label
            label="Contributor Role"
            description="es: Performer"
          ></app-form-label>
          <v-select
            name="role"
            :items="['Performer', 'Producer', 'Composer', 'Other']"
            variant="outlined"
            v-model="values.role"
          ></v-select>
        </v-card-text>
        <v-card-text class="pt-0">
          <app-form-label
            label="Contributor Share"
            description="es: 100"
          ></app-form-label>
          <Field name="share" v-slot="{ errorMessage, field }">
            <v-text-field
              v-bind="field"
              variant="outlined"
              color="primary"
              v-model="values.share"
              :error-messages="errorMessage"
            />
          </Field>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="onClose"> Cancel </v-btn>
          <v-btn color="primary" variant="elevated" text type="submit">
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-form>
  </v-dialog>
</template>

<script lang="ts" setup>
import { toFormValidator } from "@vee-validate/zod";
import { useForm, Field } from "vee-validate";
import { ContributorValidator } from "~/lib/bstudio/validation";
import type { Contributor } from "~~/lib/bstudio/types";

defineProps<{
  modelValue?: boolean;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: boolean): void;
  (e: "success", value: Contributor): void;
}>();

const { handleSubmit, resetForm, values, setFieldValue } = useForm<Contributor>(
  {
    initialValues: {
      address: "",
      role: "Performer",
      share: "0",
    },
    validationSchema: toFormValidator(ContributorValidator),
  }
);

const onSubmit = handleSubmit(() => {
  emit("success", values);
  onClose();
});

const onClose = () => {
  emit("update:modelValue", false);
  resetForm();
};
</script>
