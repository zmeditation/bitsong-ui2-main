<template>
  <app-page>
    <template v-slot:title> Create a new NFT </template>
    <template v-slot:body>
      <v-row class="mb-12">
        <v-col cols="12" md="8">
          <p class="text-grey">
            Create a new NFT, which will be added to your collection.
          </p>

          <form @submit.prevent="onSubmit">
            <v-row class="mt-8">
              <v-col cols="12" md="5">
                <h6 class="text-subtitle-1">NFT type</h6>
                <p class="text-grey text-subtitle-2 font-weight-regular">
                  Choose the type of NFT you want to create
                </p>
              </v-col>
              <v-col cols="12" md="7" :class="{ 'pt-0': mdAndDown }">
                <v-chip-group color="primary" v-model="nftType">
                  <v-chip
                    prepend-icon="mdi-image"
                    size="large"
                    class="mr-4"
                    value="image"
                  >
                    Image
                  </v-chip>

                  <v-chip
                    prepend-icon="mdi-music"
                    size="large"
                    class="mr-4"
                    value="audio"
                  >
                    Audio
                  </v-chip>

                  <v-chip prepend-icon="mdi-video" size="large" value="video">
                    Video
                  </v-chip>
                </v-chip-group>
              </v-col>
            </v-row>

            <v-row
              :class="{ 'mt-8': !mdAndDown }"
              v-if="nftType === 'video' || nftType === 'audio'"
            >
              <v-col cols="12" md="5">
                <h6 class="text-subtitle-1">
                  {{ nftType === "video" ? "Video" : "Audio" }}
                </h6>
                <p class="text-grey text-subtitle-2 font-weight-regular">
                  Upload {{ nftType === "video" ? "a" : "an" }} {{ nftType }}
                  for your NFT
                </p>
              </v-col>
              <v-col cols="12" md="7" :class="{ 'pt-0': mdAndDown }">
                <Field name="media" v-slot="{ field, errors }">
                  <app-form-file-picker
                    name="media"
                    :placeholder="`Drop ${nftType} file here...`"
                    alternative
                    :file-types="fileTypes"
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
                <h6 class="text-subtitle-1">Image</h6>
                <p class="text-grey text-subtitle-2 font-weight-regular">
                  Upload an image for your NFT
                </p>
              </v-col>
              <v-col cols="12" md="7" :class="{ 'pt-0': mdAndDown }">
                <Field name="image" v-slot="{ errors }">
                  <app-form-file-picker
                    name="image"
                    placeholder="Drop image file here..."
                    alternative
                    file-types="image/jpeg, image/png, image/webp"
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

            <v-divider class="my-8"></v-divider>

            <h2 class="text-h5">NFT details</h2>
            <p class="text-grey">
              Add details about your NFT, such as name, description
            </p>

            <v-row class="mt-6">
              <v-col cols="12" md="5">
                <h6 class="text-subtitle-1">Collection</h6>
                <p class="text-grey text-subtitle-2 font-weight-regular">
                  Required *
                </p>
              </v-col>
              <v-col cols="12" md="7" :class="{ 'pt-0': mdAndDown }">
                <Field name="contract" v-slot="{ field, errors }">
                  <v-select
                    v-bind="field"
                    :loading="myCollectionsLoading"
                    v-model="selectedCollection"
                    :disabled="myCollectionsLoading"
                    :items="myCollections?.collections?.edges"
                    item-title="node.name"
                    item-value="node.id"
                    variant="outlined"
                    :error-messages="errors"
                  >
                    <template v-slot:chip="{ props, item }">
                      <v-list-item
                        v-bind="props"
                        :prepend-avatar="
                          proxyImage(
                            replaceIpfsPrefix(item?.raw?.node?.image),
                            100
                          )
                        "
                        :title="item?.raw?.node?.name"
                        :subtitle="formatShortAddress(item?.raw?.node?.id, 20)"
                        class="pa-0"
                      ></v-list-item>
                    </template>

                    <template v-slot:item="{ props, item }">
                      <v-list-item
                        v-bind="props"
                        :prepend-avatar="
                          proxyImage(
                            replaceIpfsPrefix(item?.raw?.node?.image),
                            100
                          )
                        "
                        :title="item?.raw?.node?.name"
                        :subtitle="formatShortAddress(item?.raw?.node?.id, 20)"
                      ></v-list-item>
                    </template>
                  </v-select>
                </Field>
                <v-btn
                  class="mt-n4"
                  prepend-icon="mdi-plus"
                  variant="text"
                  size="small"
                  to="/create/collection"
                >
                  Create new collection
                </v-btn>
              </v-col>
            </v-row>

            <v-row class="mt-6">
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
              <v-col cols="12" md="5">
                <h6 class="text-subtitle-1">Attributes</h6>
                <p class="text-grey text-subtitle-2 font-weight-regular pr-4">
                  Use attributes to highlight the uniqueness of your NFT traits.
                </p>
              </v-col>
              <v-col cols="12" md="7" :class="{ 'pt-0': mdAndDown }">
                <v-row
                  class="align-center"
                  v-for="(attribute, i) in attributes"
                  :key="`${attribute.trait_type}-${i}`"
                >
                  <v-col cols="10">
                    <v-card variant="outlined" style="border-color: grey">
                      <v-card-text>
                        <div class="text-caption font-weight-medium text-grey">
                          {{ attribute.trait_type }}
                        </div>
                        <div>
                          {{ attribute.value }}
                        </div>
                      </v-card-text>
                    </v-card>
                  </v-col>
                  <v-col cols="2">
                    <v-btn
                      class="mt-n2"
                      icon="mdi-delete"
                      variant="text"
                      @click.stop="removeAttribute(i)"
                    >
                    </v-btn>
                  </v-col>
                </v-row>

                <v-btn
                  class="mt-4"
                  prepend-icon="mdi-plus"
                  variant="text"
                  @click.stop="dialogAttribute = true"
                >
                  Add attribute
                </v-btn>

                <nft-dialog-add-attribute
                  v-model="dialogAttribute"
                  @success="addAttribute"
                >
                </nft-dialog-add-attribute>
              </v-col>
            </v-row>

            <v-divider class="my-8"></v-divider>

            <h2 class="text-h5">NFT royalties</h2>
            <p class="text-grey">
              Receive a royalty every time your NFT is sold on the marketplace.
            </p>

            <v-row class="mt-6">
              <v-col cols="12" md="5">
                <h6 class="text-subtitle-1">Royalty Fee %</h6>
                <p class="text-grey text-subtitle-2 font-weight-regular">
                  Required *
                </p>
              </v-col>
              <v-col cols="12" md="7" :class="{ 'pt-0': mdAndDown }">
                <Field name="royaltyFeeBps" v-slot="{ field, errors }">
                  <v-text-field
                    v-bind="field"
                    type="number"
                    placeholder="Royalty Fee Bps"
                    variant="outlined"
                    :error-messages="errors"
                  ></v-text-field>
                </Field>
              </v-col>
            </v-row>

            <v-row class="mt-6">
              <v-col cols="12" md="5">
                <h6 class="text-subtitle-1">Royalty Recipient</h6>
                <p class="text-grey text-subtitle-2 font-weight-regular">
                  This is the address that will receive the royalties.
                </p>
              </v-col>
              <v-col cols="12" md="7" :class="{ 'pt-0': mdAndDown }">
                <Field name="paymentAddress" v-slot="{ field, errors }">
                  <v-text-field
                    v-bind="field"
                    placeholder="Royalty Recipient"
                    variant="outlined"
                    :error-messages="errors"
                  ></v-text-field>
                </Field>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="12">
                <Field name="termsAndConditions" v-slot="{ field, errors }">
                  <v-checkbox
                    v-bind="field"
                    label="I understand that is only a test, the software is not ready for production use."
                    v-model="formValues.termsAndConditions"
                    :error-messages="errors"
                    :value="1"
                  >
                  </v-checkbox>
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
            <app-indexing-alert
              v-if="indexing"
              class="my-4"
            ></app-indexing-alert>

            <v-row>
              <v-col cols="12" class="text-right">
                <v-btn outlined variant="text" @click.stop="resetFormValues">
                  Cancel
                </v-btn>
                <v-btn
                  color="primary"
                  class="mr-4"
                  type="submit"
                  :loading="loading"
                >
                  Create Nft
                </v-btn>
              </v-col>
            </v-row>
          </form>
        </v-col>
      </v-row>
    </template>
  </app-page>
