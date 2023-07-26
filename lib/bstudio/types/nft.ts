import { z } from "zod";
import {
  ContributorValidator,
  ContributorRoleValidator,
  ContributorsValidator,
  EditionTypeValidator,
} from "../validation/nft";

interface NftApi {
  burn: () => Promise<string>;
  createCollection: () => Promise<string>;
  createLaunchparty: () => Promise<string>;
  mint: () => Promise<string>;
  transfer: () => Promise<string>;
  uploadCollectionMetadata: (metadata: string) => Promise<string>;
  uploadNftMetadata: (metadata: string) => Promise<string>;
  uploadLaunchpartyMetadata: (metadata: string) => Promise<string>;
}

export type ContributorRole = z.infer<typeof ContributorRoleValidator>;
export type Contributor = z.infer<typeof ContributorValidator>;
export type Contributors = z.infer<typeof ContributorsValidator>;

export type EditionType = z.infer<typeof EditionTypeValidator>;
