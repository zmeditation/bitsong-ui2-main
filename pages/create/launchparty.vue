<template>
  <app-page>
    <template v-slot:title> Create a new Launch Party! </template>
    <template v-slot:body>
      <v-row class="mb-12">
        <v-col cols="12" md="8">
          <launchparty-form-create-section
            description="A launch party is event where you can release for the first time your Music as NFTs to your fans."
          ></launchparty-form-create-section>

          <form @submit.prevent="onSubmit">
            <launchparty-form-create-media
              name="audio"
              label="Audio"
              description="Upload your loseless Audio file for your Music NFT, favorable format is WAV."
              file-types="audio/webm, audio/mpeg, audio/wav"
              placeholder="Drop audio file here..."
              :server="config.public.bstudioUpload"
              @on-cid="onAudioCid"
            >
            </launchparty-form-create-media>

            <launchparty-form-create-media
              name="artwork"
              label="Image"
              description="Upload the track artwork, min 1000px x 1000px"
              file-types="image/jpeg, image/png, image/webp"
              placeholder="Drop image file here..."
              :server="config.public.bstudioUpload"
              @on-cid="onImageCid"
            >
            </launchparty-form-create-media>

            <v-divider class="my-8"></v-divider>

            <launchparty-form-create-section
              title="Track details"
              description="Add details about your Track, such as title, description..."
            >
            </launchparty-form-create-section>

            <launchparty-form-create-text-field
              name="title"
              label="Title"
              placeholder="Title"
              required
              variant="text-field"
            >
            </launchparty-form-create-text-field>

            <launchparty-form-create-text-field
              name="description"
              label="Description"
              placeholder="Description"
              variant="text-area"
              :counter="1000"
              auto-grow
              required
            >
            </launchparty-form-create-text-field>

            <launchparty-form-create-select
              name="genre"
              label="Genre"
              placeholder="Genre"
              :items="genres"
            >
            </launchparty-form-create-select>

            <launchparty-form-create-select
              name="mood"
              label="Mood"
              placeholder="Mood"
              :items="moods"
            >
            </launchparty-form-create-select>

            <launchparty-form-create-text-field
              name="lyrics"
              label="Lyrics"
              placeholder="Lyrics"
              variant="text-area"
              :counter="1000"
              auto-grow
              description="Add lyrics for your track."
            >
            </launchparty-form-create-text-field>

            <v-divider class="my-8"></v-divider>

            <launchparty-form-create-section
              title="Launchparty details"
              description="Add details abount max number of editions and price per edition."
            >
            </launchparty-form-create-section>

            <launchparty-form-create-date-picker
              name="startDate"
              label="Start date"
              required
            >
            </launchparty-form-create-date-picker>

            <launchparty-form-create-edition-type
              name="editionType"
              label="Edition type"
              required
            >
            </launchparty-form-create-edition-type>

            <launchparty-form-create-edition-limited
              v-if="formValues.editionType === 'limited'"
              label="Max Editions"
              max-edition-name="maxEditions"
              max-edition-label="Max editions"
              price-edition-name="priceEdition"
              price-edition-label="Price"
              required
            >
            </launchparty-form-create-edition-limited>

            <launchparty-form-create-edition-open
              v-if="formValues.editionType === 'open'"
              label="Duration"
              duration-name="duration"
              duration-label="Select duration"
              price-edition-name="priceEdition"
              price-edition-label="Price"
              required
            >
            </launchparty-form-create-edition-open>

            <v-divider class="my-8"></v-divider>

            <launchparty-form-create-section
              title="Contributors"
              description="Add details about contributors, such as address, role and weight on royalties."
            >
            </launchparty-form-create-section>

            <launchparty-form-create-text-field
              name="royaltyFeeBps"
              label="Royalty Fee %"
              placeholder="Royalty Fee Bps"
              variant="text-field"
              description="This will be used for secondary sales."
              append-inner="%"
              cols-md="3"
              required
            >
            </launchparty-form-create-text-field>

            <launchparty-form-create-contributors
              name="contributors"
              label="Contributors"
              placeholder="Contributors"
              description="Add contributors for your track."
              :contributors="formValues.contributors"
              @update:contributors="onContributorsUpdate"
              required
            >
            </launchparty-form-create-contributors>

            <v-row>
              <v-col cols="12">
                <Field name="termsAndConditions" v-slot="{ field, errors }">
                  <v-checkbox
                    v-bind="field"
                    label="I understand that is only a test, the software is not ready for production use."
                    :error-messages="errors"
                    v-model="termsAndConditions"
                    :false-value="0"
                    :true-value="1"
                  >
                  </v-checkbox>
                </Field>
              </v-col>
            </v-row>

            <v-row>
              <v-alert
                type="error"
                class="my-4 text-body-2"
                variant="outlined"
                v-if="Object.keys(formErrors).length > 0"
              >
                <div v-for="error in formErrors">
                  {{ error }}
                </div>
              </v-alert>
            </v-row>

            <app-dialog-loading-steps
              v-model="stepper.show"
              :steps="steps"
              :tx-link-prefix="stepper.txLinkPrefix"
              :continue-link="stepper.continueLink"
            >
            </app-dialog-loading-steps>

            <v-row>
              <v-col cols="12" class="text-right">
                <v-btn outlined variant="text" @click.stop="onReset">
                  Cancel
                </v-btn>
                <v-btn
                  color="primary"
                  class="mr-4"
                  type="submit"
                  :loading="loading"
                  :disabled="Object.keys(formErrors).length > 0"
                >
                  Create Nft
                </v-btn>
              </v-col>
            </v-row>
          </form>
        </v-col>
      </v-row>
    </template>
  </app-page>
