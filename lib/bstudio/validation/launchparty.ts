import { z } from "zod";
import { CID } from "multiformats/cid";
import { ContributorsValidator, EditionTypeValidator } from "./nft";
import { parseIpfsCid } from "../utils";

export const CreateLaunchpartyRequestValidator = z
  .object({
    audio: z
      .string()
      .trim()
      .nonempty()
      .refine(
        (value) => {
          try {
            //CID.parse(parseIpfsCid(value));
            CID.parse(value.replace("ipfs://", ""));
            return true;
          } catch (e) {
            return false;
          }
        },
        {
          message: "audio must be a valid ipfs cid",
        }
      ),
    artwork: z
      .string()
      .trim()
      .nonempty()
      .refine(
        (value) => {
          try {
            CID.parse(value.replace("ipfs://", ""));
            return true;
          } catch (e) {
            return false;
          }
        },
        {
          message: "artwork must be a valid ipfs cid",
        }
      ),
    title: z.string().trim().nonempty(),
    description: z.string().trim().nonempty(),
    genre: z.string().optional(),
    mood: z.string().optional(),
    lyrics: z.string().optional(),
    startDate: z.string().trim().nonempty(),
    editionType: EditionTypeValidator,
    maxEditions: z.number().int().positive(),
    priceEdition: z.string().trim().nonempty(),
    royaltyFeeBps: z.string().trim().nonempty(),
    contributors: ContributorsValidator,
  })
  .superRefine((data) => {
    if (data.editionType === "limited" && data.maxEditions === 0) {
      return {
        code: "invalid_data",
        message: "maxEditions must be greater than 0",
      };
    }
    return true;
  })
  .superRefine((data) => {
    if (data.editionType === "open" && data.maxEditions !== 0) {
      return {
        code: "invalid_data",
        message: "maxEditions must be 0",
      };
    }
    return true;
  });
