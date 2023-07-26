<template>
  <app-page>
    <template v-slot:title> Welcome to bStudio </template>
    <template v-slot:body>
      <p>
        bStudio is a platform for creating and managing your own Fan Tokens and
        NFTs. It is built on top of the BitSong blockchain. You can create your
        own Fan Token or NFT and sell it to your fans through the BitSong
        marketplace. You can also buy Fan Tokens and NFTs from other artists and
        support them.
      </p>
      <v-container fluid class="px-0 mt-4">
        <v-row>
          <v-col cols="12" md="4" class="py-6" v-for="card in cards">
            <v-card :nuxt-link="card.link ? true : false" :to="card.link">
              <v-card-title class="d-flex justify-space-between">
                <div>{{ card.title }}</div>
                <div>
                  <v-chip
                    v-if="card.comingSoon"
                    size="small"
                    variant="outlined"
                  >
                    Coming soon
                  </v-chip>
                  <v-icon v-else> mdi-chevron-right </v-icon>
                </div>
              </v-card-title>
              <v-card-text class="pb-5 pt-1">
                {{ card.description }}
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </template>
  </app-page>
</template>

<script lang="ts" setup>
interface Card {
  title: string;
  description: string;
  link?: string | undefined;
  comingSoon: boolean;
}

const cards: Card[] = [
  {
    title: "Fan Tokens",
    description:
      "Fan Tokens are a new type of cryptocurrency that can be used to reward your fans for their support. You can create your own Fan Token and sell it to your fans through dex on Cosmos Ecosystem.",
    link: "/fantokens",
    comingSoon: false,
  },
  {
    title: "NFTs",
    description:
      "NFTs are a new type of digital asset that can be used to represent ownership of a digital file. You can create your own NFT and sell it to your fans through the BitSong marketplace. You can also buy NFTs from other artists and support them.",
    link: "/nfts",
    comingSoon: false,
  },
  {
    title: "Marketplace",
    description:
      "The BitSong marketplace is a place where you can buy and sell NFTs. It is built on top of the BitSong blockchain. You can buy NFTs from other artists and support them. You can also sell your own NFTs to your fans.",
    link: undefined,
    comingSoon: true,
  },
  {
    title: "Music NFTs",
    description:
      "Music NFTs are a new type of digital asset that can be used to represent ownership of a digital file. You can create your own Music NFT and sell it to your fans through the BitSong marketplace. You can also buy Music NFTs from other artists and support them.",
    link: undefined,
    comingSoon: true,
  },
  {
    title: "Podcast NFTs",
    description:
      "Podcast NFTs are a new type of digital asset that can be used to represent ownership of a digital file. You can create your own Podcast NFT and sell it to your fans through the BitSong marketplace. You can also buy Podcast NFTs from other artists and support them.",
    link: undefined,
    comingSoon: true,
  },
  {
    title: "LaunchParty NFTs",
    description:
      "LaunchParty is a platform for creating and managing your own Music NFTs. It is built on top of the BitSong blockchain. You can create your own Fan Token or NFT and sell it to your fans through the BitSong marketplace. You can also buy Fan Tokens and NFTs from other artists and support them.",
    link: undefined,
    comingSoon: true,
  },
];
</script>
