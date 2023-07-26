<template>
  <v-navigation-drawer
    :permanent="mdAndUp"
    :temporary="mdAndDown"
    v-model="drawer"
  >
    <template #prepend>
      <div class="d-flex pt-3 pb-1 pl-4">
        <div><app-logo> </app-logo></div>
        <div class="ml-3 text-h5 mt-1">Studio</div>
      </div>
    </template>

    <v-list v-model:opened="opened" nav>
      <v-list-item
        v-for="(item, i) in navItems"
        :key="i"
        :value="item"
        :to="item.to"
        :prepend-icon="item.prependIcon"
        :active="
          item.to && item.to !== '/' ? route.path.startsWith(item.to) : false
        "
        exact
        rounded="lg"
      >
        <v-list-item-title class="text-body-1">
          {{ item.title }}
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { useAppStore } from "@/store/app";
import { storeToRefs } from "pinia";
import { useDisplay } from "vuetify/lib/framework.mjs";

const { mdAndUp, mdAndDown } = useDisplay();

const route = useRoute();

const { items: navItems, drawer } = storeToRefs(useAppStore());

const opened = ref<string[]>([]);

onBeforeMount(() => {
  drawer.value = mdAndUp.value;
});
</script>
