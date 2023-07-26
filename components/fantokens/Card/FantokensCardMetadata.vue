<template>
  <v-card v-bind="$attrs" rounded="lg">
    <v-list bg-color="transparent">
      <v-list-item title="Metadata URI" :subtitle="uri">
        <template v-slot:append>
          <app-btn-copy :text="uri!"></app-btn-copy>
          <v-btn
            target="_blank"
            :href="replaceIpfsPrefix(uri)"
            color="grey-lighten-1"
            icon="mdi-open-in-new"
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
  uri: string | undefined;
}>();
</script>
