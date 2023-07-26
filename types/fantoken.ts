import { Params as FantokenParams } from "@bitsongjs/telescope/types/codegen/bitsong/fantoken/v1beta1/params";
import { toFormValidator } from "@vee-validate/zod";
import * as zod from "zod";
import { z } from "zod";
import { KVPair } from "./common";

export interface FantokenState {
  params?: FantokenParams;
}

export const MAX_IMAGE_BYTES = 5242880;
export const VALID_IMAGE_MIME_TYPES = ["image/gif", "image/jpeg", "image/png"];

export const schemaValidatorFantokenInput = toFormValidator(
  zod.object({
    /*logo: zod.instanceof(File).superRefine((file, ctx) => {
      if (file.size > MAX_IMAGE_BYTES) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: `Image is too large. Max size is ${MAX_IMAGE_BYTES / (1024*1024)}MB`,
        });
      }
      if (!VALID_IMAGE_MIME_TYPES.includes(file.type)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: `Invalid file type. Must be one of ${VALID_IMAGE_MIME_TYPES.join(
            ", "
          )}`,
        });
      }
    }),*/
    metadata: zod.object({
      image: zod.any().superRefine((file: File, ctx) => {
        if (file && file.size > MAX_IMAGE_BYTES) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: `Image is too large. Max size is ${
              MAX_IMAGE_BYTES / (1024 * 1024)
            }MB`,
          });
        }
        if (file && !VALID_IMAGE_MIME_TYPES.includes(file.type)) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: `Invalid file type. Must be one of ${VALID_IMAGE_MIME_TYPES.join(
              ", "
            )}`,
          });
        }
      }),
      biography: zod.string().optional(),
      projectInfo: zod.string().optional(),
      links: zod
        .array(
          zod.object({
            key: zod.string().min(1, "Key is required"),
            value: zod.string().min(1, "Value is required"),
          })
        )
        .optional(),
    }),
    name: zod.string().min(1, "Name is required"),
    symbol: zod.string().min(1, "Symbol is required"),
    max_supply: zod.number().min(1, "Max must be greater than 0"),
  })
);

export interface FantokenCreateInput {
  name: string;
  symbol: string;
  max_supply: number;
  authority?: string;
  minter?: string;
  metadata?: FantokenMetadataInput;
}

export interface FantokenMetadataInput {
  upload?: File;
  image?: string;
  biography?: string;
  projectInfo?: string;
  links?: KVPair[];
}
