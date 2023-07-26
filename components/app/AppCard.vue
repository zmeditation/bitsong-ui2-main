<template>
  <v-card v-bind="$attrs" variant="text" rounded="lg">
    <v-toolbar v-if="title || editable" color="transparent">
      <v-toolbar-title class="text-h5 font-weight-medium">{{
        title
      }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn v-if="editable" icon @click.stop="$emit('clickEdit')">
        <v-icon>mdi-pencil</v-icon>
      </v-btn>
    </v-toolbar>
    <v-card-text>
      <slot>
        {{ text }}
      </slot>
    </v-card-text>
  </v-card>
</template>

<script lang="ts" setup>
defineProps<{
  title?: string;
  text?: string;
  editable?: boolean;
}>();

defineEmits<{
  (e: "clickEdit"): void;
}>();
</script>
