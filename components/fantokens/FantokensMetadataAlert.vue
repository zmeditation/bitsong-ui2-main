<template>
  <div>
    <v-alert color="primary" variant="outlined" v-bind="$attrs">
      <v-row>
        <v-col cols="12">
          You have unsaved metadata changes. Please save or cancel them before
          leaving this page.
        </v-col>
        <v-col cols="12">
          <v-btn
            :loading="loading"
            color="primary"
            size="small"
            text
            @click.stop="$emit('save')"
            >Save</v-btn
          >
          <v-btn
            :disabled="loading"
            color="grey"
            variant="text"
            class="mr-2"
            size="small"
            @click.stop="$emit('cancel')"
            >Cancel</v-btn
          >
        </v-col>
      </v-row>
    </v-alert>
    <v-alert v-if="errors.length" color="error" variant="outlined">
      <v-row>
        <v-col cols="12">
          <ul>
            <li v-for="error in errors" :key="error">{{ error }}</li>
          </ul>
        </v-col>
      </v-row>
    </v-alert>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  loading: boolean;
  errors: string[];
}>();
defineEmits<{
  (e: "cancel"): void;
  (e: "save"): void;
}>();
</script>
