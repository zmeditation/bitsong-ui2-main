export interface KeplrState {
  name: string,
  address: string,
  isLedger: boolean,
  status: WalletStatus,
  txHash: string,
  errorMessage: string,
}

export enum WalletStatus {
  NotReady = "NotReady",
  Ready = "Ready",
  Loading = "Loading",
  Broadcasting = "Broadcasting",
  Success = "Success",
  Error = "Error",
}