import { acceptHMRUpdate, defineStore } from "pinia";
import { Dec, IntPretty } from "@keplr-wallet/unit";
import { coins } from "@cosmjs/amino";
import { KeplrState, WalletStatus } from "@/types";
import {
  getSigningCosmwasmClient,
  getSigningCosmwasmClientOptions,
} from "@bitsongjs/telescope";
import {
  EncodeObject,
  GeneratedType,
  OfflineSigner,
} from "@cosmjs/proto-signing";
import useNetworkStore from "./network";
import { TxRaw } from "cosmjs-types/cosmos/tx/v1beta1/tx";
import { SigningCosmWasmClient } from "@cosmjs/cosmwasm-stargate";
import { GasPrice, HttpEndpoint, defaultRegistryTypes } from "@cosmjs/stargate";

const useKeplrStore = defineStore("keplr", {
  state: (): KeplrState => ({
    name: "",
    address: "",
    isLedger: false,
    status: WalletStatus.NotReady,
    txHash: "",
    errorMessage: "",
  }),
  actions: {
    async autoLogin() {
      if (this.isLoggedIn) {
        this.logIn();
      }
    },
    async closeDialog() {
      this.status = WalletStatus.Ready;
      this.txHash = "";
      this.errorMessage = "";
    },
    async logIn() {
      try {
        this.status = WalletStatus.Loading;
        await new Promise((resolve) => setTimeout(resolve, 300));

        if (!window.keplr) {
          throw new Error("Please install keplr extension");
        }

        if (!window.keplr.experimentalSuggestChain) {
          throw new Error("Please use the recent version of keplr extension");
        }

        const currentNetwork = useNetworkStore().currentNetwork;
        await window.keplr.experimentalSuggestChain(currentNetwork);

        const chainId = currentNetwork.chainId;

        await window.keplr.enable(chainId);

        const { name, bech32Address, isNanoLedger } = await window.keplr.getKey(
          chainId
        );
        this.name = name !== "" ? name : "-";
        this.address = bech32Address;
        this.isLedger = isNanoLedger;
        this.status = WalletStatus.Ready;
      } catch (error) {
        throw error;
      } finally {
        this.status = WalletStatus.Ready;
      }
    },
    async logOut() {
      this.name = "";
      this.address = "";
      this.isLedger = false;
      this.status = WalletStatus.NotReady;
    },
    async getSigningCosmwasmClient({
      rpcEndpoint,
      signer,
      defaultTypes = defaultRegistryTypes,
    }: {
      rpcEndpoint: string | HttpEndpoint;
      signer: OfflineSigner;
      defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
    }) {
      const { registry, aminoTypes } = getSigningCosmwasmClientOptions({
        defaultTypes,
      });
      const client = await SigningCosmWasmClient.connectWithSigner(
        rpcEndpoint,
        signer,
        {
          registry,
          aminoTypes,
          gasPrice: GasPrice.fromString("1ubtsg"),
        }
      );
      return client;
    },
    async getClient(): Promise<SigningCosmWasmClient> {
      if (!this.isLoggedIn || !window.keplr || this.getAddress === "") {
        throw new Error("Please log in with keplr");
      }

      try {
        this.status = WalletStatus.Loading;

        const currentNetwork = useNetworkStore().currentNetwork;
        await window.keplr.enable(currentNetwork.chainId);

        const offlineSigner = await window.keplr.getOfflineSignerAuto(
          currentNetwork.chainId
        );

        return this.getSigningCosmwasmClient({
          rpcEndpoint: currentNetwork.rpc,
          signer: offlineSigner,
        });
      } catch (error) {
        throw error;
      } finally {
        this.status = WalletStatus.Ready;
      }
    },
    async signAndBroadcast(msgs: EncodeObject[]) {
      if (!this.isLoggedIn || !window.keplr || this.getAddress === "") {
        throw new Error("Please log in with keplr");
      }
      try {
        const client = await this.getClient();
        this.status = WalletStatus.Loading;

        const gasEstimated = await client.simulate(this.getAddress, msgs, "");
        const fees = {
          amount: coins(1, "ubtsg"),
          gas: new IntPretty(new Dec(gasEstimated).mul(new Dec(1.3)))
            .maxDecimals(0)
            .locale(false)
            .toString(),
        };

        //const result = await client.signAndBroadcast(this.getAddress, msgs, fees)
        const txRaw = await client.sign(this.getAddress, msgs, fees, "");
        const txBytes = TxRaw.encode(txRaw).finish();

        this.status = WalletStatus.Broadcasting;
        const result = await client.broadcastTx(txBytes);

        // TODO: add broadcast error handling
        result.height;

        if (result.code === 0) {
          this.txHash = result.transactionHash;
          this.status = WalletStatus.Success;
        }

        return result;
      } catch (err: unknown) {
        this.status = WalletStatus.Error;

        if (err instanceof Error) {
          this.errorMessage = err.message;
        } else {
          this.errorMessage = "Unknown error";
        }

        throw err;
      }
    },
    async generateToken() {
      if (!this.isLoggedIn || !window.keplr || this.getAddress === "") {
        throw new Error("Please log in with keplr");
      }

      if (!window.btoa) {
        throw new Error("Please use a browser that supports btoa");
      }

      try {
        this.status = WalletStatus.Loading;

        const payload = {
          domain: "sinfonia.zone",
          expire_at: Math.round(Date.now() / 1000) + 3600, // seconds
        };

        const chainId = useNetworkStore().currentNetwork.chainId;
        const signedData = await window.keplr.signArbitrary(
          chainId,
          this.getAddress,
          JSON.stringify(payload)
        );

        const w3t = {
          signer: this.getAddress,
          payload,
          ...signedData,
        };

        this.status = WalletStatus.Ready;

        return window.btoa(JSON.stringify(w3t));
      } catch (error) {
        throw error;
      } finally {
        this.status = WalletStatus.Ready;
      }
    },
  },
  getters: {
    getAddress: (state) => state.address,
    getName: (state) => state.name,
    isLoggedIn: (state) => state.address !== "",
    getStatus: (state) => state.status,
  },
  persist: {
    storage: localStorage,
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useKeplrStore, import.meta.hot));
}

export default useKeplrStore;
