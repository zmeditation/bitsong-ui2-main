import { EncodeObject, OfflineSigner, parseCoins } from "@cosmjs/proto-signing";
import { GasPrice, defaultRegistryTypes } from "@cosmjs/stargate";
import {
  CosmWasmClient,
  SigningCosmWasmClient,
  DeliverTxResponse,
} from "@cosmjs/cosmwasm-stargate";
import { getSigningCosmwasmClientOptions } from "@bitsongjs/telescope";
import { TxRaw } from "cosmjs-types/cosmos/tx/v1beta1/tx";
import { Dec, IntPretty } from "@keplr-wallet/unit";

import { CreateStudioOptions, TokenPayload, WalletType } from "./types";
import { signArbitrary } from "./wallet";
import { StdFee } from "@keplr-wallet/types";
import { NFTStorage } from "nft.storage";

export const defaultCreateStudioOptions: CreateStudioOptions = {
  rpcUrl: "https://rpc.bwasmnet-1.bitsong.network",
  bech32Prefix: "bitsong",
  gasMultiplier: 1.3,
  gasPrice: "1ubtsg",
  web3TokenDomain: "sinfonia.zone",
  web3TokenTtl: 3600,
};
export async function createStudio(
  offlineSigner: OfflineSigner,
  options: CreateStudioOptions = defaultCreateStudioOptions
) {
  const [account] = await offlineSigner.getAccounts();

  const { registry, aminoTypes } = getSigningCosmwasmClientOptions({
    defaultTypes: defaultRegistryTypes,
  });

  const chain = await SigningCosmWasmClient.connectWithSigner(
    options.rpcUrl,
    offlineSigner,
    {
      registry,
      aminoTypes,
      prefix: options.bech32Prefix,
      gasPrice: GasPrice.fromString(options.gasPrice),
    }
  );

  const chainQueryClient = await CosmWasmClient.connect(options.rpcUrl);

  const generateToken = async (walletType: WalletType): Promise<String> => {
    try {
      const payload: TokenPayload = {
        domain: options!.web3TokenDomain,
        expire_at: Math.round(Date.now() / 1000) + options!.web3TokenTtl, // seconds
      };

      const signedPayload = await signArbitrary(
        walletType,
        await chain.getChainId(),
        account.address,
        JSON.stringify(payload)
      );

      if (typeof window !== "undefined") {
        return window.btoa(
          JSON.stringify({
            signer: account.address,
            payload,
            ...signedPayload,
          })
        );
      }

      return Buffer.from(
        JSON.stringify({
          signer: account.address,
          payload,
          ...signedPayload,
        })
      ).toString("base64");
    } catch (error) {
      throw error;
    }
  };

  const signAndBroadcast = async (
    msgs: EncodeObject[],
    memo: string = ""
  ): Promise<DeliverTxResponse> => {
    try {
      const gasEstimated = await chain.simulate(account.address, msgs, memo);

      const fees: StdFee = {
        amount: parseCoins(options!.gasPrice),
        gas: new IntPretty(
          new Dec(gasEstimated).mul(new Dec(options!.gasMultiplier))
        )
          .maxDecimals(0)
          .locale(false)
          .toString(),
      };

      const txRaw = await chain.sign(account.address, msgs, fees, memo);
      const txBytes = TxRaw.encode(txRaw).finish();

      return await chain.broadcastTx(txBytes);
    } catch (err: unknown) {
      throw err;
    }
  };

  const storage = async (
    token: string,
    endpoint: string = "http://localhost:8181"
  ) => {
    return new NFTStorage({
      token,
      endpoint: new URL(endpoint),
    });
  };

  return {
    account,
    chain,
    chainQueryClient,
    generateToken,
    signAndBroadcast,
    storage,
  };
}
