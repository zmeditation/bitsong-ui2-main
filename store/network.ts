import { defineStore, acceptHMRUpdate } from "pinia";
import { mainnetConfig, testnetConfig, ChainInfo } from "~~/types/network";
import { useToast } from "vue-toastification";

const toast = useToast();

export interface NetworkState {
  networks: ChainInfo[];
  selected: number;
}

export const useNetworkStore = defineStore("network", {
  state: (): NetworkState => ({
    networks: [testnetConfig],
    selected: 0,
  }),
  actions: {
    selectNetwork(chainId: string) {
      const index = this.networks.findIndex((n) => n.chainId === chainId);
      if (index === -1) {
        const msg = `Chain Id${chainId} not found`;
        toast.error(msg);
        throw new Error(msg);
      }
      this.selected = index;
    },
    getByChainId(chainId: string): ChainInfo | undefined {
      return this.networks.find((n) => n.chainId === chainId);
    },
  },
  getters: {
    currentNetwork(): ChainInfo {
      return this.networks[this.selected];
    },
    allNetworks(): ChainInfo[] {
      return this.networks;
    },
  },
  persist: true,
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useNetworkStore, import.meta.hot));
}

export default useNetworkStore;