</template>

<script lang="ts" setup>
import { useLazyQuery, useMutation } from "@vue/apollo-composable";
import { storeToRefs } from "pinia";
import { Field } from "vee-validate";
import { contracts } from "@bitsongjs/telescope";
import { NftUploadMetadataDocument } from "~~/gql/bstudio/client/graphql";
import { GetNftDocument } from "~~/gql/subql/client/graphql";

import useWalletStore from "~~/store/wallet";
import { useDisplay } from "vuetify/lib/framework.mjs";

const { mdAndDown } = useDisplay();

const { Bs721BaseClient } = contracts.Bs721Base;

const router = useRouter();

const {
  handleSubmit,
  formValues,
  resetFormValues,
  reset,
  loading,
  indexing,
  error,
  nftType,
  dialogAttribute,
  attributes,
  addAttribute,
  removeAttribute,
  selectedCollection,
  myCollections,
  myCollectionsLoading,
} = await useCreateNft();

const fileTypes = computed(() => {
  if (nftType.value === "video") {
    return "video/mp4, video/mpeg, video/ogg";
  } else {
    return "audio/webm, audio/mpeg";
  }
});

const { mutate: nftUploadMetadata } = await useMutation(
  NftUploadMetadataDocument,
  {
    errorPolicy: "all",
    clientId: "bstudio",
  }
);

