<template>
  <v-dialog v-bind="$attrs" width="450" :model-value="modelValue" persistent>
    <v-form @submit.prevent="onSubmit">
      <v-card>
        <v-toolbar color="transparent">
          <v-toolbar-title>Mint</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon @click="$emit('update:modelValue', false)">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>
        <v-card-text class="pt-0">
          <app-form-label
            label="Recipient"
            description="The designated recipient address for the newly minted fantokens."
          ></app-form-label>
          <app-form-text-field
            name="recipient"
            placeholder="Recipient"
            v-model="values.recipient"
          ></app-form-text-field>

          <app-form-label
            :label="`Amount in ${symbol?.toUpperCase() || ''}`"
            description="The specified quantity of fantokens to be minted and allocated to the designated recipient."
          ></app-form-label>
          <app-form-text-field
            name="amount"
            placeholder="Amount"
            v-model="values.amount"
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
            Mint
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
  symbol: string;
  denom: string;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: boolean): void;
  (e: "success", value: number | undefined): void;
}>();

interface FormInput {
  recipient: string;
  amount: string;
}

const validationSchema = toFormValidator(
  z.object({
    recipient: z
      .string({
        required_error: "Recipient is required",
        invalid_type_error: "Recipient must be a valid address",
      })
      .refine(
        (value) => isValidAddress(value, "bitsong"),
        "Recipient must be a valid bitsong address"
      ),
    amount: z
      .string({
        required_error: "Amount is required",
        invalid_type_error:
          "Amount must be a valid number with up to 6 decimal places",
      })
      .refine((value) => {
        const num = parseFloat(value);
        const regex = /^\d+(\.\d{1,6})?$/;

        return regex.test(value) && !isNaN(num) && num >= 0.000001;
      }, "Amount must be a valid number with up to 6 decimal places"),
  })
);

const { handleSubmit, values } = useForm<FormInput>({
  initialValues: {
    recipient: "",
    amount: "0",
  },
  validationSchema,
  validateOnMount: false,
});

const onSubmit = handleSubmit(async () => {
  onClose();

  try {
    const fantokenStore = useFantokenStore();

    const result = await fantokenStore.mint({
      recipient: values.recipient,
      minter: getAddress.value,
      coin: {
        denom: props.denom,
        amount: (parseFloat(values.amount) * Math.pow(10, 6)).toString(),
      },
    });

    emit("success", result?.height);
  } catch (e) {
    console.error(e);
  }
});

const onClose = () => {
  emit("update:modelValue", false);
};
</script>
