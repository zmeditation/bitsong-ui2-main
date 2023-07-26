/* eslint-disable */
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Cursor: any;
  JSON: any;
  ObjectID: any;
  Time: any;
  Upload: any;
};

export type FantokenMetadata = {
  __typename?: 'FantokenMetadata';
  biography: Scalars['String'];
  image: Scalars['String'];
  links: Array<Maybe<Kv>>;
  projectInfo: Scalars['String'];
};

export type FantokenMetadataInput = {
  biography?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  links?: InputMaybe<Array<InputMaybe<KvInput>>>;
  projectInfo?: InputMaybe<Scalars['String']>;
  upload?: InputMaybe<Scalars['Upload']>;
};

export type Kv = {
  __typename?: 'KV';
  key: Scalars['String'];
  value: Scalars['String'];
};

export type KvInput = {
  key: Scalars['String'];
  value: Scalars['String'];
};

export type Me = {
  __typename?: 'Me';
  address: Scalars['String'];
  expire_at: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Upload fantoken logo to ipfs and return the hash */
  fantokenUploadLogo: Scalars['String'];
  /** Upload fantoken metadata to ipfs and return the hash */
  fantokenUploadMetadata: Scalars['String'];
  /** Upload nft collection metadata to ipfs and return the hash */
  nftCollectionUploadMetadata: Scalars['String'];
  /** Upload nft metadata to ipfs and return the hash */
  nftUploadMetadata: Scalars['String'];
};


export type MutationFantokenUploadLogoArgs = {
  logo: Scalars['Upload'];
};


export type MutationFantokenUploadMetadataArgs = {
  metadata: FantokenMetadataInput;
};


export type MutationNftCollectionUploadMetadataArgs = {
  metadata: NftCollectionUploadMetadataInput;
};


export type MutationNftUploadMetadataArgs = {
  metadata: NftUploadMetadataInput;
};

export type NftAttribute = {
  __typename?: 'NftAttribute';
  trait_type: Scalars['String'];
  value: Scalars['String'];
};

export type NftAttributeInput = {
  trait_type: Scalars['String'];
  value: Scalars['String'];
};

export type NftCollectionMetadata = {
  __typename?: 'NftCollectionMetadata';
  cover?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  symbol: Scalars['String'];
};

export type NftCollectionUploadMetadataInput = {
  cover?: InputMaybe<Scalars['Upload']>;
  description?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['Upload']>;
  name: Scalars['String'];
  symbol: Scalars['String'];
};

export type NftMetadata = {
  __typename?: 'NftMetadata';
  animation_url?: Maybe<Scalars['String']>;
  attributes?: Maybe<Array<Maybe<NftAttribute>>>;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  name: Scalars['String'];
};

export type NftUploadMetadataInput = {
  attributes?: InputMaybe<Array<InputMaybe<NftAttributeInput>>>;
  description?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['Upload']>;
  media?: InputMaybe<Scalars['Upload']>;
  name: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  /** Get information about me */
  me: Me;
};

export type FantokenUploadMetadataMutationVariables = Exact<{
  metadata: FantokenMetadataInput;
}>;


export type FantokenUploadMetadataMutation = { __typename?: 'Mutation', fantokenUploadMetadata: string };

export type FantokenUploadLogoMutationVariables = Exact<{
  logo: Scalars['Upload'];
}>;


export type FantokenUploadLogoMutation = { __typename?: 'Mutation', fantokenUploadLogo: string };

export type NftCollectionUploadMetadataMutationVariables = Exact<{
  metadata: NftCollectionUploadMetadataInput;
}>;


export type NftCollectionUploadMetadataMutation = { __typename?: 'Mutation', nftCollectionUploadMetadata: string };

export type NftUploadMetadataMutationVariables = Exact<{
  metadata: NftUploadMetadataInput;
}>;


export type NftUploadMetadataMutation = { __typename?: 'Mutation', nftUploadMetadata: string };


export const FantokenUploadMetadataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"FantokenUploadMetadata"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"metadata"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"FantokenMetadataInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fantokenUploadMetadata"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"metadata"},"value":{"kind":"Variable","name":{"kind":"Name","value":"metadata"}}}]}]}}]} as unknown as DocumentNode<FantokenUploadMetadataMutation, FantokenUploadMetadataMutationVariables>;
export const FantokenUploadLogoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"FantokenUploadLogo"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"logo"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Upload"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fantokenUploadLogo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"logo"},"value":{"kind":"Variable","name":{"kind":"Name","value":"logo"}}}]}]}}]} as unknown as DocumentNode<FantokenUploadLogoMutation, FantokenUploadLogoMutationVariables>;
export const NftCollectionUploadMetadataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"NftCollectionUploadMetadata"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"metadata"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"NftCollectionUploadMetadataInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nftCollectionUploadMetadata"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"metadata"},"value":{"kind":"Variable","name":{"kind":"Name","value":"metadata"}}}]}]}}]} as unknown as DocumentNode<NftCollectionUploadMetadataMutation, NftCollectionUploadMetadataMutationVariables>;
export const NftUploadMetadataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"NftUploadMetadata"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"metadata"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"NftUploadMetadataInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nftUploadMetadata"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"metadata"},"value":{"kind":"Variable","name":{"kind":"Name","value":"metadata"}}}]}]}}]} as unknown as DocumentNode<NftUploadMetadataMutation, NftUploadMetadataMutationVariables>;