<template>
  <v-card rounded="lg">
    <v-list bg-color="transparent">
      <v-list-item title="Authority" :subtitle="authority || ''">
        <template v-slot:append>
          <app-btn-copy :text="authority!"></app-btn-copy>
          <v-btn
            v-if="authorityEditable"
            @click.stop="$emit('clickEditAuthority')"
            color="grey-lighten-1"
            icon="mdi-pencil"
            size="small"
            variant="text"
          ></v-btn>
        </template>
      </v-list-item>
      <v-list-item title="Minter" :subtitle="minter || ''">
        <template v-slot:append>
          <app-btn-copy :text="minter!"></app-btn-copy>
          <v-btn
            v-if="minterEditable"
            @click.stop="$emit('clickEditMinter')"
            color="grey-lighten-1"
            icon="mdi-pencil"
            size="small"
            variant="text"
          ></v-btn>
        </template>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script lang="ts" setup>
defineProps<{
  authority?: string | null;
  minter?: string | null;
  authorityEditable: boolean;
  minterEditable: boolean;
}>();

defineEmits<{
  (e: "update:modelValue", value: boolean): void;
  (e: "clickEditAuthority"): void;
  (e: "clickEditMinter"): void;
}>();
</script>
