<template>
  <v-btn @click.stop="storeBlob">Store Blob</v-btn>
  <v-btn @click.stop="storeDirectory"> Store Directory </v-btn>
  <v-btn @click.stop="store"> Store </v-btn>
</template>

<script lang="ts" setup>
import { NFTStorage } from "nft.storage";
import useWalletStore from "~/store/wallet";

const { getToken, generateToken } = useWalletStore();

if (!getToken) {
  await generateToken();
}

const client = new NFTStorage({
  token: getToken!,
  //token:
  //"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDRlRTE2MkQ5RkZDNzk4YzAwZGFFQUVmNTlkOTk3REZlRDE5RjAyZEYiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY4MTM5MjU4NTA2NiwibmFtZSI6InRlc3QgbnV4dCJ9.AIWavaJ5AUWbtq1GUMIrcAd2_1FkjJl6tBPPBZQVsvc",
  endpoint: new URL("http://localhost:8181"),
});

const storeBlob = async () => {
  // bafkreifzjut3te2nhyekklss27nh3k72ysco7y32koao5eei66wof36n5e
  // https://bafkreifzjut3te2nhyekklss27nh3k72ysco7y32koao5eei66wof36n5e.ipfs.dweb.link/
  // https://bafkreifzjut3te2nhyekklss27nh3k72ysco7y32koao5eei66wof36n5e.ipfs.nftstorage.link/
  // https://bafkreifzjut3te2nhyekklss27nh3k72ysco7y32koao5eei66wof36n5e.ipfs.cf-ipfs.com/

  // bafkreihzhqqlgalr2ehhopoculmo2wksjms3vxptqg4d7tcoyqhvbpw3gm
  // https://bafkreihzhqqlgalr2ehhopoculmo2wksjms3vxptqg4d7tcoyqhvbpw3gm.ipfs.dweb.link/
  // https://bafkreihzhqqlgalr2ehhopoculmo2wksjms3vxptqg4d7tcoyqhvbpw3gm.ipfs.nftstorage.link/
  // https://bafkreihzhqqlgalr2ehhopoculmo2wksjms3vxptqg4d7tcoyqhvbpw3gm.ipfs.cf-ipfs.com/

  // bafkreichnf7i74rz63fxhn5pv64mqlgiljhvprt3y7b2kviwzxmzrjxyyy
  // https://bafkreichnf7i74rz63fxhn5pv64mqlgiljhvprt3y7b2kviwzxmzrjxyyy.ipfs.dweb.link/
  // https://bafkreichnf7i74rz63fxhn5pv64mqlgiljhvprt3y7b2kviwzxmzrjxyyy.ipfs.nftstorage.link/
  // https://bafkreichnf7i74rz63fxhn5pv64mqlgiljhvprt3y7b2kviwzxmzrjxyyy.ipfs.cf-ipfs.com/

  const cid = await client.storeBlob(new Blob(["hello world3"]));
  console.log(cid);
};

const storeDirectory = async () => {
  const cid = await client.storeDirectory([
    new File(["hello world"], "hello.txt"),
    new File(["hello world2"], "hello2.txt"),
  ]);

  console.log(cid);
};

const store = async () => {
  const cid = await client.store({
    name: "My NFT",
    description: "My first NFT",
    image: new File(["hello world"], "hello.txt"),
    decimals: 0,
    localization: {
      default: "en",
      locales: ["en", "es"],
      uri: "https://ipfs.io/ipfs/QmXg...",
    },
    properties: {
      files: [
        {
          uri: "https://ipfs.io/ipfs/QmXg...",
          type: "image/png",
        },
      ],
      category: "image",
    },
  });

  console.log(cid.data);
};
</script>
