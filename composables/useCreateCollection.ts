import { z } from "zod";
import { FilePondFile } from "filepond";
import { useForm } from "vee-validate";
import { toFormValidator } from "@vee-validate/zod";
import { NftCollectionUploadMetadataDocument } from "@/gql/bstudio/client/graphql";
import { useMutation } from "@vue/apollo-composable";
import { cosmwasm } from "@bitsongjs/telescope";
import { InstantiateMsg } from "@bitsongjs/telescope/types/codegen/Bs721Base.types";
import Long from "long";
import { toUtf8 } from "@cosmjs/encoding";
import useKeplrStore from "~~/store/keplr";
import { useWalletStore } from "~~/store/wallet";

const DEFAULT_CODE_ID = 7;
const { instantiateContract: msgInstantiateContract } =
  cosmwasm.wasm.v1.MessageComposer.withTypeUrl;

export interface CreateCollectionRequest {
  image?: FilePondFile[] | null;
  cover?: FilePondFile[] | null;
  name: string;
  symbol: string;
  description?: string;
}

export function useCreateCollection() {
  const validationSchema = toFormValidator(
    z.object({
      image: z.array(z.any()).length(1),
      //cover: z.array(z.any()).length(1),
      name: z.string().min(1, "Name is a required field"),
      symbol: z.string().min(1, "Symbol is a required field"),
      description: z.string().min(1, "Description is a required field"),
    })
  );

  const initialValues: CreateCollectionRequest = {
    image: [],
    cover: [],
    name: "",
    symbol: "",
    description: "",
  };

  const {
    handleSubmit,
    errors: formErrors,
    values: formValues,
    resetForm: resetFormValues,
  } = useForm<CreateCollectionRequest>({
    initialValues,
    validationSchema,
  });

  const {
    mutate: nftCollectionUploadMetadata,
    loading: nftCollectionUploadMetadataLoading,
    onError: nftCollectionUploadMetadataOnError,
    onDone: nftCollectionUploadMetadataOnDone,
  } = useMutation(NftCollectionUploadMetadataDocument, {
    errorPolicy: "all",
    clientId: "bstudio",
  });

  const { signAndBroadcast } = useWalletStore();

  async function createCollection(payload: InstantiateMsg) {
    return await signAndBroadcast([
      msgInstantiateContract({
        codeId: Long.fromNumber(DEFAULT_CODE_ID),
        label: "BS721-Base Contract",
        sender: payload.minter,
        msg: toUtf8(JSON.stringify(payload)),
        admin: "",
        funds: [],
      }),
    ]);
  }

  return {
    nftCollectionUploadMetadata,
    nftCollectionUploadMetadataLoading,
    nftCollectionUploadMetadataOnError,
    nftCollectionUploadMetadataOnDone,
    initialValues,
    handleSubmit,
    formErrors,
    formValues,
    resetFormValues,
    createCollection,
  };
}
