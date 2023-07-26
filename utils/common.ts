import { DeliverTxResponse } from "@cosmjs/stargate";

export const proxyImage = (url: string, wide: number = 200) => {
  if (!url || url === undefined) return "";
  return `https://pimg.sinfonia.zone/${wide}x/${url}`;
};

export const replaceIpfsPrefix = (url: string | undefined | null) => {
  if (!url || url === undefined) return "";
  if (!isCidV1OrV2(url)) return "";

  if (url.startsWith("ipfs://"))
    return url.replace("ipfs://", "https://bas-cdn.com/ipfs/");

  if (isCidV1OrV2(url)) return `https://bas-cdn.com/ipfs/${url}`;

  return url;
};

export const isCidV1OrV2 = (cid: string) => {
  if (cid.startsWith("ipfs://")) cid = cid.replace("ipfs://", "");
  return cid.startsWith("Qm") || cid.startsWith("bafy");
};

export const keyToIcon = (key: string) => {
  switch (key) {
    case "website":
      return "mdi-home";
    case "twitter":
      return "mdi-twitter";
    case "instagram":
      return "mdi-instagram";
    case "facebook":
      return "mdi-facebook";
    case "youtube":
      return "mdi-youtube";
    case "github":
      return "mdi-github";
    case "telegram":
      return "mdi-send";
    case "discord":
      return "mdi-message";
    case "medium":
      return "mdi-post";
    case "reddit":
      return "mdi-reddit";
    case "linkedin":
      return "mdi-linkedin";
    case "soundcloud":
      return "mdi-soundcloud";
    case "spotify":
      return "mdi-spotify";
    case "apple_music":
      return "mdi-apple";
    case "twitch":
      return "mdi-twitch";
    default:
      return "mdi-link";
  }
};

export const textShort = (value: string | undefined | null, slice = 10) => {
  if (!value) {
    return "Not Found";
  }

  if (value.length <= slice) {
    return value;
  }

  return `${value.slice(0, slice)}...`;
};

export const createSymbolTicker = (
  title: string,
  length: number = 3
): string => {
  const vowels = ["a", "e", "i", "o", "u"];
  let symbol = "";

  for (let i = 0; i < title.length; i++) {
    const char = title[i].toLowerCase();

    if (!vowels.includes(char)) {
      symbol += char;
    }

    if (symbol.length === length) {
      break;
    }
  }

  return symbol.toUpperCase();
};

export function createDeliverTxResponseErrorMessage(
  result: DeliverTxResponse
): string {
  return `Error when broadcasting tx ${result.transactionHash} at height ${result.height}. Code: ${result.code}; Raw log: ${result.rawLog}`;
}
