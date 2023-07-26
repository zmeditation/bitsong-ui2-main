<template>
  <v-card
    :style="`background-image: url(${headerUrl})`"
    class="align-center blurred-bg"
    :rounded="smAndDown ? false : 'xl'"
  >
    <div class="d-flex align-center content-header" style="height: 100%">
      <v-container fluid>
        <v-row>
          <v-col cols="12" md="3">
            <v-img
              :height="smAndDown ? '200px' : '250px'"
              :width="smAndDown ? '200px' : '250px'"
              cover
              class="mx-auto elevation-20"
              :src="artworkUrl"
            >
            </v-img>
          </v-col>
          <v-col cols="12" md="9" class="d-flex flex-row align-center">
            <div>
              <div class="d-flex align-center">
                <div :class="smAndDown ? 'text-h5' : 'text-h4'">
                  {{ title }}
                </div>
                <v-icon class="ml-2" size="small" color="blue">
                  mdi-check-decagram
                </v-icon>
              </div>

              <div :class="smAndDown ? 'text-body-2' : 'text-body-1'">
                <span>Created by </span>
                <nuxt-link
                  :to="`/user/${creator}`"
                  class="text-decoration-none text-white"
                >
                  <span>{{ formatShortAddress(creator, 8) }}</span>
                </nuxt-link>
                <v-icon class="ml-2 mt-n1" size="x-small" color="blue">
                  mdi-check-decagram
                </v-icon>
              </div>
              <div :class="smAndDown ? 'text-body-2' : 'text-body-1'">
                <span>Contract </span>
                <span>{{ formatShortAddress(contractAddress, 8) }}</span>
              </div>
              <div class="text-body-1" v-if="admin">
                <span>Admin </span>
                <span>{{ formatShortAddress(admin, 8) }}</span>
                <v-icon class="ml-2 mt-n1" size="x-small" color="blue">
                  mdi-check-decagram
                </v-icon>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </v-card>
</template>

<script lang="ts" setup>
import { useDisplay } from "vuetify";
const { smAndDown } = useDisplay();

defineProps<{
  title?: string;
  creator?: string;
  admin?: string;
  contractAddress?: string;
  artworkUrl?: string;
  headerUrl?: string;
}>();
</script>

<style>
.blurred-bg {
  background-size: cover;
  background-position: center;
  height: 50vh;
}

.content-header {
  background: rgba(2, 2, 2, 0.3);
  backdrop-filter: blur(80px);
}
</style>
