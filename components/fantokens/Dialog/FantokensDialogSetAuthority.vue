<template>
  <v-dialog v-bind="$attrs" width="450" :model-value="modelValue" persistent>
    <v-form @submit.prevent="onSubmit">
      <v-card>
        <v-toolbar color="transparent">
          <v-toolbar-title>Edit Authority</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon @click="$emit('update:modelValue', false)">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>
        <v-card-text class="pt-0">
          <app-form-label
            label="Authority"
            description="The authority is the address of the account that can edit the fantoken informations, if you leave it empty, the authority will be the address of the account that created the fantoken."
          ></app-form-label>
          <app-form-text-field
            name="authority"
            placeholder="Authority"
            v-model="values.newAuthority"
          ></app-form-text-field>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="$emit('update:modelValue', false)"
          >
            Cancel
          </v-btn>
          <v-btn color="primary" variant="elevated" text type="submit">
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-form>
  </v-dialog>
</template>

<script lang="ts" setup>
import { useForm } from "vee-validate";
import { z } from "zod";
import { toFormValidator } from "@vee-validate/zod";
import { isValidAddress } from "@/utils";
import useFantokenStore from "~~/store/fantoken";
import useKeplrStore from "~~/store/keplr";
import { storeToRefs } from "pinia";

const keplrStore = useKeplrStore();
const { getAddress } = storeToRefs(keplrStore);

const props = defineProps<{
  modelValue?: boolean;
  denom: string;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: boolean): void;
  (e: "success", value: number | undefined): void;
}>();

interface FormInput {
  newAuthority: string;
}

const validationSchema = toFormValidator(
  z.object({
    newAuthority: z
      .string({
        required_error: "New Authority is required",
        invalid_type_error: "New Authority must be a valid address",
      })
      .refine(
        (value) => isValidAddress(value, "bitsong"),
        "New Authority must be a valid bitsong address"
      ),
  })
);

const { handleSubmit, values } = useForm<FormInput>({
  initialValues: {
    newAuthority: "",
  },
  validationSchema,
  validateOnMount: false,
});

const onSubmit = handleSubmit(async () => {
  onClose();

  try {
    const fantokenStore = useFantokenStore();

    const response = await fantokenStore.setAuthority({
      denom: props.denom,
      oldAuthority: getAddress.value,
      newAuthority: values.newAuthority,
    });

    emit("success", response?.height);
  } catch (e) {
    console.error(e);
  }
});

const onClose = () => {
  emit("update:modelValue", false);
};
</script>
