import { acceptHMRUpdate } from "pinia";
import { bitsong } from "@bitsongjs/telescope";
import {
  MsgIssue,
  MsgMint,
  MsgBurn,
  MsgSetUri,
  MsgSetAuthority,
  MsgSetMinter,
} from "@bitsongjs/telescope/types/codegen/bitsong/fantoken/v1beta1/tx";
import { FantokenState } from "~~/types/fantoken";
import useKeplrStore from "./keplr";
import useNetworkStore from "./network";

const { createRPCQueryClient } = bitsong.ClientFactory;
const {
  issue: msgIssue,
  setUri: msgSetUri,
  mint: msgMint,
  burn: msgBurn,
  setAuthority: msgSetAuthority,
  setMinter: msgSetMinter,
} = bitsong.fantoken.v1beta1.MessageComposer.withTypeUrl;

const useFantokenStore = defineStore("fantoken", {
  state: (): FantokenState => ({
    params: undefined,
  }),
  actions: {
    async loadParams() {
      try {
        const client = await createRPCQueryClient({
          rpcEndpoint: useNetworkStore().currentNetwork.rpc,
        });
        const response = await client.bitsong.fantoken.v1beta1.params();

        this.params = response.params;
      } catch (error) {
        console.error(error);
      }
    },
    async issue(payload: MsgIssue) {
      try {
        return useKeplrStore().signAndBroadcast([msgIssue(payload)]);
      } catch (error) {
        console.error(error);
      }
    },
    async setUri(payload: MsgSetUri) {
      try {
        return useKeplrStore().signAndBroadcast([msgSetUri(payload)]);
      } catch (error) {
        console.error(error);
      }
    },
    async mint(payload: MsgMint) {
      try {
        return useKeplrStore().signAndBroadcast([msgMint(payload)]);
      } catch (error) {
        console.error(error);
      }
    },
    async burn(payload: MsgBurn) {
      try {
        return useKeplrStore().signAndBroadcast([msgBurn(payload)]);
      } catch (error) {
        console.error(error);
      }
    },
    async setAuthority(payload: MsgSetAuthority) {
      try {
        return useKeplrStore().signAndBroadcast([msgSetAuthority(payload)]);
      } catch (error) {
        console.error(error);
      }
    },
    async setMinter(payload: MsgSetMinter) {
      try {
        return useKeplrStore().signAndBroadcast([msgSetMinter(payload)]);
      } catch (error) {
        console.error(error);
      }
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useFantokenStore, import.meta.hot));
}

export default useFantokenStore;
