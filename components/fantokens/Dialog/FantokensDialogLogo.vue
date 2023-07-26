<template>
  <v-dialog v-bind="$attrs" width="450" :model-value="modelValue" persistent>
    <v-card :loading="loading">
      <v-card-text class="pb-0">
        <app-form-avatar-upload
          @file-update="onFileUpdate"
        ></app-form-avatar-upload>
        <v-alert v-if="errors?.length" color="error" variant="outlined">
          <v-row>
            <v-col cols="12">
              <ul>
                <li v-for="error in errors" :key="error">{{ error }}</li>
              </ul>
            </v-col>
          </v-row>
        </v-alert>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" text @click="onClose">Cancel</v-btn>
        <v-btn
          :disabled="disabled"
          color="primary"
          variant="elevated"
          text
          @click="onSave"
        >
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts" setup>
import { useMutation } from "@vue/apollo-composable";
import { FantokenUploadLogoDocument } from "~~/gql/bstudio/client/graphql";

defineProps<{
  modelValue?: boolean;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: boolean): void;
  (e: "save", value: string): void;
}>();

const newFile = ref<File>();
const errors = ref<string[]>();

const onFileUpdate = (file: File) => {
  newFile.value = file;
};

const {
  mutate: fantokenUploadLogo,
  loading,
  onDone,
  onError,
} = useMutation(FantokenUploadLogoDocument, {
  errorPolicy: "all",
  clientId: "bstudio",
});

onDone(async (response) => {
  if (response.errors) {
    errors.value = response.errors.map((e: any) => e.message);
  } else {
    if (!response.data) return;

    emit("save", response.data.fantokenUploadLogo);
    onClose();
  }
});

onError((error) => {
  errors.value = [error.message];
});

const onSave = async () => {
  if (!newFile.value) return;

  const result = await fantokenUploadLogo({ logo: newFile.value });
  if (result?.errors) {
    errors.value = result.errors.map((e: any) => e.message);
    return;
  }

  if (result?.data) {
    emit("save", result.data.fantokenUploadLogo);
    onClose();
  }
};

const onClose = () => {
  newFile.value = undefined;
  errors.value = undefined;
  emit("update:modelValue", false);
};

const disabled = computed(() => {
  return loading.value || !newFile.value;
});
</script>
