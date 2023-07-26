<template>
  <app-page>
    <template v-slot:title> Create Fantoken </template>
    <template v-slot:body>
      <div class="d-flex flex-wrap flex-row">
        <div class="v-col-6 me-auto">
          <v-form @submit.prevent="onSave">
            <app-section-title class="mb-4">General</app-section-title>

            <app-form-avatar-upload
              class="mb-6"
              @file-update="fileUpdated"
            ></app-form-avatar-upload>

            <app-form-label
              label="Name"
              description="Enter the name of the fantoken, e.g. Adam Clay Fan Token"
            ></app-form-label>
            <app-form-text-field
              name="name"
              placeholder="Name"
              v-model="values.name"
            ></app-form-text-field>

            <app-form-label
              label="Symbol"
              description="Enter the symbol of the fantoken, usually 3-4 characters, e.g. FAN"
            ></app-form-label>
            <app-form-text-field
              name="symbol"
              placeholder="Symbol"
              v-model="values.symbol"
            ></app-form-text-field>

            <app-form-label
              label="Max Supply"
              description="Enter the max supply of the fantoken, e.g. 1000000000, mean 1
                                                                                                                                                                                                                                                                              billion. After the creation of the fantoken, you can not change the max supply."
            ></app-form-label>
            <app-form-text-field
              name="max_supply"
              type="number"
              placeholder="Max Supply"
              v-model="values.max_supply"
            ></app-form-text-field>

            <app-form-label
              label="Authority"
              description="The authority is the address of the account that can edit the fantoken informations, if you leave it empty, the authority will be the address of the account that created the fantoken."
            ></app-form-label>
            <app-form-text-field
              name="authority"
              placeholder="Authority"
              v-model="values.authority"
            ></app-form-text-field>

            <app-form-label
              label="Minter"
              description="The minter is the address of the account that can mint the fantoken, if you leave it empty, the minter will be the address of the account that created the fantoken."
            ></app-form-label>
            <app-form-text-field
              name="minter"
              placeholder="Minter"
              v-model="values.minter"
            ></app-form-text-field>

            <app-section-title class="mb-4">Metadata</app-section-title>
            <app-form-label
              label="Biography"
              description="Write a brief description of your biography, including your achievements, your influences, and future goals."
            ></app-form-label>
            <app-form-text-area
              v-model="values.metadata!.biography"
              placeholder="Description"
            ></app-form-text-area>

            <app-form-label
              label="Project Info"
              description="Write a brief summary of your fantoken project in 3 or 4 rows."
            ></app-form-label>
            <app-form-text-area
              v-model="values.metadata!.projectInfo"
              placeholder="Description"
            ></app-form-text-area>

            <app-section-title class="mb-4">Links</app-section-title>
            <app-form-links
              v-model="(values.metadata!.links as KVPair[])"
            ></app-form-links>

            <v-alert type="warning" class="my-4 text-body-2" variant="outlined">
              A fee of 1,000 BTSG will be charged for the creation of the
              fantoken
            </v-alert>

            <!-- add an error alert -->
            <v-alert
              v-if="Object.keys(formErrors).length"
              type="error"
              color="red"
              class="my-4 text-body-2 font-weight-bold"
            >
              Please, correct the form errors and try again.
            </v-alert>

            <div class="pt-4 text-right">
              <v-btn small variant="text" to="/fantokens">Cancel</v-btn>
              <v-btn color="primary" small :disable="loading" type="submit"
                >Continue</v-btn
              >
            </div>
          </v-form>

          <v-dialog v-model="dialog" persistent max-width="400px">
            <v-card>
              <v-toolbar color="transparent">
                <v-toolbar-title>Follow the steps</v-toolbar-title>
                <v-btn icon @click.stop="onCloseDialog">
                  <v-icon size="small">mdi-close</v-icon>
                </v-btn>
              </v-toolbar>
              <div class="d-flex flex-wrap flex-column pt-0 pa-4">
                <div class="d-flex flex-no-wrap pb-4">
                  <v-icon
                    class="pt-2 mr-2"
                    :color="currentStep === 0 ? `grey-darken-2` : `primary`"
                    >mdi-check</v-icon
                  >
                  <div>
                    <div
                      class="text-h6"
                      :class="{ 'text-grey-darken-2': currentStep > 0 }"
                    >
                      Upload metadata
                    </div>
                    <div
                      class="text-body-2 pb-2 text-grey"
                      :class="{
                        'text-grey-darken-2': currentStep > 0,
                      }"
                    >
                      Upload the metadata of the fantoken to IPFS the
                      interplanatery file system.
                    </div>
                    <!-- for each gqlErrors, show message -->
                    <v-alert
                      v-if="gqlErrors"
                      type="error"
                      class="my-4 text-body-2"
                      variant="outlined"
                    >
                      <ul>
                        <li v-for="error in gqlErrors">{{ error.message }}</li>
                      </ul>
                    </v-alert>
                    <v-btn
                      class="pt-1"
                      :loading="currentStep === 0 && loading ? loading : false"
                      block
                      :disabled="currentStep !== 0"
                      :variant="currentStep === 0 ? undefined : `outlined`"
                      rounded="pill"
                      color="primary"
                      @click.stop="uploadMetadata"
                      >Upload metadata</v-btn
                    >
                  </div>
                </div>

                <div class="d-flex flex-no-wrap pb-4">
                  <v-icon class="pt-2 mr-2" color="grey-darken-2"
                    >mdi-check</v-icon
                  >
                  <div>
                    <div
                      class="text-h6"
                      :class="{ 'text-grey-darken-2': currentStep > 1 }"
                    >
                      Issue Fantoken
                    </div>
                    <div
                      class="text-body-2 pb-2 text-grey"
                      :class="{
                        'text-grey-darken-2': currentStep > 1,
                      }"
                    >
                      The fantoken will be issued to the BitSong blockchain.
                    </div>
                    <v-alert
                      v-if="errors[2]"
                      type="error"
                      class="my-4 text-body-2"
                      variant="outlined"
                    >
                      {{ errors[2] }}
                    </v-alert>
                    <v-btn
                      class="pt-1"
                      :loading="currentStep === 1 && issuing ? issuing : false"
                      block
                      :disabled="currentStep !== 1"
                      :variant="currentStep !== 1 ? `outlined` : undefined"
                      rounded="pill"
                      color="primary"
                      @click.stop="issueFantoken"
                      >Issue fantoken</v-btn
                    >
                  </div>
                </div>
              </div>
            </v-card>
          </v-dialog>
        </div>
      </div>
    </template>
  </app-page>
