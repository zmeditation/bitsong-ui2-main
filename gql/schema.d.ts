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
  BigFloat: any;
  Cursor: any;
  JSON: any;
  ObjectID: any;
  Time: any;
  Upload: any;
};

export type Fantoken = Node & {
  __typename?: 'Fantoken';
  authorityId?: Maybe<Scalars['String']>;
  blockId?: Maybe<Scalars['String']>;
  creatorId: Scalars['String'];
  id: Scalars['String'];
  maxSupply: Scalars['BigFloat'];
  messageId?: Maybe<Scalars['String']>;
  metadata?: Maybe<Scalars['String']>;
  minterId?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  nodeId: Scalars['ID'];
  supply: Scalars['BigFloat'];
  symbol: Scalars['String'];
  transactionId?: Maybe<Scalars['String']>;
  uri?: Maybe<Scalars['String']>;
};

export type FantokenMetadata = {
  __typename?: 'FantokenMetadata';
  biography: Scalars['String'];
  image: Scalars['String'];
  links: Array<Maybe<Kv>>;
  project_info: Scalars['String'];
};

export type FantokenMetadataInput = {
  biography?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  links?: InputMaybe<Array<InputMaybe<KvInput>>>;
  project_info?: InputMaybe<Scalars['String']>;
};

export type FantokensConnection = {
  __typename?: 'FantokensConnection';
  nodes: Array<Maybe<Fantoken>>;
  totalCount: Scalars['Int'];
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
};


export type MutationFantokenUploadLogoArgs = {
  logo: Scalars['Upload'];
};


export type MutationFantokenUploadMetadataArgs = {
  metadata: FantokenMetadataInput;
};

export type Node = {
  nodeId: Scalars['ID'];
};

export type Query = {
  __typename?: 'Query';
  /** Get fantoken by denom */
  fantoken?: Maybe<Fantoken>;
  /** Get all fantokens */
  fantokens: FantokensConnection;
  /** Get all favourite fantokens */
  favouriteFantokens: FantokensConnection;
  /** Get information about me */
  me: Me;
};


export type QueryFantokenArgs = {
  denom: Scalars['String'];
};


export type QueryFantokensArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QueryFavouriteFantokensArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};
