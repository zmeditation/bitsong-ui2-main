import { FantokenMetadataInput } from "~~/gql/schema";

export function parseMetadata(
  metadataStr: string | null | undefined
): FantokenMetadataInput {
  if (!metadataStr) {
    return {
      image: "",
    };
  }

  const metadata: FantokenMetadataInput = JSON.parse(metadataStr);

  if (!metadata.image) {
    metadata.image = "";
  }

  return metadata;
}