const {
  result: nft,
  variables: varNft,
  load: loadNft,
  refetch: refetchNft,
  error: errorNft,
} = useLazyQuery(
  GetNftDocument,
  {
    id: "",
  },
  {
    fetchPolicy: "network-only",
    clientId: "default",
  }
);

const { signAndBroadcast, getClient, getQueryClient } = useWalletStore();
const { address } = storeToRefs(useWalletStore());

const onSubmit = handleSubmit(async (values) => {
  try {
    reset();
    loading.value = true;

    const result = await nftUploadMetadata({
      metadata: {
        name: values.name,
        description: values.description,
        image: values.image?.[0]?.file ?? null,
        media: values.media?.[0]?.file ?? null,
        attributes: attributes.value,
      },
    });

    const convertSellerFeeBps = (value: number) => {
      return value * 100;
    };

    const bs721 = new Bs721BaseClient(
      await getClient(),
      address.value!,
      values.contract
    );

    const { count: numTokens } = await bs721.numTokens();
    const tokenId = `${numTokens + 1}`;

    const txResult = await bs721.mint({
      owner: address.value!,
      tokenId,
      tokenUri: result?.data?.nftUploadMetadata
        ? `ipfs://${result?.data?.nftUploadMetadata}`
        : undefined,
      paymentAddr: values.paymentAddress,
      sellerFeeBps: convertSellerFeeBps(values.royaltyFeeBps ?? 0),
      extension: {},
    });

    if (!txResult) {
      throw new Error("Failed to create nft");
    }

    indexing.value = true;

    // query nft
    varNft.value = {
      id: `${values.contract}-${tokenId}`,
    };
    await loadNft();

    let retry = 0;
    while (
      (nft.value?.nft === undefined || nft.value.nft === null) &&
      retry < 3
    ) {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      await refetchNft();
      retry++;
    }

    if (errorNft.value) {
      throw new Error(errorNft.value.message);
    }

    if (nft.value?.nft === undefined || nft.value.nft === null) {
      throw new Error("Failed to create nft");
    }

    router.push(`/nfts/${values.contract}/${tokenId}`);
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
