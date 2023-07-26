import { FilePondFile } from "filepond";
import { Contributors } from "~/lib/bstudio/types/nft";

export interface CreateLaunchpartyForm {
  audio: FilePondFile[];
  artwork: FilePondFile[];
  title: string;
  description: string;
  genre?: string;
  mood?: string;
  lyrics?: string;
  startDate: string;
  editionType: "limited" | "open";
  maxEditions?: string;
  duration?: string;
  priceEdition: string;
  royaltyFeeBps: string;
  contributors: Contributors;
  termsAndConditions: number;
}
