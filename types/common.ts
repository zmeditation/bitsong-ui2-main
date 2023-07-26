export interface KVPair {
  key: string;
  value: string;
}

export interface Stepper {
  title: string;
  subtitle: string;
  status: "pending" | "loading" | "done" | "error";
  txHash?: string;
  errorMessage?: string | unknown;
}
