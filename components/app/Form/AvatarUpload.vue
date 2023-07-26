<template>
  <div class="d-flex align-center flex-wrap">
    <div class="mr-6">
      <v-avatar class="mx-auto mb-4" size="128" color="grey lighten-4">
        <v-img :src="previewImage"></v-img>
      </v-avatar>
    </div>
    <div class="text-center flex-grow-1 mr-6">
      <p class="text-body-2">At least 300x300 pixels<br>max. size 5MB, GIF, JPEG or PNG</p>
      <v-btn v-if="image == null" class="mt-2" variant="outlined" color="primary" @click.stop="uploader.click()">CHOOSE
        FILE</v-btn>
      <v-btn v-else class="mt-2" variant="outlined" color="primary" @click.stop="removeImage">Remove
        Image</v-btn>
      <v-alert v-if="uploaderError" color="red" class="mt-2" density="compact" icon="" variant="outlined">
        {{ uploaderError }}
      </v-alert>
    </div>
    <input ref="uploader" accept="image/*" class="d-none" type="file" @change="onFileChanged">
  </div>
</template>

<script lang="ts" setup>
const emit = defineEmits(['file-update'])

const image = ref<File | null>(null);
const uploader = ref<HTMLInputElement>();
const uploaderError = ref<string | null>(null);

const previewImage = computed(() => {
  if (image.value) {
    return URL.createObjectURL(image.value);
  }
  return "https://via.placeholder.com/300";
});

const removeImage = () => {
  image.value = null;
  if (uploader.value) {
    uploader.value.value = "";
  }
  emit('file-update', null)
};

const onFileChanged = (e: Event) => {
  uploaderError.value = null;
  image.value = null;

  const target = e.target as HTMLInputElement;
  const files = target.files;
  if (files && files.length > 0) {
    if (files[0].size > 5242880) {
      uploaderError.value = "File size is too large. Max 5MB";
      return;
    }

    if (files[0].type !== "image/gif" && files[0].type !== "image/jpeg" && files[0].type !== "image/png") {
      uploaderError.value = "File type is not supported. Only GIF, JPEG or PNG";
      return;
    }

    image.value = files[0];
    emit('file-update', files[0])
  }
};
</script>