</template>

<script lang="ts" setup>
import { Field, useForm } from "vee-validate";
import { toFormValidator } from "@vee-validate/zod";
import { ZodError, z } from "zod";
import { storeToRefs } from "pinia";

import { Contributors, CreateLaunchpartyRequest } from "~/lib/bstudio";
import { CreateLaunchpartyRequestValidator } from "~/lib/bstudio/validation";
import useWalletStore from "~/store/wallet";

import { cosmwasm } from "@bitsongjs/telescope";
import { InstantiateMsg } from "@bitsongjs/telescope/types/codegen/LaunchpadFixed.types";

import { CreateLaunchpartyForm } from "~/types/launchparty";
import Long from "long";
import { toUtf8 } from "@cosmjs/encoding";
import { isDeliverTxFailure, logs } from "@cosmjs/stargate";
import { Uint53 } from "@cosmjs/math";
import { createStudio } from "~/lib/bstudio/studio";

/**
 * STEPPERS
 *
 */
const {
  stepper,
  steps,
  setContinueLink,
  setTxLinkPrefix,
  setSteps,
  setStatus,
  setErrorMessage,
  getStatus,
  setTxHash,
} = useStepper();
setTxLinkPrefix("https://api.bwasmnet-1.bitsong.network/txs/");
setSteps([
  {
    title: "Uploading Metadata",
    subtitle: "Uploading metadata to the interplanetary file system",
    status: "pending",
  },
  {
    title: "Deploying new Launch Party",
    subtitle: "Deploying new Launch Party to the BitSong blockchain",
    status: "pending",
  },
  {
    title: "Indexing Launch Party",
    subtitle: "Indexing your new Launch Party, this will take a few seconds",
    status: "pending",
  },
]);

/************************************************************************************/

const { getToken, getOfflineSigner } = useWalletStore();
const { address } = storeToRefs(useWalletStore());

const config = useRuntimeConfig();

const termsAndConditions = ref(0);

const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);
tomorrow.setHours(new Date().getHours(), 0, 0, 0);

const initialValues: CreateLaunchpartyForm = {
  audio: [],
  artwork: [],
  title: "",
  description: "",
  genre: undefined,
  mood: undefined,
  lyrics: undefined,
  startDate: tomorrow.toString(),
  editionType: "limited",
  maxEditions: "",
  duration: "",
  priceEdition: "",
  royaltyFeeBps: "",
  contributors: [
    {
      address: address.value!,
      role: "Performer",
      share: "10000",
    },
  ],
  termsAndConditions: 0,
};

