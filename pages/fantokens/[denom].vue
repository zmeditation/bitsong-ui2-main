<template>
  <app-page>
    <template v-slot:body>
      <app-indexing-alert v-if="showIndexingAlert" class="mb-8">
      </app-indexing-alert>

      <fantokens-metadata-alert
        v-if="metadataAlert"
        class="mb-8"
        :errors="metadataAlertErrors"
        :loading="metadataLoading"
        @cancel="onMetadataCancel"
        @save="onMetadataSave"
      ></fantokens-metadata-alert>

      <fantokens-detail-header
        :symbol="data.symbol"
        :name="data.name"
        :denom="data.denom"
        :logo="data.logo"
        :links="data.metadata.links"
        :authority="data.authority!"
        @logo-click="uploadLogoDialog = true"
      ></fantokens-detail-header>

      <v-row class="mt-4">
        <v-col :cols="!lgAndUp ? `12` : ``">
          <app-card
            class="mb-6"
            title="Biography"
            :editable="isAuthority"
            :text="data.metadata.biography"
            @click-edit="editBiographyDialog = true"
          ></app-card>

          <app-card
            title="Project Info"
            :editable="isAuthority"
            :text="data.metadata.projectInfo"
            @click-edit="editProjectInfoDialog = true"
          ></app-card>

          <app-card title="Links" v-if="isAuthority">
            <app-form-links
              v-model="(data.metadata.links as KVPair[])"
              @updated="metadataAlert = true"
            >
            </app-form-links>
          </app-card>
        </v-col>
        <v-col :cols="!lgAndUp ? `12` : `5`">
          <fantokens-card-supply
            :decimals="data.decimals"
            :total-supply="data.totalSupply"
            :max-supply="data.maxSupply"
            :mintable="isMinter"
            :burnable="isLoggedIn"
            @click-burn="burnDialog = true"
            @click-mint="mintDialog = true"
            class="mb-8"
          ></fantokens-card-supply>

          <fantokens-card-metadata
            class="mb-8"
            :uri="data.uri!"
          ></fantokens-card-metadata>

          <fantokens-card-keys
            :authority="data.authority || ''"
            :authority-editable="isAuthority"
            v-on:click-edit-authority="setAuthorityDialog = true"
            :minter="data.minter || ''"
            :minter-editable="isMinter"
            v-on:click-edit-minter="setMinterDialog = true"
          ></fantokens-card-keys>
        </v-col>
      </v-row>

      <fantokens-dialog-edit-biography
        v-if="editBiographyDialog"
        :biography="data.metadata.biography || ''"
        v-on:save="onBiographyUpdate"
        v-on:close="editBiographyDialog = false"
      >
      </fantokens-dialog-edit-biography>

      <fantokens-dialog-edit-project-info
        v-if="editProjectInfoDialog"
        :project-info="data.metadata.projectInfo || ''"
        v-on:save="onProjectInfoUpdate"
        v-on:close="editProjectInfoDialog = false"
      >
      </fantokens-dialog-edit-project-info>

      <fantokens-dialog-logo
        v-model="uploadLogoDialog"
        @save="onLogoUpdate"
      ></fantokens-dialog-logo>

      <fantokens-dialog-mint
        :denom="data.denom"
        :symbol="data.symbol"
        v-model="mintDialog"
        @success="onMint($event as number)"
      ></fantokens-dialog-mint>

      <fantokens-dialog-burn
        :denom="data.denom"
        :symbol="data.symbol"
        v-model="burnDialog"
        @success="onBurn($event as number)"
      ></fantokens-dialog-burn>
      <fantokens-dialog-set-authority
        v-model="setAuthorityDialog"
        :denom="data.denom"
        @success="onSetAuthority($event as number)"
      ></fantokens-dialog-set-authority>
      <fantokens-dialog-set-minter
        v-model="setMinterDialog"
        :denom="data.denom"
        @success="onSetMinter($event as number)"
      ></fantokens-dialog-set-minter>
    </template>
  </app-page>
</template>

<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { GetFantokenDocument } from "@/gql/subql/client/graphql";
import { FantokenUploadMetadataDocument } from "@/gql/bstudio/client/graphql";
import { KVPair } from "~~/types";
import useFantokenStore from "@/store/fantoken";
import useKeplrStore from "~~/store/keplr";
import { useMutation, useQuery } from "@vue/apollo-composable";
import { useDisplay } from "vuetify/lib/framework.mjs";

const { lgAndUp } = useDisplay();

const fantokenStore = useFantokenStore();

const keplrStore = useKeplrStore();
const { getAddress, isLoggedIn } = storeToRefs(keplrStore);

const route = useRoute();
const waitForHeight = route.query.waitForHeight as string | undefined;

const showIndexingAlert = ref(false);
const metadataAlert = ref(false);
const metadataAlertErrors = ref<string[]>([]);
const mintDialog = ref(false);
const burnDialog = ref(false);
const setAuthorityDialog = ref(false);
const setMinterDialog = ref(false);
const editBiographyDialog = ref(false);
const editProjectInfoDialog = ref(false);
const uploadLogoDialog = ref(false);

