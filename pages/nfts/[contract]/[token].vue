<template>
  <app-page :show-title="!smAndDown">
    <template v-slot:body>
      <v-row>
        <v-col cols="12" md="8">
          <v-img
            class="mx-auto rounded-xl"
            :src="
              result?.nft?.metadata?.image
                ? `${proxyImage(replaceIpfsPrefix(result?.nft?.metadata?.image), 1000)}`
                : '/images/default.png'
            "
            cover
            max-height="650"
            max-width="650"
          >
          </v-img>
        </v-col>
        <v-col cols="12" md="4">
          <v-row>
            <v-col cols="12">
              <div
                class="align-center d-flex"
                @click="router.push(`/nfts/${result?.nft?.collectionId}`)"
                style="cursor: pointer"
              >
                <v-avatar size="32">
                  <v-img
                    height="32"
                    cover
                    :src="`${proxyImage(replaceIpfsPrefix(result?.nft?.collection?.image), 32)}`"
                  >
                  </v-img>
                </v-avatar>
                <span class="text-h6 font-weight-regular ml-2">
                  {{ result?.nft?.collection?.name }}
                </span>
                <v-icon class="ml-2" size="x-small" color="blue">
                  mdi-check-decagram
                </v-icon>
              </div>
            </v-col>
            <v-col cols="12">
              <div class="text-h5 font-weight-medium">
                {{ result?.nft?.metadata?.name }}
              </div>
              <div
                v-if="result?.nft?.metadata?.description"
                class="text-body-1 mt-4 text-grey"
              >
                {{ result?.nft?.metadata?.description }}
              </div>
            </v-col>
            <v-col cols="12">
              <v-row>
                <v-col cols="6">
                  <div class="d-flex align-center">
                    <div>
                      <div class="text-caption text-grey text-uppercase">
                        Creator
                        <v-icon
                          v-if="smAndDown"
                          class="ml-2 mt-n1"
                          size="small"
                          color="blue"
                        >
                          mdi-check-decagram
                        </v-icon>
                      </div>

                      <div class="text-body-1">
                        <nuxt-link
                          :to="`/user/${result?.nft?.collection?.creatorId}`"
                          class="text-decoration-none text-white"
                        >
                          <span>{{
                            formatShortAddress(
                              result?.nft?.collection?.creatorId,
                              8
                            )
                          }}</span>
                        </nuxt-link>
                        <v-icon
                          v-if="!smAndDown"
                          class="mt-n2 ml-2"
                          size="x-small"
                          color="blue"
                        >
                          mdi-check-decagram
                        </v-icon>
                      </div>
                    </div>
                  </div>
                </v-col>
                <v-col cols="6">
                  <div class="d-flex align-center">
                    <div>
                      <div class="text-caption text-grey text-uppercase">
                        Current Owner
                        <v-icon
                          v-if="smAndDown"
                          class="ml-2 mt-n1"
                          size="small"
                          color="blue"
                        >
                          mdi-check-decagram
                        </v-icon>
                      </div>
                      <div class="text-body-1">
                        <nuxt-link
                          :to="`/user/${result?.nft?.ownerId}`"
                          class="text-decoration-none text-white"
                        >
                          <span>{{
                            formatShortAddress(result?.nft?.ownerId, 8)
                          }}</span>
                        </nuxt-link>
                        <v-icon
                          v-if="!smAndDown"
                          class="mt-n2 ml-2"
                          size="x-small"
                          color="blue"
                        >
                          mdi-check-decagram
                        </v-icon>
                      </div>
                    </div>
                  </div>
                </v-col>
                <v-col cols="6" v-if="result?.nft?.paymentAddress">
                  <div class="d-flex align-center">
                    <div>
                      <div class="text-caption text-grey text-uppercase">
                        Royalties Address
                      </div>
                      <div class="text-body-1">
                        {{ formatShortAddress(result?.nft?.paymentAddress, 8) }}
                      </div>
                    </div>
                  </div>
                </v-col>
                <v-col cols="6" v-if="result?.nft?.sellerFee">
                  <div class="d-flex align-center">
                    <div>
                      <div class="text-caption text-grey text-uppercase">
                        Royalties Fees
                      </div>
                      <div class="text-body-1">
                        {{ result?.nft?.sellerFee }} %
                      </div>
                    </div>
                  </div>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12">
                  <div
                    class="d-flex align-center"
                    v-if="result?.nft?.metadata?.image"
                  >
                    <v-icon class="mr-2" size="x-small" color="blue">
                      mdi-eye
                    </v-icon>
                    <a
                      target="_blank"
                      :href="replaceIpfsPrefix(result?.nft?.metadata?.image)"
                      class="text-body-1 text-blue text-decoration-none"
                    >
                      Open original
                    </a>
                    <v-icon class="ml-2" size="x-small" color="blue">
                      mdi-open-in-new
                    </v-icon>
                  </div>
                </v-col>
              </v-row>
              <v-row
                class="mt-4"
                v-if="result?.nft?.metadata?.attributes?.length > 0"
              >
                <v-col
                  cols="6"
                  v-for="attribute in result?.nft?.metadata?.attributes"
                >
                  <v-card variant="outlined" style="border-color: gray">
                    <v-card-text>
                      <div class="text-caption text-grey text-uppercase">
                        {{ attribute.trait_type }}
                      </div>
                      <div class="text-body-1">{{ attribute.value }}</div>
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-col>
      </v-row>

      <v-row v-if="result?.nft?.collection?.nfts.totalCount">
        <v-col cols="12">
          <div class="text-h5 font-weight-medium py-5">More from this collection</div>
          <nft-grid :nfts="result?.nft?.collection?.nfts.edges"></nft-grid>
        </v-col>
      </v-row>
    </template>
  </app-page>
</template>

<script lang="ts" setup>
import { useQuery } from "@vue/apollo-composable";
import { useDisplay } from "vuetify/lib/framework.mjs";
import { GetNftDocument } from "~~/gql/subql/client/graphql";

const route = useRoute();
const router = useRouter();

const { smAndDown } = useDisplay();

const collectionId = route.params.contract as string;
const nftId = route.params.token as string

const { result } = useQuery(GetNftDocument, {
  id: `${collectionId}-${nftId}`,
});
</script>
