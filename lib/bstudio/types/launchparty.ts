import { z } from "zod";
import { CreateLaunchpartyRequestValidator } from "../validation/launchparty";

export type CreateLaunchpartyRequest = z.infer<
  typeof CreateLaunchpartyRequestValidator
>;
