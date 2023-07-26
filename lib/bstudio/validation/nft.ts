import { z } from "zod";

export const ContributorRoleValidator = z.union([
  z.literal("Performer"),
  z.literal("Producer"),
  z.literal("Composer"),
  z.literal("Other"),
]);

export const ContributorValidator = z.object({
  address: z
    .string()
    .trim()
    .refine(
      (value) => isValidAddress(value, "bitsong"),
      "Recipient must be a valid bitsong address"
    ),
  role: ContributorRoleValidator,
  share: z.string().refine((value) => {
    if (isNaN(Number(value))) {
      return false;
    }

    const share = Number(value);
    return share >= 1 && share <= 10000;
  }, "Share must be a number between 1 and 10000"),
});

export const ContributorsValidator = z.array(ContributorValidator);

export const EditionTypeValidator = z.union([
  z.literal("limited"),
  z.literal("open"),
]);
