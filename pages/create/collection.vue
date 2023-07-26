<template>
  <app-page>
    <template v-slot:title> Create a new NFT Collection </template>
    <template v-slot:body>
      <v-row class="mb-12">
        <v-col cols="12" md="8">
          <h2 class="text-h5">Graphic</h2>
          <p class="text-grey">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          </p>

          <v-row class="mt-8">
            <v-col cols="5">
              <h6 class="text-subtitle-1">Collection Logo</h6>
              <p class="text-grey text-subtitle-2 font-weight-regular">
                Upload a logo for your collection
              </p>
            </v-col>
            <v-col cols="7">
              <Field name="image" v-slot="{ errors }">
                <app-form-file-picker
                  name="image"
                  placeholder="Drop logo file here..."
                  alternative
                  variant="avatar"
                  :image-resize-target-width="150"
                  :image-resize-target-height="150"
                  width="150"
                  height="150"
                >
                </app-form-file-picker>

                <v-alert
                  v-if="errors.length"
                  color="red"
                  variant="text"
                  class="mt-4"
                >
                  <ul>
                    <li v-for="error in errors" :key="error">
                      {{ error }}
                    </li>
                  </ul>
                </v-alert>
              </Field>
            </v-col>
          </v-row>

          <v-row :class="{ 'mt-8': !mdAndDown }">
            <v-col cols="12" md="5">
              <h6 class="text-subtitle-1">Cover Image</h6>
              <p class="text-grey text-subtitle-2 font-weight-regular">
                Upload a cover image for your collection (optional)
              </p>
            </v-col>
            <v-col cols="12" md="7" :class="{ 'pt-0': mdAndDown }">
              <app-form-file-picker
                name="cover"
                placeholder="Drop image file here..."
                alternative
              >
              </app-form-file-picker>
            </v-col>
          </v-row>

          <v-divider class="my-8"></v-divider>

          <h2 class="text-h5">Collection details</h2>
          <p class="text-grey">
            Add details about your collection, such as name, description, and
            symbol
          </p>

          <v-row class="mt-6">
            <v-col cols="5">
              <h6 class="text-subtitle-1">Symbol</h6>
              <p class="text-grey text-subtitle-2 font-weight-regular">
                Required *
              </p>
            </v-col>
            <v-col cols="7">
              <Field name="symbol" v-slot="{ field, errors }">
                <v-text-field
                  v-bind="field"
                  placeholder="Symbol"
                  variant="outlined"
                  :error-messages="errors"
                ></v-text-field>
              </Field>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" md="5">
              <h6 class="text-subtitle-1">Name</h6>
              <p class="text-grey text-subtitle-2 font-weight-regular">
                Required *
              </p>
            </v-col>
            <v-col cols="12" md="7" :class="{ 'pt-0': mdAndDown }">
              <Field name="name" v-slot="{ field, errors }">
                <v-text-field
                  v-bind="field"
                  placeholder="Name"
                  variant="outlined"
                  :error-messages="errors"
                ></v-text-field>
              </Field>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" md="5">
              <h6 class="text-subtitle-1">Description</h6>
            </v-col>
            <v-col cols="12" md="7" :class="{ 'pt-0': mdAndDown }">
              <Field name="description" v-slot="{ field, errors }">
                <v-textarea
                  v-bind="field"
                  placeholder="Description"
                  variant="outlined"
                  :error-messages="errors"
                ></v-textarea>
              </Field>
            </v-col>
          </v-row>

          <v-row>
            <v-alert
              type="error"
              class="my-4 text-body-2"
              variant="outlined"
              v-if="error !== ''"
            >
              {{ error }}
            </v-alert>
          </v-row>
          <app-indexing-alert v-if="indexing" class="my-4"></app-indexing-alert>

          <v-row>
            <v-col cols="12" class="text-right">
              <v-btn outlined variant="text"> Cancel </v-btn>
              <v-btn
                color="primary"
                class="mr-4"
                type="submit"
                @click.stop="onSubmit"
                :loading="loading"
              >
                Create collection
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </template>
  </app-page>
</template>

<script lang="ts" setup>
import { logs } from "@cosmjs/stargate";
import { useLazyQuery } from "@vue/apollo-composable";
import { storeToRefs } from "pinia";
import { Field } from "vee-validate";
import { useCreateCollection } from "~~/composables/useCreateCollection.js";
import { GetCollectionDocument } from "~~/gql/subql/client/graphql";
import useWalletStore from "~~/store/wallet";
import { useDisplay } from "vuetify/lib/framework.mjs";

const { mdAndDown } = useDisplay();
const router = useRouter();
const { address } = storeToRefs(useWalletStore());

const loading = ref(false);
const indexing = ref(false);
const error = ref("");

const {
  handleSubmit,
  formValues,
  nftCollectionUploadMetadata,
  createCollection,
} = useCreateCollection();

function reset() {
  indexing.value = false;
  loading.value = false;
  error.value = "";
}

// query collection by contract address
const {
  result: collection,
  error: errorCollection,
  variables: varCollection,
  load: loadCollection,
  refetch: refetchCollection,
} = await useLazyQuery(
  GetCollectionDocument,
  {
    id: "",
  },
  {
    fetchPolicy: "network-only",
    clientId: "default",
  }
);

const onSubmit = handleSubmit(async () => {
  try {
    reset();
    loading.value = true;

    // upload metadata
    const result = await nftCollectionUploadMetadata({
      metadata: {
        name: formValues.name,
        description: formValues.description,
        symbol: formValues.symbol,
        image: formValues.image?.[0]?.file ?? null,
        cover: formValues.cover?.[0]?.file ?? null,
      },
    });

    // create on-chain collection
    const txResult = await createCollection({
      minter: address.value!,
      name: formValues.name,
      symbol: formValues.symbol,
      uri: `ipfs://${result?.data?.nftCollectionUploadMetadata}`,
    });

    if (txResult.code !== 0) {
      throw new Error("Failed to create collection");
    }

    indexing.value = true;

    // parse contract address
    const parsedLogs = logs.parseRawLog(txResult.rawLog);
    const contractAddr = logs.findAttribute(
      parsedLogs,
      "instantiate",
      "_contract_address"
    );

    // query collection by contract address
    varCollection.value = { id: contractAddr.value };
    await loadCollection();

    // if collection.value is undefined or null, then wait 3s and try again until it's not undefined or retry is 3
    let retry = 0;
    while (
      (collection.value?.collection === undefined ||
        collection.value.collection === null) &&
      retry < 3
    ) {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      await refetchCollection();
      retry++;
    }

    if (errorCollection.value) {
      throw new Error(errorCollection.value?.message);
    }

    if (
      collection.value?.collection === undefined ||
      collection.value.collection === null
    ) {
      throw new Error(
        "Collection has been created! It requires some time to be indexed."
      );
    }

    // redirect to collection page
    router.push(`/nfts/${collection.value.collection.id}`);
  } catch (e) {
    loading.value = false;
    indexing.value = false;
    if (e instanceof Error) {
      error.value = e.message;
    } else {
      error.value = "unknown error";
    }
  } finally {
    indexing.value = false;
    loading.value = false;
  }
});
</script>
