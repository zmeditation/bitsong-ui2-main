import { getSigningCosmwasmClientOptions } from "@bitsongjs/telescope";
import { SigningCosmWasmClient } from "@cosmjs/cosmwasm-stargate";
import { OfflineSigner } from "@cosmjs/proto-signing";
import { GasPrice, defaultRegistryTypes } from "@cosmjs/stargate";
import { ChainInfo } from "@keplr-wallet/types";

interface SetupWalletResponse {
  address: string;
  name?: string;
  isLedger?: boolean;
  client: SigningCosmWasmClient;
  offlineSigner: OfflineSigner;
}

export async function setupKeplr(
  chainInfo: ChainInfo
): Promise<SetupWalletResponse> {
  if (!window.keplr) {
    throw new Error("Please install keplr extension");
  }

  if (!window.keplr.experimentalSuggestChain) {
    throw new Error("Please use the recent version of keplr extension");
  }

  await window.keplr.experimentalSuggestChain(chainInfo);
  await window.keplr.enable(chainInfo.chainId);
  const key = await window.keplr.getKey(chainInfo.chainId);

  const offlineSigner = await window.keplr.getOfflineSigner(chainInfo.chainId);

  const { registry, aminoTypes } = getSigningCosmwasmClientOptions({
    defaultTypes: defaultRegistryTypes,
  });

  const client = await SigningCosmWasmClient.connectWithSigner(
    chainInfo.rpc,
    offlineSigner,
    {
      registry,
      aminoTypes,
      prefix: chainInfo.bech32Config.bech32PrefixAccAddr,
      gasPrice: GasPrice.fromString("1ubtsg"),
    }
  );

  return {
    address: key.bech32Address,
    name: key.name,
    isLedger: key.isNanoLedger,
    client,
    offlineSigner,
  };
}
