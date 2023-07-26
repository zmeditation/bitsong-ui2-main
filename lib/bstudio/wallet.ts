import { ChainInfo } from "@keplr-wallet/types";
import { SetupWalletResponse, WalletType } from "./types";

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

  const { name, bech32Address, isNanoLedger } = await window.keplr.getKey(
    chainInfo.chainId
  );

  window.addEventListener("keplr_keystorechange", () => {
    console.log("keplr_keystorechange");
  });

  return {
    name,
    address: bech32Address,
    isLedger: isNanoLedger,
  };
}

export async function setupLeapWallet(
  chainInfo: ChainInfo
): Promise<SetupWalletResponse> {
  if (!window.leap) {
    throw new Error("Please install leap wallet extension");
  }

  if (!window.leap.experimentalSuggestChain) {
    throw new Error("Please use the recent version of leap extension");
  }

  await window.leap.experimentalSuggestChain(chainInfo);
  await window.leap.enable(chainInfo.chainId);

  const { name, bech32Address, isNanoLedger } = await window.leap.getKey(
    chainInfo.chainId
  );

  window.addEventListener("leap_keystorechange", () => {
    console.log("leap_keystorechange");
  });

  return {
    name,
    address: bech32Address,
    isLedger: isNanoLedger,
  };
}

export async function setupCosmostation(
  chainInfo: ChainInfo
): Promise<SetupWalletResponse> {
  if (!window.cosmostation) {
    throw new Error("Please install cosmostation extension");
  }

  if (!window.cosmostation.providers.keplr.experimentalSuggestChain) {
    throw new Error("Please use the recent version of leap extension");
  }

  await window.cosmostation.providers.keplr.experimentalSuggestChain(chainInfo);
  await window.cosmostation.providers.keplr.enable(chainInfo.chainId);

  const { name, bech32Address, isNanoLedger } =
    await window.cosmostation.providers.keplr.getKey(chainInfo.chainId);

  window.cosmostation.cosmos.on("accountChanged", () =>
    console.log("cosmostation_keystorechange")
  );

  return {
    name,
    address: bech32Address,
    isLedger: isNanoLedger,
  };
}

export async function signArbitrary(
  walletType: WalletType,
  chainId: string,
  address: string,
  message: string
): Promise<any> {
  switch (walletType) {
    case "keplr":
      return await window?.keplr?.signArbitrary(chainId, address, message);
    case "leap":
      return await window?.leap?.signArbitrary(chainId, address, message);
    case "cosmostation":
      return await window?.cosmostation?.providers?.keplr?.signArbitrary(
        chainId,
        address,
        message
      );
    default:
      throw new Error("Wallet not supported");
  }
}
