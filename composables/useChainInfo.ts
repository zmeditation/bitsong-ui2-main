import { mainnetConfig, testnetConfig, ChainInfo } from "~~/types/network";

export function useChainInfo() {
  const runtime = useRuntimeConfig();

  const chainInfo = computed<ChainInfo>(() =>
    runtime.public.network === "mainnet" ? mainnetConfig : testnetConfig
  );

  return {
    chainInfo,
  };
}