const validationSchema = toFormValidator(
  z.object({
    artwork: z.array(z.any()).length(1, "Image is a required field"),
    audio: z.array(z.any()).length(1, "Media is a required field"),
    title: z.string().min(1, "Title is a required field"),
    description: z
      .string()
      .min(1, "Description is a required field")
      .max(1000, "Description is too long"),
    lyrics: z.string().max(2000, "Lyrics is too long").optional(),
    startDate: z.string(),
    editionType: z.string().refine((value) => {
      return value === "limited" || value === "open";
    }, "Edition type is a required field"),
    maxEditions: z.string().superRefine((value, ctx) => {
      if (formValues.editionType === "open") return;

      if (value === "") {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Max editions is a required field",
        });
      }
      if (value.includes(",") || value.includes(".")) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Max editions does not contain a comma or a dot",
        });
      }

      if (isNaN(Number(value)) || parseInt(value) <= 0) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Max editions must be > 0",
        });
      }
    }),
    duration: z.string().superRefine((value, ctx) => {
      if (formValues.editionType === "limited") return;

      if (value === "" || value === undefined) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Duration is a required field",
        });
      }
    }),
    priceEdition: z.string().superRefine((value, ctx) => {
      if (value === "" || value === undefined) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Price edition is a required field",
        });
      }
      if (value.includes(",")) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Price edition does not contain comma use dot instead",
        });
      }

      if (isNaN(Number(value)) || Number(value) <= 0) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Price edition must be > 0",
        });
      }
    }),
    royaltyFeeBps: z.string().superRefine((value, ctx) => {
      if (value === "" || value === undefined) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Royalty fee is a required field",
        });
      }
      if (value.includes(",") || value.includes(".")) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Royalty fee does not contain a comma or a dot",
        });
      }

      if (isNaN(Number(value)) || Number(value) <= 0) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Royalty fee must be > 0",
        });
      }
    }),
    contributors: z
      .array(
        z.object({
          address: z.string().min(1, "Name is a required field"),
          role: z.string().min(1, "Role is a required field"),
          share: z.string(),
        })
      )
      .min(1, "At least one contributor is required"),
    termsAndConditions: z
      .number()
      .refine(
        (value) => value === 1,
        "You must accept the terms and conditions before continuing"
      ),
  })
);

const {
  handleSubmit,
  errors: formErrors,
  values: formValues,
  resetForm,
  validate,
  setErrors,
} = useForm<CreateLaunchpartyForm>({
  initialValues,
  validationSchema,
  validateOnMount: false,
});

const genres = [
  { text: "Pop", value: "pop" },
  { text: "Rock", value: "rock" },
  { text: "Hip Hop", value: "hiphop" },
  { text: "Rap", value: "rap" },
  { text: "R&B", value: "rnb" },
  { text: "Country", value: "country" },
  { text: "Jazz", value: "jazz" },
  { text: "Classical", value: "classical" },
  { text: "Electronic", value: "electronic" },
  { text: "Folk", value: "folk" },
  { text: "Indie", value: "indie" },
  { text: "Metal", value: "metal" },
  { text: "Punk", value: "punk" },
  { text: "Reggae", value: "reggae" },
  { text: "Soul", value: "soul" },
  { text: "World", value: "world" },
  { text: "Other", value: "other" },
];

const moods = [
  { text: "Happy", value: "happy" },
  { text: "Sad", value: "sad" },
  { text: "Angry", value: "angry" },
  { text: "Peaceful", value: "peaceful" },
  { text: "Energetic", value: "energetic" },
  { text: "Motivational", value: "motivational" },
  { text: "Romantic", value: "romantic" },
  { text: "Other", value: "other" },
];

const loading = ref(false);

const audioCid = ref("");
const onAudioCid = (cid: string) => {
  audioCid.value = cid;
};

const imageCid = ref("");
const onImageCid = (cid: string) => {
  imageCid.value = cid;
};

const onReset = () => {
  resetForm();
  termsAndConditions.value = 0;
  audioCid.value = "";
  imageCid.value = "";
};

const onContributorsUpdate = async (contributors: Contributors) => {
  formValues.contributors = contributors;
  await validate();
};

