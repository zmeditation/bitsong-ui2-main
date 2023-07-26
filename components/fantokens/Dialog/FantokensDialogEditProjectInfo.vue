<template>
  <v-dialog v-bind="$attrs" width="650" v-model="opened" persistent>
    <v-form @submit.prevent="onSave" :errors="errors">
      <v-card>
        <v-card-text>
          <app-form-label
            label="Project Info"
            description="Write a brief summary of your fantoken project in 3 or 4 rows."
          >
          </app-form-label>
          <app-form-text-area
            name="projectInfo"
            placeholder="Description"
            v-model="values.projectInfo"
            :counter="MAX_CHARACTERS"
            :error-messages="errors.projectInfo"
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
  projectInfo: string;
}>();

const emit = defineEmits<{
  (e: "close"): void;
  (e: "save", value: string): void;
}>();

const opened = ref<boolean>(true);

interface FormInput {
  projectInfo: string;
}

const validationSchema = toFormValidator(
  zod.object({
    projectInfo: zod
      .string()
      .max(
        MAX_CHARACTERS,
        `Project Info must be at most ${MAX_CHARACTERS} characters`
      ),
  })
);

const { handleSubmit, values, errors } = useForm<FormInput>({
  initialValues: {
    projectInfo: props.projectInfo,
  },
  validationSchema,
});

const onSave = handleSubmit(async () => {
  try {
    emit("save", values.projectInfo);
    onClose();
  } catch (e) {
    console.error(e);
  }
});

const onClose = () => {
  emit("close");
};
</script>
