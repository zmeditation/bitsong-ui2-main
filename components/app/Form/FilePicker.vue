<template>
  <v-card
    v-if="variant === 'normal'"
    class="align-center"
    variant="outlined"
    style="border-color: gray; border-style: dashed"
  >
    <file-pond
      ref="uploader"
      :label-idle="placeholder"
      :accepted-file-types="fileTypes"
      :allow-image-validate-size="allowImageValidateSize"
      :image-validate-size-min-width="imageValidateSizeMinWidth"
      :image-validate-size-max-width="imageValidateSizeMaxWidth"
      :image-validate-size-min-height="imageValidateSizeMinHeight"
      :image-validate-size-max-height="imageValidateSizeMaxHeight"
      v-model="value"
      @input="updateModelValue($event)"
      :credits="false"
      :server="computedServer"
    />
  </v-card>
  <v-card
    v-else-if="variant === 'avatar'"
    class="align-center"
    variant="outlined"
    style="border-color: gray; border-style: dashed; border-radius: 50%"
  >
    <file-pond
      ref="uploader"
      :label-idle="placeholder"
      :accepted-file-types="fileTypes"
      :allow-image-validate-size="allowImageValidateSize"
      :image-validate-size-min-width="imageValidateSizeMinWidth"
      :image-validate-size-max-width="imageValidateSizeMaxWidth"
      :image-validate-size-min-height="imageValidateSizeMinHeight"
      :image-validate-size-max-height="imageValidateSizeMaxHeight"
      :image-resize-target-width="imageResizeTargetWidth"
      :image-resize-target-height="imageResizeTargetHeight"
      v-model="value"
      @input="updateModelValue($event)"
      :credits="false"
      stylePanelLayout="compact circle"
      styleLoadIndicatorPosition="center bottom"
      styleProgressIndicatorPosition="right bottom"
      styleButtonRemoveItemPosition="center center"
      styleButtonProcessItemPosition="right bottom"
    />
  </v-card>
</template>

<style>
.filepond--panel-root {
  border-radius: 0.5em;
  background-color: transparent;
}

.filepond--root {
  box-sizing: border-box;
  position: relative;
  margin-bottom: 0;
  font-size: 1rem;
  line-height: normal;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica,
    Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
  font-weight: 450;
  text-align: left;
  text-rendering: optimizeLegibility;
  direction: ltr;
  contain: layout style size;
}
</style>

<script lang="ts" setup>
import vueFilePond from "vue-filepond";
import "filepond/dist/filepond.min.css";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
import FilePondPluginImageValidateSize from "filepond-plugin-image-validate-size";
import { FilePondFile } from "filepond";
import { useField } from "vee-validate";
import useWalletStore from "~/store/wallet";

const props = withDefaults(
  defineProps<{
    name: string;
    variant?: "normal" | "avatar" | undefined;
    fileTypes?: string;
    placeholder?: string;
    value?: FilePondFile[] | undefined;
    alternative?: boolean;
    allowImageValidateSize?: boolean;
    imageResizeTargetWidth?: number;
    imageResizeTargetHeight?: number;
    imageValidateSizeMinWidth?: number;
    imageValidateSizeMaxWidth?: number;
    imageValidateSizeMinHeight?: number;
    imageValidateSizeMaxHeight?: number;
    type?:
      | "number"
      | "search"
      | "textarea"
      | "time"
      | "text"
      | "password"
      | "email"
      | "tel"
      | "file"
      | "url"
      | "date"
      | undefined;
    server?: string;
  }>(),
  {
    value: undefined,
    variant: "normal",
    alternative: false,
    allowImageValidateSize: false,
    placeholder: "0",
    fileTypes: "image/jpeg, image/png, image/webp",
    type: "text",
    imageResizeTargetWidth: 200,
    imageResizeTargetHeight: 200,
    imageValidateSizeMinWidth: 1,
    imageValidateSizeMaxWidth: 65535,
    imageValidateSizeMinHeight: 1,
    imageValidateSizeMaxHeight: 65535,
  }
);

const emit = defineEmits<{
  (e: "update:modelValue", value: FilePondFile[] | undefined): void;
  (e: "onCid", cid: string): void;
}>();

const FilePond = vueFilePond(
  FilePondPluginFileValidateType,
  FilePondPluginImagePreview,
  FilePondPluginImageValidateSize
);

const name = toRef(props, "name");
const uploader = ref();

const updateModelValue = (e: FilePondFile[] | undefined) => {
  handleChange(e);
  emit("update:modelValue", value.value);
  if (e && e.length > 0) {
    setTouched(true);
  }
};

const { value, errorMessage, meta, handleChange, setTouched } = useField(
  name,
  undefined,
  {
    initialValue: props.value,
  }
);

const valueWatcher = watch(
  () => value.value,
  (v) => {
    if (!v || v.length === 0) {
      uploader.value.removeFiles();
    }
  }
);

const { getToken, generateToken } = useWalletStore();

if (!getToken) {
  await generateToken();
}

const computedServer = computed(() => {
  if (props.server) {
    return {
      url: props.server,
      process: {
        headers: {
          "x-btsg-web3-token": getToken ?? "",
        },
        onload: (response: any) => {
          const { value } = JSON.parse(response);
          emit("onCid", value.cid);
        },
        onerror: async (response: any) => {
          const error = JSON.parse(response).error;
          if (error === "token is expired") {
            await generateToken();
          }
        },
      },
    };
  }
  return undefined;
});

onUnmounted(() => {
  valueWatcher();
});
</script>