interface FantokenDetail {
  logo?: string;
  name: string;
  symbol: string;
  denom: string;
  uri?: string | null;
  decimals: number;
  totalSupply: number;
  maxSupply: number;
  authority?: string | null;
  minter?: string | null;
  metadata: {
    biography: string;
    projectInfo: string;
    links: KVPair[];
  };
  updatedHeight: number | undefined;
}

const data = reactive<FantokenDetail>({
  logo: "",
  name: "",
  symbol: "",
  denom: "",
  uri: "",
  decimals: 0,
  totalSupply: 0,
  maxSupply: 0,
  authority: "",
  minter: "",
  metadata: {
    biography: "",
    projectInfo: "",
    links: [],
  },
  updatedHeight: undefined,
});

const { onResult, refetch } = useQuery(
  GetFantokenDocument,
  {
    denom: route.params.denom as string,
  },
  {
    fetchPolicy: "network-only",
  }
);

const waitForHeightTriggered = ref(false);

onResult(async (value) => {
  if (!value) return;

  const fantoken = value.data.fantoken;
  if (!fantoken) {
    if (waitForHeight && waitForHeightTriggered.value === false) {
      showIndexingAlert.value = true;
      waitForHeightTriggered.value = true;
      await onRefresh(parseInt(waitForHeight));
    }

    return;
  }

  data.name = fantoken.name;
  data.logo = fantoken.metadata?.image || "";
  data.symbol = fantoken.symbol;
  data.denom = fantoken.id;
  data.uri = fantoken.uri;
  data.decimals = Number(6);
  data.totalSupply = Number(fantoken.supply);
  data.maxSupply = Number(fantoken.maxSupply);
  data.authority = fantoken.authorityId;
  data.minter = fantoken.minterId;
  data.metadata = {
    biography: fantoken.metadata?.biography?.toString() || "",
    projectInfo: fantoken.metadata?.projectInfo?.toString() || "",
    links:
      fantoken.metadata?.links?.map((link: { key: string; value: string }) => ({
        key: link!.key,
        value: link!.value,
      })) || [],
  };
  data.updatedHeight = fantoken.updatedHeight;
});

const onLogoUpdate = (value: string) => {
  data.logo = value;
  metadataAlert.value = true;
};

const onBiographyUpdate = (value: string) => {
  if (value === data.metadata.biography) return;

  data.metadata.biography = value;
  metadataAlert.value = true;
};

const onProjectInfoUpdate = (value: string) => {
  if (value === data.metadata.projectInfo) return;

  data.metadata.projectInfo = value;
  metadataAlert.value = true;
};

/** Upload Metadata */
const {
  mutate: fantokenUploadMetadata,
  loading: metadataLoading,
  onDone: onFantokenUploadMetadataDone,
  onError: onFantokenUploadMetadataError,
} = useMutation(FantokenUploadMetadataDocument, {
  errorPolicy: "all",
  clientId: "bstudio",
});

onFantokenUploadMetadataDone(async (response) => {
  if (response.errors) {
    metadataAlertErrors.value = response.errors.map((e: any) => e.message);
  } else {
    if (!response.data) return;

    const result = await fantokenStore.setUri({
      authority: data.authority!,
      denom: data.denom,
      uri: response.data.fantokenUploadMetadata,
    });

    if (result?.code === 0) {
      metadataAlert.value = false;
      metadataAlertErrors.value = [];
      await onRefresh(result.height);
    } else {
      metadataAlertErrors.value = [result?.rawLog || ""];
    }
  }
});
onFantokenUploadMetadataError((error: any) => {
  console.log("on error", error);
});

const onMetadataCancel = async () => {
  await refetch();
  metadataAlert.value = false;
};

const onMetadataSave = async () => {
  metadataAlertErrors.value = [];

  await fantokenUploadMetadata({
    metadata: {
      image: data.logo,
      biography: data.metadata.biography,
      projectInfo: data.metadata.projectInfo,
      links: data.metadata.links,
    },
  });
};

const onRefresh = async (height: number) => {
  showIndexingAlert.value = true;
  await refetch();
  if (data.updatedHeight && data.updatedHeight < height) {
    setTimeout(async () => {
      await onRefresh(height);
    }, 3000);
  } else {
    showIndexingAlert.value = false;
  }
};

const onMint = async (height: number) => {
  await onRefresh(height);
};
const onBurn = async (height: number) => {
  await onRefresh(height);
};
const onSetAuthority = async (height: number) => {
  await onRefresh(height);
};
const onSetMinter = async (height: number) => {
  await onRefresh(height);
};

const isAuthority = computed<boolean>(() => {
  return getAddress.value === data.authority;
});

const isMinter = computed<boolean>(() => {
  return getAddress.value === data.minter;
});
</script>
