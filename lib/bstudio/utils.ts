export const cidRegex =
  /^(ipfs:\/\/)(Qm[1-9A-HJ-NP-Za-km-z]{44}|b[A-Za-z2-7]{58})/;

export function parseIpfsCid(value: string): string {
  const cidMatch = value.match(cidRegex);
  if (cidMatch) {
    return cidMatch[2];
  } else {
    throw new Error("Invalid IPFS CID");
  }
}
