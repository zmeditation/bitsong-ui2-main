import { toFormValidator } from "@vee-validate/zod";
import { useQuery, useMutation } from "@vue/apollo-composable";
import { FilePondFile } from "filepond";
import { storeToRefs } from "pinia";
import { useField, useForm } from "vee-validate";
import { z } from "zod";
import { NftUploadMetadataDocument } from "~~/gql/bstudio/client/graphql";
import { GetCollectionsByUserDocument } from "~~/gql/subql/client/graphql";
import useAuthStore from "~~/store/auth";
import useWalletStore from "~~/store/wallet";

export interface CreateNftRequest {
  image?: FilePondFile[] | null;
  media?: FilePondFile[] | null;
  contract: string;
  name: string;
  description?: string;
  attributes?: Array<Attribute>;
  royaltyFeeBps?: number;
  paymentAddress?: string;
  termsAndConditions: number;
}

export interface Attribute {
  trait_type: string;
  value: string;
}

export type NFTMediaType = "audio" | "video" | "image";

export async function useCreateNft() {
  const { address } = storeToRefs(useWalletStore());

  const route = useRoute();

  const loading = ref(false);
  const indexing = ref(false);
  const error = ref("");
  const reset = () => {
    loading.value = false;
    indexing.value = false;
    error.value = "";
  };

  const termsAndConditions = useField("");

  const nftType = ref<NFTMediaType>("image");

  const validationSchema = computed(() =>
    toFormValidator(
      z.object({
        image: z.array(z.any()).length(1, "Image is a required field"),
        media:
          nftType.value === "image"
            ? z.any().optional()
            : z.array(z.any()).length(1, "Media is a required field"),
        contract: z
          .string()
          .min(1, "Contract is a required field")
          .refine((value) => isValidContractAddress(value, "bitsong"), {
            message: "Invalid contract address",
          }),
        name: z
          .string()
          .min(1, "Name is a required field")
          .max(100, "Name is too long"),
        description: z.string().max(1000, "Description is too long"),
        attributes: z
          .array(
            z.object({
              trait_type: z.string().min(1, "Trait Type is a required field"),
              value: z.string().min(1, "Value is a required field"),
            })
          )
          .optional(),
        royaltyFeeBps: z.any().refine((value) => {
          const royaltyFeeBps = Number(value) * 100;
          return royaltyFeeBps >= 0 && royaltyFeeBps <= 5000;
        }, "Royalty fee must be between 0 and 50%"),
        paymentAddress: z
          .string()
          .min(1, "Payment address is a required field")
          .refine(
            (value) => isValidContractAddressOrAddress(value, "bitsong"),
            {
              message: "Invalid payment address",
            }
          ),
        termsAndConditions: z
          .number()
          .refine(
            (value) => value === 1,
            "You must accept the terms and conditions"
          ),
      })
    )
  );

  const initialValues: CreateNftRequest = {
    image: [],
    media: [],
    contract: "",
    name: "",
    description: "",
    attributes: [],
    royaltyFeeBps: 0,
    paymentAddress: "",
    termsAndConditions: 0,
  };

  const {
    handleSubmit,
    errors: formErrors,
    values: formValues,
    resetForm: resetFormValues,
  } = useForm<CreateNftRequest>({
    initialValues,
    validationSchema,
  });

  const selectedCollection = ref();
  const {
    result: myCollections,
    loading: myCollectionsLoading,
    onResult: onResultMyCollections,
  } = await useQuery(
    GetCollectionsByUserDocument,
    {
      creator: address.value!,
    },
    {
      fetchPolicy: "network-only",
    }
  );

  onResultMyCollections(() => {
    if (route.query.collection) {
      const collection = route.query.collection as string;
      selectedCollection.value = collection;
      formValues.contract = collection;
    }
  });

  const attributes = ref<Array<Attribute>>([]);
  const dialogAttribute = ref(false);
  const addAttribute = (attr: Attribute) => {
    attributes.value.push(attr);
  };
  const removeAttribute = (index: number) => {
    attributes.value.splice(index, 1);
  };
  const removeEmptyAttributes = () => {
    attributes.value = attributes.value.filter(
      (attribute) => attribute.trait_type !== "" && attribute.value !== ""
    );
  };

  return {
    initialValues,
    validationSchema,
    handleSubmit,
    formErrors,
    formValues,
    resetFormValues,
    reset,
    loading,
    indexing,
    error,
    nftType,
    dialogAttribute,
    attributes,
    addAttribute,
    removeAttribute,
    selectedCollection,
    myCollections,
    myCollectionsLoading,
  };
}
