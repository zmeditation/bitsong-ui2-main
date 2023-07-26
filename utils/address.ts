import { fromBech32 } from "@cosmjs/encoding";
import { Data } from "cosmjs-types/tendermint/types/types";

export const isValidPrefix = (
  address: string,
  requiredPrefix: string
): boolean => {
  try {
    const { prefix } = fromBech32(address);

    return prefix === requiredPrefix;
  } catch {
    return false;
  }
};

export const isValidLength = (address: string, length: number): boolean => {
  try {
    const { data } = fromBech32(address);

    return data.length === length;
  } catch {
    return false;
  }
};

export const isValidAddress = (
  address: string,
  requiredPrefix: string
): boolean => {
  return isValidPrefix(address, requiredPrefix) && isValidLength(address, 20);
};

export const isValidContractAddress = (
  address: string,
  requiredPrefix: string
): boolean => {
  return isValidPrefix(address, requiredPrefix) && isValidLength(address, 32);
};

export const isValidContractAddressOrAddress = (
  address: string,
  requiredPrefix: string
): boolean => {
  return (
    isValidPrefix(address, requiredPrefix) &&
    (isValidLength(address, 32) || isValidLength(address, 20))
  );
};

export const formatShortAddress = (address: string | undefined, end = 4) => {
  if (!address) {
    return "Address Not Found";
  }

  const splitted = address.split("1");

  return `${splitted.shift() ?? ""}1...${address.slice(-end)}`;
};

export const formatShort = (value: string | undefined, slice = 4) => {
  if (!value) {
    return "Not Found";
  }

  return `${value.slice(0, slice)}...${value.slice(-slice)}`;
};
