<template>
  <v-dialog v-bind="$attrs" width="650" v-model="opened" persistent>
    <v-form @submit.prevent="onSave" :errors="errors">
      <v-card>
        <v-card-text>
          <app-form-label
            name="biography"
            label="Biography"
            description="Write a brief description of your biography, including your achievements, your influences, and future goals."
          >
          </app-form-label>
          <app-form-text-area
            name="biography"
            placeholder="Description"
            v-model="values.biography"
            :counter="MAX_CHARACTERS"
            :error-messages="errors.biography"
            :rows="10"
          >
          </app-form-text-area>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="onClose">Cancel</v-btn>
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
import * as zod from "zod";
import { toFormValidator } from "@vee-validate/zod";

const MAX_CHARACTERS = 1000;

const props = defineProps<{
  biography: string;
}>();

const emit = defineEmits<{
  (e: "close"): void;
  (e: "save", value: string): void;
}>();

const opened = ref<boolean>(true);

interface FormInput {
  biography: string;
}

const validationSchema = toFormValidator(
  zod.object({
    biography: zod
      .string()
      .max(
        MAX_CHARACTERS,
        `Biography must be at most ${MAX_CHARACTERS} characters`
      ),
  })
);

const { handleSubmit, values, errors } = useForm<FormInput>({
  initialValues: {
    biography: props.biography,
  },
  validationSchema,
});

const onSave = handleSubmit(async () => {
  try {
    emit("save", values.biography);
    onClose();
  } catch (e) {
    console.error(e);
  }
});

const onClose = () => {
  emit("close");
};
</script>
