<template>
  <div class="text-decoration-none">
    <v-breadcrumbs :items="crumbs" class="text-decoration-none">
      <template v-slot:prepend>
        <v-icon
          size="small"
          icon="mdi-home"
          color="grey"
          class="mt-n1 mr-4"
          @click.stop="router.push('/')"
        ></v-icon>
      </template>
      <template v-slot:divider>
        <v-icon icon="mdi-chevron-right"> </v-icon>
      </template>
    </v-breadcrumbs>
  </div>
</template>

<script setup lang="ts">
const router = useRouter();

const titles = reactive<{ [x: string]: any }>({});

const crumbs = reactive<Array<{ to: string; title: string }>>([]);
const segments = ref(router.currentRoute.value.path.split("/").filter(Boolean));

function updateCrumbs(segments: string[]) {
  crumbs.length = 0;
  segments.reduce((acc, segment) => {
    const to = `${acc}/${segment}`;
    const title =
      titles[segment] || segment[0].toUpperCase() + segment.slice(1);
    crumbs.push({
      to,
      title,
    });
    return to;
  }, "");
}

updateCrumbs(segments.value);

watch(router.currentRoute, (route) => {
  segments.value = route.path.split("/").filter(Boolean);
  updateCrumbs(segments.value);
});
</script>