</template>

<script setup lang="ts">
import { useAuthStore } from "@/store/auth";
import useFantokenStore from "@/store/fantoken";
import { useForm } from "vee-validate";
import {
  schemaValidatorFantokenInput,
  FantokenCreateInput,
} from "@/types/fantoken";
import { KVPair } from "~~/types";
import { FantokenUploadMetadataDocument } from "@/gql/bstudio/client/graphql";
import { useLazyQuery, useMutation } from "@vue/apollo-composable";
import { GetFantokenDocument } from "~~/gql/subql/client/graphql";

const router = useRouter();

const fantokenStore = useFantokenStore();
const dialog = ref<boolean>(false);
const errors = ref<{ [key: number]: string | undefined }>({});
const gqlErrors = ref();
const metadataCid = ref<string>("");
const issuing = ref<boolean>(false);

const currentStep = ref<number>(0);

definePageMeta({
  middleware: ["auth"],
});

const {
  handleSubmit,
  errors: formErrors,
  values,
  setValues,
} = useForm<FantokenCreateInput>({
  initialValues: {
    name: "",
    symbol: "",
    max_supply: 0,
    authority: useAuthStore().getAddress,
    minter: useAuthStore().getAddress,
    metadata: {
      image: undefined,
      upload: undefined,
      biography: undefined,
      projectInfo: undefined,
      links: [] as KVPair[],
    },
  },
  validationSchema: schemaValidatorFantokenInput,
});

const onSave = await handleSubmit(async () => {
  try {
    onOpenDialog();
  } catch (e) {
    console.error(e);
  }
});

const removeEmptyLinks = () => {
  if (values.metadata) {
    values.metadata.links = values.metadata?.links?.filter((link) => {
      return link.key !== "" && link.value !== "";
    });
  }
};

const onOpenDialog = () => {
  dialog.value = true;
  removeEmptyLinks();
};

const onCloseDialog = () => {
  dialog.value = false;
  errors.value = {};
  gqlErrors.value = undefined;
  currentStep.value = 0;
};

const fileUpdated = (f: File) => {
  setValues({
    ...values,
    metadata: {
      ...values.metadata,
      upload: f,
    },
  });
};

const uploadMetadata = async () => {
  gqlErrors.value = undefined;
  errors.value[1] = undefined;
  try {
    const result = await fantokenUploadMetadata({
      metadata: values.metadata ? values.metadata : {},
    });
    if (result?.data?.fantokenUploadMetadata) {
      console.log(result.data);
      metadataCid.value = result?.data?.fantokenUploadMetadata;
      currentStep.value = 1;
    }
  } catch (e) {
    console.error(e);
  }
};

const issueFantoken = async () => {
  errors.value[2] = undefined;
  issuing.value = true;
  try {
    const result = await fantokenStore.issue({
      name: values.name,
      symbol: values.symbol,
      maxSupply: values.max_supply.toString(),
      authority: values.authority!,
      minter: values.minter!,
      uri: metadataCid.value,
    });
    if (Number(result?.code) !== 0) {
      errors.value[2] = result?.rawLog;
    } else {
      if (result?.events) {
        for (const event of result?.events) {
          if (event.type === "bitsong.fantoken.v1beta1.EventIssue") {
            for (const attribute of event.attributes) {
              if (attribute.key === "denom") {
                const denom = attribute.value.slice(1, -1);
                router.push(
                  `/fantokens/${denom}?waitForHeight=${result.height}`
                );
              }
            }
          }
        }
      } else {
        console.log("no events", result);
      }
      console.log("result", result);
    }
  } catch (e: any) {
    errors.value[2] = e;
    console.error(e);
  } finally {
    issuing.value = false;
  }
};

const {
  mutate: fantokenUploadMetadata,
  loading,
  onError,
  onDone,
} = useMutation(FantokenUploadMetadataDocument, {
  errorPolicy: "all",
  clientId: "bstudio",
});

onDone((response) => {
  if (response.errors) {
    gqlErrors.value = response.errors;
  }
});
onError((error) => {
  console.log("on error", error);
});
</script>
