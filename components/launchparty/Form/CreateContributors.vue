<template>
  <v-row class="mt-6">
    <v-col cols="12" md="5">
      <h6 class="text-subtitle-1">{{ label }}</h6>
      <p class="text-grey text-subtitle-2 font-weight-regular">
        {{ required ? "Required *" : "" }}
        <br v-if="description && required" />
        {{ description ?? null }}
      </p>
    </v-col>
    <v-col cols="12" md="7" :class="{ 'pt-0': mdAndDown }">
      <v-row class="align-center">
        <v-col cols="12" v-for="(groupedContributor, i) of results" :key="i">
          <div class="text-h6 text-grey">
            {{ groupedContributor.role }}
          </div>
          <div class="d-flex flex-wrap">
            <div
              class="my-2 mr-4"
              v-for="contributor in groupedContributor.contributors"
              :key="contributor.address"
            >
              {{ formatShortAddress(contributor.address, 6) }}
              <v-chip size="small" class="mt-n1 ml-2" variant="outlined">
                {{ contributor.share }}
              </v-chip>
              <v-btn
                icon="mdi-delete"
                color="grey"
                variant="text"
                class="mt-n1"
                size="small"
                @click.stop="delContributor(contributor.address)"
              ></v-btn>
            </div>
          </div>
        </v-col>
      </v-row>
      <v-row class="pt-0">
        <v-col cols="12" class="pt-0">
          <v-btn
            class="mt-4"
            prepend-icon="mdi-plus"
            variant="text"
            @click.stop="dialogContributor = true"
          >
            Add contributor
          </v-btn>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
  <launchparty-dialog-add-contributor
    v-model="dialogContributor"
    @success="addContributor"
  >
  </launchparty-dialog-add-contributor>
</template>

<script lang="ts" setup>
import { useDisplay } from "vuetify";
import { Contributors, Contributor } from "~/lib/bstudio/types";

const { mdAndDown } = useDisplay();

const props = defineProps<{
  name: string;
  label: string;
  description?: string;
  required?: boolean;
  contributors: Contributors;
}>();

const emit = defineEmits<{
  (e: "update:contributors", value: Contributors): void;
}>();

const dialogContributor = ref(false);
let contributors: Contributors = [...props.contributors];

const addContributor = (contributor: Contributor) => {
  if (contributors.find((c) => c.address === contributor.address)) {
    return;
  }

  contributors.push({
    address: contributor.address,
    role: contributor.role,
    share: contributor.share,
  });

  emit("update:contributors", contributors);

  groupedContributors();
};

const delContributor = (address: string) => {
  contributors = contributors.filter(
    (contributor) => contributor.address !== address
  );
  emit("update:contributors", contributors);

  groupedContributors();
};

const results = ref<
  | {
      role: string;
      contributors: {
        address: string;
        role: string;
        share: string;
      }[];
    }[]
  | undefined
>();

const groupedContributors = () => {
  const grouped = contributors.reduce((acc, contributor) => {
    if (!acc[contributor.role]) {
      acc[contributor.role] = [];
    }
    acc[contributor.role].push(contributor);
    return acc;
  }, {} as Record<string, Array<Contributor>>);

  const totalShares = contributors.reduce(
    (acc, contributor) => Number(acc) + Number(contributor.share),
    0
  );

  results.value = Object.keys(grouped).map((key) => ({
    role: key,
    contributors: grouped[key].map((contributor) => ({
      address: contributor.address,
      role: contributor.role,
      share: `${Math.round((Number(contributor.share) / totalShares) * 100)}%`,
    })),
  }));
};

onMounted(() => {
  groupedContributors();
});
</script>
