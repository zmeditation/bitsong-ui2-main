export interface SetupWalletResponse {
  name: string;
  address: string;
  isLedger: boolean;
}

export type WalletType = "keplr" | "leap" | "cosmostation";