const onSubmit = handleSubmit(async (values) => {
  const req: CreateLaunchpartyRequest = {
    title: values.title,
    description: values.description,
    lyrics: values.lyrics,
    startDate: values.startDate,
    editionType: values.editionType,
    maxEditions: parseInt(values.maxEditions || "0"),
    priceEdition: values.priceEdition,
    royaltyFeeBps: values.royaltyFeeBps,
    contributors: values.contributors,
    artwork: `ipfs://${imageCid.value}`,
    audio: `ipfs://${audioCid.value}`,
    genre: values.genre,
    mood: values.mood,
  };

  try {
    CreateLaunchpartyRequestValidator.parse(req);
  } catch (e) {
    if (e instanceof ZodError) {
      setErrors(
        e.issues.reduce((acc, issue) => {
          acc[issue.path[0]] = issue.message;
          return acc;
        }, {} as Record<string, string>)
      );
    }
    return;
  }

  const metadata = {
    image: req.artwork,
    animation_url: req.audio,
    artist: "",
    name: req.title,
    title: req.title,
    editionNumber: "",
    description: req.description,
    originalAudio: req.audio,
    license: "",
    genre: req.genre,
    mood: req.mood,
    lyrics: req.lyrics,
    version: "launchparty-20230415",
  };

  // enable stepper
  stepper.show = true;

  const client = await createStudio(await getOfflineSigner());
  const storage = await client.storage(
    getToken!,
    config.public.bstudioUpload.replace("/upload", "")
  );

  let baseTokenUri = "ipfs://";

  try {
    setStatus(0, "loading");

    let files = [];
    for (let i = 1; i <= req.maxEditions; i++) {
      files.push(
        new File(
          [
            JSON.stringify({
              ...metadata,
              name: `${req.title} #${i}`,
              title: `${req.title} #${i}`,
              editionNumber: `${i}`,
            }),
          ],
          `${i}.json`,
          {
            type: "application/json",
          }
        )
      );
    }

    files.push(
      new File(
        [
          JSON.stringify({
            image: req.artwork,
            name: req.title,
            symbol: "SYMBOL",
          }),
        ],
        "collection.json",
        {
          type: "application/json",
        }
      )
    );

    const cid = await storage.storeDirectory(files);
    baseTokenUri = `ipfs://${cid}`;

    console.log("uploaded metadata", cid);
    setStatus(0, "done");
  } catch (e) {
    setStatus(0, "error");
    setErrorMessage(0, "Error while uploading metadata");
    console.error("error uploading metadatas", e);
  }

  if (getStatus(0) === "error") return;

  try {
    setStatus(1, "loading");

    const { instantiateContract } =
      cosmwasm.wasm.v1.MessageComposer.withTypeUrl;

    const instantiateMsg: InstantiateMsg = {
      base_token_uri: baseTokenUri,
      collection_uri: `${baseTokenUri}/collection.json`,
      contributors: req.contributors.map((c) => ({
        addr: c.address,
        weight: parseInt(c.share),
      })),
      creator: address.value!,
      max_editions: req.maxEditions,
      name: req.title,
      price: req.priceEdition,
      seller_fee_bps: parseInt(req.royaltyFeeBps),
      // convert req.startDate to unix timestamp
      start_time: Math.floor(
        new Date(req.startDate).getTime() / 1000
      ).toString(),
      symbol: "sdsd",
    };

    const result = await client.signAndBroadcast([
      instantiateContract({
        codeId: Long.fromString(new Uint53(10).toString()),
        label: `launchparty-simple: ${req.title}`,
        sender: address.value!,
        msg: toUtf8(JSON.stringify(instantiateMsg)),
        admin: "",
        funds: [],
      }),
    ]);

    if (isDeliverTxFailure(result)) {
      throw new Error(createDeliverTxResponseErrorMessage(result));
    }

    const parsedLogs = logs.parseRawLog(result.rawLog);
    const contractAddressAttr = logs.findAttribute(
      parsedLogs,
      "instantiate",
      "_contract_address"
    );

    console.log(
      "deployed launchparty contract",
      result.transactionHash,
      contractAddressAttr.value
    );

    setContinueLink(`/launchparty/${contractAddressAttr.value}`);
    setTxHash(1, result.transactionHash);
    setStatus(1, "done");
  } catch (e) {
    setStatus(1, "error");
    if (e instanceof Error) {
      setErrorMessage(1, e.message);
    } else {
      setErrorMessage(1, e);
    }

    console.error("Error while deploying launchparty contract", e);
  }

  if (getStatus(1) === "error") return;

  try {
    setStatus(2, "loading");
    await new Promise((resolve) => setTimeout(resolve, 3000));
    setStatus(2, "done");
  } catch (e) {
    setStatus(2, "error");
    setErrorMessage(2, "Error while indexing your new launchparty");
    console.error("Error while indexing your new  launchparty", e);
  }
});
</script>
