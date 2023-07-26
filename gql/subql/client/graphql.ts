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
  /** A floating point number that requires more precision than IEEE 754 binary 64 */
  BigFloat: any;
  /**
   * A signed eight-byte integer. The upper big integer values are greater than the
   * max value for a JavaScript number. Therefore all big integers will be output as
   * strings and not numbers.
   */
  BigInt: any;
  /** A location in a connection that can be used for resuming pagination. */
  Cursor: any;
  /** The day, does not include a time. */
  Date: any;
  /**
   * A point in time as described by the [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) standard. May or may not include a timezone.
   */
  Datetime: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export type Account = Node & {
  __typename?: 'Account';
  /** Reads and enables pagination through a set of `Account`. */
  accountsByCollectionAdminIdAndCreatorId: AccountAccountsByCollectionAdminIdAndCreatorIdManyToManyConnection;
  /** Reads and enables pagination through a set of `Account`. */
  accountsByCollectionCreatorIdAndAdminId: AccountAccountsByCollectionCreatorIdAndAdminIdManyToManyConnection;
  /** Reads and enables pagination through a set of `Account`. */
  accountsByFantokenAuthorityIdAndCreatorId: AccountAccountsByFantokenAuthorityIdAndCreatorIdManyToManyConnection;
  /** Reads and enables pagination through a set of `Account`. */
  accountsByFantokenAuthorityIdAndMinterId: AccountAccountsByFantokenAuthorityIdAndMinterIdManyToManyConnection;
  /** Reads and enables pagination through a set of `Account`. */
  accountsByFantokenCreatorIdAndAuthorityId: AccountAccountsByFantokenCreatorIdAndAuthorityIdManyToManyConnection;
  /** Reads and enables pagination through a set of `Account`. */
  accountsByFantokenCreatorIdAndMinterId: AccountAccountsByFantokenCreatorIdAndMinterIdManyToManyConnection;
  /** Reads and enables pagination through a set of `Account`. */
  accountsByFantokenMinterIdAndAuthorityId: AccountAccountsByFantokenMinterIdAndAuthorityIdManyToManyConnection;
  /** Reads and enables pagination through a set of `Account`. */
  accountsByFantokenMinterIdAndCreatorId: AccountAccountsByFantokenMinterIdAndCreatorIdManyToManyConnection;
  /** Reads and enables pagination through a set of `Account`. */
  accountsByNftMinterIdAndOwnerId: AccountAccountsByNftMinterIdAndOwnerIdManyToManyConnection;
  /** Reads and enables pagination through a set of `Account`. */
  accountsByNftOwnerIdAndMinterId: AccountAccountsByNftOwnerIdAndMinterIdManyToManyConnection;
  chainId: Scalars['String'];
  /** Reads and enables pagination through a set of `Collection`. */
  collectionsAdmin: CollectionsConnection;
  /** Reads and enables pagination through a set of `Collection`. */
  collectionsByLaunchpartyCreatorIdAndCollectionId: AccountCollectionsByLaunchpartyCreatorIdAndCollectionIdManyToManyConnection;
  /** Reads and enables pagination through a set of `Collection`. */
  collectionsByNftMinterIdAndCollectionId: AccountCollectionsByNftMinterIdAndCollectionIdManyToManyConnection;
  /** Reads and enables pagination through a set of `Collection`. */
  collectionsByNftOwnerIdAndCollectionId: AccountCollectionsByNftOwnerIdAndCollectionIdManyToManyConnection;
  /** Reads and enables pagination through a set of `Collection`. */
  collectionsCreated: CollectionsConnection;
  /** Reads and enables pagination through a set of `FantokenFavorite`. */
  fantokenFavorites: FantokenFavoritesConnection;
  /** Reads and enables pagination through a set of `FantokenMetadatum`. */
  fantokenMetadataByFantokenAuthorityIdAndMetadataId: AccountFantokenMetadataByFantokenAuthorityIdAndMetadataIdManyToManyConnection;
  /** Reads and enables pagination through a set of `FantokenMetadatum`. */
  fantokenMetadataByFantokenCreatorIdAndMetadataId: AccountFantokenMetadataByFantokenCreatorIdAndMetadataIdManyToManyConnection;
  /** Reads and enables pagination through a set of `FantokenMetadatum`. */
  fantokenMetadataByFantokenMinterIdAndMetadataId: AccountFantokenMetadataByFantokenMinterIdAndMetadataIdManyToManyConnection;
  /** Reads and enables pagination through a set of `Fantoken`. */
  fantokensAuthority: FantokensConnection;
  /** Reads and enables pagination through a set of `Fantoken`. */
  fantokensByFantokenFavoriteAccountIdAndFantokenId: AccountFantokensByFantokenFavoriteAccountIdAndFantokenIdManyToManyConnection;
  /** Reads and enables pagination through a set of `Fantoken`. */
  fantokensCreated: FantokensConnection;
  /** Reads and enables pagination through a set of `Fantoken`. */
  fantokensMinter: FantokensConnection;
  id: Scalars['String'];
  /** Reads and enables pagination through a set of `Launchparty`. */
  launchpartiesByCreatorId: LaunchpartiesConnection;
  /** Reads and enables pagination through a set of `NftMetadatum`. */
  nftMetadataByNftMinterIdAndMetadataId: AccountNftMetadataByNftMinterIdAndMetadataIdManyToManyConnection;
  /** Reads and enables pagination through a set of `NftMetadatum`. */
  nftMetadataByNftOwnerIdAndMetadataId: AccountNftMetadataByNftOwnerIdAndMetadataIdManyToManyConnection;
  /** Reads and enables pagination through a set of `Nft`. */
  nftsMinted: NftsConnection;
  /** Reads and enables pagination through a set of `Nft`. */
  nftsOwned: NftsConnection;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  verified: Scalars['Boolean'];
};


export type AccountAccountsByCollectionAdminIdAndCreatorIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  distinct?: InputMaybe<Array<InputMaybe<Accounts_Distinct_Enum>>>;
  filter?: InputMaybe<AccountFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AccountsOrderBy>>;
};


export type AccountAccountsByCollectionCreatorIdAndAdminIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  distinct?: InputMaybe<Array<InputMaybe<Accounts_Distinct_Enum>>>;
  filter?: InputMaybe<AccountFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AccountsOrderBy>>;
};


export type AccountAccountsByFantokenAuthorityIdAndCreatorIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  distinct?: InputMaybe<Array<InputMaybe<Accounts_Distinct_Enum>>>;
  filter?: InputMaybe<AccountFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AccountsOrderBy>>;
};


export type AccountAccountsByFantokenAuthorityIdAndMinterIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  distinct?: InputMaybe<Array<InputMaybe<Accounts_Distinct_Enum>>>;
  filter?: InputMaybe<AccountFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AccountsOrderBy>>;
};


export type AccountAccountsByFantokenCreatorIdAndAuthorityIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  distinct?: InputMaybe<Array<InputMaybe<Accounts_Distinct_Enum>>>;
  filter?: InputMaybe<AccountFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AccountsOrderBy>>;
};


export type AccountAccountsByFantokenCreatorIdAndMinterIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  distinct?: InputMaybe<Array<InputMaybe<Accounts_Distinct_Enum>>>;
  filter?: InputMaybe<AccountFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AccountsOrderBy>>;
};


export type AccountAccountsByFantokenMinterIdAndAuthorityIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  distinct?: InputMaybe<Array<InputMaybe<Accounts_Distinct_Enum>>>;
  filter?: InputMaybe<AccountFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AccountsOrderBy>>;
};


export type AccountAccountsByFantokenMinterIdAndCreatorIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  distinct?: InputMaybe<Array<InputMaybe<Accounts_Distinct_Enum>>>;
  filter?: InputMaybe<AccountFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AccountsOrderBy>>;
};


export type AccountAccountsByNftMinterIdAndOwnerIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  distinct?: InputMaybe<Array<InputMaybe<Accounts_Distinct_Enum>>>;
  filter?: InputMaybe<AccountFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AccountsOrderBy>>;
};


export type AccountAccountsByNftOwnerIdAndMinterIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  distinct?: InputMaybe<Array<InputMaybe<Accounts_Distinct_Enum>>>;
  filter?: InputMaybe<AccountFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AccountsOrderBy>>;
};


export type AccountCollectionsAdminArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  distinct?: InputMaybe<Array<InputMaybe<Collections_Distinct_Enum>>>;
  filter?: InputMaybe<CollectionFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<CollectionsOrderBy>>;
};


export type AccountCollectionsByLaunchpartyCreatorIdAndCollectionIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  distinct?: InputMaybe<Array<InputMaybe<Collections_Distinct_Enum>>>;
  filter?: InputMaybe<CollectionFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<CollectionsOrderBy>>;
};


export type AccountCollectionsByNftMinterIdAndCollectionIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  distinct?: InputMaybe<Array<InputMaybe<Collections_Distinct_Enum>>>;
  filter?: InputMaybe<CollectionFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<CollectionsOrderBy>>;
};


export type AccountCollectionsByNftOwnerIdAndCollectionIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  distinct?: InputMaybe<Array<InputMaybe<Collections_Distinct_Enum>>>;
  filter?: InputMaybe<CollectionFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<CollectionsOrderBy>>;
};


export type AccountCollectionsCreatedArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  distinct?: InputMaybe<Array<InputMaybe<Collections_Distinct_Enum>>>;
  filter?: InputMaybe<CollectionFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<CollectionsOrderBy>>;
};


export type AccountFantokenFavoritesArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  distinct?: InputMaybe<Array<InputMaybe<Fantoken_Favorites_Distinct_Enum>>>;
  filter?: InputMaybe<FantokenFavoriteFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<FantokenFavoritesOrderBy>>;
};


export type AccountFantokenMetadataByFantokenAuthorityIdAndMetadataIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  distinct?: InputMaybe<Array<InputMaybe<Fantoken_Metadata_Distinct_Enum>>>;
  filter?: InputMaybe<FantokenMetadatumFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<FantokenMetadataOrderBy>>;
};


export type AccountFantokenMetadataByFantokenCreatorIdAndMetadataIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  distinct?: InputMaybe<Array<InputMaybe<Fantoken_Metadata_Distinct_Enum>>>;
  filter?: InputMaybe<FantokenMetadatumFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<FantokenMetadataOrderBy>>;
};


export type AccountFantokenMetadataByFantokenMinterIdAndMetadataIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  distinct?: InputMaybe<Array<InputMaybe<Fantoken_Metadata_Distinct_Enum>>>;
  filter?: InputMaybe<FantokenMetadatumFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<FantokenMetadataOrderBy>>;
};


export type AccountFantokensAuthorityArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  distinct?: InputMaybe<Array<InputMaybe<Fantokens_Distinct_Enum>>>;
  filter?: InputMaybe<FantokenFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<FantokensOrderBy>>;
};


export type AccountFantokensByFantokenFavoriteAccountIdAndFantokenIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  distinct?: InputMaybe<Array<InputMaybe<Fantokens_Distinct_Enum>>>;
  filter?: InputMaybe<FantokenFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<FantokensOrderBy>>;
};


export type AccountFantokensCreatedArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  distinct?: InputMaybe<Array<InputMaybe<Fantokens_Distinct_Enum>>>;
  filter?: InputMaybe<FantokenFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<FantokensOrderBy>>;
};


export type AccountFantokensMinterArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  distinct?: InputMaybe<Array<InputMaybe<Fantokens_Distinct_Enum>>>;
  filter?: InputMaybe<FantokenFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<FantokensOrderBy>>;
};


export type AccountLaunchpartiesByCreatorIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  distinct?: InputMaybe<Array<InputMaybe<Launchparties_Distinct_Enum>>>;
  filter?: InputMaybe<LaunchpartyFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<LaunchpartiesOrderBy>>;
};


export type AccountNftMetadataByNftMinterIdAndMetadataIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  distinct?: InputMaybe<Array<InputMaybe<Nft_Metadata_Distinct_Enum>>>;
  filter?: InputMaybe<NftMetadatumFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<NftMetadataOrderBy>>;
};


export type AccountNftMetadataByNftOwnerIdAndMetadataIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  distinct?: InputMaybe<Array<InputMaybe<Nft_Metadata_Distinct_Enum>>>;
  filter?: InputMaybe<NftMetadatumFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<NftMetadataOrderBy>>;
};


export type AccountNftsMintedArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  distinct?: InputMaybe<Array<InputMaybe<Nfts_Distinct_Enum>>>;
  filter?: InputMaybe<NftFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<NftsOrderBy>>;
};


export type AccountNftsOwnedArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  distinct?: InputMaybe<Array<InputMaybe<Nfts_Distinct_Enum>>>;
  filter?: InputMaybe<NftFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<NftsOrderBy>>;
};

/** A connection to a list of `Account` values, with data from `Collection`. */
export type AccountAccountsByCollectionAdminIdAndCreatorIdManyToManyConnection = {
  __typename?: 'AccountAccountsByCollectionAdminIdAndCreatorIdManyToManyConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<AccountAggregates>;
  /** A list of edges which contains the `Account`, info from the `Collection`, and the cursor to aid in pagination. */
  edges: Array<AccountAccountsByCollectionAdminIdAndCreatorIdManyToManyEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<AccountAggregates>>;
  /** A list of `Account` objects. */
  nodes: Array<Maybe<Account>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Account` you could get from the connection. */
  totalCount: Scalars['Int'];
};


/** A connection to a list of `Account` values, with data from `Collection`. */
export type AccountAccountsByCollectionAdminIdAndCreatorIdManyToManyConnectionGroupedAggregatesArgs = {
  groupBy: Array<AccountsGroupBy>;
  having?: InputMaybe<AccountsHavingInput>;
};

/** A `Account` edge in the connection, with data from `Collection`. */
export type AccountAccountsByCollectionAdminIdAndCreatorIdManyToManyEdge = {
  __typename?: 'AccountAccountsByCollectionAdminIdAndCreatorIdManyToManyEdge';
  /** Reads and enables pagination through a set of `Collection`. */
  collectionsCreated: CollectionsConnection;
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Account` at the end of the edge. */
  node?: Maybe<Account>;
};


/** A `Account` edge in the connection, with data from `Collection`. */
export type AccountAccountsByCollectionAdminIdAndCreatorIdManyToManyEdgeCollectionsCreatedArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  distinct?: InputMaybe<Array<InputMaybe<Collections_Distinct_Enum>>>;
  filter?: InputMaybe<CollectionFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<CollectionsOrderBy>>;
};

/** A connection to a list of `Account` values, with data from `Collection`. */
export type AccountAccountsByCollectionCreatorIdAndAdminIdManyToManyConnection = {
  __typename?: 'AccountAccountsByCollectionCreatorIdAndAdminIdManyToManyConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<AccountAggregates>;
  /** A list of edges which contains the `Account`, info from the `Collection`, and the cursor to aid in pagination. */
  edges: Array<AccountAccountsByCollectionCreatorIdAndAdminIdManyToManyEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<AccountAggregates>>;
  /** A list of `Account` objects. */
  nodes: Array<Maybe<Account>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Account` you could get from the connection. */
  totalCount: Scalars['Int'];
};


/** A connection to a list of `Account` values, with data from `Collection`. */
export type AccountAccountsByCollectionCreatorIdAndAdminIdManyToManyConnectionGroupedAggregatesArgs = {
  groupBy: Array<AccountsGroupBy>;
  having?: InputMaybe<AccountsHavingInput>;
};

/** A `Account` edge in the connection, with data from `Collection`. */
export type AccountAccountsByCollectionCreatorIdAndAdminIdManyToManyEdge = {
  __typename?: 'AccountAccountsByCollectionCreatorIdAndAdminIdManyToManyEdge';
  /** Reads and enables pagination through a set of `Collection`. */
  collectionsAdmin: CollectionsConnection;
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Account` at the end of the edge. */
  node?: Maybe<Account>;
};


/** A `Account` edge in the connection, with data from `Collection`. */
export type AccountAccountsByCollectionCreatorIdAndAdminIdManyToManyEdgeCollectionsAdminArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  distinct?: InputMaybe<Array<InputMaybe<Collections_Distinct_Enum>>>;
  filter?: InputMaybe<CollectionFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<CollectionsOrderBy>>;
};

/** A connection to a list of `Account` values, with data from `Fantoken`. */
export type AccountAccountsByFantokenAuthorityIdAndCreatorIdManyToManyConnection = {
  __typename?: 'AccountAccountsByFantokenAuthorityIdAndCreatorIdManyToManyConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<AccountAggregates>;
  /** A list of edges which contains the `Account`, info from the `Fantoken`, and the cursor to aid in pagination. */
  edges: Array<AccountAccountsByFantokenAuthorityIdAndCreatorIdManyToManyEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<AccountAggregates>>;
  /** A list of `Account` objects. */
  nodes: Array<Maybe<Account>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Account` you could get from the connection. */
  totalCount: Scalars['Int'];
};


/** A connection to a list of `Account` values, with data from `Fantoken`. */
export type AccountAccountsByFantokenAuthorityIdAndCreatorIdManyToManyConnectionGroupedAggregatesArgs = {
  groupBy: Array<AccountsGroupBy>;
  having?: InputMaybe<AccountsHavingInput>;
};

/** A `Account` edge in the connection, with data from `Fantoken`. */
export type AccountAccountsByFantokenAuthorityIdAndCreatorIdManyToManyEdge = {
  __typename?: 'AccountAccountsByFantokenAuthorityIdAndCreatorIdManyToManyEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** Reads and enables pagination through a set of `Fantoken`. */
  fantokensCreated: FantokensConnection;
  /** The `Account` at the end of the edge. */
  node?: Maybe<Account>;
};


/** A `Account` edge in the connection, with data from `Fantoken`. */
export type AccountAccountsByFantokenAuthorityIdAndCreatorIdManyToManyEdgeFantokensCreatedArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  distinct?: InputMaybe<Array<InputMaybe<Fantokens_Distinct_Enum>>>;
  filter?: InputMaybe<FantokenFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<FantokensOrderBy>>;
};

/** A connection to a list of `Account` values, with data from `Fantoken`. */
export type AccountAccountsByFantokenAuthorityIdAndMinterIdManyToManyConnection = {
  __typename?: 'AccountAccountsByFantokenAuthorityIdAndMinterIdManyToManyConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<AccountAggregates>;
  /** A list of edges which contains the `Account`, info from the `Fantoken`, and the cursor to aid in pagination. */
  edges: Array<AccountAccountsByFantokenAuthorityIdAndMinterIdManyToManyEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<AccountAggregates>>;
  /** A list of `Account` objects. */
  nodes: Array<Maybe<Account>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Account` you could get from the connection. */
  totalCount: Scalars['Int'];
};


/** A connection to a list of `Account` values, with data from `Fantoken`. */
export type AccountAccountsByFantokenAuthorityIdAndMinterIdManyToManyConnectionGroupedAggregatesArgs = {
  groupBy: Array<AccountsGroupBy>;
  having?: InputMaybe<AccountsHavingInput>;
};

/** A `Account` edge in the connection, with data from `Fantoken`. */
export type AccountAccountsByFantokenAuthorityIdAndMinterIdManyToManyEdge = {
  __typename?: 'AccountAccountsByFantokenAuthorityIdAndMinterIdManyToManyEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** Reads and enables pagination through a set of `Fantoken`. */
  fantokensMinter: FantokensConnection;
  /** The `Account` at the end of the edge. */
  node?: Maybe<Account>;
};


/** A `Account` edge in the connection, with data from `Fantoken`. */
export type AccountAccountsByFantokenAuthorityIdAndMinterIdManyToManyEdgeFantokensMinterArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  distinct?: InputMaybe<Array<InputMaybe<Fantokens_Distinct_Enum>>>;
  filter?: InputMaybe<FantokenFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<FantokensOrderBy>>;
};

/** A connection to a list of `Account` values, with data from `Fantoken`. */
export type AccountAccountsByFantokenCreatorIdAndAuthorityIdManyToManyConnection = {
  __typename?: 'AccountAccountsByFantokenCreatorIdAndAuthorityIdManyToManyConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<AccountAggregates>;
  /** A list of edges which contains the `Account`, info from the `Fantoken`, and the cursor to aid in pagination. */
  edges: Array<AccountAccountsByFantokenCreatorIdAndAuthorityIdManyToManyEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<AccountAggregates>>;
  /** A list of `Account` objects. */
  nodes: Array<Maybe<Account>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Account` you could get from the connection. */
  totalCount: Scalars['Int'];
};


/** A connection to a list of `Account` values, with data from `Fantoken`. */
export type AccountAccountsByFantokenCreatorIdAndAuthorityIdManyToManyConnectionGroupedAggregatesArgs = {
  groupBy: Array<AccountsGroupBy>;
  having?: InputMaybe<AccountsHavingInput>;
};

/** A `Account` edge in the connection, with data from `Fantoken`. */
export type AccountAccountsByFantokenCreatorIdAndAuthorityIdManyToManyEdge = {
  __typename?: 'AccountAccountsByFantokenCreatorIdAndAuthorityIdManyToManyEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** Reads and enables pagination through a set of `Fantoken`. */
  fantokensAuthority: FantokensConnection;
  /** The `Account` at the end of the edge. */
  node?: Maybe<Account>;
};


/** A `Account` edge in the connection, with data from `Fantoken`. */
export type AccountAccountsByFantokenCreatorIdAndAuthorityIdManyToManyEdgeFantokensAuthorityArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  distinct?: InputMaybe<Array<InputMaybe<Fantokens_Distinct_Enum>>>;
  filter?: InputMaybe<FantokenFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<FantokensOrderBy>>;
};

/** A connection to a list of `Account` values, with data from `Fantoken`. */
export type AccountAccountsByFantokenCreatorIdAndMinterIdManyToManyConnection = {
  __typename?: 'AccountAccountsByFantokenCreatorIdAndMinterIdManyToManyConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<AccountAggregates>;
  /** A list of edges which contains the `Account`, info from the `Fantoken`, and the cursor to aid in pagination. */
  edges: Array<AccountAccountsByFantokenCreatorIdAndMinterIdManyToManyEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<AccountAggregates>>;
  /** A list of `Account` objects. */
  nodes: Array<Maybe<Account>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Account` you could get from the connection. */
  totalCount: Scalars['Int'];
};


/** A connection to a list of `Account` values, with data from `Fantoken`. */
export type AccountAccountsByFantokenCreatorIdAndMinterIdManyToManyConnectionGroupedAggregatesArgs = {
  groupBy: Array<AccountsGroupBy>;
  having?: InputMaybe<AccountsHavingInput>;
};

/** A `Account` edge in the connection, with data from `Fantoken`. */
export type AccountAccountsByFantokenCreatorIdAndMinterIdManyToManyEdge = {
  __typename?: 'AccountAccountsByFantokenCreatorIdAndMinterIdManyToManyEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** Reads and enables pagination through a set of `Fantoken`. */
  fantokensMinter: FantokensConnection;
  /** The `Account` at the end of the edge. */
  node?: Maybe<Account>;
};


/** A `Account` edge in the connection, with data from `Fantoken`. */
export type AccountAccountsByFantokenCreatorIdAndMinterIdManyToManyEdgeFantokensMinterArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  distinct?: InputMaybe<Array<InputMaybe<Fantokens_Distinct_Enum>>>;
  filter?: InputMaybe<FantokenFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<FantokensOrderBy>>;
};

/** A connection to a list of `Account` values, with data from `Fantoken`. */
export type AccountAccountsByFantokenMinterIdAndAuthorityIdManyToManyConnection = {
  __typename?: 'AccountAccountsByFantokenMinterIdAndAuthorityIdManyToManyConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<AccountAggregates>;
  /** A list of edges which contains the `Account`, info from the `Fantoken`, and the cursor to aid in pagination. */
  edges: Array<AccountAccountsByFantokenMinterIdAndAuthorityIdManyToManyEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<AccountAggregates>>;
  /** A list of `Account` objects. */
  nodes: Array<Maybe<Account>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Account` you could get from the connection. */
  totalCount: Scalars['Int'];
};


/** A connection to a list of `Account` values, with data from `Fantoken`. */
export type AccountAccountsByFantokenMinterIdAndAuthorityIdManyToManyConnectionGroupedAggregatesArgs = {
  groupBy: Array<AccountsGroupBy>;
  having?: InputMaybe<AccountsHavingInput>;
};

/** A `Account` edge in the connection, with data from `Fantoken`. */
export type AccountAccountsByFantokenMinterIdAndAuthorityIdManyToManyEdge = {
  __typename?: 'AccountAccountsByFantokenMinterIdAndAuthorityIdManyToManyEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** Reads and enables pagination through a set of `Fantoken`. */
  fantokensAuthority: FantokensConnection;
  /** The `Account` at the end of the edge. */
  node?: Maybe<Account>;
};


/** A `Account` edge in the connection, with data from `Fantoken`. */
export type AccountAccountsByFantokenMinterIdAndAuthorityIdManyToManyEdgeFantokensAuthorityArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  distinct?: InputMaybe<Array<InputMaybe<Fantokens_Distinct_Enum>>>;
  filter?: InputMaybe<FantokenFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<FantokensOrderBy>>;
};

/** A connection to a list of `Account` values, with data from `Fantoken`. */
export type AccountAccountsByFantokenMinterIdAndCreatorIdManyToManyConnection = {
  __typename?: 'AccountAccountsByFantokenMinterIdAndCreatorIdManyToManyConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<AccountAggregates>;
  /** A list of edges which contains the `Account`, info from the `Fantoken`, and the cursor to aid in pagination. */
  edges: Array<AccountAccountsByFantokenMinterIdAndCreatorIdManyToManyEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<AccountAggregates>>;
  /** A list of `Account` objects. */
  nodes: Array<Maybe<Account>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Account` you could get from the connection. */
  totalCount: Scalars['Int'];
};


/** A connection to a list of `Account` values, with data from `Fantoken`. */
export type AccountAccountsByFantokenMinterIdAndCreatorIdManyToManyConnectionGroupedAggregatesArgs = {
  groupBy: Array<AccountsGroupBy>;
  having?: InputMaybe<AccountsHavingInput>;
};

/** A `Account` edge in the connection, with data from `Fantoken`. */
export type AccountAccountsByFantokenMinterIdAndCreatorIdManyToManyEdge = {
  __typename?: 'AccountAccountsByFantokenMinterIdAndCreatorIdManyToManyEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** Reads and enables pagination through a set of `Fantoken`. */
  fantokensCreated: FantokensConnection;
  /** The `Account` at the end of the edge. */
  node?: Maybe<Account>;
};


/** A `Account` edge in the connection, with data from `Fantoken`. */
export type AccountAccountsByFantokenMinterIdAndCreatorIdManyToManyEdgeFantokensCreatedArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  distinct?: InputMaybe<Array<InputMaybe<Fantokens_Distinct_Enum>>>;
  filter?: InputMaybe<FantokenFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<FantokensOrderBy>>;
};

/** A connection to a list of `Account` values, with data from `Nft`. */
export type AccountAccountsByNftMinterIdAndOwnerIdManyToManyConnection = {
  __typename?: 'AccountAccountsByNftMinterIdAndOwnerIdManyToManyConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<AccountAggregates>;
  /** A list of edges which contains the `Account`, info from the `Nft`, and the cursor to aid in pagination. */
  edges: Array<AccountAccountsByNftMinterIdAndOwnerIdManyToManyEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<AccountAggregates>>;
  /** A list of `Account` objects. */
  nodes: Array<Maybe<Account>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Account` you could get from the connection. */
  totalCount: Scalars['Int'];
};


/** A connection to a list of `Account` values, with data from `Nft`. */
export type AccountAccountsByNftMinterIdAndOwnerIdManyToManyConnectionGroupedAggregatesArgs = {
  groupBy: Array<AccountsGroupBy>;
  having?: InputMaybe<AccountsHavingInput>;
};

/** A `Account` edge in the connection, with data from `Nft`. */
export type AccountAccountsByNftMinterIdAndOwnerIdManyToManyEdge = {
  __typename?: 'AccountAccountsByNftMinterIdAndOwnerIdManyToManyEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** Reads and enables pagination through a set of `Nft`. */
  nftsOwned: NftsConnection;
  /** The `Account` at the end of the edge. */
  node?: Maybe<Account>;
};


/** A `Account` edge in the connection, with data from `Nft`. */
export type AccountAccountsByNftMinterIdAndOwnerIdManyToManyEdgeNftsOwnedArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  distinct?: InputMaybe<Array<InputMaybe<Nfts_Distinct_Enum>>>;
  filter?: InputMaybe<NftFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<NftsOrderBy>>;
};

/** A connection to a list of `Account` values, with data from `Nft`. */
export type AccountAccountsByNftOwnerIdAndMinterIdManyToManyConnection = {
  __typename?: 'AccountAccountsByNftOwnerIdAndMinterIdManyToManyConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<AccountAggregates>;
  /** A list of edges which contains the `Account`, info from the `Nft`, and the cursor to aid in pagination. */
  edges: Array<AccountAccountsByNftOwnerIdAndMinterIdManyToManyEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<AccountAggregates>>;
  /** A list of `Account` objects. */
  nodes: Array<Maybe<Account>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Account` you could get from the connection. */
  totalCount: Scalars['Int'];
};


/** A connection to a list of `Account` values, with data from `Nft`. */
export type AccountAccountsByNftOwnerIdAndMinterIdManyToManyConnectionGroupedAggregatesArgs = {
  groupBy: Array<AccountsGroupBy>;
  having?: InputMaybe<AccountsHavingInput>;
};

/** A `Account` edge in the connection, with data from `Nft`. */
export type AccountAccountsByNftOwnerIdAndMinterIdManyToManyEdge = {
  __typename?: 'AccountAccountsByNftOwnerIdAndMinterIdManyToManyEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** Reads and enables pagination through a set of `Nft`. */
  nftsMinted: NftsConnection;
  /** The `Account` at the end of the edge. */
  node?: Maybe<Account>;
};


/** A `Account` edge in the connection, with data from `Nft`. */
export type AccountAccountsByNftOwnerIdAndMinterIdManyToManyEdgeNftsMintedArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  distinct?: InputMaybe<Array<InputMaybe<Nfts_Distinct_Enum>>>;
  filter?: InputMaybe<NftFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<NftsOrderBy>>;
};

export type AccountAggregates = {
  __typename?: 'AccountAggregates';
  /** Distinct count aggregates across the matching connection (ignoring before/after/first/last/offset) */
  distinctCount?: Maybe<AccountDistinctCountAggregates>;
  keys?: Maybe<Array<Scalars['String']>>;
};

/** A connection to a list of `Collection` values, with data from `Launchparty`. */
export type AccountCollectionsByLaunchpartyCreatorIdAndCollectionIdManyToManyConnection = {
  __typename?: 'AccountCollectionsByLaunchpartyCreatorIdAndCollectionIdManyToManyConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<CollectionAggregates>;
  /** A list of edges which contains the `Collection`, info from the `Launchparty`, and the cursor to aid in pagination. */
  edges: Array<AccountCollectionsByLaunchpartyCreatorIdAndCollectionIdManyToManyEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<CollectionAggregates>>;
  /** A list of `Collection` objects. */
  nodes: Array<Maybe<Collection>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Collection` you could get from the connection. */
  totalCount: Scalars['Int'];
};


/** A connection to a list of `Collection` values, with data from `Launchparty`. */
export type AccountCollectionsByLaunchpartyCreatorIdAndCollectionIdManyToManyConnectionGroupedAggregatesArgs = {
  groupBy: Array<CollectionsGroupBy>;
  having?: InputMaybe<CollectionsHavingInput>;
};

/** A `Collection` edge in the connection, with data from `Launchparty`. */
export type AccountCollectionsByLaunchpartyCreatorIdAndCollectionIdManyToManyEdge = {
  __typename?: 'AccountCollectionsByLaunchpartyCreatorIdAndCollectionIdManyToManyEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** Reads and enables pagination through a set of `Launchparty`. */
  launchparties: LaunchpartiesConnection;
  /** The `Collection` at the end of the edge. */
  node?: Maybe<Collection>;
};


/** A `Collection` edge in the connection, with data from `Launchparty`. */
export type AccountCollectionsByLaunchpartyCreatorIdAndCollectionIdManyToManyEdgeLaunchpartiesArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  distinct?: InputMaybe<Array<InputMaybe<Launchparties_Distinct_Enum>>>;
  filter?: InputMaybe<LaunchpartyFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<LaunchpartiesOrderBy>>;
};

/** A connection to a list of `Collection` values, with data from `Nft`. */
export type AccountCollectionsByNftMinterIdAndCollectionIdManyToManyConnection = {
  __typename?: 'AccountCollectionsByNftMinterIdAndCollectionIdManyToManyConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<CollectionAggregates>;
  /** A list of edges which contains the `Collection`, info from the `Nft`, and the cursor to aid in pagination. */
  edges: Array<AccountCollectionsByNftMinterIdAndCollectionIdManyToManyEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<CollectionAggregates>>;
  /** A list of `Collection` objects. */
  nodes: Array<Maybe<Collection>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Collection` you could get from the connection. */
  totalCount: Scalars['Int'];
};


/** A connection to a list of `Collection` values, with data from `Nft`. */
export type AccountCollectionsByNftMinterIdAndCollectionIdManyToManyConnectionGroupedAggregatesArgs = {
  groupBy: Array<CollectionsGroupBy>;
  having?: InputMaybe<CollectionsHavingInput>;
};

/** A `Collection` edge in the connection, with data from `Nft`. */
export type AccountCollectionsByNftMinterIdAndCollectionIdManyToManyEdge = {
  __typename?: 'AccountCollectionsByNftMinterIdAndCollectionIdManyToManyEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** Reads and enables pagination through a set of `Nft`. */
  nfts: NftsConnection;
  /** The `Collection` at the end of the edge. */
  node?: Maybe<Collection>;
};


/** A `Collection` edge in the connection, with data from `Nft`. */
export type AccountCollectionsByNftMinterIdAndCollectionIdManyToManyEdgeNftsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  distinct?: InputMaybe<Array<InputMaybe<Nfts_Distinct_Enum>>>;
  filter?: InputMaybe<NftFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<NftsOrderBy>>;
};

/** A connection to a list of `Collection` values, with data from `Nft`. */
export type AccountCollectionsByNftOwnerIdAndCollectionIdManyToManyConnection = {
  __typename?: 'AccountCollectionsByNftOwnerIdAndCollectionIdManyToManyConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<CollectionAggregates>;
  /** A list of edges which contains the `Collection`, info from the `Nft`, and the cursor to aid in pagination. */
  edges: Array<AccountCollectionsByNftOwnerIdAndCollectionIdManyToManyEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<CollectionAggregates>>;
  /** A list of `Collection` objects. */
  nodes: Array<Maybe<Collection>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Collection` you could get from the connection. */
  totalCount: Scalars['Int'];
};


/** A connection to a list of `Collection` values, with data from `Nft`. */
export type AccountCollectionsByNftOwnerIdAndCollectionIdManyToManyConnectionGroupedAggregatesArgs = {
  groupBy: Array<CollectionsGroupBy>;
  having?: InputMaybe<CollectionsHavingInput>;
};

/** A `Collection` edge in the connection, with data from `Nft`. */
export type AccountCollectionsByNftOwnerIdAndCollectionIdManyToManyEdge = {
  __typename?: 'AccountCollectionsByNftOwnerIdAndCollectionIdManyToManyEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** Reads and enables pagination through a set of `Nft`. */
  nfts: NftsConnection;
  /** The `Collection` at the end of the edge. */
  node?: Maybe<Collection>;
};


/** A `Collection` edge in the connection, with data from `Nft`. */
export type AccountCollectionsByNftOwnerIdAndCollectionIdManyToManyEdgeNftsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  distinct?: InputMaybe<Array<InputMaybe<Nfts_Distinct_Enum>>>;
  filter?: InputMaybe<NftFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<NftsOrderBy>>;
};

export type AccountDistinctCountAggregates = {
  __typename?: 'AccountDistinctCountAggregates';
  /** Distinct count of chainId across the matching connection */
  chainId?: Maybe<Scalars['BigInt']>;
  /** Distinct count of id across the matching connection */
  id?: Maybe<Scalars['BigInt']>;
  /** Distinct count of verified across the matching connection */
  verified?: Maybe<Scalars['BigInt']>;
};

/** A connection to a list of `FantokenMetadatum` values, with data from `Fantoken`. */
export type AccountFantokenMetadataByFantokenAuthorityIdAndMetadataIdManyToManyConnection = {
  __typename?: 'AccountFantokenMetadataByFantokenAuthorityIdAndMetadataIdManyToManyConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<FantokenMetadatumAggregates>;
  /** A list of edges which contains the `FantokenMetadatum`, info from the `Fantoken`, and the cursor to aid in pagination. */
  edges: Array<AccountFantokenMetadataByFantokenAuthorityIdAndMetadataIdManyToManyEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<FantokenMetadatumAggregates>>;
  /** A list of `FantokenMetadatum` objects. */
  nodes: Array<Maybe<FantokenMetadatum>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `FantokenMetadatum` you could get from the connection. */
  totalCount: Scalars['Int'];
};


/** A connection to a list of `FantokenMetadatum` values, with data from `Fantoken`. */
export type AccountFantokenMetadataByFantokenAuthorityIdAndMetadataIdManyToManyConnectionGroupedAggregatesArgs = {
  groupBy: Array<FantokenMetadataGroupBy>;
  having?: InputMaybe<FantokenMetadataHavingInput>;
};

/** A `FantokenMetadatum` edge in the connection, with data from `Fantoken`. */
export type AccountFantokenMetadataByFantokenAuthorityIdAndMetadataIdManyToManyEdge = {
  __typename?: 'AccountFantokenMetadataByFantokenAuthorityIdAndMetadataIdManyToManyEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** Reads and enables pagination through a set of `Fantoken`. */
  fantokensByMetadataId: FantokensConnection;
  /** The `FantokenMetadatum` at the end of the edge. */
  node?: Maybe<FantokenMetadatum>;
};


/** A `FantokenMetadatum` edge in the connection, with data from `Fantoken`. */
export type AccountFantokenMetadataByFantokenAuthorityIdAndMetadataIdManyToManyEdgeFantokensByMetadataIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  distinct?: InputMaybe<Array<InputMaybe<Fantokens_Distinct_Enum>>>;
  filter?: InputMaybe<FantokenFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<FantokensOrderBy>>;
};

/** A connection to a list of `FantokenMetadatum` values, with data from `Fantoken`. */
export type AccountFantokenMetadataByFantokenCreatorIdAndMetadataIdManyToManyConnection = {
  __typename?: 'AccountFantokenMetadataByFantokenCreatorIdAndMetadataIdManyToManyConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<FantokenMetadatumAggregates>;
  /** A list of edges which contains the `FantokenMetadatum`, info from the `Fantoken`, and the cursor to aid in pagination. */
  edges: Array<AccountFantokenMetadataByFantokenCreatorIdAndMetadataIdManyToManyEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<FantokenMetadatumAggregates>>;
  /** A list of `FantokenMetadatum` objects. */
  nodes: Array<Maybe<FantokenMetadatum>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `FantokenMetadatum` you could get from the connection. */
  totalCount: Scalars['Int'];
};


/** A connection to a list of `FantokenMetadatum` values, with data from `Fantoken`. */
export type AccountFantokenMetadataByFantokenCreatorIdAndMetadataIdManyToManyConnectionGroupedAggregatesArgs = {
  groupBy: Array<FantokenMetadataGroupBy>;
  having?: InputMaybe<FantokenMetadataHavingInput>;
};

/** A `FantokenMetadatum` edge in the connection, with data from `Fantoken`. */
export type AccountFantokenMetadataByFantokenCreatorIdAndMetadataIdManyToManyEdge = {
  __typename?: 'AccountFantokenMetadataByFantokenCreatorIdAndMetadataIdManyToManyEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** Reads and enables pagination through a set of `Fantoken`. */
  fantokensByMetadataId: FantokensConnection;
  /** The `FantokenMetadatum` at the end of the edge. */
  node?: Maybe<FantokenMetadatum>;
};


/** A `FantokenMetadatum` edge in the connection, with data from `Fantoken`. */
export type AccountFantokenMetadataByFantokenCreatorIdAndMetadataIdManyToManyEdgeFantokensByMetadataIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  distinct?: InputMaybe<Array<InputMaybe<Fantokens_Distinct_Enum>>>;
  filter?: InputMaybe<FantokenFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<FantokensOrderBy>>;
};

/** A connection to a list of `FantokenMetadatum` values, with data from `Fantoken`. */
export type AccountFantokenMetadataByFantokenMinterIdAndMetadataIdManyToManyConnection = {
  __typename?: 'AccountFantokenMetadataByFantokenMinterIdAndMetadataIdManyToManyConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<FantokenMetadatumAggregates>;
  /** A list of edges which contains the `FantokenMetadatum`, info from the `Fantoken`, and the cursor to aid in pagination. */
  edges: Array<AccountFantokenMetadataByFantokenMinterIdAndMetadataIdManyToManyEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<FantokenMetadatumAggregates>>;
  /** A list of `FantokenMetadatum` objects. */
  nodes: Array<Maybe<FantokenMetadatum>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `FantokenMetadatum` you could get from the connection. */
  totalCount: Scalars['Int'];
};


/** A connection to a list of `FantokenMetadatum` values, with data from `Fantoken`. */
export type AccountFantokenMetadataByFantokenMinterIdAndMetadataIdManyToManyConnectionGroupedAggregatesArgs = {
  groupBy: Array<FantokenMetadataGroupBy>;
  having?: InputMaybe<FantokenMetadataHavingInput>;
};

/** A `FantokenMetadatum` edge in the connection, with data from `Fantoken`. */
export type AccountFantokenMetadataByFantokenMinterIdAndMetadataIdManyToManyEdge = {
  __typename?: 'AccountFantokenMetadataByFantokenMinterIdAndMetadataIdManyToManyEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** Reads and enables pagination through a set of `Fantoken`. */
  fantokensByMetadataId: FantokensConnection;
  /** The `FantokenMetadatum` at the end of the edge. */
  node?: Maybe<FantokenMetadatum>;
};


/** A `FantokenMetadatum` edge in the connection, with data from `Fantoken`. */
export type AccountFantokenMetadataByFantokenMinterIdAndMetadataIdManyToManyEdgeFantokensByMetadataIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  distinct?: InputMaybe<Array<InputMaybe<Fantokens_Distinct_Enum>>>;
  filter?: InputMaybe<FantokenFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<FantokensOrderBy>>;
};

/** A connection to a list of `Fantoken` values, with data from `FantokenFavorite`. */
export type AccountFantokensByFantokenFavoriteAccountIdAndFantokenIdManyToManyConnection = {
  __typename?: 'AccountFantokensByFantokenFavoriteAccountIdAndFantokenIdManyToManyConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<FantokenAggregates>;
  /** A list of edges which contains the `Fantoken`, info from the `FantokenFavorite`, and the cursor to aid in pagination. */
  edges: Array<AccountFantokensByFantokenFavoriteAccountIdAndFantokenIdManyToManyEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<FantokenAggregates>>;
  /** A list of `Fantoken` objects. */
  nodes: Array<Maybe<Fantoken>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Fantoken` you could get from the connection. */
  totalCount: Scalars['Int'];
};


/** A connection to a list of `Fantoken` values, with data from `FantokenFavorite`. */
export type AccountFantokensByFantokenFavoriteAccountIdAndFantokenIdManyToManyConnectionGroupedAggregatesArgs = {
  groupBy: Array<FantokensGroupBy>;
  having?: InputMaybe<FantokensHavingInput>;
};

/** A `Fantoken` edge in the connection, with data from `FantokenFavorite`. */
export type AccountFantokensByFantokenFavoriteAccountIdAndFantokenIdManyToManyEdge = {
  __typename?: 'AccountFantokensByFantokenFavoriteAccountIdAndFantokenIdManyToManyEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** Reads and enables pagination through a set of `FantokenFavorite`. */
  fantokenFavorites: FantokenFavoritesConnection;
  /** The `Fantoken` at the end of the edge. */
  node?: Maybe<Fantoken>;
};


/** A `Fantoken` edge in the connection, with data from `FantokenFavorite`. */
export type AccountFantokensByFantokenFavoriteAccountIdAndFantokenIdManyToManyEdgeFantokenFavoritesArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  distinct?: InputMaybe<Array<InputMaybe<Fantoken_Favorites_Distinct_Enum>>>;
  filter?: InputMaybe<FantokenFavoriteFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<FantokenFavoritesOrderBy>>;
};

/** A filter to be used against `Account` object types. All fields are combined with a logical ‘and.’ */
export type AccountFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<AccountFilter>>;
  /** Filter by the object’s `chainId` field. */
  chainId?: InputMaybe<StringFilter>;
  /** Filter by the object’s `collectionsAdmin` relation. */
  collectionsAdmin?: InputMaybe<AccountToManyCollectionFilter>;
  /** Some related `collectionsAdmin` exist. */
  collectionsAdminExist?: InputMaybe<Scalars['Boolean']>;
  /** Filter by the object’s `collectionsCreated` relation. */
  collectionsCreated?: InputMaybe<AccountToManyCollectionFilter>;
  /** Some related `collectionsCreated` exist. */
  collectionsCreatedExist?: InputMaybe<Scalars['Boolean']>;
  /** Filter by the object’s `fantokenFavorites` relation. */
  fantokenFavorites?: InputMaybe<AccountToManyFantokenFavoriteFilter>;
  /** Some related `fantokenFavorites` exist. */
  fantokenFavoritesExist?: InputMaybe<Scalars['Boolean']>;
  /** Filter by the object’s `fantokensAuthority` relation. */
  fantokensAuthority?: InputMaybe<AccountToManyFantokenFilter>;
  /** Some related `fantokensAuthority` exist. */
  fantokensAuthorityExist?: InputMaybe<Scalars['Boolean']>;
  /** Filter by the object’s `fantokensCreated` relation. */
  fantokensCreated?: InputMaybe<AccountToManyFantokenFilter>;
  /** Some related `fantokensCreated` exist. */
  fantokensCreatedExist?: InputMaybe<Scalars['Boolean']>;
  /** Filter by the object’s `fantokensMinter` relation. */
  fantokensMinter?: InputMaybe<AccountToManyFantokenFilter>;
  /** Some related `fantokensMinter` exist. */
  fantokensMinterExist?: InputMaybe<Scalars['Boolean']>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<StringFilter>;
  /** Filter by the object’s `launchpartiesByCreatorId` relation. */
  launchpartiesByCreatorId?: InputMaybe<AccountToManyLaunchpartyFilter>;
  /** Some related `launchpartiesByCreatorId` exist. */
  launchpartiesByCreatorIdExist?: InputMaybe<Scalars['Boolean']>;
  /** Filter by the object’s `nftsMinted` relation. */
  nftsMinted?: InputMaybe<AccountToManyNftFilter>;
  /** Some related `nftsMinted` exist. */
  nftsMintedExist?: InputMaybe<Scalars['Boolean']>;
  /** Filter by the object’s `nftsOwned` relation. */
  nftsOwned?: InputMaybe<AccountToManyNftFilter>;
  /** Some related `nftsOwned` exist. */
  nftsOwnedExist?: InputMaybe<Scalars['Boolean']>;
  /** Negates the expression. */
  not?: InputMaybe<AccountFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<AccountFilter>>;
  /** Filter by the object’s `verified` field. */
  verified?: InputMaybe<BooleanFilter>;
};

/** A connection to a list of `NftMetadatum` values, with data from `Nft`. */
export type AccountNftMetadataByNftMinterIdAndMetadataIdManyToManyConnection = {
  __typename?: 'AccountNftMetadataByNftMinterIdAndMetadataIdManyToManyConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<NftMetadatumAggregates>;
  /** A list of edges which contains the `NftMetadatum`, info from the `Nft`, and the cursor to aid in pagination. */
  edges: Array<AccountNftMetadataByNftMinterIdAndMetadataIdManyToManyEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<NftMetadatumAggregates>>;
  /** A list of `NftMetadatum` objects. */
  nodes: Array<Maybe<NftMetadatum>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `NftMetadatum` you could get from the connection. */
  totalCount: Scalars['Int'];
};


/** A connection to a list of `NftMetadatum` values, with data from `Nft`. */
export type AccountNftMetadataByNftMinterIdAndMetadataIdManyToManyConnectionGroupedAggregatesArgs = {
  groupBy: Array<NftMetadataGroupBy>;
  having?: InputMaybe<NftMetadataHavingInput>;
};

/** A `NftMetadatum` edge in the connection, with data from `Nft`. */
export type AccountNftMetadataByNftMinterIdAndMetadataIdManyToManyEdge = {
  __typename?: 'AccountNftMetadataByNftMinterIdAndMetadataIdManyToManyEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** Reads and enables pagination through a set of `Nft`. */
  nftsByMetadataId: NftsConnection;
  /** The `NftMetadatum` at the end of the edge. */
  node?: Maybe<NftMetadatum>;
};


/** A `NftMetadatum` edge in the connection, with data from `Nft`. */
export type AccountNftMetadataByNftMinterIdAndMetadataIdManyToManyEdgeNftsByMetadataIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  distinct?: InputMaybe<Array<InputMaybe<Nfts_Distinct_Enum>>>;
  filter?: InputMaybe<NftFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<NftsOrderBy>>;
};

/** A connection to a list of `NftMetadatum` values, with data from `Nft`. */
export type AccountNftMetadataByNftOwnerIdAndMetadataIdManyToManyConnection = {
  __typename?: 'AccountNftMetadataByNftOwnerIdAndMetadataIdManyToManyConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<NftMetadatumAggregates>;
  /** A list of edges which contains the `NftMetadatum`, info from the `Nft`, and the cursor to aid in pagination. */
  edges: Array<AccountNftMetadataByNftOwnerIdAndMetadataIdManyToManyEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<NftMetadatumAggregates>>;
  /** A list of `NftMetadatum` objects. */
  nodes: Array<Maybe<NftMetadatum>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `NftMetadatum` you could get from the connection. */
  totalCount: Scalars['Int'];
};


/** A connection to a list of `NftMetadatum` values, with data from `Nft`. */
export type AccountNftMetadataByNftOwnerIdAndMetadataIdManyToManyConnectionGroupedAggregatesArgs = {
  groupBy: Array<NftMetadataGroupBy>;
  having?: InputMaybe<NftMetadataHavingInput>;
};

/** A `NftMetadatum` edge in the connection, with data from `Nft`. */
export type AccountNftMetadataByNftOwnerIdAndMetadataIdManyToManyEdge = {
  __typename?: 'AccountNftMetadataByNftOwnerIdAndMetadataIdManyToManyEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** Reads and enables pagination through a set of `Nft`. */
  nftsByMetadataId: NftsConnection;
  /** The `NftMetadatum` at the end of the edge. */
  node?: Maybe<NftMetadatum>;
};


/** A `NftMetadatum` edge in the connection, with data from `Nft`. */
export type AccountNftMetadataByNftOwnerIdAndMetadataIdManyToManyEdgeNftsByMetadataIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  distinct?: InputMaybe<Array<InputMaybe<Nfts_Distinct_Enum>>>;
  filter?: InputMaybe<NftFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<NftsOrderBy>>;
};

/** A filter to be used against many `Collection` object types. All fields are combined with a logical ‘and.’ */
export type AccountToManyCollectionFilter = {
  /** Aggregates across related `Collection` match the filter criteria. */
  aggregates?: InputMaybe<CollectionAggregatesFilter>;
  /** Every related `Collection` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<CollectionFilter>;
  /** No related `Collection` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<CollectionFilter>;
  /** Some related `Collection` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<CollectionFilter>;
};

/** A filter to be used against many `FantokenFavorite` object types. All fields are combined with a logical ‘and.’ */
export type AccountToManyFantokenFavoriteFilter = {
  /** Aggregates across related `FantokenFavorite` match the filter criteria. */
  aggregates?: InputMaybe<FantokenFavoriteAggregatesFilter>;
  /** Every related `FantokenFavorite` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<FantokenFavoriteFilter>;
  /** No related `FantokenFavorite` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<FantokenFavoriteFilter>;
  /** Some related `FantokenFavorite` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<FantokenFavoriteFilter>;
};

/** A filter to be used against many `Fantoken` object types. All fields are combined with a logical ‘and.’ */
export type AccountToManyFantokenFilter = {
  /** Aggregates across related `Fantoken` match the filter criteria. */
  aggregates?: InputMaybe<FantokenAggregatesFilter>;
  /** Every related `Fantoken` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<FantokenFilter>;
  /** No related `Fantoken` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<FantokenFilter>;
  /** Some related `Fantoken` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<FantokenFilter>;
};

/** A filter to be used against many `Launchparty` object types. All fields are combined with a logical ‘and.’ */
export type AccountToManyLaunchpartyFilter = {
  /** Aggregates across related `Launchparty` match the filter criteria. */
  aggregates?: InputMaybe<LaunchpartyAggregatesFilter>;
  /** Every related `Launchparty` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<LaunchpartyFilter>;
  /** No related `Launchparty` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<LaunchpartyFilter>;
  /** Some related `Launchparty` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<LaunchpartyFilter>;
};

/** A filter to be used against many `Nft` object types. All fields are combined with a logical ‘and.’ */
export type AccountToManyNftFilter = {
  /** Aggregates across related `Nft` match the filter criteria. */
  aggregates?: InputMaybe<NftAggregatesFilter>;
  /** Every related `Nft` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<NftFilter>;
  /** No related `Nft` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<NftFilter>;
  /** Some related `Nft` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<NftFilter>;
};

/** A connection to a list of `Account` values. */
export type AccountsConnection = {
  __typename?: 'AccountsConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<AccountAggregates>;
  /** A list of edges which contains the `Account` and cursor to aid in pagination. */
  edges: Array<AccountsEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<AccountAggregates>>;
  /** A list of `Account` objects. */
  nodes: Array<Maybe<Account>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Account` you could get from the connection. */
  totalCount: Scalars['Int'];
};


/** A connection to a list of `Account` values. */
export type AccountsConnectionGroupedAggregatesArgs = {
  groupBy: Array<AccountsGroupBy>;
  having?: InputMaybe<AccountsHavingInput>;
};

/** A `Account` edge in the connection. */
export type AccountsEdge = {
  __typename?: 'AccountsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Account` at the end of the edge. */
  node?: Maybe<Account>;
};

/** Grouping methods for `Account` for usage during aggregation. */
export enum AccountsGroupBy {
  ChainId = 'CHAIN_ID',
  Verified = 'VERIFIED'
}

/** Conditions for `Account` aggregates. */
export type AccountsHavingInput = {
  AND?: InputMaybe<Array<AccountsHavingInput>>;
  OR?: InputMaybe<Array<AccountsHavingInput>>;
};

/** Methods to use when ordering `Account`. */
export enum AccountsOrderBy {
  ChainIdAsc = 'CHAIN_ID_ASC',
  ChainIdDesc = 'CHAIN_ID_DESC',
  CollectionsAdminAverageAdminIdAsc = 'COLLECTIONS_ADMIN_AVERAGE_ADMIN_ID_ASC',
  CollectionsAdminAverageAdminIdDesc = 'COLLECTIONS_ADMIN_AVERAGE_ADMIN_ID_DESC',
  CollectionsAdminAverageCodeIdAsc = 'COLLECTIONS_ADMIN_AVERAGE_CODE_ID_ASC',
  CollectionsAdminAverageCodeIdDesc = 'COLLECTIONS_ADMIN_AVERAGE_CODE_ID_DESC',
  CollectionsAdminAverageCoverAsc = 'COLLECTIONS_ADMIN_AVERAGE_COVER_ASC',
  CollectionsAdminAverageCoverDesc = 'COLLECTIONS_ADMIN_AVERAGE_COVER_DESC',
  CollectionsAdminAverageCreatedAtAsc = 'COLLECTIONS_ADMIN_AVERAGE_CREATED_AT_ASC',
  CollectionsAdminAverageCreatedAtDesc = 'COLLECTIONS_ADMIN_AVERAGE_CREATED_AT_DESC',
  CollectionsAdminAverageCreatedHeightAsc = 'COLLECTIONS_ADMIN_AVERAGE_CREATED_HEIGHT_ASC',
  CollectionsAdminAverageCreatedHeightDesc = 'COLLECTIONS_ADMIN_AVERAGE_CREATED_HEIGHT_DESC',
  CollectionsAdminAverageCreatorIdAsc = 'COLLECTIONS_ADMIN_AVERAGE_CREATOR_ID_ASC',
  CollectionsAdminAverageCreatorIdDesc = 'COLLECTIONS_ADMIN_AVERAGE_CREATOR_ID_DESC',
  CollectionsAdminAverageDescriptionAsc = 'COLLECTIONS_ADMIN_AVERAGE_DESCRIPTION_ASC',
  CollectionsAdminAverageDescriptionDesc = 'COLLECTIONS_ADMIN_AVERAGE_DESCRIPTION_DESC',
  CollectionsAdminAverageExternalUrlsAsc = 'COLLECTIONS_ADMIN_AVERAGE_EXTERNAL_URLS_ASC',
  CollectionsAdminAverageExternalUrlsDesc = 'COLLECTIONS_ADMIN_AVERAGE_EXTERNAL_URLS_DESC',
  CollectionsAdminAverageIdAsc = 'COLLECTIONS_ADMIN_AVERAGE_ID_ASC',
  CollectionsAdminAverageIdDesc = 'COLLECTIONS_ADMIN_AVERAGE_ID_DESC',
  CollectionsAdminAverageImageAsc = 'COLLECTIONS_ADMIN_AVERAGE_IMAGE_ASC',
  CollectionsAdminAverageImageDesc = 'COLLECTIONS_ADMIN_AVERAGE_IMAGE_DESC',
  CollectionsAdminAverageLabelAsc = 'COLLECTIONS_ADMIN_AVERAGE_LABEL_ASC',
  CollectionsAdminAverageLabelDesc = 'COLLECTIONS_ADMIN_AVERAGE_LABEL_DESC',
  CollectionsAdminAverageNameAsc = 'COLLECTIONS_ADMIN_AVERAGE_NAME_ASC',
  CollectionsAdminAverageNameDesc = 'COLLECTIONS_ADMIN_AVERAGE_NAME_DESC',
  CollectionsAdminAverageSymbolAsc = 'COLLECTIONS_ADMIN_AVERAGE_SYMBOL_ASC',
  CollectionsAdminAverageSymbolDesc = 'COLLECTIONS_ADMIN_AVERAGE_SYMBOL_DESC',
  CollectionsAdminAverageUpdatedAtAsc = 'COLLECTIONS_ADMIN_AVERAGE_UPDATED_AT_ASC',
  CollectionsAdminAverageUpdatedAtDesc = 'COLLECTIONS_ADMIN_AVERAGE_UPDATED_AT_DESC',
  CollectionsAdminAverageUpdatedHeightAsc = 'COLLECTIONS_ADMIN_AVERAGE_UPDATED_HEIGHT_ASC',
  CollectionsAdminAverageUpdatedHeightDesc = 'COLLECTIONS_ADMIN_AVERAGE_UPDATED_HEIGHT_DESC',
  CollectionsAdminAverageUriAsc = 'COLLECTIONS_ADMIN_AVERAGE_URI_ASC',
  CollectionsAdminAverageUriDesc = 'COLLECTIONS_ADMIN_AVERAGE_URI_DESC',
  CollectionsAdminAverageVerifiedAsc = 'COLLECTIONS_ADMIN_AVERAGE_VERIFIED_ASC',
  CollectionsAdminAverageVerifiedDesc = 'COLLECTIONS_ADMIN_AVERAGE_VERIFIED_DESC',
  CollectionsAdminCountAsc = 'COLLECTIONS_ADMIN_COUNT_ASC',
  CollectionsAdminCountDesc = 'COLLECTIONS_ADMIN_COUNT_DESC',
  CollectionsAdminDistinctCountAdminIdAsc = 'COLLECTIONS_ADMIN_DISTINCT_COUNT_ADMIN_ID_ASC',
  CollectionsAdminDistinctCountAdminIdDesc = 'COLLECTIONS_ADMIN_DISTINCT_COUNT_ADMIN_ID_DESC',
  CollectionsAdminDistinctCountCodeIdAsc = 'COLLECTIONS_ADMIN_DISTINCT_COUNT_CODE_ID_ASC',
  CollectionsAdminDistinctCountCodeIdDesc = 'COLLECTIONS_ADMIN_DISTINCT_COUNT_CODE_ID_DESC',
  CollectionsAdminDistinctCountCoverAsc = 'COLLECTIONS_ADMIN_DISTINCT_COUNT_COVER_ASC',
  CollectionsAdminDistinctCountCoverDesc = 'COLLECTIONS_ADMIN_DISTINCT_COUNT_COVER_DESC',
  CollectionsAdminDistinctCountCreatedAtAsc = 'COLLECTIONS_ADMIN_DISTINCT_COUNT_CREATED_AT_ASC',
  CollectionsAdminDistinctCountCreatedAtDesc = 'COLLECTIONS_ADMIN_DISTINCT_COUNT_CREATED_AT_DESC',
  CollectionsAdminDistinctCountCreatedHeightAsc = 'COLLECTIONS_ADMIN_DISTINCT_COUNT_CREATED_HEIGHT_ASC',
  CollectionsAdminDistinctCountCreatedHeightDesc = 'COLLECTIONS_ADMIN_DISTINCT_COUNT_CREATED_HEIGHT_DESC',
  CollectionsAdminDistinctCountCreatorIdAsc = 'COLLECTIONS_ADMIN_DISTINCT_COUNT_CREATOR_ID_ASC',
  CollectionsAdminDistinctCountCreatorIdDesc = 'COLLECTIONS_ADMIN_DISTINCT_COUNT_CREATOR_ID_DESC',
  CollectionsAdminDistinctCountDescriptionAsc = 'COLLECTIONS_ADMIN_DISTINCT_COUNT_DESCRIPTION_ASC',
  CollectionsAdminDistinctCountDescriptionDesc = 'COLLECTIONS_ADMIN_DISTINCT_COUNT_DESCRIPTION_DESC',
  CollectionsAdminDistinctCountExternalUrlsAsc = 'COLLECTIONS_ADMIN_DISTINCT_COUNT_EXTERNAL_URLS_ASC',
  CollectionsAdminDistinctCountExternalUrlsDesc = 'COLLECTIONS_ADMIN_DISTINCT_COUNT_EXTERNAL_URLS_DESC',
  CollectionsAdminDistinctCountIdAsc = 'COLLECTIONS_ADMIN_DISTINCT_COUNT_ID_ASC',
  CollectionsAdminDistinctCountIdDesc = 'COLLECTIONS_ADMIN_DISTINCT_COUNT_ID_DESC',
  CollectionsAdminDistinctCountImageAsc = 'COLLECTIONS_ADMIN_DISTINCT_COUNT_IMAGE_ASC',
  CollectionsAdminDistinctCountImageDesc = 'COLLECTIONS_ADMIN_DISTINCT_COUNT_IMAGE_DESC',
  CollectionsAdminDistinctCountLabelAsc = 'COLLECTIONS_ADMIN_DISTINCT_COUNT_LABEL_ASC',
  CollectionsAdminDistinctCountLabelDesc = 'COLLECTIONS_ADMIN_DISTINCT_COUNT_LABEL_DESC',
  CollectionsAdminDistinctCountNameAsc = 'COLLECTIONS_ADMIN_DISTINCT_COUNT_NAME_ASC',
  CollectionsAdminDistinctCountNameDesc = 'COLLECTIONS_ADMIN_DISTINCT_COUNT_NAME_DESC',
  CollectionsAdminDistinctCountSymbolAsc = 'COLLECTIONS_ADMIN_DISTINCT_COUNT_SYMBOL_ASC',
  CollectionsAdminDistinctCountSymbolDesc = 'COLLECTIONS_ADMIN_DISTINCT_COUNT_SYMBOL_DESC',
  CollectionsAdminDistinctCountUpdatedAtAsc = 'COLLECTIONS_ADMIN_DISTINCT_COUNT_UPDATED_AT_ASC',
  CollectionsAdminDistinctCountUpdatedAtDesc = 'COLLECTIONS_ADMIN_DISTINCT_COUNT_UPDATED_AT_DESC',
  CollectionsAdminDistinctCountUpdatedHeightAsc = 'COLLECTIONS_ADMIN_DISTINCT_COUNT_UPDATED_HEIGHT_ASC',
  CollectionsAdminDistinctCountUpdatedHeightDesc = 'COLLECTIONS_ADMIN_DISTINCT_COUNT_UPDATED_HEIGHT_DESC',
  CollectionsAdminDistinctCountUriAsc = 'COLLECTIONS_ADMIN_DISTINCT_COUNT_URI_ASC',
  CollectionsAdminDistinctCountUriDesc = 'COLLECTIONS_ADMIN_DISTINCT_COUNT_URI_DESC',
  CollectionsAdminDistinctCountVerifiedAsc = 'COLLECTIONS_ADMIN_DISTINCT_COUNT_VERIFIED_ASC',
  CollectionsAdminDistinctCountVerifiedDesc = 'COLLECTIONS_ADMIN_DISTINCT_COUNT_VERIFIED_DESC',
  CollectionsAdminMaxAdminIdAsc = 'COLLECTIONS_ADMIN_MAX_ADMIN_ID_ASC',
  CollectionsAdminMaxAdminIdDesc = 'COLLECTIONS_ADMIN_MAX_ADMIN_ID_DESC',
  CollectionsAdminMaxCodeIdAsc = 'COLLECTIONS_ADMIN_MAX_CODE_ID_ASC',
  CollectionsAdminMaxCodeIdDesc = 'COLLECTIONS_ADMIN_MAX_CODE_ID_DESC',
  CollectionsAdminMaxCoverAsc = 'COLLECTIONS_ADMIN_MAX_COVER_ASC',
  CollectionsAdminMaxCoverDesc = 'COLLECTIONS_ADMIN_MAX_COVER_DESC',
  CollectionsAdminMaxCreatedAtAsc = 'COLLECTIONS_ADMIN_MAX_CREATED_AT_ASC',
  CollectionsAdminMaxCreatedAtDesc = 'COLLECTIONS_ADMIN_MAX_CREATED_AT_DESC',
  CollectionsAdminMaxCreatedHeightAsc = 'COLLECTIONS_ADMIN_MAX_CREATED_HEIGHT_ASC',
  CollectionsAdminMaxCreatedHeightDesc = 'COLLECTIONS_ADMIN_MAX_CREATED_HEIGHT_DESC',
  CollectionsAdminMaxCreatorIdAsc = 'COLLECTIONS_ADMIN_MAX_CREATOR_ID_ASC',
  CollectionsAdminMaxCreatorIdDesc = 'COLLECTIONS_ADMIN_MAX_CREATOR_ID_DESC',
  CollectionsAdminMaxDescriptionAsc = 'COLLECTIONS_ADMIN_MAX_DESCRIPTION_ASC',
  CollectionsAdminMaxDescriptionDesc = 'COLLECTIONS_ADMIN_MAX_DESCRIPTION_DESC',
  CollectionsAdminMaxExternalUrlsAsc = 'COLLECTIONS_ADMIN_MAX_EXTERNAL_URLS_ASC',
  CollectionsAdminMaxExternalUrlsDesc = 'COLLECTIONS_ADMIN_MAX_EXTERNAL_URLS_DESC',
  CollectionsAdminMaxIdAsc = 'COLLECTIONS_ADMIN_MAX_ID_ASC',
  CollectionsAdminMaxIdDesc = 'COLLECTIONS_ADMIN_MAX_ID_DESC',
  CollectionsAdminMaxImageAsc = 'COLLECTIONS_ADMIN_MAX_IMAGE_ASC',
  CollectionsAdminMaxImageDesc = 'COLLECTIONS_ADMIN_MAX_IMAGE_DESC',
  CollectionsAdminMaxLabelAsc = 'COLLECTIONS_ADMIN_MAX_LABEL_ASC',
  CollectionsAdminMaxLabelDesc = 'COLLECTIONS_ADMIN_MAX_LABEL_DESC',
  CollectionsAdminMaxNameAsc = 'COLLECTIONS_ADMIN_MAX_NAME_ASC',
  CollectionsAdminMaxNameDesc = 'COLLECTIONS_ADMIN_MAX_NAME_DESC',
  CollectionsAdminMaxSymbolAsc = 'COLLECTIONS_ADMIN_MAX_SYMBOL_ASC',
  CollectionsAdminMaxSymbolDesc = 'COLLECTIONS_ADMIN_MAX_SYMBOL_DESC',
  CollectionsAdminMaxUpdatedAtAsc = 'COLLECTIONS_ADMIN_MAX_UPDATED_AT_ASC',
  CollectionsAdminMaxUpdatedAtDesc = 'COLLECTIONS_ADMIN_MAX_UPDATED_AT_DESC',
  CollectionsAdminMaxUpdatedHeightAsc = 'COLLECTIONS_ADMIN_MAX_UPDATED_HEIGHT_ASC',
  CollectionsAdminMaxUpdatedHeightDesc = 'COLLECTIONS_ADMIN_MAX_UPDATED_HEIGHT_DESC',
  CollectionsAdminMaxUriAsc = 'COLLECTIONS_ADMIN_MAX_URI_ASC',
  CollectionsAdminMaxUriDesc = 'COLLECTIONS_ADMIN_MAX_URI_DESC',
  CollectionsAdminMaxVerifiedAsc = 'COLLECTIONS_ADMIN_MAX_VERIFIED_ASC',
  CollectionsAdminMaxVerifiedDesc = 'COLLECTIONS_ADMIN_MAX_VERIFIED_DESC',
  CollectionsAdminMinAdminIdAsc = 'COLLECTIONS_ADMIN_MIN_ADMIN_ID_ASC',
  CollectionsAdminMinAdminIdDesc = 'COLLECTIONS_ADMIN_MIN_ADMIN_ID_DESC',
  CollectionsAdminMinCodeIdAsc = 'COLLECTIONS_ADMIN_MIN_CODE_ID_ASC',
  CollectionsAdminMinCodeIdDesc = 'COLLECTIONS_ADMIN_MIN_CODE_ID_DESC',
  CollectionsAdminMinCoverAsc = 'COLLECTIONS_ADMIN_MIN_COVER_ASC',
  CollectionsAdminMinCoverDesc = 'COLLECTIONS_ADMIN_MIN_COVER_DESC',
  CollectionsAdminMinCreatedAtAsc = 'COLLECTIONS_ADMIN_MIN_CREATED_AT_ASC',
  CollectionsAdminMinCreatedAtDesc = 'COLLECTIONS_ADMIN_MIN_CREATED_AT_DESC',
  CollectionsAdminMinCreatedHeightAsc = 'COLLECTIONS_ADMIN_MIN_CREATED_HEIGHT_ASC',
  CollectionsAdminMinCreatedHeightDesc = 'COLLECTIONS_ADMIN_MIN_CREATED_HEIGHT_DESC',
  CollectionsAdminMinCreatorIdAsc = 'COLLECTIONS_ADMIN_MIN_CREATOR_ID_ASC',
  CollectionsAdminMinCreatorIdDesc = 'COLLECTIONS_ADMIN_MIN_CREATOR_ID_DESC',
  CollectionsAdminMinDescriptionAsc = 'COLLECTIONS_ADMIN_MIN_DESCRIPTION_ASC',
  CollectionsAdminMinDescriptionDesc = 'COLLECTIONS_ADMIN_MIN_DESCRIPTION_DESC',
  CollectionsAdminMinExternalUrlsAsc = 'COLLECTIONS_ADMIN_MIN_EXTERNAL_URLS_ASC',
  CollectionsAdminMinExternalUrlsDesc = 'COLLECTIONS_ADMIN_MIN_EXTERNAL_URLS_DESC',
  CollectionsAdminMinIdAsc = 'COLLECTIONS_ADMIN_MIN_ID_ASC',
  CollectionsAdminMinIdDesc = 'COLLECTIONS_ADMIN_MIN_ID_DESC',
  CollectionsAdminMinImageAsc = 'COLLECTIONS_ADMIN_MIN_IMAGE_ASC',
  CollectionsAdminMinImageDesc = 'COLLECTIONS_ADMIN_MIN_IMAGE_DESC',
  CollectionsAdminMinLabelAsc = 'COLLECTIONS_ADMIN_MIN_LABEL_ASC',
  CollectionsAdminMinLabelDesc = 'COLLECTIONS_ADMIN_MIN_LABEL_DESC',
  CollectionsAdminMinNameAsc = 'COLLECTIONS_ADMIN_MIN_NAME_ASC',
  CollectionsAdminMinNameDesc = 'COLLECTIONS_ADMIN_MIN_NAME_DESC',
  CollectionsAdminMinSymbolAsc = 'COLLECTIONS_ADMIN_MIN_SYMBOL_ASC',
  CollectionsAdminMinSymbolDesc = 'COLLECTIONS_ADMIN_MIN_SYMBOL_DESC',
  CollectionsAdminMinUpdatedAtAsc = 'COLLECTIONS_ADMIN_MIN_UPDATED_AT_ASC',
  CollectionsAdminMinUpdatedAtDesc = 'COLLECTIONS_ADMIN_MIN_UPDATED_AT_DESC',
  CollectionsAdminMinUpdatedHeightAsc = 'COLLECTIONS_ADMIN_MIN_UPDATED_HEIGHT_ASC',
  CollectionsAdminMinUpdatedHeightDesc = 'COLLECTIONS_ADMIN_MIN_UPDATED_HEIGHT_DESC',
  CollectionsAdminMinUriAsc = 'COLLECTIONS_ADMIN_MIN_URI_ASC',
  CollectionsAdminMinUriDesc = 'COLLECTIONS_ADMIN_MIN_URI_DESC',
  CollectionsAdminMinVerifiedAsc = 'COLLECTIONS_ADMIN_MIN_VERIFIED_ASC',
  CollectionsAdminMinVerifiedDesc = 'COLLECTIONS_ADMIN_MIN_VERIFIED_DESC',
  CollectionsAdminStddevPopulationAdminIdAsc = 'COLLECTIONS_ADMIN_STDDEV_POPULATION_ADMIN_ID_ASC',
  CollectionsAdminStddevPopulationAdminIdDesc = 'COLLECTIONS_ADMIN_STDDEV_POPULATION_ADMIN_ID_DESC',
  CollectionsAdminStddevPopulationCodeIdAsc = 'COLLECTIONS_ADMIN_STDDEV_POPULATION_CODE_ID_ASC',
  CollectionsAdminStddevPopulationCodeIdDesc = 'COLLECTIONS_ADMIN_STDDEV_POPULATION_CODE_ID_DESC',
  CollectionsAdminStddevPopulationCoverAsc = 'COLLECTIONS_ADMIN_STDDEV_POPULATION_COVER_ASC',
  CollectionsAdminStddevPopulationCoverDesc = 'COLLECTIONS_ADMIN_STDDEV_POPULATION_COVER_DESC',
  CollectionsAdminStddevPopulationCreatedAtAsc = 'COLLECTIONS_ADMIN_STDDEV_POPULATION_CREATED_AT_ASC',
  CollectionsAdminStddevPopulationCreatedAtDesc = 'COLLECTIONS_ADMIN_STDDEV_POPULATION_CREATED_AT_DESC',
  CollectionsAdminStddevPopulationCreatedHeightAsc = 'COLLECTIONS_ADMIN_STDDEV_POPULATION_CREATED_HEIGHT_ASC',
  CollectionsAdminStddevPopulationCreatedHeightDesc = 'COLLECTIONS_ADMIN_STDDEV_POPULATION_CREATED_HEIGHT_DESC',
  CollectionsAdminStddevPopulationCreatorIdAsc = 'COLLECTIONS_ADMIN_STDDEV_POPULATION_CREATOR_ID_ASC',
  CollectionsAdminStddevPopulationCreatorIdDesc = 'COLLECTIONS_ADMIN_STDDEV_POPULATION_CREATOR_ID_DESC',
  CollectionsAdminStddevPopulationDescriptionAsc = 'COLLECTIONS_ADMIN_STDDEV_POPULATION_DESCRIPTION_ASC',
  CollectionsAdminStddevPopulationDescriptionDesc = 'COLLECTIONS_ADMIN_STDDEV_POPULATION_DESCRIPTION_DESC',
  CollectionsAdminStddevPopulationExternalUrlsAsc = 'COLLECTIONS_ADMIN_STDDEV_POPULATION_EXTERNAL_URLS_ASC',
  CollectionsAdminStddevPopulationExternalUrlsDesc = 'COLLECTIONS_ADMIN_STDDEV_POPULATION_EXTERNAL_URLS_DESC',
  CollectionsAdminStddevPopulationIdAsc = 'COLLECTIONS_ADMIN_STDDEV_POPULATION_ID_ASC',
  CollectionsAdminStddevPopulationIdDesc = 'COLLECTIONS_ADMIN_STDDEV_POPULATION_ID_DESC',
  CollectionsAdminStddevPopulationImageAsc = 'COLLECTIONS_ADMIN_STDDEV_POPULATION_IMAGE_ASC',
  CollectionsAdminStddevPopulationImageDesc = 'COLLECTIONS_ADMIN_STDDEV_POPULATION_IMAGE_DESC',
  CollectionsAdminStddevPopulationLabelAsc = 'COLLECTIONS_ADMIN_STDDEV_POPULATION_LABEL_ASC',
  CollectionsAdminStddevPopulationLabelDesc = 'COLLECTIONS_ADMIN_STDDEV_POPULATION_LABEL_DESC',
  CollectionsAdminStddevPopulationNameAsc = 'COLLECTIONS_ADMIN_STDDEV_POPULATION_NAME_ASC',
  CollectionsAdminStddevPopulationNameDesc = 'COLLECTIONS_ADMIN_STDDEV_POPULATION_NAME_DESC',
  CollectionsAdminStddevPopulationSymbolAsc = 'COLLECTIONS_ADMIN_STDDEV_POPULATION_SYMBOL_ASC',
  CollectionsAdminStddevPopulationSymbolDesc = 'COLLECTIONS_ADMIN_STDDEV_POPULATION_SYMBOL_DESC',
  CollectionsAdminStddevPopulationUpdatedAtAsc = 'COLLECTIONS_ADMIN_STDDEV_POPULATION_UPDATED_AT_ASC',
  CollectionsAdminStddevPopulationUpdatedAtDesc = 'COLLECTIONS_ADMIN_STDDEV_POPULATION_UPDATED_AT_DESC',
  CollectionsAdminStddevPopulationUpdatedHeightAsc = 'COLLECTIONS_ADMIN_STDDEV_POPULATION_UPDATED_HEIGHT_ASC',
  CollectionsAdminStddevPopulationUpdatedHeightDesc = 'COLLECTIONS_ADMIN_STDDEV_POPULATION_UPDATED_HEIGHT_DESC',
  CollectionsAdminStddevPopulationUriAsc = 'COLLECTIONS_ADMIN_STDDEV_POPULATION_URI_ASC',
  CollectionsAdminStddevPopulationUriDesc = 'COLLECTIONS_ADMIN_STDDEV_POPULATION_URI_DESC',
  CollectionsAdminStddevPopulationVerifiedAsc = 'COLLECTIONS_ADMIN_STDDEV_POPULATION_VERIFIED_ASC',
  CollectionsAdminStddevPopulationVerifiedDesc = 'COLLECTIONS_ADMIN_STDDEV_POPULATION_VERIFIED_DESC',
  CollectionsAdminStddevSampleAdminIdAsc = 'COLLECTIONS_ADMIN_STDDEV_SAMPLE_ADMIN_ID_ASC',
  CollectionsAdminStddevSampleAdminIdDesc = 'COLLECTIONS_ADMIN_STDDEV_SAMPLE_ADMIN_ID_DESC',
  CollectionsAdminStddevSampleCodeIdAsc = 'COLLECTIONS_ADMIN_STDDEV_SAMPLE_CODE_ID_ASC',
  CollectionsAdminStddevSampleCodeIdDesc = 'COLLECTIONS_ADMIN_STDDEV_SAMPLE_CODE_ID_DESC',
  CollectionsAdminStddevSampleCoverAsc = 'COLLECTIONS_ADMIN_STDDEV_SAMPLE_COVER_ASC',
  CollectionsAdminStddevSampleCoverDesc = 'COLLECTIONS_ADMIN_STDDEV_SAMPLE_COVER_DESC',
  CollectionsAdminStddevSampleCreatedAtAsc = 'COLLECTIONS_ADMIN_STDDEV_SAMPLE_CREATED_AT_ASC',
  CollectionsAdminStddevSampleCreatedAtDesc = 'COLLECTIONS_ADMIN_STDDEV_SAMPLE_CREATED_AT_DESC',
  CollectionsAdminStddevSampleCreatedHeightAsc = 'COLLECTIONS_ADMIN_STDDEV_SAMPLE_CREATED_HEIGHT_ASC',
  CollectionsAdminStddevSampleCreatedHeightDesc = 'COLLECTIONS_ADMIN_STDDEV_SAMPLE_CREATED_HEIGHT_DESC',
  CollectionsAdminStddevSampleCreatorIdAsc = 'COLLECTIONS_ADMIN_STDDEV_SAMPLE_CREATOR_ID_ASC',
  CollectionsAdminStddevSampleCreatorIdDesc = 'COLLECTIONS_ADMIN_STDDEV_SAMPLE_CREATOR_ID_DESC',
  CollectionsAdminStddevSampleDescriptionAsc = 'COLLECTIONS_ADMIN_STDDEV_SAMPLE_DESCRIPTION_ASC',
  CollectionsAdminStddevSampleDescriptionDesc = 'COLLECTIONS_ADMIN_STDDEV_SAMPLE_DESCRIPTION_DESC',
  CollectionsAdminStddevSampleExternalUrlsAsc = 'COLLECTIONS_ADMIN_STDDEV_SAMPLE_EXTERNAL_URLS_ASC',
  CollectionsAdminStddevSampleExternalUrlsDesc = 'COLLECTIONS_ADMIN_STDDEV_SAMPLE_EXTERNAL_URLS_DESC',
  CollectionsAdminStddevSampleIdAsc = 'COLLECTIONS_ADMIN_STDDEV_SAMPLE_ID_ASC',
  CollectionsAdminStddevSampleIdDesc = 'COLLECTIONS_ADMIN_STDDEV_SAMPLE_ID_DESC',
  CollectionsAdminStddevSampleImageAsc = 'COLLECTIONS_ADMIN_STDDEV_SAMPLE_IMAGE_ASC',
  CollectionsAdminStddevSampleImageDesc = 'COLLECTIONS_ADMIN_STDDEV_SAMPLE_IMAGE_DESC',
  CollectionsAdminStddevSampleLabelAsc = 'COLLECTIONS_ADMIN_STDDEV_SAMPLE_LABEL_ASC',
  CollectionsAdminStddevSampleLabelDesc = 'COLLECTIONS_ADMIN_STDDEV_SAMPLE_LABEL_DESC',
  CollectionsAdminStddevSampleNameAsc = 'COLLECTIONS_ADMIN_STDDEV_SAMPLE_NAME_ASC',
  CollectionsAdminStddevSampleNameDesc = 'COLLECTIONS_ADMIN_STDDEV_SAMPLE_NAME_DESC',
  CollectionsAdminStddevSampleSymbolAsc = 'COLLECTIONS_ADMIN_STDDEV_SAMPLE_SYMBOL_ASC',
  CollectionsAdminStddevSampleSymbolDesc = 'COLLECTIONS_ADMIN_STDDEV_SAMPLE_SYMBOL_DESC',
  CollectionsAdminStddevSampleUpdatedAtAsc = 'COLLECTIONS_ADMIN_STDDEV_SAMPLE_UPDATED_AT_ASC',
  CollectionsAdminStddevSampleUpdatedAtDesc = 'COLLECTIONS_ADMIN_STDDEV_SAMPLE_UPDATED_AT_DESC',
  CollectionsAdminStddevSampleUpdatedHeightAsc = 'COLLECTIONS_ADMIN_STDDEV_SAMPLE_UPDATED_HEIGHT_ASC',
  CollectionsAdminStddevSampleUpdatedHeightDesc = 'COLLECTIONS_ADMIN_STDDEV_SAMPLE_UPDATED_HEIGHT_DESC',
  CollectionsAdminStddevSampleUriAsc = 'COLLECTIONS_ADMIN_STDDEV_SAMPLE_URI_ASC',
  CollectionsAdminStddevSampleUriDesc = 'COLLECTIONS_ADMIN_STDDEV_SAMPLE_URI_DESC',
  CollectionsAdminStddevSampleVerifiedAsc = 'COLLECTIONS_ADMIN_STDDEV_SAMPLE_VERIFIED_ASC',
  CollectionsAdminStddevSampleVerifiedDesc = 'COLLECTIONS_ADMIN_STDDEV_SAMPLE_VERIFIED_DESC',
  CollectionsAdminSumAdminIdAsc = 'COLLECTIONS_ADMIN_SUM_ADMIN_ID_ASC',
  CollectionsAdminSumAdminIdDesc = 'COLLECTIONS_ADMIN_SUM_ADMIN_ID_DESC',
  CollectionsAdminSumCodeIdAsc = 'COLLECTIONS_ADMIN_SUM_CODE_ID_ASC',
  CollectionsAdminSumCodeIdDesc = 'COLLECTIONS_ADMIN_SUM_CODE_ID_DESC',
  CollectionsAdminSumCoverAsc = 'COLLECTIONS_ADMIN_SUM_COVER_ASC',
  CollectionsAdminSumCoverDesc = 'COLLECTIONS_ADMIN_SUM_COVER_DESC',
  CollectionsAdminSumCreatedAtAsc = 'COLLECTIONS_ADMIN_SUM_CREATED_AT_ASC',
  CollectionsAdminSumCreatedAtDesc = 'COLLECTIONS_ADMIN_SUM_CREATED_AT_DESC',
  CollectionsAdminSumCreatedHeightAsc = 'COLLECTIONS_ADMIN_SUM_CREATED_HEIGHT_ASC',
  CollectionsAdminSumCreatedHeightDesc = 'COLLECTIONS_ADMIN_SUM_CREATED_HEIGHT_DESC',
  CollectionsAdminSumCreatorIdAsc = 'COLLECTIONS_ADMIN_SUM_CREATOR_ID_ASC',
  CollectionsAdminSumCreatorIdDesc = 'COLLECTIONS_ADMIN_SUM_CREATOR_ID_DESC',
  CollectionsAdminSumDescriptionAsc = 'COLLECTIONS_ADMIN_SUM_DESCRIPTION_ASC',
  CollectionsAdminSumDescriptionDesc = 'COLLECTIONS_ADMIN_SUM_DESCRIPTION_DESC',
  CollectionsAdminSumExternalUrlsAsc = 'COLLECTIONS_ADMIN_SUM_EXTERNAL_URLS_ASC',
  CollectionsAdminSumExternalUrlsDesc = 'COLLECTIONS_ADMIN_SUM_EXTERNAL_URLS_DESC',
  CollectionsAdminSumIdAsc = 'COLLECTIONS_ADMIN_SUM_ID_ASC',
  CollectionsAdminSumIdDesc = 'COLLECTIONS_ADMIN_SUM_ID_DESC',
  CollectionsAdminSumImageAsc = 'COLLECTIONS_ADMIN_SUM_IMAGE_ASC',
  CollectionsAdminSumImageDesc = 'COLLECTIONS_ADMIN_SUM_IMAGE_DESC',
  CollectionsAdminSumLabelAsc = 'COLLECTIONS_ADMIN_SUM_LABEL_ASC',
  CollectionsAdminSumLabelDesc = 'COLLECTIONS_ADMIN_SUM_LABEL_DESC',
  CollectionsAdminSumNameAsc = 'COLLECTIONS_ADMIN_SUM_NAME_ASC',
  CollectionsAdminSumNameDesc = 'COLLECTIONS_ADMIN_SUM_NAME_DESC',
  CollectionsAdminSumSymbolAsc = 'COLLECTIONS_ADMIN_SUM_SYMBOL_ASC',
  CollectionsAdminSumSymbolDesc = 'COLLECTIONS_ADMIN_SUM_SYMBOL_DESC',
  CollectionsAdminSumUpdatedAtAsc = 'COLLECTIONS_ADMIN_SUM_UPDATED_AT_ASC',
  CollectionsAdminSumUpdatedAtDesc = 'COLLECTIONS_ADMIN_SUM_UPDATED_AT_DESC',
  CollectionsAdminSumUpdatedHeightAsc = 'COLLECTIONS_ADMIN_SUM_UPDATED_HEIGHT_ASC',
  CollectionsAdminSumUpdatedHeightDesc = 'COLLECTIONS_ADMIN_SUM_UPDATED_HEIGHT_DESC',
  CollectionsAdminSumUriAsc = 'COLLECTIONS_ADMIN_SUM_URI_ASC',
  CollectionsAdminSumUriDesc = 'COLLECTIONS_ADMIN_SUM_URI_DESC',
  CollectionsAdminSumVerifiedAsc = 'COLLECTIONS_ADMIN_SUM_VERIFIED_ASC',
  CollectionsAdminSumVerifiedDesc = 'COLLECTIONS_ADMIN_SUM_VERIFIED_DESC',
  CollectionsAdminVariancePopulationAdminIdAsc = 'COLLECTIONS_ADMIN_VARIANCE_POPULATION_ADMIN_ID_ASC',
  CollectionsAdminVariancePopulationAdminIdDesc = 'COLLECTIONS_ADMIN_VARIANCE_POPULATION_ADMIN_ID_DESC',
  CollectionsAdminVariancePopulationCodeIdAsc = 'COLLECTIONS_ADMIN_VARIANCE_POPULATION_CODE_ID_ASC',
  CollectionsAdminVariancePopulationCodeIdDesc = 'COLLECTIONS_ADMIN_VARIANCE_POPULATION_CODE_ID_DESC',
  CollectionsAdminVariancePopulationCoverAsc = 'COLLECTIONS_ADMIN_VARIANCE_POPULATION_COVER_ASC',
  CollectionsAdminVariancePopulationCoverDesc = 'COLLECTIONS_ADMIN_VARIANCE_POPULATION_COVER_DESC',
  CollectionsAdminVariancePopulationCreatedAtAsc = 'COLLECTIONS_ADMIN_VARIANCE_POPULATION_CREATED_AT_ASC',
  CollectionsAdminVariancePopulationCreatedAtDesc = 'COLLECTIONS_ADMIN_VARIANCE_POPULATION_CREATED_AT_DESC',
  CollectionsAdminVariancePopulationCreatedHeightAsc = 'COLLECTIONS_ADMIN_VARIANCE_POPULATION_CREATED_HEIGHT_ASC',
  CollectionsAdminVariancePopulationCreatedHeightDesc = 'COLLECTIONS_ADMIN_VARIANCE_POPULATION_CREATED_HEIGHT_DESC',
  CollectionsAdminVariancePopulationCreatorIdAsc = 'COLLECTIONS_ADMIN_VARIANCE_POPULATION_CREATOR_ID_ASC',
  CollectionsAdminVariancePopulationCreatorIdDesc = 'COLLECTIONS_ADMIN_VARIANCE_POPULATION_CREATOR_ID_DESC',
  CollectionsAdminVariancePopulationDescriptionAsc = 'COLLECTIONS_ADMIN_VARIANCE_POPULATION_DESCRIPTION_ASC',
  CollectionsAdminVariancePopulationDescriptionDesc = 'COLLECTIONS_ADMIN_VARIANCE_POPULATION_DESCRIPTION_DESC',
  CollectionsAdminVariancePopulationExternalUrlsAsc = 'COLLECTIONS_ADMIN_VARIANCE_POPULATION_EXTERNAL_URLS_ASC',
  CollectionsAdminVariancePopulationExternalUrlsDesc = 'COLLECTIONS_ADMIN_VARIANCE_POPULATION_EXTERNAL_URLS_DESC',
  CollectionsAdminVariancePopulationIdAsc = 'COLLECTIONS_ADMIN_VARIANCE_POPULATION_ID_ASC',
  CollectionsAdminVariancePopulationIdDesc = 'COLLECTIONS_ADMIN_VARIANCE_POPULATION_ID_DESC',
  CollectionsAdminVariancePopulationImageAsc = 'COLLECTIONS_ADMIN_VARIANCE_POPULATION_IMAGE_ASC',
  CollectionsAdminVariancePopulationImageDesc = 'COLLECTIONS_ADMIN_VARIANCE_POPULATION_IMAGE_DESC',
  CollectionsAdminVariancePopulationLabelAsc = 'COLLECTIONS_ADMIN_VARIANCE_POPULATION_LABEL_ASC',
  CollectionsAdminVariancePopulationLabelDesc = 'COLLECTIONS_ADMIN_VARIANCE_POPULATION_LABEL_DESC',
  CollectionsAdminVariancePopulationNameAsc = 'COLLECTIONS_ADMIN_VARIANCE_POPULATION_NAME_ASC',
  CollectionsAdminVariancePopulationNameDesc = 'COLLECTIONS_ADMIN_VARIANCE_POPULATION_NAME_DESC',
  CollectionsAdminVariancePopulationSymbolAsc = 'COLLECTIONS_ADMIN_VARIANCE_POPULATION_SYMBOL_ASC',
  CollectionsAdminVariancePopulationSymbolDesc = 'COLLECTIONS_ADMIN_VARIANCE_POPULATION_SYMBOL_DESC',
  CollectionsAdminVariancePopulationUpdatedAtAsc = 'COLLECTIONS_ADMIN_VARIANCE_POPULATION_UPDATED_AT_ASC',
  CollectionsAdminVariancePopulationUpdatedAtDesc = 'COLLECTIONS_ADMIN_VARIANCE_POPULATION_UPDATED_AT_DESC',
  CollectionsAdminVariancePopulationUpdatedHeightAsc = 'COLLECTIONS_ADMIN_VARIANCE_POPULATION_UPDATED_HEIGHT_ASC',
  CollectionsAdminVariancePopulationUpdatedHeightDesc = 'COLLECTIONS_ADMIN_VARIANCE_POPULATION_UPDATED_HEIGHT_DESC',
  CollectionsAdminVariancePopulationUriAsc = 'COLLECTIONS_ADMIN_VARIANCE_POPULATION_URI_ASC',
  CollectionsAdminVariancePopulationUriDesc = 'COLLECTIONS_ADMIN_VARIANCE_POPULATION_URI_DESC',
  CollectionsAdminVariancePopulationVerifiedAsc = 'COLLECTIONS_ADMIN_VARIANCE_POPULATION_VERIFIED_ASC',
  CollectionsAdminVariancePopulationVerifiedDesc = 'COLLECTIONS_ADMIN_VARIANCE_POPULATION_VERIFIED_DESC',
  CollectionsAdminVarianceSampleAdminIdAsc = 'COLLECTIONS_ADMIN_VARIANCE_SAMPLE_ADMIN_ID_ASC',
  CollectionsAdminVarianceSampleAdminIdDesc = 'COLLECTIONS_ADMIN_VARIANCE_SAMPLE_ADMIN_ID_DESC',
  CollectionsAdminVarianceSampleCodeIdAsc = 'COLLECTIONS_ADMIN_VARIANCE_SAMPLE_CODE_ID_ASC',
  CollectionsAdminVarianceSampleCodeIdDesc = 'COLLECTIONS_ADMIN_VARIANCE_SAMPLE_CODE_ID_DESC',
  CollectionsAdminVarianceSampleCoverAsc = 'COLLECTIONS_ADMIN_VARIANCE_SAMPLE_COVER_ASC',
  CollectionsAdminVarianceSampleCoverDesc = 'COLLECTIONS_ADMIN_VARIANCE_SAMPLE_COVER_DESC',
  CollectionsAdminVarianceSampleCreatedAtAsc = 'COLLECTIONS_ADMIN_VARIANCE_SAMPLE_CREATED_AT_ASC',
  CollectionsAdminVarianceSampleCreatedAtDesc = 'COLLECTIONS_ADMIN_VARIANCE_SAMPLE_CREATED_AT_DESC',
  CollectionsAdminVarianceSampleCreatedHeightAsc = 'COLLECTIONS_ADMIN_VARIANCE_SAMPLE_CREATED_HEIGHT_ASC',
  CollectionsAdminVarianceSampleCreatedHeightDesc = 'COLLECTIONS_ADMIN_VARIANCE_SAMPLE_CREATED_HEIGHT_DESC',
  CollectionsAdminVarianceSampleCreatorIdAsc = 'COLLECTIONS_ADMIN_VARIANCE_SAMPLE_CREATOR_ID_ASC',
  CollectionsAdminVarianceSampleCreatorIdDesc = 'COLLECTIONS_ADMIN_VARIANCE_SAMPLE_CREATOR_ID_DESC',
  CollectionsAdminVarianceSampleDescriptionAsc = 'COLLECTIONS_ADMIN_VARIANCE_SAMPLE_DESCRIPTION_ASC',
  CollectionsAdminVarianceSampleDescriptionDesc = 'COLLECTIONS_ADMIN_VARIANCE_SAMPLE_DESCRIPTION_DESC',
  CollectionsAdminVarianceSampleExternalUrlsAsc = 'COLLECTIONS_ADMIN_VARIANCE_SAMPLE_EXTERNAL_URLS_ASC',
  CollectionsAdminVarianceSampleExternalUrlsDesc = 'COLLECTIONS_ADMIN_VARIANCE_SAMPLE_EXTERNAL_URLS_DESC',
  CollectionsAdminVarianceSampleIdAsc = 'COLLECTIONS_ADMIN_VARIANCE_SAMPLE_ID_ASC',
  CollectionsAdminVarianceSampleIdDesc = 'COLLECTIONS_ADMIN_VARIANCE_SAMPLE_ID_DESC',
  CollectionsAdminVarianceSampleImageAsc = 'COLLECTIONS_ADMIN_VARIANCE_SAMPLE_IMAGE_ASC',
  CollectionsAdminVarianceSampleImageDesc = 'COLLECTIONS_ADMIN_VARIANCE_SAMPLE_IMAGE_DESC',
  CollectionsAdminVarianceSampleLabelAsc = 'COLLECTIONS_ADMIN_VARIANCE_SAMPLE_LABEL_ASC',
  CollectionsAdminVarianceSampleLabelDesc = 'COLLECTIONS_ADMIN_VARIANCE_SAMPLE_LABEL_DESC',
  CollectionsAdminVarianceSampleNameAsc = 'COLLECTIONS_ADMIN_VARIANCE_SAMPLE_NAME_ASC',
  CollectionsAdminVarianceSampleNameDesc = 'COLLECTIONS_ADMIN_VARIANCE_SAMPLE_NAME_DESC',
  CollectionsAdminVarianceSampleSymbolAsc = 'COLLECTIONS_ADMIN_VARIANCE_SAMPLE_SYMBOL_ASC',
  CollectionsAdminVarianceSampleSymbolDesc = 'COLLECTIONS_ADMIN_VARIANCE_SAMPLE_SYMBOL_DESC',
  CollectionsAdminVarianceSampleUpdatedAtAsc = 'COLLECTIONS_ADMIN_VARIANCE_SAMPLE_UPDATED_AT_ASC',
  CollectionsAdminVarianceSampleUpdatedAtDesc = 'COLLECTIONS_ADMIN_VARIANCE_SAMPLE_UPDATED_AT_DESC',
  CollectionsAdminVarianceSampleUpdatedHeightAsc = 'COLLECTIONS_ADMIN_VARIANCE_SAMPLE_UPDATED_HEIGHT_ASC',
  CollectionsAdminVarianceSampleUpdatedHeightDesc = 'COLLECTIONS_ADMIN_VARIANCE_SAMPLE_UPDATED_HEIGHT_DESC',
  CollectionsAdminVarianceSampleUriAsc = 'COLLECTIONS_ADMIN_VARIANCE_SAMPLE_URI_ASC',
  CollectionsAdminVarianceSampleUriDesc = 'COLLECTIONS_ADMIN_VARIANCE_SAMPLE_URI_DESC',
  CollectionsAdminVarianceSampleVerifiedAsc = 'COLLECTIONS_ADMIN_VARIANCE_SAMPLE_VERIFIED_ASC',
  CollectionsAdminVarianceSampleVerifiedDesc = 'COLLECTIONS_ADMIN_VARIANCE_SAMPLE_VERIFIED_DESC',
  CollectionsCreatedAverageAdminIdAsc = 'COLLECTIONS_CREATED_AVERAGE_ADMIN_ID_ASC',
  CollectionsCreatedAverageAdminIdDesc = 'COLLECTIONS_CREATED_AVERAGE_ADMIN_ID_DESC',
  CollectionsCreatedAverageCodeIdAsc = 'COLLECTIONS_CREATED_AVERAGE_CODE_ID_ASC',
  CollectionsCreatedAverageCodeIdDesc = 'COLLECTIONS_CREATED_AVERAGE_CODE_ID_DESC',
  CollectionsCreatedAverageCoverAsc = 'COLLECTIONS_CREATED_AVERAGE_COVER_ASC',
  CollectionsCreatedAverageCoverDesc = 'COLLECTIONS_CREATED_AVERAGE_COVER_DESC',
  CollectionsCreatedAverageCreatedAtAsc = 'COLLECTIONS_CREATED_AVERAGE_CREATED_AT_ASC',
  CollectionsCreatedAverageCreatedAtDesc = 'COLLECTIONS_CREATED_AVERAGE_CREATED_AT_DESC',
  CollectionsCreatedAverageCreatedHeightAsc = 'COLLECTIONS_CREATED_AVERAGE_CREATED_HEIGHT_ASC',
  CollectionsCreatedAverageCreatedHeightDesc = 'COLLECTIONS_CREATED_AVERAGE_CREATED_HEIGHT_DESC',
  CollectionsCreatedAverageCreatorIdAsc = 'COLLECTIONS_CREATED_AVERAGE_CREATOR_ID_ASC',
  CollectionsCreatedAverageCreatorIdDesc = 'COLLECTIONS_CREATED_AVERAGE_CREATOR_ID_DESC',
  CollectionsCreatedAverageDescriptionAsc = 'COLLECTIONS_CREATED_AVERAGE_DESCRIPTION_ASC',
  CollectionsCreatedAverageDescriptionDesc = 'COLLECTIONS_CREATED_AVERAGE_DESCRIPTION_DESC',
  CollectionsCreatedAverageExternalUrlsAsc = 'COLLECTIONS_CREATED_AVERAGE_EXTERNAL_URLS_ASC',
  CollectionsCreatedAverageExternalUrlsDesc = 'COLLECTIONS_CREATED_AVERAGE_EXTERNAL_URLS_DESC',
  CollectionsCreatedAverageIdAsc = 'COLLECTIONS_CREATED_AVERAGE_ID_ASC',
  CollectionsCreatedAverageIdDesc = 'COLLECTIONS_CREATED_AVERAGE_ID_DESC',
  CollectionsCreatedAverageImageAsc = 'COLLECTIONS_CREATED_AVERAGE_IMAGE_ASC',
  CollectionsCreatedAverageImageDesc = 'COLLECTIONS_CREATED_AVERAGE_IMAGE_DESC',
  CollectionsCreatedAverageLabelAsc = 'COLLECTIONS_CREATED_AVERAGE_LABEL_ASC',
  CollectionsCreatedAverageLabelDesc = 'COLLECTIONS_CREATED_AVERAGE_LABEL_DESC',
  CollectionsCreatedAverageNameAsc = 'COLLECTIONS_CREATED_AVERAGE_NAME_ASC',
  CollectionsCreatedAverageNameDesc = 'COLLECTIONS_CREATED_AVERAGE_NAME_DESC',
  CollectionsCreatedAverageSymbolAsc = 'COLLECTIONS_CREATED_AVERAGE_SYMBOL_ASC',
  CollectionsCreatedAverageSymbolDesc = 'COLLECTIONS_CREATED_AVERAGE_SYMBOL_DESC',
  CollectionsCreatedAverageUpdatedAtAsc = 'COLLECTIONS_CREATED_AVERAGE_UPDATED_AT_ASC',
  CollectionsCreatedAverageUpdatedAtDesc = 'COLLECTIONS_CREATED_AVERAGE_UPDATED_AT_DESC',
  CollectionsCreatedAverageUpdatedHeightAsc = 'COLLECTIONS_CREATED_AVERAGE_UPDATED_HEIGHT_ASC',
  CollectionsCreatedAverageUpdatedHeightDesc = 'COLLECTIONS_CREATED_AVERAGE_UPDATED_HEIGHT_DESC',
  CollectionsCreatedAverageUriAsc = 'COLLECTIONS_CREATED_AVERAGE_URI_ASC',
  CollectionsCreatedAverageUriDesc = 'COLLECTIONS_CREATED_AVERAGE_URI_DESC',
  CollectionsCreatedAverageVerifiedAsc = 'COLLECTIONS_CREATED_AVERAGE_VERIFIED_ASC',
  CollectionsCreatedAverageVerifiedDesc = 'COLLECTIONS_CREATED_AVERAGE_VERIFIED_DESC',
  CollectionsCreatedCountAsc = 'COLLECTIONS_CREATED_COUNT_ASC',
  CollectionsCreatedCountDesc = 'COLLECTIONS_CREATED_COUNT_DESC',
  CollectionsCreatedDistinctCountAdminIdAsc = 'COLLECTIONS_CREATED_DISTINCT_COUNT_ADMIN_ID_ASC',
  CollectionsCreatedDistinctCountAdminIdDesc = 'COLLECTIONS_CREATED_DISTINCT_COUNT_ADMIN_ID_DESC',
  CollectionsCreatedDistinctCountCodeIdAsc = 'COLLECTIONS_CREATED_DISTINCT_COUNT_CODE_ID_ASC',
  CollectionsCreatedDistinctCountCodeIdDesc = 'COLLECTIONS_CREATED_DISTINCT_COUNT_CODE_ID_DESC',
  CollectionsCreatedDistinctCountCoverAsc = 'COLLECTIONS_CREATED_DISTINCT_COUNT_COVER_ASC',
  CollectionsCreatedDistinctCountCoverDesc = 'COLLECTIONS_CREATED_DISTINCT_COUNT_COVER_DESC',
  CollectionsCreatedDistinctCountCreatedAtAsc = 'COLLECTIONS_CREATED_DISTINCT_COUNT_CREATED_AT_ASC',
  CollectionsCreatedDistinctCountCreatedAtDesc = 'COLLECTIONS_CREATED_DISTINCT_COUNT_CREATED_AT_DESC',
  CollectionsCreatedDistinctCountCreatedHeightAsc = 'COLLECTIONS_CREATED_DISTINCT_COUNT_CREATED_HEIGHT_ASC',
  CollectionsCreatedDistinctCountCreatedHeightDesc = 'COLLECTIONS_CREATED_DISTINCT_COUNT_CREATED_HEIGHT_DESC',
  CollectionsCreatedDistinctCountCreatorIdAsc = 'COLLECTIONS_CREATED_DISTINCT_COUNT_CREATOR_ID_ASC',
  CollectionsCreatedDistinctCountCreatorIdDesc = 'COLLECTIONS_CREATED_DISTINCT_COUNT_CREATOR_ID_DESC',
  CollectionsCreatedDistinctCountDescriptionAsc = 'COLLECTIONS_CREATED_DISTINCT_COUNT_DESCRIPTION_ASC',
  CollectionsCreatedDistinctCountDescriptionDesc = 'COLLECTIONS_CREATED_DISTINCT_COUNT_DESCRIPTION_DESC',
  CollectionsCreatedDistinctCountExternalUrlsAsc = 'COLLECTIONS_CREATED_DISTINCT_COUNT_EXTERNAL_URLS_ASC',
  CollectionsCreatedDistinctCountExternalUrlsDesc = 'COLLECTIONS_CREATED_DISTINCT_COUNT_EXTERNAL_URLS_DESC',
  CollectionsCreatedDistinctCountIdAsc = 'COLLECTIONS_CREATED_DISTINCT_COUNT_ID_ASC',
  CollectionsCreatedDistinctCountIdDesc = 'COLLECTIONS_CREATED_DISTINCT_COUNT_ID_DESC',
  CollectionsCreatedDistinctCountImageAsc = 'COLLECTIONS_CREATED_DISTINCT_COUNT_IMAGE_ASC',
  CollectionsCreatedDistinctCountImageDesc = 'COLLECTIONS_CREATED_DISTINCT_COUNT_IMAGE_DESC',
  CollectionsCreatedDistinctCountLabelAsc = 'COLLECTIONS_CREATED_DISTINCT_COUNT_LABEL_ASC',
  CollectionsCreatedDistinctCountLabelDesc = 'COLLECTIONS_CREATED_DISTINCT_COUNT_LABEL_DESC',
  CollectionsCreatedDistinctCountNameAsc = 'COLLECTIONS_CREATED_DISTINCT_COUNT_NAME_ASC',
  CollectionsCreatedDistinctCountNameDesc = 'COLLECTIONS_CREATED_DISTINCT_COUNT_NAME_DESC',
  CollectionsCreatedDistinctCountSymbolAsc = 'COLLECTIONS_CREATED_DISTINCT_COUNT_SYMBOL_ASC',
  CollectionsCreatedDistinctCountSymbolDesc = 'COLLECTIONS_CREATED_DISTINCT_COUNT_SYMBOL_DESC',
  CollectionsCreatedDistinctCountUpdatedAtAsc = 'COLLECTIONS_CREATED_DISTINCT_COUNT_UPDATED_AT_ASC',
  CollectionsCreatedDistinctCountUpdatedAtDesc = 'COLLECTIONS_CREATED_DISTINCT_COUNT_UPDATED_AT_DESC',
  CollectionsCreatedDistinctCountUpdatedHeightAsc = 'COLLECTIONS_CREATED_DISTINCT_COUNT_UPDATED_HEIGHT_ASC',
  CollectionsCreatedDistinctCountUpdatedHeightDesc = 'COLLECTIONS_CREATED_DISTINCT_COUNT_UPDATED_HEIGHT_DESC',
  CollectionsCreatedDistinctCountUriAsc = 'COLLECTIONS_CREATED_DISTINCT_COUNT_URI_ASC',
  CollectionsCreatedDistinctCountUriDesc = 'COLLECTIONS_CREATED_DISTINCT_COUNT_URI_DESC',
  CollectionsCreatedDistinctCountVerifiedAsc = 'COLLECTIONS_CREATED_DISTINCT_COUNT_VERIFIED_ASC',
  CollectionsCreatedDistinctCountVerifiedDesc = 'COLLECTIONS_CREATED_DISTINCT_COUNT_VERIFIED_DESC',
  CollectionsCreatedMaxAdminIdAsc = 'COLLECTIONS_CREATED_MAX_ADMIN_ID_ASC',
  CollectionsCreatedMaxAdminIdDesc = 'COLLECTIONS_CREATED_MAX_ADMIN_ID_DESC',
  CollectionsCreatedMaxCodeIdAsc = 'COLLECTIONS_CREATED_MAX_CODE_ID_ASC',
  CollectionsCreatedMaxCodeIdDesc = 'COLLECTIONS_CREATED_MAX_CODE_ID_DESC',
  CollectionsCreatedMaxCoverAsc = 'COLLECTIONS_CREATED_MAX_COVER_ASC',
  CollectionsCreatedMaxCoverDesc = 'COLLECTIONS_CREATED_MAX_COVER_DESC',
  CollectionsCreatedMaxCreatedAtAsc = 'COLLECTIONS_CREATED_MAX_CREATED_AT_ASC',
  CollectionsCreatedMaxCreatedAtDesc = 'COLLECTIONS_CREATED_MAX_CREATED_AT_DESC',
  CollectionsCreatedMaxCreatedHeightAsc = 'COLLECTIONS_CREATED_MAX_CREATED_HEIGHT_ASC',
  CollectionsCreatedMaxCreatedHeightDesc = 'COLLECTIONS_CREATED_MAX_CREATED_HEIGHT_DESC',
  CollectionsCreatedMaxCreatorIdAsc = 'COLLECTIONS_CREATED_MAX_CREATOR_ID_ASC',
  CollectionsCreatedMaxCreatorIdDesc = 'COLLECTIONS_CREATED_MAX_CREATOR_ID_DESC',
  CollectionsCreatedMaxDescriptionAsc = 'COLLECTIONS_CREATED_MAX_DESCRIPTION_ASC',
  CollectionsCreatedMaxDescriptionDesc = 'COLLECTIONS_CREATED_MAX_DESCRIPTION_DESC',
  CollectionsCreatedMaxExternalUrlsAsc = 'COLLECTIONS_CREATED_MAX_EXTERNAL_URLS_ASC',
  CollectionsCreatedMaxExternalUrlsDesc = 'COLLECTIONS_CREATED_MAX_EXTERNAL_URLS_DESC',
  CollectionsCreatedMaxIdAsc = 'COLLECTIONS_CREATED_MAX_ID_ASC',
  CollectionsCreatedMaxIdDesc = 'COLLECTIONS_CREATED_MAX_ID_DESC',
  CollectionsCreatedMaxImageAsc = 'COLLECTIONS_CREATED_MAX_IMAGE_ASC',
  CollectionsCreatedMaxImageDesc = 'COLLECTIONS_CREATED_MAX_IMAGE_DESC',
  CollectionsCreatedMaxLabelAsc = 'COLLECTIONS_CREATED_MAX_LABEL_ASC',
  CollectionsCreatedMaxLabelDesc = 'COLLECTIONS_CREATED_MAX_LABEL_DESC',
  CollectionsCreatedMaxNameAsc = 'COLLECTIONS_CREATED_MAX_NAME_ASC',
  CollectionsCreatedMaxNameDesc = 'COLLECTIONS_CREATED_MAX_NAME_DESC',
  CollectionsCreatedMaxSymbolAsc = 'COLLECTIONS_CREATED_MAX_SYMBOL_ASC',
  CollectionsCreatedMaxSymbolDesc = 'COLLECTIONS_CREATED_MAX_SYMBOL_DESC',
  CollectionsCreatedMaxUpdatedAtAsc = 'COLLECTIONS_CREATED_MAX_UPDATED_AT_ASC',
  CollectionsCreatedMaxUpdatedAtDesc = 'COLLECTIONS_CREATED_MAX_UPDATED_AT_DESC',
  CollectionsCreatedMaxUpdatedHeightAsc = 'COLLECTIONS_CREATED_MAX_UPDATED_HEIGHT_ASC',
  CollectionsCreatedMaxUpdatedHeightDesc = 'COLLECTIONS_CREATED_MAX_UPDATED_HEIGHT_DESC',
  CollectionsCreatedMaxUriAsc = 'COLLECTIONS_CREATED_MAX_URI_ASC',
  CollectionsCreatedMaxUriDesc = 'COLLECTIONS_CREATED_MAX_URI_DESC',
  CollectionsCreatedMaxVerifiedAsc = 'COLLECTIONS_CREATED_MAX_VERIFIED_ASC',
  CollectionsCreatedMaxVerifiedDesc = 'COLLECTIONS_CREATED_MAX_VERIFIED_DESC',
  CollectionsCreatedMinAdminIdAsc = 'COLLECTIONS_CREATED_MIN_ADMIN_ID_ASC',
  CollectionsCreatedMinAdminIdDesc = 'COLLECTIONS_CREATED_MIN_ADMIN_ID_DESC',
  CollectionsCreatedMinCodeIdAsc = 'COLLECTIONS_CREATED_MIN_CODE_ID_ASC',
  CollectionsCreatedMinCodeIdDesc = 'COLLECTIONS_CREATED_MIN_CODE_ID_DESC',
  CollectionsCreatedMinCoverAsc = 'COLLECTIONS_CREATED_MIN_COVER_ASC',
  CollectionsCreatedMinCoverDesc = 'COLLECTIONS_CREATED_MIN_COVER_DESC',
  CollectionsCreatedMinCreatedAtAsc = 'COLLECTIONS_CREATED_MIN_CREATED_AT_ASC',
  CollectionsCreatedMinCreatedAtDesc = 'COLLECTIONS_CREATED_MIN_CREATED_AT_DESC',
  CollectionsCreatedMinCreatedHeightAsc = 'COLLECTIONS_CREATED_MIN_CREATED_HEIGHT_ASC',
  CollectionsCreatedMinCreatedHeightDesc = 'COLLECTIONS_CREATED_MIN_CREATED_HEIGHT_DESC',
  CollectionsCreatedMinCreatorIdAsc = 'COLLECTIONS_CREATED_MIN_CREATOR_ID_ASC',
  CollectionsCreatedMinCreatorIdDesc = 'COLLECTIONS_CREATED_MIN_CREATOR_ID_DESC',
  CollectionsCreatedMinDescriptionAsc = 'COLLECTIONS_CREATED_MIN_DESCRIPTION_ASC',
  CollectionsCreatedMinDescriptionDesc = 'COLLECTIONS_CREATED_MIN_DESCRIPTION_DESC',
  CollectionsCreatedMinExternalUrlsAsc = 'COLLECTIONS_CREATED_MIN_EXTERNAL_URLS_ASC',
  CollectionsCreatedMinExternalUrlsDesc = 'COLLECTIONS_CREATED_MIN_EXTERNAL_URLS_DESC',
  CollectionsCreatedMinIdAsc = 'COLLECTIONS_CREATED_MIN_ID_ASC',
  CollectionsCreatedMinIdDesc = 'COLLECTIONS_CREATED_MIN_ID_DESC',
  CollectionsCreatedMinImageAsc = 'COLLECTIONS_CREATED_MIN_IMAGE_ASC',
  CollectionsCreatedMinImageDesc = 'COLLECTIONS_CREATED_MIN_IMAGE_DESC',
  CollectionsCreatedMinLabelAsc = 'COLLECTIONS_CREATED_MIN_LABEL_ASC',
  CollectionsCreatedMinLabelDesc = 'COLLECTIONS_CREATED_MIN_LABEL_DESC',
  CollectionsCreatedMinNameAsc = 'COLLECTIONS_CREATED_MIN_NAME_ASC',
  CollectionsCreatedMinNameDesc = 'COLLECTIONS_CREATED_MIN_NAME_DESC',
  CollectionsCreatedMinSymbolAsc = 'COLLECTIONS_CREATED_MIN_SYMBOL_ASC',
  CollectionsCreatedMinSymbolDesc = 'COLLECTIONS_CREATED_MIN_SYMBOL_DESC',
  CollectionsCreatedMinUpdatedAtAsc = 'COLLECTIONS_CREATED_MIN_UPDATED_AT_ASC',
  CollectionsCreatedMinUpdatedAtDesc = 'COLLECTIONS_CREATED_MIN_UPDATED_AT_DESC',
  CollectionsCreatedMinUpdatedHeightAsc = 'COLLECTIONS_CREATED_MIN_UPDATED_HEIGHT_ASC',
  CollectionsCreatedMinUpdatedHeightDesc = 'COLLECTIONS_CREATED_MIN_UPDATED_HEIGHT_DESC',
  CollectionsCreatedMinUriAsc = 'COLLECTIONS_CREATED_MIN_URI_ASC',
  CollectionsCreatedMinUriDesc = 'COLLECTIONS_CREATED_MIN_URI_DESC',
  CollectionsCreatedMinVerifiedAsc = 'COLLECTIONS_CREATED_MIN_VERIFIED_ASC',
  CollectionsCreatedMinVerifiedDesc = 'COLLECTIONS_CREATED_MIN_VERIFIED_DESC',
  CollectionsCreatedStddevPopulationAdminIdAsc = 'COLLECTIONS_CREATED_STDDEV_POPULATION_ADMIN_ID_ASC',
  CollectionsCreatedStddevPopulationAdminIdDesc = 'COLLECTIONS_CREATED_STDDEV_POPULATION_ADMIN_ID_DESC',
  CollectionsCreatedStddevPopulationCodeIdAsc = 'COLLECTIONS_CREATED_STDDEV_POPULATION_CODE_ID_ASC',
  CollectionsCreatedStddevPopulationCodeIdDesc = 'COLLECTIONS_CREATED_STDDEV_POPULATION_CODE_ID_DESC',
  CollectionsCreatedStddevPopulationCoverAsc = 'COLLECTIONS_CREATED_STDDEV_POPULATION_COVER_ASC',
  CollectionsCreatedStddevPopulationCoverDesc = 'COLLECTIONS_CREATED_STDDEV_POPULATION_COVER_DESC',
  CollectionsCreatedStddevPopulationCreatedAtAsc = 'COLLECTIONS_CREATED_STDDEV_POPULATION_CREATED_AT_ASC',
  CollectionsCreatedStddevPopulationCreatedAtDesc = 'COLLECTIONS_CREATED_STDDEV_POPULATION_CREATED_AT_DESC',
  CollectionsCreatedStddevPopulationCreatedHeightAsc = 'COLLECTIONS_CREATED_STDDEV_POPULATION_CREATED_HEIGHT_ASC',
  CollectionsCreatedStddevPopulationCreatedHeightDesc = 'COLLECTIONS_CREATED_STDDEV_POPULATION_CREATED_HEIGHT_DESC',
  CollectionsCreatedStddevPopulationCreatorIdAsc = 'COLLECTIONS_CREATED_STDDEV_POPULATION_CREATOR_ID_ASC',
  CollectionsCreatedStddevPopulationCreatorIdDesc = 'COLLECTIONS_CREATED_STDDEV_POPULATION_CREATOR_ID_DESC',
  CollectionsCreatedStddevPopulationDescriptionAsc = 'COLLECTIONS_CREATED_STDDEV_POPULATION_DESCRIPTION_ASC',
  CollectionsCreatedStddevPopulationDescriptionDesc = 'COLLECTIONS_CREATED_STDDEV_POPULATION_DESCRIPTION_DESC',
  CollectionsCreatedStddevPopulationExternalUrlsAsc = 'COLLECTIONS_CREATED_STDDEV_POPULATION_EXTERNAL_URLS_ASC',
  CollectionsCreatedStddevPopulationExternalUrlsDesc = 'COLLECTIONS_CREATED_STDDEV_POPULATION_EXTERNAL_URLS_DESC',
  CollectionsCreatedStddevPopulationIdAsc = 'COLLECTIONS_CREATED_STDDEV_POPULATION_ID_ASC',
  CollectionsCreatedStddevPopulationIdDesc = 'COLLECTIONS_CREATED_STDDEV_POPULATION_ID_DESC',
  CollectionsCreatedStddevPopulationImageAsc = 'COLLECTIONS_CREATED_STDDEV_POPULATION_IMAGE_ASC',
  CollectionsCreatedStddevPopulationImageDesc = 'COLLECTIONS_CREATED_STDDEV_POPULATION_IMAGE_DESC',
  CollectionsCreatedStddevPopulationLabelAsc = 'COLLECTIONS_CREATED_STDDEV_POPULATION_LABEL_ASC',
  CollectionsCreatedStddevPopulationLabelDesc = 'COLLECTIONS_CREATED_STDDEV_POPULATION_LABEL_DESC',
  CollectionsCreatedStddevPopulationNameAsc = 'COLLECTIONS_CREATED_STDDEV_POPULATION_NAME_ASC',
  CollectionsCreatedStddevPopulationNameDesc = 'COLLECTIONS_CREATED_STDDEV_POPULATION_NAME_DESC',
  CollectionsCreatedStddevPopulationSymbolAsc = 'COLLECTIONS_CREATED_STDDEV_POPULATION_SYMBOL_ASC',
  CollectionsCreatedStddevPopulationSymbolDesc = 'COLLECTIONS_CREATED_STDDEV_POPULATION_SYMBOL_DESC',
  CollectionsCreatedStddevPopulationUpdatedAtAsc = 'COLLECTIONS_CREATED_STDDEV_POPULATION_UPDATED_AT_ASC',
  CollectionsCreatedStddevPopulationUpdatedAtDesc = 'COLLECTIONS_CREATED_STDDEV_POPULATION_UPDATED_AT_DESC',
  CollectionsCreatedStddevPopulationUpdatedHeightAsc = 'COLLECTIONS_CREATED_STDDEV_POPULATION_UPDATED_HEIGHT_ASC',
  CollectionsCreatedStddevPopulationUpdatedHeightDesc = 'COLLECTIONS_CREATED_STDDEV_POPULATION_UPDATED_HEIGHT_DESC',
  CollectionsCreatedStddevPopulationUriAsc = 'COLLECTIONS_CREATED_STDDEV_POPULATION_URI_ASC',
  CollectionsCreatedStddevPopulationUriDesc = 'COLLECTIONS_CREATED_STDDEV_POPULATION_URI_DESC',
  CollectionsCreatedStddevPopulationVerifiedAsc = 'COLLECTIONS_CREATED_STDDEV_POPULATION_VERIFIED_ASC',
  CollectionsCreatedStddevPopulationVerifiedDesc = 'COLLECTIONS_CREATED_STDDEV_POPULATION_VERIFIED_DESC',
  CollectionsCreatedStddevSampleAdminIdAsc = 'COLLECTIONS_CREATED_STDDEV_SAMPLE_ADMIN_ID_ASC',
  CollectionsCreatedStddevSampleAdminIdDesc = 'COLLECTIONS_CREATED_STDDEV_SAMPLE_ADMIN_ID_DESC',
  CollectionsCreatedStddevSampleCodeIdAsc = 'COLLECTIONS_CREATED_STDDEV_SAMPLE_CODE_ID_ASC',
  CollectionsCreatedStddevSampleCodeIdDesc = 'COLLECTIONS_CREATED_STDDEV_SAMPLE_CODE_ID_DESC',
  CollectionsCreatedStddevSampleCoverAsc = 'COLLECTIONS_CREATED_STDDEV_SAMPLE_COVER_ASC',
  CollectionsCreatedStddevSampleCoverDesc = 'COLLECTIONS_CREATED_STDDEV_SAMPLE_COVER_DESC',
  CollectionsCreatedStddevSampleCreatedAtAsc = 'COLLECTIONS_CREATED_STDDEV_SAMPLE_CREATED_AT_ASC',
  CollectionsCreatedStddevSampleCreatedAtDesc = 'COLLECTIONS_CREATED_STDDEV_SAMPLE_CREATED_AT_DESC',
  CollectionsCreatedStddevSampleCreatedHeightAsc = 'COLLECTIONS_CREATED_STDDEV_SAMPLE_CREATED_HEIGHT_ASC',
  CollectionsCreatedStddevSampleCreatedHeightDesc = 'COLLECTIONS_CREATED_STDDEV_SAMPLE_CREATED_HEIGHT_DESC',
  CollectionsCreatedStddevSampleCreatorIdAsc = 'COLLECTIONS_CREATED_STDDEV_SAMPLE_CREATOR_ID_ASC',
  CollectionsCreatedStddevSampleCreatorIdDesc = 'COLLECTIONS_CREATED_STDDEV_SAMPLE_CREATOR_ID_DESC',
  CollectionsCreatedStddevSampleDescriptionAsc = 'COLLECTIONS_CREATED_STDDEV_SAMPLE_DESCRIPTION_ASC',
  CollectionsCreatedStddevSampleDescriptionDesc = 'COLLECTIONS_CREATED_STDDEV_SAMPLE_DESCRIPTION_DESC',
  CollectionsCreatedStddevSampleExternalUrlsAsc = 'COLLECTIONS_CREATED_STDDEV_SAMPLE_EXTERNAL_URLS_ASC',
  CollectionsCreatedStddevSampleExternalUrlsDesc = 'COLLECTIONS_CREATED_STDDEV_SAMPLE_EXTERNAL_URLS_DESC',
  CollectionsCreatedStddevSampleIdAsc = 'COLLECTIONS_CREATED_STDDEV_SAMPLE_ID_ASC',
  CollectionsCreatedStddevSampleIdDesc = 'COLLECTIONS_CREATED_STDDEV_SAMPLE_ID_DESC',
  CollectionsCreatedStddevSampleImageAsc = 'COLLECTIONS_CREATED_STDDEV_SAMPLE_IMAGE_ASC',
  CollectionsCreatedStddevSampleImageDesc = 'COLLECTIONS_CREATED_STDDEV_SAMPLE_IMAGE_DESC',
  CollectionsCreatedStddevSampleLabelAsc = 'COLLECTIONS_CREATED_STDDEV_SAMPLE_LABEL_ASC',
  CollectionsCreatedStddevSampleLabelDesc = 'COLLECTIONS_CREATED_STDDEV_SAMPLE_LABEL_DESC',
  CollectionsCreatedStddevSampleNameAsc = 'COLLECTIONS_CREATED_STDDEV_SAMPLE_NAME_ASC',
  CollectionsCreatedStddevSampleNameDesc = 'COLLECTIONS_CREATED_STDDEV_SAMPLE_NAME_DESC',
  CollectionsCreatedStddevSampleSymbolAsc = 'COLLECTIONS_CREATED_STDDEV_SAMPLE_SYMBOL_ASC',
  CollectionsCreatedStddevSampleSymbolDesc = 'COLLECTIONS_CREATED_STDDEV_SAMPLE_SYMBOL_DESC',
  CollectionsCreatedStddevSampleUpdatedAtAsc = 'COLLECTIONS_CREATED_STDDEV_SAMPLE_UPDATED_AT_ASC',
  CollectionsCreatedStddevSampleUpdatedAtDesc = 'COLLECTIONS_CREATED_STDDEV_SAMPLE_UPDATED_AT_DESC',
  CollectionsCreatedStddevSampleUpdatedHeightAsc = 'COLLECTIONS_CREATED_STDDEV_SAMPLE_UPDATED_HEIGHT_ASC',
  CollectionsCreatedStddevSampleUpdatedHeightDesc = 'COLLECTIONS_CREATED_STDDEV_SAMPLE_UPDATED_HEIGHT_DESC',
  CollectionsCreatedStddevSampleUriAsc = 'COLLECTIONS_CREATED_STDDEV_SAMPLE_URI_ASC',
  CollectionsCreatedStddevSampleUriDesc = 'COLLECTIONS_CREATED_STDDEV_SAMPLE_URI_DESC',
  CollectionsCreatedStddevSampleVerifiedAsc = 'COLLECTIONS_CREATED_STDDEV_SAMPLE_VERIFIED_ASC',
  CollectionsCreatedStddevSampleVerifiedDesc = 'COLLECTIONS_CREATED_STDDEV_SAMPLE_VERIFIED_DESC',
  CollectionsCreatedSumAdminIdAsc = 'COLLECTIONS_CREATED_SUM_ADMIN_ID_ASC',
  CollectionsCreatedSumAdminIdDesc = 'COLLECTIONS_CREATED_SUM_ADMIN_ID_DESC',
  CollectionsCreatedSumCodeIdAsc = 'COLLECTIONS_CREATED_SUM_CODE_ID_ASC',
  CollectionsCreatedSumCodeIdDesc = 'COLLECTIONS_CREATED_SUM_CODE_ID_DESC',
  CollectionsCreatedSumCoverAsc = 'COLLECTIONS_CREATED_SUM_COVER_ASC',
  CollectionsCreatedSumCoverDesc = 'COLLECTIONS_CREATED_SUM_COVER_DESC',
  CollectionsCreatedSumCreatedAtAsc = 'COLLECTIONS_CREATED_SUM_CREATED_AT_ASC',
  CollectionsCreatedSumCreatedAtDesc = 'COLLECTIONS_CREATED_SUM_CREATED_AT_DESC',
  CollectionsCreatedSumCreatedHeightAsc = 'COLLECTIONS_CREATED_SUM_CREATED_HEIGHT_ASC',
  CollectionsCreatedSumCreatedHeightDesc = 'COLLECTIONS_CREATED_SUM_CREATED_HEIGHT_DESC',
  CollectionsCreatedSumCreatorIdAsc = 'COLLECTIONS_CREATED_SUM_CREATOR_ID_ASC',
  CollectionsCreatedSumCreatorIdDesc = 'COLLECTIONS_CREATED_SUM_CREATOR_ID_DESC',
  CollectionsCreatedSumDescriptionAsc = 'COLLECTIONS_CREATED_SUM_DESCRIPTION_ASC',
  CollectionsCreatedSumDescriptionDesc = 'COLLECTIONS_CREATED_SUM_DESCRIPTION_DESC',
  CollectionsCreatedSumExternalUrlsAsc = 'COLLECTIONS_CREATED_SUM_EXTERNAL_URLS_ASC',
  CollectionsCreatedSumExternalUrlsDesc = 'COLLECTIONS_CREATED_SUM_EXTERNAL_URLS_DESC',
  CollectionsCreatedSumIdAsc = 'COLLECTIONS_CREATED_SUM_ID_ASC',
  CollectionsCreatedSumIdDesc = 'COLLECTIONS_CREATED_SUM_ID_DESC',
  CollectionsCreatedSumImageAsc = 'COLLECTIONS_CREATED_SUM_IMAGE_ASC',
  CollectionsCreatedSumImageDesc = 'COLLECTIONS_CREATED_SUM_IMAGE_DESC',
  CollectionsCreatedSumLabelAsc = 'COLLECTIONS_CREATED_SUM_LABEL_ASC',
  CollectionsCreatedSumLabelDesc = 'COLLECTIONS_CREATED_SUM_LABEL_DESC',
  CollectionsCreatedSumNameAsc = 'COLLECTIONS_CREATED_SUM_NAME_ASC',
  CollectionsCreatedSumNameDesc = 'COLLECTIONS_CREATED_SUM_NAME_DESC',
  CollectionsCreatedSumSymbolAsc = 'COLLECTIONS_CREATED_SUM_SYMBOL_ASC',
  CollectionsCreatedSumSymbolDesc = 'COLLECTIONS_CREATED_SUM_SYMBOL_DESC',
  CollectionsCreatedSumUpdatedAtAsc = 'COLLECTIONS_CREATED_SUM_UPDATED_AT_ASC',
  CollectionsCreatedSumUpdatedAtDesc = 'COLLECTIONS_CREATED_SUM_UPDATED_AT_DESC',
  CollectionsCreatedSumUpdatedHeightAsc = 'COLLECTIONS_CREATED_SUM_UPDATED_HEIGHT_ASC',
  CollectionsCreatedSumUpdatedHeightDesc = 'COLLECTIONS_CREATED_SUM_UPDATED_HEIGHT_DESC',
  CollectionsCreatedSumUriAsc = 'COLLECTIONS_CREATED_SUM_URI_ASC',
  CollectionsCreatedSumUriDesc = 'COLLECTIONS_CREATED_SUM_URI_DESC',
  CollectionsCreatedSumVerifiedAsc = 'COLLECTIONS_CREATED_SUM_VERIFIED_ASC',
  CollectionsCreatedSumVerifiedDesc = 'COLLECTIONS_CREATED_SUM_VERIFIED_DESC',
  CollectionsCreatedVariancePopulationAdminIdAsc = 'COLLECTIONS_CREATED_VARIANCE_POPULATION_ADMIN_ID_ASC',
  CollectionsCreatedVariancePopulationAdminIdDesc = 'COLLECTIONS_CREATED_VARIANCE_POPULATION_ADMIN_ID_DESC',
  CollectionsCreatedVariancePopulationCodeIdAsc = 'COLLECTIONS_CREATED_VARIANCE_POPULATION_CODE_ID_ASC',
  CollectionsCreatedVariancePopulationCodeIdDesc = 'COLLECTIONS_CREATED_VARIANCE_POPULATION_CODE_ID_DESC',
  CollectionsCreatedVariancePopulationCoverAsc = 'COLLECTIONS_CREATED_VARIANCE_POPULATION_COVER_ASC',
  CollectionsCreatedVariancePopulationCoverDesc = 'COLLECTIONS_CREATED_VARIANCE_POPULATION_COVER_DESC',
  CollectionsCreatedVariancePopulationCreatedAtAsc = 'COLLECTIONS_CREATED_VARIANCE_POPULATION_CREATED_AT_ASC',
  CollectionsCreatedVariancePopulationCreatedAtDesc = 'COLLECTIONS_CREATED_VARIANCE_POPULATION_CREATED_AT_DESC',
  CollectionsCreatedVariancePopulationCreatedHeightAsc = 'COLLECTIONS_CREATED_VARIANCE_POPULATION_CREATED_HEIGHT_ASC',
  CollectionsCreatedVariancePopulationCreatedHeightDesc = 'COLLECTIONS_CREATED_VARIANCE_POPULATION_CREATED_HEIGHT_DESC',
  CollectionsCreatedVariancePopulationCreatorIdAsc = 'COLLECTIONS_CREATED_VARIANCE_POPULATION_CREATOR_ID_ASC',
  CollectionsCreatedVariancePopulationCreatorIdDesc = 'COLLECTIONS_CREATED_VARIANCE_POPULATION_CREATOR_ID_DESC',
  CollectionsCreatedVariancePopulationDescriptionAsc = 'COLLECTIONS_CREATED_VARIANCE_POPULATION_DESCRIPTION_ASC',
  CollectionsCreatedVariancePopulationDescriptionDesc = 'COLLECTIONS_CREATED_VARIANCE_POPULATION_DESCRIPTION_DESC',
  CollectionsCreatedVariancePopulationExternalUrlsAsc = 'COLLECTIONS_CREATED_VARIANCE_POPULATION_EXTERNAL_URLS_ASC',
  CollectionsCreatedVariancePopulationExternalUrlsDesc = 'COLLECTIONS_CREATED_VARIANCE_POPULATION_EXTERNAL_URLS_DESC',
  CollectionsCreatedVariancePopulationIdAsc = 'COLLECTIONS_CREATED_VARIANCE_POPULATION_ID_ASC',
  CollectionsCreatedVariancePopulationIdDesc = 'COLLECTIONS_CREATED_VARIANCE_POPULATION_ID_DESC',
  CollectionsCreatedVariancePopulationImageAsc = 'COLLECTIONS_CREATED_VARIANCE_POPULATION_IMAGE_ASC',
  CollectionsCreatedVariancePopulationImageDesc = 'COLLECTIONS_CREATED_VARIANCE_POPULATION_IMAGE_DESC',
  CollectionsCreatedVariancePopulationLabelAsc = 'COLLECTIONS_CREATED_VARIANCE_POPULATION_LABEL_ASC',
  CollectionsCreatedVariancePopulationLabelDesc = 'COLLECTIONS_CREATED_VARIANCE_POPULATION_LABEL_DESC',
  CollectionsCreatedVariancePopulationNameAsc = 'COLLECTIONS_CREATED_VARIANCE_POPULATION_NAME_ASC',
  CollectionsCreatedVariancePopulationNameDesc = 'COLLECTIONS_CREATED_VARIANCE_POPULATION_NAME_DESC',
  CollectionsCreatedVariancePopulationSymbolAsc = 'COLLECTIONS_CREATED_VARIANCE_POPULATION_SYMBOL_ASC',
  CollectionsCreatedVariancePopulationSymbolDesc = 'COLLECTIONS_CREATED_VARIANCE_POPULATION_SYMBOL_DESC',
  CollectionsCreatedVariancePopulationUpdatedAtAsc = 'COLLECTIONS_CREATED_VARIANCE_POPULATION_UPDATED_AT_ASC',
  CollectionsCreatedVariancePopulationUpdatedAtDesc = 'COLLECTIONS_CREATED_VARIANCE_POPULATION_UPDATED_AT_DESC',
  CollectionsCreatedVariancePopulationUpdatedHeightAsc = 'COLLECTIONS_CREATED_VARIANCE_POPULATION_UPDATED_HEIGHT_ASC',
  CollectionsCreatedVariancePopulationUpdatedHeightDesc = 'COLLECTIONS_CREATED_VARIANCE_POPULATION_UPDATED_HEIGHT_DESC',
  CollectionsCreatedVariancePopulationUriAsc = 'COLLECTIONS_CREATED_VARIANCE_POPULATION_URI_ASC',
  CollectionsCreatedVariancePopulationUriDesc = 'COLLECTIONS_CREATED_VARIANCE_POPULATION_URI_DESC',
  CollectionsCreatedVariancePopulationVerifiedAsc = 'COLLECTIONS_CREATED_VARIANCE_POPULATION_VERIFIED_ASC',
  CollectionsCreatedVariancePopulationVerifiedDesc = 'COLLECTIONS_CREATED_VARIANCE_POPULATION_VERIFIED_DESC',
  CollectionsCreatedVarianceSampleAdminIdAsc = 'COLLECTIONS_CREATED_VARIANCE_SAMPLE_ADMIN_ID_ASC',
  CollectionsCreatedVarianceSampleAdminIdDesc = 'COLLECTIONS_CREATED_VARIANCE_SAMPLE_ADMIN_ID_DESC',
  CollectionsCreatedVarianceSampleCodeIdAsc = 'COLLECTIONS_CREATED_VARIANCE_SAMPLE_CODE_ID_ASC',
  CollectionsCreatedVarianceSampleCodeIdDesc = 'COLLECTIONS_CREATED_VARIANCE_SAMPLE_CODE_ID_DESC',
  CollectionsCreatedVarianceSampleCoverAsc = 'COLLECTIONS_CREATED_VARIANCE_SAMPLE_COVER_ASC',
  CollectionsCreatedVarianceSampleCoverDesc = 'COLLECTIONS_CREATED_VARIANCE_SAMPLE_COVER_DESC',
  CollectionsCreatedVarianceSampleCreatedAtAsc = 'COLLECTIONS_CREATED_VARIANCE_SAMPLE_CREATED_AT_ASC',
  CollectionsCreatedVarianceSampleCreatedAtDesc = 'COLLECTIONS_CREATED_VARIANCE_SAMPLE_CREATED_AT_DESC',
  CollectionsCreatedVarianceSampleCreatedHeightAsc = 'COLLECTIONS_CREATED_VARIANCE_SAMPLE_CREATED_HEIGHT_ASC',
  CollectionsCreatedVarianceSampleCreatedHeightDesc = 'COLLECTIONS_CREATED_VARIANCE_SAMPLE_CREATED_HEIGHT_DESC',
  CollectionsCreatedVarianceSampleCreatorIdAsc = 'COLLECTIONS_CREATED_VARIANCE_SAMPLE_CREATOR_ID_ASC',
  CollectionsCreatedVarianceSampleCreatorIdDesc = 'COLLECTIONS_CREATED_VARIANCE_SAMPLE_CREATOR_ID_DESC',
  CollectionsCreatedVarianceSampleDescriptionAsc = 'COLLECTIONS_CREATED_VARIANCE_SAMPLE_DESCRIPTION_ASC',
  CollectionsCreatedVarianceSampleDescriptionDesc = 'COLLECTIONS_CREATED_VARIANCE_SAMPLE_DESCRIPTION_DESC',
  CollectionsCreatedVarianceSampleExternalUrlsAsc = 'COLLECTIONS_CREATED_VARIANCE_SAMPLE_EXTERNAL_URLS_ASC',
  CollectionsCreatedVarianceSampleExternalUrlsDesc = 'COLLECTIONS_CREATED_VARIANCE_SAMPLE_EXTERNAL_URLS_DESC',
  CollectionsCreatedVarianceSampleIdAsc = 'COLLECTIONS_CREATED_VARIANCE_SAMPLE_ID_ASC',
  CollectionsCreatedVarianceSampleIdDesc = 'COLLECTIONS_CREATED_VARIANCE_SAMPLE_ID_DESC',
  CollectionsCreatedVarianceSampleImageAsc = 'COLLECTIONS_CREATED_VARIANCE_SAMPLE_IMAGE_ASC',
  CollectionsCreatedVarianceSampleImageDesc = 'COLLECTIONS_CREATED_VARIANCE_SAMPLE_IMAGE_DESC',
  CollectionsCreatedVarianceSampleLabelAsc = 'COLLECTIONS_CREATED_VARIANCE_SAMPLE_LABEL_ASC',
  CollectionsCreatedVarianceSampleLabelDesc = 'COLLECTIONS_CREATED_VARIANCE_SAMPLE_LABEL_DESC',
  CollectionsCreatedVarianceSampleNameAsc = 'COLLECTIONS_CREATED_VARIANCE_SAMPLE_NAME_ASC',
  CollectionsCreatedVarianceSampleNameDesc = 'COLLECTIONS_CREATED_VARIANCE_SAMPLE_NAME_DESC',
  CollectionsCreatedVarianceSampleSymbolAsc = 'COLLECTIONS_CREATED_VARIANCE_SAMPLE_SYMBOL_ASC',
  CollectionsCreatedVarianceSampleSymbolDesc = 'COLLECTIONS_CREATED_VARIANCE_SAMPLE_SYMBOL_DESC',
  CollectionsCreatedVarianceSampleUpdatedAtAsc = 'COLLECTIONS_CREATED_VARIANCE_SAMPLE_UPDATED_AT_ASC',
  CollectionsCreatedVarianceSampleUpdatedAtDesc = 'COLLECTIONS_CREATED_VARIANCE_SAMPLE_UPDATED_AT_DESC',
  CollectionsCreatedVarianceSampleUpdatedHeightAsc = 'COLLECTIONS_CREATED_VARIANCE_SAMPLE_UPDATED_HEIGHT_ASC',
  CollectionsCreatedVarianceSampleUpdatedHeightDesc = 'COLLECTIONS_CREATED_VARIANCE_SAMPLE_UPDATED_HEIGHT_DESC',
  CollectionsCreatedVarianceSampleUriAsc = 'COLLECTIONS_CREATED_VARIANCE_SAMPLE_URI_ASC',
  CollectionsCreatedVarianceSampleUriDesc = 'COLLECTIONS_CREATED_VARIANCE_SAMPLE_URI_DESC',
  CollectionsCreatedVarianceSampleVerifiedAsc = 'COLLECTIONS_CREATED_VARIANCE_SAMPLE_VERIFIED_ASC',
  CollectionsCreatedVarianceSampleVerifiedDesc = 'COLLECTIONS_CREATED_VARIANCE_SAMPLE_VERIFIED_DESC',
  FantokensAuthorityAverageAuthorityIdAsc = 'FANTOKENS_AUTHORITY_AVERAGE_AUTHORITY_ID_ASC',
  FantokensAuthorityAverageAuthorityIdDesc = 'FANTOKENS_AUTHORITY_AVERAGE_AUTHORITY_ID_DESC',
  FantokensAuthorityAverageCreatedAtAsc = 'FANTOKENS_AUTHORITY_AVERAGE_CREATED_AT_ASC',
  FantokensAuthorityAverageCreatedAtDesc = 'FANTOKENS_AUTHORITY_AVERAGE_CREATED_AT_DESC',
  FantokensAuthorityAverageCreatedHeightAsc = 'FANTOKENS_AUTHORITY_AVERAGE_CREATED_HEIGHT_ASC',
  FantokensAuthorityAverageCreatedHeightDesc = 'FANTOKENS_AUTHORITY_AVERAGE_CREATED_HEIGHT_DESC',
  FantokensAuthorityAverageCreatorIdAsc = 'FANTOKENS_AUTHORITY_AVERAGE_CREATOR_ID_ASC',
  FantokensAuthorityAverageCreatorIdDesc = 'FANTOKENS_AUTHORITY_AVERAGE_CREATOR_ID_DESC',
  FantokensAuthorityAverageIdAsc = 'FANTOKENS_AUTHORITY_AVERAGE_ID_ASC',
  FantokensAuthorityAverageIdDesc = 'FANTOKENS_AUTHORITY_AVERAGE_ID_DESC',
  FantokensAuthorityAverageMaxSupplyAsc = 'FANTOKENS_AUTHORITY_AVERAGE_MAX_SUPPLY_ASC',
  FantokensAuthorityAverageMaxSupplyDesc = 'FANTOKENS_AUTHORITY_AVERAGE_MAX_SUPPLY_DESC',
  FantokensAuthorityAverageMetadataIdAsc = 'FANTOKENS_AUTHORITY_AVERAGE_METADATA_ID_ASC',
  FantokensAuthorityAverageMetadataIdDesc = 'FANTOKENS_AUTHORITY_AVERAGE_METADATA_ID_DESC',
  FantokensAuthorityAverageMinterIdAsc = 'FANTOKENS_AUTHORITY_AVERAGE_MINTER_ID_ASC',
  FantokensAuthorityAverageMinterIdDesc = 'FANTOKENS_AUTHORITY_AVERAGE_MINTER_ID_DESC',
  FantokensAuthorityAverageNameAsc = 'FANTOKENS_AUTHORITY_AVERAGE_NAME_ASC',
  FantokensAuthorityAverageNameDesc = 'FANTOKENS_AUTHORITY_AVERAGE_NAME_DESC',
  FantokensAuthorityAverageSupplyAsc = 'FANTOKENS_AUTHORITY_AVERAGE_SUPPLY_ASC',
  FantokensAuthorityAverageSupplyDesc = 'FANTOKENS_AUTHORITY_AVERAGE_SUPPLY_DESC',
  FantokensAuthorityAverageSymbolAsc = 'FANTOKENS_AUTHORITY_AVERAGE_SYMBOL_ASC',
  FantokensAuthorityAverageSymbolDesc = 'FANTOKENS_AUTHORITY_AVERAGE_SYMBOL_DESC',
  FantokensAuthorityAverageUpdatedAtAsc = 'FANTOKENS_AUTHORITY_AVERAGE_UPDATED_AT_ASC',
  FantokensAuthorityAverageUpdatedAtDesc = 'FANTOKENS_AUTHORITY_AVERAGE_UPDATED_AT_DESC',
  FantokensAuthorityAverageUpdatedHeightAsc = 'FANTOKENS_AUTHORITY_AVERAGE_UPDATED_HEIGHT_ASC',
  FantokensAuthorityAverageUpdatedHeightDesc = 'FANTOKENS_AUTHORITY_AVERAGE_UPDATED_HEIGHT_DESC',
  FantokensAuthorityAverageUriAsc = 'FANTOKENS_AUTHORITY_AVERAGE_URI_ASC',
  FantokensAuthorityAverageUriDesc = 'FANTOKENS_AUTHORITY_AVERAGE_URI_DESC',
  FantokensAuthorityAverageVerifiedAsc = 'FANTOKENS_AUTHORITY_AVERAGE_VERIFIED_ASC',
  FantokensAuthorityAverageVerifiedDesc = 'FANTOKENS_AUTHORITY_AVERAGE_VERIFIED_DESC',
  FantokensAuthorityCountAsc = 'FANTOKENS_AUTHORITY_COUNT_ASC',
  FantokensAuthorityCountDesc = 'FANTOKENS_AUTHORITY_COUNT_DESC',
  FantokensAuthorityDistinctCountAuthorityIdAsc = 'FANTOKENS_AUTHORITY_DISTINCT_COUNT_AUTHORITY_ID_ASC',
  FantokensAuthorityDistinctCountAuthorityIdDesc = 'FANTOKENS_AUTHORITY_DISTINCT_COUNT_AUTHORITY_ID_DESC',
  FantokensAuthorityDistinctCountCreatedAtAsc = 'FANTOKENS_AUTHORITY_DISTINCT_COUNT_CREATED_AT_ASC',
  FantokensAuthorityDistinctCountCreatedAtDesc = 'FANTOKENS_AUTHORITY_DISTINCT_COUNT_CREATED_AT_DESC',
  FantokensAuthorityDistinctCountCreatedHeightAsc = 'FANTOKENS_AUTHORITY_DISTINCT_COUNT_CREATED_HEIGHT_ASC',
  FantokensAuthorityDistinctCountCreatedHeightDesc = 'FANTOKENS_AUTHORITY_DISTINCT_COUNT_CREATED_HEIGHT_DESC',
  FantokensAuthorityDistinctCountCreatorIdAsc = 'FANTOKENS_AUTHORITY_DISTINCT_COUNT_CREATOR_ID_ASC',
  FantokensAuthorityDistinctCountCreatorIdDesc = 'FANTOKENS_AUTHORITY_DISTINCT_COUNT_CREATOR_ID_DESC',
  FantokensAuthorityDistinctCountIdAsc = 'FANTOKENS_AUTHORITY_DISTINCT_COUNT_ID_ASC',
  FantokensAuthorityDistinctCountIdDesc = 'FANTOKENS_AUTHORITY_DISTINCT_COUNT_ID_DESC',
  FantokensAuthorityDistinctCountMaxSupplyAsc = 'FANTOKENS_AUTHORITY_DISTINCT_COUNT_MAX_SUPPLY_ASC',
  FantokensAuthorityDistinctCountMaxSupplyDesc = 'FANTOKENS_AUTHORITY_DISTINCT_COUNT_MAX_SUPPLY_DESC',
  FantokensAuthorityDistinctCountMetadataIdAsc = 'FANTOKENS_AUTHORITY_DISTINCT_COUNT_METADATA_ID_ASC',
  FantokensAuthorityDistinctCountMetadataIdDesc = 'FANTOKENS_AUTHORITY_DISTINCT_COUNT_METADATA_ID_DESC',
  FantokensAuthorityDistinctCountMinterIdAsc = 'FANTOKENS_AUTHORITY_DISTINCT_COUNT_MINTER_ID_ASC',
  FantokensAuthorityDistinctCountMinterIdDesc = 'FANTOKENS_AUTHORITY_DISTINCT_COUNT_MINTER_ID_DESC',
  FantokensAuthorityDistinctCountNameAsc = 'FANTOKENS_AUTHORITY_DISTINCT_COUNT_NAME_ASC',
  FantokensAuthorityDistinctCountNameDesc = 'FANTOKENS_AUTHORITY_DISTINCT_COUNT_NAME_DESC',
  FantokensAuthorityDistinctCountSupplyAsc = 'FANTOKENS_AUTHORITY_DISTINCT_COUNT_SUPPLY_ASC',
  FantokensAuthorityDistinctCountSupplyDesc = 'FANTOKENS_AUTHORITY_DISTINCT_COUNT_SUPPLY_DESC',
  FantokensAuthorityDistinctCountSymbolAsc = 'FANTOKENS_AUTHORITY_DISTINCT_COUNT_SYMBOL_ASC',
  FantokensAuthorityDistinctCountSymbolDesc = 'FANTOKENS_AUTHORITY_DISTINCT_COUNT_SYMBOL_DESC',
  FantokensAuthorityDistinctCountUpdatedAtAsc = 'FANTOKENS_AUTHORITY_DISTINCT_COUNT_UPDATED_AT_ASC',
  FantokensAuthorityDistinctCountUpdatedAtDesc = 'FANTOKENS_AUTHORITY_DISTINCT_COUNT_UPDATED_AT_DESC',
  FantokensAuthorityDistinctCountUpdatedHeightAsc = 'FANTOKENS_AUTHORITY_DISTINCT_COUNT_UPDATED_HEIGHT_ASC',
  FantokensAuthorityDistinctCountUpdatedHeightDesc = 'FANTOKENS_AUTHORITY_DISTINCT_COUNT_UPDATED_HEIGHT_DESC',
  FantokensAuthorityDistinctCountUriAsc = 'FANTOKENS_AUTHORITY_DISTINCT_COUNT_URI_ASC',
  FantokensAuthorityDistinctCountUriDesc = 'FANTOKENS_AUTHORITY_DISTINCT_COUNT_URI_DESC',
  FantokensAuthorityDistinctCountVerifiedAsc = 'FANTOKENS_AUTHORITY_DISTINCT_COUNT_VERIFIED_ASC',
  FantokensAuthorityDistinctCountVerifiedDesc = 'FANTOKENS_AUTHORITY_DISTINCT_COUNT_VERIFIED_DESC',
  FantokensAuthorityMaxAuthorityIdAsc = 'FANTOKENS_AUTHORITY_MAX_AUTHORITY_ID_ASC',
  FantokensAuthorityMaxAuthorityIdDesc = 'FANTOKENS_AUTHORITY_MAX_AUTHORITY_ID_DESC',
  FantokensAuthorityMaxCreatedAtAsc = 'FANTOKENS_AUTHORITY_MAX_CREATED_AT_ASC',
  FantokensAuthorityMaxCreatedAtDesc = 'FANTOKENS_AUTHORITY_MAX_CREATED_AT_DESC',
  FantokensAuthorityMaxCreatedHeightAsc = 'FANTOKENS_AUTHORITY_MAX_CREATED_HEIGHT_ASC',
  FantokensAuthorityMaxCreatedHeightDesc = 'FANTOKENS_AUTHORITY_MAX_CREATED_HEIGHT_DESC',
  FantokensAuthorityMaxCreatorIdAsc = 'FANTOKENS_AUTHORITY_MAX_CREATOR_ID_ASC',
  FantokensAuthorityMaxCreatorIdDesc = 'FANTOKENS_AUTHORITY_MAX_CREATOR_ID_DESC',
  FantokensAuthorityMaxIdAsc = 'FANTOKENS_AUTHORITY_MAX_ID_ASC',
  FantokensAuthorityMaxIdDesc = 'FANTOKENS_AUTHORITY_MAX_ID_DESC',
  FantokensAuthorityMaxMaxSupplyAsc = 'FANTOKENS_AUTHORITY_MAX_MAX_SUPPLY_ASC',
  FantokensAuthorityMaxMaxSupplyDesc = 'FANTOKENS_AUTHORITY_MAX_MAX_SUPPLY_DESC',
  FantokensAuthorityMaxMetadataIdAsc = 'FANTOKENS_AUTHORITY_MAX_METADATA_ID_ASC',
  FantokensAuthorityMaxMetadataIdDesc = 'FANTOKENS_AUTHORITY_MAX_METADATA_ID_DESC',
  FantokensAuthorityMaxMinterIdAsc = 'FANTOKENS_AUTHORITY_MAX_MINTER_ID_ASC',
  FantokensAuthorityMaxMinterIdDesc = 'FANTOKENS_AUTHORITY_MAX_MINTER_ID_DESC',
  FantokensAuthorityMaxNameAsc = 'FANTOKENS_AUTHORITY_MAX_NAME_ASC',
  FantokensAuthorityMaxNameDesc = 'FANTOKENS_AUTHORITY_MAX_NAME_DESC',
  FantokensAuthorityMaxSupplyAsc = 'FANTOKENS_AUTHORITY_MAX_SUPPLY_ASC',
  FantokensAuthorityMaxSupplyDesc = 'FANTOKENS_AUTHORITY_MAX_SUPPLY_DESC',
  FantokensAuthorityMaxSymbolAsc = 'FANTOKENS_AUTHORITY_MAX_SYMBOL_ASC',
  FantokensAuthorityMaxSymbolDesc = 'FANTOKENS_AUTHORITY_MAX_SYMBOL_DESC',
  FantokensAuthorityMaxUpdatedAtAsc = 'FANTOKENS_AUTHORITY_MAX_UPDATED_AT_ASC',
  FantokensAuthorityMaxUpdatedAtDesc = 'FANTOKENS_AUTHORITY_MAX_UPDATED_AT_DESC',
  FantokensAuthorityMaxUpdatedHeightAsc = 'FANTOKENS_AUTHORITY_MAX_UPDATED_HEIGHT_ASC',
  FantokensAuthorityMaxUpdatedHeightDesc = 'FANTOKENS_AUTHORITY_MAX_UPDATED_HEIGHT_DESC',
  FantokensAuthorityMaxUriAsc = 'FANTOKENS_AUTHORITY_MAX_URI_ASC',
  FantokensAuthorityMaxUriDesc = 'FANTOKENS_AUTHORITY_MAX_URI_DESC',
  FantokensAuthorityMaxVerifiedAsc = 'FANTOKENS_AUTHORITY_MAX_VERIFIED_ASC',
  FantokensAuthorityMaxVerifiedDesc = 'FANTOKENS_AUTHORITY_MAX_VERIFIED_DESC',
  FantokensAuthorityMinAuthorityIdAsc = 'FANTOKENS_AUTHORITY_MIN_AUTHORITY_ID_ASC',
  FantokensAuthorityMinAuthorityIdDesc = 'FANTOKENS_AUTHORITY_MIN_AUTHORITY_ID_DESC',
  FantokensAuthorityMinCreatedAtAsc = 'FANTOKENS_AUTHORITY_MIN_CREATED_AT_ASC',
  FantokensAuthorityMinCreatedAtDesc = 'FANTOKENS_AUTHORITY_MIN_CREATED_AT_DESC',
  FantokensAuthorityMinCreatedHeightAsc = 'FANTOKENS_AUTHORITY_MIN_CREATED_HEIGHT_ASC',
  FantokensAuthorityMinCreatedHeightDesc = 'FANTOKENS_AUTHORITY_MIN_CREATED_HEIGHT_DESC',
  FantokensAuthorityMinCreatorIdAsc = 'FANTOKENS_AUTHORITY_MIN_CREATOR_ID_ASC',
  FantokensAuthorityMinCreatorIdDesc = 'FANTOKENS_AUTHORITY_MIN_CREATOR_ID_DESC',
  FantokensAuthorityMinIdAsc = 'FANTOKENS_AUTHORITY_MIN_ID_ASC',
  FantokensAuthorityMinIdDesc = 'FANTOKENS_AUTHORITY_MIN_ID_DESC',
  FantokensAuthorityMinMaxSupplyAsc = 'FANTOKENS_AUTHORITY_MIN_MAX_SUPPLY_ASC',
  FantokensAuthorityMinMaxSupplyDesc = 'FANTOKENS_AUTHORITY_MIN_MAX_SUPPLY_DESC',
  FantokensAuthorityMinMetadataIdAsc = 'FANTOKENS_AUTHORITY_MIN_METADATA_ID_ASC',
  FantokensAuthorityMinMetadataIdDesc = 'FANTOKENS_AUTHORITY_MIN_METADATA_ID_DESC',
  FantokensAuthorityMinMinterIdAsc = 'FANTOKENS_AUTHORITY_MIN_MINTER_ID_ASC',
  FantokensAuthorityMinMinterIdDesc = 'FANTOKENS_AUTHORITY_MIN_MINTER_ID_DESC',
  FantokensAuthorityMinNameAsc = 'FANTOKENS_AUTHORITY_MIN_NAME_ASC',
  FantokensAuthorityMinNameDesc = 'FANTOKENS_AUTHORITY_MIN_NAME_DESC',
  FantokensAuthorityMinSupplyAsc = 'FANTOKENS_AUTHORITY_MIN_SUPPLY_ASC',
  FantokensAuthorityMinSupplyDesc = 'FANTOKENS_AUTHORITY_MIN_SUPPLY_DESC',
  FantokensAuthorityMinSymbolAsc = 'FANTOKENS_AUTHORITY_MIN_SYMBOL_ASC',
  FantokensAuthorityMinSymbolDesc = 'FANTOKENS_AUTHORITY_MIN_SYMBOL_DESC',
  FantokensAuthorityMinUpdatedAtAsc = 'FANTOKENS_AUTHORITY_MIN_UPDATED_AT_ASC',
  FantokensAuthorityMinUpdatedAtDesc = 'FANTOKENS_AUTHORITY_MIN_UPDATED_AT_DESC',
  FantokensAuthorityMinUpdatedHeightAsc = 'FANTOKENS_AUTHORITY_MIN_UPDATED_HEIGHT_ASC',
  FantokensAuthorityMinUpdatedHeightDesc = 'FANTOKENS_AUTHORITY_MIN_UPDATED_HEIGHT_DESC',
  FantokensAuthorityMinUriAsc = 'FANTOKENS_AUTHORITY_MIN_URI_ASC',
  FantokensAuthorityMinUriDesc = 'FANTOKENS_AUTHORITY_MIN_URI_DESC',
  FantokensAuthorityMinVerifiedAsc = 'FANTOKENS_AUTHORITY_MIN_VERIFIED_ASC',
  FantokensAuthorityMinVerifiedDesc = 'FANTOKENS_AUTHORITY_MIN_VERIFIED_DESC',
  FantokensAuthorityStddevPopulationAuthorityIdAsc = 'FANTOKENS_AUTHORITY_STDDEV_POPULATION_AUTHORITY_ID_ASC',
  FantokensAuthorityStddevPopulationAuthorityIdDesc = 'FANTOKENS_AUTHORITY_STDDEV_POPULATION_AUTHORITY_ID_DESC',
  FantokensAuthorityStddevPopulationCreatedAtAsc = 'FANTOKENS_AUTHORITY_STDDEV_POPULATION_CREATED_AT_ASC',
  FantokensAuthorityStddevPopulationCreatedAtDesc = 'FANTOKENS_AUTHORITY_STDDEV_POPULATION_CREATED_AT_DESC',
  FantokensAuthorityStddevPopulationCreatedHeightAsc = 'FANTOKENS_AUTHORITY_STDDEV_POPULATION_CREATED_HEIGHT_ASC',
  FantokensAuthorityStddevPopulationCreatedHeightDesc = 'FANTOKENS_AUTHORITY_STDDEV_POPULATION_CREATED_HEIGHT_DESC',
  FantokensAuthorityStddevPopulationCreatorIdAsc = 'FANTOKENS_AUTHORITY_STDDEV_POPULATION_CREATOR_ID_ASC',
  FantokensAuthorityStddevPopulationCreatorIdDesc = 'FANTOKENS_AUTHORITY_STDDEV_POPULATION_CREATOR_ID_DESC',
  FantokensAuthorityStddevPopulationIdAsc = 'FANTOKENS_AUTHORITY_STDDEV_POPULATION_ID_ASC',
  FantokensAuthorityStddevPopulationIdDesc = 'FANTOKENS_AUTHORITY_STDDEV_POPULATION_ID_DESC',
  FantokensAuthorityStddevPopulationMaxSupplyAsc = 'FANTOKENS_AUTHORITY_STDDEV_POPULATION_MAX_SUPPLY_ASC',
  FantokensAuthorityStddevPopulationMaxSupplyDesc = 'FANTOKENS_AUTHORITY_STDDEV_POPULATION_MAX_SUPPLY_DESC',
  FantokensAuthorityStddevPopulationMetadataIdAsc = 'FANTOKENS_AUTHORITY_STDDEV_POPULATION_METADATA_ID_ASC',
  FantokensAuthorityStddevPopulationMetadataIdDesc = 'FANTOKENS_AUTHORITY_STDDEV_POPULATION_METADATA_ID_DESC',
  FantokensAuthorityStddevPopulationMinterIdAsc = 'FANTOKENS_AUTHORITY_STDDEV_POPULATION_MINTER_ID_ASC',
  FantokensAuthorityStddevPopulationMinterIdDesc = 'FANTOKENS_AUTHORITY_STDDEV_POPULATION_MINTER_ID_DESC',
  FantokensAuthorityStddevPopulationNameAsc = 'FANTOKENS_AUTHORITY_STDDEV_POPULATION_NAME_ASC',
  FantokensAuthorityStddevPopulationNameDesc = 'FANTOKENS_AUTHORITY_STDDEV_POPULATION_NAME_DESC',
  FantokensAuthorityStddevPopulationSupplyAsc = 'FANTOKENS_AUTHORITY_STDDEV_POPULATION_SUPPLY_ASC',
  FantokensAuthorityStddevPopulationSupplyDesc = 'FANTOKENS_AUTHORITY_STDDEV_POPULATION_SUPPLY_DESC',
  FantokensAuthorityStddevPopulationSymbolAsc = 'FANTOKENS_AUTHORITY_STDDEV_POPULATION_SYMBOL_ASC',
  FantokensAuthorityStddevPopulationSymbolDesc = 'FANTOKENS_AUTHORITY_STDDEV_POPULATION_SYMBOL_DESC',
  FantokensAuthorityStddevPopulationUpdatedAtAsc = 'FANTOKENS_AUTHORITY_STDDEV_POPULATION_UPDATED_AT_ASC',
  FantokensAuthorityStddevPopulationUpdatedAtDesc = 'FANTOKENS_AUTHORITY_STDDEV_POPULATION_UPDATED_AT_DESC',
  FantokensAuthorityStddevPopulationUpdatedHeightAsc = 'FANTOKENS_AUTHORITY_STDDEV_POPULATION_UPDATED_HEIGHT_ASC',
  FantokensAuthorityStddevPopulationUpdatedHeightDesc = 'FANTOKENS_AUTHORITY_STDDEV_POPULATION_UPDATED_HEIGHT_DESC',
  FantokensAuthorityStddevPopulationUriAsc = 'FANTOKENS_AUTHORITY_STDDEV_POPULATION_URI_ASC',
  FantokensAuthorityStddevPopulationUriDesc = 'FANTOKENS_AUTHORITY_STDDEV_POPULATION_URI_DESC',
  FantokensAuthorityStddevPopulationVerifiedAsc = 'FANTOKENS_AUTHORITY_STDDEV_POPULATION_VERIFIED_ASC',
  FantokensAuthorityStddevPopulationVerifiedDesc = 'FANTOKENS_AUTHORITY_STDDEV_POPULATION_VERIFIED_DESC',
  FantokensAuthorityStddevSampleAuthorityIdAsc = 'FANTOKENS_AUTHORITY_STDDEV_SAMPLE_AUTHORITY_ID_ASC',
  FantokensAuthorityStddevSampleAuthorityIdDesc = 'FANTOKENS_AUTHORITY_STDDEV_SAMPLE_AUTHORITY_ID_DESC',
  FantokensAuthorityStddevSampleCreatedAtAsc = 'FANTOKENS_AUTHORITY_STDDEV_SAMPLE_CREATED_AT_ASC',
  FantokensAuthorityStddevSampleCreatedAtDesc = 'FANTOKENS_AUTHORITY_STDDEV_SAMPLE_CREATED_AT_DESC',
  FantokensAuthorityStddevSampleCreatedHeightAsc = 'FANTOKENS_AUTHORITY_STDDEV_SAMPLE_CREATED_HEIGHT_ASC',
  FantokensAuthorityStddevSampleCreatedHeightDesc = 'FANTOKENS_AUTHORITY_STDDEV_SAMPLE_CREATED_HEIGHT_DESC',
  FantokensAuthorityStddevSampleCreatorIdAsc = 'FANTOKENS_AUTHORITY_STDDEV_SAMPLE_CREATOR_ID_ASC',
  FantokensAuthorityStddevSampleCreatorIdDesc = 'FANTOKENS_AUTHORITY_STDDEV_SAMPLE_CREATOR_ID_DESC',
  FantokensAuthorityStddevSampleIdAsc = 'FANTOKENS_AUTHORITY_STDDEV_SAMPLE_ID_ASC',
  FantokensAuthorityStddevSampleIdDesc = 'FANTOKENS_AUTHORITY_STDDEV_SAMPLE_ID_DESC',
  FantokensAuthorityStddevSampleMaxSupplyAsc = 'FANTOKENS_AUTHORITY_STDDEV_SAMPLE_MAX_SUPPLY_ASC',
  FantokensAuthorityStddevSampleMaxSupplyDesc = 'FANTOKENS_AUTHORITY_STDDEV_SAMPLE_MAX_SUPPLY_DESC',
  FantokensAuthorityStddevSampleMetadataIdAsc = 'FANTOKENS_AUTHORITY_STDDEV_SAMPLE_METADATA_ID_ASC',
  FantokensAuthorityStddevSampleMetadataIdDesc = 'FANTOKENS_AUTHORITY_STDDEV_SAMPLE_METADATA_ID_DESC',
  FantokensAuthorityStddevSampleMinterIdAsc = 'FANTOKENS_AUTHORITY_STDDEV_SAMPLE_MINTER_ID_ASC',
  FantokensAuthorityStddevSampleMinterIdDesc = 'FANTOKENS_AUTHORITY_STDDEV_SAMPLE_MINTER_ID_DESC',
  FantokensAuthorityStddevSampleNameAsc = 'FANTOKENS_AUTHORITY_STDDEV_SAMPLE_NAME_ASC',
  FantokensAuthorityStddevSampleNameDesc = 'FANTOKENS_AUTHORITY_STDDEV_SAMPLE_NAME_DESC',
  FantokensAuthorityStddevSampleSupplyAsc = 'FANTOKENS_AUTHORITY_STDDEV_SAMPLE_SUPPLY_ASC',
  FantokensAuthorityStddevSampleSupplyDesc = 'FANTOKENS_AUTHORITY_STDDEV_SAMPLE_SUPPLY_DESC',
  FantokensAuthorityStddevSampleSymbolAsc = 'FANTOKENS_AUTHORITY_STDDEV_SAMPLE_SYMBOL_ASC',
  FantokensAuthorityStddevSampleSymbolDesc = 'FANTOKENS_AUTHORITY_STDDEV_SAMPLE_SYMBOL_DESC',
  FantokensAuthorityStddevSampleUpdatedAtAsc = 'FANTOKENS_AUTHORITY_STDDEV_SAMPLE_UPDATED_AT_ASC',
  FantokensAuthorityStddevSampleUpdatedAtDesc = 'FANTOKENS_AUTHORITY_STDDEV_SAMPLE_UPDATED_AT_DESC',
  FantokensAuthorityStddevSampleUpdatedHeightAsc = 'FANTOKENS_AUTHORITY_STDDEV_SAMPLE_UPDATED_HEIGHT_ASC',
  FantokensAuthorityStddevSampleUpdatedHeightDesc = 'FANTOKENS_AUTHORITY_STDDEV_SAMPLE_UPDATED_HEIGHT_DESC',
  FantokensAuthorityStddevSampleUriAsc = 'FANTOKENS_AUTHORITY_STDDEV_SAMPLE_URI_ASC',
  FantokensAuthorityStddevSampleUriDesc = 'FANTOKENS_AUTHORITY_STDDEV_SAMPLE_URI_DESC',
  FantokensAuthorityStddevSampleVerifiedAsc = 'FANTOKENS_AUTHORITY_STDDEV_SAMPLE_VERIFIED_ASC',
  FantokensAuthorityStddevSampleVerifiedDesc = 'FANTOKENS_AUTHORITY_STDDEV_SAMPLE_VERIFIED_DESC',
  FantokensAuthoritySumAuthorityIdAsc = 'FANTOKENS_AUTHORITY_SUM_AUTHORITY_ID_ASC',
  FantokensAuthoritySumAuthorityIdDesc = 'FANTOKENS_AUTHORITY_SUM_AUTHORITY_ID_DESC',
  FantokensAuthoritySumCreatedAtAsc = 'FANTOKENS_AUTHORITY_SUM_CREATED_AT_ASC',
  FantokensAuthoritySumCreatedAtDesc = 'FANTOKENS_AUTHORITY_SUM_CREATED_AT_DESC',
  FantokensAuthoritySumCreatedHeightAsc = 'FANTOKENS_AUTHORITY_SUM_CREATED_HEIGHT_ASC',
  FantokensAuthoritySumCreatedHeightDesc = 'FANTOKENS_AUTHORITY_SUM_CREATED_HEIGHT_DESC',
  FantokensAuthoritySumCreatorIdAsc = 'FANTOKENS_AUTHORITY_SUM_CREATOR_ID_ASC',
  FantokensAuthoritySumCreatorIdDesc = 'FANTOKENS_AUTHORITY_SUM_CREATOR_ID_DESC',
  FantokensAuthoritySumIdAsc = 'FANTOKENS_AUTHORITY_SUM_ID_ASC',
  FantokensAuthoritySumIdDesc = 'FANTOKENS_AUTHORITY_SUM_ID_DESC',
  FantokensAuthoritySumMaxSupplyAsc = 'FANTOKENS_AUTHORITY_SUM_MAX_SUPPLY_ASC',
  FantokensAuthoritySumMaxSupplyDesc = 'FANTOKENS_AUTHORITY_SUM_MAX_SUPPLY_DESC',
  FantokensAuthoritySumMetadataIdAsc = 'FANTOKENS_AUTHORITY_SUM_METADATA_ID_ASC',
  FantokensAuthoritySumMetadataIdDesc = 'FANTOKENS_AUTHORITY_SUM_METADATA_ID_DESC',
  FantokensAuthoritySumMinterIdAsc = 'FANTOKENS_AUTHORITY_SUM_MINTER_ID_ASC',
  FantokensAuthoritySumMinterIdDesc = 'FANTOKENS_AUTHORITY_SUM_MINTER_ID_DESC',
  FantokensAuthoritySumNameAsc = 'FANTOKENS_AUTHORITY_SUM_NAME_ASC',
  FantokensAuthoritySumNameDesc = 'FANTOKENS_AUTHORITY_SUM_NAME_DESC',
  FantokensAuthoritySumSupplyAsc = 'FANTOKENS_AUTHORITY_SUM_SUPPLY_ASC',
  FantokensAuthoritySumSupplyDesc = 'FANTOKENS_AUTHORITY_SUM_SUPPLY_DESC',
  FantokensAuthoritySumSymbolAsc = 'FANTOKENS_AUTHORITY_SUM_SYMBOL_ASC',
  FantokensAuthoritySumSymbolDesc = 'FANTOKENS_AUTHORITY_SUM_SYMBOL_DESC',
  FantokensAuthoritySumUpdatedAtAsc = 'FANTOKENS_AUTHORITY_SUM_UPDATED_AT_ASC',
  FantokensAuthoritySumUpdatedAtDesc = 'FANTOKENS_AUTHORITY_SUM_UPDATED_AT_DESC',
  FantokensAuthoritySumUpdatedHeightAsc = 'FANTOKENS_AUTHORITY_SUM_UPDATED_HEIGHT_ASC',
  FantokensAuthoritySumUpdatedHeightDesc = 'FANTOKENS_AUTHORITY_SUM_UPDATED_HEIGHT_DESC',
  FantokensAuthoritySumUriAsc = 'FANTOKENS_AUTHORITY_SUM_URI_ASC',
  FantokensAuthoritySumUriDesc = 'FANTOKENS_AUTHORITY_SUM_URI_DESC',
  FantokensAuthoritySumVerifiedAsc = 'FANTOKENS_AUTHORITY_SUM_VERIFIED_ASC',
  FantokensAuthoritySumVerifiedDesc = 'FANTOKENS_AUTHORITY_SUM_VERIFIED_DESC',
  FantokensAuthorityVariancePopulationAuthorityIdAsc = 'FANTOKENS_AUTHORITY_VARIANCE_POPULATION_AUTHORITY_ID_ASC',
  FantokensAuthorityVariancePopulationAuthorityIdDesc = 'FANTOKENS_AUTHORITY_VARIANCE_POPULATION_AUTHORITY_ID_DESC',
  FantokensAuthorityVariancePopulationCreatedAtAsc = 'FANTOKENS_AUTHORITY_VARIANCE_POPULATION_CREATED_AT_ASC',
  FantokensAuthorityVariancePopulationCreatedAtDesc = 'FANTOKENS_AUTHORITY_VARIANCE_POPULATION_CREATED_AT_DESC',
  FantokensAuthorityVariancePopulationCreatedHeightAsc = 'FANTOKENS_AUTHORITY_VARIANCE_POPULATION_CREATED_HEIGHT_ASC',
  FantokensAuthorityVariancePopulationCreatedHeightDesc = 'FANTOKENS_AUTHORITY_VARIANCE_POPULATION_CREATED_HEIGHT_DESC',
  FantokensAuthorityVariancePopulationCreatorIdAsc = 'FANTOKENS_AUTHORITY_VARIANCE_POPULATION_CREATOR_ID_ASC',
  FantokensAuthorityVariancePopulationCreatorIdDesc = 'FANTOKENS_AUTHORITY_VARIANCE_POPULATION_CREATOR_ID_DESC',
  FantokensAuthorityVariancePopulationIdAsc = 'FANTOKENS_AUTHORITY_VARIANCE_POPULATION_ID_ASC',
  FantokensAuthorityVariancePopulationIdDesc = 'FANTOKENS_AUTHORITY_VARIANCE_POPULATION_ID_DESC',
  FantokensAuthorityVariancePopulationMaxSupplyAsc = 'FANTOKENS_AUTHORITY_VARIANCE_POPULATION_MAX_SUPPLY_ASC',
  FantokensAuthorityVariancePopulationMaxSupplyDesc = 'FANTOKENS_AUTHORITY_VARIANCE_POPULATION_MAX_SUPPLY_DESC',
  FantokensAuthorityVariancePopulationMetadataIdAsc = 'FANTOKENS_AUTHORITY_VARIANCE_POPULATION_METADATA_ID_ASC',
  FantokensAuthorityVariancePopulationMetadataIdDesc = 'FANTOKENS_AUTHORITY_VARIANCE_POPULATION_METADATA_ID_DESC',
  FantokensAuthorityVariancePopulationMinterIdAsc = 'FANTOKENS_AUTHORITY_VARIANCE_POPULATION_MINTER_ID_ASC',
  FantokensAuthorityVariancePopulationMinterIdDesc = 'FANTOKENS_AUTHORITY_VARIANCE_POPULATION_MINTER_ID_DESC',
  FantokensAuthorityVariancePopulationNameAsc = 'FANTOKENS_AUTHORITY_VARIANCE_POPULATION_NAME_ASC',
  FantokensAuthorityVariancePopulationNameDesc = 'FANTOKENS_AUTHORITY_VARIANCE_POPULATION_NAME_DESC',
  FantokensAuthorityVariancePopulationSupplyAsc = 'FANTOKENS_AUTHORITY_VARIANCE_POPULATION_SUPPLY_ASC',
  FantokensAuthorityVariancePopulationSupplyDesc = 'FANTOKENS_AUTHORITY_VARIANCE_POPULATION_SUPPLY_DESC',
  FantokensAuthorityVariancePopulationSymbolAsc = 'FANTOKENS_AUTHORITY_VARIANCE_POPULATION_SYMBOL_ASC',
  FantokensAuthorityVariancePopulationSymbolDesc = 'FANTOKENS_AUTHORITY_VARIANCE_POPULATION_SYMBOL_DESC',
  FantokensAuthorityVariancePopulationUpdatedAtAsc = 'FANTOKENS_AUTHORITY_VARIANCE_POPULATION_UPDATED_AT_ASC',
  FantokensAuthorityVariancePopulationUpdatedAtDesc = 'FANTOKENS_AUTHORITY_VARIANCE_POPULATION_UPDATED_AT_DESC',
  FantokensAuthorityVariancePopulationUpdatedHeightAsc = 'FANTOKENS_AUTHORITY_VARIANCE_POPULATION_UPDATED_HEIGHT_ASC',
  FantokensAuthorityVariancePopulationUpdatedHeightDesc = 'FANTOKENS_AUTHORITY_VARIANCE_POPULATION_UPDATED_HEIGHT_DESC',
  FantokensAuthorityVariancePopulationUriAsc = 'FANTOKENS_AUTHORITY_VARIANCE_POPULATION_URI_ASC',
  FantokensAuthorityVariancePopulationUriDesc = 'FANTOKENS_AUTHORITY_VARIANCE_POPULATION_URI_DESC',
  FantokensAuthorityVariancePopulationVerifiedAsc = 'FANTOKENS_AUTHORITY_VARIANCE_POPULATION_VERIFIED_ASC',
  FantokensAuthorityVariancePopulationVerifiedDesc = 'FANTOKENS_AUTHORITY_VARIANCE_POPULATION_VERIFIED_DESC',
  FantokensAuthorityVarianceSampleAuthorityIdAsc = 'FANTOKENS_AUTHORITY_VARIANCE_SAMPLE_AUTHORITY_ID_ASC',
  FantokensAuthorityVarianceSampleAuthorityIdDesc = 'FANTOKENS_AUTHORITY_VARIANCE_SAMPLE_AUTHORITY_ID_DESC',
  FantokensAuthorityVarianceSampleCreatedAtAsc = 'FANTOKENS_AUTHORITY_VARIANCE_SAMPLE_CREATED_AT_ASC',
  FantokensAuthorityVarianceSampleCreatedAtDesc = 'FANTOKENS_AUTHORITY_VARIANCE_SAMPLE_CREATED_AT_DESC',
  FantokensAuthorityVarianceSampleCreatedHeightAsc = 'FANTOKENS_AUTHORITY_VARIANCE_SAMPLE_CREATED_HEIGHT_ASC',
  FantokensAuthorityVarianceSampleCreatedHeightDesc = 'FANTOKENS_AUTHORITY_VARIANCE_SAMPLE_CREATED_HEIGHT_DESC',
  FantokensAuthorityVarianceSampleCreatorIdAsc = 'FANTOKENS_AUTHORITY_VARIANCE_SAMPLE_CREATOR_ID_ASC',
  FantokensAuthorityVarianceSampleCreatorIdDesc = 'FANTOKENS_AUTHORITY_VARIANCE_SAMPLE_CREATOR_ID_DESC',
  FantokensAuthorityVarianceSampleIdAsc = 'FANTOKENS_AUTHORITY_VARIANCE_SAMPLE_ID_ASC',
  FantokensAuthorityVarianceSampleIdDesc = 'FANTOKENS_AUTHORITY_VARIANCE_SAMPLE_ID_DESC',
  FantokensAuthorityVarianceSampleMaxSupplyAsc = 'FANTOKENS_AUTHORITY_VARIANCE_SAMPLE_MAX_SUPPLY_ASC',
  FantokensAuthorityVarianceSampleMaxSupplyDesc = 'FANTOKENS_AUTHORITY_VARIANCE_SAMPLE_MAX_SUPPLY_DESC',
  FantokensAuthorityVarianceSampleMetadataIdAsc = 'FANTOKENS_AUTHORITY_VARIANCE_SAMPLE_METADATA_ID_ASC',
  FantokensAuthorityVarianceSampleMetadataIdDesc = 'FANTOKENS_AUTHORITY_VARIANCE_SAMPLE_METADATA_ID_DESC',
  FantokensAuthorityVarianceSampleMinterIdAsc = 'FANTOKENS_AUTHORITY_VARIANCE_SAMPLE_MINTER_ID_ASC',
  FantokensAuthorityVarianceSampleMinterIdDesc = 'FANTOKENS_AUTHORITY_VARIANCE_SAMPLE_MINTER_ID_DESC',
  FantokensAuthorityVarianceSampleNameAsc = 'FANTOKENS_AUTHORITY_VARIANCE_SAMPLE_NAME_ASC',
  FantokensAuthorityVarianceSampleNameDesc = 'FANTOKENS_AUTHORITY_VARIANCE_SAMPLE_NAME_DESC',
  FantokensAuthorityVarianceSampleSupplyAsc = 'FANTOKENS_AUTHORITY_VARIANCE_SAMPLE_SUPPLY_ASC',
  FantokensAuthorityVarianceSampleSupplyDesc = 'FANTOKENS_AUTHORITY_VARIANCE_SAMPLE_SUPPLY_DESC',
  FantokensAuthorityVarianceSampleSymbolAsc = 'FANTOKENS_AUTHORITY_VARIANCE_SAMPLE_SYMBOL_ASC',
  FantokensAuthorityVarianceSampleSymbolDesc = 'FANTOKENS_AUTHORITY_VARIANCE_SAMPLE_SYMBOL_DESC',
  FantokensAuthorityVarianceSampleUpdatedAtAsc = 'FANTOKENS_AUTHORITY_VARIANCE_SAMPLE_UPDATED_AT_ASC',
  FantokensAuthorityVarianceSampleUpdatedAtDesc = 'FANTOKENS_AUTHORITY_VARIANCE_SAMPLE_UPDATED_AT_DESC',
  FantokensAuthorityVarianceSampleUpdatedHeightAsc = 'FANTOKENS_AUTHORITY_VARIANCE_SAMPLE_UPDATED_HEIGHT_ASC',
  FantokensAuthorityVarianceSampleUpdatedHeightDesc = 'FANTOKENS_AUTHORITY_VARIANCE_SAMPLE_UPDATED_HEIGHT_DESC',
  FantokensAuthorityVarianceSampleUriAsc = 'FANTOKENS_AUTHORITY_VARIANCE_SAMPLE_URI_ASC',
  FantokensAuthorityVarianceSampleUriDesc = 'FANTOKENS_AUTHORITY_VARIANCE_SAMPLE_URI_DESC',
  FantokensAuthorityVarianceSampleVerifiedAsc = 'FANTOKENS_AUTHORITY_VARIANCE_SAMPLE_VERIFIED_ASC',
  FantokensAuthorityVarianceSampleVerifiedDesc = 'FANTOKENS_AUTHORITY_VARIANCE_SAMPLE_VERIFIED_DESC',
  FantokensCreatedAverageAuthorityIdAsc = 'FANTOKENS_CREATED_AVERAGE_AUTHORITY_ID_ASC',
  FantokensCreatedAverageAuthorityIdDesc = 'FANTOKENS_CREATED_AVERAGE_AUTHORITY_ID_DESC',
  FantokensCreatedAverageCreatedAtAsc = 'FANTOKENS_CREATED_AVERAGE_CREATED_AT_ASC',
  FantokensCreatedAverageCreatedAtDesc = 'FANTOKENS_CREATED_AVERAGE_CREATED_AT_DESC',
  FantokensCreatedAverageCreatedHeightAsc = 'FANTOKENS_CREATED_AVERAGE_CREATED_HEIGHT_ASC',
  FantokensCreatedAverageCreatedHeightDesc = 'FANTOKENS_CREATED_AVERAGE_CREATED_HEIGHT_DESC',
  FantokensCreatedAverageCreatorIdAsc = 'FANTOKENS_CREATED_AVERAGE_CREATOR_ID_ASC',
  FantokensCreatedAverageCreatorIdDesc = 'FANTOKENS_CREATED_AVERAGE_CREATOR_ID_DESC',
  FantokensCreatedAverageIdAsc = 'FANTOKENS_CREATED_AVERAGE_ID_ASC',
  FantokensCreatedAverageIdDesc = 'FANTOKENS_CREATED_AVERAGE_ID_DESC',
  FantokensCreatedAverageMaxSupplyAsc = 'FANTOKENS_CREATED_AVERAGE_MAX_SUPPLY_ASC',
  FantokensCreatedAverageMaxSupplyDesc = 'FANTOKENS_CREATED_AVERAGE_MAX_SUPPLY_DESC',
  FantokensCreatedAverageMetadataIdAsc = 'FANTOKENS_CREATED_AVERAGE_METADATA_ID_ASC',
  FantokensCreatedAverageMetadataIdDesc = 'FANTOKENS_CREATED_AVERAGE_METADATA_ID_DESC',
  FantokensCreatedAverageMinterIdAsc = 'FANTOKENS_CREATED_AVERAGE_MINTER_ID_ASC',
  FantokensCreatedAverageMinterIdDesc = 'FANTOKENS_CREATED_AVERAGE_MINTER_ID_DESC',
  FantokensCreatedAverageNameAsc = 'FANTOKENS_CREATED_AVERAGE_NAME_ASC',
  FantokensCreatedAverageNameDesc = 'FANTOKENS_CREATED_AVERAGE_NAME_DESC',
  FantokensCreatedAverageSupplyAsc = 'FANTOKENS_CREATED_AVERAGE_SUPPLY_ASC',
  FantokensCreatedAverageSupplyDesc = 'FANTOKENS_CREATED_AVERAGE_SUPPLY_DESC',
  FantokensCreatedAverageSymbolAsc = 'FANTOKENS_CREATED_AVERAGE_SYMBOL_ASC',
  FantokensCreatedAverageSymbolDesc = 'FANTOKENS_CREATED_AVERAGE_SYMBOL_DESC',
  FantokensCreatedAverageUpdatedAtAsc = 'FANTOKENS_CREATED_AVERAGE_UPDATED_AT_ASC',
  FantokensCreatedAverageUpdatedAtDesc = 'FANTOKENS_CREATED_AVERAGE_UPDATED_AT_DESC',
  FantokensCreatedAverageUpdatedHeightAsc = 'FANTOKENS_CREATED_AVERAGE_UPDATED_HEIGHT_ASC',
  FantokensCreatedAverageUpdatedHeightDesc = 'FANTOKENS_CREATED_AVERAGE_UPDATED_HEIGHT_DESC',
  FantokensCreatedAverageUriAsc = 'FANTOKENS_CREATED_AVERAGE_URI_ASC',
  FantokensCreatedAverageUriDesc = 'FANTOKENS_CREATED_AVERAGE_URI_DESC',
  FantokensCreatedAverageVerifiedAsc = 'FANTOKENS_CREATED_AVERAGE_VERIFIED_ASC',
  FantokensCreatedAverageVerifiedDesc = 'FANTOKENS_CREATED_AVERAGE_VERIFIED_DESC',
  FantokensCreatedCountAsc = 'FANTOKENS_CREATED_COUNT_ASC',
  FantokensCreatedCountDesc = 'FANTOKENS_CREATED_COUNT_DESC',
  FantokensCreatedDistinctCountAuthorityIdAsc = 'FANTOKENS_CREATED_DISTINCT_COUNT_AUTHORITY_ID_ASC',
  FantokensCreatedDistinctCountAuthorityIdDesc = 'FANTOKENS_CREATED_DISTINCT_COUNT_AUTHORITY_ID_DESC',
  FantokensCreatedDistinctCountCreatedAtAsc = 'FANTOKENS_CREATED_DISTINCT_COUNT_CREATED_AT_ASC',
  FantokensCreatedDistinctCountCreatedAtDesc = 'FANTOKENS_CREATED_DISTINCT_COUNT_CREATED_AT_DESC',
  FantokensCreatedDistinctCountCreatedHeightAsc = 'FANTOKENS_CREATED_DISTINCT_COUNT_CREATED_HEIGHT_ASC',
  FantokensCreatedDistinctCountCreatedHeightDesc = 'FANTOKENS_CREATED_DISTINCT_COUNT_CREATED_HEIGHT_DESC',
  FantokensCreatedDistinctCountCreatorIdAsc = 'FANTOKENS_CREATED_DISTINCT_COUNT_CREATOR_ID_ASC',
  FantokensCreatedDistinctCountCreatorIdDesc = 'FANTOKENS_CREATED_DISTINCT_COUNT_CREATOR_ID_DESC',
  FantokensCreatedDistinctCountIdAsc = 'FANTOKENS_CREATED_DISTINCT_COUNT_ID_ASC',
  FantokensCreatedDistinctCountIdDesc = 'FANTOKENS_CREATED_DISTINCT_COUNT_ID_DESC',
  FantokensCreatedDistinctCountMaxSupplyAsc = 'FANTOKENS_CREATED_DISTINCT_COUNT_MAX_SUPPLY_ASC',
  FantokensCreatedDistinctCountMaxSupplyDesc = 'FANTOKENS_CREATED_DISTINCT_COUNT_MAX_SUPPLY_DESC',
  FantokensCreatedDistinctCountMetadataIdAsc = 'FANTOKENS_CREATED_DISTINCT_COUNT_METADATA_ID_ASC',
  FantokensCreatedDistinctCountMetadataIdDesc = 'FANTOKENS_CREATED_DISTINCT_COUNT_METADATA_ID_DESC',
  FantokensCreatedDistinctCountMinterIdAsc = 'FANTOKENS_CREATED_DISTINCT_COUNT_MINTER_ID_ASC',
  FantokensCreatedDistinctCountMinterIdDesc = 'FANTOKENS_CREATED_DISTINCT_COUNT_MINTER_ID_DESC',
  FantokensCreatedDistinctCountNameAsc = 'FANTOKENS_CREATED_DISTINCT_COUNT_NAME_ASC',
  FantokensCreatedDistinctCountNameDesc = 'FANTOKENS_CREATED_DISTINCT_COUNT_NAME_DESC',
  FantokensCreatedDistinctCountSupplyAsc = 'FANTOKENS_CREATED_DISTINCT_COUNT_SUPPLY_ASC',
  FantokensCreatedDistinctCountSupplyDesc = 'FANTOKENS_CREATED_DISTINCT_COUNT_SUPPLY_DESC',
  FantokensCreatedDistinctCountSymbolAsc = 'FANTOKENS_CREATED_DISTINCT_COUNT_SYMBOL_ASC',
  FantokensCreatedDistinctCountSymbolDesc = 'FANTOKENS_CREATED_DISTINCT_COUNT_SYMBOL_DESC',
  FantokensCreatedDistinctCountUpdatedAtAsc = 'FANTOKENS_CREATED_DISTINCT_COUNT_UPDATED_AT_ASC',
  FantokensCreatedDistinctCountUpdatedAtDesc = 'FANTOKENS_CREATED_DISTINCT_COUNT_UPDATED_AT_DESC',
  FantokensCreatedDistinctCountUpdatedHeightAsc = 'FANTOKENS_CREATED_DISTINCT_COUNT_UPDATED_HEIGHT_ASC',
  FantokensCreatedDistinctCountUpdatedHeightDesc = 'FANTOKENS_CREATED_DISTINCT_COUNT_UPDATED_HEIGHT_DESC',
  FantokensCreatedDistinctCountUriAsc = 'FANTOKENS_CREATED_DISTINCT_COUNT_URI_ASC',
  FantokensCreatedDistinctCountUriDesc = 'FANTOKENS_CREATED_DISTINCT_COUNT_URI_DESC',
  FantokensCreatedDistinctCountVerifiedAsc = 'FANTOKENS_CREATED_DISTINCT_COUNT_VERIFIED_ASC',
  FantokensCreatedDistinctCountVerifiedDesc = 'FANTOKENS_CREATED_DISTINCT_COUNT_VERIFIED_DESC',
  FantokensCreatedMaxAuthorityIdAsc = 'FANTOKENS_CREATED_MAX_AUTHORITY_ID_ASC',
  FantokensCreatedMaxAuthorityIdDesc = 'FANTOKENS_CREATED_MAX_AUTHORITY_ID_DESC',
  FantokensCreatedMaxCreatedAtAsc = 'FANTOKENS_CREATED_MAX_CREATED_AT_ASC',
  FantokensCreatedMaxCreatedAtDesc = 'FANTOKENS_CREATED_MAX_CREATED_AT_DESC',
  FantokensCreatedMaxCreatedHeightAsc = 'FANTOKENS_CREATED_MAX_CREATED_HEIGHT_ASC',
  FantokensCreatedMaxCreatedHeightDesc = 'FANTOKENS_CREATED_MAX_CREATED_HEIGHT_DESC',
  FantokensCreatedMaxCreatorIdAsc = 'FANTOKENS_CREATED_MAX_CREATOR_ID_ASC',
  FantokensCreatedMaxCreatorIdDesc = 'FANTOKENS_CREATED_MAX_CREATOR_ID_DESC',
  FantokensCreatedMaxIdAsc = 'FANTOKENS_CREATED_MAX_ID_ASC',
  FantokensCreatedMaxIdDesc = 'FANTOKENS_CREATED_MAX_ID_DESC',
  FantokensCreatedMaxMaxSupplyAsc = 'FANTOKENS_CREATED_MAX_MAX_SUPPLY_ASC',
  FantokensCreatedMaxMaxSupplyDesc = 'FANTOKENS_CREATED_MAX_MAX_SUPPLY_DESC',
  FantokensCreatedMaxMetadataIdAsc = 'FANTOKENS_CREATED_MAX_METADATA_ID_ASC',
  FantokensCreatedMaxMetadataIdDesc = 'FANTOKENS_CREATED_MAX_METADATA_ID_DESC',
  FantokensCreatedMaxMinterIdAsc = 'FANTOKENS_CREATED_MAX_MINTER_ID_ASC',
  FantokensCreatedMaxMinterIdDesc = 'FANTOKENS_CREATED_MAX_MINTER_ID_DESC',
  FantokensCreatedMaxNameAsc = 'FANTOKENS_CREATED_MAX_NAME_ASC',
  FantokensCreatedMaxNameDesc = 'FANTOKENS_CREATED_MAX_NAME_DESC',
  FantokensCreatedMaxSupplyAsc = 'FANTOKENS_CREATED_MAX_SUPPLY_ASC',
  FantokensCreatedMaxSupplyDesc = 'FANTOKENS_CREATED_MAX_SUPPLY_DESC',
  FantokensCreatedMaxSymbolAsc = 'FANTOKENS_CREATED_MAX_SYMBOL_ASC',
  FantokensCreatedMaxSymbolDesc = 'FANTOKENS_CREATED_MAX_SYMBOL_DESC',
  FantokensCreatedMaxUpdatedAtAsc = 'FANTOKENS_CREATED_MAX_UPDATED_AT_ASC',
  FantokensCreatedMaxUpdatedAtDesc = 'FANTOKENS_CREATED_MAX_UPDATED_AT_DESC',
  FantokensCreatedMaxUpdatedHeightAsc = 'FANTOKENS_CREATED_MAX_UPDATED_HEIGHT_ASC',
  FantokensCreatedMaxUpdatedHeightDesc = 'FANTOKENS_CREATED_MAX_UPDATED_HEIGHT_DESC',
  FantokensCreatedMaxUriAsc = 'FANTOKENS_CREATED_MAX_URI_ASC',
  FantokensCreatedMaxUriDesc = 'FANTOKENS_CREATED_MAX_URI_DESC',
  FantokensCreatedMaxVerifiedAsc = 'FANTOKENS_CREATED_MAX_VERIFIED_ASC',
  FantokensCreatedMaxVerifiedDesc = 'FANTOKENS_CREATED_MAX_VERIFIED_DESC',
  FantokensCreatedMinAuthorityIdAsc = 'FANTOKENS_CREATED_MIN_AUTHORITY_ID_ASC',
  FantokensCreatedMinAuthorityIdDesc = 'FANTOKENS_CREATED_MIN_AUTHORITY_ID_DESC',
  FantokensCreatedMinCreatedAtAsc = 'FANTOKENS_CREATED_MIN_CREATED_AT_ASC',
  FantokensCreatedMinCreatedAtDesc = 'FANTOKENS_CREATED_MIN_CREATED_AT_DESC',
  FantokensCreatedMinCreatedHeightAsc = 'FANTOKENS_CREATED_MIN_CREATED_HEIGHT_ASC',
  FantokensCreatedMinCreatedHeightDesc = 'FANTOKENS_CREATED_MIN_CREATED_HEIGHT_DESC',
  FantokensCreatedMinCreatorIdAsc = 'FANTOKENS_CREATED_MIN_CREATOR_ID_ASC',
  FantokensCreatedMinCreatorIdDesc = 'FANTOKENS_CREATED_MIN_CREATOR_ID_DESC',
  FantokensCreatedMinIdAsc = 'FANTOKENS_CREATED_MIN_ID_ASC',
  FantokensCreatedMinIdDesc = 'FANTOKENS_CREATED_MIN_ID_DESC',
  FantokensCreatedMinMaxSupplyAsc = 'FANTOKENS_CREATED_MIN_MAX_SUPPLY_ASC',
  FantokensCreatedMinMaxSupplyDesc = 'FANTOKENS_CREATED_MIN_MAX_SUPPLY_DESC',
  FantokensCreatedMinMetadataIdAsc = 'FANTOKENS_CREATED_MIN_METADATA_ID_ASC',
  FantokensCreatedMinMetadataIdDesc = 'FANTOKENS_CREATED_MIN_METADATA_ID_DESC',
  FantokensCreatedMinMinterIdAsc = 'FANTOKENS_CREATED_MIN_MINTER_ID_ASC',
  FantokensCreatedMinMinterIdDesc = 'FANTOKENS_CREATED_MIN_MINTER_ID_DESC',
  FantokensCreatedMinNameAsc = 'FANTOKENS_CREATED_MIN_NAME_ASC',
  FantokensCreatedMinNameDesc = 'FANTOKENS_CREATED_MIN_NAME_DESC',
  FantokensCreatedMinSupplyAsc = 'FANTOKENS_CREATED_MIN_SUPPLY_ASC',
  FantokensCreatedMinSupplyDesc = 'FANTOKENS_CREATED_MIN_SUPPLY_DESC',
  FantokensCreatedMinSymbolAsc = 'FANTOKENS_CREATED_MIN_SYMBOL_ASC',
  FantokensCreatedMinSymbolDesc = 'FANTOKENS_CREATED_MIN_SYMBOL_DESC',
  FantokensCreatedMinUpdatedAtAsc = 'FANTOKENS_CREATED_MIN_UPDATED_AT_ASC',
  FantokensCreatedMinUpdatedAtDesc = 'FANTOKENS_CREATED_MIN_UPDATED_AT_DESC',
  FantokensCreatedMinUpdatedHeightAsc = 'FANTOKENS_CREATED_MIN_UPDATED_HEIGHT_ASC',
  FantokensCreatedMinUpdatedHeightDesc = 'FANTOKENS_CREATED_MIN_UPDATED_HEIGHT_DESC',
  FantokensCreatedMinUriAsc = 'FANTOKENS_CREATED_MIN_URI_ASC',
  FantokensCreatedMinUriDesc = 'FANTOKENS_CREATED_MIN_URI_DESC',
  FantokensCreatedMinVerifiedAsc = 'FANTOKENS_CREATED_MIN_VERIFIED_ASC',
  FantokensCreatedMinVerifiedDesc = 'FANTOKENS_CREATED_MIN_VERIFIED_DESC',
  FantokensCreatedStddevPopulationAuthorityIdAsc = 'FANTOKENS_CREATED_STDDEV_POPULATION_AUTHORITY_ID_ASC',
  FantokensCreatedStddevPopulationAuthorityIdDesc = 'FANTOKENS_CREATED_STDDEV_POPULATION_AUTHORITY_ID_DESC',
  FantokensCreatedStddevPopulationCreatedAtAsc = 'FANTOKENS_CREATED_STDDEV_POPULATION_CREATED_AT_ASC',
  FantokensCreatedStddevPopulationCreatedAtDesc = 'FANTOKENS_CREATED_STDDEV_POPULATION_CREATED_AT_DESC',
  FantokensCreatedStddevPopulationCreatedHeightAsc = 'FANTOKENS_CREATED_STDDEV_POPULATION_CREATED_HEIGHT_ASC',
  FantokensCreatedStddevPopulationCreatedHeightDesc = 'FANTOKENS_CREATED_STDDEV_POPULATION_CREATED_HEIGHT_DESC',
  FantokensCreatedStddevPopulationCreatorIdAsc = 'FANTOKENS_CREATED_STDDEV_POPULATION_CREATOR_ID_ASC',
  FantokensCreatedStddevPopulationCreatorIdDesc = 'FANTOKENS_CREATED_STDDEV_POPULATION_CREATOR_ID_DESC',
  FantokensCreatedStddevPopulationIdAsc = 'FANTOKENS_CREATED_STDDEV_POPULATION_ID_ASC',
  FantokensCreatedStddevPopulationIdDesc = 'FANTOKENS_CREATED_STDDEV_POPULATION_ID_DESC',
  FantokensCreatedStddevPopulationMaxSupplyAsc = 'FANTOKENS_CREATED_STDDEV_POPULATION_MAX_SUPPLY_ASC',
  FantokensCreatedStddevPopulationMaxSupplyDesc = 'FANTOKENS_CREATED_STDDEV_POPULATION_MAX_SUPPLY_DESC',
  FantokensCreatedStddevPopulationMetadataIdAsc = 'FANTOKENS_CREATED_STDDEV_POPULATION_METADATA_ID_ASC',
  FantokensCreatedStddevPopulationMetadataIdDesc = 'FANTOKENS_CREATED_STDDEV_POPULATION_METADATA_ID_DESC',
  FantokensCreatedStddevPopulationMinterIdAsc = 'FANTOKENS_CREATED_STDDEV_POPULATION_MINTER_ID_ASC',
  FantokensCreatedStddevPopulationMinterIdDesc = 'FANTOKENS_CREATED_STDDEV_POPULATION_MINTER_ID_DESC',
  FantokensCreatedStddevPopulationNameAsc = 'FANTOKENS_CREATED_STDDEV_POPULATION_NAME_ASC',
  FantokensCreatedStddevPopulationNameDesc = 'FANTOKENS_CREATED_STDDEV_POPULATION_NAME_DESC',
  FantokensCreatedStddevPopulationSupplyAsc = 'FANTOKENS_CREATED_STDDEV_POPULATION_SUPPLY_ASC',
  FantokensCreatedStddevPopulationSupplyDesc = 'FANTOKENS_CREATED_STDDEV_POPULATION_SUPPLY_DESC',
  FantokensCreatedStddevPopulationSymbolAsc = 'FANTOKENS_CREATED_STDDEV_POPULATION_SYMBOL_ASC',
  FantokensCreatedStddevPopulationSymbolDesc = 'FANTOKENS_CREATED_STDDEV_POPULATION_SYMBOL_DESC',
  FantokensCreatedStddevPopulationUpdatedAtAsc = 'FANTOKENS_CREATED_STDDEV_POPULATION_UPDATED_AT_ASC',
  FantokensCreatedStddevPopulationUpdatedAtDesc = 'FANTOKENS_CREATED_STDDEV_POPULATION_UPDATED_AT_DESC',
  FantokensCreatedStddevPopulationUpdatedHeightAsc = 'FANTOKENS_CREATED_STDDEV_POPULATION_UPDATED_HEIGHT_ASC',
  FantokensCreatedStddevPopulationUpdatedHeightDesc = 'FANTOKENS_CREATED_STDDEV_POPULATION_UPDATED_HEIGHT_DESC',
  FantokensCreatedStddevPopulationUriAsc = 'FANTOKENS_CREATED_STDDEV_POPULATION_URI_ASC',
  FantokensCreatedStddevPopulationUriDesc = 'FANTOKENS_CREATED_STDDEV_POPULATION_URI_DESC',
  FantokensCreatedStddevPopulationVerifiedAsc = 'FANTOKENS_CREATED_STDDEV_POPULATION_VERIFIED_ASC',
  FantokensCreatedStddevPopulationVerifiedDesc = 'FANTOKENS_CREATED_STDDEV_POPULATION_VERIFIED_DESC',
  FantokensCreatedStddevSampleAuthorityIdAsc = 'FANTOKENS_CREATED_STDDEV_SAMPLE_AUTHORITY_ID_ASC',
  FantokensCreatedStddevSampleAuthorityIdDesc = 'FANTOKENS_CREATED_STDDEV_SAMPLE_AUTHORITY_ID_DESC',
  FantokensCreatedStddevSampleCreatedAtAsc = 'FANTOKENS_CREATED_STDDEV_SAMPLE_CREATED_AT_ASC',
  FantokensCreatedStddevSampleCreatedAtDesc = 'FANTOKENS_CREATED_STDDEV_SAMPLE_CREATED_AT_DESC',
  FantokensCreatedStddevSampleCreatedHeightAsc = 'FANTOKENS_CREATED_STDDEV_SAMPLE_CREATED_HEIGHT_ASC',
  FantokensCreatedStddevSampleCreatedHeightDesc = 'FANTOKENS_CREATED_STDDEV_SAMPLE_CREATED_HEIGHT_DESC',
  FantokensCreatedStddevSampleCreatorIdAsc = 'FANTOKENS_CREATED_STDDEV_SAMPLE_CREATOR_ID_ASC',
  FantokensCreatedStddevSampleCreatorIdDesc = 'FANTOKENS_CREATED_STDDEV_SAMPLE_CREATOR_ID_DESC',
  FantokensCreatedStddevSampleIdAsc = 'FANTOKENS_CREATED_STDDEV_SAMPLE_ID_ASC',
  FantokensCreatedStddevSampleIdDesc = 'FANTOKENS_CREATED_STDDEV_SAMPLE_ID_DESC',
  FantokensCreatedStddevSampleMaxSupplyAsc = 'FANTOKENS_CREATED_STDDEV_SAMPLE_MAX_SUPPLY_ASC',
  FantokensCreatedStddevSampleMaxSupplyDesc = 'FANTOKENS_CREATED_STDDEV_SAMPLE_MAX_SUPPLY_DESC',
  FantokensCreatedStddevSampleMetadataIdAsc = 'FANTOKENS_CREATED_STDDEV_SAMPLE_METADATA_ID_ASC',
  FantokensCreatedStddevSampleMetadataIdDesc = 'FANTOKENS_CREATED_STDDEV_SAMPLE_METADATA_ID_DESC',
  FantokensCreatedStddevSampleMinterIdAsc = 'FANTOKENS_CREATED_STDDEV_SAMPLE_MINTER_ID_ASC',
  FantokensCreatedStddevSampleMinterIdDesc = 'FANTOKENS_CREATED_STDDEV_SAMPLE_MINTER_ID_DESC',
  FantokensCreatedStddevSampleNameAsc = 'FANTOKENS_CREATED_STDDEV_SAMPLE_NAME_ASC',
  FantokensCreatedStddevSampleNameDesc = 'FANTOKENS_CREATED_STDDEV_SAMPLE_NAME_DESC',
  FantokensCreatedStddevSampleSupplyAsc = 'FANTOKENS_CREATED_STDDEV_SAMPLE_SUPPLY_ASC',
  FantokensCreatedStddevSampleSupplyDesc = 'FANTOKENS_CREATED_STDDEV_SAMPLE_SUPPLY_DESC',
  FantokensCreatedStddevSampleSymbolAsc = 'FANTOKENS_CREATED_STDDEV_SAMPLE_SYMBOL_ASC',
  FantokensCreatedStddevSampleSymbolDesc = 'FANTOKENS_CREATED_STDDEV_SAMPLE_SYMBOL_DESC',
  FantokensCreatedStddevSampleUpdatedAtAsc = 'FANTOKENS_CREATED_STDDEV_SAMPLE_UPDATED_AT_ASC',
  FantokensCreatedStddevSampleUpdatedAtDesc = 'FANTOKENS_CREATED_STDDEV_SAMPLE_UPDATED_AT_DESC',
  FantokensCreatedStddevSampleUpdatedHeightAsc = 'FANTOKENS_CREATED_STDDEV_SAMPLE_UPDATED_HEIGHT_ASC',
  FantokensCreatedStddevSampleUpdatedHeightDesc = 'FANTOKENS_CREATED_STDDEV_SAMPLE_UPDATED_HEIGHT_DESC',
  FantokensCreatedStddevSampleUriAsc = 'FANTOKENS_CREATED_STDDEV_SAMPLE_URI_ASC',
  FantokensCreatedStddevSampleUriDesc = 'FANTOKENS_CREATED_STDDEV_SAMPLE_URI_DESC',
  FantokensCreatedStddevSampleVerifiedAsc = 'FANTOKENS_CREATED_STDDEV_SAMPLE_VERIFIED_ASC',
  FantokensCreatedStddevSampleVerifiedDesc = 'FANTOKENS_CREATED_STDDEV_SAMPLE_VERIFIED_DESC',
  FantokensCreatedSumAuthorityIdAsc = 'FANTOKENS_CREATED_SUM_AUTHORITY_ID_ASC',
  FantokensCreatedSumAuthorityIdDesc = 'FANTOKENS_CREATED_SUM_AUTHORITY_ID_DESC',
  FantokensCreatedSumCreatedAtAsc = 'FANTOKENS_CREATED_SUM_CREATED_AT_ASC',
  FantokensCreatedSumCreatedAtDesc = 'FANTOKENS_CREATED_SUM_CREATED_AT_DESC',
  FantokensCreatedSumCreatedHeightAsc = 'FANTOKENS_CREATED_SUM_CREATED_HEIGHT_ASC',
  FantokensCreatedSumCreatedHeightDesc = 'FANTOKENS_CREATED_SUM_CREATED_HEIGHT_DESC',
  FantokensCreatedSumCreatorIdAsc = 'FANTOKENS_CREATED_SUM_CREATOR_ID_ASC',
  FantokensCreatedSumCreatorIdDesc = 'FANTOKENS_CREATED_SUM_CREATOR_ID_DESC',
  FantokensCreatedSumIdAsc = 'FANTOKENS_CREATED_SUM_ID_ASC',
  FantokensCreatedSumIdDesc = 'FANTOKENS_CREATED_SUM_ID_DESC',
  FantokensCreatedSumMaxSupplyAsc = 'FANTOKENS_CREATED_SUM_MAX_SUPPLY_ASC',
  FantokensCreatedSumMaxSupplyDesc = 'FANTOKENS_CREATED_SUM_MAX_SUPPLY_DESC',
  FantokensCreatedSumMetadataIdAsc = 'FANTOKENS_CREATED_SUM_METADATA_ID_ASC',
  FantokensCreatedSumMetadataIdDesc = 'FANTOKENS_CREATED_SUM_METADATA_ID_DESC',
  FantokensCreatedSumMinterIdAsc = 'FANTOKENS_CREATED_SUM_MINTER_ID_ASC',
  FantokensCreatedSumMinterIdDesc = 'FANTOKENS_CREATED_SUM_MINTER_ID_DESC',
  FantokensCreatedSumNameAsc = 'FANTOKENS_CREATED_SUM_NAME_ASC',
  FantokensCreatedSumNameDesc = 'FANTOKENS_CREATED_SUM_NAME_DESC',
  FantokensCreatedSumSupplyAsc = 'FANTOKENS_CREATED_SUM_SUPPLY_ASC',
  FantokensCreatedSumSupplyDesc = 'FANTOKENS_CREATED_SUM_SUPPLY_DESC',
  FantokensCreatedSumSymbolAsc = 'FANTOKENS_CREATED_SUM_SYMBOL_ASC',
  FantokensCreatedSumSymbolDesc = 'FANTOKENS_CREATED_SUM_SYMBOL_DESC',
  FantokensCreatedSumUpdatedAtAsc = 'FANTOKENS_CREATED_SUM_UPDATED_AT_ASC',
  FantokensCreatedSumUpdatedAtDesc = 'FANTOKENS_CREATED_SUM_UPDATED_AT_DESC',
  FantokensCreatedSumUpdatedHeightAsc = 'FANTOKENS_CREATED_SUM_UPDATED_HEIGHT_ASC',
  FantokensCreatedSumUpdatedHeightDesc = 'FANTOKENS_CREATED_SUM_UPDATED_HEIGHT_DESC',
  FantokensCreatedSumUriAsc = 'FANTOKENS_CREATED_SUM_URI_ASC',
  FantokensCreatedSumUriDesc = 'FANTOKENS_CREATED_SUM_URI_DESC',
  FantokensCreatedSumVerifiedAsc = 'FANTOKENS_CREATED_SUM_VERIFIED_ASC',
  FantokensCreatedSumVerifiedDesc = 'FANTOKENS_CREATED_SUM_VERIFIED_DESC',
  FantokensCreatedVariancePopulationAuthorityIdAsc = 'FANTOKENS_CREATED_VARIANCE_POPULATION_AUTHORITY_ID_ASC',
  FantokensCreatedVariancePopulationAuthorityIdDesc = 'FANTOKENS_CREATED_VARIANCE_POPULATION_AUTHORITY_ID_DESC',
  FantokensCreatedVariancePopulationCreatedAtAsc = 'FANTOKENS_CREATED_VARIANCE_POPULATION_CREATED_AT_ASC',
  FantokensCreatedVariancePopulationCreatedAtDesc = 'FANTOKENS_CREATED_VARIANCE_POPULATION_CREATED_AT_DESC',
  FantokensCreatedVariancePopulationCreatedHeightAsc = 'FANTOKENS_CREATED_VARIANCE_POPULATION_CREATED_HEIGHT_ASC',
  FantokensCreatedVariancePopulationCreatedHeightDesc = 'FANTOKENS_CREATED_VARIANCE_POPULATION_CREATED_HEIGHT_DESC',
  FantokensCreatedVariancePopulationCreatorIdAsc = 'FANTOKENS_CREATED_VARIANCE_POPULATION_CREATOR_ID_ASC',
  FantokensCreatedVariancePopulationCreatorIdDesc = 'FANTOKENS_CREATED_VARIANCE_POPULATION_CREATOR_ID_DESC',
  FantokensCreatedVariancePopulationIdAsc = 'FANTOKENS_CREATED_VARIANCE_POPULATION_ID_ASC',
  FantokensCreatedVariancePopulationIdDesc = 'FANTOKENS_CREATED_VARIANCE_POPULATION_ID_DESC',
  FantokensCreatedVariancePopulationMaxSupplyAsc = 'FANTOKENS_CREATED_VARIANCE_POPULATION_MAX_SUPPLY_ASC',
  FantokensCreatedVariancePopulationMaxSupplyDesc = 'FANTOKENS_CREATED_VARIANCE_POPULATION_MAX_SUPPLY_DESC',
  FantokensCreatedVariancePopulationMetadataIdAsc = 'FANTOKENS_CREATED_VARIANCE_POPULATION_METADATA_ID_ASC',
  FantokensCreatedVariancePopulationMetadataIdDesc = 'FANTOKENS_CREATED_VARIANCE_POPULATION_METADATA_ID_DESC',
  FantokensCreatedVariancePopulationMinterIdAsc = 'FANTOKENS_CREATED_VARIANCE_POPULATION_MINTER_ID_ASC',
  FantokensCreatedVariancePopulationMinterIdDesc = 'FANTOKENS_CREATED_VARIANCE_POPULATION_MINTER_ID_DESC',
  FantokensCreatedVariancePopulationNameAsc = 'FANTOKENS_CREATED_VARIANCE_POPULATION_NAME_ASC',
  FantokensCreatedVariancePopulationNameDesc = 'FANTOKENS_CREATED_VARIANCE_POPULATION_NAME_DESC',
  FantokensCreatedVariancePopulationSupplyAsc = 'FANTOKENS_CREATED_VARIANCE_POPULATION_SUPPLY_ASC',
  FantokensCreatedVariancePopulationSupplyDesc = 'FANTOKENS_CREATED_VARIANCE_POPULATION_SUPPLY_DESC',
  FantokensCreatedVariancePopulationSymbolAsc = 'FANTOKENS_CREATED_VARIANCE_POPULATION_SYMBOL_ASC',
  FantokensCreatedVariancePopulationSymbolDesc = 'FANTOKENS_CREATED_VARIANCE_POPULATION_SYMBOL_DESC',
  FantokensCreatedVariancePopulationUpdatedAtAsc = 'FANTOKENS_CREATED_VARIANCE_POPULATION_UPDATED_AT_ASC',
  FantokensCreatedVariancePopulationUpdatedAtDesc = 'FANTOKENS_CREATED_VARIANCE_POPULATION_UPDATED_AT_DESC',
  FantokensCreatedVariancePopulationUpdatedHeightAsc = 'FANTOKENS_CREATED_VARIANCE_POPULATION_UPDATED_HEIGHT_ASC',
  FantokensCreatedVariancePopulationUpdatedHeightDesc = 'FANTOKENS_CREATED_VARIANCE_POPULATION_UPDATED_HEIGHT_DESC',
  FantokensCreatedVariancePopulationUriAsc = 'FANTOKENS_CREATED_VARIANCE_POPULATION_URI_ASC',
  FantokensCreatedVariancePopulationUriDesc = 'FANTOKENS_CREATED_VARIANCE_POPULATION_URI_DESC',
  FantokensCreatedVariancePopulationVerifiedAsc = 'FANTOKENS_CREATED_VARIANCE_POPULATION_VERIFIED_ASC',
  FantokensCreatedVariancePopulationVerifiedDesc = 'FANTOKENS_CREATED_VARIANCE_POPULATION_VERIFIED_DESC',
  FantokensCreatedVarianceSampleAuthorityIdAsc = 'FANTOKENS_CREATED_VARIANCE_SAMPLE_AUTHORITY_ID_ASC',
  FantokensCreatedVarianceSampleAuthorityIdDesc = 'FANTOKENS_CREATED_VARIANCE_SAMPLE_AUTHORITY_ID_DESC',
  FantokensCreatedVarianceSampleCreatedAtAsc = 'FANTOKENS_CREATED_VARIANCE_SAMPLE_CREATED_AT_ASC',
  FantokensCreatedVarianceSampleCreatedAtDesc = 'FANTOKENS_CREATED_VARIANCE_SAMPLE_CREATED_AT_DESC',
  FantokensCreatedVarianceSampleCreatedHeightAsc = 'FANTOKENS_CREATED_VARIANCE_SAMPLE_CREATED_HEIGHT_ASC',
  FantokensCreatedVarianceSampleCreatedHeightDesc = 'FANTOKENS_CREATED_VARIANCE_SAMPLE_CREATED_HEIGHT_DESC',
  FantokensCreatedVarianceSampleCreatorIdAsc = 'FANTOKENS_CREATED_VARIANCE_SAMPLE_CREATOR_ID_ASC',
  FantokensCreatedVarianceSampleCreatorIdDesc = 'FANTOKENS_CREATED_VARIANCE_SAMPLE_CREATOR_ID_DESC',
  FantokensCreatedVarianceSampleIdAsc = 'FANTOKENS_CREATED_VARIANCE_SAMPLE_ID_ASC',
  FantokensCreatedVarianceSampleIdDesc = 'FANTOKENS_CREATED_VARIANCE_SAMPLE_ID_DESC',
  FantokensCreatedVarianceSampleMaxSupplyAsc = 'FANTOKENS_CREATED_VARIANCE_SAMPLE_MAX_SUPPLY_ASC',
  FantokensCreatedVarianceSampleMaxSupplyDesc = 'FANTOKENS_CREATED_VARIANCE_SAMPLE_MAX_SUPPLY_DESC',
  FantokensCreatedVarianceSampleMetadataIdAsc = 'FANTOKENS_CREATED_VARIANCE_SAMPLE_METADATA_ID_ASC',
  FantokensCreatedVarianceSampleMetadataIdDesc = 'FANTOKENS_CREATED_VARIANCE_SAMPLE_METADATA_ID_DESC',
  FantokensCreatedVarianceSampleMinterIdAsc = 'FANTOKENS_CREATED_VARIANCE_SAMPLE_MINTER_ID_ASC',
  FantokensCreatedVarianceSampleMinterIdDesc = 'FANTOKENS_CREATED_VARIANCE_SAMPLE_MINTER_ID_DESC',
  FantokensCreatedVarianceSampleNameAsc = 'FANTOKENS_CREATED_VARIANCE_SAMPLE_NAME_ASC',
  FantokensCreatedVarianceSampleNameDesc = 'FANTOKENS_CREATED_VARIANCE_SAMPLE_NAME_DESC',
  FantokensCreatedVarianceSampleSupplyAsc = 'FANTOKENS_CREATED_VARIANCE_SAMPLE_SUPPLY_ASC',
  FantokensCreatedVarianceSampleSupplyDesc = 'FANTOKENS_CREATED_VARIANCE_SAMPLE_SUPPLY_DESC',
  FantokensCreatedVarianceSampleSymbolAsc = 'FANTOKENS_CREATED_VARIANCE_SAMPLE_SYMBOL_ASC',
  FantokensCreatedVarianceSampleSymbolDesc = 'FANTOKENS_CREATED_VARIANCE_SAMPLE_SYMBOL_DESC',
  FantokensCreatedVarianceSampleUpdatedAtAsc = 'FANTOKENS_CREATED_VARIANCE_SAMPLE_UPDATED_AT_ASC',
  FantokensCreatedVarianceSampleUpdatedAtDesc = 'FANTOKENS_CREATED_VARIANCE_SAMPLE_UPDATED_AT_DESC',
  FantokensCreatedVarianceSampleUpdatedHeightAsc = 'FANTOKENS_CREATED_VARIANCE_SAMPLE_UPDATED_HEIGHT_ASC',
  FantokensCreatedVarianceSampleUpdatedHeightDesc = 'FANTOKENS_CREATED_VARIANCE_SAMPLE_UPDATED_HEIGHT_DESC',
  FantokensCreatedVarianceSampleUriAsc = 'FANTOKENS_CREATED_VARIANCE_SAMPLE_URI_ASC',
  FantokensCreatedVarianceSampleUriDesc = 'FANTOKENS_CREATED_VARIANCE_SAMPLE_URI_DESC',
  FantokensCreatedVarianceSampleVerifiedAsc = 'FANTOKENS_CREATED_VARIANCE_SAMPLE_VERIFIED_ASC',
  FantokensCreatedVarianceSampleVerifiedDesc = 'FANTOKENS_CREATED_VARIANCE_SAMPLE_VERIFIED_DESC',
  FantokensMinterAverageAuthorityIdAsc = 'FANTOKENS_MINTER_AVERAGE_AUTHORITY_ID_ASC',
  FantokensMinterAverageAuthorityIdDesc = 'FANTOKENS_MINTER_AVERAGE_AUTHORITY_ID_DESC',
  FantokensMinterAverageCreatedAtAsc = 'FANTOKENS_MINTER_AVERAGE_CREATED_AT_ASC',
  FantokensMinterAverageCreatedAtDesc = 'FANTOKENS_MINTER_AVERAGE_CREATED_AT_DESC',
  FantokensMinterAverageCreatedHeightAsc = 'FANTOKENS_MINTER_AVERAGE_CREATED_HEIGHT_ASC',
  FantokensMinterAverageCreatedHeightDesc = 'FANTOKENS_MINTER_AVERAGE_CREATED_HEIGHT_DESC',
  FantokensMinterAverageCreatorIdAsc = 'FANTOKENS_MINTER_AVERAGE_CREATOR_ID_ASC',
  FantokensMinterAverageCreatorIdDesc = 'FANTOKENS_MINTER_AVERAGE_CREATOR_ID_DESC',
  FantokensMinterAverageIdAsc = 'FANTOKENS_MINTER_AVERAGE_ID_ASC',
  FantokensMinterAverageIdDesc = 'FANTOKENS_MINTER_AVERAGE_ID_DESC',
  FantokensMinterAverageMaxSupplyAsc = 'FANTOKENS_MINTER_AVERAGE_MAX_SUPPLY_ASC',
  FantokensMinterAverageMaxSupplyDesc = 'FANTOKENS_MINTER_AVERAGE_MAX_SUPPLY_DESC',
  FantokensMinterAverageMetadataIdAsc = 'FANTOKENS_MINTER_AVERAGE_METADATA_ID_ASC',
  FantokensMinterAverageMetadataIdDesc = 'FANTOKENS_MINTER_AVERAGE_METADATA_ID_DESC',
  FantokensMinterAverageMinterIdAsc = 'FANTOKENS_MINTER_AVERAGE_MINTER_ID_ASC',
  FantokensMinterAverageMinterIdDesc = 'FANTOKENS_MINTER_AVERAGE_MINTER_ID_DESC',
  FantokensMinterAverageNameAsc = 'FANTOKENS_MINTER_AVERAGE_NAME_ASC',
  FantokensMinterAverageNameDesc = 'FANTOKENS_MINTER_AVERAGE_NAME_DESC',
  FantokensMinterAverageSupplyAsc = 'FANTOKENS_MINTER_AVERAGE_SUPPLY_ASC',
  FantokensMinterAverageSupplyDesc = 'FANTOKENS_MINTER_AVERAGE_SUPPLY_DESC',
  FantokensMinterAverageSymbolAsc = 'FANTOKENS_MINTER_AVERAGE_SYMBOL_ASC',
  FantokensMinterAverageSymbolDesc = 'FANTOKENS_MINTER_AVERAGE_SYMBOL_DESC',
  FantokensMinterAverageUpdatedAtAsc = 'FANTOKENS_MINTER_AVERAGE_UPDATED_AT_ASC',
  FantokensMinterAverageUpdatedAtDesc = 'FANTOKENS_MINTER_AVERAGE_UPDATED_AT_DESC',
  FantokensMinterAverageUpdatedHeightAsc = 'FANTOKENS_MINTER_AVERAGE_UPDATED_HEIGHT_ASC',
  FantokensMinterAverageUpdatedHeightDesc = 'FANTOKENS_MINTER_AVERAGE_UPDATED_HEIGHT_DESC',
  FantokensMinterAverageUriAsc = 'FANTOKENS_MINTER_AVERAGE_URI_ASC',
  FantokensMinterAverageUriDesc = 'FANTOKENS_MINTER_AVERAGE_URI_DESC',
  FantokensMinterAverageVerifiedAsc = 'FANTOKENS_MINTER_AVERAGE_VERIFIED_ASC',
  FantokensMinterAverageVerifiedDesc = 'FANTOKENS_MINTER_AVERAGE_VERIFIED_DESC',
  FantokensMinterCountAsc = 'FANTOKENS_MINTER_COUNT_ASC',
  FantokensMinterCountDesc = 'FANTOKENS_MINTER_COUNT_DESC',
  FantokensMinterDistinctCountAuthorityIdAsc = 'FANTOKENS_MINTER_DISTINCT_COUNT_AUTHORITY_ID_ASC',
  FantokensMinterDistinctCountAuthorityIdDesc = 'FANTOKENS_MINTER_DISTINCT_COUNT_AUTHORITY_ID_DESC',
  FantokensMinterDistinctCountCreatedAtAsc = 'FANTOKENS_MINTER_DISTINCT_COUNT_CREATED_AT_ASC',
  FantokensMinterDistinctCountCreatedAtDesc = 'FANTOKENS_MINTER_DISTINCT_COUNT_CREATED_AT_DESC',
  FantokensMinterDistinctCountCreatedHeightAsc = 'FANTOKENS_MINTER_DISTINCT_COUNT_CREATED_HEIGHT_ASC',
  FantokensMinterDistinctCountCreatedHeightDesc = 'FANTOKENS_MINTER_DISTINCT_COUNT_CREATED_HEIGHT_DESC',
  FantokensMinterDistinctCountCreatorIdAsc = 'FANTOKENS_MINTER_DISTINCT_COUNT_CREATOR_ID_ASC',
  FantokensMinterDistinctCountCreatorIdDesc = 'FANTOKENS_MINTER_DISTINCT_COUNT_CREATOR_ID_DESC',
  FantokensMinterDistinctCountIdAsc = 'FANTOKENS_MINTER_DISTINCT_COUNT_ID_ASC',
  FantokensMinterDistinctCountIdDesc = 'FANTOKENS_MINTER_DISTINCT_COUNT_ID_DESC',
  FantokensMinterDistinctCountMaxSupplyAsc = 'FANTOKENS_MINTER_DISTINCT_COUNT_MAX_SUPPLY_ASC',
  FantokensMinterDistinctCountMaxSupplyDesc = 'FANTOKENS_MINTER_DISTINCT_COUNT_MAX_SUPPLY_DESC',
  FantokensMinterDistinctCountMetadataIdAsc = 'FANTOKENS_MINTER_DISTINCT_COUNT_METADATA_ID_ASC',
  FantokensMinterDistinctCountMetadataIdDesc = 'FANTOKENS_MINTER_DISTINCT_COUNT_METADATA_ID_DESC',
  FantokensMinterDistinctCountMinterIdAsc = 'FANTOKENS_MINTER_DISTINCT_COUNT_MINTER_ID_ASC',
  FantokensMinterDistinctCountMinterIdDesc = 'FANTOKENS_MINTER_DISTINCT_COUNT_MINTER_ID_DESC',
  FantokensMinterDistinctCountNameAsc = 'FANTOKENS_MINTER_DISTINCT_COUNT_NAME_ASC',
  FantokensMinterDistinctCountNameDesc = 'FANTOKENS_MINTER_DISTINCT_COUNT_NAME_DESC',
  FantokensMinterDistinctCountSupplyAsc = 'FANTOKENS_MINTER_DISTINCT_COUNT_SUPPLY_ASC',
  FantokensMinterDistinctCountSupplyDesc = 'FANTOKENS_MINTER_DISTINCT_COUNT_SUPPLY_DESC',
  FantokensMinterDistinctCountSymbolAsc = 'FANTOKENS_MINTER_DISTINCT_COUNT_SYMBOL_ASC',
  FantokensMinterDistinctCountSymbolDesc = 'FANTOKENS_MINTER_DISTINCT_COUNT_SYMBOL_DESC',
  FantokensMinterDistinctCountUpdatedAtAsc = 'FANTOKENS_MINTER_DISTINCT_COUNT_UPDATED_AT_ASC',
  FantokensMinterDistinctCountUpdatedAtDesc = 'FANTOKENS_MINTER_DISTINCT_COUNT_UPDATED_AT_DESC',
  FantokensMinterDistinctCountUpdatedHeightAsc = 'FANTOKENS_MINTER_DISTINCT_COUNT_UPDATED_HEIGHT_ASC',
  FantokensMinterDistinctCountUpdatedHeightDesc = 'FANTOKENS_MINTER_DISTINCT_COUNT_UPDATED_HEIGHT_DESC',
  FantokensMinterDistinctCountUriAsc = 'FANTOKENS_MINTER_DISTINCT_COUNT_URI_ASC',
  FantokensMinterDistinctCountUriDesc = 'FANTOKENS_MINTER_DISTINCT_COUNT_URI_DESC',
  FantokensMinterDistinctCountVerifiedAsc = 'FANTOKENS_MINTER_DISTINCT_COUNT_VERIFIED_ASC',
  FantokensMinterDistinctCountVerifiedDesc = 'FANTOKENS_MINTER_DISTINCT_COUNT_VERIFIED_DESC',
  FantokensMinterMaxAuthorityIdAsc = 'FANTOKENS_MINTER_MAX_AUTHORITY_ID_ASC',
  FantokensMinterMaxAuthorityIdDesc = 'FANTOKENS_MINTER_MAX_AUTHORITY_ID_DESC',
  FantokensMinterMaxCreatedAtAsc = 'FANTOKENS_MINTER_MAX_CREATED_AT_ASC',
  FantokensMinterMaxCreatedAtDesc = 'FANTOKENS_MINTER_MAX_CREATED_AT_DESC',
  FantokensMinterMaxCreatedHeightAsc = 'FANTOKENS_MINTER_MAX_CREATED_HEIGHT_ASC',
  FantokensMinterMaxCreatedHeightDesc = 'FANTOKENS_MINTER_MAX_CREATED_HEIGHT_DESC',
  FantokensMinterMaxCreatorIdAsc = 'FANTOKENS_MINTER_MAX_CREATOR_ID_ASC',
  FantokensMinterMaxCreatorIdDesc = 'FANTOKENS_MINTER_MAX_CREATOR_ID_DESC',
  FantokensMinterMaxIdAsc = 'FANTOKENS_MINTER_MAX_ID_ASC',
  FantokensMinterMaxIdDesc = 'FANTOKENS_MINTER_MAX_ID_DESC',
  FantokensMinterMaxMaxSupplyAsc = 'FANTOKENS_MINTER_MAX_MAX_SUPPLY_ASC',
  FantokensMinterMaxMaxSupplyDesc = 'FANTOKENS_MINTER_MAX_MAX_SUPPLY_DESC',
  FantokensMinterMaxMetadataIdAsc = 'FANTOKENS_MINTER_MAX_METADATA_ID_ASC',
  FantokensMinterMaxMetadataIdDesc = 'FANTOKENS_MINTER_MAX_METADATA_ID_DESC',
  FantokensMinterMaxMinterIdAsc = 'FANTOKENS_MINTER_MAX_MINTER_ID_ASC',
  FantokensMinterMaxMinterIdDesc = 'FANTOKENS_MINTER_MAX_MINTER_ID_DESC',
  FantokensMinterMaxNameAsc = 'FANTOKENS_MINTER_MAX_NAME_ASC',
  FantokensMinterMaxNameDesc = 'FANTOKENS_MINTER_MAX_NAME_DESC',
  FantokensMinterMaxSupplyAsc = 'FANTOKENS_MINTER_MAX_SUPPLY_ASC',
  FantokensMinterMaxSupplyDesc = 'FANTOKENS_MINTER_MAX_SUPPLY_DESC',
  FantokensMinterMaxSymbolAsc = 'FANTOKENS_MINTER_MAX_SYMBOL_ASC',
  FantokensMinterMaxSymbolDesc = 'FANTOKENS_MINTER_MAX_SYMBOL_DESC',
  FantokensMinterMaxUpdatedAtAsc = 'FANTOKENS_MINTER_MAX_UPDATED_AT_ASC',
  FantokensMinterMaxUpdatedAtDesc = 'FANTOKENS_MINTER_MAX_UPDATED_AT_DESC',
  FantokensMinterMaxUpdatedHeightAsc = 'FANTOKENS_MINTER_MAX_UPDATED_HEIGHT_ASC',
  FantokensMinterMaxUpdatedHeightDesc = 'FANTOKENS_MINTER_MAX_UPDATED_HEIGHT_DESC',
  FantokensMinterMaxUriAsc = 'FANTOKENS_MINTER_MAX_URI_ASC',
  FantokensMinterMaxUriDesc = 'FANTOKENS_MINTER_MAX_URI_DESC',
  FantokensMinterMaxVerifiedAsc = 'FANTOKENS_MINTER_MAX_VERIFIED_ASC',
  FantokensMinterMaxVerifiedDesc = 'FANTOKENS_MINTER_MAX_VERIFIED_DESC',
  FantokensMinterMinAuthorityIdAsc = 'FANTOKENS_MINTER_MIN_AUTHORITY_ID_ASC',
  FantokensMinterMinAuthorityIdDesc = 'FANTOKENS_MINTER_MIN_AUTHORITY_ID_DESC',
  FantokensMinterMinCreatedAtAsc = 'FANTOKENS_MINTER_MIN_CREATED_AT_ASC',
  FantokensMinterMinCreatedAtDesc = 'FANTOKENS_MINTER_MIN_CREATED_AT_DESC',
  FantokensMinterMinCreatedHeightAsc = 'FANTOKENS_MINTER_MIN_CREATED_HEIGHT_ASC',
  FantokensMinterMinCreatedHeightDesc = 'FANTOKENS_MINTER_MIN_CREATED_HEIGHT_DESC',
  FantokensMinterMinCreatorIdAsc = 'FANTOKENS_MINTER_MIN_CREATOR_ID_ASC',
  FantokensMinterMinCreatorIdDesc = 'FANTOKENS_MINTER_MIN_CREATOR_ID_DESC',
  FantokensMinterMinIdAsc = 'FANTOKENS_MINTER_MIN_ID_ASC',
  FantokensMinterMinIdDesc = 'FANTOKENS_MINTER_MIN_ID_DESC',
  FantokensMinterMinMaxSupplyAsc = 'FANTOKENS_MINTER_MIN_MAX_SUPPLY_ASC',
  FantokensMinterMinMaxSupplyDesc = 'FANTOKENS_MINTER_MIN_MAX_SUPPLY_DESC',
  FantokensMinterMinMetadataIdAsc = 'FANTOKENS_MINTER_MIN_METADATA_ID_ASC',
  FantokensMinterMinMetadataIdDesc = 'FANTOKENS_MINTER_MIN_METADATA_ID_DESC',
  FantokensMinterMinMinterIdAsc = 'FANTOKENS_MINTER_MIN_MINTER_ID_ASC',
  FantokensMinterMinMinterIdDesc = 'FANTOKENS_MINTER_MIN_MINTER_ID_DESC',
  FantokensMinterMinNameAsc = 'FANTOKENS_MINTER_MIN_NAME_ASC',
  FantokensMinterMinNameDesc = 'FANTOKENS_MINTER_MIN_NAME_DESC',
  FantokensMinterMinSupplyAsc = 'FANTOKENS_MINTER_MIN_SUPPLY_ASC',
  FantokensMinterMinSupplyDesc = 'FANTOKENS_MINTER_MIN_SUPPLY_DESC',
  FantokensMinterMinSymbolAsc = 'FANTOKENS_MINTER_MIN_SYMBOL_ASC',
  FantokensMinterMinSymbolDesc = 'FANTOKENS_MINTER_MIN_SYMBOL_DESC',
  FantokensMinterMinUpdatedAtAsc = 'FANTOKENS_MINTER_MIN_UPDATED_AT_ASC',
  FantokensMinterMinUpdatedAtDesc = 'FANTOKENS_MINTER_MIN_UPDATED_AT_DESC',
  FantokensMinterMinUpdatedHeightAsc = 'FANTOKENS_MINTER_MIN_UPDATED_HEIGHT_ASC',
  FantokensMinterMinUpdatedHeightDesc = 'FANTOKENS_MINTER_MIN_UPDATED_HEIGHT_DESC',
  FantokensMinterMinUriAsc = 'FANTOKENS_MINTER_MIN_URI_ASC',
  FantokensMinterMinUriDesc = 'FANTOKENS_MINTER_MIN_URI_DESC',
  FantokensMinterMinVerifiedAsc = 'FANTOKENS_MINTER_MIN_VERIFIED_ASC',
  FantokensMinterMinVerifiedDesc = 'FANTOKENS_MINTER_MIN_VERIFIED_DESC',
  FantokensMinterStddevPopulationAuthorityIdAsc = 'FANTOKENS_MINTER_STDDEV_POPULATION_AUTHORITY_ID_ASC',
  FantokensMinterStddevPopulationAuthorityIdDesc = 'FANTOKENS_MINTER_STDDEV_POPULATION_AUTHORITY_ID_DESC',
  FantokensMinterStddevPopulationCreatedAtAsc = 'FANTOKENS_MINTER_STDDEV_POPULATION_CREATED_AT_ASC',
  FantokensMinterStddevPopulationCreatedAtDesc = 'FANTOKENS_MINTER_STDDEV_POPULATION_CREATED_AT_DESC',
  FantokensMinterStddevPopulationCreatedHeightAsc = 'FANTOKENS_MINTER_STDDEV_POPULATION_CREATED_HEIGHT_ASC',
  FantokensMinterStddevPopulationCreatedHeightDesc = 'FANTOKENS_MINTER_STDDEV_POPULATION_CREATED_HEIGHT_DESC',
  FantokensMinterStddevPopulationCreatorIdAsc = 'FANTOKENS_MINTER_STDDEV_POPULATION_CREATOR_ID_ASC',
  FantokensMinterStddevPopulationCreatorIdDesc = 'FANTOKENS_MINTER_STDDEV_POPULATION_CREATOR_ID_DESC',
  FantokensMinterStddevPopulationIdAsc = 'FANTOKENS_MINTER_STDDEV_POPULATION_ID_ASC',
  FantokensMinterStddevPopulationIdDesc = 'FANTOKENS_MINTER_STDDEV_POPULATION_ID_DESC',
  FantokensMinterStddevPopulationMaxSupplyAsc = 'FANTOKENS_MINTER_STDDEV_POPULATION_MAX_SUPPLY_ASC',
  FantokensMinterStddevPopulationMaxSupplyDesc = 'FANTOKENS_MINTER_STDDEV_POPULATION_MAX_SUPPLY_DESC',
  FantokensMinterStddevPopulationMetadataIdAsc = 'FANTOKENS_MINTER_STDDEV_POPULATION_METADATA_ID_ASC',
  FantokensMinterStddevPopulationMetadataIdDesc = 'FANTOKENS_MINTER_STDDEV_POPULATION_METADATA_ID_DESC',
  FantokensMinterStddevPopulationMinterIdAsc = 'FANTOKENS_MINTER_STDDEV_POPULATION_MINTER_ID_ASC',
  FantokensMinterStddevPopulationMinterIdDesc = 'FANTOKENS_MINTER_STDDEV_POPULATION_MINTER_ID_DESC',
  FantokensMinterStddevPopulationNameAsc = 'FANTOKENS_MINTER_STDDEV_POPULATION_NAME_ASC',
  FantokensMinterStddevPopulationNameDesc = 'FANTOKENS_MINTER_STDDEV_POPULATION_NAME_DESC',
  FantokensMinterStddevPopulationSupplyAsc = 'FANTOKENS_MINTER_STDDEV_POPULATION_SUPPLY_ASC',
  FantokensMinterStddevPopulationSupplyDesc = 'FANTOKENS_MINTER_STDDEV_POPULATION_SUPPLY_DESC',
  FantokensMinterStddevPopulationSymbolAsc = 'FANTOKENS_MINTER_STDDEV_POPULATION_SYMBOL_ASC',
  FantokensMinterStddevPopulationSymbolDesc = 'FANTOKENS_MINTER_STDDEV_POPULATION_SYMBOL_DESC',
  FantokensMinterStddevPopulationUpdatedAtAsc = 'FANTOKENS_MINTER_STDDEV_POPULATION_UPDATED_AT_ASC',
  FantokensMinterStddevPopulationUpdatedAtDesc = 'FANTOKENS_MINTER_STDDEV_POPULATION_UPDATED_AT_DESC',
  FantokensMinterStddevPopulationUpdatedHeightAsc = 'FANTOKENS_MINTER_STDDEV_POPULATION_UPDATED_HEIGHT_ASC',
  FantokensMinterStddevPopulationUpdatedHeightDesc = 'FANTOKENS_MINTER_STDDEV_POPULATION_UPDATED_HEIGHT_DESC',
  FantokensMinterStddevPopulationUriAsc = 'FANTOKENS_MINTER_STDDEV_POPULATION_URI_ASC',
  FantokensMinterStddevPopulationUriDesc = 'FANTOKENS_MINTER_STDDEV_POPULATION_URI_DESC',
  FantokensMinterStddevPopulationVerifiedAsc = 'FANTOKENS_MINTER_STDDEV_POPULATION_VERIFIED_ASC',
  FantokensMinterStddevPopulationVerifiedDesc = 'FANTOKENS_MINTER_STDDEV_POPULATION_VERIFIED_DESC',
  FantokensMinterStddevSampleAuthorityIdAsc = 'FANTOKENS_MINTER_STDDEV_SAMPLE_AUTHORITY_ID_ASC',
  FantokensMinterStddevSampleAuthorityIdDesc = 'FANTOKENS_MINTER_STDDEV_SAMPLE_AUTHORITY_ID_DESC',
  FantokensMinterStddevSampleCreatedAtAsc = 'FANTOKENS_MINTER_STDDEV_SAMPLE_CREATED_AT_ASC',
  FantokensMinterStddevSampleCreatedAtDesc = 'FANTOKENS_MINTER_STDDEV_SAMPLE_CREATED_AT_DESC',
  FantokensMinterStddevSampleCreatedHeightAsc = 'FANTOKENS_MINTER_STDDEV_SAMPLE_CREATED_HEIGHT_ASC',
  FantokensMinterStddevSampleCreatedHeightDesc = 'FANTOKENS_MINTER_STDDEV_SAMPLE_CREATED_HEIGHT_DESC',
  FantokensMinterStddevSampleCreatorIdAsc = 'FANTOKENS_MINTER_STDDEV_SAMPLE_CREATOR_ID_ASC',
  FantokensMinterStddevSampleCreatorIdDesc = 'FANTOKENS_MINTER_STDDEV_SAMPLE_CREATOR_ID_DESC',
  FantokensMinterStddevSampleIdAsc = 'FANTOKENS_MINTER_STDDEV_SAMPLE_ID_ASC',
  FantokensMinterStddevSampleIdDesc = 'FANTOKENS_MINTER_STDDEV_SAMPLE_ID_DESC',
  FantokensMinterStddevSampleMaxSupplyAsc = 'FANTOKENS_MINTER_STDDEV_SAMPLE_MAX_SUPPLY_ASC',
  FantokensMinterStddevSampleMaxSupplyDesc = 'FANTOKENS_MINTER_STDDEV_SAMPLE_MAX_SUPPLY_DESC',
  FantokensMinterStddevSampleMetadataIdAsc = 'FANTOKENS_MINTER_STDDEV_SAMPLE_METADATA_ID_ASC',
  FantokensMinterStddevSampleMetadataIdDesc = 'FANTOKENS_MINTER_STDDEV_SAMPLE_METADATA_ID_DESC',
  FantokensMinterStddevSampleMinterIdAsc = 'FANTOKENS_MINTER_STDDEV_SAMPLE_MINTER_ID_ASC',
  FantokensMinterStddevSampleMinterIdDesc = 'FANTOKENS_MINTER_STDDEV_SAMPLE_MINTER_ID_DESC',
  FantokensMinterStddevSampleNameAsc = 'FANTOKENS_MINTER_STDDEV_SAMPLE_NAME_ASC',
  FantokensMinterStddevSampleNameDesc = 'FANTOKENS_MINTER_STDDEV_SAMPLE_NAME_DESC',
  FantokensMinterStddevSampleSupplyAsc = 'FANTOKENS_MINTER_STDDEV_SAMPLE_SUPPLY_ASC',
  FantokensMinterStddevSampleSupplyDesc = 'FANTOKENS_MINTER_STDDEV_SAMPLE_SUPPLY_DESC',
  FantokensMinterStddevSampleSymbolAsc = 'FANTOKENS_MINTER_STDDEV_SAMPLE_SYMBOL_ASC',
  FantokensMinterStddevSampleSymbolDesc = 'FANTOKENS_MINTER_STDDEV_SAMPLE_SYMBOL_DESC',
  FantokensMinterStddevSampleUpdatedAtAsc = 'FANTOKENS_MINTER_STDDEV_SAMPLE_UPDATED_AT_ASC',
  FantokensMinterStddevSampleUpdatedAtDesc = 'FANTOKENS_MINTER_STDDEV_SAMPLE_UPDATED_AT_DESC',
  FantokensMinterStddevSampleUpdatedHeightAsc = 'FANTOKENS_MINTER_STDDEV_SAMPLE_UPDATED_HEIGHT_ASC',
  FantokensMinterStddevSampleUpdatedHeightDesc = 'FANTOKENS_MINTER_STDDEV_SAMPLE_UPDATED_HEIGHT_DESC',
  FantokensMinterStddevSampleUriAsc = 'FANTOKENS_MINTER_STDDEV_SAMPLE_URI_ASC',
  FantokensMinterStddevSampleUriDesc = 'FANTOKENS_MINTER_STDDEV_SAMPLE_URI_DESC',
  FantokensMinterStddevSampleVerifiedAsc = 'FANTOKENS_MINTER_STDDEV_SAMPLE_VERIFIED_ASC',
  FantokensMinterStddevSampleVerifiedDesc = 'FANTOKENS_MINTER_STDDEV_SAMPLE_VERIFIED_DESC',
  FantokensMinterSumAuthorityIdAsc = 'FANTOKENS_MINTER_SUM_AUTHORITY_ID_ASC',
  FantokensMinterSumAuthorityIdDesc = 'FANTOKENS_MINTER_SUM_AUTHORITY_ID_DESC',
  FantokensMinterSumCreatedAtAsc = 'FANTOKENS_MINTER_SUM_CREATED_AT_ASC',
  FantokensMinterSumCreatedAtDesc = 'FANTOKENS_MINTER_SUM_CREATED_AT_DESC',
  FantokensMinterSumCreatedHeightAsc = 'FANTOKENS_MINTER_SUM_CREATED_HEIGHT_ASC',
  FantokensMinterSumCreatedHeightDesc = 'FANTOKENS_MINTER_SUM_CREATED_HEIGHT_DESC',
  FantokensMinterSumCreatorIdAsc = 'FANTOKENS_MINTER_SUM_CREATOR_ID_ASC',
  FantokensMinterSumCreatorIdDesc = 'FANTOKENS_MINTER_SUM_CREATOR_ID_DESC',
  FantokensMinterSumIdAsc = 'FANTOKENS_MINTER_SUM_ID_ASC',
  FantokensMinterSumIdDesc = 'FANTOKENS_MINTER_SUM_ID_DESC',
  FantokensMinterSumMaxSupplyAsc = 'FANTOKENS_MINTER_SUM_MAX_SUPPLY_ASC',
  FantokensMinterSumMaxSupplyDesc = 'FANTOKENS_MINTER_SUM_MAX_SUPPLY_DESC',
  FantokensMinterSumMetadataIdAsc = 'FANTOKENS_MINTER_SUM_METADATA_ID_ASC',
  FantokensMinterSumMetadataIdDesc = 'FANTOKENS_MINTER_SUM_METADATA_ID_DESC',
  FantokensMinterSumMinterIdAsc = 'FANTOKENS_MINTER_SUM_MINTER_ID_ASC',
  FantokensMinterSumMinterIdDesc = 'FANTOKENS_MINTER_SUM_MINTER_ID_DESC',
  FantokensMinterSumNameAsc = 'FANTOKENS_MINTER_SUM_NAME_ASC',
  FantokensMinterSumNameDesc = 'FANTOKENS_MINTER_SUM_NAME_DESC',
  FantokensMinterSumSupplyAsc = 'FANTOKENS_MINTER_SUM_SUPPLY_ASC',
  FantokensMinterSumSupplyDesc = 'FANTOKENS_MINTER_SUM_SUPPLY_DESC',
  FantokensMinterSumSymbolAsc = 'FANTOKENS_MINTER_SUM_SYMBOL_ASC',
  FantokensMinterSumSymbolDesc = 'FANTOKENS_MINTER_SUM_SYMBOL_DESC',
  FantokensMinterSumUpdatedAtAsc = 'FANTOKENS_MINTER_SUM_UPDATED_AT_ASC',
  FantokensMinterSumUpdatedAtDesc = 'FANTOKENS_MINTER_SUM_UPDATED_AT_DESC',
  FantokensMinterSumUpdatedHeightAsc = 'FANTOKENS_MINTER_SUM_UPDATED_HEIGHT_ASC',
  FantokensMinterSumUpdatedHeightDesc = 'FANTOKENS_MINTER_SUM_UPDATED_HEIGHT_DESC',
  FantokensMinterSumUriAsc = 'FANTOKENS_MINTER_SUM_URI_ASC',
  FantokensMinterSumUriDesc = 'FANTOKENS_MINTER_SUM_URI_DESC',
  FantokensMinterSumVerifiedAsc = 'FANTOKENS_MINTER_SUM_VERIFIED_ASC',
  FantokensMinterSumVerifiedDesc = 'FANTOKENS_MINTER_SUM_VERIFIED_DESC',
  FantokensMinterVariancePopulationAuthorityIdAsc = 'FANTOKENS_MINTER_VARIANCE_POPULATION_AUTHORITY_ID_ASC',
  FantokensMinterVariancePopulationAuthorityIdDesc = 'FANTOKENS_MINTER_VARIANCE_POPULATION_AUTHORITY_ID_DESC',
  FantokensMinterVariancePopulationCreatedAtAsc = 'FANTOKENS_MINTER_VARIANCE_POPULATION_CREATED_AT_ASC',
  FantokensMinterVariancePopulationCreatedAtDesc = 'FANTOKENS_MINTER_VARIANCE_POPULATION_CREATED_AT_DESC',
  FantokensMinterVariancePopulationCreatedHeightAsc = 'FANTOKENS_MINTER_VARIANCE_POPULATION_CREATED_HEIGHT_ASC',
  FantokensMinterVariancePopulationCreatedHeightDesc = 'FANTOKENS_MINTER_VARIANCE_POPULATION_CREATED_HEIGHT_DESC',
  FantokensMinterVariancePopulationCreatorIdAsc = 'FANTOKENS_MINTER_VARIANCE_POPULATION_CREATOR_ID_ASC',
  FantokensMinterVariancePopulationCreatorIdDesc = 'FANTOKENS_MINTER_VARIANCE_POPULATION_CREATOR_ID_DESC',
  FantokensMinterVariancePopulationIdAsc = 'FANTOKENS_MINTER_VARIANCE_POPULATION_ID_ASC',
  FantokensMinterVariancePopulationIdDesc = 'FANTOKENS_MINTER_VARIANCE_POPULATION_ID_DESC',
  FantokensMinterVariancePopulationMaxSupplyAsc = 'FANTOKENS_MINTER_VARIANCE_POPULATION_MAX_SUPPLY_ASC',
  FantokensMinterVariancePopulationMaxSupplyDesc = 'FANTOKENS_MINTER_VARIANCE_POPULATION_MAX_SUPPLY_DESC',
  FantokensMinterVariancePopulationMetadataIdAsc = 'FANTOKENS_MINTER_VARIANCE_POPULATION_METADATA_ID_ASC',
  FantokensMinterVariancePopulationMetadataIdDesc = 'FANTOKENS_MINTER_VARIANCE_POPULATION_METADATA_ID_DESC',
  FantokensMinterVariancePopulationMinterIdAsc = 'FANTOKENS_MINTER_VARIANCE_POPULATION_MINTER_ID_ASC',
  FantokensMinterVariancePopulationMinterIdDesc = 'FANTOKENS_MINTER_VARIANCE_POPULATION_MINTER_ID_DESC',
  FantokensMinterVariancePopulationNameAsc = 'FANTOKENS_MINTER_VARIANCE_POPULATION_NAME_ASC',
  FantokensMinterVariancePopulationNameDesc = 'FANTOKENS_MINTER_VARIANCE_POPULATION_NAME_DESC',
  FantokensMinterVariancePopulationSupplyAsc = 'FANTOKENS_MINTER_VARIANCE_POPULATION_SUPPLY_ASC',
  FantokensMinterVariancePopulationSupplyDesc = 'FANTOKENS_MINTER_VARIANCE_POPULATION_SUPPLY_DESC',
  FantokensMinterVariancePopulationSymbolAsc = 'FANTOKENS_MINTER_VARIANCE_POPULATION_SYMBOL_ASC',
  FantokensMinterVariancePopulationSymbolDesc = 'FANTOKENS_MINTER_VARIANCE_POPULATION_SYMBOL_DESC',
  FantokensMinterVariancePopulationUpdatedAtAsc = 'FANTOKENS_MINTER_VARIANCE_POPULATION_UPDATED_AT_ASC',
  FantokensMinterVariancePopulationUpdatedAtDesc = 'FANTOKENS_MINTER_VARIANCE_POPULATION_UPDATED_AT_DESC',
  FantokensMinterVariancePopulationUpdatedHeightAsc = 'FANTOKENS_MINTER_VARIANCE_POPULATION_UPDATED_HEIGHT_ASC',
  FantokensMinterVariancePopulationUpdatedHeightDesc = 'FANTOKENS_MINTER_VARIANCE_POPULATION_UPDATED_HEIGHT_DESC',
  FantokensMinterVariancePopulationUriAsc = 'FANTOKENS_MINTER_VARIANCE_POPULATION_URI_ASC',
  FantokensMinterVariancePopulationUriDesc = 'FANTOKENS_MINTER_VARIANCE_POPULATION_URI_DESC',
  FantokensMinterVariancePopulationVerifiedAsc = 'FANTOKENS_MINTER_VARIANCE_POPULATION_VERIFIED_ASC',
  FantokensMinterVariancePopulationVerifiedDesc = 'FANTOKENS_MINTER_VARIANCE_POPULATION_VERIFIED_DESC',
  FantokensMinterVarianceSampleAuthorityIdAsc = 'FANTOKENS_MINTER_VARIANCE_SAMPLE_AUTHORITY_ID_ASC',
  FantokensMinterVarianceSampleAuthorityIdDesc = 'FANTOKENS_MINTER_VARIANCE_SAMPLE_AUTHORITY_ID_DESC',
  FantokensMinterVarianceSampleCreatedAtAsc = 'FANTOKENS_MINTER_VARIANCE_SAMPLE_CREATED_AT_ASC',
  FantokensMinterVarianceSampleCreatedAtDesc = 'FANTOKENS_MINTER_VARIANCE_SAMPLE_CREATED_AT_DESC',
  FantokensMinterVarianceSampleCreatedHeightAsc = 'FANTOKENS_MINTER_VARIANCE_SAMPLE_CREATED_HEIGHT_ASC',
  FantokensMinterVarianceSampleCreatedHeightDesc = 'FANTOKENS_MINTER_VARIANCE_SAMPLE_CREATED_HEIGHT_DESC',
  FantokensMinterVarianceSampleCreatorIdAsc = 'FANTOKENS_MINTER_VARIANCE_SAMPLE_CREATOR_ID_ASC',
  FantokensMinterVarianceSampleCreatorIdDesc = 'FANTOKENS_MINTER_VARIANCE_SAMPLE_CREATOR_ID_DESC',
  FantokensMinterVarianceSampleIdAsc = 'FANTOKENS_MINTER_VARIANCE_SAMPLE_ID_ASC',
  FantokensMinterVarianceSampleIdDesc = 'FANTOKENS_MINTER_VARIANCE_SAMPLE_ID_DESC',
  FantokensMinterVarianceSampleMaxSupplyAsc = 'FANTOKENS_MINTER_VARIANCE_SAMPLE_MAX_SUPPLY_ASC',
  FantokensMinterVarianceSampleMaxSupplyDesc = 'FANTOKENS_MINTER_VARIANCE_SAMPLE_MAX_SUPPLY_DESC',
  FantokensMinterVarianceSampleMetadataIdAsc = 'FANTOKENS_MINTER_VARIANCE_SAMPLE_METADATA_ID_ASC',
  FantokensMinterVarianceSampleMetadataIdDesc = 'FANTOKENS_MINTER_VARIANCE_SAMPLE_METADATA_ID_DESC',
  FantokensMinterVarianceSampleMinterIdAsc = 'FANTOKENS_MINTER_VARIANCE_SAMPLE_MINTER_ID_ASC',
  FantokensMinterVarianceSampleMinterIdDesc = 'FANTOKENS_MINTER_VARIANCE_SAMPLE_MINTER_ID_DESC',
  FantokensMinterVarianceSampleNameAsc = 'FANTOKENS_MINTER_VARIANCE_SAMPLE_NAME_ASC',
  FantokensMinterVarianceSampleNameDesc = 'FANTOKENS_MINTER_VARIANCE_SAMPLE_NAME_DESC',
  FantokensMinterVarianceSampleSupplyAsc = 'FANTOKENS_MINTER_VARIANCE_SAMPLE_SUPPLY_ASC',
  FantokensMinterVarianceSampleSupplyDesc = 'FANTOKENS_MINTER_VARIANCE_SAMPLE_SUPPLY_DESC',
  FantokensMinterVarianceSampleSymbolAsc = 'FANTOKENS_MINTER_VARIANCE_SAMPLE_SYMBOL_ASC',
  FantokensMinterVarianceSampleSymbolDesc = 'FANTOKENS_MINTER_VARIANCE_SAMPLE_SYMBOL_DESC',
  FantokensMinterVarianceSampleUpdatedAtAsc = 'FANTOKENS_MINTER_VARIANCE_SAMPLE_UPDATED_AT_ASC',
  FantokensMinterVarianceSampleUpdatedAtDesc = 'FANTOKENS_MINTER_VARIANCE_SAMPLE_UPDATED_AT_DESC',
  FantokensMinterVarianceSampleUpdatedHeightAsc = 'FANTOKENS_MINTER_VARIANCE_SAMPLE_UPDATED_HEIGHT_ASC',
  FantokensMinterVarianceSampleUpdatedHeightDesc = 'FANTOKENS_MINTER_VARIANCE_SAMPLE_UPDATED_HEIGHT_DESC',
  FantokensMinterVarianceSampleUriAsc = 'FANTOKENS_MINTER_VARIANCE_SAMPLE_URI_ASC',
  FantokensMinterVarianceSampleUriDesc = 'FANTOKENS_MINTER_VARIANCE_SAMPLE_URI_DESC',
  FantokensMinterVarianceSampleVerifiedAsc = 'FANTOKENS_MINTER_VARIANCE_SAMPLE_VERIFIED_ASC',
  FantokensMinterVarianceSampleVerifiedDesc = 'FANTOKENS_MINTER_VARIANCE_SAMPLE_VERIFIED_DESC',
  FantokenFavoritesAverageAccountIdAsc = 'FANTOKEN_FAVORITES_AVERAGE_ACCOUNT_ID_ASC',
  FantokenFavoritesAverageAccountIdDesc = 'FANTOKEN_FAVORITES_AVERAGE_ACCOUNT_ID_DESC',
  FantokenFavoritesAverageFantokenIdAsc = 'FANTOKEN_FAVORITES_AVERAGE_FANTOKEN_ID_ASC',
  FantokenFavoritesAverageFantokenIdDesc = 'FANTOKEN_FAVORITES_AVERAGE_FANTOKEN_ID_DESC',
  FantokenFavoritesAverageIdAsc = 'FANTOKEN_FAVORITES_AVERAGE_ID_ASC',
  FantokenFavoritesAverageIdDesc = 'FANTOKEN_FAVORITES_AVERAGE_ID_DESC',
  FantokenFavoritesCountAsc = 'FANTOKEN_FAVORITES_COUNT_ASC',
  FantokenFavoritesCountDesc = 'FANTOKEN_FAVORITES_COUNT_DESC',
  FantokenFavoritesDistinctCountAccountIdAsc = 'FANTOKEN_FAVORITES_DISTINCT_COUNT_ACCOUNT_ID_ASC',
  FantokenFavoritesDistinctCountAccountIdDesc = 'FANTOKEN_FAVORITES_DISTINCT_COUNT_ACCOUNT_ID_DESC',
  FantokenFavoritesDistinctCountFantokenIdAsc = 'FANTOKEN_FAVORITES_DISTINCT_COUNT_FANTOKEN_ID_ASC',
  FantokenFavoritesDistinctCountFantokenIdDesc = 'FANTOKEN_FAVORITES_DISTINCT_COUNT_FANTOKEN_ID_DESC',
  FantokenFavoritesDistinctCountIdAsc = 'FANTOKEN_FAVORITES_DISTINCT_COUNT_ID_ASC',
  FantokenFavoritesDistinctCountIdDesc = 'FANTOKEN_FAVORITES_DISTINCT_COUNT_ID_DESC',
  FantokenFavoritesMaxAccountIdAsc = 'FANTOKEN_FAVORITES_MAX_ACCOUNT_ID_ASC',
  FantokenFavoritesMaxAccountIdDesc = 'FANTOKEN_FAVORITES_MAX_ACCOUNT_ID_DESC',
  FantokenFavoritesMaxFantokenIdAsc = 'FANTOKEN_FAVORITES_MAX_FANTOKEN_ID_ASC',
  FantokenFavoritesMaxFantokenIdDesc = 'FANTOKEN_FAVORITES_MAX_FANTOKEN_ID_DESC',
  FantokenFavoritesMaxIdAsc = 'FANTOKEN_FAVORITES_MAX_ID_ASC',
  FantokenFavoritesMaxIdDesc = 'FANTOKEN_FAVORITES_MAX_ID_DESC',
  FantokenFavoritesMinAccountIdAsc = 'FANTOKEN_FAVORITES_MIN_ACCOUNT_ID_ASC',
  FantokenFavoritesMinAccountIdDesc = 'FANTOKEN_FAVORITES_MIN_ACCOUNT_ID_DESC',
  FantokenFavoritesMinFantokenIdAsc = 'FANTOKEN_FAVORITES_MIN_FANTOKEN_ID_ASC',
  FantokenFavoritesMinFantokenIdDesc = 'FANTOKEN_FAVORITES_MIN_FANTOKEN_ID_DESC',
  FantokenFavoritesMinIdAsc = 'FANTOKEN_FAVORITES_MIN_ID_ASC',
  FantokenFavoritesMinIdDesc = 'FANTOKEN_FAVORITES_MIN_ID_DESC',
  FantokenFavoritesStddevPopulationAccountIdAsc = 'FANTOKEN_FAVORITES_STDDEV_POPULATION_ACCOUNT_ID_ASC',
  FantokenFavoritesStddevPopulationAccountIdDesc = 'FANTOKEN_FAVORITES_STDDEV_POPULATION_ACCOUNT_ID_DESC',
  FantokenFavoritesStddevPopulationFantokenIdAsc = 'FANTOKEN_FAVORITES_STDDEV_POPULATION_FANTOKEN_ID_ASC',
  FantokenFavoritesStddevPopulationFantokenIdDesc = 'FANTOKEN_FAVORITES_STDDEV_POPULATION_FANTOKEN_ID_DESC',
  FantokenFavoritesStddevPopulationIdAsc = 'FANTOKEN_FAVORITES_STDDEV_POPULATION_ID_ASC',
  FantokenFavoritesStddevPopulationIdDesc = 'FANTOKEN_FAVORITES_STDDEV_POPULATION_ID_DESC',
  FantokenFavoritesStddevSampleAccountIdAsc = 'FANTOKEN_FAVORITES_STDDEV_SAMPLE_ACCOUNT_ID_ASC',
  FantokenFavoritesStddevSampleAccountIdDesc = 'FANTOKEN_FAVORITES_STDDEV_SAMPLE_ACCOUNT_ID_DESC',
  FantokenFavoritesStddevSampleFantokenIdAsc = 'FANTOKEN_FAVORITES_STDDEV_SAMPLE_FANTOKEN_ID_ASC',
  FantokenFavoritesStddevSampleFantokenIdDesc = 'FANTOKEN_FAVORITES_STDDEV_SAMPLE_FANTOKEN_ID_DESC',
  FantokenFavoritesStddevSampleIdAsc = 'FANTOKEN_FAVORITES_STDDEV_SAMPLE_ID_ASC',
  FantokenFavoritesStddevSampleIdDesc = 'FANTOKEN_FAVORITES_STDDEV_SAMPLE_ID_DESC',
  FantokenFavoritesSumAccountIdAsc = 'FANTOKEN_FAVORITES_SUM_ACCOUNT_ID_ASC',
  FantokenFavoritesSumAccountIdDesc = 'FANTOKEN_FAVORITES_SUM_ACCOUNT_ID_DESC',
  FantokenFavoritesSumFantokenIdAsc = 'FANTOKEN_FAVORITES_SUM_FANTOKEN_ID_ASC',
  FantokenFavoritesSumFantokenIdDesc = 'FANTOKEN_FAVORITES_SUM_FANTOKEN_ID_DESC',
  FantokenFavoritesSumIdAsc = 'FANTOKEN_FAVORITES_SUM_ID_ASC',
  FantokenFavoritesSumIdDesc = 'FANTOKEN_FAVORITES_SUM_ID_DESC',
  FantokenFavoritesVariancePopulationAccountIdAsc = 'FANTOKEN_FAVORITES_VARIANCE_POPULATION_ACCOUNT_ID_ASC',
  FantokenFavoritesVariancePopulationAccountIdDesc = 'FANTOKEN_FAVORITES_VARIANCE_POPULATION_ACCOUNT_ID_DESC',
  FantokenFavoritesVariancePopulationFantokenIdAsc = 'FANTOKEN_FAVORITES_VARIANCE_POPULATION_FANTOKEN_ID_ASC',
  FantokenFavoritesVariancePopulationFantokenIdDesc = 'FANTOKEN_FAVORITES_VARIANCE_POPULATION_FANTOKEN_ID_DESC',
  FantokenFavoritesVariancePopulationIdAsc = 'FANTOKEN_FAVORITES_VARIANCE_POPULATION_ID_ASC',
  FantokenFavoritesVariancePopulationIdDesc = 'FANTOKEN_FAVORITES_VARIANCE_POPULATION_ID_DESC',
  FantokenFavoritesVarianceSampleAccountIdAsc = 'FANTOKEN_FAVORITES_VARIANCE_SAMPLE_ACCOUNT_ID_ASC',
  FantokenFavoritesVarianceSampleAccountIdDesc = 'FANTOKEN_FAVORITES_VARIANCE_SAMPLE_ACCOUNT_ID_DESC',
  FantokenFavoritesVarianceSampleFantokenIdAsc = 'FANTOKEN_FAVORITES_VARIANCE_SAMPLE_FANTOKEN_ID_ASC',
  FantokenFavoritesVarianceSampleFantokenIdDesc = 'FANTOKEN_FAVORITES_VARIANCE_SAMPLE_FANTOKEN_ID_DESC',
  FantokenFavoritesVarianceSampleIdAsc = 'FANTOKEN_FAVORITES_VARIANCE_SAMPLE_ID_ASC',
  FantokenFavoritesVarianceSampleIdDesc = 'FANTOKEN_FAVORITES_VARIANCE_SAMPLE_ID_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  LaunchpartiesByCreatorIdAverageCollectionIdAsc = 'LAUNCHPARTIES_BY_CREATOR_ID_AVERAGE_COLLECTION_ID_ASC',
  LaunchpartiesByCreatorIdAverageCollectionIdDesc = 'LAUNCHPARTIES_BY_CREATOR_ID_AVERAGE_COLLECTION_ID_DESC',
  LaunchpartiesByCreatorIdAverageCreatedAtAsc = 'LAUNCHPARTIES_BY_CREATOR_ID_AVERAGE_CREATED_AT_ASC',
  LaunchpartiesByCreatorIdAverageCreatedAtDesc = 'LAUNCHPARTIES_BY_CREATOR_ID_AVERAGE_CREATED_AT_DESC',
  LaunchpartiesByCreatorIdAverageCreatedHeightAsc = 'LAUNCHPARTIES_BY_CREATOR_ID_AVERAGE_CREATED_HEIGHT_ASC',
  LaunchpartiesByCreatorIdAverageCreatedHeightDesc = 'LAUNCHPARTIES_BY_CREATOR_ID_AVERAGE_CREATED_HEIGHT_DESC',
  LaunchpartiesByCreatorIdAverageCreatorIdAsc = 'LAUNCHPARTIES_BY_CREATOR_ID_AVERAGE_CREATOR_ID_ASC',
  LaunchpartiesByCreatorIdAverageCreatorIdDesc = 'LAUNCHPARTIES_BY_CREATOR_ID_AVERAGE_CREATOR_ID_DESC',
  LaunchpartiesByCreatorIdAverageIdAsc = 'LAUNCHPARTIES_BY_CREATOR_ID_AVERAGE_ID_ASC',
  LaunchpartiesByCreatorIdAverageIdDesc = 'LAUNCHPARTIES_BY_CREATOR_ID_AVERAGE_ID_DESC',
  LaunchpartiesByCreatorIdAverageMaxEditionsAsc = 'LAUNCHPARTIES_BY_CREATOR_ID_AVERAGE_MAX_EDITIONS_ASC',
  LaunchpartiesByCreatorIdAverageMaxEditionsDesc = 'LAUNCHPARTIES_BY_CREATOR_ID_AVERAGE_MAX_EDITIONS_DESC',
  LaunchpartiesByCreatorIdAverageNameAsc = 'LAUNCHPARTIES_BY_CREATOR_ID_AVERAGE_NAME_ASC',
  LaunchpartiesByCreatorIdAverageNameDesc = 'LAUNCHPARTIES_BY_CREATOR_ID_AVERAGE_NAME_DESC',
  LaunchpartiesByCreatorIdAveragePaymentAddressAsc = 'LAUNCHPARTIES_BY_CREATOR_ID_AVERAGE_PAYMENT_ADDRESS_ASC',
  LaunchpartiesByCreatorIdAveragePaymentAddressDesc = 'LAUNCHPARTIES_BY_CREATOR_ID_AVERAGE_PAYMENT_ADDRESS_DESC',
  LaunchpartiesByCreatorIdAveragePriceAsc = 'LAUNCHPARTIES_BY_CREATOR_ID_AVERAGE_PRICE_ASC',
  LaunchpartiesByCreatorIdAveragePriceDesc = 'LAUNCHPARTIES_BY_CREATOR_ID_AVERAGE_PRICE_DESC',
  LaunchpartiesByCreatorIdAverageSellerFeeBpsAsc = 'LAUNCHPARTIES_BY_CREATOR_ID_AVERAGE_SELLER_FEE_BPS_ASC',
  LaunchpartiesByCreatorIdAverageSellerFeeBpsDesc = 'LAUNCHPARTIES_BY_CREATOR_ID_AVERAGE_SELLER_FEE_BPS_DESC',
  LaunchpartiesByCreatorIdAverageStartTimeAsc = 'LAUNCHPARTIES_BY_CREATOR_ID_AVERAGE_START_TIME_ASC',
  LaunchpartiesByCreatorIdAverageStartTimeDesc = 'LAUNCHPARTIES_BY_CREATOR_ID_AVERAGE_START_TIME_DESC',
  LaunchpartiesByCreatorIdAverageSymbolAsc = 'LAUNCHPARTIES_BY_CREATOR_ID_AVERAGE_SYMBOL_ASC',
  LaunchpartiesByCreatorIdAverageSymbolDesc = 'LAUNCHPARTIES_BY_CREATOR_ID_AVERAGE_SYMBOL_DESC',
  LaunchpartiesByCreatorIdAverageUpdatedAtAsc = 'LAUNCHPARTIES_BY_CREATOR_ID_AVERAGE_UPDATED_AT_ASC',
  LaunchpartiesByCreatorIdAverageUpdatedAtDesc = 'LAUNCHPARTIES_BY_CREATOR_ID_AVERAGE_UPDATED_AT_DESC',
  LaunchpartiesByCreatorIdAverageUpdatedHeightAsc = 'LAUNCHPARTIES_BY_CREATOR_ID_AVERAGE_UPDATED_HEIGHT_ASC',
  LaunchpartiesByCreatorIdAverageUpdatedHeightDesc = 'LAUNCHPARTIES_BY_CREATOR_ID_AVERAGE_UPDATED_HEIGHT_DESC',
  LaunchpartiesByCreatorIdCountAsc = 'LAUNCHPARTIES_BY_CREATOR_ID_COUNT_ASC',
  LaunchpartiesByCreatorIdCountDesc = 'LAUNCHPARTIES_BY_CREATOR_ID_COUNT_DESC',
  LaunchpartiesByCreatorIdDistinctCountCollectionIdAsc = 'LAUNCHPARTIES_BY_CREATOR_ID_DISTINCT_COUNT_COLLECTION_ID_ASC',
  LaunchpartiesByCreatorIdDistinctCountCollectionIdDesc = 'LAUNCHPARTIES_BY_CREATOR_ID_DISTINCT_COUNT_COLLECTION_ID_DESC',
  LaunchpartiesByCreatorIdDistinctCountCreatedAtAsc = 'LAUNCHPARTIES_BY_CREATOR_ID_DISTINCT_COUNT_CREATED_AT_ASC',
  LaunchpartiesByCreatorIdDistinctCountCreatedAtDesc = 'LAUNCHPARTIES_BY_CREATOR_ID_DISTINCT_COUNT_CREATED_AT_DESC',
  LaunchpartiesByCreatorIdDistinctCountCreatedHeightAsc = 'LAUNCHPARTIES_BY_CREATOR_ID_DISTINCT_COUNT_CREATED_HEIGHT_ASC',
  LaunchpartiesByCreatorIdDistinctCountCreatedHeightDesc = 'LAUNCHPARTIES_BY_CREATOR_ID_DISTINCT_COUNT_CREATED_HEIGHT_DESC',
  LaunchpartiesByCreatorIdDistinctCountCreatorIdAsc = 'LAUNCHPARTIES_BY_CREATOR_ID_DISTINCT_COUNT_CREATOR_ID_ASC',
  LaunchpartiesByCreatorIdDistinctCountCreatorIdDesc = 'LAUNCHPARTIES_BY_CREATOR_ID_DISTINCT_COUNT_CREATOR_ID_DESC',
  LaunchpartiesByCreatorIdDistinctCountIdAsc = 'LAUNCHPARTIES_BY_CREATOR_ID_DISTINCT_COUNT_ID_ASC',
  LaunchpartiesByCreatorIdDistinctCountIdDesc = 'LAUNCHPARTIES_BY_CREATOR_ID_DISTINCT_COUNT_ID_DESC',
  LaunchpartiesByCreatorIdDistinctCountMaxEditionsAsc = 'LAUNCHPARTIES_BY_CREATOR_ID_DISTINCT_COUNT_MAX_EDITIONS_ASC',
  LaunchpartiesByCreatorIdDistinctCountMaxEditionsDesc = 'LAUNCHPARTIES_BY_CREATOR_ID_DISTINCT_COUNT_MAX_EDITIONS_DESC',
  LaunchpartiesByCreatorIdDistinctCountNameAsc = 'LAUNCHPARTIES_BY_CREATOR_ID_DISTINCT_COUNT_NAME_ASC',
  LaunchpartiesByCreatorIdDistinctCountNameDesc = 'LAUNCHPARTIES_BY_CREATOR_ID_DISTINCT_COUNT_NAME_DESC',
  LaunchpartiesByCreatorIdDistinctCountPaymentAddressAsc = 'LAUNCHPARTIES_BY_CREATOR_ID_DISTINCT_COUNT_PAYMENT_ADDRESS_ASC',
  LaunchpartiesByCreatorIdDistinctCountPaymentAddressDesc = 'LAUNCHPARTIES_BY_CREATOR_ID_DISTINCT_COUNT_PAYMENT_ADDRESS_DESC',
  LaunchpartiesByCreatorIdDistinctCountPriceAsc = 'LAUNCHPARTIES_BY_CREATOR_ID_DISTINCT_COUNT_PRICE_ASC',
  LaunchpartiesByCreatorIdDistinctCountPriceDesc = 'LAUNCHPARTIES_BY_CREATOR_ID_DISTINCT_COUNT_PRICE_DESC',
  LaunchpartiesByCreatorIdDistinctCountSellerFeeBpsAsc = 'LAUNCHPARTIES_BY_CREATOR_ID_DISTINCT_COUNT_SELLER_FEE_BPS_ASC',
  LaunchpartiesByCreatorIdDistinctCountSellerFeeBpsDesc = 'LAUNCHPARTIES_BY_CREATOR_ID_DISTINCT_COUNT_SELLER_FEE_BPS_DESC',
  LaunchpartiesByCreatorIdDistinctCountStartTimeAsc = 'LAUNCHPARTIES_BY_CREATOR_ID_DISTINCT_COUNT_START_TIME_ASC',
  LaunchpartiesByCreatorIdDistinctCountStartTimeDesc = 'LAUNCHPARTIES_BY_CREATOR_ID_DISTINCT_COUNT_START_TIME_DESC',
  LaunchpartiesByCreatorIdDistinctCountSymbolAsc = 'LAUNCHPARTIES_BY_CREATOR_ID_DISTINCT_COUNT_SYMBOL_ASC',
  LaunchpartiesByCreatorIdDistinctCountSymbolDesc = 'LAUNCHPARTIES_BY_CREATOR_ID_DISTINCT_COUNT_SYMBOL_DESC',
  LaunchpartiesByCreatorIdDistinctCountUpdatedAtAsc = 'LAUNCHPARTIES_BY_CREATOR_ID_DISTINCT_COUNT_UPDATED_AT_ASC',
  LaunchpartiesByCreatorIdDistinctCountUpdatedAtDesc = 'LAUNCHPARTIES_BY_CREATOR_ID_DISTINCT_COUNT_UPDATED_AT_DESC',
  LaunchpartiesByCreatorIdDistinctCountUpdatedHeightAsc = 'LAUNCHPARTIES_BY_CREATOR_ID_DISTINCT_COUNT_UPDATED_HEIGHT_ASC',
  LaunchpartiesByCreatorIdDistinctCountUpdatedHeightDesc = 'LAUNCHPARTIES_BY_CREATOR_ID_DISTINCT_COUNT_UPDATED_HEIGHT_DESC',
  LaunchpartiesByCreatorIdMaxCollectionIdAsc = 'LAUNCHPARTIES_BY_CREATOR_ID_MAX_COLLECTION_ID_ASC',
  LaunchpartiesByCreatorIdMaxCollectionIdDesc = 'LAUNCHPARTIES_BY_CREATOR_ID_MAX_COLLECTION_ID_DESC',
  LaunchpartiesByCreatorIdMaxCreatedAtAsc = 'LAUNCHPARTIES_BY_CREATOR_ID_MAX_CREATED_AT_ASC',
  LaunchpartiesByCreatorIdMaxCreatedAtDesc = 'LAUNCHPARTIES_BY_CREATOR_ID_MAX_CREATED_AT_DESC',
  LaunchpartiesByCreatorIdMaxCreatedHeightAsc = 'LAUNCHPARTIES_BY_CREATOR_ID_MAX_CREATED_HEIGHT_ASC',
  LaunchpartiesByCreatorIdMaxCreatedHeightDesc = 'LAUNCHPARTIES_BY_CREATOR_ID_MAX_CREATED_HEIGHT_DESC',
  LaunchpartiesByCreatorIdMaxCreatorIdAsc = 'LAUNCHPARTIES_BY_CREATOR_ID_MAX_CREATOR_ID_ASC',
  LaunchpartiesByCreatorIdMaxCreatorIdDesc = 'LAUNCHPARTIES_BY_CREATOR_ID_MAX_CREATOR_ID_DESC',
  LaunchpartiesByCreatorIdMaxIdAsc = 'LAUNCHPARTIES_BY_CREATOR_ID_MAX_ID_ASC',
  LaunchpartiesByCreatorIdMaxIdDesc = 'LAUNCHPARTIES_BY_CREATOR_ID_MAX_ID_DESC',
  LaunchpartiesByCreatorIdMaxMaxEditionsAsc = 'LAUNCHPARTIES_BY_CREATOR_ID_MAX_MAX_EDITIONS_ASC',
  LaunchpartiesByCreatorIdMaxMaxEditionsDesc = 'LAUNCHPARTIES_BY_CREATOR_ID_MAX_MAX_EDITIONS_DESC',
  LaunchpartiesByCreatorIdMaxNameAsc = 'LAUNCHPARTIES_BY_CREATOR_ID_MAX_NAME_ASC',
  LaunchpartiesByCreatorIdMaxNameDesc = 'LAUNCHPARTIES_BY_CREATOR_ID_MAX_NAME_DESC',
  LaunchpartiesByCreatorIdMaxPaymentAddressAsc = 'LAUNCHPARTIES_BY_CREATOR_ID_MAX_PAYMENT_ADDRESS_ASC',
  LaunchpartiesByCreatorIdMaxPaymentAddressDesc = 'LAUNCHPARTIES_BY_CREATOR_ID_MAX_PAYMENT_ADDRESS_DESC',
  LaunchpartiesByCreatorIdMaxPriceAsc = 'LAUNCHPARTIES_BY_CREATOR_ID_MAX_PRICE_ASC',
  LaunchpartiesByCreatorIdMaxPriceDesc = 'LAUNCHPARTIES_BY_CREATOR_ID_MAX_PRICE_DESC',
  LaunchpartiesByCreatorIdMaxSellerFeeBpsAsc = 'LAUNCHPARTIES_BY_CREATOR_ID_MAX_SELLER_FEE_BPS_ASC',
  LaunchpartiesByCreatorIdMaxSellerFeeBpsDesc = 'LAUNCHPARTIES_BY_CREATOR_ID_MAX_SELLER_FEE_BPS_DESC',
  LaunchpartiesByCreatorIdMaxStartTimeAsc = 'LAUNCHPARTIES_BY_CREATOR_ID_MAX_START_TIME_ASC',
  LaunchpartiesByCreatorIdMaxStartTimeDesc = 'LAUNCHPARTIES_BY_CREATOR_ID_MAX_START_TIME_DESC',
  LaunchpartiesByCreatorIdMaxSymbolAsc = 'LAUNCHPARTIES_BY_CREATOR_ID_MAX_SYMBOL_ASC',
  LaunchpartiesByCreatorIdMaxSymbolDesc = 'LAUNCHPARTIES_BY_CREATOR_ID_MAX_SYMBOL_DESC',
  LaunchpartiesByCreatorIdMaxUpdatedAtAsc = 'LAUNCHPARTIES_BY_CREATOR_ID_MAX_UPDATED_AT_ASC',
  LaunchpartiesByCreatorIdMaxUpdatedAtDesc = 'LAUNCHPARTIES_BY_CREATOR_ID_MAX_UPDATED_AT_DESC',
  LaunchpartiesByCreatorIdMaxUpdatedHeightAsc = 'LAUNCHPARTIES_BY_CREATOR_ID_MAX_UPDATED_HEIGHT_ASC',
  LaunchpartiesByCreatorIdMaxUpdatedHeightDesc = 'LAUNCHPARTIES_BY_CREATOR_ID_MAX_UPDATED_HEIGHT_DESC',
  LaunchpartiesByCreatorIdMinCollectionIdAsc = 'LAUNCHPARTIES_BY_CREATOR_ID_MIN_COLLECTION_ID_ASC',
  LaunchpartiesByCreatorIdMinCollectionIdDesc = 'LAUNCHPARTIES_BY_CREATOR_ID_MIN_COLLECTION_ID_DESC',
  LaunchpartiesByCreatorIdMinCreatedAtAsc = 'LAUNCHPARTIES_BY_CREATOR_ID_MIN_CREATED_AT_ASC',
  LaunchpartiesByCreatorIdMinCreatedAtDesc = 'LAUNCHPARTIES_BY_CREATOR_ID_MIN_CREATED_AT_DESC',
  LaunchpartiesByCreatorIdMinCreatedHeightAsc = 'LAUNCHPARTIES_BY_CREATOR_ID_MIN_CREATED_HEIGHT_ASC',
  LaunchpartiesByCreatorIdMinCreatedHeightDesc = 'LAUNCHPARTIES_BY_CREATOR_ID_MIN_CREATED_HEIGHT_DESC',
  LaunchpartiesByCreatorIdMinCreatorIdAsc = 'LAUNCHPARTIES_BY_CREATOR_ID_MIN_CREATOR_ID_ASC',
  LaunchpartiesByCreatorIdMinCreatorIdDesc = 'LAUNCHPARTIES_BY_CREATOR_ID_MIN_CREATOR_ID_DESC',
  LaunchpartiesByCreatorIdMinIdAsc = 'LAUNCHPARTIES_BY_CREATOR_ID_MIN_ID_ASC',
  LaunchpartiesByCreatorIdMinIdDesc = 'LAUNCHPARTIES_BY_CREATOR_ID_MIN_ID_DESC',
  LaunchpartiesByCreatorIdMinMaxEditionsAsc = 'LAUNCHPARTIES_BY_CREATOR_ID_MIN_MAX_EDITIONS_ASC',
  LaunchpartiesByCreatorIdMinMaxEditionsDesc = 'LAUNCHPARTIES_BY_CREATOR_ID_MIN_MAX_EDITIONS_DESC',
  LaunchpartiesByCreatorIdMinNameAsc = 'LAUNCHPARTIES_BY_CREATOR_ID_MIN_NAME_ASC',
  LaunchpartiesByCreatorIdMinNameDesc = 'LAUNCHPARTIES_BY_CREATOR_ID_MIN_NAME_DESC',
  LaunchpartiesByCreatorIdMinPaymentAddressAsc = 'LAUNCHPARTIES_BY_CREATOR_ID_MIN_PAYMENT_ADDRESS_ASC',
  LaunchpartiesByCreatorIdMinPaymentAddressDesc = 'LAUNCHPARTIES_BY_CREATOR_ID_MIN_PAYMENT_ADDRESS_DESC',
  LaunchpartiesByCreatorIdMinPriceAsc = 'LAUNCHPARTIES_BY_CREATOR_ID_MIN_PRICE_ASC',
  LaunchpartiesByCreatorIdMinPriceDesc = 'LAUNCHPARTIES_BY_CREATOR_ID_MIN_PRICE_DESC',
  LaunchpartiesByCreatorIdMinSellerFeeBpsAsc = 'LAUNCHPARTIES_BY_CREATOR_ID_MIN_SELLER_FEE_BPS_ASC',
  LaunchpartiesByCreatorIdMinSellerFeeBpsDesc = 'LAUNCHPARTIES_BY_CREATOR_ID_MIN_SELLER_FEE_BPS_DESC',
  LaunchpartiesByCreatorIdMinStartTimeAsc = 'LAUNCHPARTIES_BY_CREATOR_ID_MIN_START_TIME_ASC',
  LaunchpartiesByCreatorIdMinStartTimeDesc = 'LAUNCHPARTIES_BY_CREATOR_ID_MIN_START_TIME_DESC',
  LaunchpartiesByCreatorIdMinSymbolAsc = 'LAUNCHPARTIES_BY_CREATOR_ID_MIN_SYMBOL_ASC',
  LaunchpartiesByCreatorIdMinSymbolDesc = 'LAUNCHPARTIES_BY_CREATOR_ID_MIN_SYMBOL_DESC',
  LaunchpartiesByCreatorIdMinUpdatedAtAsc = 'LAUNCHPARTIES_BY_CREATOR_ID_MIN_UPDATED_AT_ASC',
  LaunchpartiesByCreatorIdMinUpdatedAtDesc = 'LAUNCHPARTIES_BY_CREATOR_ID_MIN_UPDATED_AT_DESC',
  LaunchpartiesByCreatorIdMinUpdatedHeightAsc = 'LAUNCHPARTIES_BY_CREATOR_ID_MIN_UPDATED_HEIGHT_ASC',
  LaunchpartiesByCreatorIdMinUpdatedHeightDesc = 'LAUNCHPARTIES_BY_CREATOR_ID_MIN_UPDATED_HEIGHT_DESC',
  LaunchpartiesByCreatorIdStddevPopulationCollectionIdAsc = 'LAUNCHPARTIES_BY_CREATOR_ID_STDDEV_POPULATION_COLLECTION_ID_ASC',
  LaunchpartiesByCreatorIdStddevPopulationCollectionIdDesc = 'LAUNCHPARTIES_BY_CREATOR_ID_STDDEV_POPULATION_COLLECTION_ID_DESC',
  LaunchpartiesByCreatorIdStddevPopulationCreatedAtAsc = 'LAUNCHPARTIES_BY_CREATOR_ID_STDDEV_POPULATION_CREATED_AT_ASC',
  LaunchpartiesByCreatorIdStddevPopulationCreatedAtDesc = 'LAUNCHPARTIES_BY_CREATOR_ID_STDDEV_POPULATION_CREATED_AT_DESC',
  LaunchpartiesByCreatorIdStddevPopulationCreatedHeightAsc = 'LAUNCHPARTIES_BY_CREATOR_ID_STDDEV_POPULATION_CREATED_HEIGHT_ASC',
  LaunchpartiesByCreatorIdStddevPopulationCreatedHeightDesc = 'LAUNCHPARTIES_BY_CREATOR_ID_STDDEV_POPULATION_CREATED_HEIGHT_DESC',
  LaunchpartiesByCreatorIdStddevPopulationCreatorIdAsc = 'LAUNCHPARTIES_BY_CREATOR_ID_STDDEV_POPULATION_CREATOR_ID_ASC',
  LaunchpartiesByCreatorIdStddevPopulationCreatorIdDesc = 'LAUNCHPARTIES_BY_CREATOR_ID_STDDEV_POPULATION_CREATOR_ID_DESC',
  LaunchpartiesByCreatorIdStddevPopulationIdAsc = 'LAUNCHPARTIES_BY_CREATOR_ID_STDDEV_POPULATION_ID_ASC',
  LaunchpartiesByCreatorIdStddevPopulationIdDesc = 'LAUNCHPARTIES_BY_CREATOR_ID_STDDEV_POPULATION_ID_DESC',
  LaunchpartiesByCreatorIdStddevPopulationMaxEditionsAsc = 'LAUNCHPARTIES_BY_CREATOR_ID_STDDEV_POPULATION_MAX_EDITIONS_ASC',
  LaunchpartiesByCreatorIdStddevPopulationMaxEditionsDesc = 'LAUNCHPARTIES_BY_CREATOR_ID_STDDEV_POPULATION_MAX_EDITIONS_DESC',
  LaunchpartiesByCreatorIdStddevPopulationNameAsc = 'LAUNCHPARTIES_BY_CREATOR_ID_STDDEV_POPULATION_NAME_ASC',
  LaunchpartiesByCreatorIdStddevPopulationNameDesc = 'LAUNCHPARTIES_BY_CREATOR_ID_STDDEV_POPULATION_NAME_DESC',
  LaunchpartiesByCreatorIdStddevPopulationPaymentAddressAsc = 'LAUNCHPARTIES_BY_CREATOR_ID_STDDEV_POPULATION_PAYMENT_ADDRESS_ASC',
  LaunchpartiesByCreatorIdStddevPopulationPaymentAddressDesc = 'LAUNCHPARTIES_BY_CREATOR_ID_STDDEV_POPULATION_PAYMENT_ADDRESS_DESC',
  LaunchpartiesByCreatorIdStddevPopulationPriceAsc = 'LAUNCHPARTIES_BY_CREATOR_ID_STDDEV_POPULATION_PRICE_ASC',
  LaunchpartiesByCreatorIdStddevPopulationPriceDesc = 'LAUNCHPARTIES_BY_CREATOR_ID_STDDEV_POPULATION_PRICE_DESC',
  LaunchpartiesByCreatorIdStddevPopulationSellerFeeBpsAsc = 'LAUNCHPARTIES_BY_CREATOR_ID_STDDEV_POPULATION_SELLER_FEE_BPS_ASC',
  LaunchpartiesByCreatorIdStddevPopulationSellerFeeBpsDesc = 'LAUNCHPARTIES_BY_CREATOR_ID_STDDEV_POPULATION_SELLER_FEE_BPS_DESC',
  LaunchpartiesByCreatorIdStddevPopulationStartTimeAsc = 'LAUNCHPARTIES_BY_CREATOR_ID_STDDEV_POPULATION_START_TIME_ASC',
  LaunchpartiesByCreatorIdStddevPopulationStartTimeDesc = 'LAUNCHPARTIES_BY_CREATOR_ID_STDDEV_POPULATION_START_TIME_DESC',
  LaunchpartiesByCreatorIdStddevPopulationSymbolAsc = 'LAUNCHPARTIES_BY_CREATOR_ID_STDDEV_POPULATION_SYMBOL_ASC',
  LaunchpartiesByCreatorIdStddevPopulationSymbolDesc = 'LAUNCHPARTIES_BY_CREATOR_ID_STDDEV_POPULATION_SYMBOL_DESC',
  LaunchpartiesByCreatorIdStddevPopulationUpdatedAtAsc = 'LAUNCHPARTIES_BY_CREATOR_ID_STDDEV_POPULATION_UPDATED_AT_ASC',
  LaunchpartiesByCreatorIdStddevPopulationUpdatedAtDesc = 'LAUNCHPARTIES_BY_CREATOR_ID_STDDEV_POPULATION_UPDATED_AT_DESC',
  LaunchpartiesByCreatorIdStddevPopulationUpdatedHeightAsc = 'LAUNCHPARTIES_BY_CREATOR_ID_STDDEV_POPULATION_UPDATED_HEIGHT_ASC',
  LaunchpartiesByCreatorIdStddevPopulationUpdatedHeightDesc = 'LAUNCHPARTIES_BY_CREATOR_ID_STDDEV_POPULATION_UPDATED_HEIGHT_DESC',
  LaunchpartiesByCreatorIdStddevSampleCollectionIdAsc = 'LAUNCHPARTIES_BY_CREATOR_ID_STDDEV_SAMPLE_COLLECTION_ID_ASC',
  LaunchpartiesByCreatorIdStddevSampleCollectionIdDesc = 'LAUNCHPARTIES_BY_CREATOR_ID_STDDEV_SAMPLE_COLLECTION_ID_DESC',
  LaunchpartiesByCreatorIdStddevSampleCreatedAtAsc = 'LAUNCHPARTIES_BY_CREATOR_ID_STDDEV_SAMPLE_CREATED_AT_ASC',
  LaunchpartiesByCreatorIdStddevSampleCreatedAtDesc = 'LAUNCHPARTIES_BY_CREATOR_ID_STDDEV_SAMPLE_CREATED_AT_DESC',
  LaunchpartiesByCreatorIdStddevSampleCreatedHeightAsc = 'LAUNCHPARTIES_BY_CREATOR_ID_STDDEV_SAMPLE_CREATED_HEIGHT_ASC',
  LaunchpartiesByCreatorIdStddevSampleCreatedHeightDesc = 'LAUNCHPARTIES_BY_CREATOR_ID_STDDEV_SAMPLE_CREATED_HEIGHT_DESC',
  LaunchpartiesByCreatorIdStddevSampleCreatorIdAsc = 'LAUNCHPARTIES_BY_CREATOR_ID_STDDEV_SAMPLE_CREATOR_ID_ASC',
  LaunchpartiesByCreatorIdStddevSampleCreatorIdDesc = 'LAUNCHPARTIES_BY_CREATOR_ID_STDDEV_SAMPLE_CREATOR_ID_DESC',
  LaunchpartiesByCreatorIdStddevSampleIdAsc = 'LAUNCHPARTIES_BY_CREATOR_ID_STDDEV_SAMPLE_ID_ASC',
  LaunchpartiesByCreatorIdStddevSampleIdDesc = 'LAUNCHPARTIES_BY_CREATOR_ID_STDDEV_SAMPLE_ID_DESC',
  LaunchpartiesByCreatorIdStddevSampleMaxEditionsAsc = 'LAUNCHPARTIES_BY_CREATOR_ID_STDDEV_SAMPLE_MAX_EDITIONS_ASC',
  LaunchpartiesByCreatorIdStddevSampleMaxEditionsDesc = 'LAUNCHPARTIES_BY_CREATOR_ID_STDDEV_SAMPLE_MAX_EDITIONS_DESC',
  LaunchpartiesByCreatorIdStddevSampleNameAsc = 'LAUNCHPARTIES_BY_CREATOR_ID_STDDEV_SAMPLE_NAME_ASC',
  LaunchpartiesByCreatorIdStddevSampleNameDesc = 'LAUNCHPARTIES_BY_CREATOR_ID_STDDEV_SAMPLE_NAME_DESC',
  LaunchpartiesByCreatorIdStddevSamplePaymentAddressAsc = 'LAUNCHPARTIES_BY_CREATOR_ID_STDDEV_SAMPLE_PAYMENT_ADDRESS_ASC',
  LaunchpartiesByCreatorIdStddevSamplePaymentAddressDesc = 'LAUNCHPARTIES_BY_CREATOR_ID_STDDEV_SAMPLE_PAYMENT_ADDRESS_DESC',
  LaunchpartiesByCreatorIdStddevSamplePriceAsc = 'LAUNCHPARTIES_BY_CREATOR_ID_STDDEV_SAMPLE_PRICE_ASC',
  LaunchpartiesByCreatorIdStddevSamplePriceDesc = 'LAUNCHPARTIES_BY_CREATOR_ID_STDDEV_SAMPLE_PRICE_DESC',
  LaunchpartiesByCreatorIdStddevSampleSellerFeeBpsAsc = 'LAUNCHPARTIES_BY_CREATOR_ID_STDDEV_SAMPLE_SELLER_FEE_BPS_ASC',
  LaunchpartiesByCreatorIdStddevSampleSellerFeeBpsDesc = 'LAUNCHPARTIES_BY_CREATOR_ID_STDDEV_SAMPLE_SELLER_FEE_BPS_DESC',
  LaunchpartiesByCreatorIdStddevSampleStartTimeAsc = 'LAUNCHPARTIES_BY_CREATOR_ID_STDDEV_SAMPLE_START_TIME_ASC',
  LaunchpartiesByCreatorIdStddevSampleStartTimeDesc = 'LAUNCHPARTIES_BY_CREATOR_ID_STDDEV_SAMPLE_START_TIME_DESC',
  LaunchpartiesByCreatorIdStddevSampleSymbolAsc = 'LAUNCHPARTIES_BY_CREATOR_ID_STDDEV_SAMPLE_SYMBOL_ASC',
  LaunchpartiesByCreatorIdStddevSampleSymbolDesc = 'LAUNCHPARTIES_BY_CREATOR_ID_STDDEV_SAMPLE_SYMBOL_DESC',
  LaunchpartiesByCreatorIdStddevSampleUpdatedAtAsc = 'LAUNCHPARTIES_BY_CREATOR_ID_STDDEV_SAMPLE_UPDATED_AT_ASC',
  LaunchpartiesByCreatorIdStddevSampleUpdatedAtDesc = 'LAUNCHPARTIES_BY_CREATOR_ID_STDDEV_SAMPLE_UPDATED_AT_DESC',
  LaunchpartiesByCreatorIdStddevSampleUpdatedHeightAsc = 'LAUNCHPARTIES_BY_CREATOR_ID_STDDEV_SAMPLE_UPDATED_HEIGHT_ASC',
  LaunchpartiesByCreatorIdStddevSampleUpdatedHeightDesc = 'LAUNCHPARTIES_BY_CREATOR_ID_STDDEV_SAMPLE_UPDATED_HEIGHT_DESC',
  LaunchpartiesByCreatorIdSumCollectionIdAsc = 'LAUNCHPARTIES_BY_CREATOR_ID_SUM_COLLECTION_ID_ASC',
  LaunchpartiesByCreatorIdSumCollectionIdDesc = 'LAUNCHPARTIES_BY_CREATOR_ID_SUM_COLLECTION_ID_DESC',
  LaunchpartiesByCreatorIdSumCreatedAtAsc = 'LAUNCHPARTIES_BY_CREATOR_ID_SUM_CREATED_AT_ASC',
  LaunchpartiesByCreatorIdSumCreatedAtDesc = 'LAUNCHPARTIES_BY_CREATOR_ID_SUM_CREATED_AT_DESC',
  LaunchpartiesByCreatorIdSumCreatedHeightAsc = 'LAUNCHPARTIES_BY_CREATOR_ID_SUM_CREATED_HEIGHT_ASC',
  LaunchpartiesByCreatorIdSumCreatedHeightDesc = 'LAUNCHPARTIES_BY_CREATOR_ID_SUM_CREATED_HEIGHT_DESC',
  LaunchpartiesByCreatorIdSumCreatorIdAsc = 'LAUNCHPARTIES_BY_CREATOR_ID_SUM_CREATOR_ID_ASC',
  LaunchpartiesByCreatorIdSumCreatorIdDesc = 'LAUNCHPARTIES_BY_CREATOR_ID_SUM_CREATOR_ID_DESC',
  LaunchpartiesByCreatorIdSumIdAsc = 'LAUNCHPARTIES_BY_CREATOR_ID_SUM_ID_ASC',
  LaunchpartiesByCreatorIdSumIdDesc = 'LAUNCHPARTIES_BY_CREATOR_ID_SUM_ID_DESC',
  LaunchpartiesByCreatorIdSumMaxEditionsAsc = 'LAUNCHPARTIES_BY_CREATOR_ID_SUM_MAX_EDITIONS_ASC',
  LaunchpartiesByCreatorIdSumMaxEditionsDesc = 'LAUNCHPARTIES_BY_CREATOR_ID_SUM_MAX_EDITIONS_DESC',
  LaunchpartiesByCreatorIdSumNameAsc = 'LAUNCHPARTIES_BY_CREATOR_ID_SUM_NAME_ASC',
  LaunchpartiesByCreatorIdSumNameDesc = 'LAUNCHPARTIES_BY_CREATOR_ID_SUM_NAME_DESC',
  LaunchpartiesByCreatorIdSumPaymentAddressAsc = 'LAUNCHPARTIES_BY_CREATOR_ID_SUM_PAYMENT_ADDRESS_ASC',
  LaunchpartiesByCreatorIdSumPaymentAddressDesc = 'LAUNCHPARTIES_BY_CREATOR_ID_SUM_PAYMENT_ADDRESS_DESC',
  LaunchpartiesByCreatorIdSumPriceAsc = 'LAUNCHPARTIES_BY_CREATOR_ID_SUM_PRICE_ASC',
  LaunchpartiesByCreatorIdSumPriceDesc = 'LAUNCHPARTIES_BY_CREATOR_ID_SUM_PRICE_DESC',
  LaunchpartiesByCreatorIdSumSellerFeeBpsAsc = 'LAUNCHPARTIES_BY_CREATOR_ID_SUM_SELLER_FEE_BPS_ASC',
  LaunchpartiesByCreatorIdSumSellerFeeBpsDesc = 'LAUNCHPARTIES_BY_CREATOR_ID_SUM_SELLER_FEE_BPS_DESC',
  LaunchpartiesByCreatorIdSumStartTimeAsc = 'LAUNCHPARTIES_BY_CREATOR_ID_SUM_START_TIME_ASC',
  LaunchpartiesByCreatorIdSumStartTimeDesc = 'LAUNCHPARTIES_BY_CREATOR_ID_SUM_START_TIME_DESC',
  LaunchpartiesByCreatorIdSumSymbolAsc = 'LAUNCHPARTIES_BY_CREATOR_ID_SUM_SYMBOL_ASC',
  LaunchpartiesByCreatorIdSumSymbolDesc = 'LAUNCHPARTIES_BY_CREATOR_ID_SUM_SYMBOL_DESC',
  LaunchpartiesByCreatorIdSumUpdatedAtAsc = 'LAUNCHPARTIES_BY_CREATOR_ID_SUM_UPDATED_AT_ASC',
  LaunchpartiesByCreatorIdSumUpdatedAtDesc = 'LAUNCHPARTIES_BY_CREATOR_ID_SUM_UPDATED_AT_DESC',
  LaunchpartiesByCreatorIdSumUpdatedHeightAsc = 'LAUNCHPARTIES_BY_CREATOR_ID_SUM_UPDATED_HEIGHT_ASC',
  LaunchpartiesByCreatorIdSumUpdatedHeightDesc = 'LAUNCHPARTIES_BY_CREATOR_ID_SUM_UPDATED_HEIGHT_DESC',
  LaunchpartiesByCreatorIdVariancePopulationCollectionIdAsc = 'LAUNCHPARTIES_BY_CREATOR_ID_VARIANCE_POPULATION_COLLECTION_ID_ASC',
  LaunchpartiesByCreatorIdVariancePopulationCollectionIdDesc = 'LAUNCHPARTIES_BY_CREATOR_ID_VARIANCE_POPULATION_COLLECTION_ID_DESC',
  LaunchpartiesByCreatorIdVariancePopulationCreatedAtAsc = 'LAUNCHPARTIES_BY_CREATOR_ID_VARIANCE_POPULATION_CREATED_AT_ASC',
  LaunchpartiesByCreatorIdVariancePopulationCreatedAtDesc = 'LAUNCHPARTIES_BY_CREATOR_ID_VARIANCE_POPULATION_CREATED_AT_DESC',
  LaunchpartiesByCreatorIdVariancePopulationCreatedHeightAsc = 'LAUNCHPARTIES_BY_CREATOR_ID_VARIANCE_POPULATION_CREATED_HEIGHT_ASC',
  LaunchpartiesByCreatorIdVariancePopulationCreatedHeightDesc = 'LAUNCHPARTIES_BY_CREATOR_ID_VARIANCE_POPULATION_CREATED_HEIGHT_DESC',
  LaunchpartiesByCreatorIdVariancePopulationCreatorIdAsc = 'LAUNCHPARTIES_BY_CREATOR_ID_VARIANCE_POPULATION_CREATOR_ID_ASC',
  LaunchpartiesByCreatorIdVariancePopulationCreatorIdDesc = 'LAUNCHPARTIES_BY_CREATOR_ID_VARIANCE_POPULATION_CREATOR_ID_DESC',
  LaunchpartiesByCreatorIdVariancePopulationIdAsc = 'LAUNCHPARTIES_BY_CREATOR_ID_VARIANCE_POPULATION_ID_ASC',
  LaunchpartiesByCreatorIdVariancePopulationIdDesc = 'LAUNCHPARTIES_BY_CREATOR_ID_VARIANCE_POPULATION_ID_DESC',
  LaunchpartiesByCreatorIdVariancePopulationMaxEditionsAsc = 'LAUNCHPARTIES_BY_CREATOR_ID_VARIANCE_POPULATION_MAX_EDITIONS_ASC',
  LaunchpartiesByCreatorIdVariancePopulationMaxEditionsDesc = 'LAUNCHPARTIES_BY_CREATOR_ID_VARIANCE_POPULATION_MAX_EDITIONS_DESC',
  LaunchpartiesByCreatorIdVariancePopulationNameAsc = 'LAUNCHPARTIES_BY_CREATOR_ID_VARIANCE_POPULATION_NAME_ASC',
  LaunchpartiesByCreatorIdVariancePopulationNameDesc = 'LAUNCHPARTIES_BY_CREATOR_ID_VARIANCE_POPULATION_NAME_DESC',
  LaunchpartiesByCreatorIdVariancePopulationPaymentAddressAsc = 'LAUNCHPARTIES_BY_CREATOR_ID_VARIANCE_POPULATION_PAYMENT_ADDRESS_ASC',
  LaunchpartiesByCreatorIdVariancePopulationPaymentAddressDesc = 'LAUNCHPARTIES_BY_CREATOR_ID_VARIANCE_POPULATION_PAYMENT_ADDRESS_DESC',
  LaunchpartiesByCreatorIdVariancePopulationPriceAsc = 'LAUNCHPARTIES_BY_CREATOR_ID_VARIANCE_POPULATION_PRICE_ASC',
  LaunchpartiesByCreatorIdVariancePopulationPriceDesc = 'LAUNCHPARTIES_BY_CREATOR_ID_VARIANCE_POPULATION_PRICE_DESC',
  LaunchpartiesByCreatorIdVariancePopulationSellerFeeBpsAsc = 'LAUNCHPARTIES_BY_CREATOR_ID_VARIANCE_POPULATION_SELLER_FEE_BPS_ASC',
  LaunchpartiesByCreatorIdVariancePopulationSellerFeeBpsDesc = 'LAUNCHPARTIES_BY_CREATOR_ID_VARIANCE_POPULATION_SELLER_FEE_BPS_DESC',
  LaunchpartiesByCreatorIdVariancePopulationStartTimeAsc = 'LAUNCHPARTIES_BY_CREATOR_ID_VARIANCE_POPULATION_START_TIME_ASC',
  LaunchpartiesByCreatorIdVariancePopulationStartTimeDesc = 'LAUNCHPARTIES_BY_CREATOR_ID_VARIANCE_POPULATION_START_TIME_DESC',
  LaunchpartiesByCreatorIdVariancePopulationSymbolAsc = 'LAUNCHPARTIES_BY_CREATOR_ID_VARIANCE_POPULATION_SYMBOL_ASC',
  LaunchpartiesByCreatorIdVariancePopulationSymbolDesc = 'LAUNCHPARTIES_BY_CREATOR_ID_VARIANCE_POPULATION_SYMBOL_DESC',
  LaunchpartiesByCreatorIdVariancePopulationUpdatedAtAsc = 'LAUNCHPARTIES_BY_CREATOR_ID_VARIANCE_POPULATION_UPDATED_AT_ASC',
  LaunchpartiesByCreatorIdVariancePopulationUpdatedAtDesc = 'LAUNCHPARTIES_BY_CREATOR_ID_VARIANCE_POPULATION_UPDATED_AT_DESC',
  LaunchpartiesByCreatorIdVariancePopulationUpdatedHeightAsc = 'LAUNCHPARTIES_BY_CREATOR_ID_VARIANCE_POPULATION_UPDATED_HEIGHT_ASC',
  LaunchpartiesByCreatorIdVariancePopulationUpdatedHeightDesc = 'LAUNCHPARTIES_BY_CREATOR_ID_VARIANCE_POPULATION_UPDATED_HEIGHT_DESC',
  LaunchpartiesByCreatorIdVarianceSampleCollectionIdAsc = 'LAUNCHPARTIES_BY_CREATOR_ID_VARIANCE_SAMPLE_COLLECTION_ID_ASC',
  LaunchpartiesByCreatorIdVarianceSampleCollectionIdDesc = 'LAUNCHPARTIES_BY_CREATOR_ID_VARIANCE_SAMPLE_COLLECTION_ID_DESC',
  LaunchpartiesByCreatorIdVarianceSampleCreatedAtAsc = 'LAUNCHPARTIES_BY_CREATOR_ID_VARIANCE_SAMPLE_CREATED_AT_ASC',
  LaunchpartiesByCreatorIdVarianceSampleCreatedAtDesc = 'LAUNCHPARTIES_BY_CREATOR_ID_VARIANCE_SAMPLE_CREATED_AT_DESC',
  LaunchpartiesByCreatorIdVarianceSampleCreatedHeightAsc = 'LAUNCHPARTIES_BY_CREATOR_ID_VARIANCE_SAMPLE_CREATED_HEIGHT_ASC',
  LaunchpartiesByCreatorIdVarianceSampleCreatedHeightDesc = 'LAUNCHPARTIES_BY_CREATOR_ID_VARIANCE_SAMPLE_CREATED_HEIGHT_DESC',
  LaunchpartiesByCreatorIdVarianceSampleCreatorIdAsc = 'LAUNCHPARTIES_BY_CREATOR_ID_VARIANCE_SAMPLE_CREATOR_ID_ASC',
  LaunchpartiesByCreatorIdVarianceSampleCreatorIdDesc = 'LAUNCHPARTIES_BY_CREATOR_ID_VARIANCE_SAMPLE_CREATOR_ID_DESC',
  LaunchpartiesByCreatorIdVarianceSampleIdAsc = 'LAUNCHPARTIES_BY_CREATOR_ID_VARIANCE_SAMPLE_ID_ASC',
  LaunchpartiesByCreatorIdVarianceSampleIdDesc = 'LAUNCHPARTIES_BY_CREATOR_ID_VARIANCE_SAMPLE_ID_DESC',
  LaunchpartiesByCreatorIdVarianceSampleMaxEditionsAsc = 'LAUNCHPARTIES_BY_CREATOR_ID_VARIANCE_SAMPLE_MAX_EDITIONS_ASC',
  LaunchpartiesByCreatorIdVarianceSampleMaxEditionsDesc = 'LAUNCHPARTIES_BY_CREATOR_ID_VARIANCE_SAMPLE_MAX_EDITIONS_DESC',
  LaunchpartiesByCreatorIdVarianceSampleNameAsc = 'LAUNCHPARTIES_BY_CREATOR_ID_VARIANCE_SAMPLE_NAME_ASC',
  LaunchpartiesByCreatorIdVarianceSampleNameDesc = 'LAUNCHPARTIES_BY_CREATOR_ID_VARIANCE_SAMPLE_NAME_DESC',
  LaunchpartiesByCreatorIdVarianceSamplePaymentAddressAsc = 'LAUNCHPARTIES_BY_CREATOR_ID_VARIANCE_SAMPLE_PAYMENT_ADDRESS_ASC',
  LaunchpartiesByCreatorIdVarianceSamplePaymentAddressDesc = 'LAUNCHPARTIES_BY_CREATOR_ID_VARIANCE_SAMPLE_PAYMENT_ADDRESS_DESC',
  LaunchpartiesByCreatorIdVarianceSamplePriceAsc = 'LAUNCHPARTIES_BY_CREATOR_ID_VARIANCE_SAMPLE_PRICE_ASC',
  LaunchpartiesByCreatorIdVarianceSamplePriceDesc = 'LAUNCHPARTIES_BY_CREATOR_ID_VARIANCE_SAMPLE_PRICE_DESC',
  LaunchpartiesByCreatorIdVarianceSampleSellerFeeBpsAsc = 'LAUNCHPARTIES_BY_CREATOR_ID_VARIANCE_SAMPLE_SELLER_FEE_BPS_ASC',
  LaunchpartiesByCreatorIdVarianceSampleSellerFeeBpsDesc = 'LAUNCHPARTIES_BY_CREATOR_ID_VARIANCE_SAMPLE_SELLER_FEE_BPS_DESC',
  LaunchpartiesByCreatorIdVarianceSampleStartTimeAsc = 'LAUNCHPARTIES_BY_CREATOR_ID_VARIANCE_SAMPLE_START_TIME_ASC',
  LaunchpartiesByCreatorIdVarianceSampleStartTimeDesc = 'LAUNCHPARTIES_BY_CREATOR_ID_VARIANCE_SAMPLE_START_TIME_DESC',
  LaunchpartiesByCreatorIdVarianceSampleSymbolAsc = 'LAUNCHPARTIES_BY_CREATOR_ID_VARIANCE_SAMPLE_SYMBOL_ASC',
  LaunchpartiesByCreatorIdVarianceSampleSymbolDesc = 'LAUNCHPARTIES_BY_CREATOR_ID_VARIANCE_SAMPLE_SYMBOL_DESC',
  LaunchpartiesByCreatorIdVarianceSampleUpdatedAtAsc = 'LAUNCHPARTIES_BY_CREATOR_ID_VARIANCE_SAMPLE_UPDATED_AT_ASC',
  LaunchpartiesByCreatorIdVarianceSampleUpdatedAtDesc = 'LAUNCHPARTIES_BY_CREATOR_ID_VARIANCE_SAMPLE_UPDATED_AT_DESC',
  LaunchpartiesByCreatorIdVarianceSampleUpdatedHeightAsc = 'LAUNCHPARTIES_BY_CREATOR_ID_VARIANCE_SAMPLE_UPDATED_HEIGHT_ASC',
  LaunchpartiesByCreatorIdVarianceSampleUpdatedHeightDesc = 'LAUNCHPARTIES_BY_CREATOR_ID_VARIANCE_SAMPLE_UPDATED_HEIGHT_DESC',
  Natural = 'NATURAL',
  NftsMintedAverageCollectionIdAsc = 'NFTS_MINTED_AVERAGE_COLLECTION_ID_ASC',
  NftsMintedAverageCollectionIdDesc = 'NFTS_MINTED_AVERAGE_COLLECTION_ID_DESC',
  NftsMintedAverageCreatedAtAsc = 'NFTS_MINTED_AVERAGE_CREATED_AT_ASC',
  NftsMintedAverageCreatedAtDesc = 'NFTS_MINTED_AVERAGE_CREATED_AT_DESC',
  NftsMintedAverageCreatedHeightAsc = 'NFTS_MINTED_AVERAGE_CREATED_HEIGHT_ASC',
  NftsMintedAverageCreatedHeightDesc = 'NFTS_MINTED_AVERAGE_CREATED_HEIGHT_DESC',
  NftsMintedAverageIdAsc = 'NFTS_MINTED_AVERAGE_ID_ASC',
  NftsMintedAverageIdDesc = 'NFTS_MINTED_AVERAGE_ID_DESC',
  NftsMintedAverageMetadataIdAsc = 'NFTS_MINTED_AVERAGE_METADATA_ID_ASC',
  NftsMintedAverageMetadataIdDesc = 'NFTS_MINTED_AVERAGE_METADATA_ID_DESC',
  NftsMintedAverageMinterIdAsc = 'NFTS_MINTED_AVERAGE_MINTER_ID_ASC',
  NftsMintedAverageMinterIdDesc = 'NFTS_MINTED_AVERAGE_MINTER_ID_DESC',
  NftsMintedAverageOwnerIdAsc = 'NFTS_MINTED_AVERAGE_OWNER_ID_ASC',
  NftsMintedAverageOwnerIdDesc = 'NFTS_MINTED_AVERAGE_OWNER_ID_DESC',
  NftsMintedAveragePaymentAddressAsc = 'NFTS_MINTED_AVERAGE_PAYMENT_ADDRESS_ASC',
  NftsMintedAveragePaymentAddressDesc = 'NFTS_MINTED_AVERAGE_PAYMENT_ADDRESS_DESC',
  NftsMintedAverageSellerFeeAsc = 'NFTS_MINTED_AVERAGE_SELLER_FEE_ASC',
  NftsMintedAverageSellerFeeDesc = 'NFTS_MINTED_AVERAGE_SELLER_FEE_DESC',
  NftsMintedAverageTokenIdAsc = 'NFTS_MINTED_AVERAGE_TOKEN_ID_ASC',
  NftsMintedAverageTokenIdDesc = 'NFTS_MINTED_AVERAGE_TOKEN_ID_DESC',
  NftsMintedAverageUpdatedAtAsc = 'NFTS_MINTED_AVERAGE_UPDATED_AT_ASC',
  NftsMintedAverageUpdatedAtDesc = 'NFTS_MINTED_AVERAGE_UPDATED_AT_DESC',
  NftsMintedAverageUpdatedHeightAsc = 'NFTS_MINTED_AVERAGE_UPDATED_HEIGHT_ASC',
  NftsMintedAverageUpdatedHeightDesc = 'NFTS_MINTED_AVERAGE_UPDATED_HEIGHT_DESC',
  NftsMintedAverageUriAsc = 'NFTS_MINTED_AVERAGE_URI_ASC',
  NftsMintedAverageUriDesc = 'NFTS_MINTED_AVERAGE_URI_DESC',
  NftsMintedCountAsc = 'NFTS_MINTED_COUNT_ASC',
  NftsMintedCountDesc = 'NFTS_MINTED_COUNT_DESC',
  NftsMintedDistinctCountCollectionIdAsc = 'NFTS_MINTED_DISTINCT_COUNT_COLLECTION_ID_ASC',
  NftsMintedDistinctCountCollectionIdDesc = 'NFTS_MINTED_DISTINCT_COUNT_COLLECTION_ID_DESC',
  NftsMintedDistinctCountCreatedAtAsc = 'NFTS_MINTED_DISTINCT_COUNT_CREATED_AT_ASC',
  NftsMintedDistinctCountCreatedAtDesc = 'NFTS_MINTED_DISTINCT_COUNT_CREATED_AT_DESC',
  NftsMintedDistinctCountCreatedHeightAsc = 'NFTS_MINTED_DISTINCT_COUNT_CREATED_HEIGHT_ASC',
  NftsMintedDistinctCountCreatedHeightDesc = 'NFTS_MINTED_DISTINCT_COUNT_CREATED_HEIGHT_DESC',
  NftsMintedDistinctCountIdAsc = 'NFTS_MINTED_DISTINCT_COUNT_ID_ASC',
  NftsMintedDistinctCountIdDesc = 'NFTS_MINTED_DISTINCT_COUNT_ID_DESC',
  NftsMintedDistinctCountMetadataIdAsc = 'NFTS_MINTED_DISTINCT_COUNT_METADATA_ID_ASC',
  NftsMintedDistinctCountMetadataIdDesc = 'NFTS_MINTED_DISTINCT_COUNT_METADATA_ID_DESC',
  NftsMintedDistinctCountMinterIdAsc = 'NFTS_MINTED_DISTINCT_COUNT_MINTER_ID_ASC',
  NftsMintedDistinctCountMinterIdDesc = 'NFTS_MINTED_DISTINCT_COUNT_MINTER_ID_DESC',
  NftsMintedDistinctCountOwnerIdAsc = 'NFTS_MINTED_DISTINCT_COUNT_OWNER_ID_ASC',
  NftsMintedDistinctCountOwnerIdDesc = 'NFTS_MINTED_DISTINCT_COUNT_OWNER_ID_DESC',
  NftsMintedDistinctCountPaymentAddressAsc = 'NFTS_MINTED_DISTINCT_COUNT_PAYMENT_ADDRESS_ASC',
  NftsMintedDistinctCountPaymentAddressDesc = 'NFTS_MINTED_DISTINCT_COUNT_PAYMENT_ADDRESS_DESC',
  NftsMintedDistinctCountSellerFeeAsc = 'NFTS_MINTED_DISTINCT_COUNT_SELLER_FEE_ASC',
  NftsMintedDistinctCountSellerFeeDesc = 'NFTS_MINTED_DISTINCT_COUNT_SELLER_FEE_DESC',
  NftsMintedDistinctCountTokenIdAsc = 'NFTS_MINTED_DISTINCT_COUNT_TOKEN_ID_ASC',
  NftsMintedDistinctCountTokenIdDesc = 'NFTS_MINTED_DISTINCT_COUNT_TOKEN_ID_DESC',
  NftsMintedDistinctCountUpdatedAtAsc = 'NFTS_MINTED_DISTINCT_COUNT_UPDATED_AT_ASC',
  NftsMintedDistinctCountUpdatedAtDesc = 'NFTS_MINTED_DISTINCT_COUNT_UPDATED_AT_DESC',
  NftsMintedDistinctCountUpdatedHeightAsc = 'NFTS_MINTED_DISTINCT_COUNT_UPDATED_HEIGHT_ASC',
  NftsMintedDistinctCountUpdatedHeightDesc = 'NFTS_MINTED_DISTINCT_COUNT_UPDATED_HEIGHT_DESC',
  NftsMintedDistinctCountUriAsc = 'NFTS_MINTED_DISTINCT_COUNT_URI_ASC',
  NftsMintedDistinctCountUriDesc = 'NFTS_MINTED_DISTINCT_COUNT_URI_DESC',
  NftsMintedMaxCollectionIdAsc = 'NFTS_MINTED_MAX_COLLECTION_ID_ASC',
  NftsMintedMaxCollectionIdDesc = 'NFTS_MINTED_MAX_COLLECTION_ID_DESC',
  NftsMintedMaxCreatedAtAsc = 'NFTS_MINTED_MAX_CREATED_AT_ASC',
  NftsMintedMaxCreatedAtDesc = 'NFTS_MINTED_MAX_CREATED_AT_DESC',
  NftsMintedMaxCreatedHeightAsc = 'NFTS_MINTED_MAX_CREATED_HEIGHT_ASC',
  NftsMintedMaxCreatedHeightDesc = 'NFTS_MINTED_MAX_CREATED_HEIGHT_DESC',
  NftsMintedMaxIdAsc = 'NFTS_MINTED_MAX_ID_ASC',
  NftsMintedMaxIdDesc = 'NFTS_MINTED_MAX_ID_DESC',
  NftsMintedMaxMetadataIdAsc = 'NFTS_MINTED_MAX_METADATA_ID_ASC',
  NftsMintedMaxMetadataIdDesc = 'NFTS_MINTED_MAX_METADATA_ID_DESC',
  NftsMintedMaxMinterIdAsc = 'NFTS_MINTED_MAX_MINTER_ID_ASC',
  NftsMintedMaxMinterIdDesc = 'NFTS_MINTED_MAX_MINTER_ID_DESC',
  NftsMintedMaxOwnerIdAsc = 'NFTS_MINTED_MAX_OWNER_ID_ASC',
  NftsMintedMaxOwnerIdDesc = 'NFTS_MINTED_MAX_OWNER_ID_DESC',
  NftsMintedMaxPaymentAddressAsc = 'NFTS_MINTED_MAX_PAYMENT_ADDRESS_ASC',
  NftsMintedMaxPaymentAddressDesc = 'NFTS_MINTED_MAX_PAYMENT_ADDRESS_DESC',
  NftsMintedMaxSellerFeeAsc = 'NFTS_MINTED_MAX_SELLER_FEE_ASC',
  NftsMintedMaxSellerFeeDesc = 'NFTS_MINTED_MAX_SELLER_FEE_DESC',
  NftsMintedMaxTokenIdAsc = 'NFTS_MINTED_MAX_TOKEN_ID_ASC',
  NftsMintedMaxTokenIdDesc = 'NFTS_MINTED_MAX_TOKEN_ID_DESC',
  NftsMintedMaxUpdatedAtAsc = 'NFTS_MINTED_MAX_UPDATED_AT_ASC',
  NftsMintedMaxUpdatedAtDesc = 'NFTS_MINTED_MAX_UPDATED_AT_DESC',
  NftsMintedMaxUpdatedHeightAsc = 'NFTS_MINTED_MAX_UPDATED_HEIGHT_ASC',
  NftsMintedMaxUpdatedHeightDesc = 'NFTS_MINTED_MAX_UPDATED_HEIGHT_DESC',
  NftsMintedMaxUriAsc = 'NFTS_MINTED_MAX_URI_ASC',
  NftsMintedMaxUriDesc = 'NFTS_MINTED_MAX_URI_DESC',
  NftsMintedMinCollectionIdAsc = 'NFTS_MINTED_MIN_COLLECTION_ID_ASC',
  NftsMintedMinCollectionIdDesc = 'NFTS_MINTED_MIN_COLLECTION_ID_DESC',
  NftsMintedMinCreatedAtAsc = 'NFTS_MINTED_MIN_CREATED_AT_ASC',
  NftsMintedMinCreatedAtDesc = 'NFTS_MINTED_MIN_CREATED_AT_DESC',
  NftsMintedMinCreatedHeightAsc = 'NFTS_MINTED_MIN_CREATED_HEIGHT_ASC',
  NftsMintedMinCreatedHeightDesc = 'NFTS_MINTED_MIN_CREATED_HEIGHT_DESC',
  NftsMintedMinIdAsc = 'NFTS_MINTED_MIN_ID_ASC',
  NftsMintedMinIdDesc = 'NFTS_MINTED_MIN_ID_DESC',
  NftsMintedMinMetadataIdAsc = 'NFTS_MINTED_MIN_METADATA_ID_ASC',
  NftsMintedMinMetadataIdDesc = 'NFTS_MINTED_MIN_METADATA_ID_DESC',
  NftsMintedMinMinterIdAsc = 'NFTS_MINTED_MIN_MINTER_ID_ASC',
  NftsMintedMinMinterIdDesc = 'NFTS_MINTED_MIN_MINTER_ID_DESC',
  NftsMintedMinOwnerIdAsc = 'NFTS_MINTED_MIN_OWNER_ID_ASC',
  NftsMintedMinOwnerIdDesc = 'NFTS_MINTED_MIN_OWNER_ID_DESC',
  NftsMintedMinPaymentAddressAsc = 'NFTS_MINTED_MIN_PAYMENT_ADDRESS_ASC',
  NftsMintedMinPaymentAddressDesc = 'NFTS_MINTED_MIN_PAYMENT_ADDRESS_DESC',
  NftsMintedMinSellerFeeAsc = 'NFTS_MINTED_MIN_SELLER_FEE_ASC',
  NftsMintedMinSellerFeeDesc = 'NFTS_MINTED_MIN_SELLER_FEE_DESC',
  NftsMintedMinTokenIdAsc = 'NFTS_MINTED_MIN_TOKEN_ID_ASC',
  NftsMintedMinTokenIdDesc = 'NFTS_MINTED_MIN_TOKEN_ID_DESC',
  NftsMintedMinUpdatedAtAsc = 'NFTS_MINTED_MIN_UPDATED_AT_ASC',
  NftsMintedMinUpdatedAtDesc = 'NFTS_MINTED_MIN_UPDATED_AT_DESC',
  NftsMintedMinUpdatedHeightAsc = 'NFTS_MINTED_MIN_UPDATED_HEIGHT_ASC',
  NftsMintedMinUpdatedHeightDesc = 'NFTS_MINTED_MIN_UPDATED_HEIGHT_DESC',
  NftsMintedMinUriAsc = 'NFTS_MINTED_MIN_URI_ASC',
  NftsMintedMinUriDesc = 'NFTS_MINTED_MIN_URI_DESC',
  NftsMintedStddevPopulationCollectionIdAsc = 'NFTS_MINTED_STDDEV_POPULATION_COLLECTION_ID_ASC',
  NftsMintedStddevPopulationCollectionIdDesc = 'NFTS_MINTED_STDDEV_POPULATION_COLLECTION_ID_DESC',
  NftsMintedStddevPopulationCreatedAtAsc = 'NFTS_MINTED_STDDEV_POPULATION_CREATED_AT_ASC',
  NftsMintedStddevPopulationCreatedAtDesc = 'NFTS_MINTED_STDDEV_POPULATION_CREATED_AT_DESC',
  NftsMintedStddevPopulationCreatedHeightAsc = 'NFTS_MINTED_STDDEV_POPULATION_CREATED_HEIGHT_ASC',
  NftsMintedStddevPopulationCreatedHeightDesc = 'NFTS_MINTED_STDDEV_POPULATION_CREATED_HEIGHT_DESC',
  NftsMintedStddevPopulationIdAsc = 'NFTS_MINTED_STDDEV_POPULATION_ID_ASC',
  NftsMintedStddevPopulationIdDesc = 'NFTS_MINTED_STDDEV_POPULATION_ID_DESC',
  NftsMintedStddevPopulationMetadataIdAsc = 'NFTS_MINTED_STDDEV_POPULATION_METADATA_ID_ASC',
  NftsMintedStddevPopulationMetadataIdDesc = 'NFTS_MINTED_STDDEV_POPULATION_METADATA_ID_DESC',
  NftsMintedStddevPopulationMinterIdAsc = 'NFTS_MINTED_STDDEV_POPULATION_MINTER_ID_ASC',
  NftsMintedStddevPopulationMinterIdDesc = 'NFTS_MINTED_STDDEV_POPULATION_MINTER_ID_DESC',
  NftsMintedStddevPopulationOwnerIdAsc = 'NFTS_MINTED_STDDEV_POPULATION_OWNER_ID_ASC',
  NftsMintedStddevPopulationOwnerIdDesc = 'NFTS_MINTED_STDDEV_POPULATION_OWNER_ID_DESC',
  NftsMintedStddevPopulationPaymentAddressAsc = 'NFTS_MINTED_STDDEV_POPULATION_PAYMENT_ADDRESS_ASC',
  NftsMintedStddevPopulationPaymentAddressDesc = 'NFTS_MINTED_STDDEV_POPULATION_PAYMENT_ADDRESS_DESC',
  NftsMintedStddevPopulationSellerFeeAsc = 'NFTS_MINTED_STDDEV_POPULATION_SELLER_FEE_ASC',
  NftsMintedStddevPopulationSellerFeeDesc = 'NFTS_MINTED_STDDEV_POPULATION_SELLER_FEE_DESC',
  NftsMintedStddevPopulationTokenIdAsc = 'NFTS_MINTED_STDDEV_POPULATION_TOKEN_ID_ASC',
  NftsMintedStddevPopulationTokenIdDesc = 'NFTS_MINTED_STDDEV_POPULATION_TOKEN_ID_DESC',
  NftsMintedStddevPopulationUpdatedAtAsc = 'NFTS_MINTED_STDDEV_POPULATION_UPDATED_AT_ASC',
  NftsMintedStddevPopulationUpdatedAtDesc = 'NFTS_MINTED_STDDEV_POPULATION_UPDATED_AT_DESC',
  NftsMintedStddevPopulationUpdatedHeightAsc = 'NFTS_MINTED_STDDEV_POPULATION_UPDATED_HEIGHT_ASC',
  NftsMintedStddevPopulationUpdatedHeightDesc = 'NFTS_MINTED_STDDEV_POPULATION_UPDATED_HEIGHT_DESC',
  NftsMintedStddevPopulationUriAsc = 'NFTS_MINTED_STDDEV_POPULATION_URI_ASC',
  NftsMintedStddevPopulationUriDesc = 'NFTS_MINTED_STDDEV_POPULATION_URI_DESC',
  NftsMintedStddevSampleCollectionIdAsc = 'NFTS_MINTED_STDDEV_SAMPLE_COLLECTION_ID_ASC',
  NftsMintedStddevSampleCollectionIdDesc = 'NFTS_MINTED_STDDEV_SAMPLE_COLLECTION_ID_DESC',
  NftsMintedStddevSampleCreatedAtAsc = 'NFTS_MINTED_STDDEV_SAMPLE_CREATED_AT_ASC',
  NftsMintedStddevSampleCreatedAtDesc = 'NFTS_MINTED_STDDEV_SAMPLE_CREATED_AT_DESC',
  NftsMintedStddevSampleCreatedHeightAsc = 'NFTS_MINTED_STDDEV_SAMPLE_CREATED_HEIGHT_ASC',
  NftsMintedStddevSampleCreatedHeightDesc = 'NFTS_MINTED_STDDEV_SAMPLE_CREATED_HEIGHT_DESC',
  NftsMintedStddevSampleIdAsc = 'NFTS_MINTED_STDDEV_SAMPLE_ID_ASC',
  NftsMintedStddevSampleIdDesc = 'NFTS_MINTED_STDDEV_SAMPLE_ID_DESC',
  NftsMintedStddevSampleMetadataIdAsc = 'NFTS_MINTED_STDDEV_SAMPLE_METADATA_ID_ASC',
  NftsMintedStddevSampleMetadataIdDesc = 'NFTS_MINTED_STDDEV_SAMPLE_METADATA_ID_DESC',
  NftsMintedStddevSampleMinterIdAsc = 'NFTS_MINTED_STDDEV_SAMPLE_MINTER_ID_ASC',
  NftsMintedStddevSampleMinterIdDesc = 'NFTS_MINTED_STDDEV_SAMPLE_MINTER_ID_DESC',
  NftsMintedStddevSampleOwnerIdAsc = 'NFTS_MINTED_STDDEV_SAMPLE_OWNER_ID_ASC',
  NftsMintedStddevSampleOwnerIdDesc = 'NFTS_MINTED_STDDEV_SAMPLE_OWNER_ID_DESC',
  NftsMintedStddevSamplePaymentAddressAsc = 'NFTS_MINTED_STDDEV_SAMPLE_PAYMENT_ADDRESS_ASC',
  NftsMintedStddevSamplePaymentAddressDesc = 'NFTS_MINTED_STDDEV_SAMPLE_PAYMENT_ADDRESS_DESC',
  NftsMintedStddevSampleSellerFeeAsc = 'NFTS_MINTED_STDDEV_SAMPLE_SELLER_FEE_ASC',
  NftsMintedStddevSampleSellerFeeDesc = 'NFTS_MINTED_STDDEV_SAMPLE_SELLER_FEE_DESC',
  NftsMintedStddevSampleTokenIdAsc = 'NFTS_MINTED_STDDEV_SAMPLE_TOKEN_ID_ASC',
  NftsMintedStddevSampleTokenIdDesc = 'NFTS_MINTED_STDDEV_SAMPLE_TOKEN_ID_DESC',
  NftsMintedStddevSampleUpdatedAtAsc = 'NFTS_MINTED_STDDEV_SAMPLE_UPDATED_AT_ASC',
  NftsMintedStddevSampleUpdatedAtDesc = 'NFTS_MINTED_STDDEV_SAMPLE_UPDATED_AT_DESC',
  NftsMintedStddevSampleUpdatedHeightAsc = 'NFTS_MINTED_STDDEV_SAMPLE_UPDATED_HEIGHT_ASC',
  NftsMintedStddevSampleUpdatedHeightDesc = 'NFTS_MINTED_STDDEV_SAMPLE_UPDATED_HEIGHT_DESC',
  NftsMintedStddevSampleUriAsc = 'NFTS_MINTED_STDDEV_SAMPLE_URI_ASC',
  NftsMintedStddevSampleUriDesc = 'NFTS_MINTED_STDDEV_SAMPLE_URI_DESC',
  NftsMintedSumCollectionIdAsc = 'NFTS_MINTED_SUM_COLLECTION_ID_ASC',
  NftsMintedSumCollectionIdDesc = 'NFTS_MINTED_SUM_COLLECTION_ID_DESC',
  NftsMintedSumCreatedAtAsc = 'NFTS_MINTED_SUM_CREATED_AT_ASC',
  NftsMintedSumCreatedAtDesc = 'NFTS_MINTED_SUM_CREATED_AT_DESC',
  NftsMintedSumCreatedHeightAsc = 'NFTS_MINTED_SUM_CREATED_HEIGHT_ASC',
  NftsMintedSumCreatedHeightDesc = 'NFTS_MINTED_SUM_CREATED_HEIGHT_DESC',
  NftsMintedSumIdAsc = 'NFTS_MINTED_SUM_ID_ASC',
  NftsMintedSumIdDesc = 'NFTS_MINTED_SUM_ID_DESC',
  NftsMintedSumMetadataIdAsc = 'NFTS_MINTED_SUM_METADATA_ID_ASC',
  NftsMintedSumMetadataIdDesc = 'NFTS_MINTED_SUM_METADATA_ID_DESC',
  NftsMintedSumMinterIdAsc = 'NFTS_MINTED_SUM_MINTER_ID_ASC',
  NftsMintedSumMinterIdDesc = 'NFTS_MINTED_SUM_MINTER_ID_DESC',
  NftsMintedSumOwnerIdAsc = 'NFTS_MINTED_SUM_OWNER_ID_ASC',
  NftsMintedSumOwnerIdDesc = 'NFTS_MINTED_SUM_OWNER_ID_DESC',
  NftsMintedSumPaymentAddressAsc = 'NFTS_MINTED_SUM_PAYMENT_ADDRESS_ASC',
  NftsMintedSumPaymentAddressDesc = 'NFTS_MINTED_SUM_PAYMENT_ADDRESS_DESC',
  NftsMintedSumSellerFeeAsc = 'NFTS_MINTED_SUM_SELLER_FEE_ASC',
  NftsMintedSumSellerFeeDesc = 'NFTS_MINTED_SUM_SELLER_FEE_DESC',
  NftsMintedSumTokenIdAsc = 'NFTS_MINTED_SUM_TOKEN_ID_ASC',
  NftsMintedSumTokenIdDesc = 'NFTS_MINTED_SUM_TOKEN_ID_DESC',
  NftsMintedSumUpdatedAtAsc = 'NFTS_MINTED_SUM_UPDATED_AT_ASC',
  NftsMintedSumUpdatedAtDesc = 'NFTS_MINTED_SUM_UPDATED_AT_DESC',
  NftsMintedSumUpdatedHeightAsc = 'NFTS_MINTED_SUM_UPDATED_HEIGHT_ASC',
  NftsMintedSumUpdatedHeightDesc = 'NFTS_MINTED_SUM_UPDATED_HEIGHT_DESC',
  NftsMintedSumUriAsc = 'NFTS_MINTED_SUM_URI_ASC',
  NftsMintedSumUriDesc = 'NFTS_MINTED_SUM_URI_DESC',
  NftsMintedVariancePopulationCollectionIdAsc = 'NFTS_MINTED_VARIANCE_POPULATION_COLLECTION_ID_ASC',
  NftsMintedVariancePopulationCollectionIdDesc = 'NFTS_MINTED_VARIANCE_POPULATION_COLLECTION_ID_DESC',
  NftsMintedVariancePopulationCreatedAtAsc = 'NFTS_MINTED_VARIANCE_POPULATION_CREATED_AT_ASC',
  NftsMintedVariancePopulationCreatedAtDesc = 'NFTS_MINTED_VARIANCE_POPULATION_CREATED_AT_DESC',
  NftsMintedVariancePopulationCreatedHeightAsc = 'NFTS_MINTED_VARIANCE_POPULATION_CREATED_HEIGHT_ASC',
  NftsMintedVariancePopulationCreatedHeightDesc = 'NFTS_MINTED_VARIANCE_POPULATION_CREATED_HEIGHT_DESC',
  NftsMintedVariancePopulationIdAsc = 'NFTS_MINTED_VARIANCE_POPULATION_ID_ASC',
  NftsMintedVariancePopulationIdDesc = 'NFTS_MINTED_VARIANCE_POPULATION_ID_DESC',
  NftsMintedVariancePopulationMetadataIdAsc = 'NFTS_MINTED_VARIANCE_POPULATION_METADATA_ID_ASC',
  NftsMintedVariancePopulationMetadataIdDesc = 'NFTS_MINTED_VARIANCE_POPULATION_METADATA_ID_DESC',
  NftsMintedVariancePopulationMinterIdAsc = 'NFTS_MINTED_VARIANCE_POPULATION_MINTER_ID_ASC',
  NftsMintedVariancePopulationMinterIdDesc = 'NFTS_MINTED_VARIANCE_POPULATION_MINTER_ID_DESC',
  NftsMintedVariancePopulationOwnerIdAsc = 'NFTS_MINTED_VARIANCE_POPULATION_OWNER_ID_ASC',
  NftsMintedVariancePopulationOwnerIdDesc = 'NFTS_MINTED_VARIANCE_POPULATION_OWNER_ID_DESC',
  NftsMintedVariancePopulationPaymentAddressAsc = 'NFTS_MINTED_VARIANCE_POPULATION_PAYMENT_ADDRESS_ASC',
  NftsMintedVariancePopulationPaymentAddressDesc = 'NFTS_MINTED_VARIANCE_POPULATION_PAYMENT_ADDRESS_DESC',
  NftsMintedVariancePopulationSellerFeeAsc = 'NFTS_MINTED_VARIANCE_POPULATION_SELLER_FEE_ASC',
  NftsMintedVariancePopulationSellerFeeDesc = 'NFTS_MINTED_VARIANCE_POPULATION_SELLER_FEE_DESC',
  NftsMintedVariancePopulationTokenIdAsc = 'NFTS_MINTED_VARIANCE_POPULATION_TOKEN_ID_ASC',
  NftsMintedVariancePopulationTokenIdDesc = 'NFTS_MINTED_VARIANCE_POPULATION_TOKEN_ID_DESC',
  NftsMintedVariancePopulationUpdatedAtAsc = 'NFTS_MINTED_VARIANCE_POPULATION_UPDATED_AT_ASC',
  NftsMintedVariancePopulationUpdatedAtDesc = 'NFTS_MINTED_VARIANCE_POPULATION_UPDATED_AT_DESC',
  NftsMintedVariancePopulationUpdatedHeightAsc = 'NFTS_MINTED_VARIANCE_POPULATION_UPDATED_HEIGHT_ASC',
  NftsMintedVariancePopulationUpdatedHeightDesc = 'NFTS_MINTED_VARIANCE_POPULATION_UPDATED_HEIGHT_DESC',
  NftsMintedVariancePopulationUriAsc = 'NFTS_MINTED_VARIANCE_POPULATION_URI_ASC',
  NftsMintedVariancePopulationUriDesc = 'NFTS_MINTED_VARIANCE_POPULATION_URI_DESC',
  NftsMintedVarianceSampleCollectionIdAsc = 'NFTS_MINTED_VARIANCE_SAMPLE_COLLECTION_ID_ASC',
  NftsMintedVarianceSampleCollectionIdDesc = 'NFTS_MINTED_VARIANCE_SAMPLE_COLLECTION_ID_DESC',
  NftsMintedVarianceSampleCreatedAtAsc = 'NFTS_MINTED_VARIANCE_SAMPLE_CREATED_AT_ASC',
  NftsMintedVarianceSampleCreatedAtDesc = 'NFTS_MINTED_VARIANCE_SAMPLE_CREATED_AT_DESC',
  NftsMintedVarianceSampleCreatedHeightAsc = 'NFTS_MINTED_VARIANCE_SAMPLE_CREATED_HEIGHT_ASC',
  NftsMintedVarianceSampleCreatedHeightDesc = 'NFTS_MINTED_VARIANCE_SAMPLE_CREATED_HEIGHT_DESC',
  NftsMintedVarianceSampleIdAsc = 'NFTS_MINTED_VARIANCE_SAMPLE_ID_ASC',
  NftsMintedVarianceSampleIdDesc = 'NFTS_MINTED_VARIANCE_SAMPLE_ID_DESC',
  NftsMintedVarianceSampleMetadataIdAsc = 'NFTS_MINTED_VARIANCE_SAMPLE_METADATA_ID_ASC',
  NftsMintedVarianceSampleMetadataIdDesc = 'NFTS_MINTED_VARIANCE_SAMPLE_METADATA_ID_DESC',
  NftsMintedVarianceSampleMinterIdAsc = 'NFTS_MINTED_VARIANCE_SAMPLE_MINTER_ID_ASC',
  NftsMintedVarianceSampleMinterIdDesc = 'NFTS_MINTED_VARIANCE_SAMPLE_MINTER_ID_DESC',
  NftsMintedVarianceSampleOwnerIdAsc = 'NFTS_MINTED_VARIANCE_SAMPLE_OWNER_ID_ASC',
  NftsMintedVarianceSampleOwnerIdDesc = 'NFTS_MINTED_VARIANCE_SAMPLE_OWNER_ID_DESC',
  NftsMintedVarianceSamplePaymentAddressAsc = 'NFTS_MINTED_VARIANCE_SAMPLE_PAYMENT_ADDRESS_ASC',
  NftsMintedVarianceSamplePaymentAddressDesc = 'NFTS_MINTED_VARIANCE_SAMPLE_PAYMENT_ADDRESS_DESC',
  NftsMintedVarianceSampleSellerFeeAsc = 'NFTS_MINTED_VARIANCE_SAMPLE_SELLER_FEE_ASC',
  NftsMintedVarianceSampleSellerFeeDesc = 'NFTS_MINTED_VARIANCE_SAMPLE_SELLER_FEE_DESC',
  NftsMintedVarianceSampleTokenIdAsc = 'NFTS_MINTED_VARIANCE_SAMPLE_TOKEN_ID_ASC',
  NftsMintedVarianceSampleTokenIdDesc = 'NFTS_MINTED_VARIANCE_SAMPLE_TOKEN_ID_DESC',
  NftsMintedVarianceSampleUpdatedAtAsc = 'NFTS_MINTED_VARIANCE_SAMPLE_UPDATED_AT_ASC',
  NftsMintedVarianceSampleUpdatedAtDesc = 'NFTS_MINTED_VARIANCE_SAMPLE_UPDATED_AT_DESC',
  NftsMintedVarianceSampleUpdatedHeightAsc = 'NFTS_MINTED_VARIANCE_SAMPLE_UPDATED_HEIGHT_ASC',
  NftsMintedVarianceSampleUpdatedHeightDesc = 'NFTS_MINTED_VARIANCE_SAMPLE_UPDATED_HEIGHT_DESC',
  NftsMintedVarianceSampleUriAsc = 'NFTS_MINTED_VARIANCE_SAMPLE_URI_ASC',
  NftsMintedVarianceSampleUriDesc = 'NFTS_MINTED_VARIANCE_SAMPLE_URI_DESC',
  NftsOwnedAverageCollectionIdAsc = 'NFTS_OWNED_AVERAGE_COLLECTION_ID_ASC',
  NftsOwnedAverageCollectionIdDesc = 'NFTS_OWNED_AVERAGE_COLLECTION_ID_DESC',
  NftsOwnedAverageCreatedAtAsc = 'NFTS_OWNED_AVERAGE_CREATED_AT_ASC',
  NftsOwnedAverageCreatedAtDesc = 'NFTS_OWNED_AVERAGE_CREATED_AT_DESC',
  NftsOwnedAverageCreatedHeightAsc = 'NFTS_OWNED_AVERAGE_CREATED_HEIGHT_ASC',
  NftsOwnedAverageCreatedHeightDesc = 'NFTS_OWNED_AVERAGE_CREATED_HEIGHT_DESC',
  NftsOwnedAverageIdAsc = 'NFTS_OWNED_AVERAGE_ID_ASC',
  NftsOwnedAverageIdDesc = 'NFTS_OWNED_AVERAGE_ID_DESC',
  NftsOwnedAverageMetadataIdAsc = 'NFTS_OWNED_AVERAGE_METADATA_ID_ASC',
  NftsOwnedAverageMetadataIdDesc = 'NFTS_OWNED_AVERAGE_METADATA_ID_DESC',
  NftsOwnedAverageMinterIdAsc = 'NFTS_OWNED_AVERAGE_MINTER_ID_ASC',
  NftsOwnedAverageMinterIdDesc = 'NFTS_OWNED_AVERAGE_MINTER_ID_DESC',
  NftsOwnedAverageOwnerIdAsc = 'NFTS_OWNED_AVERAGE_OWNER_ID_ASC',
  NftsOwnedAverageOwnerIdDesc = 'NFTS_OWNED_AVERAGE_OWNER_ID_DESC',
  NftsOwnedAveragePaymentAddressAsc = 'NFTS_OWNED_AVERAGE_PAYMENT_ADDRESS_ASC',
  NftsOwnedAveragePaymentAddressDesc = 'NFTS_OWNED_AVERAGE_PAYMENT_ADDRESS_DESC',
  NftsOwnedAverageSellerFeeAsc = 'NFTS_OWNED_AVERAGE_SELLER_FEE_ASC',
  NftsOwnedAverageSellerFeeDesc = 'NFTS_OWNED_AVERAGE_SELLER_FEE_DESC',
  NftsOwnedAverageTokenIdAsc = 'NFTS_OWNED_AVERAGE_TOKEN_ID_ASC',
  NftsOwnedAverageTokenIdDesc = 'NFTS_OWNED_AVERAGE_TOKEN_ID_DESC',
  NftsOwnedAverageUpdatedAtAsc = 'NFTS_OWNED_AVERAGE_UPDATED_AT_ASC',
  NftsOwnedAverageUpdatedAtDesc = 'NFTS_OWNED_AVERAGE_UPDATED_AT_DESC',
  NftsOwnedAverageUpdatedHeightAsc = 'NFTS_OWNED_AVERAGE_UPDATED_HEIGHT_ASC',
  NftsOwnedAverageUpdatedHeightDesc = 'NFTS_OWNED_AVERAGE_UPDATED_HEIGHT_DESC',
  NftsOwnedAverageUriAsc = 'NFTS_OWNED_AVERAGE_URI_ASC',
  NftsOwnedAverageUriDesc = 'NFTS_OWNED_AVERAGE_URI_DESC',
  NftsOwnedCountAsc = 'NFTS_OWNED_COUNT_ASC',
  NftsOwnedCountDesc = 'NFTS_OWNED_COUNT_DESC',
  NftsOwnedDistinctCountCollectionIdAsc = 'NFTS_OWNED_DISTINCT_COUNT_COLLECTION_ID_ASC',
  NftsOwnedDistinctCountCollectionIdDesc = 'NFTS_OWNED_DISTINCT_COUNT_COLLECTION_ID_DESC',
  NftsOwnedDistinctCountCreatedAtAsc = 'NFTS_OWNED_DISTINCT_COUNT_CREATED_AT_ASC',
  NftsOwnedDistinctCountCreatedAtDesc = 'NFTS_OWNED_DISTINCT_COUNT_CREATED_AT_DESC',
  NftsOwnedDistinctCountCreatedHeightAsc = 'NFTS_OWNED_DISTINCT_COUNT_CREATED_HEIGHT_ASC',
  NftsOwnedDistinctCountCreatedHeightDesc = 'NFTS_OWNED_DISTINCT_COUNT_CREATED_HEIGHT_DESC',
  NftsOwnedDistinctCountIdAsc = 'NFTS_OWNED_DISTINCT_COUNT_ID_ASC',
  NftsOwnedDistinctCountIdDesc = 'NFTS_OWNED_DISTINCT_COUNT_ID_DESC',
  NftsOwnedDistinctCountMetadataIdAsc = 'NFTS_OWNED_DISTINCT_COUNT_METADATA_ID_ASC',
  NftsOwnedDistinctCountMetadataIdDesc = 'NFTS_OWNED_DISTINCT_COUNT_METADATA_ID_DESC',
  NftsOwnedDistinctCountMinterIdAsc = 'NFTS_OWNED_DISTINCT_COUNT_MINTER_ID_ASC',
  NftsOwnedDistinctCountMinterIdDesc = 'NFTS_OWNED_DISTINCT_COUNT_MINTER_ID_DESC',
  NftsOwnedDistinctCountOwnerIdAsc = 'NFTS_OWNED_DISTINCT_COUNT_OWNER_ID_ASC',
  NftsOwnedDistinctCountOwnerIdDesc = 'NFTS_OWNED_DISTINCT_COUNT_OWNER_ID_DESC',
  NftsOwnedDistinctCountPaymentAddressAsc = 'NFTS_OWNED_DISTINCT_COUNT_PAYMENT_ADDRESS_ASC',
  NftsOwnedDistinctCountPaymentAddressDesc = 'NFTS_OWNED_DISTINCT_COUNT_PAYMENT_ADDRESS_DESC',
  NftsOwnedDistinctCountSellerFeeAsc = 'NFTS_OWNED_DISTINCT_COUNT_SELLER_FEE_ASC',
  NftsOwnedDistinctCountSellerFeeDesc = 'NFTS_OWNED_DISTINCT_COUNT_SELLER_FEE_DESC',
  NftsOwnedDistinctCountTokenIdAsc = 'NFTS_OWNED_DISTINCT_COUNT_TOKEN_ID_ASC',
  NftsOwnedDistinctCountTokenIdDesc = 'NFTS_OWNED_DISTINCT_COUNT_TOKEN_ID_DESC',
  NftsOwnedDistinctCountUpdatedAtAsc = 'NFTS_OWNED_DISTINCT_COUNT_UPDATED_AT_ASC',
  NftsOwnedDistinctCountUpdatedAtDesc = 'NFTS_OWNED_DISTINCT_COUNT_UPDATED_AT_DESC',
  NftsOwnedDistinctCountUpdatedHeightAsc = 'NFTS_OWNED_DISTINCT_COUNT_UPDATED_HEIGHT_ASC',
  NftsOwnedDistinctCountUpdatedHeightDesc = 'NFTS_OWNED_DISTINCT_COUNT_UPDATED_HEIGHT_DESC',
  NftsOwnedDistinctCountUriAsc = 'NFTS_OWNED_DISTINCT_COUNT_URI_ASC',
  NftsOwnedDistinctCountUriDesc = 'NFTS_OWNED_DISTINCT_COUNT_URI_DESC',
  NftsOwnedMaxCollectionIdAsc = 'NFTS_OWNED_MAX_COLLECTION_ID_ASC',
  NftsOwnedMaxCollectionIdDesc = 'NFTS_OWNED_MAX_COLLECTION_ID_DESC',
  NftsOwnedMaxCreatedAtAsc = 'NFTS_OWNED_MAX_CREATED_AT_ASC',
  NftsOwnedMaxCreatedAtDesc = 'NFTS_OWNED_MAX_CREATED_AT_DESC',
  NftsOwnedMaxCreatedHeightAsc = 'NFTS_OWNED_MAX_CREATED_HEIGHT_ASC',
  NftsOwnedMaxCreatedHeightDesc = 'NFTS_OWNED_MAX_CREATED_HEIGHT_DESC',
  NftsOwnedMaxIdAsc = 'NFTS_OWNED_MAX_ID_ASC',
  NftsOwnedMaxIdDesc = 'NFTS_OWNED_MAX_ID_DESC',
  NftsOwnedMaxMetadataIdAsc = 'NFTS_OWNED_MAX_METADATA_ID_ASC',
  NftsOwnedMaxMetadataIdDesc = 'NFTS_OWNED_MAX_METADATA_ID_DESC',
  NftsOwnedMaxMinterIdAsc = 'NFTS_OWNED_MAX_MINTER_ID_ASC',
  NftsOwnedMaxMinterIdDesc = 'NFTS_OWNED_MAX_MINTER_ID_DESC',
  NftsOwnedMaxOwnerIdAsc = 'NFTS_OWNED_MAX_OWNER_ID_ASC',
  NftsOwnedMaxOwnerIdDesc = 'NFTS_OWNED_MAX_OWNER_ID_DESC',
  NftsOwnedMaxPaymentAddressAsc = 'NFTS_OWNED_MAX_PAYMENT_ADDRESS_ASC',
  NftsOwnedMaxPaymentAddressDesc = 'NFTS_OWNED_MAX_PAYMENT_ADDRESS_DESC',
  NftsOwnedMaxSellerFeeAsc = 'NFTS_OWNED_MAX_SELLER_FEE_ASC',
  NftsOwnedMaxSellerFeeDesc = 'NFTS_OWNED_MAX_SELLER_FEE_DESC',
  NftsOwnedMaxTokenIdAsc = 'NFTS_OWNED_MAX_TOKEN_ID_ASC',
  NftsOwnedMaxTokenIdDesc = 'NFTS_OWNED_MAX_TOKEN_ID_DESC',
  NftsOwnedMaxUpdatedAtAsc = 'NFTS_OWNED_MAX_UPDATED_AT_ASC',
  NftsOwnedMaxUpdatedAtDesc = 'NFTS_OWNED_MAX_UPDATED_AT_DESC',
  NftsOwnedMaxUpdatedHeightAsc = 'NFTS_OWNED_MAX_UPDATED_HEIGHT_ASC',
  NftsOwnedMaxUpdatedHeightDesc = 'NFTS_OWNED_MAX_UPDATED_HEIGHT_DESC',
  NftsOwnedMaxUriAsc = 'NFTS_OWNED_MAX_URI_ASC',
  NftsOwnedMaxUriDesc = 'NFTS_OWNED_MAX_URI_DESC',
  NftsOwnedMinCollectionIdAsc = 'NFTS_OWNED_MIN_COLLECTION_ID_ASC',
  NftsOwnedMinCollectionIdDesc = 'NFTS_OWNED_MIN_COLLECTION_ID_DESC',
  NftsOwnedMinCreatedAtAsc = 'NFTS_OWNED_MIN_CREATED_AT_ASC',
  NftsOwnedMinCreatedAtDesc = 'NFTS_OWNED_MIN_CREATED_AT_DESC',
  NftsOwnedMinCreatedHeightAsc = 'NFTS_OWNED_MIN_CREATED_HEIGHT_ASC',
  NftsOwnedMinCreatedHeightDesc = 'NFTS_OWNED_MIN_CREATED_HEIGHT_DESC',
  NftsOwnedMinIdAsc = 'NFTS_OWNED_MIN_ID_ASC',
  NftsOwnedMinIdDesc = 'NFTS_OWNED_MIN_ID_DESC',
  NftsOwnedMinMetadataIdAsc = 'NFTS_OWNED_MIN_METADATA_ID_ASC',
  NftsOwnedMinMetadataIdDesc = 'NFTS_OWNED_MIN_METADATA_ID_DESC',
  NftsOwnedMinMinterIdAsc = 'NFTS_OWNED_MIN_MINTER_ID_ASC',
  NftsOwnedMinMinterIdDesc = 'NFTS_OWNED_MIN_MINTER_ID_DESC',
  NftsOwnedMinOwnerIdAsc = 'NFTS_OWNED_MIN_OWNER_ID_ASC',
  NftsOwnedMinOwnerIdDesc = 'NFTS_OWNED_MIN_OWNER_ID_DESC',
  NftsOwnedMinPaymentAddressAsc = 'NFTS_OWNED_MIN_PAYMENT_ADDRESS_ASC',
  NftsOwnedMinPaymentAddressDesc = 'NFTS_OWNED_MIN_PAYMENT_ADDRESS_DESC',
  NftsOwnedMinSellerFeeAsc = 'NFTS_OWNED_MIN_SELLER_FEE_ASC',
  NftsOwnedMinSellerFeeDesc = 'NFTS_OWNED_MIN_SELLER_FEE_DESC',
  NftsOwnedMinTokenIdAsc = 'NFTS_OWNED_MIN_TOKEN_ID_ASC',
  NftsOwnedMinTokenIdDesc = 'NFTS_OWNED_MIN_TOKEN_ID_DESC',
  NftsOwnedMinUpdatedAtAsc = 'NFTS_OWNED_MIN_UPDATED_AT_ASC',
  NftsOwnedMinUpdatedAtDesc = 'NFTS_OWNED_MIN_UPDATED_AT_DESC',
  NftsOwnedMinUpdatedHeightAsc = 'NFTS_OWNED_MIN_UPDATED_HEIGHT_ASC',
  NftsOwnedMinUpdatedHeightDesc = 'NFTS_OWNED_MIN_UPDATED_HEIGHT_DESC',
  NftsOwnedMinUriAsc = 'NFTS_OWNED_MIN_URI_ASC',
  NftsOwnedMinUriDesc = 'NFTS_OWNED_MIN_URI_DESC',
  NftsOwnedStddevPopulationCollectionIdAsc = 'NFTS_OWNED_STDDEV_POPULATION_COLLECTION_ID_ASC',
  NftsOwnedStddevPopulationCollectionIdDesc = 'NFTS_OWNED_STDDEV_POPULATION_COLLECTION_ID_DESC',
  NftsOwnedStddevPopulationCreatedAtAsc = 'NFTS_OWNED_STDDEV_POPULATION_CREATED_AT_ASC',
  NftsOwnedStddevPopulationCreatedAtDesc = 'NFTS_OWNED_STDDEV_POPULATION_CREATED_AT_DESC',
  NftsOwnedStddevPopulationCreatedHeightAsc = 'NFTS_OWNED_STDDEV_POPULATION_CREATED_HEIGHT_ASC',
  NftsOwnedStddevPopulationCreatedHeightDesc = 'NFTS_OWNED_STDDEV_POPULATION_CREATED_HEIGHT_DESC',
  NftsOwnedStddevPopulationIdAsc = 'NFTS_OWNED_STDDEV_POPULATION_ID_ASC',
  NftsOwnedStddevPopulationIdDesc = 'NFTS_OWNED_STDDEV_POPULATION_ID_DESC',
  NftsOwnedStddevPopulationMetadataIdAsc = 'NFTS_OWNED_STDDEV_POPULATION_METADATA_ID_ASC',
  NftsOwnedStddevPopulationMetadataIdDesc = 'NFTS_OWNED_STDDEV_POPULATION_METADATA_ID_DESC',
  NftsOwnedStddevPopulationMinterIdAsc = 'NFTS_OWNED_STDDEV_POPULATION_MINTER_ID_ASC',
  NftsOwnedStddevPopulationMinterIdDesc = 'NFTS_OWNED_STDDEV_POPULATION_MINTER_ID_DESC',
  NftsOwnedStddevPopulationOwnerIdAsc = 'NFTS_OWNED_STDDEV_POPULATION_OWNER_ID_ASC',
  NftsOwnedStddevPopulationOwnerIdDesc = 'NFTS_OWNED_STDDEV_POPULATION_OWNER_ID_DESC',
  NftsOwnedStddevPopulationPaymentAddressAsc = 'NFTS_OWNED_STDDEV_POPULATION_PAYMENT_ADDRESS_ASC',
  NftsOwnedStddevPopulationPaymentAddressDesc = 'NFTS_OWNED_STDDEV_POPULATION_PAYMENT_ADDRESS_DESC',
  NftsOwnedStddevPopulationSellerFeeAsc = 'NFTS_OWNED_STDDEV_POPULATION_SELLER_FEE_ASC',
  NftsOwnedStddevPopulationSellerFeeDesc = 'NFTS_OWNED_STDDEV_POPULATION_SELLER_FEE_DESC',
  NftsOwnedStddevPopulationTokenIdAsc = 'NFTS_OWNED_STDDEV_POPULATION_TOKEN_ID_ASC',
  NftsOwnedStddevPopulationTokenIdDesc = 'NFTS_OWNED_STDDEV_POPULATION_TOKEN_ID_DESC',
  NftsOwnedStddevPopulationUpdatedAtAsc = 'NFTS_OWNED_STDDEV_POPULATION_UPDATED_AT_ASC',
  NftsOwnedStddevPopulationUpdatedAtDesc = 'NFTS_OWNED_STDDEV_POPULATION_UPDATED_AT_DESC',
  NftsOwnedStddevPopulationUpdatedHeightAsc = 'NFTS_OWNED_STDDEV_POPULATION_UPDATED_HEIGHT_ASC',
  NftsOwnedStddevPopulationUpdatedHeightDesc = 'NFTS_OWNED_STDDEV_POPULATION_UPDATED_HEIGHT_DESC',
  NftsOwnedStddevPopulationUriAsc = 'NFTS_OWNED_STDDEV_POPULATION_URI_ASC',
  NftsOwnedStddevPopulationUriDesc = 'NFTS_OWNED_STDDEV_POPULATION_URI_DESC',
  NftsOwnedStddevSampleCollectionIdAsc = 'NFTS_OWNED_STDDEV_SAMPLE_COLLECTION_ID_ASC',
  NftsOwnedStddevSampleCollectionIdDesc = 'NFTS_OWNED_STDDEV_SAMPLE_COLLECTION_ID_DESC',
  NftsOwnedStddevSampleCreatedAtAsc = 'NFTS_OWNED_STDDEV_SAMPLE_CREATED_AT_ASC',
  NftsOwnedStddevSampleCreatedAtDesc = 'NFTS_OWNED_STDDEV_SAMPLE_CREATED_AT_DESC',
  NftsOwnedStddevSampleCreatedHeightAsc = 'NFTS_OWNED_STDDEV_SAMPLE_CREATED_HEIGHT_ASC',
  NftsOwnedStddevSampleCreatedHeightDesc = 'NFTS_OWNED_STDDEV_SAMPLE_CREATED_HEIGHT_DESC',
  NftsOwnedStddevSampleIdAsc = 'NFTS_OWNED_STDDEV_SAMPLE_ID_ASC',
  NftsOwnedStddevSampleIdDesc = 'NFTS_OWNED_STDDEV_SAMPLE_ID_DESC',
  NftsOwnedStddevSampleMetadataIdAsc = 'NFTS_OWNED_STDDEV_SAMPLE_METADATA_ID_ASC',
  NftsOwnedStddevSampleMetadataIdDesc = 'NFTS_OWNED_STDDEV_SAMPLE_METADATA_ID_DESC',
  NftsOwnedStddevSampleMinterIdAsc = 'NFTS_OWNED_STDDEV_SAMPLE_MINTER_ID_ASC',
  NftsOwnedStddevSampleMinterIdDesc = 'NFTS_OWNED_STDDEV_SAMPLE_MINTER_ID_DESC',
  NftsOwnedStddevSampleOwnerIdAsc = 'NFTS_OWNED_STDDEV_SAMPLE_OWNER_ID_ASC',
  NftsOwnedStddevSampleOwnerIdDesc = 'NFTS_OWNED_STDDEV_SAMPLE_OWNER_ID_DESC',
  NftsOwnedStddevSamplePaymentAddressAsc = 'NFTS_OWNED_STDDEV_SAMPLE_PAYMENT_ADDRESS_ASC',
  NftsOwnedStddevSamplePaymentAddressDesc = 'NFTS_OWNED_STDDEV_SAMPLE_PAYMENT_ADDRESS_DESC',
  NftsOwnedStddevSampleSellerFeeAsc = 'NFTS_OWNED_STDDEV_SAMPLE_SELLER_FEE_ASC',
  NftsOwnedStddevSampleSellerFeeDesc = 'NFTS_OWNED_STDDEV_SAMPLE_SELLER_FEE_DESC',
  NftsOwnedStddevSampleTokenIdAsc = 'NFTS_OWNED_STDDEV_SAMPLE_TOKEN_ID_ASC',
  NftsOwnedStddevSampleTokenIdDesc = 'NFTS_OWNED_STDDEV_SAMPLE_TOKEN_ID_DESC',
  NftsOwnedStddevSampleUpdatedAtAsc = 'NFTS_OWNED_STDDEV_SAMPLE_UPDATED_AT_ASC',
  NftsOwnedStddevSampleUpdatedAtDesc = 'NFTS_OWNED_STDDEV_SAMPLE_UPDATED_AT_DESC',
  NftsOwnedStddevSampleUpdatedHeightAsc = 'NFTS_OWNED_STDDEV_SAMPLE_UPDATED_HEIGHT_ASC',
  NftsOwnedStddevSampleUpdatedHeightDesc = 'NFTS_OWNED_STDDEV_SAMPLE_UPDATED_HEIGHT_DESC',
  NftsOwnedStddevSampleUriAsc = 'NFTS_OWNED_STDDEV_SAMPLE_URI_ASC',
  NftsOwnedStddevSampleUriDesc = 'NFTS_OWNED_STDDEV_SAMPLE_URI_DESC',
  NftsOwnedSumCollectionIdAsc = 'NFTS_OWNED_SUM_COLLECTION_ID_ASC',
  NftsOwnedSumCollectionIdDesc = 'NFTS_OWNED_SUM_COLLECTION_ID_DESC',
  NftsOwnedSumCreatedAtAsc = 'NFTS_OWNED_SUM_CREATED_AT_ASC',
  NftsOwnedSumCreatedAtDesc = 'NFTS_OWNED_SUM_CREATED_AT_DESC',
  NftsOwnedSumCreatedHeightAsc = 'NFTS_OWNED_SUM_CREATED_HEIGHT_ASC',
  NftsOwnedSumCreatedHeightDesc = 'NFTS_OWNED_SUM_CREATED_HEIGHT_DESC',
  NftsOwnedSumIdAsc = 'NFTS_OWNED_SUM_ID_ASC',
  NftsOwnedSumIdDesc = 'NFTS_OWNED_SUM_ID_DESC',
  NftsOwnedSumMetadataIdAsc = 'NFTS_OWNED_SUM_METADATA_ID_ASC',
  NftsOwnedSumMetadataIdDesc = 'NFTS_OWNED_SUM_METADATA_ID_DESC',
  NftsOwnedSumMinterIdAsc = 'NFTS_OWNED_SUM_MINTER_ID_ASC',
  NftsOwnedSumMinterIdDesc = 'NFTS_OWNED_SUM_MINTER_ID_DESC',
  NftsOwnedSumOwnerIdAsc = 'NFTS_OWNED_SUM_OWNER_ID_ASC',
  NftsOwnedSumOwnerIdDesc = 'NFTS_OWNED_SUM_OWNER_ID_DESC',
  NftsOwnedSumPaymentAddressAsc = 'NFTS_OWNED_SUM_PAYMENT_ADDRESS_ASC',
  NftsOwnedSumPaymentAddressDesc = 'NFTS_OWNED_SUM_PAYMENT_ADDRESS_DESC',
  NftsOwnedSumSellerFeeAsc = 'NFTS_OWNED_SUM_SELLER_FEE_ASC',
  NftsOwnedSumSellerFeeDesc = 'NFTS_OWNED_SUM_SELLER_FEE_DESC',
  NftsOwnedSumTokenIdAsc = 'NFTS_OWNED_SUM_TOKEN_ID_ASC',
  NftsOwnedSumTokenIdDesc = 'NFTS_OWNED_SUM_TOKEN_ID_DESC',
  NftsOwnedSumUpdatedAtAsc = 'NFTS_OWNED_SUM_UPDATED_AT_ASC',
  NftsOwnedSumUpdatedAtDesc = 'NFTS_OWNED_SUM_UPDATED_AT_DESC',
  NftsOwnedSumUpdatedHeightAsc = 'NFTS_OWNED_SUM_UPDATED_HEIGHT_ASC',
  NftsOwnedSumUpdatedHeightDesc = 'NFTS_OWNED_SUM_UPDATED_HEIGHT_DESC',
  NftsOwnedSumUriAsc = 'NFTS_OWNED_SUM_URI_ASC',
  NftsOwnedSumUriDesc = 'NFTS_OWNED_SUM_URI_DESC',
  NftsOwnedVariancePopulationCollectionIdAsc = 'NFTS_OWNED_VARIANCE_POPULATION_COLLECTION_ID_ASC',
  NftsOwnedVariancePopulationCollectionIdDesc = 'NFTS_OWNED_VARIANCE_POPULATION_COLLECTION_ID_DESC',
  NftsOwnedVariancePopulationCreatedAtAsc = 'NFTS_OWNED_VARIANCE_POPULATION_CREATED_AT_ASC',
  NftsOwnedVariancePopulationCreatedAtDesc = 'NFTS_OWNED_VARIANCE_POPULATION_CREATED_AT_DESC',
  NftsOwnedVariancePopulationCreatedHeightAsc = 'NFTS_OWNED_VARIANCE_POPULATION_CREATED_HEIGHT_ASC',
  NftsOwnedVariancePopulationCreatedHeightDesc = 'NFTS_OWNED_VARIANCE_POPULATION_CREATED_HEIGHT_DESC',
  NftsOwnedVariancePopulationIdAsc = 'NFTS_OWNED_VARIANCE_POPULATION_ID_ASC',
  NftsOwnedVariancePopulationIdDesc = 'NFTS_OWNED_VARIANCE_POPULATION_ID_DESC',
  NftsOwnedVariancePopulationMetadataIdAsc = 'NFTS_OWNED_VARIANCE_POPULATION_METADATA_ID_ASC',
  NftsOwnedVariancePopulationMetadataIdDesc = 'NFTS_OWNED_VARIANCE_POPULATION_METADATA_ID_DESC',
  NftsOwnedVariancePopulationMinterIdAsc = 'NFTS_OWNED_VARIANCE_POPULATION_MINTER_ID_ASC',
  NftsOwnedVariancePopulationMinterIdDesc = 'NFTS_OWNED_VARIANCE_POPULATION_MINTER_ID_DESC',
  NftsOwnedVariancePopulationOwnerIdAsc = 'NFTS_OWNED_VARIANCE_POPULATION_OWNER_ID_ASC',
  NftsOwnedVariancePopulationOwnerIdDesc = 'NFTS_OWNED_VARIANCE_POPULATION_OWNER_ID_DESC',
  NftsOwnedVariancePopulationPaymentAddressAsc = 'NFTS_OWNED_VARIANCE_POPULATION_PAYMENT_ADDRESS_ASC',
  NftsOwnedVariancePopulationPaymentAddressDesc = 'NFTS_OWNED_VARIANCE_POPULATION_PAYMENT_ADDRESS_DESC',
  NftsOwnedVariancePopulationSellerFeeAsc = 'NFTS_OWNED_VARIANCE_POPULATION_SELLER_FEE_ASC',
  NftsOwnedVariancePopulationSellerFeeDesc = 'NFTS_OWNED_VARIANCE_POPULATION_SELLER_FEE_DESC',
  NftsOwnedVariancePopulationTokenIdAsc = 'NFTS_OWNED_VARIANCE_POPULATION_TOKEN_ID_ASC',
  NftsOwnedVariancePopulationTokenIdDesc = 'NFTS_OWNED_VARIANCE_POPULATION_TOKEN_ID_DESC',
  NftsOwnedVariancePopulationUpdatedAtAsc = 'NFTS_OWNED_VARIANCE_POPULATION_UPDATED_AT_ASC',
  NftsOwnedVariancePopulationUpdatedAtDesc = 'NFTS_OWNED_VARIANCE_POPULATION_UPDATED_AT_DESC',
  NftsOwnedVariancePopulationUpdatedHeightAsc = 'NFTS_OWNED_VARIANCE_POPULATION_UPDATED_HEIGHT_ASC',
  NftsOwnedVariancePopulationUpdatedHeightDesc = 'NFTS_OWNED_VARIANCE_POPULATION_UPDATED_HEIGHT_DESC',
  NftsOwnedVariancePopulationUriAsc = 'NFTS_OWNED_VARIANCE_POPULATION_URI_ASC',
  NftsOwnedVariancePopulationUriDesc = 'NFTS_OWNED_VARIANCE_POPULATION_URI_DESC',
  NftsOwnedVarianceSampleCollectionIdAsc = 'NFTS_OWNED_VARIANCE_SAMPLE_COLLECTION_ID_ASC',
  NftsOwnedVarianceSampleCollectionIdDesc = 'NFTS_OWNED_VARIANCE_SAMPLE_COLLECTION_ID_DESC',
  NftsOwnedVarianceSampleCreatedAtAsc = 'NFTS_OWNED_VARIANCE_SAMPLE_CREATED_AT_ASC',
  NftsOwnedVarianceSampleCreatedAtDesc = 'NFTS_OWNED_VARIANCE_SAMPLE_CREATED_AT_DESC',
  NftsOwnedVarianceSampleCreatedHeightAsc = 'NFTS_OWNED_VARIANCE_SAMPLE_CREATED_HEIGHT_ASC',
  NftsOwnedVarianceSampleCreatedHeightDesc = 'NFTS_OWNED_VARIANCE_SAMPLE_CREATED_HEIGHT_DESC',
  NftsOwnedVarianceSampleIdAsc = 'NFTS_OWNED_VARIANCE_SAMPLE_ID_ASC',
  NftsOwnedVarianceSampleIdDesc = 'NFTS_OWNED_VARIANCE_SAMPLE_ID_DESC',
  NftsOwnedVarianceSampleMetadataIdAsc = 'NFTS_OWNED_VARIANCE_SAMPLE_METADATA_ID_ASC',
  NftsOwnedVarianceSampleMetadataIdDesc = 'NFTS_OWNED_VARIANCE_SAMPLE_METADATA_ID_DESC',
  NftsOwnedVarianceSampleMinterIdAsc = 'NFTS_OWNED_VARIANCE_SAMPLE_MINTER_ID_ASC',
  NftsOwnedVarianceSampleMinterIdDesc = 'NFTS_OWNED_VARIANCE_SAMPLE_MINTER_ID_DESC',
  NftsOwnedVarianceSampleOwnerIdAsc = 'NFTS_OWNED_VARIANCE_SAMPLE_OWNER_ID_ASC',
  NftsOwnedVarianceSampleOwnerIdDesc = 'NFTS_OWNED_VARIANCE_SAMPLE_OWNER_ID_DESC',
  NftsOwnedVarianceSamplePaymentAddressAsc = 'NFTS_OWNED_VARIANCE_SAMPLE_PAYMENT_ADDRESS_ASC',
  NftsOwnedVarianceSamplePaymentAddressDesc = 'NFTS_OWNED_VARIANCE_SAMPLE_PAYMENT_ADDRESS_DESC',
  NftsOwnedVarianceSampleSellerFeeAsc = 'NFTS_OWNED_VARIANCE_SAMPLE_SELLER_FEE_ASC',
  NftsOwnedVarianceSampleSellerFeeDesc = 'NFTS_OWNED_VARIANCE_SAMPLE_SELLER_FEE_DESC',
  NftsOwnedVarianceSampleTokenIdAsc = 'NFTS_OWNED_VARIANCE_SAMPLE_TOKEN_ID_ASC',
  NftsOwnedVarianceSampleTokenIdDesc = 'NFTS_OWNED_VARIANCE_SAMPLE_TOKEN_ID_DESC',
  NftsOwnedVarianceSampleUpdatedAtAsc = 'NFTS_OWNED_VARIANCE_SAMPLE_UPDATED_AT_ASC',
  NftsOwnedVarianceSampleUpdatedAtDesc = 'NFTS_OWNED_VARIANCE_SAMPLE_UPDATED_AT_DESC',
  NftsOwnedVarianceSampleUpdatedHeightAsc = 'NFTS_OWNED_VARIANCE_SAMPLE_UPDATED_HEIGHT_ASC',
  NftsOwnedVarianceSampleUpdatedHeightDesc = 'NFTS_OWNED_VARIANCE_SAMPLE_UPDATED_HEIGHT_DESC',
  NftsOwnedVarianceSampleUriAsc = 'NFTS_OWNED_VARIANCE_SAMPLE_URI_ASC',
  NftsOwnedVarianceSampleUriDesc = 'NFTS_OWNED_VARIANCE_SAMPLE_URI_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  VerifiedAsc = 'VERIFIED_ASC',
  VerifiedDesc = 'VERIFIED_DESC'
}

/** A filter to be used against BigFloat fields. All fields are combined with a logical ‘and.’ */
export type BigFloatFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<Scalars['BigFloat']>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<Scalars['BigFloat']>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<Scalars['BigFloat']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars['BigFloat']>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<Scalars['BigFloat']>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<Scalars['BigFloat']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars['BigFloat']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<Scalars['BigFloat']>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<Scalars['BigFloat']>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<Scalars['BigFloat']>>;
};

/** A filter to be used against BigInt fields. All fields are combined with a logical ‘and.’ */
export type BigIntFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<Scalars['BigInt']>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<Scalars['BigInt']>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<Scalars['BigInt']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars['BigInt']>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<Scalars['BigInt']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars['BigInt']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<Scalars['BigInt']>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<Scalars['BigInt']>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<Scalars['BigInt']>>;
};

/** A filter to be used against Boolean fields. All fields are combined with a logical ‘and.’ */
export type BooleanFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<Scalars['Boolean']>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<Scalars['Boolean']>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<Scalars['Boolean']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars['Boolean']>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<Scalars['Boolean']>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<Scalars['Boolean']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars['Boolean']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<Scalars['Boolean']>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<Scalars['Boolean']>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<Scalars['Boolean']>>;
};

export type Collection = Node & {
  __typename?: 'Collection';
  /** Reads and enables pagination through a set of `Account`. */
  accountsByLaunchpartyCollectionIdAndCreatorId: CollectionAccountsByLaunchpartyCollectionIdAndCreatorIdManyToManyConnection;
  /** Reads and enables pagination through a set of `Account`. */
  accountsByNftCollectionIdAndMinterId: CollectionAccountsByNftCollectionIdAndMinterIdManyToManyConnection;
  /** Reads and enables pagination through a set of `Account`. */
  accountsByNftCollectionIdAndOwnerId: CollectionAccountsByNftCollectionIdAndOwnerIdManyToManyConnection;
  /** Reads a single `Account` that is related to this `Collection`. */
  admin?: Maybe<Account>;
  adminId?: Maybe<Scalars['String']>;
  codeId: Scalars['BigFloat'];
  cover?: Maybe<Scalars['String']>;
  createdAt: Scalars['Datetime'];
  createdHeight: Scalars['BigFloat'];
  /** Reads a single `Account` that is related to this `Collection`. */
  creator?: Maybe<Account>;
  creatorId: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  externalUrls?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  /** Reads and enables pagination through a set of `Launchparty`. */
  launchparties: LaunchpartiesConnection;
  name: Scalars['String'];
  /** Reads and enables pagination through a set of `NftMetadatum`. */
  nftMetadataByNftCollectionIdAndMetadataId: CollectionNftMetadataByNftCollectionIdAndMetadataIdManyToManyConnection;
  /** Reads and enables pagination through a set of `Nft`. */
  nfts: NftsConnection;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  symbol: Scalars['String'];
  updatedAt?: Maybe<Scalars['Datetime']>;
  updatedHeight?: Maybe<Scalars['BigFloat']>;
  uri?: Maybe<Scalars['String']>;
  verified: Scalars['Boolean'];
};


export type CollectionAccountsByLaunchpartyCollectionIdAndCreatorIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  distinct?: InputMaybe<Array<InputMaybe<Accounts_Distinct_Enum>>>;
  filter?: InputMaybe<AccountFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AccountsOrderBy>>;
};


export type CollectionAccountsByNftCollectionIdAndMinterIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  distinct?: InputMaybe<Array<InputMaybe<Accounts_Distinct_Enum>>>;
  filter?: InputMaybe<AccountFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AccountsOrderBy>>;
};


export type CollectionAccountsByNftCollectionIdAndOwnerIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  distinct?: InputMaybe<Array<InputMaybe<Accounts_Distinct_Enum>>>;
  filter?: InputMaybe<AccountFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AccountsOrderBy>>;
};


export type CollectionLaunchpartiesArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  distinct?: InputMaybe<Array<InputMaybe<Launchparties_Distinct_Enum>>>;
  filter?: InputMaybe<LaunchpartyFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<LaunchpartiesOrderBy>>;
};


export type CollectionNftMetadataByNftCollectionIdAndMetadataIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  distinct?: InputMaybe<Array<InputMaybe<Nft_Metadata_Distinct_Enum>>>;
  filter?: InputMaybe<NftMetadatumFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<NftMetadataOrderBy>>;
};


export type CollectionNftsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  distinct?: InputMaybe<Array<InputMaybe<Nfts_Distinct_Enum>>>;
  filter?: InputMaybe<NftFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<NftsOrderBy>>;
};

/** A connection to a list of `Account` values, with data from `Launchparty`. */
export type CollectionAccountsByLaunchpartyCollectionIdAndCreatorIdManyToManyConnection = {
  __typename?: 'CollectionAccountsByLaunchpartyCollectionIdAndCreatorIdManyToManyConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<AccountAggregates>;
  /** A list of edges which contains the `Account`, info from the `Launchparty`, and the cursor to aid in pagination. */
  edges: Array<CollectionAccountsByLaunchpartyCollectionIdAndCreatorIdManyToManyEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<AccountAggregates>>;
  /** A list of `Account` objects. */
  nodes: Array<Maybe<Account>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Account` you could get from the connection. */
  totalCount: Scalars['Int'];
};


/** A connection to a list of `Account` values, with data from `Launchparty`. */
export type CollectionAccountsByLaunchpartyCollectionIdAndCreatorIdManyToManyConnectionGroupedAggregatesArgs = {
  groupBy: Array<AccountsGroupBy>;
  having?: InputMaybe<AccountsHavingInput>;
};

/** A `Account` edge in the connection, with data from `Launchparty`. */
export type CollectionAccountsByLaunchpartyCollectionIdAndCreatorIdManyToManyEdge = {
  __typename?: 'CollectionAccountsByLaunchpartyCollectionIdAndCreatorIdManyToManyEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** Reads and enables pagination through a set of `Launchparty`. */
  launchpartiesByCreatorId: LaunchpartiesConnection;
  /** The `Account` at the end of the edge. */
  node?: Maybe<Account>;
};


/** A `Account` edge in the connection, with data from `Launchparty`. */
export type CollectionAccountsByLaunchpartyCollectionIdAndCreatorIdManyToManyEdgeLaunchpartiesByCreatorIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  distinct?: InputMaybe<Array<InputMaybe<Launchparties_Distinct_Enum>>>;
  filter?: InputMaybe<LaunchpartyFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<LaunchpartiesOrderBy>>;
};

/** A connection to a list of `Account` values, with data from `Nft`. */
export type CollectionAccountsByNftCollectionIdAndMinterIdManyToManyConnection = {
  __typename?: 'CollectionAccountsByNftCollectionIdAndMinterIdManyToManyConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<AccountAggregates>;
  /** A list of edges which contains the `Account`, info from the `Nft`, and the cursor to aid in pagination. */
  edges: Array<CollectionAccountsByNftCollectionIdAndMinterIdManyToManyEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<AccountAggregates>>;
  /** A list of `Account` objects. */
  nodes: Array<Maybe<Account>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Account` you could get from the connection. */
  totalCount: Scalars['Int'];
};


/** A connection to a list of `Account` values, with data from `Nft`. */
export type CollectionAccountsByNftCollectionIdAndMinterIdManyToManyConnectionGroupedAggregatesArgs = {
  groupBy: Array<AccountsGroupBy>;
  having?: InputMaybe<AccountsHavingInput>;
};

/** A `Account` edge in the connection, with data from `Nft`. */
export type CollectionAccountsByNftCollectionIdAndMinterIdManyToManyEdge = {
  __typename?: 'CollectionAccountsByNftCollectionIdAndMinterIdManyToManyEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** Reads and enables pagination through a set of `Nft`. */
  nftsMinted: NftsConnection;
  /** The `Account` at the end of the edge. */
  node?: Maybe<Account>;
};


/** A `Account` edge in the connection, with data from `Nft`. */
export type CollectionAccountsByNftCollectionIdAndMinterIdManyToManyEdgeNftsMintedArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  distinct?: InputMaybe<Array<InputMaybe<Nfts_Distinct_Enum>>>;
  filter?: InputMaybe<NftFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<NftsOrderBy>>;
};

/** A connection to a list of `Account` values, with data from `Nft`. */
export type CollectionAccountsByNftCollectionIdAndOwnerIdManyToManyConnection = {
  __typename?: 'CollectionAccountsByNftCollectionIdAndOwnerIdManyToManyConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<AccountAggregates>;
  /** A list of edges which contains the `Account`, info from the `Nft`, and the cursor to aid in pagination. */
  edges: Array<CollectionAccountsByNftCollectionIdAndOwnerIdManyToManyEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<AccountAggregates>>;
  /** A list of `Account` objects. */
  nodes: Array<Maybe<Account>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Account` you could get from the connection. */
  totalCount: Scalars['Int'];
};


/** A connection to a list of `Account` values, with data from `Nft`. */
export type CollectionAccountsByNftCollectionIdAndOwnerIdManyToManyConnectionGroupedAggregatesArgs = {
  groupBy: Array<AccountsGroupBy>;
  having?: InputMaybe<AccountsHavingInput>;
};

/** A `Account` edge in the connection, with data from `Nft`. */
export type CollectionAccountsByNftCollectionIdAndOwnerIdManyToManyEdge = {
  __typename?: 'CollectionAccountsByNftCollectionIdAndOwnerIdManyToManyEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** Reads and enables pagination through a set of `Nft`. */
  nftsOwned: NftsConnection;
  /** The `Account` at the end of the edge. */
  node?: Maybe<Account>;
};


/** A `Account` edge in the connection, with data from `Nft`. */
export type CollectionAccountsByNftCollectionIdAndOwnerIdManyToManyEdgeNftsOwnedArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  distinct?: InputMaybe<Array<InputMaybe<Nfts_Distinct_Enum>>>;
  filter?: InputMaybe<NftFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<NftsOrderBy>>;
};

export type CollectionAggregates = {
  __typename?: 'CollectionAggregates';
  /** Mean average aggregates across the matching connection (ignoring before/after/first/last/offset) */
  average?: Maybe<CollectionAverageAggregates>;
  /** Distinct count aggregates across the matching connection (ignoring before/after/first/last/offset) */
  distinctCount?: Maybe<CollectionDistinctCountAggregates>;
  keys?: Maybe<Array<Scalars['String']>>;
  /** Maximum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  max?: Maybe<CollectionMaxAggregates>;
  /** Minimum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  min?: Maybe<CollectionMinAggregates>;
  /** Population standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  stddevPopulation?: Maybe<CollectionStddevPopulationAggregates>;
  /** Sample standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  stddevSample?: Maybe<CollectionStddevSampleAggregates>;
  /** Sum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  sum?: Maybe<CollectionSumAggregates>;
  /** Population variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  variancePopulation?: Maybe<CollectionVariancePopulationAggregates>;
  /** Sample variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  varianceSample?: Maybe<CollectionVarianceSampleAggregates>;
};

/** A filter to be used against aggregates of `Collection` object types. */
export type CollectionAggregatesFilter = {
  /** Mean average aggregate over matching `Collection` objects. */
  average?: InputMaybe<CollectionAverageAggregateFilter>;
  /** Distinct count aggregate over matching `Collection` objects. */
  distinctCount?: InputMaybe<CollectionDistinctCountAggregateFilter>;
  /** A filter that must pass for the relevant `Collection` object to be included within the aggregate. */
  filter?: InputMaybe<CollectionFilter>;
  /** Maximum aggregate over matching `Collection` objects. */
  max?: InputMaybe<CollectionMaxAggregateFilter>;
  /** Minimum aggregate over matching `Collection` objects. */
  min?: InputMaybe<CollectionMinAggregateFilter>;
  /** Population standard deviation aggregate over matching `Collection` objects. */
  stddevPopulation?: InputMaybe<CollectionStddevPopulationAggregateFilter>;
  /** Sample standard deviation aggregate over matching `Collection` objects. */
  stddevSample?: InputMaybe<CollectionStddevSampleAggregateFilter>;
  /** Sum aggregate over matching `Collection` objects. */
  sum?: InputMaybe<CollectionSumAggregateFilter>;
  /** Population variance aggregate over matching `Collection` objects. */
  variancePopulation?: InputMaybe<CollectionVariancePopulationAggregateFilter>;
  /** Sample variance aggregate over matching `Collection` objects. */
  varianceSample?: InputMaybe<CollectionVarianceSampleAggregateFilter>;
};

export type CollectionAverageAggregateFilter = {
  codeId?: InputMaybe<BigFloatFilter>;
  createdHeight?: InputMaybe<BigFloatFilter>;
  updatedHeight?: InputMaybe<BigFloatFilter>;
};

export type CollectionAverageAggregates = {
  __typename?: 'CollectionAverageAggregates';
  /** Mean average of codeId across the matching connection */
  codeId?: Maybe<Scalars['BigFloat']>;
  /** Mean average of createdHeight across the matching connection */
  createdHeight?: Maybe<Scalars['BigFloat']>;
  /** Mean average of updatedHeight across the matching connection */
  updatedHeight?: Maybe<Scalars['BigFloat']>;
};

export type CollectionDistinctCountAggregateFilter = {
  adminId?: InputMaybe<BigIntFilter>;
  codeId?: InputMaybe<BigIntFilter>;
  cover?: InputMaybe<BigIntFilter>;
  createdAt?: InputMaybe<BigIntFilter>;
  createdHeight?: InputMaybe<BigIntFilter>;
  creatorId?: InputMaybe<BigIntFilter>;
  description?: InputMaybe<BigIntFilter>;
  externalUrls?: InputMaybe<BigIntFilter>;
  id?: InputMaybe<BigIntFilter>;
  image?: InputMaybe<BigIntFilter>;
  label?: InputMaybe<BigIntFilter>;
  name?: InputMaybe<BigIntFilter>;
  symbol?: InputMaybe<BigIntFilter>;
  updatedAt?: InputMaybe<BigIntFilter>;
  updatedHeight?: InputMaybe<BigIntFilter>;
  uri?: InputMaybe<BigIntFilter>;
  verified?: InputMaybe<BigIntFilter>;
};

export type CollectionDistinctCountAggregates = {
  __typename?: 'CollectionDistinctCountAggregates';
  /** Distinct count of adminId across the matching connection */
  adminId?: Maybe<Scalars['BigInt']>;
  /** Distinct count of codeId across the matching connection */
  codeId?: Maybe<Scalars['BigInt']>;
  /** Distinct count of cover across the matching connection */
  cover?: Maybe<Scalars['BigInt']>;
  /** Distinct count of createdAt across the matching connection */
  createdAt?: Maybe<Scalars['BigInt']>;
  /** Distinct count of createdHeight across the matching connection */
  createdHeight?: Maybe<Scalars['BigInt']>;
  /** Distinct count of creatorId across the matching connection */
  creatorId?: Maybe<Scalars['BigInt']>;
  /** Distinct count of description across the matching connection */
  description?: Maybe<Scalars['BigInt']>;
  /** Distinct count of externalUrls across the matching connection */
  externalUrls?: Maybe<Scalars['BigInt']>;
  /** Distinct count of id across the matching connection */
  id?: Maybe<Scalars['BigInt']>;
  /** Distinct count of image across the matching connection */
  image?: Maybe<Scalars['BigInt']>;
  /** Distinct count of label across the matching connection */
  label?: Maybe<Scalars['BigInt']>;
  /** Distinct count of name across the matching connection */
  name?: Maybe<Scalars['BigInt']>;
  /** Distinct count of symbol across the matching connection */
  symbol?: Maybe<Scalars['BigInt']>;
  /** Distinct count of updatedAt across the matching connection */
  updatedAt?: Maybe<Scalars['BigInt']>;
  /** Distinct count of updatedHeight across the matching connection */
  updatedHeight?: Maybe<Scalars['BigInt']>;
  /** Distinct count of uri across the matching connection */
  uri?: Maybe<Scalars['BigInt']>;
  /** Distinct count of verified across the matching connection */
  verified?: Maybe<Scalars['BigInt']>;
};

/** A filter to be used against `Collection` object types. All fields are combined with a logical ‘and.’ */
export type CollectionFilter = {
  /** Filter by the object’s `admin` relation. */
  admin?: InputMaybe<AccountFilter>;
  /** A related `admin` exists. */
  adminExists?: InputMaybe<Scalars['Boolean']>;
  /** Filter by the object’s `adminId` field. */
  adminId?: InputMaybe<StringFilter>;
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<CollectionFilter>>;
  /** Filter by the object’s `codeId` field. */
  codeId?: InputMaybe<BigFloatFilter>;
  /** Filter by the object’s `cover` field. */
  cover?: InputMaybe<StringFilter>;
  /** Filter by the object’s `createdAt` field. */
  createdAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `createdHeight` field. */
  createdHeight?: InputMaybe<BigFloatFilter>;
  /** Filter by the object’s `creator` relation. */
  creator?: InputMaybe<AccountFilter>;
  /** Filter by the object’s `creatorId` field. */
  creatorId?: InputMaybe<StringFilter>;
  /** Filter by the object’s `description` field. */
  description?: InputMaybe<StringFilter>;
  /** Filter by the object’s `externalUrls` field. */
  externalUrls?: InputMaybe<StringFilter>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<StringFilter>;
  /** Filter by the object’s `image` field. */
  image?: InputMaybe<StringFilter>;
  /** Filter by the object’s `label` field. */
  label?: InputMaybe<StringFilter>;
  /** Filter by the object’s `launchparties` relation. */
  launchparties?: InputMaybe<CollectionToManyLaunchpartyFilter>;
  /** Some related `launchparties` exist. */
  launchpartiesExist?: InputMaybe<Scalars['Boolean']>;
  /** Filter by the object’s `name` field. */
  name?: InputMaybe<StringFilter>;
  /** Filter by the object’s `nfts` relation. */
  nfts?: InputMaybe<CollectionToManyNftFilter>;
  /** Some related `nfts` exist. */
  nftsExist?: InputMaybe<Scalars['Boolean']>;
  /** Negates the expression. */
  not?: InputMaybe<CollectionFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<CollectionFilter>>;
  /** Filter by the object’s `symbol` field. */
  symbol?: InputMaybe<StringFilter>;
  /** Filter by the object’s `updatedAt` field. */
  updatedAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `updatedHeight` field. */
  updatedHeight?: InputMaybe<BigFloatFilter>;
  /** Filter by the object’s `uri` field. */
  uri?: InputMaybe<StringFilter>;
  /** Filter by the object’s `verified` field. */
  verified?: InputMaybe<BooleanFilter>;
};

export type CollectionMaxAggregateFilter = {
  codeId?: InputMaybe<BigFloatFilter>;
  createdHeight?: InputMaybe<BigFloatFilter>;
  updatedHeight?: InputMaybe<BigFloatFilter>;
};

export type CollectionMaxAggregates = {
  __typename?: 'CollectionMaxAggregates';
  /** Maximum of codeId across the matching connection */
  codeId?: Maybe<Scalars['BigFloat']>;
  /** Maximum of createdHeight across the matching connection */
  createdHeight?: Maybe<Scalars['BigFloat']>;
  /** Maximum of updatedHeight across the matching connection */
  updatedHeight?: Maybe<Scalars['BigFloat']>;
};

export type CollectionMinAggregateFilter = {
  codeId?: InputMaybe<BigFloatFilter>;
  createdHeight?: InputMaybe<BigFloatFilter>;
  updatedHeight?: InputMaybe<BigFloatFilter>;
};

export type CollectionMinAggregates = {
  __typename?: 'CollectionMinAggregates';
  /** Minimum of codeId across the matching connection */
  codeId?: Maybe<Scalars['BigFloat']>;
  /** Minimum of createdHeight across the matching connection */
  createdHeight?: Maybe<Scalars['BigFloat']>;
  /** Minimum of updatedHeight across the matching connection */
  updatedHeight?: Maybe<Scalars['BigFloat']>;
};

/** A connection to a list of `NftMetadatum` values, with data from `Nft`. */
export type CollectionNftMetadataByNftCollectionIdAndMetadataIdManyToManyConnection = {
  __typename?: 'CollectionNftMetadataByNftCollectionIdAndMetadataIdManyToManyConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<NftMetadatumAggregates>;
  /** A list of edges which contains the `NftMetadatum`, info from the `Nft`, and the cursor to aid in pagination. */
  edges: Array<CollectionNftMetadataByNftCollectionIdAndMetadataIdManyToManyEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<NftMetadatumAggregates>>;
  /** A list of `NftMetadatum` objects. */
  nodes: Array<Maybe<NftMetadatum>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `NftMetadatum` you could get from the connection. */
  totalCount: Scalars['Int'];
};


/** A connection to a list of `NftMetadatum` values, with data from `Nft`. */
export type CollectionNftMetadataByNftCollectionIdAndMetadataIdManyToManyConnectionGroupedAggregatesArgs = {
  groupBy: Array<NftMetadataGroupBy>;
  having?: InputMaybe<NftMetadataHavingInput>;
};

/** A `NftMetadatum` edge in the connection, with data from `Nft`. */
export type CollectionNftMetadataByNftCollectionIdAndMetadataIdManyToManyEdge = {
  __typename?: 'CollectionNftMetadataByNftCollectionIdAndMetadataIdManyToManyEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** Reads and enables pagination through a set of `Nft`. */
  nftsByMetadataId: NftsConnection;
  /** The `NftMetadatum` at the end of the edge. */
  node?: Maybe<NftMetadatum>;
};


/** A `NftMetadatum` edge in the connection, with data from `Nft`. */
export type CollectionNftMetadataByNftCollectionIdAndMetadataIdManyToManyEdgeNftsByMetadataIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  distinct?: InputMaybe<Array<InputMaybe<Nfts_Distinct_Enum>>>;
  filter?: InputMaybe<NftFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<NftsOrderBy>>;
};

export type CollectionStddevPopulationAggregateFilter = {
  codeId?: InputMaybe<BigFloatFilter>;
  createdHeight?: InputMaybe<BigFloatFilter>;
  updatedHeight?: InputMaybe<BigFloatFilter>;
};

export type CollectionStddevPopulationAggregates = {
  __typename?: 'CollectionStddevPopulationAggregates';
  /** Population standard deviation of codeId across the matching connection */
  codeId?: Maybe<Scalars['BigFloat']>;
  /** Population standard deviation of createdHeight across the matching connection */
  createdHeight?: Maybe<Scalars['BigFloat']>;
  /** Population standard deviation of updatedHeight across the matching connection */
  updatedHeight?: Maybe<Scalars['BigFloat']>;
};

export type CollectionStddevSampleAggregateFilter = {
  codeId?: InputMaybe<BigFloatFilter>;
  createdHeight?: InputMaybe<BigFloatFilter>;
  updatedHeight?: InputMaybe<BigFloatFilter>;
};

export type CollectionStddevSampleAggregates = {
  __typename?: 'CollectionStddevSampleAggregates';
  /** Sample standard deviation of codeId across the matching connection */
  codeId?: Maybe<Scalars['BigFloat']>;
  /** Sample standard deviation of createdHeight across the matching connection */
  createdHeight?: Maybe<Scalars['BigFloat']>;
  /** Sample standard deviation of updatedHeight across the matching connection */
  updatedHeight?: Maybe<Scalars['BigFloat']>;
};

export type CollectionSumAggregateFilter = {
  codeId?: InputMaybe<BigFloatFilter>;
  createdHeight?: InputMaybe<BigFloatFilter>;
  updatedHeight?: InputMaybe<BigFloatFilter>;
};

export type CollectionSumAggregates = {
  __typename?: 'CollectionSumAggregates';
  /** Sum of codeId across the matching connection */
  codeId: Scalars['BigFloat'];
  /** Sum of createdHeight across the matching connection */
  createdHeight: Scalars['BigFloat'];
  /** Sum of updatedHeight across the matching connection */
  updatedHeight: Scalars['BigFloat'];
};

/** A filter to be used against many `Launchparty` object types. All fields are combined with a logical ‘and.’ */
export type CollectionToManyLaunchpartyFilter = {
  /** Aggregates across related `Launchparty` match the filter criteria. */
  aggregates?: InputMaybe<LaunchpartyAggregatesFilter>;
  /** Every related `Launchparty` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<LaunchpartyFilter>;
  /** No related `Launchparty` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<LaunchpartyFilter>;
  /** Some related `Launchparty` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<LaunchpartyFilter>;
};

/** A filter to be used against many `Nft` object types. All fields are combined with a logical ‘and.’ */
export type CollectionToManyNftFilter = {
  /** Aggregates across related `Nft` match the filter criteria. */
  aggregates?: InputMaybe<NftAggregatesFilter>;
  /** Every related `Nft` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<NftFilter>;
  /** No related `Nft` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<NftFilter>;
  /** Some related `Nft` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<NftFilter>;
};

export type CollectionVariancePopulationAggregateFilter = {
  codeId?: InputMaybe<BigFloatFilter>;
  createdHeight?: InputMaybe<BigFloatFilter>;
  updatedHeight?: InputMaybe<BigFloatFilter>;
};

export type CollectionVariancePopulationAggregates = {
  __typename?: 'CollectionVariancePopulationAggregates';
  /** Population variance of codeId across the matching connection */
  codeId?: Maybe<Scalars['BigFloat']>;
  /** Population variance of createdHeight across the matching connection */
  createdHeight?: Maybe<Scalars['BigFloat']>;
  /** Population variance of updatedHeight across the matching connection */
  updatedHeight?: Maybe<Scalars['BigFloat']>;
};

export type CollectionVarianceSampleAggregateFilter = {
  codeId?: InputMaybe<BigFloatFilter>;
  createdHeight?: InputMaybe<BigFloatFilter>;
  updatedHeight?: InputMaybe<BigFloatFilter>;
};

export type CollectionVarianceSampleAggregates = {
  __typename?: 'CollectionVarianceSampleAggregates';
  /** Sample variance of codeId across the matching connection */
  codeId?: Maybe<Scalars['BigFloat']>;
  /** Sample variance of createdHeight across the matching connection */
  createdHeight?: Maybe<Scalars['BigFloat']>;
  /** Sample variance of updatedHeight across the matching connection */
  updatedHeight?: Maybe<Scalars['BigFloat']>;
};

/** A connection to a list of `Collection` values. */
export type CollectionsConnection = {
  __typename?: 'CollectionsConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<CollectionAggregates>;
  /** A list of edges which contains the `Collection` and cursor to aid in pagination. */
  edges: Array<CollectionsEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<CollectionAggregates>>;
  /** A list of `Collection` objects. */
  nodes: Array<Maybe<Collection>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Collection` you could get from the connection. */
  totalCount: Scalars['Int'];
};


/** A connection to a list of `Collection` values. */
export type CollectionsConnectionGroupedAggregatesArgs = {
  groupBy: Array<CollectionsGroupBy>;
  having?: InputMaybe<CollectionsHavingInput>;
};

/** A `Collection` edge in the connection. */
export type CollectionsEdge = {
  __typename?: 'CollectionsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Collection` at the end of the edge. */
  node?: Maybe<Collection>;
};

/** Grouping methods for `Collection` for usage during aggregation. */
export enum CollectionsGroupBy {
  AdminId = 'ADMIN_ID',
  CodeId = 'CODE_ID',
  Cover = 'COVER',
  CreatedAt = 'CREATED_AT',
  CreatedAtTruncatedToDay = 'CREATED_AT_TRUNCATED_TO_DAY',
  CreatedAtTruncatedToHour = 'CREATED_AT_TRUNCATED_TO_HOUR',
  CreatedHeight = 'CREATED_HEIGHT',
  CreatorId = 'CREATOR_ID',
  Description = 'DESCRIPTION',
  ExternalUrls = 'EXTERNAL_URLS',
  Image = 'IMAGE',
  Label = 'LABEL',
  Name = 'NAME',
  Symbol = 'SYMBOL',
  UpdatedAt = 'UPDATED_AT',
  UpdatedAtTruncatedToDay = 'UPDATED_AT_TRUNCATED_TO_DAY',
  UpdatedAtTruncatedToHour = 'UPDATED_AT_TRUNCATED_TO_HOUR',
  UpdatedHeight = 'UPDATED_HEIGHT',
  Uri = 'URI',
  Verified = 'VERIFIED'
}

export type CollectionsHavingAverageInput = {
  codeId?: InputMaybe<HavingBigfloatFilter>;
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  createdHeight?: InputMaybe<HavingBigfloatFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
  updatedHeight?: InputMaybe<HavingBigfloatFilter>;
};

export type CollectionsHavingDistinctCountInput = {
  codeId?: InputMaybe<HavingBigfloatFilter>;
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  createdHeight?: InputMaybe<HavingBigfloatFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
  updatedHeight?: InputMaybe<HavingBigfloatFilter>;
};

/** Conditions for `Collection` aggregates. */
export type CollectionsHavingInput = {
  AND?: InputMaybe<Array<CollectionsHavingInput>>;
  OR?: InputMaybe<Array<CollectionsHavingInput>>;
  average?: InputMaybe<CollectionsHavingAverageInput>;
  distinctCount?: InputMaybe<CollectionsHavingDistinctCountInput>;
  max?: InputMaybe<CollectionsHavingMaxInput>;
  min?: InputMaybe<CollectionsHavingMinInput>;
  stddevPopulation?: InputMaybe<CollectionsHavingStddevPopulationInput>;
  stddevSample?: InputMaybe<CollectionsHavingStddevSampleInput>;
  sum?: InputMaybe<CollectionsHavingSumInput>;
  variancePopulation?: InputMaybe<CollectionsHavingVariancePopulationInput>;
  varianceSample?: InputMaybe<CollectionsHavingVarianceSampleInput>;
};

export type CollectionsHavingMaxInput = {
  codeId?: InputMaybe<HavingBigfloatFilter>;
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  createdHeight?: InputMaybe<HavingBigfloatFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
  updatedHeight?: InputMaybe<HavingBigfloatFilter>;
};

export type CollectionsHavingMinInput = {
  codeId?: InputMaybe<HavingBigfloatFilter>;
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  createdHeight?: InputMaybe<HavingBigfloatFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
  updatedHeight?: InputMaybe<HavingBigfloatFilter>;
};

export type CollectionsHavingStddevPopulationInput = {
  codeId?: InputMaybe<HavingBigfloatFilter>;
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  createdHeight?: InputMaybe<HavingBigfloatFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
  updatedHeight?: InputMaybe<HavingBigfloatFilter>;
};

export type CollectionsHavingStddevSampleInput = {
  codeId?: InputMaybe<HavingBigfloatFilter>;
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  createdHeight?: InputMaybe<HavingBigfloatFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
  updatedHeight?: InputMaybe<HavingBigfloatFilter>;
};

export type CollectionsHavingSumInput = {
  codeId?: InputMaybe<HavingBigfloatFilter>;
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  createdHeight?: InputMaybe<HavingBigfloatFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
  updatedHeight?: InputMaybe<HavingBigfloatFilter>;
};

export type CollectionsHavingVariancePopulationInput = {
  codeId?: InputMaybe<HavingBigfloatFilter>;
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  createdHeight?: InputMaybe<HavingBigfloatFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
  updatedHeight?: InputMaybe<HavingBigfloatFilter>;
};

export type CollectionsHavingVarianceSampleInput = {
  codeId?: InputMaybe<HavingBigfloatFilter>;
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  createdHeight?: InputMaybe<HavingBigfloatFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
  updatedHeight?: InputMaybe<HavingBigfloatFilter>;
};

/** Methods to use when ordering `Collection`. */
export enum CollectionsOrderBy {
  AdminIdAsc = 'ADMIN_ID_ASC',
  AdminIdDesc = 'ADMIN_ID_DESC',
  CodeIdAsc = 'CODE_ID_ASC',
  CodeIdDesc = 'CODE_ID_DESC',
  CoverAsc = 'COVER_ASC',
  CoverDesc = 'COVER_DESC',
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  CreatedHeightAsc = 'CREATED_HEIGHT_ASC',
  CreatedHeightDesc = 'CREATED_HEIGHT_DESC',
  CreatorIdAsc = 'CREATOR_ID_ASC',
  CreatorIdDesc = 'CREATOR_ID_DESC',
  DescriptionAsc = 'DESCRIPTION_ASC',
  DescriptionDesc = 'DESCRIPTION_DESC',
  ExternalUrlsAsc = 'EXTERNAL_URLS_ASC',
  ExternalUrlsDesc = 'EXTERNAL_URLS_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  ImageAsc = 'IMAGE_ASC',
  ImageDesc = 'IMAGE_DESC',
  LabelAsc = 'LABEL_ASC',
  LabelDesc = 'LABEL_DESC',
  LaunchpartiesAverageCollectionIdAsc = 'LAUNCHPARTIES_AVERAGE_COLLECTION_ID_ASC',
  LaunchpartiesAverageCollectionIdDesc = 'LAUNCHPARTIES_AVERAGE_COLLECTION_ID_DESC',
  LaunchpartiesAverageCreatedAtAsc = 'LAUNCHPARTIES_AVERAGE_CREATED_AT_ASC',
  LaunchpartiesAverageCreatedAtDesc = 'LAUNCHPARTIES_AVERAGE_CREATED_AT_DESC',
  LaunchpartiesAverageCreatedHeightAsc = 'LAUNCHPARTIES_AVERAGE_CREATED_HEIGHT_ASC',
  LaunchpartiesAverageCreatedHeightDesc = 'LAUNCHPARTIES_AVERAGE_CREATED_HEIGHT_DESC',
  LaunchpartiesAverageCreatorIdAsc = 'LAUNCHPARTIES_AVERAGE_CREATOR_ID_ASC',
  LaunchpartiesAverageCreatorIdDesc = 'LAUNCHPARTIES_AVERAGE_CREATOR_ID_DESC',
  LaunchpartiesAverageIdAsc = 'LAUNCHPARTIES_AVERAGE_ID_ASC',
  LaunchpartiesAverageIdDesc = 'LAUNCHPARTIES_AVERAGE_ID_DESC',
  LaunchpartiesAverageMaxEditionsAsc = 'LAUNCHPARTIES_AVERAGE_MAX_EDITIONS_ASC',
  LaunchpartiesAverageMaxEditionsDesc = 'LAUNCHPARTIES_AVERAGE_MAX_EDITIONS_DESC',
  LaunchpartiesAverageNameAsc = 'LAUNCHPARTIES_AVERAGE_NAME_ASC',
  LaunchpartiesAverageNameDesc = 'LAUNCHPARTIES_AVERAGE_NAME_DESC',
  LaunchpartiesAveragePaymentAddressAsc = 'LAUNCHPARTIES_AVERAGE_PAYMENT_ADDRESS_ASC',
  LaunchpartiesAveragePaymentAddressDesc = 'LAUNCHPARTIES_AVERAGE_PAYMENT_ADDRESS_DESC',
  LaunchpartiesAveragePriceAsc = 'LAUNCHPARTIES_AVERAGE_PRICE_ASC',
  LaunchpartiesAveragePriceDesc = 'LAUNCHPARTIES_AVERAGE_PRICE_DESC',
  LaunchpartiesAverageSellerFeeBpsAsc = 'LAUNCHPARTIES_AVERAGE_SELLER_FEE_BPS_ASC',
  LaunchpartiesAverageSellerFeeBpsDesc = 'LAUNCHPARTIES_AVERAGE_SELLER_FEE_BPS_DESC',
  LaunchpartiesAverageStartTimeAsc = 'LAUNCHPARTIES_AVERAGE_START_TIME_ASC',
  LaunchpartiesAverageStartTimeDesc = 'LAUNCHPARTIES_AVERAGE_START_TIME_DESC',
  LaunchpartiesAverageSymbolAsc = 'LAUNCHPARTIES_AVERAGE_SYMBOL_ASC',
  LaunchpartiesAverageSymbolDesc = 'LAUNCHPARTIES_AVERAGE_SYMBOL_DESC',
  LaunchpartiesAverageUpdatedAtAsc = 'LAUNCHPARTIES_AVERAGE_UPDATED_AT_ASC',
  LaunchpartiesAverageUpdatedAtDesc = 'LAUNCHPARTIES_AVERAGE_UPDATED_AT_DESC',
  LaunchpartiesAverageUpdatedHeightAsc = 'LAUNCHPARTIES_AVERAGE_UPDATED_HEIGHT_ASC',
  LaunchpartiesAverageUpdatedHeightDesc = 'LAUNCHPARTIES_AVERAGE_UPDATED_HEIGHT_DESC',
  LaunchpartiesCountAsc = 'LAUNCHPARTIES_COUNT_ASC',
  LaunchpartiesCountDesc = 'LAUNCHPARTIES_COUNT_DESC',
  LaunchpartiesDistinctCountCollectionIdAsc = 'LAUNCHPARTIES_DISTINCT_COUNT_COLLECTION_ID_ASC',
  LaunchpartiesDistinctCountCollectionIdDesc = 'LAUNCHPARTIES_DISTINCT_COUNT_COLLECTION_ID_DESC',
  LaunchpartiesDistinctCountCreatedAtAsc = 'LAUNCHPARTIES_DISTINCT_COUNT_CREATED_AT_ASC',
  LaunchpartiesDistinctCountCreatedAtDesc = 'LAUNCHPARTIES_DISTINCT_COUNT_CREATED_AT_DESC',
  LaunchpartiesDistinctCountCreatedHeightAsc = 'LAUNCHPARTIES_DISTINCT_COUNT_CREATED_HEIGHT_ASC',
  LaunchpartiesDistinctCountCreatedHeightDesc = 'LAUNCHPARTIES_DISTINCT_COUNT_CREATED_HEIGHT_DESC',
  LaunchpartiesDistinctCountCreatorIdAsc = 'LAUNCHPARTIES_DISTINCT_COUNT_CREATOR_ID_ASC',
  LaunchpartiesDistinctCountCreatorIdDesc = 'LAUNCHPARTIES_DISTINCT_COUNT_CREATOR_ID_DESC',
  LaunchpartiesDistinctCountIdAsc = 'LAUNCHPARTIES_DISTINCT_COUNT_ID_ASC',
  LaunchpartiesDistinctCountIdDesc = 'LAUNCHPARTIES_DISTINCT_COUNT_ID_DESC',
  LaunchpartiesDistinctCountMaxEditionsAsc = 'LAUNCHPARTIES_DISTINCT_COUNT_MAX_EDITIONS_ASC',
  LaunchpartiesDistinctCountMaxEditionsDesc = 'LAUNCHPARTIES_DISTINCT_COUNT_MAX_EDITIONS_DESC',
  LaunchpartiesDistinctCountNameAsc = 'LAUNCHPARTIES_DISTINCT_COUNT_NAME_ASC',
  LaunchpartiesDistinctCountNameDesc = 'LAUNCHPARTIES_DISTINCT_COUNT_NAME_DESC',
  LaunchpartiesDistinctCountPaymentAddressAsc = 'LAUNCHPARTIES_DISTINCT_COUNT_PAYMENT_ADDRESS_ASC',
  LaunchpartiesDistinctCountPaymentAddressDesc = 'LAUNCHPARTIES_DISTINCT_COUNT_PAYMENT_ADDRESS_DESC',
  LaunchpartiesDistinctCountPriceAsc = 'LAUNCHPARTIES_DISTINCT_COUNT_PRICE_ASC',
  LaunchpartiesDistinctCountPriceDesc = 'LAUNCHPARTIES_DISTINCT_COUNT_PRICE_DESC',
  LaunchpartiesDistinctCountSellerFeeBpsAsc = 'LAUNCHPARTIES_DISTINCT_COUNT_SELLER_FEE_BPS_ASC',
  LaunchpartiesDistinctCountSellerFeeBpsDesc = 'LAUNCHPARTIES_DISTINCT_COUNT_SELLER_FEE_BPS_DESC',
  LaunchpartiesDistinctCountStartTimeAsc = 'LAUNCHPARTIES_DISTINCT_COUNT_START_TIME_ASC',
  LaunchpartiesDistinctCountStartTimeDesc = 'LAUNCHPARTIES_DISTINCT_COUNT_START_TIME_DESC',
  LaunchpartiesDistinctCountSymbolAsc = 'LAUNCHPARTIES_DISTINCT_COUNT_SYMBOL_ASC',
  LaunchpartiesDistinctCountSymbolDesc = 'LAUNCHPARTIES_DISTINCT_COUNT_SYMBOL_DESC',
  LaunchpartiesDistinctCountUpdatedAtAsc = 'LAUNCHPARTIES_DISTINCT_COUNT_UPDATED_AT_ASC',
  LaunchpartiesDistinctCountUpdatedAtDesc = 'LAUNCHPARTIES_DISTINCT_COUNT_UPDATED_AT_DESC',
  LaunchpartiesDistinctCountUpdatedHeightAsc = 'LAUNCHPARTIES_DISTINCT_COUNT_UPDATED_HEIGHT_ASC',
  LaunchpartiesDistinctCountUpdatedHeightDesc = 'LAUNCHPARTIES_DISTINCT_COUNT_UPDATED_HEIGHT_DESC',
  LaunchpartiesMaxCollectionIdAsc = 'LAUNCHPARTIES_MAX_COLLECTION_ID_ASC',
  LaunchpartiesMaxCollectionIdDesc = 'LAUNCHPARTIES_MAX_COLLECTION_ID_DESC',
  LaunchpartiesMaxCreatedAtAsc = 'LAUNCHPARTIES_MAX_CREATED_AT_ASC',
  LaunchpartiesMaxCreatedAtDesc = 'LAUNCHPARTIES_MAX_CREATED_AT_DESC',
  LaunchpartiesMaxCreatedHeightAsc = 'LAUNCHPARTIES_MAX_CREATED_HEIGHT_ASC',
  LaunchpartiesMaxCreatedHeightDesc = 'LAUNCHPARTIES_MAX_CREATED_HEIGHT_DESC',
  LaunchpartiesMaxCreatorIdAsc = 'LAUNCHPARTIES_MAX_CREATOR_ID_ASC',
  LaunchpartiesMaxCreatorIdDesc = 'LAUNCHPARTIES_MAX_CREATOR_ID_DESC',
  LaunchpartiesMaxIdAsc = 'LAUNCHPARTIES_MAX_ID_ASC',
  LaunchpartiesMaxIdDesc = 'LAUNCHPARTIES_MAX_ID_DESC',
  LaunchpartiesMaxMaxEditionsAsc = 'LAUNCHPARTIES_MAX_MAX_EDITIONS_ASC',
  LaunchpartiesMaxMaxEditionsDesc = 'LAUNCHPARTIES_MAX_MAX_EDITIONS_DESC',
  LaunchpartiesMaxNameAsc = 'LAUNCHPARTIES_MAX_NAME_ASC',
  LaunchpartiesMaxNameDesc = 'LAUNCHPARTIES_MAX_NAME_DESC',
  LaunchpartiesMaxPaymentAddressAsc = 'LAUNCHPARTIES_MAX_PAYMENT_ADDRESS_ASC',
  LaunchpartiesMaxPaymentAddressDesc = 'LAUNCHPARTIES_MAX_PAYMENT_ADDRESS_DESC',
  LaunchpartiesMaxPriceAsc = 'LAUNCHPARTIES_MAX_PRICE_ASC',
  LaunchpartiesMaxPriceDesc = 'LAUNCHPARTIES_MAX_PRICE_DESC',
  LaunchpartiesMaxSellerFeeBpsAsc = 'LAUNCHPARTIES_MAX_SELLER_FEE_BPS_ASC',
  LaunchpartiesMaxSellerFeeBpsDesc = 'LAUNCHPARTIES_MAX_SELLER_FEE_BPS_DESC',
  LaunchpartiesMaxStartTimeAsc = 'LAUNCHPARTIES_MAX_START_TIME_ASC',
  LaunchpartiesMaxStartTimeDesc = 'LAUNCHPARTIES_MAX_START_TIME_DESC',
  LaunchpartiesMaxSymbolAsc = 'LAUNCHPARTIES_MAX_SYMBOL_ASC',
  LaunchpartiesMaxSymbolDesc = 'LAUNCHPARTIES_MAX_SYMBOL_DESC',
  LaunchpartiesMaxUpdatedAtAsc = 'LAUNCHPARTIES_MAX_UPDATED_AT_ASC',
  LaunchpartiesMaxUpdatedAtDesc = 'LAUNCHPARTIES_MAX_UPDATED_AT_DESC',
  LaunchpartiesMaxUpdatedHeightAsc = 'LAUNCHPARTIES_MAX_UPDATED_HEIGHT_ASC',
  LaunchpartiesMaxUpdatedHeightDesc = 'LAUNCHPARTIES_MAX_UPDATED_HEIGHT_DESC',
  LaunchpartiesMinCollectionIdAsc = 'LAUNCHPARTIES_MIN_COLLECTION_ID_ASC',
  LaunchpartiesMinCollectionIdDesc = 'LAUNCHPARTIES_MIN_COLLECTION_ID_DESC',
  LaunchpartiesMinCreatedAtAsc = 'LAUNCHPARTIES_MIN_CREATED_AT_ASC',
  LaunchpartiesMinCreatedAtDesc = 'LAUNCHPARTIES_MIN_CREATED_AT_DESC',
  LaunchpartiesMinCreatedHeightAsc = 'LAUNCHPARTIES_MIN_CREATED_HEIGHT_ASC',
  LaunchpartiesMinCreatedHeightDesc = 'LAUNCHPARTIES_MIN_CREATED_HEIGHT_DESC',
  LaunchpartiesMinCreatorIdAsc = 'LAUNCHPARTIES_MIN_CREATOR_ID_ASC',
  LaunchpartiesMinCreatorIdDesc = 'LAUNCHPARTIES_MIN_CREATOR_ID_DESC',
  LaunchpartiesMinIdAsc = 'LAUNCHPARTIES_MIN_ID_ASC',
  LaunchpartiesMinIdDesc = 'LAUNCHPARTIES_MIN_ID_DESC',
  LaunchpartiesMinMaxEditionsAsc = 'LAUNCHPARTIES_MIN_MAX_EDITIONS_ASC',
  LaunchpartiesMinMaxEditionsDesc = 'LAUNCHPARTIES_MIN_MAX_EDITIONS_DESC',
  LaunchpartiesMinNameAsc = 'LAUNCHPARTIES_MIN_NAME_ASC',
  LaunchpartiesMinNameDesc = 'LAUNCHPARTIES_MIN_NAME_DESC',
  LaunchpartiesMinPaymentAddressAsc = 'LAUNCHPARTIES_MIN_PAYMENT_ADDRESS_ASC',
  LaunchpartiesMinPaymentAddressDesc = 'LAUNCHPARTIES_MIN_PAYMENT_ADDRESS_DESC',
  LaunchpartiesMinPriceAsc = 'LAUNCHPARTIES_MIN_PRICE_ASC',
  LaunchpartiesMinPriceDesc = 'LAUNCHPARTIES_MIN_PRICE_DESC',
  LaunchpartiesMinSellerFeeBpsAsc = 'LAUNCHPARTIES_MIN_SELLER_FEE_BPS_ASC',
  LaunchpartiesMinSellerFeeBpsDesc = 'LAUNCHPARTIES_MIN_SELLER_FEE_BPS_DESC',
  LaunchpartiesMinStartTimeAsc = 'LAUNCHPARTIES_MIN_START_TIME_ASC',
  LaunchpartiesMinStartTimeDesc = 'LAUNCHPARTIES_MIN_START_TIME_DESC',
  LaunchpartiesMinSymbolAsc = 'LAUNCHPARTIES_MIN_SYMBOL_ASC',
  LaunchpartiesMinSymbolDesc = 'LAUNCHPARTIES_MIN_SYMBOL_DESC',
  LaunchpartiesMinUpdatedAtAsc = 'LAUNCHPARTIES_MIN_UPDATED_AT_ASC',
  LaunchpartiesMinUpdatedAtDesc = 'LAUNCHPARTIES_MIN_UPDATED_AT_DESC',
  LaunchpartiesMinUpdatedHeightAsc = 'LAUNCHPARTIES_MIN_UPDATED_HEIGHT_ASC',
  LaunchpartiesMinUpdatedHeightDesc = 'LAUNCHPARTIES_MIN_UPDATED_HEIGHT_DESC',
  LaunchpartiesStddevPopulationCollectionIdAsc = 'LAUNCHPARTIES_STDDEV_POPULATION_COLLECTION_ID_ASC',
  LaunchpartiesStddevPopulationCollectionIdDesc = 'LAUNCHPARTIES_STDDEV_POPULATION_COLLECTION_ID_DESC',
  LaunchpartiesStddevPopulationCreatedAtAsc = 'LAUNCHPARTIES_STDDEV_POPULATION_CREATED_AT_ASC',
  LaunchpartiesStddevPopulationCreatedAtDesc = 'LAUNCHPARTIES_STDDEV_POPULATION_CREATED_AT_DESC',
  LaunchpartiesStddevPopulationCreatedHeightAsc = 'LAUNCHPARTIES_STDDEV_POPULATION_CREATED_HEIGHT_ASC',
  LaunchpartiesStddevPopulationCreatedHeightDesc = 'LAUNCHPARTIES_STDDEV_POPULATION_CREATED_HEIGHT_DESC',
  LaunchpartiesStddevPopulationCreatorIdAsc = 'LAUNCHPARTIES_STDDEV_POPULATION_CREATOR_ID_ASC',
  LaunchpartiesStddevPopulationCreatorIdDesc = 'LAUNCHPARTIES_STDDEV_POPULATION_CREATOR_ID_DESC',
  LaunchpartiesStddevPopulationIdAsc = 'LAUNCHPARTIES_STDDEV_POPULATION_ID_ASC',
  LaunchpartiesStddevPopulationIdDesc = 'LAUNCHPARTIES_STDDEV_POPULATION_ID_DESC',
  LaunchpartiesStddevPopulationMaxEditionsAsc = 'LAUNCHPARTIES_STDDEV_POPULATION_MAX_EDITIONS_ASC',
  LaunchpartiesStddevPopulationMaxEditionsDesc = 'LAUNCHPARTIES_STDDEV_POPULATION_MAX_EDITIONS_DESC',
  LaunchpartiesStddevPopulationNameAsc = 'LAUNCHPARTIES_STDDEV_POPULATION_NAME_ASC',
  LaunchpartiesStddevPopulationNameDesc = 'LAUNCHPARTIES_STDDEV_POPULATION_NAME_DESC',
  LaunchpartiesStddevPopulationPaymentAddressAsc = 'LAUNCHPARTIES_STDDEV_POPULATION_PAYMENT_ADDRESS_ASC',
  LaunchpartiesStddevPopulationPaymentAddressDesc = 'LAUNCHPARTIES_STDDEV_POPULATION_PAYMENT_ADDRESS_DESC',
  LaunchpartiesStddevPopulationPriceAsc = 'LAUNCHPARTIES_STDDEV_POPULATION_PRICE_ASC',
  LaunchpartiesStddevPopulationPriceDesc = 'LAUNCHPARTIES_STDDEV_POPULATION_PRICE_DESC',
  LaunchpartiesStddevPopulationSellerFeeBpsAsc = 'LAUNCHPARTIES_STDDEV_POPULATION_SELLER_FEE_BPS_ASC',
  LaunchpartiesStddevPopulationSellerFeeBpsDesc = 'LAUNCHPARTIES_STDDEV_POPULATION_SELLER_FEE_BPS_DESC',
  LaunchpartiesStddevPopulationStartTimeAsc = 'LAUNCHPARTIES_STDDEV_POPULATION_START_TIME_ASC',
  LaunchpartiesStddevPopulationStartTimeDesc = 'LAUNCHPARTIES_STDDEV_POPULATION_START_TIME_DESC',
  LaunchpartiesStddevPopulationSymbolAsc = 'LAUNCHPARTIES_STDDEV_POPULATION_SYMBOL_ASC',
  LaunchpartiesStddevPopulationSymbolDesc = 'LAUNCHPARTIES_STDDEV_POPULATION_SYMBOL_DESC',
  LaunchpartiesStddevPopulationUpdatedAtAsc = 'LAUNCHPARTIES_STDDEV_POPULATION_UPDATED_AT_ASC',
  LaunchpartiesStddevPopulationUpdatedAtDesc = 'LAUNCHPARTIES_STDDEV_POPULATION_UPDATED_AT_DESC',
  LaunchpartiesStddevPopulationUpdatedHeightAsc = 'LAUNCHPARTIES_STDDEV_POPULATION_UPDATED_HEIGHT_ASC',
  LaunchpartiesStddevPopulationUpdatedHeightDesc = 'LAUNCHPARTIES_STDDEV_POPULATION_UPDATED_HEIGHT_DESC',
  LaunchpartiesStddevSampleCollectionIdAsc = 'LAUNCHPARTIES_STDDEV_SAMPLE_COLLECTION_ID_ASC',
  LaunchpartiesStddevSampleCollectionIdDesc = 'LAUNCHPARTIES_STDDEV_SAMPLE_COLLECTION_ID_DESC',
  LaunchpartiesStddevSampleCreatedAtAsc = 'LAUNCHPARTIES_STDDEV_SAMPLE_CREATED_AT_ASC',
  LaunchpartiesStddevSampleCreatedAtDesc = 'LAUNCHPARTIES_STDDEV_SAMPLE_CREATED_AT_DESC',
  LaunchpartiesStddevSampleCreatedHeightAsc = 'LAUNCHPARTIES_STDDEV_SAMPLE_CREATED_HEIGHT_ASC',
  LaunchpartiesStddevSampleCreatedHeightDesc = 'LAUNCHPARTIES_STDDEV_SAMPLE_CREATED_HEIGHT_DESC',
  LaunchpartiesStddevSampleCreatorIdAsc = 'LAUNCHPARTIES_STDDEV_SAMPLE_CREATOR_ID_ASC',
  LaunchpartiesStddevSampleCreatorIdDesc = 'LAUNCHPARTIES_STDDEV_SAMPLE_CREATOR_ID_DESC',
  LaunchpartiesStddevSampleIdAsc = 'LAUNCHPARTIES_STDDEV_SAMPLE_ID_ASC',
  LaunchpartiesStddevSampleIdDesc = 'LAUNCHPARTIES_STDDEV_SAMPLE_ID_DESC',
  LaunchpartiesStddevSampleMaxEditionsAsc = 'LAUNCHPARTIES_STDDEV_SAMPLE_MAX_EDITIONS_ASC',
  LaunchpartiesStddevSampleMaxEditionsDesc = 'LAUNCHPARTIES_STDDEV_SAMPLE_MAX_EDITIONS_DESC',
  LaunchpartiesStddevSampleNameAsc = 'LAUNCHPARTIES_STDDEV_SAMPLE_NAME_ASC',
  LaunchpartiesStddevSampleNameDesc = 'LAUNCHPARTIES_STDDEV_SAMPLE_NAME_DESC',
  LaunchpartiesStddevSamplePaymentAddressAsc = 'LAUNCHPARTIES_STDDEV_SAMPLE_PAYMENT_ADDRESS_ASC',
  LaunchpartiesStddevSamplePaymentAddressDesc = 'LAUNCHPARTIES_STDDEV_SAMPLE_PAYMENT_ADDRESS_DESC',
  LaunchpartiesStddevSamplePriceAsc = 'LAUNCHPARTIES_STDDEV_SAMPLE_PRICE_ASC',
  LaunchpartiesStddevSamplePriceDesc = 'LAUNCHPARTIES_STDDEV_SAMPLE_PRICE_DESC',
  LaunchpartiesStddevSampleSellerFeeBpsAsc = 'LAUNCHPARTIES_STDDEV_SAMPLE_SELLER_FEE_BPS_ASC',
  LaunchpartiesStddevSampleSellerFeeBpsDesc = 'LAUNCHPARTIES_STDDEV_SAMPLE_SELLER_FEE_BPS_DESC',
  LaunchpartiesStddevSampleStartTimeAsc = 'LAUNCHPARTIES_STDDEV_SAMPLE_START_TIME_ASC',
  LaunchpartiesStddevSampleStartTimeDesc = 'LAUNCHPARTIES_STDDEV_SAMPLE_START_TIME_DESC',
  LaunchpartiesStddevSampleSymbolAsc = 'LAUNCHPARTIES_STDDEV_SAMPLE_SYMBOL_ASC',
  LaunchpartiesStddevSampleSymbolDesc = 'LAUNCHPARTIES_STDDEV_SAMPLE_SYMBOL_DESC',
  LaunchpartiesStddevSampleUpdatedAtAsc = 'LAUNCHPARTIES_STDDEV_SAMPLE_UPDATED_AT_ASC',
  LaunchpartiesStddevSampleUpdatedAtDesc = 'LAUNCHPARTIES_STDDEV_SAMPLE_UPDATED_AT_DESC',
  LaunchpartiesStddevSampleUpdatedHeightAsc = 'LAUNCHPARTIES_STDDEV_SAMPLE_UPDATED_HEIGHT_ASC',
  LaunchpartiesStddevSampleUpdatedHeightDesc = 'LAUNCHPARTIES_STDDEV_SAMPLE_UPDATED_HEIGHT_DESC',
  LaunchpartiesSumCollectionIdAsc = 'LAUNCHPARTIES_SUM_COLLECTION_ID_ASC',
  LaunchpartiesSumCollectionIdDesc = 'LAUNCHPARTIES_SUM_COLLECTION_ID_DESC',
  LaunchpartiesSumCreatedAtAsc = 'LAUNCHPARTIES_SUM_CREATED_AT_ASC',
  LaunchpartiesSumCreatedAtDesc = 'LAUNCHPARTIES_SUM_CREATED_AT_DESC',
  LaunchpartiesSumCreatedHeightAsc = 'LAUNCHPARTIES_SUM_CREATED_HEIGHT_ASC',
  LaunchpartiesSumCreatedHeightDesc = 'LAUNCHPARTIES_SUM_CREATED_HEIGHT_DESC',
  LaunchpartiesSumCreatorIdAsc = 'LAUNCHPARTIES_SUM_CREATOR_ID_ASC',
  LaunchpartiesSumCreatorIdDesc = 'LAUNCHPARTIES_SUM_CREATOR_ID_DESC',
  LaunchpartiesSumIdAsc = 'LAUNCHPARTIES_SUM_ID_ASC',
  LaunchpartiesSumIdDesc = 'LAUNCHPARTIES_SUM_ID_DESC',
  LaunchpartiesSumMaxEditionsAsc = 'LAUNCHPARTIES_SUM_MAX_EDITIONS_ASC',
  LaunchpartiesSumMaxEditionsDesc = 'LAUNCHPARTIES_SUM_MAX_EDITIONS_DESC',
  LaunchpartiesSumNameAsc = 'LAUNCHPARTIES_SUM_NAME_ASC',
  LaunchpartiesSumNameDesc = 'LAUNCHPARTIES_SUM_NAME_DESC',
  LaunchpartiesSumPaymentAddressAsc = 'LAUNCHPARTIES_SUM_PAYMENT_ADDRESS_ASC',
  LaunchpartiesSumPaymentAddressDesc = 'LAUNCHPARTIES_SUM_PAYMENT_ADDRESS_DESC',
  LaunchpartiesSumPriceAsc = 'LAUNCHPARTIES_SUM_PRICE_ASC',
  LaunchpartiesSumPriceDesc = 'LAUNCHPARTIES_SUM_PRICE_DESC',
  LaunchpartiesSumSellerFeeBpsAsc = 'LAUNCHPARTIES_SUM_SELLER_FEE_BPS_ASC',
  LaunchpartiesSumSellerFeeBpsDesc = 'LAUNCHPARTIES_SUM_SELLER_FEE_BPS_DESC',
  LaunchpartiesSumStartTimeAsc = 'LAUNCHPARTIES_SUM_START_TIME_ASC',
  LaunchpartiesSumStartTimeDesc = 'LAUNCHPARTIES_SUM_START_TIME_DESC',
  LaunchpartiesSumSymbolAsc = 'LAUNCHPARTIES_SUM_SYMBOL_ASC',
  LaunchpartiesSumSymbolDesc = 'LAUNCHPARTIES_SUM_SYMBOL_DESC',
  LaunchpartiesSumUpdatedAtAsc = 'LAUNCHPARTIES_SUM_UPDATED_AT_ASC',
  LaunchpartiesSumUpdatedAtDesc = 'LAUNCHPARTIES_SUM_UPDATED_AT_DESC',
  LaunchpartiesSumUpdatedHeightAsc = 'LAUNCHPARTIES_SUM_UPDATED_HEIGHT_ASC',
  LaunchpartiesSumUpdatedHeightDesc = 'LAUNCHPARTIES_SUM_UPDATED_HEIGHT_DESC',
  LaunchpartiesVariancePopulationCollectionIdAsc = 'LAUNCHPARTIES_VARIANCE_POPULATION_COLLECTION_ID_ASC',
  LaunchpartiesVariancePopulationCollectionIdDesc = 'LAUNCHPARTIES_VARIANCE_POPULATION_COLLECTION_ID_DESC',
  LaunchpartiesVariancePopulationCreatedAtAsc = 'LAUNCHPARTIES_VARIANCE_POPULATION_CREATED_AT_ASC',
  LaunchpartiesVariancePopulationCreatedAtDesc = 'LAUNCHPARTIES_VARIANCE_POPULATION_CREATED_AT_DESC',
  LaunchpartiesVariancePopulationCreatedHeightAsc = 'LAUNCHPARTIES_VARIANCE_POPULATION_CREATED_HEIGHT_ASC',
  LaunchpartiesVariancePopulationCreatedHeightDesc = 'LAUNCHPARTIES_VARIANCE_POPULATION_CREATED_HEIGHT_DESC',
  LaunchpartiesVariancePopulationCreatorIdAsc = 'LAUNCHPARTIES_VARIANCE_POPULATION_CREATOR_ID_ASC',
  LaunchpartiesVariancePopulationCreatorIdDesc = 'LAUNCHPARTIES_VARIANCE_POPULATION_CREATOR_ID_DESC',
  LaunchpartiesVariancePopulationIdAsc = 'LAUNCHPARTIES_VARIANCE_POPULATION_ID_ASC',
  LaunchpartiesVariancePopulationIdDesc = 'LAUNCHPARTIES_VARIANCE_POPULATION_ID_DESC',
  LaunchpartiesVariancePopulationMaxEditionsAsc = 'LAUNCHPARTIES_VARIANCE_POPULATION_MAX_EDITIONS_ASC',
  LaunchpartiesVariancePopulationMaxEditionsDesc = 'LAUNCHPARTIES_VARIANCE_POPULATION_MAX_EDITIONS_DESC',
  LaunchpartiesVariancePopulationNameAsc = 'LAUNCHPARTIES_VARIANCE_POPULATION_NAME_ASC',
  LaunchpartiesVariancePopulationNameDesc = 'LAUNCHPARTIES_VARIANCE_POPULATION_NAME_DESC',
  LaunchpartiesVariancePopulationPaymentAddressAsc = 'LAUNCHPARTIES_VARIANCE_POPULATION_PAYMENT_ADDRESS_ASC',
  LaunchpartiesVariancePopulationPaymentAddressDesc = 'LAUNCHPARTIES_VARIANCE_POPULATION_PAYMENT_ADDRESS_DESC',
  LaunchpartiesVariancePopulationPriceAsc = 'LAUNCHPARTIES_VARIANCE_POPULATION_PRICE_ASC',
  LaunchpartiesVariancePopulationPriceDesc = 'LAUNCHPARTIES_VARIANCE_POPULATION_PRICE_DESC',
  LaunchpartiesVariancePopulationSellerFeeBpsAsc = 'LAUNCHPARTIES_VARIANCE_POPULATION_SELLER_FEE_BPS_ASC',
  LaunchpartiesVariancePopulationSellerFeeBpsDesc = 'LAUNCHPARTIES_VARIANCE_POPULATION_SELLER_FEE_BPS_DESC',
  LaunchpartiesVariancePopulationStartTimeAsc = 'LAUNCHPARTIES_VARIANCE_POPULATION_START_TIME_ASC',
  LaunchpartiesVariancePopulationStartTimeDesc = 'LAUNCHPARTIES_VARIANCE_POPULATION_START_TIME_DESC',
  LaunchpartiesVariancePopulationSymbolAsc = 'LAUNCHPARTIES_VARIANCE_POPULATION_SYMBOL_ASC',
  LaunchpartiesVariancePopulationSymbolDesc = 'LAUNCHPARTIES_VARIANCE_POPULATION_SYMBOL_DESC',
  LaunchpartiesVariancePopulationUpdatedAtAsc = 'LAUNCHPARTIES_VARIANCE_POPULATION_UPDATED_AT_ASC',
  LaunchpartiesVariancePopulationUpdatedAtDesc = 'LAUNCHPARTIES_VARIANCE_POPULATION_UPDATED_AT_DESC',
  LaunchpartiesVariancePopulationUpdatedHeightAsc = 'LAUNCHPARTIES_VARIANCE_POPULATION_UPDATED_HEIGHT_ASC',
  LaunchpartiesVariancePopulationUpdatedHeightDesc = 'LAUNCHPARTIES_VARIANCE_POPULATION_UPDATED_HEIGHT_DESC',
  LaunchpartiesVarianceSampleCollectionIdAsc = 'LAUNCHPARTIES_VARIANCE_SAMPLE_COLLECTION_ID_ASC',
  LaunchpartiesVarianceSampleCollectionIdDesc = 'LAUNCHPARTIES_VARIANCE_SAMPLE_COLLECTION_ID_DESC',
  LaunchpartiesVarianceSampleCreatedAtAsc = 'LAUNCHPARTIES_VARIANCE_SAMPLE_CREATED_AT_ASC',
  LaunchpartiesVarianceSampleCreatedAtDesc = 'LAUNCHPARTIES_VARIANCE_SAMPLE_CREATED_AT_DESC',
  LaunchpartiesVarianceSampleCreatedHeightAsc = 'LAUNCHPARTIES_VARIANCE_SAMPLE_CREATED_HEIGHT_ASC',
  LaunchpartiesVarianceSampleCreatedHeightDesc = 'LAUNCHPARTIES_VARIANCE_SAMPLE_CREATED_HEIGHT_DESC',
  LaunchpartiesVarianceSampleCreatorIdAsc = 'LAUNCHPARTIES_VARIANCE_SAMPLE_CREATOR_ID_ASC',
  LaunchpartiesVarianceSampleCreatorIdDesc = 'LAUNCHPARTIES_VARIANCE_SAMPLE_CREATOR_ID_DESC',
  LaunchpartiesVarianceSampleIdAsc = 'LAUNCHPARTIES_VARIANCE_SAMPLE_ID_ASC',
  LaunchpartiesVarianceSampleIdDesc = 'LAUNCHPARTIES_VARIANCE_SAMPLE_ID_DESC',
  LaunchpartiesVarianceSampleMaxEditionsAsc = 'LAUNCHPARTIES_VARIANCE_SAMPLE_MAX_EDITIONS_ASC',
  LaunchpartiesVarianceSampleMaxEditionsDesc = 'LAUNCHPARTIES_VARIANCE_SAMPLE_MAX_EDITIONS_DESC',
  LaunchpartiesVarianceSampleNameAsc = 'LAUNCHPARTIES_VARIANCE_SAMPLE_NAME_ASC',
  LaunchpartiesVarianceSampleNameDesc = 'LAUNCHPARTIES_VARIANCE_SAMPLE_NAME_DESC',
  LaunchpartiesVarianceSamplePaymentAddressAsc = 'LAUNCHPARTIES_VARIANCE_SAMPLE_PAYMENT_ADDRESS_ASC',
  LaunchpartiesVarianceSamplePaymentAddressDesc = 'LAUNCHPARTIES_VARIANCE_SAMPLE_PAYMENT_ADDRESS_DESC',
  LaunchpartiesVarianceSamplePriceAsc = 'LAUNCHPARTIES_VARIANCE_SAMPLE_PRICE_ASC',
  LaunchpartiesVarianceSamplePriceDesc = 'LAUNCHPARTIES_VARIANCE_SAMPLE_PRICE_DESC',
  LaunchpartiesVarianceSampleSellerFeeBpsAsc = 'LAUNCHPARTIES_VARIANCE_SAMPLE_SELLER_FEE_BPS_ASC',
  LaunchpartiesVarianceSampleSellerFeeBpsDesc = 'LAUNCHPARTIES_VARIANCE_SAMPLE_SELLER_FEE_BPS_DESC',
  LaunchpartiesVarianceSampleStartTimeAsc = 'LAUNCHPARTIES_VARIANCE_SAMPLE_START_TIME_ASC',
  LaunchpartiesVarianceSampleStartTimeDesc = 'LAUNCHPARTIES_VARIANCE_SAMPLE_START_TIME_DESC',
  LaunchpartiesVarianceSampleSymbolAsc = 'LAUNCHPARTIES_VARIANCE_SAMPLE_SYMBOL_ASC',
  LaunchpartiesVarianceSampleSymbolDesc = 'LAUNCHPARTIES_VARIANCE_SAMPLE_SYMBOL_DESC',
  LaunchpartiesVarianceSampleUpdatedAtAsc = 'LAUNCHPARTIES_VARIANCE_SAMPLE_UPDATED_AT_ASC',
  LaunchpartiesVarianceSampleUpdatedAtDesc = 'LAUNCHPARTIES_VARIANCE_SAMPLE_UPDATED_AT_DESC',
  LaunchpartiesVarianceSampleUpdatedHeightAsc = 'LAUNCHPARTIES_VARIANCE_SAMPLE_UPDATED_HEIGHT_ASC',
  LaunchpartiesVarianceSampleUpdatedHeightDesc = 'LAUNCHPARTIES_VARIANCE_SAMPLE_UPDATED_HEIGHT_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  NftsAverageCollectionIdAsc = 'NFTS_AVERAGE_COLLECTION_ID_ASC',
  NftsAverageCollectionIdDesc = 'NFTS_AVERAGE_COLLECTION_ID_DESC',
  NftsAverageCreatedAtAsc = 'NFTS_AVERAGE_CREATED_AT_ASC',
  NftsAverageCreatedAtDesc = 'NFTS_AVERAGE_CREATED_AT_DESC',
  NftsAverageCreatedHeightAsc = 'NFTS_AVERAGE_CREATED_HEIGHT_ASC',
  NftsAverageCreatedHeightDesc = 'NFTS_AVERAGE_CREATED_HEIGHT_DESC',
  NftsAverageIdAsc = 'NFTS_AVERAGE_ID_ASC',
  NftsAverageIdDesc = 'NFTS_AVERAGE_ID_DESC',
  NftsAverageMetadataIdAsc = 'NFTS_AVERAGE_METADATA_ID_ASC',
  NftsAverageMetadataIdDesc = 'NFTS_AVERAGE_METADATA_ID_DESC',
  NftsAverageMinterIdAsc = 'NFTS_AVERAGE_MINTER_ID_ASC',
  NftsAverageMinterIdDesc = 'NFTS_AVERAGE_MINTER_ID_DESC',
  NftsAverageOwnerIdAsc = 'NFTS_AVERAGE_OWNER_ID_ASC',
  NftsAverageOwnerIdDesc = 'NFTS_AVERAGE_OWNER_ID_DESC',
  NftsAveragePaymentAddressAsc = 'NFTS_AVERAGE_PAYMENT_ADDRESS_ASC',
  NftsAveragePaymentAddressDesc = 'NFTS_AVERAGE_PAYMENT_ADDRESS_DESC',
  NftsAverageSellerFeeAsc = 'NFTS_AVERAGE_SELLER_FEE_ASC',
  NftsAverageSellerFeeDesc = 'NFTS_AVERAGE_SELLER_FEE_DESC',
  NftsAverageTokenIdAsc = 'NFTS_AVERAGE_TOKEN_ID_ASC',
  NftsAverageTokenIdDesc = 'NFTS_AVERAGE_TOKEN_ID_DESC',
  NftsAverageUpdatedAtAsc = 'NFTS_AVERAGE_UPDATED_AT_ASC',
  NftsAverageUpdatedAtDesc = 'NFTS_AVERAGE_UPDATED_AT_DESC',
  NftsAverageUpdatedHeightAsc = 'NFTS_AVERAGE_UPDATED_HEIGHT_ASC',
  NftsAverageUpdatedHeightDesc = 'NFTS_AVERAGE_UPDATED_HEIGHT_DESC',
  NftsAverageUriAsc = 'NFTS_AVERAGE_URI_ASC',
  NftsAverageUriDesc = 'NFTS_AVERAGE_URI_DESC',
  NftsCountAsc = 'NFTS_COUNT_ASC',
  NftsCountDesc = 'NFTS_COUNT_DESC',
  NftsDistinctCountCollectionIdAsc = 'NFTS_DISTINCT_COUNT_COLLECTION_ID_ASC',
  NftsDistinctCountCollectionIdDesc = 'NFTS_DISTINCT_COUNT_COLLECTION_ID_DESC',
  NftsDistinctCountCreatedAtAsc = 'NFTS_DISTINCT_COUNT_CREATED_AT_ASC',
  NftsDistinctCountCreatedAtDesc = 'NFTS_DISTINCT_COUNT_CREATED_AT_DESC',
  NftsDistinctCountCreatedHeightAsc = 'NFTS_DISTINCT_COUNT_CREATED_HEIGHT_ASC',
  NftsDistinctCountCreatedHeightDesc = 'NFTS_DISTINCT_COUNT_CREATED_HEIGHT_DESC',
  NftsDistinctCountIdAsc = 'NFTS_DISTINCT_COUNT_ID_ASC',
  NftsDistinctCountIdDesc = 'NFTS_DISTINCT_COUNT_ID_DESC',
  NftsDistinctCountMetadataIdAsc = 'NFTS_DISTINCT_COUNT_METADATA_ID_ASC',
  NftsDistinctCountMetadataIdDesc = 'NFTS_DISTINCT_COUNT_METADATA_ID_DESC',
  NftsDistinctCountMinterIdAsc = 'NFTS_DISTINCT_COUNT_MINTER_ID_ASC',
  NftsDistinctCountMinterIdDesc = 'NFTS_DISTINCT_COUNT_MINTER_ID_DESC',
  NftsDistinctCountOwnerIdAsc = 'NFTS_DISTINCT_COUNT_OWNER_ID_ASC',
  NftsDistinctCountOwnerIdDesc = 'NFTS_DISTINCT_COUNT_OWNER_ID_DESC',
  NftsDistinctCountPaymentAddressAsc = 'NFTS_DISTINCT_COUNT_PAYMENT_ADDRESS_ASC',
  NftsDistinctCountPaymentAddressDesc = 'NFTS_DISTINCT_COUNT_PAYMENT_ADDRESS_DESC',
  NftsDistinctCountSellerFeeAsc = 'NFTS_DISTINCT_COUNT_SELLER_FEE_ASC',
  NftsDistinctCountSellerFeeDesc = 'NFTS_DISTINCT_COUNT_SELLER_FEE_DESC',
  NftsDistinctCountTokenIdAsc = 'NFTS_DISTINCT_COUNT_TOKEN_ID_ASC',
  NftsDistinctCountTokenIdDesc = 'NFTS_DISTINCT_COUNT_TOKEN_ID_DESC',
  NftsDistinctCountUpdatedAtAsc = 'NFTS_DISTINCT_COUNT_UPDATED_AT_ASC',
  NftsDistinctCountUpdatedAtDesc = 'NFTS_DISTINCT_COUNT_UPDATED_AT_DESC',
  NftsDistinctCountUpdatedHeightAsc = 'NFTS_DISTINCT_COUNT_UPDATED_HEIGHT_ASC',
  NftsDistinctCountUpdatedHeightDesc = 'NFTS_DISTINCT_COUNT_UPDATED_HEIGHT_DESC',
  NftsDistinctCountUriAsc = 'NFTS_DISTINCT_COUNT_URI_ASC',
  NftsDistinctCountUriDesc = 'NFTS_DISTINCT_COUNT_URI_DESC',
  NftsMaxCollectionIdAsc = 'NFTS_MAX_COLLECTION_ID_ASC',
  NftsMaxCollectionIdDesc = 'NFTS_MAX_COLLECTION_ID_DESC',
  NftsMaxCreatedAtAsc = 'NFTS_MAX_CREATED_AT_ASC',
  NftsMaxCreatedAtDesc = 'NFTS_MAX_CREATED_AT_DESC',
  NftsMaxCreatedHeightAsc = 'NFTS_MAX_CREATED_HEIGHT_ASC',
  NftsMaxCreatedHeightDesc = 'NFTS_MAX_CREATED_HEIGHT_DESC',
  NftsMaxIdAsc = 'NFTS_MAX_ID_ASC',
  NftsMaxIdDesc = 'NFTS_MAX_ID_DESC',
  NftsMaxMetadataIdAsc = 'NFTS_MAX_METADATA_ID_ASC',
  NftsMaxMetadataIdDesc = 'NFTS_MAX_METADATA_ID_DESC',
  NftsMaxMinterIdAsc = 'NFTS_MAX_MINTER_ID_ASC',
  NftsMaxMinterIdDesc = 'NFTS_MAX_MINTER_ID_DESC',
  NftsMaxOwnerIdAsc = 'NFTS_MAX_OWNER_ID_ASC',
  NftsMaxOwnerIdDesc = 'NFTS_MAX_OWNER_ID_DESC',
  NftsMaxPaymentAddressAsc = 'NFTS_MAX_PAYMENT_ADDRESS_ASC',
  NftsMaxPaymentAddressDesc = 'NFTS_MAX_PAYMENT_ADDRESS_DESC',
  NftsMaxSellerFeeAsc = 'NFTS_MAX_SELLER_FEE_ASC',
  NftsMaxSellerFeeDesc = 'NFTS_MAX_SELLER_FEE_DESC',
  NftsMaxTokenIdAsc = 'NFTS_MAX_TOKEN_ID_ASC',
  NftsMaxTokenIdDesc = 'NFTS_MAX_TOKEN_ID_DESC',
  NftsMaxUpdatedAtAsc = 'NFTS_MAX_UPDATED_AT_ASC',
  NftsMaxUpdatedAtDesc = 'NFTS_MAX_UPDATED_AT_DESC',
  NftsMaxUpdatedHeightAsc = 'NFTS_MAX_UPDATED_HEIGHT_ASC',
  NftsMaxUpdatedHeightDesc = 'NFTS_MAX_UPDATED_HEIGHT_DESC',
  NftsMaxUriAsc = 'NFTS_MAX_URI_ASC',
  NftsMaxUriDesc = 'NFTS_MAX_URI_DESC',
  NftsMinCollectionIdAsc = 'NFTS_MIN_COLLECTION_ID_ASC',
  NftsMinCollectionIdDesc = 'NFTS_MIN_COLLECTION_ID_DESC',
  NftsMinCreatedAtAsc = 'NFTS_MIN_CREATED_AT_ASC',
  NftsMinCreatedAtDesc = 'NFTS_MIN_CREATED_AT_DESC',
  NftsMinCreatedHeightAsc = 'NFTS_MIN_CREATED_HEIGHT_ASC',
  NftsMinCreatedHeightDesc = 'NFTS_MIN_CREATED_HEIGHT_DESC',
  NftsMinIdAsc = 'NFTS_MIN_ID_ASC',
  NftsMinIdDesc = 'NFTS_MIN_ID_DESC',
  NftsMinMetadataIdAsc = 'NFTS_MIN_METADATA_ID_ASC',
  NftsMinMetadataIdDesc = 'NFTS_MIN_METADATA_ID_DESC',
  NftsMinMinterIdAsc = 'NFTS_MIN_MINTER_ID_ASC',
  NftsMinMinterIdDesc = 'NFTS_MIN_MINTER_ID_DESC',
  NftsMinOwnerIdAsc = 'NFTS_MIN_OWNER_ID_ASC',
  NftsMinOwnerIdDesc = 'NFTS_MIN_OWNER_ID_DESC',
  NftsMinPaymentAddressAsc = 'NFTS_MIN_PAYMENT_ADDRESS_ASC',
  NftsMinPaymentAddressDesc = 'NFTS_MIN_PAYMENT_ADDRESS_DESC',
  NftsMinSellerFeeAsc = 'NFTS_MIN_SELLER_FEE_ASC',
  NftsMinSellerFeeDesc = 'NFTS_MIN_SELLER_FEE_DESC',
  NftsMinTokenIdAsc = 'NFTS_MIN_TOKEN_ID_ASC',
  NftsMinTokenIdDesc = 'NFTS_MIN_TOKEN_ID_DESC',
  NftsMinUpdatedAtAsc = 'NFTS_MIN_UPDATED_AT_ASC',
  NftsMinUpdatedAtDesc = 'NFTS_MIN_UPDATED_AT_DESC',
  NftsMinUpdatedHeightAsc = 'NFTS_MIN_UPDATED_HEIGHT_ASC',
  NftsMinUpdatedHeightDesc = 'NFTS_MIN_UPDATED_HEIGHT_DESC',
  NftsMinUriAsc = 'NFTS_MIN_URI_ASC',
  NftsMinUriDesc = 'NFTS_MIN_URI_DESC',
  NftsStddevPopulationCollectionIdAsc = 'NFTS_STDDEV_POPULATION_COLLECTION_ID_ASC',
  NftsStddevPopulationCollectionIdDesc = 'NFTS_STDDEV_POPULATION_COLLECTION_ID_DESC',
  NftsStddevPopulationCreatedAtAsc = 'NFTS_STDDEV_POPULATION_CREATED_AT_ASC',
  NftsStddevPopulationCreatedAtDesc = 'NFTS_STDDEV_POPULATION_CREATED_AT_DESC',
  NftsStddevPopulationCreatedHeightAsc = 'NFTS_STDDEV_POPULATION_CREATED_HEIGHT_ASC',
  NftsStddevPopulationCreatedHeightDesc = 'NFTS_STDDEV_POPULATION_CREATED_HEIGHT_DESC',
  NftsStddevPopulationIdAsc = 'NFTS_STDDEV_POPULATION_ID_ASC',
  NftsStddevPopulationIdDesc = 'NFTS_STDDEV_POPULATION_ID_DESC',
  NftsStddevPopulationMetadataIdAsc = 'NFTS_STDDEV_POPULATION_METADATA_ID_ASC',
  NftsStddevPopulationMetadataIdDesc = 'NFTS_STDDEV_POPULATION_METADATA_ID_DESC',
  NftsStddevPopulationMinterIdAsc = 'NFTS_STDDEV_POPULATION_MINTER_ID_ASC',
  NftsStddevPopulationMinterIdDesc = 'NFTS_STDDEV_POPULATION_MINTER_ID_DESC',
  NftsStddevPopulationOwnerIdAsc = 'NFTS_STDDEV_POPULATION_OWNER_ID_ASC',
  NftsStddevPopulationOwnerIdDesc = 'NFTS_STDDEV_POPULATION_OWNER_ID_DESC',
  NftsStddevPopulationPaymentAddressAsc = 'NFTS_STDDEV_POPULATION_PAYMENT_ADDRESS_ASC',
  NftsStddevPopulationPaymentAddressDesc = 'NFTS_STDDEV_POPULATION_PAYMENT_ADDRESS_DESC',
  NftsStddevPopulationSellerFeeAsc = 'NFTS_STDDEV_POPULATION_SELLER_FEE_ASC',
  NftsStddevPopulationSellerFeeDesc = 'NFTS_STDDEV_POPULATION_SELLER_FEE_DESC',
  NftsStddevPopulationTokenIdAsc = 'NFTS_STDDEV_POPULATION_TOKEN_ID_ASC',
  NftsStddevPopulationTokenIdDesc = 'NFTS_STDDEV_POPULATION_TOKEN_ID_DESC',
  NftsStddevPopulationUpdatedAtAsc = 'NFTS_STDDEV_POPULATION_UPDATED_AT_ASC',
  NftsStddevPopulationUpdatedAtDesc = 'NFTS_STDDEV_POPULATION_UPDATED_AT_DESC',
  NftsStddevPopulationUpdatedHeightAsc = 'NFTS_STDDEV_POPULATION_UPDATED_HEIGHT_ASC',
  NftsStddevPopulationUpdatedHeightDesc = 'NFTS_STDDEV_POPULATION_UPDATED_HEIGHT_DESC',
  NftsStddevPopulationUriAsc = 'NFTS_STDDEV_POPULATION_URI_ASC',
  NftsStddevPopulationUriDesc = 'NFTS_STDDEV_POPULATION_URI_DESC',
  NftsStddevSampleCollectionIdAsc = 'NFTS_STDDEV_SAMPLE_COLLECTION_ID_ASC',
  NftsStddevSampleCollectionIdDesc = 'NFTS_STDDEV_SAMPLE_COLLECTION_ID_DESC',
  NftsStddevSampleCreatedAtAsc = 'NFTS_STDDEV_SAMPLE_CREATED_AT_ASC',
  NftsStddevSampleCreatedAtDesc = 'NFTS_STDDEV_SAMPLE_CREATED_AT_DESC',
  NftsStddevSampleCreatedHeightAsc = 'NFTS_STDDEV_SAMPLE_CREATED_HEIGHT_ASC',
  NftsStddevSampleCreatedHeightDesc = 'NFTS_STDDEV_SAMPLE_CREATED_HEIGHT_DESC',
  NftsStddevSampleIdAsc = 'NFTS_STDDEV_SAMPLE_ID_ASC',
  NftsStddevSampleIdDesc = 'NFTS_STDDEV_SAMPLE_ID_DESC',
  NftsStddevSampleMetadataIdAsc = 'NFTS_STDDEV_SAMPLE_METADATA_ID_ASC',
  NftsStddevSampleMetadataIdDesc = 'NFTS_STDDEV_SAMPLE_METADATA_ID_DESC',
  NftsStddevSampleMinterIdAsc = 'NFTS_STDDEV_SAMPLE_MINTER_ID_ASC',
  NftsStddevSampleMinterIdDesc = 'NFTS_STDDEV_SAMPLE_MINTER_ID_DESC',
  NftsStddevSampleOwnerIdAsc = 'NFTS_STDDEV_SAMPLE_OWNER_ID_ASC',
  NftsStddevSampleOwnerIdDesc = 'NFTS_STDDEV_SAMPLE_OWNER_ID_DESC',
  NftsStddevSamplePaymentAddressAsc = 'NFTS_STDDEV_SAMPLE_PAYMENT_ADDRESS_ASC',
  NftsStddevSamplePaymentAddressDesc = 'NFTS_STDDEV_SAMPLE_PAYMENT_ADDRESS_DESC',
  NftsStddevSampleSellerFeeAsc = 'NFTS_STDDEV_SAMPLE_SELLER_FEE_ASC',
  NftsStddevSampleSellerFeeDesc = 'NFTS_STDDEV_SAMPLE_SELLER_FEE_DESC',
  NftsStddevSampleTokenIdAsc = 'NFTS_STDDEV_SAMPLE_TOKEN_ID_ASC',
  NftsStddevSampleTokenIdDesc = 'NFTS_STDDEV_SAMPLE_TOKEN_ID_DESC',
  NftsStddevSampleUpdatedAtAsc = 'NFTS_STDDEV_SAMPLE_UPDATED_AT_ASC',
  NftsStddevSampleUpdatedAtDesc = 'NFTS_STDDEV_SAMPLE_UPDATED_AT_DESC',
  NftsStddevSampleUpdatedHeightAsc = 'NFTS_STDDEV_SAMPLE_UPDATED_HEIGHT_ASC',
  NftsStddevSampleUpdatedHeightDesc = 'NFTS_STDDEV_SAMPLE_UPDATED_HEIGHT_DESC',
  NftsStddevSampleUriAsc = 'NFTS_STDDEV_SAMPLE_URI_ASC',
  NftsStddevSampleUriDesc = 'NFTS_STDDEV_SAMPLE_URI_DESC',
  NftsSumCollectionIdAsc = 'NFTS_SUM_COLLECTION_ID_ASC',
  NftsSumCollectionIdDesc = 'NFTS_SUM_COLLECTION_ID_DESC',
  NftsSumCreatedAtAsc = 'NFTS_SUM_CREATED_AT_ASC',
  NftsSumCreatedAtDesc = 'NFTS_SUM_CREATED_AT_DESC',
  NftsSumCreatedHeightAsc = 'NFTS_SUM_CREATED_HEIGHT_ASC',
  NftsSumCreatedHeightDesc = 'NFTS_SUM_CREATED_HEIGHT_DESC',
  NftsSumIdAsc = 'NFTS_SUM_ID_ASC',
  NftsSumIdDesc = 'NFTS_SUM_ID_DESC',
  NftsSumMetadataIdAsc = 'NFTS_SUM_METADATA_ID_ASC',
  NftsSumMetadataIdDesc = 'NFTS_SUM_METADATA_ID_DESC',
  NftsSumMinterIdAsc = 'NFTS_SUM_MINTER_ID_ASC',
  NftsSumMinterIdDesc = 'NFTS_SUM_MINTER_ID_DESC',
  NftsSumOwnerIdAsc = 'NFTS_SUM_OWNER_ID_ASC',
  NftsSumOwnerIdDesc = 'NFTS_SUM_OWNER_ID_DESC',
  NftsSumPaymentAddressAsc = 'NFTS_SUM_PAYMENT_ADDRESS_ASC',
  NftsSumPaymentAddressDesc = 'NFTS_SUM_PAYMENT_ADDRESS_DESC',
  NftsSumSellerFeeAsc = 'NFTS_SUM_SELLER_FEE_ASC',
  NftsSumSellerFeeDesc = 'NFTS_SUM_SELLER_FEE_DESC',
  NftsSumTokenIdAsc = 'NFTS_SUM_TOKEN_ID_ASC',
  NftsSumTokenIdDesc = 'NFTS_SUM_TOKEN_ID_DESC',
  NftsSumUpdatedAtAsc = 'NFTS_SUM_UPDATED_AT_ASC',
  NftsSumUpdatedAtDesc = 'NFTS_SUM_UPDATED_AT_DESC',
  NftsSumUpdatedHeightAsc = 'NFTS_SUM_UPDATED_HEIGHT_ASC',
  NftsSumUpdatedHeightDesc = 'NFTS_SUM_UPDATED_HEIGHT_DESC',
  NftsSumUriAsc = 'NFTS_SUM_URI_ASC',
  NftsSumUriDesc = 'NFTS_SUM_URI_DESC',
  NftsVariancePopulationCollectionIdAsc = 'NFTS_VARIANCE_POPULATION_COLLECTION_ID_ASC',
  NftsVariancePopulationCollectionIdDesc = 'NFTS_VARIANCE_POPULATION_COLLECTION_ID_DESC',
  NftsVariancePopulationCreatedAtAsc = 'NFTS_VARIANCE_POPULATION_CREATED_AT_ASC',
  NftsVariancePopulationCreatedAtDesc = 'NFTS_VARIANCE_POPULATION_CREATED_AT_DESC',
  NftsVariancePopulationCreatedHeightAsc = 'NFTS_VARIANCE_POPULATION_CREATED_HEIGHT_ASC',
  NftsVariancePopulationCreatedHeightDesc = 'NFTS_VARIANCE_POPULATION_CREATED_HEIGHT_DESC',
  NftsVariancePopulationIdAsc = 'NFTS_VARIANCE_POPULATION_ID_ASC',
  NftsVariancePopulationIdDesc = 'NFTS_VARIANCE_POPULATION_ID_DESC',
  NftsVariancePopulationMetadataIdAsc = 'NFTS_VARIANCE_POPULATION_METADATA_ID_ASC',
  NftsVariancePopulationMetadataIdDesc = 'NFTS_VARIANCE_POPULATION_METADATA_ID_DESC',
  NftsVariancePopulationMinterIdAsc = 'NFTS_VARIANCE_POPULATION_MINTER_ID_ASC',
  NftsVariancePopulationMinterIdDesc = 'NFTS_VARIANCE_POPULATION_MINTER_ID_DESC',
  NftsVariancePopulationOwnerIdAsc = 'NFTS_VARIANCE_POPULATION_OWNER_ID_ASC',
  NftsVariancePopulationOwnerIdDesc = 'NFTS_VARIANCE_POPULATION_OWNER_ID_DESC',
  NftsVariancePopulationPaymentAddressAsc = 'NFTS_VARIANCE_POPULATION_PAYMENT_ADDRESS_ASC',
  NftsVariancePopulationPaymentAddressDesc = 'NFTS_VARIANCE_POPULATION_PAYMENT_ADDRESS_DESC',
  NftsVariancePopulationSellerFeeAsc = 'NFTS_VARIANCE_POPULATION_SELLER_FEE_ASC',
  NftsVariancePopulationSellerFeeDesc = 'NFTS_VARIANCE_POPULATION_SELLER_FEE_DESC',
  NftsVariancePopulationTokenIdAsc = 'NFTS_VARIANCE_POPULATION_TOKEN_ID_ASC',
  NftsVariancePopulationTokenIdDesc = 'NFTS_VARIANCE_POPULATION_TOKEN_ID_DESC',
  NftsVariancePopulationUpdatedAtAsc = 'NFTS_VARIANCE_POPULATION_UPDATED_AT_ASC',
  NftsVariancePopulationUpdatedAtDesc = 'NFTS_VARIANCE_POPULATION_UPDATED_AT_DESC',
  NftsVariancePopulationUpdatedHeightAsc = 'NFTS_VARIANCE_POPULATION_UPDATED_HEIGHT_ASC',
  NftsVariancePopulationUpdatedHeightDesc = 'NFTS_VARIANCE_POPULATION_UPDATED_HEIGHT_DESC',
  NftsVariancePopulationUriAsc = 'NFTS_VARIANCE_POPULATION_URI_ASC',
  NftsVariancePopulationUriDesc = 'NFTS_VARIANCE_POPULATION_URI_DESC',
  NftsVarianceSampleCollectionIdAsc = 'NFTS_VARIANCE_SAMPLE_COLLECTION_ID_ASC',
  NftsVarianceSampleCollectionIdDesc = 'NFTS_VARIANCE_SAMPLE_COLLECTION_ID_DESC',
  NftsVarianceSampleCreatedAtAsc = 'NFTS_VARIANCE_SAMPLE_CREATED_AT_ASC',
  NftsVarianceSampleCreatedAtDesc = 'NFTS_VARIANCE_SAMPLE_CREATED_AT_DESC',
  NftsVarianceSampleCreatedHeightAsc = 'NFTS_VARIANCE_SAMPLE_CREATED_HEIGHT_ASC',
  NftsVarianceSampleCreatedHeightDesc = 'NFTS_VARIANCE_SAMPLE_CREATED_HEIGHT_DESC',
  NftsVarianceSampleIdAsc = 'NFTS_VARIANCE_SAMPLE_ID_ASC',
  NftsVarianceSampleIdDesc = 'NFTS_VARIANCE_SAMPLE_ID_DESC',
  NftsVarianceSampleMetadataIdAsc = 'NFTS_VARIANCE_SAMPLE_METADATA_ID_ASC',
  NftsVarianceSampleMetadataIdDesc = 'NFTS_VARIANCE_SAMPLE_METADATA_ID_DESC',
  NftsVarianceSampleMinterIdAsc = 'NFTS_VARIANCE_SAMPLE_MINTER_ID_ASC',
  NftsVarianceSampleMinterIdDesc = 'NFTS_VARIANCE_SAMPLE_MINTER_ID_DESC',
  NftsVarianceSampleOwnerIdAsc = 'NFTS_VARIANCE_SAMPLE_OWNER_ID_ASC',
  NftsVarianceSampleOwnerIdDesc = 'NFTS_VARIANCE_SAMPLE_OWNER_ID_DESC',
  NftsVarianceSamplePaymentAddressAsc = 'NFTS_VARIANCE_SAMPLE_PAYMENT_ADDRESS_ASC',
  NftsVarianceSamplePaymentAddressDesc = 'NFTS_VARIANCE_SAMPLE_PAYMENT_ADDRESS_DESC',
  NftsVarianceSampleSellerFeeAsc = 'NFTS_VARIANCE_SAMPLE_SELLER_FEE_ASC',
  NftsVarianceSampleSellerFeeDesc = 'NFTS_VARIANCE_SAMPLE_SELLER_FEE_DESC',
  NftsVarianceSampleTokenIdAsc = 'NFTS_VARIANCE_SAMPLE_TOKEN_ID_ASC',
  NftsVarianceSampleTokenIdDesc = 'NFTS_VARIANCE_SAMPLE_TOKEN_ID_DESC',
  NftsVarianceSampleUpdatedAtAsc = 'NFTS_VARIANCE_SAMPLE_UPDATED_AT_ASC',
  NftsVarianceSampleUpdatedAtDesc = 'NFTS_VARIANCE_SAMPLE_UPDATED_AT_DESC',
  NftsVarianceSampleUpdatedHeightAsc = 'NFTS_VARIANCE_SAMPLE_UPDATED_HEIGHT_ASC',
  NftsVarianceSampleUpdatedHeightDesc = 'NFTS_VARIANCE_SAMPLE_UPDATED_HEIGHT_DESC',
  NftsVarianceSampleUriAsc = 'NFTS_VARIANCE_SAMPLE_URI_ASC',
  NftsVarianceSampleUriDesc = 'NFTS_VARIANCE_SAMPLE_URI_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  SymbolAsc = 'SYMBOL_ASC',
  SymbolDesc = 'SYMBOL_DESC',
  UpdatedAtAsc = 'UPDATED_AT_ASC',
  UpdatedAtDesc = 'UPDATED_AT_DESC',
  UpdatedHeightAsc = 'UPDATED_HEIGHT_ASC',
  UpdatedHeightDesc = 'UPDATED_HEIGHT_DESC',
  UriAsc = 'URI_ASC',
  UriDesc = 'URI_DESC',
  VerifiedAsc = 'VERIFIED_ASC',
  VerifiedDesc = 'VERIFIED_DESC'
}

/** A filter to be used against Datetime fields. All fields are combined with a logical ‘and.’ */
export type DatetimeFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<Scalars['Datetime']>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<Scalars['Datetime']>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<Scalars['Datetime']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars['Datetime']>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<Scalars['Datetime']>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<Scalars['Datetime']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars['Datetime']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<Scalars['Datetime']>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<Scalars['Datetime']>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<Scalars['Datetime']>>;
};

export type Fantoken = Node & {
  __typename?: 'Fantoken';
  /** Reads and enables pagination through a set of `Account`. */
  accountsByFantokenFavoriteFantokenIdAndAccountId: FantokenAccountsByFantokenFavoriteFantokenIdAndAccountIdManyToManyConnection;
  /** Reads a single `Account` that is related to this `Fantoken`. */
  authority?: Maybe<Account>;
  authorityId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Datetime']>;
  createdHeight?: Maybe<Scalars['BigFloat']>;
  /** Reads a single `Account` that is related to this `Fantoken`. */
  creator?: Maybe<Account>;
  creatorId: Scalars['String'];
  /** Reads and enables pagination through a set of `FantokenFavorite`. */
  fantokenFavorites: FantokenFavoritesConnection;
  id: Scalars['String'];
  maxSupply: Scalars['BigFloat'];
  /** Reads a single `FantokenMetadatum` that is related to this `Fantoken`. */
  metadata?: Maybe<FantokenMetadatum>;
  metadataId?: Maybe<Scalars['String']>;
  /** Reads a single `Account` that is related to this `Fantoken`. */
  minter?: Maybe<Account>;
  minterId?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  supply: Scalars['BigFloat'];
  symbol: Scalars['String'];
  updatedAt?: Maybe<Scalars['Datetime']>;
  updatedHeight?: Maybe<Scalars['BigFloat']>;
  uri?: Maybe<Scalars['String']>;
  verified: Scalars['Boolean'];
};


export type FantokenAccountsByFantokenFavoriteFantokenIdAndAccountIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  distinct?: InputMaybe<Array<InputMaybe<Accounts_Distinct_Enum>>>;
  filter?: InputMaybe<AccountFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AccountsOrderBy>>;
};


export type FantokenFantokenFavoritesArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  distinct?: InputMaybe<Array<InputMaybe<Fantoken_Favorites_Distinct_Enum>>>;
  filter?: InputMaybe<FantokenFavoriteFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<FantokenFavoritesOrderBy>>;
};

/** A connection to a list of `Account` values, with data from `FantokenFavorite`. */
export type FantokenAccountsByFantokenFavoriteFantokenIdAndAccountIdManyToManyConnection = {
  __typename?: 'FantokenAccountsByFantokenFavoriteFantokenIdAndAccountIdManyToManyConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<AccountAggregates>;
  /** A list of edges which contains the `Account`, info from the `FantokenFavorite`, and the cursor to aid in pagination. */
  edges: Array<FantokenAccountsByFantokenFavoriteFantokenIdAndAccountIdManyToManyEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<AccountAggregates>>;
  /** A list of `Account` objects. */
  nodes: Array<Maybe<Account>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Account` you could get from the connection. */
  totalCount: Scalars['Int'];
};


/** A connection to a list of `Account` values, with data from `FantokenFavorite`. */
export type FantokenAccountsByFantokenFavoriteFantokenIdAndAccountIdManyToManyConnectionGroupedAggregatesArgs = {
  groupBy: Array<AccountsGroupBy>;
  having?: InputMaybe<AccountsHavingInput>;
};

/** A `Account` edge in the connection, with data from `FantokenFavorite`. */
export type FantokenAccountsByFantokenFavoriteFantokenIdAndAccountIdManyToManyEdge = {
  __typename?: 'FantokenAccountsByFantokenFavoriteFantokenIdAndAccountIdManyToManyEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** Reads and enables pagination through a set of `FantokenFavorite`. */
  fantokenFavorites: FantokenFavoritesConnection;
  /** The `Account` at the end of the edge. */
  node?: Maybe<Account>;
};


/** A `Account` edge in the connection, with data from `FantokenFavorite`. */
export type FantokenAccountsByFantokenFavoriteFantokenIdAndAccountIdManyToManyEdgeFantokenFavoritesArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  distinct?: InputMaybe<Array<InputMaybe<Fantoken_Favorites_Distinct_Enum>>>;
  filter?: InputMaybe<FantokenFavoriteFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<FantokenFavoritesOrderBy>>;
};

export type FantokenAggregates = {
  __typename?: 'FantokenAggregates';
  /** Mean average aggregates across the matching connection (ignoring before/after/first/last/offset) */
  average?: Maybe<FantokenAverageAggregates>;
  /** Distinct count aggregates across the matching connection (ignoring before/after/first/last/offset) */
  distinctCount?: Maybe<FantokenDistinctCountAggregates>;
  keys?: Maybe<Array<Scalars['String']>>;
  /** Maximum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  max?: Maybe<FantokenMaxAggregates>;
  /** Minimum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  min?: Maybe<FantokenMinAggregates>;
  /** Population standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  stddevPopulation?: Maybe<FantokenStddevPopulationAggregates>;
  /** Sample standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  stddevSample?: Maybe<FantokenStddevSampleAggregates>;
  /** Sum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  sum?: Maybe<FantokenSumAggregates>;
  /** Population variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  variancePopulation?: Maybe<FantokenVariancePopulationAggregates>;
  /** Sample variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  varianceSample?: Maybe<FantokenVarianceSampleAggregates>;
};

/** A filter to be used against aggregates of `Fantoken` object types. */
export type FantokenAggregatesFilter = {
  /** Mean average aggregate over matching `Fantoken` objects. */
  average?: InputMaybe<FantokenAverageAggregateFilter>;
  /** Distinct count aggregate over matching `Fantoken` objects. */
  distinctCount?: InputMaybe<FantokenDistinctCountAggregateFilter>;
  /** A filter that must pass for the relevant `Fantoken` object to be included within the aggregate. */
  filter?: InputMaybe<FantokenFilter>;
  /** Maximum aggregate over matching `Fantoken` objects. */
  max?: InputMaybe<FantokenMaxAggregateFilter>;
  /** Minimum aggregate over matching `Fantoken` objects. */
  min?: InputMaybe<FantokenMinAggregateFilter>;
  /** Population standard deviation aggregate over matching `Fantoken` objects. */
  stddevPopulation?: InputMaybe<FantokenStddevPopulationAggregateFilter>;
  /** Sample standard deviation aggregate over matching `Fantoken` objects. */
  stddevSample?: InputMaybe<FantokenStddevSampleAggregateFilter>;
  /** Sum aggregate over matching `Fantoken` objects. */
  sum?: InputMaybe<FantokenSumAggregateFilter>;
  /** Population variance aggregate over matching `Fantoken` objects. */
  variancePopulation?: InputMaybe<FantokenVariancePopulationAggregateFilter>;
  /** Sample variance aggregate over matching `Fantoken` objects. */
  varianceSample?: InputMaybe<FantokenVarianceSampleAggregateFilter>;
};

export type FantokenAverageAggregateFilter = {
  createdHeight?: InputMaybe<BigFloatFilter>;
  maxSupply?: InputMaybe<BigFloatFilter>;
  supply?: InputMaybe<BigFloatFilter>;
  updatedHeight?: InputMaybe<BigFloatFilter>;
};

export type FantokenAverageAggregates = {
  __typename?: 'FantokenAverageAggregates';
  /** Mean average of createdHeight across the matching connection */
  createdHeight?: Maybe<Scalars['BigFloat']>;
  /** Mean average of maxSupply across the matching connection */
  maxSupply?: Maybe<Scalars['BigFloat']>;
  /** Mean average of supply across the matching connection */
  supply?: Maybe<Scalars['BigFloat']>;
  /** Mean average of updatedHeight across the matching connection */
  updatedHeight?: Maybe<Scalars['BigFloat']>;
};

export type FantokenDistinctCountAggregateFilter = {
  authorityId?: InputMaybe<BigIntFilter>;
  createdAt?: InputMaybe<BigIntFilter>;
  createdHeight?: InputMaybe<BigIntFilter>;
  creatorId?: InputMaybe<BigIntFilter>;
  id?: InputMaybe<BigIntFilter>;
  maxSupply?: InputMaybe<BigIntFilter>;
  metadataId?: InputMaybe<BigIntFilter>;
  minterId?: InputMaybe<BigIntFilter>;
  name?: InputMaybe<BigIntFilter>;
  supply?: InputMaybe<BigIntFilter>;
  symbol?: InputMaybe<BigIntFilter>;
  updatedAt?: InputMaybe<BigIntFilter>;
  updatedHeight?: InputMaybe<BigIntFilter>;
  uri?: InputMaybe<BigIntFilter>;
  verified?: InputMaybe<BigIntFilter>;
};

export type FantokenDistinctCountAggregates = {
  __typename?: 'FantokenDistinctCountAggregates';
  /** Distinct count of authorityId across the matching connection */
  authorityId?: Maybe<Scalars['BigInt']>;
  /** Distinct count of createdAt across the matching connection */
  createdAt?: Maybe<Scalars['BigInt']>;
  /** Distinct count of createdHeight across the matching connection */
  createdHeight?: Maybe<Scalars['BigInt']>;
  /** Distinct count of creatorId across the matching connection */
  creatorId?: Maybe<Scalars['BigInt']>;
  /** Distinct count of id across the matching connection */
  id?: Maybe<Scalars['BigInt']>;
  /** Distinct count of maxSupply across the matching connection */
  maxSupply?: Maybe<Scalars['BigInt']>;
  /** Distinct count of metadataId across the matching connection */
  metadataId?: Maybe<Scalars['BigInt']>;
  /** Distinct count of minterId across the matching connection */
  minterId?: Maybe<Scalars['BigInt']>;
  /** Distinct count of name across the matching connection */
  name?: Maybe<Scalars['BigInt']>;
  /** Distinct count of supply across the matching connection */
  supply?: Maybe<Scalars['BigInt']>;
  /** Distinct count of symbol across the matching connection */
  symbol?: Maybe<Scalars['BigInt']>;
  /** Distinct count of updatedAt across the matching connection */
  updatedAt?: Maybe<Scalars['BigInt']>;
  /** Distinct count of updatedHeight across the matching connection */
  updatedHeight?: Maybe<Scalars['BigInt']>;
  /** Distinct count of uri across the matching connection */
  uri?: Maybe<Scalars['BigInt']>;
  /** Distinct count of verified across the matching connection */
  verified?: Maybe<Scalars['BigInt']>;
};

export type FantokenFavorite = Node & {
  __typename?: 'FantokenFavorite';
  /** Reads a single `Account` that is related to this `FantokenFavorite`. */
  account?: Maybe<Account>;
  accountId: Scalars['String'];
  /** Reads a single `Fantoken` that is related to this `FantokenFavorite`. */
  fantoken?: Maybe<Fantoken>;
  fantokenId: Scalars['String'];
  id: Scalars['String'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
};

export type FantokenFavoriteAggregates = {
  __typename?: 'FantokenFavoriteAggregates';
  /** Distinct count aggregates across the matching connection (ignoring before/after/first/last/offset) */
  distinctCount?: Maybe<FantokenFavoriteDistinctCountAggregates>;
  keys?: Maybe<Array<Scalars['String']>>;
};

/** A filter to be used against aggregates of `FantokenFavorite` object types. */
export type FantokenFavoriteAggregatesFilter = {
  /** Distinct count aggregate over matching `FantokenFavorite` objects. */
  distinctCount?: InputMaybe<FantokenFavoriteDistinctCountAggregateFilter>;
  /** A filter that must pass for the relevant `FantokenFavorite` object to be included within the aggregate. */
  filter?: InputMaybe<FantokenFavoriteFilter>;
};

export type FantokenFavoriteDistinctCountAggregateFilter = {
  accountId?: InputMaybe<BigIntFilter>;
  fantokenId?: InputMaybe<BigIntFilter>;
  id?: InputMaybe<BigIntFilter>;
};

export type FantokenFavoriteDistinctCountAggregates = {
  __typename?: 'FantokenFavoriteDistinctCountAggregates';
  /** Distinct count of accountId across the matching connection */
  accountId?: Maybe<Scalars['BigInt']>;
  /** Distinct count of fantokenId across the matching connection */
  fantokenId?: Maybe<Scalars['BigInt']>;
  /** Distinct count of id across the matching connection */
  id?: Maybe<Scalars['BigInt']>;
};

/** A filter to be used against `FantokenFavorite` object types. All fields are combined with a logical ‘and.’ */
export type FantokenFavoriteFilter = {
  /** Filter by the object’s `account` relation. */
  account?: InputMaybe<AccountFilter>;
  /** Filter by the object’s `accountId` field. */
  accountId?: InputMaybe<StringFilter>;
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<FantokenFavoriteFilter>>;
  /** Filter by the object’s `fantoken` relation. */
  fantoken?: InputMaybe<FantokenFilter>;
  /** Filter by the object’s `fantokenId` field. */
  fantokenId?: InputMaybe<StringFilter>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<FantokenFavoriteFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<FantokenFavoriteFilter>>;
};

/** A connection to a list of `FantokenFavorite` values. */
export type FantokenFavoritesConnection = {
  __typename?: 'FantokenFavoritesConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<FantokenFavoriteAggregates>;
  /** A list of edges which contains the `FantokenFavorite` and cursor to aid in pagination. */
  edges: Array<FantokenFavoritesEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<FantokenFavoriteAggregates>>;
  /** A list of `FantokenFavorite` objects. */
  nodes: Array<Maybe<FantokenFavorite>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `FantokenFavorite` you could get from the connection. */
  totalCount: Scalars['Int'];
};


/** A connection to a list of `FantokenFavorite` values. */
export type FantokenFavoritesConnectionGroupedAggregatesArgs = {
  groupBy: Array<FantokenFavoritesGroupBy>;
  having?: InputMaybe<FantokenFavoritesHavingInput>;
};

/** A `FantokenFavorite` edge in the connection. */
export type FantokenFavoritesEdge = {
  __typename?: 'FantokenFavoritesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `FantokenFavorite` at the end of the edge. */
  node?: Maybe<FantokenFavorite>;
};

/** Grouping methods for `FantokenFavorite` for usage during aggregation. */
export enum FantokenFavoritesGroupBy {
  AccountId = 'ACCOUNT_ID',
  FantokenId = 'FANTOKEN_ID'
}

/** Conditions for `FantokenFavorite` aggregates. */
export type FantokenFavoritesHavingInput = {
  AND?: InputMaybe<Array<FantokenFavoritesHavingInput>>;
  OR?: InputMaybe<Array<FantokenFavoritesHavingInput>>;
};

/** Methods to use when ordering `FantokenFavorite`. */
export enum FantokenFavoritesOrderBy {
  AccountIdAsc = 'ACCOUNT_ID_ASC',
  AccountIdDesc = 'ACCOUNT_ID_DESC',
  FantokenIdAsc = 'FANTOKEN_ID_ASC',
  FantokenIdDesc = 'FANTOKEN_ID_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** A filter to be used against `Fantoken` object types. All fields are combined with a logical ‘and.’ */
export type FantokenFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<FantokenFilter>>;
  /** Filter by the object’s `authority` relation. */
  authority?: InputMaybe<AccountFilter>;
  /** A related `authority` exists. */
  authorityExists?: InputMaybe<Scalars['Boolean']>;
  /** Filter by the object’s `authorityId` field. */
  authorityId?: InputMaybe<StringFilter>;
  /** Filter by the object’s `createdAt` field. */
  createdAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `createdHeight` field. */
  createdHeight?: InputMaybe<BigFloatFilter>;
  /** Filter by the object’s `creator` relation. */
  creator?: InputMaybe<AccountFilter>;
  /** Filter by the object’s `creatorId` field. */
  creatorId?: InputMaybe<StringFilter>;
  /** Filter by the object’s `fantokenFavorites` relation. */
  fantokenFavorites?: InputMaybe<FantokenToManyFantokenFavoriteFilter>;
  /** Some related `fantokenFavorites` exist. */
  fantokenFavoritesExist?: InputMaybe<Scalars['Boolean']>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<StringFilter>;
  /** Filter by the object’s `maxSupply` field. */
  maxSupply?: InputMaybe<BigFloatFilter>;
  /** Filter by the object’s `metadata` relation. */
  metadata?: InputMaybe<FantokenMetadatumFilter>;
  /** A related `metadata` exists. */
  metadataExists?: InputMaybe<Scalars['Boolean']>;
  /** Filter by the object’s `metadataId` field. */
  metadataId?: InputMaybe<StringFilter>;
  /** Filter by the object’s `minter` relation. */
  minter?: InputMaybe<AccountFilter>;
  /** A related `minter` exists. */
  minterExists?: InputMaybe<Scalars['Boolean']>;
  /** Filter by the object’s `minterId` field. */
  minterId?: InputMaybe<StringFilter>;
  /** Filter by the object’s `name` field. */
  name?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<FantokenFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<FantokenFilter>>;
  /** Filter by the object’s `supply` field. */
  supply?: InputMaybe<BigFloatFilter>;
  /** Filter by the object’s `symbol` field. */
  symbol?: InputMaybe<StringFilter>;
  /** Filter by the object’s `updatedAt` field. */
  updatedAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `updatedHeight` field. */
  updatedHeight?: InputMaybe<BigFloatFilter>;
  /** Filter by the object’s `uri` field. */
  uri?: InputMaybe<StringFilter>;
  /** Filter by the object’s `verified` field. */
  verified?: InputMaybe<BooleanFilter>;
};

export type FantokenMaxAggregateFilter = {
  createdHeight?: InputMaybe<BigFloatFilter>;
  maxSupply?: InputMaybe<BigFloatFilter>;
  supply?: InputMaybe<BigFloatFilter>;
  updatedHeight?: InputMaybe<BigFloatFilter>;
};

export type FantokenMaxAggregates = {
  __typename?: 'FantokenMaxAggregates';
  /** Maximum of createdHeight across the matching connection */
  createdHeight?: Maybe<Scalars['BigFloat']>;
  /** Maximum of maxSupply across the matching connection */
  maxSupply?: Maybe<Scalars['BigFloat']>;
  /** Maximum of supply across the matching connection */
  supply?: Maybe<Scalars['BigFloat']>;
  /** Maximum of updatedHeight across the matching connection */
  updatedHeight?: Maybe<Scalars['BigFloat']>;
};

/** A connection to a list of `FantokenMetadatum` values. */
export type FantokenMetadataConnection = {
  __typename?: 'FantokenMetadataConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<FantokenMetadatumAggregates>;
  /** A list of edges which contains the `FantokenMetadatum` and cursor to aid in pagination. */
  edges: Array<FantokenMetadataEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<FantokenMetadatumAggregates>>;
  /** A list of `FantokenMetadatum` objects. */
  nodes: Array<Maybe<FantokenMetadatum>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `FantokenMetadatum` you could get from the connection. */
  totalCount: Scalars['Int'];
};


/** A connection to a list of `FantokenMetadatum` values. */
export type FantokenMetadataConnectionGroupedAggregatesArgs = {
  groupBy: Array<FantokenMetadataGroupBy>;
  having?: InputMaybe<FantokenMetadataHavingInput>;
};

/** A `FantokenMetadatum` edge in the connection. */
export type FantokenMetadataEdge = {
  __typename?: 'FantokenMetadataEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `FantokenMetadatum` at the end of the edge. */
  node?: Maybe<FantokenMetadatum>;
};

/** Grouping methods for `FantokenMetadatum` for usage during aggregation. */
export enum FantokenMetadataGroupBy {
  Biography = 'BIOGRAPHY',
  Image = 'IMAGE',
  Links = 'LINKS',
  ProjectInfo = 'PROJECT_INFO'
}

/** Conditions for `FantokenMetadatum` aggregates. */
export type FantokenMetadataHavingInput = {
  AND?: InputMaybe<Array<FantokenMetadataHavingInput>>;
  OR?: InputMaybe<Array<FantokenMetadataHavingInput>>;
};

/** Methods to use when ordering `FantokenMetadatum`. */
export enum FantokenMetadataOrderBy {
  BiographyAsc = 'BIOGRAPHY_ASC',
  BiographyDesc = 'BIOGRAPHY_DESC',
  FantokensByMetadataIdAverageAuthorityIdAsc = 'FANTOKENS_BY_METADATA_ID_AVERAGE_AUTHORITY_ID_ASC',
  FantokensByMetadataIdAverageAuthorityIdDesc = 'FANTOKENS_BY_METADATA_ID_AVERAGE_AUTHORITY_ID_DESC',
  FantokensByMetadataIdAverageCreatedAtAsc = 'FANTOKENS_BY_METADATA_ID_AVERAGE_CREATED_AT_ASC',
  FantokensByMetadataIdAverageCreatedAtDesc = 'FANTOKENS_BY_METADATA_ID_AVERAGE_CREATED_AT_DESC',
  FantokensByMetadataIdAverageCreatedHeightAsc = 'FANTOKENS_BY_METADATA_ID_AVERAGE_CREATED_HEIGHT_ASC',
  FantokensByMetadataIdAverageCreatedHeightDesc = 'FANTOKENS_BY_METADATA_ID_AVERAGE_CREATED_HEIGHT_DESC',
  FantokensByMetadataIdAverageCreatorIdAsc = 'FANTOKENS_BY_METADATA_ID_AVERAGE_CREATOR_ID_ASC',
  FantokensByMetadataIdAverageCreatorIdDesc = 'FANTOKENS_BY_METADATA_ID_AVERAGE_CREATOR_ID_DESC',
  FantokensByMetadataIdAverageIdAsc = 'FANTOKENS_BY_METADATA_ID_AVERAGE_ID_ASC',
  FantokensByMetadataIdAverageIdDesc = 'FANTOKENS_BY_METADATA_ID_AVERAGE_ID_DESC',
  FantokensByMetadataIdAverageMaxSupplyAsc = 'FANTOKENS_BY_METADATA_ID_AVERAGE_MAX_SUPPLY_ASC',
  FantokensByMetadataIdAverageMaxSupplyDesc = 'FANTOKENS_BY_METADATA_ID_AVERAGE_MAX_SUPPLY_DESC',
  FantokensByMetadataIdAverageMetadataIdAsc = 'FANTOKENS_BY_METADATA_ID_AVERAGE_METADATA_ID_ASC',
  FantokensByMetadataIdAverageMetadataIdDesc = 'FANTOKENS_BY_METADATA_ID_AVERAGE_METADATA_ID_DESC',
  FantokensByMetadataIdAverageMinterIdAsc = 'FANTOKENS_BY_METADATA_ID_AVERAGE_MINTER_ID_ASC',
  FantokensByMetadataIdAverageMinterIdDesc = 'FANTOKENS_BY_METADATA_ID_AVERAGE_MINTER_ID_DESC',
  FantokensByMetadataIdAverageNameAsc = 'FANTOKENS_BY_METADATA_ID_AVERAGE_NAME_ASC',
  FantokensByMetadataIdAverageNameDesc = 'FANTOKENS_BY_METADATA_ID_AVERAGE_NAME_DESC',
  FantokensByMetadataIdAverageSupplyAsc = 'FANTOKENS_BY_METADATA_ID_AVERAGE_SUPPLY_ASC',
  FantokensByMetadataIdAverageSupplyDesc = 'FANTOKENS_BY_METADATA_ID_AVERAGE_SUPPLY_DESC',
  FantokensByMetadataIdAverageSymbolAsc = 'FANTOKENS_BY_METADATA_ID_AVERAGE_SYMBOL_ASC',
  FantokensByMetadataIdAverageSymbolDesc = 'FANTOKENS_BY_METADATA_ID_AVERAGE_SYMBOL_DESC',
  FantokensByMetadataIdAverageUpdatedAtAsc = 'FANTOKENS_BY_METADATA_ID_AVERAGE_UPDATED_AT_ASC',
  FantokensByMetadataIdAverageUpdatedAtDesc = 'FANTOKENS_BY_METADATA_ID_AVERAGE_UPDATED_AT_DESC',
  FantokensByMetadataIdAverageUpdatedHeightAsc = 'FANTOKENS_BY_METADATA_ID_AVERAGE_UPDATED_HEIGHT_ASC',
  FantokensByMetadataIdAverageUpdatedHeightDesc = 'FANTOKENS_BY_METADATA_ID_AVERAGE_UPDATED_HEIGHT_DESC',
  FantokensByMetadataIdAverageUriAsc = 'FANTOKENS_BY_METADATA_ID_AVERAGE_URI_ASC',
  FantokensByMetadataIdAverageUriDesc = 'FANTOKENS_BY_METADATA_ID_AVERAGE_URI_DESC',
  FantokensByMetadataIdAverageVerifiedAsc = 'FANTOKENS_BY_METADATA_ID_AVERAGE_VERIFIED_ASC',
  FantokensByMetadataIdAverageVerifiedDesc = 'FANTOKENS_BY_METADATA_ID_AVERAGE_VERIFIED_DESC',
  FantokensByMetadataIdCountAsc = 'FANTOKENS_BY_METADATA_ID_COUNT_ASC',
  FantokensByMetadataIdCountDesc = 'FANTOKENS_BY_METADATA_ID_COUNT_DESC',
  FantokensByMetadataIdDistinctCountAuthorityIdAsc = 'FANTOKENS_BY_METADATA_ID_DISTINCT_COUNT_AUTHORITY_ID_ASC',
  FantokensByMetadataIdDistinctCountAuthorityIdDesc = 'FANTOKENS_BY_METADATA_ID_DISTINCT_COUNT_AUTHORITY_ID_DESC',
  FantokensByMetadataIdDistinctCountCreatedAtAsc = 'FANTOKENS_BY_METADATA_ID_DISTINCT_COUNT_CREATED_AT_ASC',
  FantokensByMetadataIdDistinctCountCreatedAtDesc = 'FANTOKENS_BY_METADATA_ID_DISTINCT_COUNT_CREATED_AT_DESC',
  FantokensByMetadataIdDistinctCountCreatedHeightAsc = 'FANTOKENS_BY_METADATA_ID_DISTINCT_COUNT_CREATED_HEIGHT_ASC',
  FantokensByMetadataIdDistinctCountCreatedHeightDesc = 'FANTOKENS_BY_METADATA_ID_DISTINCT_COUNT_CREATED_HEIGHT_DESC',
  FantokensByMetadataIdDistinctCountCreatorIdAsc = 'FANTOKENS_BY_METADATA_ID_DISTINCT_COUNT_CREATOR_ID_ASC',
  FantokensByMetadataIdDistinctCountCreatorIdDesc = 'FANTOKENS_BY_METADATA_ID_DISTINCT_COUNT_CREATOR_ID_DESC',
  FantokensByMetadataIdDistinctCountIdAsc = 'FANTOKENS_BY_METADATA_ID_DISTINCT_COUNT_ID_ASC',
  FantokensByMetadataIdDistinctCountIdDesc = 'FANTOKENS_BY_METADATA_ID_DISTINCT_COUNT_ID_DESC',
  FantokensByMetadataIdDistinctCountMaxSupplyAsc = 'FANTOKENS_BY_METADATA_ID_DISTINCT_COUNT_MAX_SUPPLY_ASC',
  FantokensByMetadataIdDistinctCountMaxSupplyDesc = 'FANTOKENS_BY_METADATA_ID_DISTINCT_COUNT_MAX_SUPPLY_DESC',
  FantokensByMetadataIdDistinctCountMetadataIdAsc = 'FANTOKENS_BY_METADATA_ID_DISTINCT_COUNT_METADATA_ID_ASC',
  FantokensByMetadataIdDistinctCountMetadataIdDesc = 'FANTOKENS_BY_METADATA_ID_DISTINCT_COUNT_METADATA_ID_DESC',
  FantokensByMetadataIdDistinctCountMinterIdAsc = 'FANTOKENS_BY_METADATA_ID_DISTINCT_COUNT_MINTER_ID_ASC',
  FantokensByMetadataIdDistinctCountMinterIdDesc = 'FANTOKENS_BY_METADATA_ID_DISTINCT_COUNT_MINTER_ID_DESC',
  FantokensByMetadataIdDistinctCountNameAsc = 'FANTOKENS_BY_METADATA_ID_DISTINCT_COUNT_NAME_ASC',
  FantokensByMetadataIdDistinctCountNameDesc = 'FANTOKENS_BY_METADATA_ID_DISTINCT_COUNT_NAME_DESC',
  FantokensByMetadataIdDistinctCountSupplyAsc = 'FANTOKENS_BY_METADATA_ID_DISTINCT_COUNT_SUPPLY_ASC',
  FantokensByMetadataIdDistinctCountSupplyDesc = 'FANTOKENS_BY_METADATA_ID_DISTINCT_COUNT_SUPPLY_DESC',
  FantokensByMetadataIdDistinctCountSymbolAsc = 'FANTOKENS_BY_METADATA_ID_DISTINCT_COUNT_SYMBOL_ASC',
  FantokensByMetadataIdDistinctCountSymbolDesc = 'FANTOKENS_BY_METADATA_ID_DISTINCT_COUNT_SYMBOL_DESC',
  FantokensByMetadataIdDistinctCountUpdatedAtAsc = 'FANTOKENS_BY_METADATA_ID_DISTINCT_COUNT_UPDATED_AT_ASC',
  FantokensByMetadataIdDistinctCountUpdatedAtDesc = 'FANTOKENS_BY_METADATA_ID_DISTINCT_COUNT_UPDATED_AT_DESC',
  FantokensByMetadataIdDistinctCountUpdatedHeightAsc = 'FANTOKENS_BY_METADATA_ID_DISTINCT_COUNT_UPDATED_HEIGHT_ASC',
  FantokensByMetadataIdDistinctCountUpdatedHeightDesc = 'FANTOKENS_BY_METADATA_ID_DISTINCT_COUNT_UPDATED_HEIGHT_DESC',
  FantokensByMetadataIdDistinctCountUriAsc = 'FANTOKENS_BY_METADATA_ID_DISTINCT_COUNT_URI_ASC',
  FantokensByMetadataIdDistinctCountUriDesc = 'FANTOKENS_BY_METADATA_ID_DISTINCT_COUNT_URI_DESC',
  FantokensByMetadataIdDistinctCountVerifiedAsc = 'FANTOKENS_BY_METADATA_ID_DISTINCT_COUNT_VERIFIED_ASC',
  FantokensByMetadataIdDistinctCountVerifiedDesc = 'FANTOKENS_BY_METADATA_ID_DISTINCT_COUNT_VERIFIED_DESC',
  FantokensByMetadataIdMaxAuthorityIdAsc = 'FANTOKENS_BY_METADATA_ID_MAX_AUTHORITY_ID_ASC',
  FantokensByMetadataIdMaxAuthorityIdDesc = 'FANTOKENS_BY_METADATA_ID_MAX_AUTHORITY_ID_DESC',
  FantokensByMetadataIdMaxCreatedAtAsc = 'FANTOKENS_BY_METADATA_ID_MAX_CREATED_AT_ASC',
  FantokensByMetadataIdMaxCreatedAtDesc = 'FANTOKENS_BY_METADATA_ID_MAX_CREATED_AT_DESC',
  FantokensByMetadataIdMaxCreatedHeightAsc = 'FANTOKENS_BY_METADATA_ID_MAX_CREATED_HEIGHT_ASC',
  FantokensByMetadataIdMaxCreatedHeightDesc = 'FANTOKENS_BY_METADATA_ID_MAX_CREATED_HEIGHT_DESC',
  FantokensByMetadataIdMaxCreatorIdAsc = 'FANTOKENS_BY_METADATA_ID_MAX_CREATOR_ID_ASC',
  FantokensByMetadataIdMaxCreatorIdDesc = 'FANTOKENS_BY_METADATA_ID_MAX_CREATOR_ID_DESC',
  FantokensByMetadataIdMaxIdAsc = 'FANTOKENS_BY_METADATA_ID_MAX_ID_ASC',
  FantokensByMetadataIdMaxIdDesc = 'FANTOKENS_BY_METADATA_ID_MAX_ID_DESC',
  FantokensByMetadataIdMaxMaxSupplyAsc = 'FANTOKENS_BY_METADATA_ID_MAX_MAX_SUPPLY_ASC',
  FantokensByMetadataIdMaxMaxSupplyDesc = 'FANTOKENS_BY_METADATA_ID_MAX_MAX_SUPPLY_DESC',
  FantokensByMetadataIdMaxMetadataIdAsc = 'FANTOKENS_BY_METADATA_ID_MAX_METADATA_ID_ASC',
  FantokensByMetadataIdMaxMetadataIdDesc = 'FANTOKENS_BY_METADATA_ID_MAX_METADATA_ID_DESC',
  FantokensByMetadataIdMaxMinterIdAsc = 'FANTOKENS_BY_METADATA_ID_MAX_MINTER_ID_ASC',
  FantokensByMetadataIdMaxMinterIdDesc = 'FANTOKENS_BY_METADATA_ID_MAX_MINTER_ID_DESC',
  FantokensByMetadataIdMaxNameAsc = 'FANTOKENS_BY_METADATA_ID_MAX_NAME_ASC',
  FantokensByMetadataIdMaxNameDesc = 'FANTOKENS_BY_METADATA_ID_MAX_NAME_DESC',
  FantokensByMetadataIdMaxSupplyAsc = 'FANTOKENS_BY_METADATA_ID_MAX_SUPPLY_ASC',
  FantokensByMetadataIdMaxSupplyDesc = 'FANTOKENS_BY_METADATA_ID_MAX_SUPPLY_DESC',
  FantokensByMetadataIdMaxSymbolAsc = 'FANTOKENS_BY_METADATA_ID_MAX_SYMBOL_ASC',
  FantokensByMetadataIdMaxSymbolDesc = 'FANTOKENS_BY_METADATA_ID_MAX_SYMBOL_DESC',
  FantokensByMetadataIdMaxUpdatedAtAsc = 'FANTOKENS_BY_METADATA_ID_MAX_UPDATED_AT_ASC',
  FantokensByMetadataIdMaxUpdatedAtDesc = 'FANTOKENS_BY_METADATA_ID_MAX_UPDATED_AT_DESC',
  FantokensByMetadataIdMaxUpdatedHeightAsc = 'FANTOKENS_BY_METADATA_ID_MAX_UPDATED_HEIGHT_ASC',
  FantokensByMetadataIdMaxUpdatedHeightDesc = 'FANTOKENS_BY_METADATA_ID_MAX_UPDATED_HEIGHT_DESC',
  FantokensByMetadataIdMaxUriAsc = 'FANTOKENS_BY_METADATA_ID_MAX_URI_ASC',
  FantokensByMetadataIdMaxUriDesc = 'FANTOKENS_BY_METADATA_ID_MAX_URI_DESC',
  FantokensByMetadataIdMaxVerifiedAsc = 'FANTOKENS_BY_METADATA_ID_MAX_VERIFIED_ASC',
  FantokensByMetadataIdMaxVerifiedDesc = 'FANTOKENS_BY_METADATA_ID_MAX_VERIFIED_DESC',
  FantokensByMetadataIdMinAuthorityIdAsc = 'FANTOKENS_BY_METADATA_ID_MIN_AUTHORITY_ID_ASC',
  FantokensByMetadataIdMinAuthorityIdDesc = 'FANTOKENS_BY_METADATA_ID_MIN_AUTHORITY_ID_DESC',
  FantokensByMetadataIdMinCreatedAtAsc = 'FANTOKENS_BY_METADATA_ID_MIN_CREATED_AT_ASC',
  FantokensByMetadataIdMinCreatedAtDesc = 'FANTOKENS_BY_METADATA_ID_MIN_CREATED_AT_DESC',
  FantokensByMetadataIdMinCreatedHeightAsc = 'FANTOKENS_BY_METADATA_ID_MIN_CREATED_HEIGHT_ASC',
  FantokensByMetadataIdMinCreatedHeightDesc = 'FANTOKENS_BY_METADATA_ID_MIN_CREATED_HEIGHT_DESC',
  FantokensByMetadataIdMinCreatorIdAsc = 'FANTOKENS_BY_METADATA_ID_MIN_CREATOR_ID_ASC',
  FantokensByMetadataIdMinCreatorIdDesc = 'FANTOKENS_BY_METADATA_ID_MIN_CREATOR_ID_DESC',
  FantokensByMetadataIdMinIdAsc = 'FANTOKENS_BY_METADATA_ID_MIN_ID_ASC',
  FantokensByMetadataIdMinIdDesc = 'FANTOKENS_BY_METADATA_ID_MIN_ID_DESC',
  FantokensByMetadataIdMinMaxSupplyAsc = 'FANTOKENS_BY_METADATA_ID_MIN_MAX_SUPPLY_ASC',
  FantokensByMetadataIdMinMaxSupplyDesc = 'FANTOKENS_BY_METADATA_ID_MIN_MAX_SUPPLY_DESC',
  FantokensByMetadataIdMinMetadataIdAsc = 'FANTOKENS_BY_METADATA_ID_MIN_METADATA_ID_ASC',
  FantokensByMetadataIdMinMetadataIdDesc = 'FANTOKENS_BY_METADATA_ID_MIN_METADATA_ID_DESC',
  FantokensByMetadataIdMinMinterIdAsc = 'FANTOKENS_BY_METADATA_ID_MIN_MINTER_ID_ASC',
  FantokensByMetadataIdMinMinterIdDesc = 'FANTOKENS_BY_METADATA_ID_MIN_MINTER_ID_DESC',
  FantokensByMetadataIdMinNameAsc = 'FANTOKENS_BY_METADATA_ID_MIN_NAME_ASC',
  FantokensByMetadataIdMinNameDesc = 'FANTOKENS_BY_METADATA_ID_MIN_NAME_DESC',
  FantokensByMetadataIdMinSupplyAsc = 'FANTOKENS_BY_METADATA_ID_MIN_SUPPLY_ASC',
  FantokensByMetadataIdMinSupplyDesc = 'FANTOKENS_BY_METADATA_ID_MIN_SUPPLY_DESC',
  FantokensByMetadataIdMinSymbolAsc = 'FANTOKENS_BY_METADATA_ID_MIN_SYMBOL_ASC',
  FantokensByMetadataIdMinSymbolDesc = 'FANTOKENS_BY_METADATA_ID_MIN_SYMBOL_DESC',
  FantokensByMetadataIdMinUpdatedAtAsc = 'FANTOKENS_BY_METADATA_ID_MIN_UPDATED_AT_ASC',
  FantokensByMetadataIdMinUpdatedAtDesc = 'FANTOKENS_BY_METADATA_ID_MIN_UPDATED_AT_DESC',
  FantokensByMetadataIdMinUpdatedHeightAsc = 'FANTOKENS_BY_METADATA_ID_MIN_UPDATED_HEIGHT_ASC',
  FantokensByMetadataIdMinUpdatedHeightDesc = 'FANTOKENS_BY_METADATA_ID_MIN_UPDATED_HEIGHT_DESC',
  FantokensByMetadataIdMinUriAsc = 'FANTOKENS_BY_METADATA_ID_MIN_URI_ASC',
  FantokensByMetadataIdMinUriDesc = 'FANTOKENS_BY_METADATA_ID_MIN_URI_DESC',
  FantokensByMetadataIdMinVerifiedAsc = 'FANTOKENS_BY_METADATA_ID_MIN_VERIFIED_ASC',
  FantokensByMetadataIdMinVerifiedDesc = 'FANTOKENS_BY_METADATA_ID_MIN_VERIFIED_DESC',
  FantokensByMetadataIdStddevPopulationAuthorityIdAsc = 'FANTOKENS_BY_METADATA_ID_STDDEV_POPULATION_AUTHORITY_ID_ASC',
  FantokensByMetadataIdStddevPopulationAuthorityIdDesc = 'FANTOKENS_BY_METADATA_ID_STDDEV_POPULATION_AUTHORITY_ID_DESC',
  FantokensByMetadataIdStddevPopulationCreatedAtAsc = 'FANTOKENS_BY_METADATA_ID_STDDEV_POPULATION_CREATED_AT_ASC',
  FantokensByMetadataIdStddevPopulationCreatedAtDesc = 'FANTOKENS_BY_METADATA_ID_STDDEV_POPULATION_CREATED_AT_DESC',
  FantokensByMetadataIdStddevPopulationCreatedHeightAsc = 'FANTOKENS_BY_METADATA_ID_STDDEV_POPULATION_CREATED_HEIGHT_ASC',
  FantokensByMetadataIdStddevPopulationCreatedHeightDesc = 'FANTOKENS_BY_METADATA_ID_STDDEV_POPULATION_CREATED_HEIGHT_DESC',
  FantokensByMetadataIdStddevPopulationCreatorIdAsc = 'FANTOKENS_BY_METADATA_ID_STDDEV_POPULATION_CREATOR_ID_ASC',
  FantokensByMetadataIdStddevPopulationCreatorIdDesc = 'FANTOKENS_BY_METADATA_ID_STDDEV_POPULATION_CREATOR_ID_DESC',
  FantokensByMetadataIdStddevPopulationIdAsc = 'FANTOKENS_BY_METADATA_ID_STDDEV_POPULATION_ID_ASC',
  FantokensByMetadataIdStddevPopulationIdDesc = 'FANTOKENS_BY_METADATA_ID_STDDEV_POPULATION_ID_DESC',
  FantokensByMetadataIdStddevPopulationMaxSupplyAsc = 'FANTOKENS_BY_METADATA_ID_STDDEV_POPULATION_MAX_SUPPLY_ASC',
  FantokensByMetadataIdStddevPopulationMaxSupplyDesc = 'FANTOKENS_BY_METADATA_ID_STDDEV_POPULATION_MAX_SUPPLY_DESC',
  FantokensByMetadataIdStddevPopulationMetadataIdAsc = 'FANTOKENS_BY_METADATA_ID_STDDEV_POPULATION_METADATA_ID_ASC',
  FantokensByMetadataIdStddevPopulationMetadataIdDesc = 'FANTOKENS_BY_METADATA_ID_STDDEV_POPULATION_METADATA_ID_DESC',
  FantokensByMetadataIdStddevPopulationMinterIdAsc = 'FANTOKENS_BY_METADATA_ID_STDDEV_POPULATION_MINTER_ID_ASC',
  FantokensByMetadataIdStddevPopulationMinterIdDesc = 'FANTOKENS_BY_METADATA_ID_STDDEV_POPULATION_MINTER_ID_DESC',
  FantokensByMetadataIdStddevPopulationNameAsc = 'FANTOKENS_BY_METADATA_ID_STDDEV_POPULATION_NAME_ASC',
  FantokensByMetadataIdStddevPopulationNameDesc = 'FANTOKENS_BY_METADATA_ID_STDDEV_POPULATION_NAME_DESC',
  FantokensByMetadataIdStddevPopulationSupplyAsc = 'FANTOKENS_BY_METADATA_ID_STDDEV_POPULATION_SUPPLY_ASC',
  FantokensByMetadataIdStddevPopulationSupplyDesc = 'FANTOKENS_BY_METADATA_ID_STDDEV_POPULATION_SUPPLY_DESC',
  FantokensByMetadataIdStddevPopulationSymbolAsc = 'FANTOKENS_BY_METADATA_ID_STDDEV_POPULATION_SYMBOL_ASC',
  FantokensByMetadataIdStddevPopulationSymbolDesc = 'FANTOKENS_BY_METADATA_ID_STDDEV_POPULATION_SYMBOL_DESC',
  FantokensByMetadataIdStddevPopulationUpdatedAtAsc = 'FANTOKENS_BY_METADATA_ID_STDDEV_POPULATION_UPDATED_AT_ASC',
  FantokensByMetadataIdStddevPopulationUpdatedAtDesc = 'FANTOKENS_BY_METADATA_ID_STDDEV_POPULATION_UPDATED_AT_DESC',
  FantokensByMetadataIdStddevPopulationUpdatedHeightAsc = 'FANTOKENS_BY_METADATA_ID_STDDEV_POPULATION_UPDATED_HEIGHT_ASC',
  FantokensByMetadataIdStddevPopulationUpdatedHeightDesc = 'FANTOKENS_BY_METADATA_ID_STDDEV_POPULATION_UPDATED_HEIGHT_DESC',
  FantokensByMetadataIdStddevPopulationUriAsc = 'FANTOKENS_BY_METADATA_ID_STDDEV_POPULATION_URI_ASC',
  FantokensByMetadataIdStddevPopulationUriDesc = 'FANTOKENS_BY_METADATA_ID_STDDEV_POPULATION_URI_DESC',
  FantokensByMetadataIdStddevPopulationVerifiedAsc = 'FANTOKENS_BY_METADATA_ID_STDDEV_POPULATION_VERIFIED_ASC',
  FantokensByMetadataIdStddevPopulationVerifiedDesc = 'FANTOKENS_BY_METADATA_ID_STDDEV_POPULATION_VERIFIED_DESC',
  FantokensByMetadataIdStddevSampleAuthorityIdAsc = 'FANTOKENS_BY_METADATA_ID_STDDEV_SAMPLE_AUTHORITY_ID_ASC',
  FantokensByMetadataIdStddevSampleAuthorityIdDesc = 'FANTOKENS_BY_METADATA_ID_STDDEV_SAMPLE_AUTHORITY_ID_DESC',
  FantokensByMetadataIdStddevSampleCreatedAtAsc = 'FANTOKENS_BY_METADATA_ID_STDDEV_SAMPLE_CREATED_AT_ASC',
  FantokensByMetadataIdStddevSampleCreatedAtDesc = 'FANTOKENS_BY_METADATA_ID_STDDEV_SAMPLE_CREATED_AT_DESC',
  FantokensByMetadataIdStddevSampleCreatedHeightAsc = 'FANTOKENS_BY_METADATA_ID_STDDEV_SAMPLE_CREATED_HEIGHT_ASC',
  FantokensByMetadataIdStddevSampleCreatedHeightDesc = 'FANTOKENS_BY_METADATA_ID_STDDEV_SAMPLE_CREATED_HEIGHT_DESC',
  FantokensByMetadataIdStddevSampleCreatorIdAsc = 'FANTOKENS_BY_METADATA_ID_STDDEV_SAMPLE_CREATOR_ID_ASC',
  FantokensByMetadataIdStddevSampleCreatorIdDesc = 'FANTOKENS_BY_METADATA_ID_STDDEV_SAMPLE_CREATOR_ID_DESC',
  FantokensByMetadataIdStddevSampleIdAsc = 'FANTOKENS_BY_METADATA_ID_STDDEV_SAMPLE_ID_ASC',
  FantokensByMetadataIdStddevSampleIdDesc = 'FANTOKENS_BY_METADATA_ID_STDDEV_SAMPLE_ID_DESC',
  FantokensByMetadataIdStddevSampleMaxSupplyAsc = 'FANTOKENS_BY_METADATA_ID_STDDEV_SAMPLE_MAX_SUPPLY_ASC',
  FantokensByMetadataIdStddevSampleMaxSupplyDesc = 'FANTOKENS_BY_METADATA_ID_STDDEV_SAMPLE_MAX_SUPPLY_DESC',
  FantokensByMetadataIdStddevSampleMetadataIdAsc = 'FANTOKENS_BY_METADATA_ID_STDDEV_SAMPLE_METADATA_ID_ASC',
  FantokensByMetadataIdStddevSampleMetadataIdDesc = 'FANTOKENS_BY_METADATA_ID_STDDEV_SAMPLE_METADATA_ID_DESC',
  FantokensByMetadataIdStddevSampleMinterIdAsc = 'FANTOKENS_BY_METADATA_ID_STDDEV_SAMPLE_MINTER_ID_ASC',
  FantokensByMetadataIdStddevSampleMinterIdDesc = 'FANTOKENS_BY_METADATA_ID_STDDEV_SAMPLE_MINTER_ID_DESC',
  FantokensByMetadataIdStddevSampleNameAsc = 'FANTOKENS_BY_METADATA_ID_STDDEV_SAMPLE_NAME_ASC',
  FantokensByMetadataIdStddevSampleNameDesc = 'FANTOKENS_BY_METADATA_ID_STDDEV_SAMPLE_NAME_DESC',
  FantokensByMetadataIdStddevSampleSupplyAsc = 'FANTOKENS_BY_METADATA_ID_STDDEV_SAMPLE_SUPPLY_ASC',
  FantokensByMetadataIdStddevSampleSupplyDesc = 'FANTOKENS_BY_METADATA_ID_STDDEV_SAMPLE_SUPPLY_DESC',
  FantokensByMetadataIdStddevSampleSymbolAsc = 'FANTOKENS_BY_METADATA_ID_STDDEV_SAMPLE_SYMBOL_ASC',
  FantokensByMetadataIdStddevSampleSymbolDesc = 'FANTOKENS_BY_METADATA_ID_STDDEV_SAMPLE_SYMBOL_DESC',
  FantokensByMetadataIdStddevSampleUpdatedAtAsc = 'FANTOKENS_BY_METADATA_ID_STDDEV_SAMPLE_UPDATED_AT_ASC',
  FantokensByMetadataIdStddevSampleUpdatedAtDesc = 'FANTOKENS_BY_METADATA_ID_STDDEV_SAMPLE_UPDATED_AT_DESC',
  FantokensByMetadataIdStddevSampleUpdatedHeightAsc = 'FANTOKENS_BY_METADATA_ID_STDDEV_SAMPLE_UPDATED_HEIGHT_ASC',
  FantokensByMetadataIdStddevSampleUpdatedHeightDesc = 'FANTOKENS_BY_METADATA_ID_STDDEV_SAMPLE_UPDATED_HEIGHT_DESC',
  FantokensByMetadataIdStddevSampleUriAsc = 'FANTOKENS_BY_METADATA_ID_STDDEV_SAMPLE_URI_ASC',
  FantokensByMetadataIdStddevSampleUriDesc = 'FANTOKENS_BY_METADATA_ID_STDDEV_SAMPLE_URI_DESC',
  FantokensByMetadataIdStddevSampleVerifiedAsc = 'FANTOKENS_BY_METADATA_ID_STDDEV_SAMPLE_VERIFIED_ASC',
  FantokensByMetadataIdStddevSampleVerifiedDesc = 'FANTOKENS_BY_METADATA_ID_STDDEV_SAMPLE_VERIFIED_DESC',
  FantokensByMetadataIdSumAuthorityIdAsc = 'FANTOKENS_BY_METADATA_ID_SUM_AUTHORITY_ID_ASC',
  FantokensByMetadataIdSumAuthorityIdDesc = 'FANTOKENS_BY_METADATA_ID_SUM_AUTHORITY_ID_DESC',
  FantokensByMetadataIdSumCreatedAtAsc = 'FANTOKENS_BY_METADATA_ID_SUM_CREATED_AT_ASC',
  FantokensByMetadataIdSumCreatedAtDesc = 'FANTOKENS_BY_METADATA_ID_SUM_CREATED_AT_DESC',
  FantokensByMetadataIdSumCreatedHeightAsc = 'FANTOKENS_BY_METADATA_ID_SUM_CREATED_HEIGHT_ASC',
  FantokensByMetadataIdSumCreatedHeightDesc = 'FANTOKENS_BY_METADATA_ID_SUM_CREATED_HEIGHT_DESC',
  FantokensByMetadataIdSumCreatorIdAsc = 'FANTOKENS_BY_METADATA_ID_SUM_CREATOR_ID_ASC',
  FantokensByMetadataIdSumCreatorIdDesc = 'FANTOKENS_BY_METADATA_ID_SUM_CREATOR_ID_DESC',
  FantokensByMetadataIdSumIdAsc = 'FANTOKENS_BY_METADATA_ID_SUM_ID_ASC',
  FantokensByMetadataIdSumIdDesc = 'FANTOKENS_BY_METADATA_ID_SUM_ID_DESC',
  FantokensByMetadataIdSumMaxSupplyAsc = 'FANTOKENS_BY_METADATA_ID_SUM_MAX_SUPPLY_ASC',
  FantokensByMetadataIdSumMaxSupplyDesc = 'FANTOKENS_BY_METADATA_ID_SUM_MAX_SUPPLY_DESC',
  FantokensByMetadataIdSumMetadataIdAsc = 'FANTOKENS_BY_METADATA_ID_SUM_METADATA_ID_ASC',
  FantokensByMetadataIdSumMetadataIdDesc = 'FANTOKENS_BY_METADATA_ID_SUM_METADATA_ID_DESC',
  FantokensByMetadataIdSumMinterIdAsc = 'FANTOKENS_BY_METADATA_ID_SUM_MINTER_ID_ASC',
  FantokensByMetadataIdSumMinterIdDesc = 'FANTOKENS_BY_METADATA_ID_SUM_MINTER_ID_DESC',
  FantokensByMetadataIdSumNameAsc = 'FANTOKENS_BY_METADATA_ID_SUM_NAME_ASC',
  FantokensByMetadataIdSumNameDesc = 'FANTOKENS_BY_METADATA_ID_SUM_NAME_DESC',
  FantokensByMetadataIdSumSupplyAsc = 'FANTOKENS_BY_METADATA_ID_SUM_SUPPLY_ASC',
  FantokensByMetadataIdSumSupplyDesc = 'FANTOKENS_BY_METADATA_ID_SUM_SUPPLY_DESC',
  FantokensByMetadataIdSumSymbolAsc = 'FANTOKENS_BY_METADATA_ID_SUM_SYMBOL_ASC',
  FantokensByMetadataIdSumSymbolDesc = 'FANTOKENS_BY_METADATA_ID_SUM_SYMBOL_DESC',
  FantokensByMetadataIdSumUpdatedAtAsc = 'FANTOKENS_BY_METADATA_ID_SUM_UPDATED_AT_ASC',
  FantokensByMetadataIdSumUpdatedAtDesc = 'FANTOKENS_BY_METADATA_ID_SUM_UPDATED_AT_DESC',
  FantokensByMetadataIdSumUpdatedHeightAsc = 'FANTOKENS_BY_METADATA_ID_SUM_UPDATED_HEIGHT_ASC',
  FantokensByMetadataIdSumUpdatedHeightDesc = 'FANTOKENS_BY_METADATA_ID_SUM_UPDATED_HEIGHT_DESC',
  FantokensByMetadataIdSumUriAsc = 'FANTOKENS_BY_METADATA_ID_SUM_URI_ASC',
  FantokensByMetadataIdSumUriDesc = 'FANTOKENS_BY_METADATA_ID_SUM_URI_DESC',
  FantokensByMetadataIdSumVerifiedAsc = 'FANTOKENS_BY_METADATA_ID_SUM_VERIFIED_ASC',
  FantokensByMetadataIdSumVerifiedDesc = 'FANTOKENS_BY_METADATA_ID_SUM_VERIFIED_DESC',
  FantokensByMetadataIdVariancePopulationAuthorityIdAsc = 'FANTOKENS_BY_METADATA_ID_VARIANCE_POPULATION_AUTHORITY_ID_ASC',
  FantokensByMetadataIdVariancePopulationAuthorityIdDesc = 'FANTOKENS_BY_METADATA_ID_VARIANCE_POPULATION_AUTHORITY_ID_DESC',
  FantokensByMetadataIdVariancePopulationCreatedAtAsc = 'FANTOKENS_BY_METADATA_ID_VARIANCE_POPULATION_CREATED_AT_ASC',
  FantokensByMetadataIdVariancePopulationCreatedAtDesc = 'FANTOKENS_BY_METADATA_ID_VARIANCE_POPULATION_CREATED_AT_DESC',
  FantokensByMetadataIdVariancePopulationCreatedHeightAsc = 'FANTOKENS_BY_METADATA_ID_VARIANCE_POPULATION_CREATED_HEIGHT_ASC',
  FantokensByMetadataIdVariancePopulationCreatedHeightDesc = 'FANTOKENS_BY_METADATA_ID_VARIANCE_POPULATION_CREATED_HEIGHT_DESC',
  FantokensByMetadataIdVariancePopulationCreatorIdAsc = 'FANTOKENS_BY_METADATA_ID_VARIANCE_POPULATION_CREATOR_ID_ASC',
  FantokensByMetadataIdVariancePopulationCreatorIdDesc = 'FANTOKENS_BY_METADATA_ID_VARIANCE_POPULATION_CREATOR_ID_DESC',
  FantokensByMetadataIdVariancePopulationIdAsc = 'FANTOKENS_BY_METADATA_ID_VARIANCE_POPULATION_ID_ASC',
  FantokensByMetadataIdVariancePopulationIdDesc = 'FANTOKENS_BY_METADATA_ID_VARIANCE_POPULATION_ID_DESC',
  FantokensByMetadataIdVariancePopulationMaxSupplyAsc = 'FANTOKENS_BY_METADATA_ID_VARIANCE_POPULATION_MAX_SUPPLY_ASC',
  FantokensByMetadataIdVariancePopulationMaxSupplyDesc = 'FANTOKENS_BY_METADATA_ID_VARIANCE_POPULATION_MAX_SUPPLY_DESC',
  FantokensByMetadataIdVariancePopulationMetadataIdAsc = 'FANTOKENS_BY_METADATA_ID_VARIANCE_POPULATION_METADATA_ID_ASC',
  FantokensByMetadataIdVariancePopulationMetadataIdDesc = 'FANTOKENS_BY_METADATA_ID_VARIANCE_POPULATION_METADATA_ID_DESC',
  FantokensByMetadataIdVariancePopulationMinterIdAsc = 'FANTOKENS_BY_METADATA_ID_VARIANCE_POPULATION_MINTER_ID_ASC',
  FantokensByMetadataIdVariancePopulationMinterIdDesc = 'FANTOKENS_BY_METADATA_ID_VARIANCE_POPULATION_MINTER_ID_DESC',
  FantokensByMetadataIdVariancePopulationNameAsc = 'FANTOKENS_BY_METADATA_ID_VARIANCE_POPULATION_NAME_ASC',
  FantokensByMetadataIdVariancePopulationNameDesc = 'FANTOKENS_BY_METADATA_ID_VARIANCE_POPULATION_NAME_DESC',
  FantokensByMetadataIdVariancePopulationSupplyAsc = 'FANTOKENS_BY_METADATA_ID_VARIANCE_POPULATION_SUPPLY_ASC',
  FantokensByMetadataIdVariancePopulationSupplyDesc = 'FANTOKENS_BY_METADATA_ID_VARIANCE_POPULATION_SUPPLY_DESC',
  FantokensByMetadataIdVariancePopulationSymbolAsc = 'FANTOKENS_BY_METADATA_ID_VARIANCE_POPULATION_SYMBOL_ASC',
  FantokensByMetadataIdVariancePopulationSymbolDesc = 'FANTOKENS_BY_METADATA_ID_VARIANCE_POPULATION_SYMBOL_DESC',
  FantokensByMetadataIdVariancePopulationUpdatedAtAsc = 'FANTOKENS_BY_METADATA_ID_VARIANCE_POPULATION_UPDATED_AT_ASC',
  FantokensByMetadataIdVariancePopulationUpdatedAtDesc = 'FANTOKENS_BY_METADATA_ID_VARIANCE_POPULATION_UPDATED_AT_DESC',
  FantokensByMetadataIdVariancePopulationUpdatedHeightAsc = 'FANTOKENS_BY_METADATA_ID_VARIANCE_POPULATION_UPDATED_HEIGHT_ASC',
  FantokensByMetadataIdVariancePopulationUpdatedHeightDesc = 'FANTOKENS_BY_METADATA_ID_VARIANCE_POPULATION_UPDATED_HEIGHT_DESC',
  FantokensByMetadataIdVariancePopulationUriAsc = 'FANTOKENS_BY_METADATA_ID_VARIANCE_POPULATION_URI_ASC',
  FantokensByMetadataIdVariancePopulationUriDesc = 'FANTOKENS_BY_METADATA_ID_VARIANCE_POPULATION_URI_DESC',
  FantokensByMetadataIdVariancePopulationVerifiedAsc = 'FANTOKENS_BY_METADATA_ID_VARIANCE_POPULATION_VERIFIED_ASC',
  FantokensByMetadataIdVariancePopulationVerifiedDesc = 'FANTOKENS_BY_METADATA_ID_VARIANCE_POPULATION_VERIFIED_DESC',
  FantokensByMetadataIdVarianceSampleAuthorityIdAsc = 'FANTOKENS_BY_METADATA_ID_VARIANCE_SAMPLE_AUTHORITY_ID_ASC',
  FantokensByMetadataIdVarianceSampleAuthorityIdDesc = 'FANTOKENS_BY_METADATA_ID_VARIANCE_SAMPLE_AUTHORITY_ID_DESC',
  FantokensByMetadataIdVarianceSampleCreatedAtAsc = 'FANTOKENS_BY_METADATA_ID_VARIANCE_SAMPLE_CREATED_AT_ASC',
  FantokensByMetadataIdVarianceSampleCreatedAtDesc = 'FANTOKENS_BY_METADATA_ID_VARIANCE_SAMPLE_CREATED_AT_DESC',
  FantokensByMetadataIdVarianceSampleCreatedHeightAsc = 'FANTOKENS_BY_METADATA_ID_VARIANCE_SAMPLE_CREATED_HEIGHT_ASC',
  FantokensByMetadataIdVarianceSampleCreatedHeightDesc = 'FANTOKENS_BY_METADATA_ID_VARIANCE_SAMPLE_CREATED_HEIGHT_DESC',
  FantokensByMetadataIdVarianceSampleCreatorIdAsc = 'FANTOKENS_BY_METADATA_ID_VARIANCE_SAMPLE_CREATOR_ID_ASC',
  FantokensByMetadataIdVarianceSampleCreatorIdDesc = 'FANTOKENS_BY_METADATA_ID_VARIANCE_SAMPLE_CREATOR_ID_DESC',
  FantokensByMetadataIdVarianceSampleIdAsc = 'FANTOKENS_BY_METADATA_ID_VARIANCE_SAMPLE_ID_ASC',
  FantokensByMetadataIdVarianceSampleIdDesc = 'FANTOKENS_BY_METADATA_ID_VARIANCE_SAMPLE_ID_DESC',
  FantokensByMetadataIdVarianceSampleMaxSupplyAsc = 'FANTOKENS_BY_METADATA_ID_VARIANCE_SAMPLE_MAX_SUPPLY_ASC',
  FantokensByMetadataIdVarianceSampleMaxSupplyDesc = 'FANTOKENS_BY_METADATA_ID_VARIANCE_SAMPLE_MAX_SUPPLY_DESC',
  FantokensByMetadataIdVarianceSampleMetadataIdAsc = 'FANTOKENS_BY_METADATA_ID_VARIANCE_SAMPLE_METADATA_ID_ASC',
  FantokensByMetadataIdVarianceSampleMetadataIdDesc = 'FANTOKENS_BY_METADATA_ID_VARIANCE_SAMPLE_METADATA_ID_DESC',
  FantokensByMetadataIdVarianceSampleMinterIdAsc = 'FANTOKENS_BY_METADATA_ID_VARIANCE_SAMPLE_MINTER_ID_ASC',
  FantokensByMetadataIdVarianceSampleMinterIdDesc = 'FANTOKENS_BY_METADATA_ID_VARIANCE_SAMPLE_MINTER_ID_DESC',
  FantokensByMetadataIdVarianceSampleNameAsc = 'FANTOKENS_BY_METADATA_ID_VARIANCE_SAMPLE_NAME_ASC',
  FantokensByMetadataIdVarianceSampleNameDesc = 'FANTOKENS_BY_METADATA_ID_VARIANCE_SAMPLE_NAME_DESC',
  FantokensByMetadataIdVarianceSampleSupplyAsc = 'FANTOKENS_BY_METADATA_ID_VARIANCE_SAMPLE_SUPPLY_ASC',
  FantokensByMetadataIdVarianceSampleSupplyDesc = 'FANTOKENS_BY_METADATA_ID_VARIANCE_SAMPLE_SUPPLY_DESC',
  FantokensByMetadataIdVarianceSampleSymbolAsc = 'FANTOKENS_BY_METADATA_ID_VARIANCE_SAMPLE_SYMBOL_ASC',
  FantokensByMetadataIdVarianceSampleSymbolDesc = 'FANTOKENS_BY_METADATA_ID_VARIANCE_SAMPLE_SYMBOL_DESC',
  FantokensByMetadataIdVarianceSampleUpdatedAtAsc = 'FANTOKENS_BY_METADATA_ID_VARIANCE_SAMPLE_UPDATED_AT_ASC',
  FantokensByMetadataIdVarianceSampleUpdatedAtDesc = 'FANTOKENS_BY_METADATA_ID_VARIANCE_SAMPLE_UPDATED_AT_DESC',
  FantokensByMetadataIdVarianceSampleUpdatedHeightAsc = 'FANTOKENS_BY_METADATA_ID_VARIANCE_SAMPLE_UPDATED_HEIGHT_ASC',
  FantokensByMetadataIdVarianceSampleUpdatedHeightDesc = 'FANTOKENS_BY_METADATA_ID_VARIANCE_SAMPLE_UPDATED_HEIGHT_DESC',
  FantokensByMetadataIdVarianceSampleUriAsc = 'FANTOKENS_BY_METADATA_ID_VARIANCE_SAMPLE_URI_ASC',
  FantokensByMetadataIdVarianceSampleUriDesc = 'FANTOKENS_BY_METADATA_ID_VARIANCE_SAMPLE_URI_DESC',
  FantokensByMetadataIdVarianceSampleVerifiedAsc = 'FANTOKENS_BY_METADATA_ID_VARIANCE_SAMPLE_VERIFIED_ASC',
  FantokensByMetadataIdVarianceSampleVerifiedDesc = 'FANTOKENS_BY_METADATA_ID_VARIANCE_SAMPLE_VERIFIED_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  ImageAsc = 'IMAGE_ASC',
  ImageDesc = 'IMAGE_DESC',
  LinksAsc = 'LINKS_ASC',
  LinksDesc = 'LINKS_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  ProjectInfoAsc = 'PROJECT_INFO_ASC',
  ProjectInfoDesc = 'PROJECT_INFO_DESC'
}

export type FantokenMetadatum = Node & {
  __typename?: 'FantokenMetadatum';
  /** Reads and enables pagination through a set of `Account`. */
  accountsByFantokenMetadataIdAndAuthorityId: FantokenMetadatumAccountsByFantokenMetadataIdAndAuthorityIdManyToManyConnection;
  /** Reads and enables pagination through a set of `Account`. */
  accountsByFantokenMetadataIdAndCreatorId: FantokenMetadatumAccountsByFantokenMetadataIdAndCreatorIdManyToManyConnection;
  /** Reads and enables pagination through a set of `Account`. */
  accountsByFantokenMetadataIdAndMinterId: FantokenMetadatumAccountsByFantokenMetadataIdAndMinterIdManyToManyConnection;
  biography?: Maybe<Scalars['String']>;
  /** Reads and enables pagination through a set of `Fantoken`. */
  fantokensByMetadataId: FantokensConnection;
  id: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  links?: Maybe<Scalars['JSON']>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  projectInfo?: Maybe<Scalars['String']>;
};


export type FantokenMetadatumAccountsByFantokenMetadataIdAndAuthorityIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  distinct?: InputMaybe<Array<InputMaybe<Accounts_Distinct_Enum>>>;
  filter?: InputMaybe<AccountFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AccountsOrderBy>>;
};


export type FantokenMetadatumAccountsByFantokenMetadataIdAndCreatorIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  distinct?: InputMaybe<Array<InputMaybe<Accounts_Distinct_Enum>>>;
  filter?: InputMaybe<AccountFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AccountsOrderBy>>;
};


export type FantokenMetadatumAccountsByFantokenMetadataIdAndMinterIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  distinct?: InputMaybe<Array<InputMaybe<Accounts_Distinct_Enum>>>;
  filter?: InputMaybe<AccountFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AccountsOrderBy>>;
};


export type FantokenMetadatumFantokensByMetadataIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  distinct?: InputMaybe<Array<InputMaybe<Fantokens_Distinct_Enum>>>;
  filter?: InputMaybe<FantokenFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<FantokensOrderBy>>;
};

/** A connection to a list of `Account` values, with data from `Fantoken`. */
export type FantokenMetadatumAccountsByFantokenMetadataIdAndAuthorityIdManyToManyConnection = {
  __typename?: 'FantokenMetadatumAccountsByFantokenMetadataIdAndAuthorityIdManyToManyConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<AccountAggregates>;
  /** A list of edges which contains the `Account`, info from the `Fantoken`, and the cursor to aid in pagination. */
  edges: Array<FantokenMetadatumAccountsByFantokenMetadataIdAndAuthorityIdManyToManyEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<AccountAggregates>>;
  /** A list of `Account` objects. */
  nodes: Array<Maybe<Account>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Account` you could get from the connection. */
  totalCount: Scalars['Int'];
};


/** A connection to a list of `Account` values, with data from `Fantoken`. */
export type FantokenMetadatumAccountsByFantokenMetadataIdAndAuthorityIdManyToManyConnectionGroupedAggregatesArgs = {
  groupBy: Array<AccountsGroupBy>;
  having?: InputMaybe<AccountsHavingInput>;
};

/** A `Account` edge in the connection, with data from `Fantoken`. */
export type FantokenMetadatumAccountsByFantokenMetadataIdAndAuthorityIdManyToManyEdge = {
  __typename?: 'FantokenMetadatumAccountsByFantokenMetadataIdAndAuthorityIdManyToManyEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** Reads and enables pagination through a set of `Fantoken`. */
  fantokensAuthority: FantokensConnection;
  /** The `Account` at the end of the edge. */
  node?: Maybe<Account>;
};


/** A `Account` edge in the connection, with data from `Fantoken`. */
export type FantokenMetadatumAccountsByFantokenMetadataIdAndAuthorityIdManyToManyEdgeFantokensAuthorityArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  distinct?: InputMaybe<Array<InputMaybe<Fantokens_Distinct_Enum>>>;
  filter?: InputMaybe<FantokenFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<FantokensOrderBy>>;
};

/** A connection to a list of `Account` values, with data from `Fantoken`. */
export type FantokenMetadatumAccountsByFantokenMetadataIdAndCreatorIdManyToManyConnection = {
  __typename?: 'FantokenMetadatumAccountsByFantokenMetadataIdAndCreatorIdManyToManyConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<AccountAggregates>;
  /** A list of edges which contains the `Account`, info from the `Fantoken`, and the cursor to aid in pagination. */
  edges: Array<FantokenMetadatumAccountsByFantokenMetadataIdAndCreatorIdManyToManyEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<AccountAggregates>>;
  /** A list of `Account` objects. */
  nodes: Array<Maybe<Account>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Account` you could get from the connection. */
  totalCount: Scalars['Int'];
};


/** A connection to a list of `Account` values, with data from `Fantoken`. */
export type FantokenMetadatumAccountsByFantokenMetadataIdAndCreatorIdManyToManyConnectionGroupedAggregatesArgs = {
  groupBy: Array<AccountsGroupBy>;
  having?: InputMaybe<AccountsHavingInput>;
};

/** A `Account` edge in the connection, with data from `Fantoken`. */
export type FantokenMetadatumAccountsByFantokenMetadataIdAndCreatorIdManyToManyEdge = {
  __typename?: 'FantokenMetadatumAccountsByFantokenMetadataIdAndCreatorIdManyToManyEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** Reads and enables pagination through a set of `Fantoken`. */
  fantokensCreated: FantokensConnection;
  /** The `Account` at the end of the edge. */
  node?: Maybe<Account>;
};


/** A `Account` edge in the connection, with data from `Fantoken`. */
export type FantokenMetadatumAccountsByFantokenMetadataIdAndCreatorIdManyToManyEdgeFantokensCreatedArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  distinct?: InputMaybe<Array<InputMaybe<Fantokens_Distinct_Enum>>>;
  filter?: InputMaybe<FantokenFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<FantokensOrderBy>>;
};

/** A connection to a list of `Account` values, with data from `Fantoken`. */
export type FantokenMetadatumAccountsByFantokenMetadataIdAndMinterIdManyToManyConnection = {
  __typename?: 'FantokenMetadatumAccountsByFantokenMetadataIdAndMinterIdManyToManyConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<AccountAggregates>;
  /** A list of edges which contains the `Account`, info from the `Fantoken`, and the cursor to aid in pagination. */
  edges: Array<FantokenMetadatumAccountsByFantokenMetadataIdAndMinterIdManyToManyEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<AccountAggregates>>;
  /** A list of `Account` objects. */
  nodes: Array<Maybe<Account>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Account` you could get from the connection. */
  totalCount: Scalars['Int'];
};


/** A connection to a list of `Account` values, with data from `Fantoken`. */
export type FantokenMetadatumAccountsByFantokenMetadataIdAndMinterIdManyToManyConnectionGroupedAggregatesArgs = {
  groupBy: Array<AccountsGroupBy>;
  having?: InputMaybe<AccountsHavingInput>;
};

/** A `Account` edge in the connection, with data from `Fantoken`. */
export type FantokenMetadatumAccountsByFantokenMetadataIdAndMinterIdManyToManyEdge = {
  __typename?: 'FantokenMetadatumAccountsByFantokenMetadataIdAndMinterIdManyToManyEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** Reads and enables pagination through a set of `Fantoken`. */
  fantokensMinter: FantokensConnection;
  /** The `Account` at the end of the edge. */
  node?: Maybe<Account>;
};


/** A `Account` edge in the connection, with data from `Fantoken`. */
export type FantokenMetadatumAccountsByFantokenMetadataIdAndMinterIdManyToManyEdgeFantokensMinterArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  distinct?: InputMaybe<Array<InputMaybe<Fantokens_Distinct_Enum>>>;
  filter?: InputMaybe<FantokenFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<FantokensOrderBy>>;
};

export type FantokenMetadatumAggregates = {
  __typename?: 'FantokenMetadatumAggregates';
  /** Distinct count aggregates across the matching connection (ignoring before/after/first/last/offset) */
  distinctCount?: Maybe<FantokenMetadatumDistinctCountAggregates>;
  keys?: Maybe<Array<Scalars['String']>>;
};

export type FantokenMetadatumDistinctCountAggregates = {
  __typename?: 'FantokenMetadatumDistinctCountAggregates';
  /** Distinct count of biography across the matching connection */
  biography?: Maybe<Scalars['BigInt']>;
  /** Distinct count of id across the matching connection */
  id?: Maybe<Scalars['BigInt']>;
  /** Distinct count of image across the matching connection */
  image?: Maybe<Scalars['BigInt']>;
  /** Distinct count of links across the matching connection */
  links?: Maybe<Scalars['BigInt']>;
  /** Distinct count of projectInfo across the matching connection */
  projectInfo?: Maybe<Scalars['BigInt']>;
};

/** A filter to be used against `FantokenMetadatum` object types. All fields are combined with a logical ‘and.’ */
export type FantokenMetadatumFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<FantokenMetadatumFilter>>;
  /** Filter by the object’s `biography` field. */
  biography?: InputMaybe<StringFilter>;
  /** Filter by the object’s `fantokensByMetadataId` relation. */
  fantokensByMetadataId?: InputMaybe<FantokenMetadatumToManyFantokenFilter>;
  /** Some related `fantokensByMetadataId` exist. */
  fantokensByMetadataIdExist?: InputMaybe<Scalars['Boolean']>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<StringFilter>;
  /** Filter by the object’s `image` field. */
  image?: InputMaybe<StringFilter>;
  /** Filter by the object’s `links` field. */
  links?: InputMaybe<JsonFilter>;
  /** Negates the expression. */
  not?: InputMaybe<FantokenMetadatumFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<FantokenMetadatumFilter>>;
  /** Filter by the object’s `projectInfo` field. */
  projectInfo?: InputMaybe<StringFilter>;
};

/** A filter to be used against many `Fantoken` object types. All fields are combined with a logical ‘and.’ */
export type FantokenMetadatumToManyFantokenFilter = {
  /** Aggregates across related `Fantoken` match the filter criteria. */
  aggregates?: InputMaybe<FantokenAggregatesFilter>;
  /** Every related `Fantoken` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<FantokenFilter>;
  /** No related `Fantoken` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<FantokenFilter>;
  /** Some related `Fantoken` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<FantokenFilter>;
};

export type FantokenMinAggregateFilter = {
  createdHeight?: InputMaybe<BigFloatFilter>;
  maxSupply?: InputMaybe<BigFloatFilter>;
  supply?: InputMaybe<BigFloatFilter>;
  updatedHeight?: InputMaybe<BigFloatFilter>;
};

export type FantokenMinAggregates = {
  __typename?: 'FantokenMinAggregates';
  /** Minimum of createdHeight across the matching connection */
  createdHeight?: Maybe<Scalars['BigFloat']>;
  /** Minimum of maxSupply across the matching connection */
  maxSupply?: Maybe<Scalars['BigFloat']>;
  /** Minimum of supply across the matching connection */
  supply?: Maybe<Scalars['BigFloat']>;
  /** Minimum of updatedHeight across the matching connection */
  updatedHeight?: Maybe<Scalars['BigFloat']>;
};

export type FantokenStddevPopulationAggregateFilter = {
  createdHeight?: InputMaybe<BigFloatFilter>;
  maxSupply?: InputMaybe<BigFloatFilter>;
  supply?: InputMaybe<BigFloatFilter>;
  updatedHeight?: InputMaybe<BigFloatFilter>;
};

export type FantokenStddevPopulationAggregates = {
  __typename?: 'FantokenStddevPopulationAggregates';
  /** Population standard deviation of createdHeight across the matching connection */
  createdHeight?: Maybe<Scalars['BigFloat']>;
  /** Population standard deviation of maxSupply across the matching connection */
  maxSupply?: Maybe<Scalars['BigFloat']>;
  /** Population standard deviation of supply across the matching connection */
  supply?: Maybe<Scalars['BigFloat']>;
  /** Population standard deviation of updatedHeight across the matching connection */
  updatedHeight?: Maybe<Scalars['BigFloat']>;
};

export type FantokenStddevSampleAggregateFilter = {
  createdHeight?: InputMaybe<BigFloatFilter>;
  maxSupply?: InputMaybe<BigFloatFilter>;
  supply?: InputMaybe<BigFloatFilter>;
  updatedHeight?: InputMaybe<BigFloatFilter>;
};

export type FantokenStddevSampleAggregates = {
  __typename?: 'FantokenStddevSampleAggregates';
  /** Sample standard deviation of createdHeight across the matching connection */
  createdHeight?: Maybe<Scalars['BigFloat']>;
  /** Sample standard deviation of maxSupply across the matching connection */
  maxSupply?: Maybe<Scalars['BigFloat']>;
  /** Sample standard deviation of supply across the matching connection */
  supply?: Maybe<Scalars['BigFloat']>;
  /** Sample standard deviation of updatedHeight across the matching connection */
  updatedHeight?: Maybe<Scalars['BigFloat']>;
};

export type FantokenSumAggregateFilter = {
  createdHeight?: InputMaybe<BigFloatFilter>;
  maxSupply?: InputMaybe<BigFloatFilter>;
  supply?: InputMaybe<BigFloatFilter>;
  updatedHeight?: InputMaybe<BigFloatFilter>;
};

export type FantokenSumAggregates = {
  __typename?: 'FantokenSumAggregates';
  /** Sum of createdHeight across the matching connection */
  createdHeight: Scalars['BigFloat'];
  /** Sum of maxSupply across the matching connection */
  maxSupply: Scalars['BigFloat'];
  /** Sum of supply across the matching connection */
  supply: Scalars['BigFloat'];
  /** Sum of updatedHeight across the matching connection */
  updatedHeight: Scalars['BigFloat'];
};

/** A filter to be used against many `FantokenFavorite` object types. All fields are combined with a logical ‘and.’ */
export type FantokenToManyFantokenFavoriteFilter = {
  /** Aggregates across related `FantokenFavorite` match the filter criteria. */
  aggregates?: InputMaybe<FantokenFavoriteAggregatesFilter>;
  /** Every related `FantokenFavorite` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<FantokenFavoriteFilter>;
  /** No related `FantokenFavorite` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<FantokenFavoriteFilter>;
  /** Some related `FantokenFavorite` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<FantokenFavoriteFilter>;
};

export type FantokenVariancePopulationAggregateFilter = {
  createdHeight?: InputMaybe<BigFloatFilter>;
  maxSupply?: InputMaybe<BigFloatFilter>;
  supply?: InputMaybe<BigFloatFilter>;
  updatedHeight?: InputMaybe<BigFloatFilter>;
};

export type FantokenVariancePopulationAggregates = {
  __typename?: 'FantokenVariancePopulationAggregates';
  /** Population variance of createdHeight across the matching connection */
  createdHeight?: Maybe<Scalars['BigFloat']>;
  /** Population variance of maxSupply across the matching connection */
  maxSupply?: Maybe<Scalars['BigFloat']>;
  /** Population variance of supply across the matching connection */
  supply?: Maybe<Scalars['BigFloat']>;
  /** Population variance of updatedHeight across the matching connection */
  updatedHeight?: Maybe<Scalars['BigFloat']>;
};

export type FantokenVarianceSampleAggregateFilter = {
  createdHeight?: InputMaybe<BigFloatFilter>;
  maxSupply?: InputMaybe<BigFloatFilter>;
  supply?: InputMaybe<BigFloatFilter>;
  updatedHeight?: InputMaybe<BigFloatFilter>;
};

export type FantokenVarianceSampleAggregates = {
  __typename?: 'FantokenVarianceSampleAggregates';
  /** Sample variance of createdHeight across the matching connection */
  createdHeight?: Maybe<Scalars['BigFloat']>;
  /** Sample variance of maxSupply across the matching connection */
  maxSupply?: Maybe<Scalars['BigFloat']>;
  /** Sample variance of supply across the matching connection */
  supply?: Maybe<Scalars['BigFloat']>;
  /** Sample variance of updatedHeight across the matching connection */
  updatedHeight?: Maybe<Scalars['BigFloat']>;
};

/** A connection to a list of `Fantoken` values. */
export type FantokensConnection = {
  __typename?: 'FantokensConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<FantokenAggregates>;
  /** A list of edges which contains the `Fantoken` and cursor to aid in pagination. */
  edges: Array<FantokensEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<FantokenAggregates>>;
  /** A list of `Fantoken` objects. */
  nodes: Array<Maybe<Fantoken>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Fantoken` you could get from the connection. */
  totalCount: Scalars['Int'];
};


/** A connection to a list of `Fantoken` values. */
export type FantokensConnectionGroupedAggregatesArgs = {
  groupBy: Array<FantokensGroupBy>;
  having?: InputMaybe<FantokensHavingInput>;
};

/** A `Fantoken` edge in the connection. */
export type FantokensEdge = {
  __typename?: 'FantokensEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Fantoken` at the end of the edge. */
  node?: Maybe<Fantoken>;
};

/** Grouping methods for `Fantoken` for usage during aggregation. */
export enum FantokensGroupBy {
  AuthorityId = 'AUTHORITY_ID',
  CreatedAt = 'CREATED_AT',
  CreatedAtTruncatedToDay = 'CREATED_AT_TRUNCATED_TO_DAY',
  CreatedAtTruncatedToHour = 'CREATED_AT_TRUNCATED_TO_HOUR',
  CreatedHeight = 'CREATED_HEIGHT',
  CreatorId = 'CREATOR_ID',
  MaxSupply = 'MAX_SUPPLY',
  MetadataId = 'METADATA_ID',
  MinterId = 'MINTER_ID',
  Name = 'NAME',
  Supply = 'SUPPLY',
  Symbol = 'SYMBOL',
  UpdatedAt = 'UPDATED_AT',
  UpdatedAtTruncatedToDay = 'UPDATED_AT_TRUNCATED_TO_DAY',
  UpdatedAtTruncatedToHour = 'UPDATED_AT_TRUNCATED_TO_HOUR',
  UpdatedHeight = 'UPDATED_HEIGHT',
  Uri = 'URI',
  Verified = 'VERIFIED'
}

export type FantokensHavingAverageInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  createdHeight?: InputMaybe<HavingBigfloatFilter>;
  maxSupply?: InputMaybe<HavingBigfloatFilter>;
  supply?: InputMaybe<HavingBigfloatFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
  updatedHeight?: InputMaybe<HavingBigfloatFilter>;
};

export type FantokensHavingDistinctCountInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  createdHeight?: InputMaybe<HavingBigfloatFilter>;
  maxSupply?: InputMaybe<HavingBigfloatFilter>;
  supply?: InputMaybe<HavingBigfloatFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
  updatedHeight?: InputMaybe<HavingBigfloatFilter>;
};

/** Conditions for `Fantoken` aggregates. */
export type FantokensHavingInput = {
  AND?: InputMaybe<Array<FantokensHavingInput>>;
  OR?: InputMaybe<Array<FantokensHavingInput>>;
  average?: InputMaybe<FantokensHavingAverageInput>;
  distinctCount?: InputMaybe<FantokensHavingDistinctCountInput>;
  max?: InputMaybe<FantokensHavingMaxInput>;
  min?: InputMaybe<FantokensHavingMinInput>;
  stddevPopulation?: InputMaybe<FantokensHavingStddevPopulationInput>;
  stddevSample?: InputMaybe<FantokensHavingStddevSampleInput>;
  sum?: InputMaybe<FantokensHavingSumInput>;
  variancePopulation?: InputMaybe<FantokensHavingVariancePopulationInput>;
  varianceSample?: InputMaybe<FantokensHavingVarianceSampleInput>;
};

export type FantokensHavingMaxInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  createdHeight?: InputMaybe<HavingBigfloatFilter>;
  maxSupply?: InputMaybe<HavingBigfloatFilter>;
  supply?: InputMaybe<HavingBigfloatFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
  updatedHeight?: InputMaybe<HavingBigfloatFilter>;
};

export type FantokensHavingMinInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  createdHeight?: InputMaybe<HavingBigfloatFilter>;
  maxSupply?: InputMaybe<HavingBigfloatFilter>;
  supply?: InputMaybe<HavingBigfloatFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
  updatedHeight?: InputMaybe<HavingBigfloatFilter>;
};

export type FantokensHavingStddevPopulationInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  createdHeight?: InputMaybe<HavingBigfloatFilter>;
  maxSupply?: InputMaybe<HavingBigfloatFilter>;
  supply?: InputMaybe<HavingBigfloatFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
  updatedHeight?: InputMaybe<HavingBigfloatFilter>;
};

export type FantokensHavingStddevSampleInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  createdHeight?: InputMaybe<HavingBigfloatFilter>;
  maxSupply?: InputMaybe<HavingBigfloatFilter>;
  supply?: InputMaybe<HavingBigfloatFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
  updatedHeight?: InputMaybe<HavingBigfloatFilter>;
};

export type FantokensHavingSumInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  createdHeight?: InputMaybe<HavingBigfloatFilter>;
  maxSupply?: InputMaybe<HavingBigfloatFilter>;
  supply?: InputMaybe<HavingBigfloatFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
  updatedHeight?: InputMaybe<HavingBigfloatFilter>;
};

export type FantokensHavingVariancePopulationInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  createdHeight?: InputMaybe<HavingBigfloatFilter>;
  maxSupply?: InputMaybe<HavingBigfloatFilter>;
  supply?: InputMaybe<HavingBigfloatFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
  updatedHeight?: InputMaybe<HavingBigfloatFilter>;
};

export type FantokensHavingVarianceSampleInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  createdHeight?: InputMaybe<HavingBigfloatFilter>;
  maxSupply?: InputMaybe<HavingBigfloatFilter>;
  supply?: InputMaybe<HavingBigfloatFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
  updatedHeight?: InputMaybe<HavingBigfloatFilter>;
};

/** Methods to use when ordering `Fantoken`. */
export enum FantokensOrderBy {
  AuthorityIdAsc = 'AUTHORITY_ID_ASC',
  AuthorityIdDesc = 'AUTHORITY_ID_DESC',
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  CreatedHeightAsc = 'CREATED_HEIGHT_ASC',
  CreatedHeightDesc = 'CREATED_HEIGHT_DESC',
  CreatorIdAsc = 'CREATOR_ID_ASC',
  CreatorIdDesc = 'CREATOR_ID_DESC',
  FantokenFavoritesAverageAccountIdAsc = 'FANTOKEN_FAVORITES_AVERAGE_ACCOUNT_ID_ASC',
  FantokenFavoritesAverageAccountIdDesc = 'FANTOKEN_FAVORITES_AVERAGE_ACCOUNT_ID_DESC',
  FantokenFavoritesAverageFantokenIdAsc = 'FANTOKEN_FAVORITES_AVERAGE_FANTOKEN_ID_ASC',
  FantokenFavoritesAverageFantokenIdDesc = 'FANTOKEN_FAVORITES_AVERAGE_FANTOKEN_ID_DESC',
  FantokenFavoritesAverageIdAsc = 'FANTOKEN_FAVORITES_AVERAGE_ID_ASC',
  FantokenFavoritesAverageIdDesc = 'FANTOKEN_FAVORITES_AVERAGE_ID_DESC',
  FantokenFavoritesCountAsc = 'FANTOKEN_FAVORITES_COUNT_ASC',
  FantokenFavoritesCountDesc = 'FANTOKEN_FAVORITES_COUNT_DESC',
  FantokenFavoritesDistinctCountAccountIdAsc = 'FANTOKEN_FAVORITES_DISTINCT_COUNT_ACCOUNT_ID_ASC',
  FantokenFavoritesDistinctCountAccountIdDesc = 'FANTOKEN_FAVORITES_DISTINCT_COUNT_ACCOUNT_ID_DESC',
  FantokenFavoritesDistinctCountFantokenIdAsc = 'FANTOKEN_FAVORITES_DISTINCT_COUNT_FANTOKEN_ID_ASC',
  FantokenFavoritesDistinctCountFantokenIdDesc = 'FANTOKEN_FAVORITES_DISTINCT_COUNT_FANTOKEN_ID_DESC',
  FantokenFavoritesDistinctCountIdAsc = 'FANTOKEN_FAVORITES_DISTINCT_COUNT_ID_ASC',
  FantokenFavoritesDistinctCountIdDesc = 'FANTOKEN_FAVORITES_DISTINCT_COUNT_ID_DESC',
  FantokenFavoritesMaxAccountIdAsc = 'FANTOKEN_FAVORITES_MAX_ACCOUNT_ID_ASC',
  FantokenFavoritesMaxAccountIdDesc = 'FANTOKEN_FAVORITES_MAX_ACCOUNT_ID_DESC',
  FantokenFavoritesMaxFantokenIdAsc = 'FANTOKEN_FAVORITES_MAX_FANTOKEN_ID_ASC',
  FantokenFavoritesMaxFantokenIdDesc = 'FANTOKEN_FAVORITES_MAX_FANTOKEN_ID_DESC',
  FantokenFavoritesMaxIdAsc = 'FANTOKEN_FAVORITES_MAX_ID_ASC',
  FantokenFavoritesMaxIdDesc = 'FANTOKEN_FAVORITES_MAX_ID_DESC',
  FantokenFavoritesMinAccountIdAsc = 'FANTOKEN_FAVORITES_MIN_ACCOUNT_ID_ASC',
  FantokenFavoritesMinAccountIdDesc = 'FANTOKEN_FAVORITES_MIN_ACCOUNT_ID_DESC',
  FantokenFavoritesMinFantokenIdAsc = 'FANTOKEN_FAVORITES_MIN_FANTOKEN_ID_ASC',
  FantokenFavoritesMinFantokenIdDesc = 'FANTOKEN_FAVORITES_MIN_FANTOKEN_ID_DESC',
  FantokenFavoritesMinIdAsc = 'FANTOKEN_FAVORITES_MIN_ID_ASC',
  FantokenFavoritesMinIdDesc = 'FANTOKEN_FAVORITES_MIN_ID_DESC',
  FantokenFavoritesStddevPopulationAccountIdAsc = 'FANTOKEN_FAVORITES_STDDEV_POPULATION_ACCOUNT_ID_ASC',
  FantokenFavoritesStddevPopulationAccountIdDesc = 'FANTOKEN_FAVORITES_STDDEV_POPULATION_ACCOUNT_ID_DESC',
  FantokenFavoritesStddevPopulationFantokenIdAsc = 'FANTOKEN_FAVORITES_STDDEV_POPULATION_FANTOKEN_ID_ASC',
  FantokenFavoritesStddevPopulationFantokenIdDesc = 'FANTOKEN_FAVORITES_STDDEV_POPULATION_FANTOKEN_ID_DESC',
  FantokenFavoritesStddevPopulationIdAsc = 'FANTOKEN_FAVORITES_STDDEV_POPULATION_ID_ASC',
  FantokenFavoritesStddevPopulationIdDesc = 'FANTOKEN_FAVORITES_STDDEV_POPULATION_ID_DESC',
  FantokenFavoritesStddevSampleAccountIdAsc = 'FANTOKEN_FAVORITES_STDDEV_SAMPLE_ACCOUNT_ID_ASC',
  FantokenFavoritesStddevSampleAccountIdDesc = 'FANTOKEN_FAVORITES_STDDEV_SAMPLE_ACCOUNT_ID_DESC',
  FantokenFavoritesStddevSampleFantokenIdAsc = 'FANTOKEN_FAVORITES_STDDEV_SAMPLE_FANTOKEN_ID_ASC',
  FantokenFavoritesStddevSampleFantokenIdDesc = 'FANTOKEN_FAVORITES_STDDEV_SAMPLE_FANTOKEN_ID_DESC',
  FantokenFavoritesStddevSampleIdAsc = 'FANTOKEN_FAVORITES_STDDEV_SAMPLE_ID_ASC',
  FantokenFavoritesStddevSampleIdDesc = 'FANTOKEN_FAVORITES_STDDEV_SAMPLE_ID_DESC',
  FantokenFavoritesSumAccountIdAsc = 'FANTOKEN_FAVORITES_SUM_ACCOUNT_ID_ASC',
  FantokenFavoritesSumAccountIdDesc = 'FANTOKEN_FAVORITES_SUM_ACCOUNT_ID_DESC',
  FantokenFavoritesSumFantokenIdAsc = 'FANTOKEN_FAVORITES_SUM_FANTOKEN_ID_ASC',
  FantokenFavoritesSumFantokenIdDesc = 'FANTOKEN_FAVORITES_SUM_FANTOKEN_ID_DESC',
  FantokenFavoritesSumIdAsc = 'FANTOKEN_FAVORITES_SUM_ID_ASC',
  FantokenFavoritesSumIdDesc = 'FANTOKEN_FAVORITES_SUM_ID_DESC',
  FantokenFavoritesVariancePopulationAccountIdAsc = 'FANTOKEN_FAVORITES_VARIANCE_POPULATION_ACCOUNT_ID_ASC',
  FantokenFavoritesVariancePopulationAccountIdDesc = 'FANTOKEN_FAVORITES_VARIANCE_POPULATION_ACCOUNT_ID_DESC',
  FantokenFavoritesVariancePopulationFantokenIdAsc = 'FANTOKEN_FAVORITES_VARIANCE_POPULATION_FANTOKEN_ID_ASC',
  FantokenFavoritesVariancePopulationFantokenIdDesc = 'FANTOKEN_FAVORITES_VARIANCE_POPULATION_FANTOKEN_ID_DESC',
  FantokenFavoritesVariancePopulationIdAsc = 'FANTOKEN_FAVORITES_VARIANCE_POPULATION_ID_ASC',
  FantokenFavoritesVariancePopulationIdDesc = 'FANTOKEN_FAVORITES_VARIANCE_POPULATION_ID_DESC',
  FantokenFavoritesVarianceSampleAccountIdAsc = 'FANTOKEN_FAVORITES_VARIANCE_SAMPLE_ACCOUNT_ID_ASC',
  FantokenFavoritesVarianceSampleAccountIdDesc = 'FANTOKEN_FAVORITES_VARIANCE_SAMPLE_ACCOUNT_ID_DESC',
  FantokenFavoritesVarianceSampleFantokenIdAsc = 'FANTOKEN_FAVORITES_VARIANCE_SAMPLE_FANTOKEN_ID_ASC',
  FantokenFavoritesVarianceSampleFantokenIdDesc = 'FANTOKEN_FAVORITES_VARIANCE_SAMPLE_FANTOKEN_ID_DESC',
  FantokenFavoritesVarianceSampleIdAsc = 'FANTOKEN_FAVORITES_VARIANCE_SAMPLE_ID_ASC',
  FantokenFavoritesVarianceSampleIdDesc = 'FANTOKEN_FAVORITES_VARIANCE_SAMPLE_ID_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  MaxSupplyAsc = 'MAX_SUPPLY_ASC',
  MaxSupplyDesc = 'MAX_SUPPLY_DESC',
  MetadataIdAsc = 'METADATA_ID_ASC',
  MetadataIdDesc = 'METADATA_ID_DESC',
  MinterIdAsc = 'MINTER_ID_ASC',
  MinterIdDesc = 'MINTER_ID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  SupplyAsc = 'SUPPLY_ASC',
  SupplyDesc = 'SUPPLY_DESC',
  SymbolAsc = 'SYMBOL_ASC',
  SymbolDesc = 'SYMBOL_DESC',
  UpdatedAtAsc = 'UPDATED_AT_ASC',
  UpdatedAtDesc = 'UPDATED_AT_DESC',
  UpdatedHeightAsc = 'UPDATED_HEIGHT_ASC',
  UpdatedHeightDesc = 'UPDATED_HEIGHT_DESC',
  UriAsc = 'URI_ASC',
  UriDesc = 'URI_DESC',
  VerifiedAsc = 'VERIFIED_ASC',
  VerifiedDesc = 'VERIFIED_DESC'
}

export type HavingBigfloatFilter = {
  equalTo?: InputMaybe<Scalars['BigFloat']>;
  greaterThan?: InputMaybe<Scalars['BigFloat']>;
  greaterThanOrEqualTo?: InputMaybe<Scalars['BigFloat']>;
  lessThan?: InputMaybe<Scalars['BigFloat']>;
  lessThanOrEqualTo?: InputMaybe<Scalars['BigFloat']>;
  notEqualTo?: InputMaybe<Scalars['BigFloat']>;
};

export type HavingDatetimeFilter = {
  equalTo?: InputMaybe<Scalars['Datetime']>;
  greaterThan?: InputMaybe<Scalars['Datetime']>;
  greaterThanOrEqualTo?: InputMaybe<Scalars['Datetime']>;
  lessThan?: InputMaybe<Scalars['Datetime']>;
  lessThanOrEqualTo?: InputMaybe<Scalars['Datetime']>;
  notEqualTo?: InputMaybe<Scalars['Datetime']>;
};

/** A filter to be used against JSON fields. All fields are combined with a logical ‘and.’ */
export type JsonFilter = {
  /** Contained by the specified JSON. */
  containedBy?: InputMaybe<Scalars['JSON']>;
  /** Contains the specified JSON. */
  contains?: InputMaybe<Scalars['JSON']>;
  /** Contains all of the specified keys. */
  containsAllKeys?: InputMaybe<Array<Scalars['String']>>;
  /** Contains any of the specified keys. */
  containsAnyKeys?: InputMaybe<Array<Scalars['String']>>;
  /** Contains the specified key. */
  containsKey?: InputMaybe<Scalars['String']>;
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<Scalars['JSON']>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<Scalars['JSON']>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<Scalars['JSON']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars['JSON']>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<Scalars['JSON']>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<Scalars['JSON']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars['JSON']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<Scalars['JSON']>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<Scalars['JSON']>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<Scalars['JSON']>>;
};

/** A connection to a list of `Launchparty` values. */
export type LaunchpartiesConnection = {
  __typename?: 'LaunchpartiesConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<LaunchpartyAggregates>;
  /** A list of edges which contains the `Launchparty` and cursor to aid in pagination. */
  edges: Array<LaunchpartiesEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<LaunchpartyAggregates>>;
  /** A list of `Launchparty` objects. */
  nodes: Array<Maybe<Launchparty>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Launchparty` you could get from the connection. */
  totalCount: Scalars['Int'];
};


/** A connection to a list of `Launchparty` values. */
export type LaunchpartiesConnectionGroupedAggregatesArgs = {
  groupBy: Array<LaunchpartiesGroupBy>;
  having?: InputMaybe<LaunchpartiesHavingInput>;
};

/** A `Launchparty` edge in the connection. */
export type LaunchpartiesEdge = {
  __typename?: 'LaunchpartiesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Launchparty` at the end of the edge. */
  node?: Maybe<Launchparty>;
};

/** Grouping methods for `Launchparty` for usage during aggregation. */
export enum LaunchpartiesGroupBy {
  CollectionId = 'COLLECTION_ID',
  CreatedAt = 'CREATED_AT',
  CreatedAtTruncatedToDay = 'CREATED_AT_TRUNCATED_TO_DAY',
  CreatedAtTruncatedToHour = 'CREATED_AT_TRUNCATED_TO_HOUR',
  CreatedHeight = 'CREATED_HEIGHT',
  CreatorId = 'CREATOR_ID',
  MaxEditions = 'MAX_EDITIONS',
  Name = 'NAME',
  PaymentAddress = 'PAYMENT_ADDRESS',
  Price = 'PRICE',
  SellerFeeBps = 'SELLER_FEE_BPS',
  StartTime = 'START_TIME',
  Symbol = 'SYMBOL',
  UpdatedAt = 'UPDATED_AT',
  UpdatedAtTruncatedToDay = 'UPDATED_AT_TRUNCATED_TO_DAY',
  UpdatedAtTruncatedToHour = 'UPDATED_AT_TRUNCATED_TO_HOUR',
  UpdatedHeight = 'UPDATED_HEIGHT'
}

export type LaunchpartiesHavingAverageInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  createdHeight?: InputMaybe<HavingBigfloatFilter>;
  maxEditions?: InputMaybe<HavingBigfloatFilter>;
  price?: InputMaybe<HavingBigfloatFilter>;
  sellerFeeBps?: InputMaybe<HavingBigfloatFilter>;
  startTime?: InputMaybe<HavingBigfloatFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
  updatedHeight?: InputMaybe<HavingBigfloatFilter>;
};

export type LaunchpartiesHavingDistinctCountInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  createdHeight?: InputMaybe<HavingBigfloatFilter>;
  maxEditions?: InputMaybe<HavingBigfloatFilter>;
  price?: InputMaybe<HavingBigfloatFilter>;
  sellerFeeBps?: InputMaybe<HavingBigfloatFilter>;
  startTime?: InputMaybe<HavingBigfloatFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
  updatedHeight?: InputMaybe<HavingBigfloatFilter>;
};

/** Conditions for `Launchparty` aggregates. */
export type LaunchpartiesHavingInput = {
  AND?: InputMaybe<Array<LaunchpartiesHavingInput>>;
  OR?: InputMaybe<Array<LaunchpartiesHavingInput>>;
  average?: InputMaybe<LaunchpartiesHavingAverageInput>;
  distinctCount?: InputMaybe<LaunchpartiesHavingDistinctCountInput>;
  max?: InputMaybe<LaunchpartiesHavingMaxInput>;
  min?: InputMaybe<LaunchpartiesHavingMinInput>;
  stddevPopulation?: InputMaybe<LaunchpartiesHavingStddevPopulationInput>;
  stddevSample?: InputMaybe<LaunchpartiesHavingStddevSampleInput>;
  sum?: InputMaybe<LaunchpartiesHavingSumInput>;
  variancePopulation?: InputMaybe<LaunchpartiesHavingVariancePopulationInput>;
  varianceSample?: InputMaybe<LaunchpartiesHavingVarianceSampleInput>;
};

export type LaunchpartiesHavingMaxInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  createdHeight?: InputMaybe<HavingBigfloatFilter>;
  maxEditions?: InputMaybe<HavingBigfloatFilter>;
  price?: InputMaybe<HavingBigfloatFilter>;
  sellerFeeBps?: InputMaybe<HavingBigfloatFilter>;
  startTime?: InputMaybe<HavingBigfloatFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
  updatedHeight?: InputMaybe<HavingBigfloatFilter>;
};

export type LaunchpartiesHavingMinInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  createdHeight?: InputMaybe<HavingBigfloatFilter>;
  maxEditions?: InputMaybe<HavingBigfloatFilter>;
  price?: InputMaybe<HavingBigfloatFilter>;
  sellerFeeBps?: InputMaybe<HavingBigfloatFilter>;
  startTime?: InputMaybe<HavingBigfloatFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
  updatedHeight?: InputMaybe<HavingBigfloatFilter>;
};

export type LaunchpartiesHavingStddevPopulationInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  createdHeight?: InputMaybe<HavingBigfloatFilter>;
  maxEditions?: InputMaybe<HavingBigfloatFilter>;
  price?: InputMaybe<HavingBigfloatFilter>;
  sellerFeeBps?: InputMaybe<HavingBigfloatFilter>;
  startTime?: InputMaybe<HavingBigfloatFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
  updatedHeight?: InputMaybe<HavingBigfloatFilter>;
};

export type LaunchpartiesHavingStddevSampleInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  createdHeight?: InputMaybe<HavingBigfloatFilter>;
  maxEditions?: InputMaybe<HavingBigfloatFilter>;
  price?: InputMaybe<HavingBigfloatFilter>;
  sellerFeeBps?: InputMaybe<HavingBigfloatFilter>;
  startTime?: InputMaybe<HavingBigfloatFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
  updatedHeight?: InputMaybe<HavingBigfloatFilter>;
};

export type LaunchpartiesHavingSumInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  createdHeight?: InputMaybe<HavingBigfloatFilter>;
  maxEditions?: InputMaybe<HavingBigfloatFilter>;
  price?: InputMaybe<HavingBigfloatFilter>;
  sellerFeeBps?: InputMaybe<HavingBigfloatFilter>;
  startTime?: InputMaybe<HavingBigfloatFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
  updatedHeight?: InputMaybe<HavingBigfloatFilter>;
};

export type LaunchpartiesHavingVariancePopulationInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  createdHeight?: InputMaybe<HavingBigfloatFilter>;
  maxEditions?: InputMaybe<HavingBigfloatFilter>;
  price?: InputMaybe<HavingBigfloatFilter>;
  sellerFeeBps?: InputMaybe<HavingBigfloatFilter>;
  startTime?: InputMaybe<HavingBigfloatFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
  updatedHeight?: InputMaybe<HavingBigfloatFilter>;
};

export type LaunchpartiesHavingVarianceSampleInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  createdHeight?: InputMaybe<HavingBigfloatFilter>;
  maxEditions?: InputMaybe<HavingBigfloatFilter>;
  price?: InputMaybe<HavingBigfloatFilter>;
  sellerFeeBps?: InputMaybe<HavingBigfloatFilter>;
  startTime?: InputMaybe<HavingBigfloatFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
  updatedHeight?: InputMaybe<HavingBigfloatFilter>;
};

/** Methods to use when ordering `Launchparty`. */
export enum LaunchpartiesOrderBy {
  CollectionIdAsc = 'COLLECTION_ID_ASC',
  CollectionIdDesc = 'COLLECTION_ID_DESC',
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  CreatedHeightAsc = 'CREATED_HEIGHT_ASC',
  CreatedHeightDesc = 'CREATED_HEIGHT_DESC',
  CreatorIdAsc = 'CREATOR_ID_ASC',
  CreatorIdDesc = 'CREATOR_ID_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  MaxEditionsAsc = 'MAX_EDITIONS_ASC',
  MaxEditionsDesc = 'MAX_EDITIONS_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  PaymentAddressAsc = 'PAYMENT_ADDRESS_ASC',
  PaymentAddressDesc = 'PAYMENT_ADDRESS_DESC',
  PriceAsc = 'PRICE_ASC',
  PriceDesc = 'PRICE_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  SellerFeeBpsAsc = 'SELLER_FEE_BPS_ASC',
  SellerFeeBpsDesc = 'SELLER_FEE_BPS_DESC',
  StartTimeAsc = 'START_TIME_ASC',
  StartTimeDesc = 'START_TIME_DESC',
  SymbolAsc = 'SYMBOL_ASC',
  SymbolDesc = 'SYMBOL_DESC',
  UpdatedAtAsc = 'UPDATED_AT_ASC',
  UpdatedAtDesc = 'UPDATED_AT_DESC',
  UpdatedHeightAsc = 'UPDATED_HEIGHT_ASC',
  UpdatedHeightDesc = 'UPDATED_HEIGHT_DESC'
}

export type Launchparty = Node & {
  __typename?: 'Launchparty';
  /** Reads a single `Collection` that is related to this `Launchparty`. */
  collection?: Maybe<Collection>;
  collectionId: Scalars['String'];
  createdAt: Scalars['Datetime'];
  createdHeight: Scalars['BigFloat'];
  /** Reads a single `Account` that is related to this `Launchparty`. */
  creator?: Maybe<Account>;
  creatorId: Scalars['String'];
  id: Scalars['String'];
  maxEditions: Scalars['BigFloat'];
  name: Scalars['String'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  paymentAddress?: Maybe<Scalars['String']>;
  price: Scalars['BigFloat'];
  sellerFeeBps?: Maybe<Scalars['BigFloat']>;
  startTime: Scalars['BigFloat'];
  symbol: Scalars['String'];
  updatedAt?: Maybe<Scalars['Datetime']>;
  updatedHeight?: Maybe<Scalars['BigFloat']>;
};

export type LaunchpartyAggregates = {
  __typename?: 'LaunchpartyAggregates';
  /** Mean average aggregates across the matching connection (ignoring before/after/first/last/offset) */
  average?: Maybe<LaunchpartyAverageAggregates>;
  /** Distinct count aggregates across the matching connection (ignoring before/after/first/last/offset) */
  distinctCount?: Maybe<LaunchpartyDistinctCountAggregates>;
  keys?: Maybe<Array<Scalars['String']>>;
  /** Maximum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  max?: Maybe<LaunchpartyMaxAggregates>;
  /** Minimum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  min?: Maybe<LaunchpartyMinAggregates>;
  /** Population standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  stddevPopulation?: Maybe<LaunchpartyStddevPopulationAggregates>;
  /** Sample standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  stddevSample?: Maybe<LaunchpartyStddevSampleAggregates>;
  /** Sum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  sum?: Maybe<LaunchpartySumAggregates>;
  /** Population variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  variancePopulation?: Maybe<LaunchpartyVariancePopulationAggregates>;
  /** Sample variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  varianceSample?: Maybe<LaunchpartyVarianceSampleAggregates>;
};

/** A filter to be used against aggregates of `Launchparty` object types. */
export type LaunchpartyAggregatesFilter = {
  /** Mean average aggregate over matching `Launchparty` objects. */
  average?: InputMaybe<LaunchpartyAverageAggregateFilter>;
  /** Distinct count aggregate over matching `Launchparty` objects. */
  distinctCount?: InputMaybe<LaunchpartyDistinctCountAggregateFilter>;
  /** A filter that must pass for the relevant `Launchparty` object to be included within the aggregate. */
  filter?: InputMaybe<LaunchpartyFilter>;
  /** Maximum aggregate over matching `Launchparty` objects. */
  max?: InputMaybe<LaunchpartyMaxAggregateFilter>;
  /** Minimum aggregate over matching `Launchparty` objects. */
  min?: InputMaybe<LaunchpartyMinAggregateFilter>;
  /** Population standard deviation aggregate over matching `Launchparty` objects. */
  stddevPopulation?: InputMaybe<LaunchpartyStddevPopulationAggregateFilter>;
  /** Sample standard deviation aggregate over matching `Launchparty` objects. */
  stddevSample?: InputMaybe<LaunchpartyStddevSampleAggregateFilter>;
  /** Sum aggregate over matching `Launchparty` objects. */
  sum?: InputMaybe<LaunchpartySumAggregateFilter>;
  /** Population variance aggregate over matching `Launchparty` objects. */
  variancePopulation?: InputMaybe<LaunchpartyVariancePopulationAggregateFilter>;
  /** Sample variance aggregate over matching `Launchparty` objects. */
  varianceSample?: InputMaybe<LaunchpartyVarianceSampleAggregateFilter>;
};

export type LaunchpartyAverageAggregateFilter = {
  createdHeight?: InputMaybe<BigFloatFilter>;
  maxEditions?: InputMaybe<BigFloatFilter>;
  price?: InputMaybe<BigFloatFilter>;
  sellerFeeBps?: InputMaybe<BigFloatFilter>;
  startTime?: InputMaybe<BigFloatFilter>;
  updatedHeight?: InputMaybe<BigFloatFilter>;
};

export type LaunchpartyAverageAggregates = {
  __typename?: 'LaunchpartyAverageAggregates';
  /** Mean average of createdHeight across the matching connection */
  createdHeight?: Maybe<Scalars['BigFloat']>;
  /** Mean average of maxEditions across the matching connection */
  maxEditions?: Maybe<Scalars['BigFloat']>;
  /** Mean average of price across the matching connection */
  price?: Maybe<Scalars['BigFloat']>;
  /** Mean average of sellerFeeBps across the matching connection */
  sellerFeeBps?: Maybe<Scalars['BigFloat']>;
  /** Mean average of startTime across the matching connection */
  startTime?: Maybe<Scalars['BigFloat']>;
  /** Mean average of updatedHeight across the matching connection */
  updatedHeight?: Maybe<Scalars['BigFloat']>;
};

export type LaunchpartyDistinctCountAggregateFilter = {
  collectionId?: InputMaybe<BigIntFilter>;
  createdAt?: InputMaybe<BigIntFilter>;
  createdHeight?: InputMaybe<BigIntFilter>;
  creatorId?: InputMaybe<BigIntFilter>;
  id?: InputMaybe<BigIntFilter>;
  maxEditions?: InputMaybe<BigIntFilter>;
  name?: InputMaybe<BigIntFilter>;
  paymentAddress?: InputMaybe<BigIntFilter>;
  price?: InputMaybe<BigIntFilter>;
  sellerFeeBps?: InputMaybe<BigIntFilter>;
  startTime?: InputMaybe<BigIntFilter>;
  symbol?: InputMaybe<BigIntFilter>;
  updatedAt?: InputMaybe<BigIntFilter>;
  updatedHeight?: InputMaybe<BigIntFilter>;
};

export type LaunchpartyDistinctCountAggregates = {
  __typename?: 'LaunchpartyDistinctCountAggregates';
  /** Distinct count of collectionId across the matching connection */
  collectionId?: Maybe<Scalars['BigInt']>;
  /** Distinct count of createdAt across the matching connection */
  createdAt?: Maybe<Scalars['BigInt']>;
  /** Distinct count of createdHeight across the matching connection */
  createdHeight?: Maybe<Scalars['BigInt']>;
  /** Distinct count of creatorId across the matching connection */
  creatorId?: Maybe<Scalars['BigInt']>;
  /** Distinct count of id across the matching connection */
  id?: Maybe<Scalars['BigInt']>;
  /** Distinct count of maxEditions across the matching connection */
  maxEditions?: Maybe<Scalars['BigInt']>;
  /** Distinct count of name across the matching connection */
  name?: Maybe<Scalars['BigInt']>;
  /** Distinct count of paymentAddress across the matching connection */
  paymentAddress?: Maybe<Scalars['BigInt']>;
  /** Distinct count of price across the matching connection */
  price?: Maybe<Scalars['BigInt']>;
  /** Distinct count of sellerFeeBps across the matching connection */
  sellerFeeBps?: Maybe<Scalars['BigInt']>;
  /** Distinct count of startTime across the matching connection */
  startTime?: Maybe<Scalars['BigInt']>;
  /** Distinct count of symbol across the matching connection */
  symbol?: Maybe<Scalars['BigInt']>;
  /** Distinct count of updatedAt across the matching connection */
  updatedAt?: Maybe<Scalars['BigInt']>;
  /** Distinct count of updatedHeight across the matching connection */
  updatedHeight?: Maybe<Scalars['BigInt']>;
};

/** A filter to be used against `Launchparty` object types. All fields are combined with a logical ‘and.’ */
export type LaunchpartyFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<LaunchpartyFilter>>;
  /** Filter by the object’s `collection` relation. */
  collection?: InputMaybe<CollectionFilter>;
  /** Filter by the object’s `collectionId` field. */
  collectionId?: InputMaybe<StringFilter>;
  /** Filter by the object’s `createdAt` field. */
  createdAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `createdHeight` field. */
  createdHeight?: InputMaybe<BigFloatFilter>;
  /** Filter by the object’s `creator` relation. */
  creator?: InputMaybe<AccountFilter>;
  /** Filter by the object’s `creatorId` field. */
  creatorId?: InputMaybe<StringFilter>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<StringFilter>;
  /** Filter by the object’s `maxEditions` field. */
  maxEditions?: InputMaybe<BigFloatFilter>;
  /** Filter by the object’s `name` field. */
  name?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<LaunchpartyFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<LaunchpartyFilter>>;
  /** Filter by the object’s `paymentAddress` field. */
  paymentAddress?: InputMaybe<StringFilter>;
  /** Filter by the object’s `price` field. */
  price?: InputMaybe<BigFloatFilter>;
  /** Filter by the object’s `sellerFeeBps` field. */
  sellerFeeBps?: InputMaybe<BigFloatFilter>;
  /** Filter by the object’s `startTime` field. */
  startTime?: InputMaybe<BigFloatFilter>;
  /** Filter by the object’s `symbol` field. */
  symbol?: InputMaybe<StringFilter>;
  /** Filter by the object’s `updatedAt` field. */
  updatedAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `updatedHeight` field. */
  updatedHeight?: InputMaybe<BigFloatFilter>;
};

export type LaunchpartyMaxAggregateFilter = {
  createdHeight?: InputMaybe<BigFloatFilter>;
  maxEditions?: InputMaybe<BigFloatFilter>;
  price?: InputMaybe<BigFloatFilter>;
  sellerFeeBps?: InputMaybe<BigFloatFilter>;
  startTime?: InputMaybe<BigFloatFilter>;
  updatedHeight?: InputMaybe<BigFloatFilter>;
};

export type LaunchpartyMaxAggregates = {
  __typename?: 'LaunchpartyMaxAggregates';
  /** Maximum of createdHeight across the matching connection */
  createdHeight?: Maybe<Scalars['BigFloat']>;
  /** Maximum of maxEditions across the matching connection */
  maxEditions?: Maybe<Scalars['BigFloat']>;
  /** Maximum of price across the matching connection */
  price?: Maybe<Scalars['BigFloat']>;
  /** Maximum of sellerFeeBps across the matching connection */
  sellerFeeBps?: Maybe<Scalars['BigFloat']>;
  /** Maximum of startTime across the matching connection */
  startTime?: Maybe<Scalars['BigFloat']>;
  /** Maximum of updatedHeight across the matching connection */
  updatedHeight?: Maybe<Scalars['BigFloat']>;
};

export type LaunchpartyMinAggregateFilter = {
  createdHeight?: InputMaybe<BigFloatFilter>;
  maxEditions?: InputMaybe<BigFloatFilter>;
  price?: InputMaybe<BigFloatFilter>;
  sellerFeeBps?: InputMaybe<BigFloatFilter>;
  startTime?: InputMaybe<BigFloatFilter>;
  updatedHeight?: InputMaybe<BigFloatFilter>;
};

export type LaunchpartyMinAggregates = {
  __typename?: 'LaunchpartyMinAggregates';
  /** Minimum of createdHeight across the matching connection */
  createdHeight?: Maybe<Scalars['BigFloat']>;
  /** Minimum of maxEditions across the matching connection */
  maxEditions?: Maybe<Scalars['BigFloat']>;
  /** Minimum of price across the matching connection */
  price?: Maybe<Scalars['BigFloat']>;
  /** Minimum of sellerFeeBps across the matching connection */
  sellerFeeBps?: Maybe<Scalars['BigFloat']>;
  /** Minimum of startTime across the matching connection */
  startTime?: Maybe<Scalars['BigFloat']>;
  /** Minimum of updatedHeight across the matching connection */
  updatedHeight?: Maybe<Scalars['BigFloat']>;
};

export type LaunchpartyStddevPopulationAggregateFilter = {
  createdHeight?: InputMaybe<BigFloatFilter>;
  maxEditions?: InputMaybe<BigFloatFilter>;
  price?: InputMaybe<BigFloatFilter>;
  sellerFeeBps?: InputMaybe<BigFloatFilter>;
  startTime?: InputMaybe<BigFloatFilter>;
  updatedHeight?: InputMaybe<BigFloatFilter>;
};

export type LaunchpartyStddevPopulationAggregates = {
  __typename?: 'LaunchpartyStddevPopulationAggregates';
  /** Population standard deviation of createdHeight across the matching connection */
  createdHeight?: Maybe<Scalars['BigFloat']>;
  /** Population standard deviation of maxEditions across the matching connection */
  maxEditions?: Maybe<Scalars['BigFloat']>;
  /** Population standard deviation of price across the matching connection */
  price?: Maybe<Scalars['BigFloat']>;
  /** Population standard deviation of sellerFeeBps across the matching connection */
  sellerFeeBps?: Maybe<Scalars['BigFloat']>;
  /** Population standard deviation of startTime across the matching connection */
  startTime?: Maybe<Scalars['BigFloat']>;
  /** Population standard deviation of updatedHeight across the matching connection */
  updatedHeight?: Maybe<Scalars['BigFloat']>;
};

export type LaunchpartyStddevSampleAggregateFilter = {
  createdHeight?: InputMaybe<BigFloatFilter>;
  maxEditions?: InputMaybe<BigFloatFilter>;
  price?: InputMaybe<BigFloatFilter>;
  sellerFeeBps?: InputMaybe<BigFloatFilter>;
  startTime?: InputMaybe<BigFloatFilter>;
  updatedHeight?: InputMaybe<BigFloatFilter>;
};

export type LaunchpartyStddevSampleAggregates = {
  __typename?: 'LaunchpartyStddevSampleAggregates';
  /** Sample standard deviation of createdHeight across the matching connection */
  createdHeight?: Maybe<Scalars['BigFloat']>;
  /** Sample standard deviation of maxEditions across the matching connection */
  maxEditions?: Maybe<Scalars['BigFloat']>;
  /** Sample standard deviation of price across the matching connection */
  price?: Maybe<Scalars['BigFloat']>;
  /** Sample standard deviation of sellerFeeBps across the matching connection */
  sellerFeeBps?: Maybe<Scalars['BigFloat']>;
  /** Sample standard deviation of startTime across the matching connection */
  startTime?: Maybe<Scalars['BigFloat']>;
  /** Sample standard deviation of updatedHeight across the matching connection */
  updatedHeight?: Maybe<Scalars['BigFloat']>;
};

export type LaunchpartySumAggregateFilter = {
  createdHeight?: InputMaybe<BigFloatFilter>;
  maxEditions?: InputMaybe<BigFloatFilter>;
  price?: InputMaybe<BigFloatFilter>;
  sellerFeeBps?: InputMaybe<BigFloatFilter>;
  startTime?: InputMaybe<BigFloatFilter>;
  updatedHeight?: InputMaybe<BigFloatFilter>;
};

export type LaunchpartySumAggregates = {
  __typename?: 'LaunchpartySumAggregates';
  /** Sum of createdHeight across the matching connection */
  createdHeight: Scalars['BigFloat'];
  /** Sum of maxEditions across the matching connection */
  maxEditions: Scalars['BigFloat'];
  /** Sum of price across the matching connection */
  price: Scalars['BigFloat'];
  /** Sum of sellerFeeBps across the matching connection */
  sellerFeeBps: Scalars['BigFloat'];
  /** Sum of startTime across the matching connection */
  startTime: Scalars['BigFloat'];
  /** Sum of updatedHeight across the matching connection */
  updatedHeight: Scalars['BigFloat'];
};

export type LaunchpartyVariancePopulationAggregateFilter = {
  createdHeight?: InputMaybe<BigFloatFilter>;
  maxEditions?: InputMaybe<BigFloatFilter>;
  price?: InputMaybe<BigFloatFilter>;
  sellerFeeBps?: InputMaybe<BigFloatFilter>;
  startTime?: InputMaybe<BigFloatFilter>;
  updatedHeight?: InputMaybe<BigFloatFilter>;
};

export type LaunchpartyVariancePopulationAggregates = {
  __typename?: 'LaunchpartyVariancePopulationAggregates';
  /** Population variance of createdHeight across the matching connection */
  createdHeight?: Maybe<Scalars['BigFloat']>;
  /** Population variance of maxEditions across the matching connection */
  maxEditions?: Maybe<Scalars['BigFloat']>;
  /** Population variance of price across the matching connection */
  price?: Maybe<Scalars['BigFloat']>;
  /** Population variance of sellerFeeBps across the matching connection */
  sellerFeeBps?: Maybe<Scalars['BigFloat']>;
  /** Population variance of startTime across the matching connection */
  startTime?: Maybe<Scalars['BigFloat']>;
  /** Population variance of updatedHeight across the matching connection */
  updatedHeight?: Maybe<Scalars['BigFloat']>;
};

export type LaunchpartyVarianceSampleAggregateFilter = {
  createdHeight?: InputMaybe<BigFloatFilter>;
  maxEditions?: InputMaybe<BigFloatFilter>;
  price?: InputMaybe<BigFloatFilter>;
  sellerFeeBps?: InputMaybe<BigFloatFilter>;
  startTime?: InputMaybe<BigFloatFilter>;
  updatedHeight?: InputMaybe<BigFloatFilter>;
};

export type LaunchpartyVarianceSampleAggregates = {
  __typename?: 'LaunchpartyVarianceSampleAggregates';
  /** Sample variance of createdHeight across the matching connection */
  createdHeight?: Maybe<Scalars['BigFloat']>;
  /** Sample variance of maxEditions across the matching connection */
  maxEditions?: Maybe<Scalars['BigFloat']>;
  /** Sample variance of price across the matching connection */
  price?: Maybe<Scalars['BigFloat']>;
  /** Sample variance of sellerFeeBps across the matching connection */
  sellerFeeBps?: Maybe<Scalars['BigFloat']>;
  /** Sample variance of startTime across the matching connection */
  startTime?: Maybe<Scalars['BigFloat']>;
  /** Sample variance of updatedHeight across the matching connection */
  updatedHeight?: Maybe<Scalars['BigFloat']>;
};

export type Nft = Node & {
  __typename?: 'Nft';
  /** Reads a single `Collection` that is related to this `Nft`. */
  collection?: Maybe<Collection>;
  collectionId: Scalars['String'];
  createdAt: Scalars['Datetime'];
  createdHeight: Scalars['BigFloat'];
  id: Scalars['String'];
  /** Reads a single `NftMetadatum` that is related to this `Nft`. */
  metadata?: Maybe<NftMetadatum>;
  metadataId?: Maybe<Scalars['String']>;
  /** Reads a single `Account` that is related to this `Nft`. */
  minter?: Maybe<Account>;
  minterId: Scalars['String'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  /** Reads a single `Account` that is related to this `Nft`. */
  owner?: Maybe<Account>;
  ownerId: Scalars['String'];
  paymentAddress?: Maybe<Scalars['String']>;
  sellerFee?: Maybe<Scalars['String']>;
  tokenId: Scalars['String'];
  updatedAt?: Maybe<Scalars['Datetime']>;
  updatedHeight?: Maybe<Scalars['BigFloat']>;
  uri?: Maybe<Scalars['String']>;
};

export type NftAggregates = {
  __typename?: 'NftAggregates';
  /** Mean average aggregates across the matching connection (ignoring before/after/first/last/offset) */
  average?: Maybe<NftAverageAggregates>;
  /** Distinct count aggregates across the matching connection (ignoring before/after/first/last/offset) */
  distinctCount?: Maybe<NftDistinctCountAggregates>;
  keys?: Maybe<Array<Scalars['String']>>;
  /** Maximum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  max?: Maybe<NftMaxAggregates>;
  /** Minimum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  min?: Maybe<NftMinAggregates>;
  /** Population standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  stddevPopulation?: Maybe<NftStddevPopulationAggregates>;
  /** Sample standard deviation aggregates across the matching connection (ignoring before/after/first/last/offset) */
  stddevSample?: Maybe<NftStddevSampleAggregates>;
  /** Sum aggregates across the matching connection (ignoring before/after/first/last/offset) */
  sum?: Maybe<NftSumAggregates>;
  /** Population variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  variancePopulation?: Maybe<NftVariancePopulationAggregates>;
  /** Sample variance aggregates across the matching connection (ignoring before/after/first/last/offset) */
  varianceSample?: Maybe<NftVarianceSampleAggregates>;
};

/** A filter to be used against aggregates of `Nft` object types. */
export type NftAggregatesFilter = {
  /** Mean average aggregate over matching `Nft` objects. */
  average?: InputMaybe<NftAverageAggregateFilter>;
  /** Distinct count aggregate over matching `Nft` objects. */
  distinctCount?: InputMaybe<NftDistinctCountAggregateFilter>;
  /** A filter that must pass for the relevant `Nft` object to be included within the aggregate. */
  filter?: InputMaybe<NftFilter>;
  /** Maximum aggregate over matching `Nft` objects. */
  max?: InputMaybe<NftMaxAggregateFilter>;
  /** Minimum aggregate over matching `Nft` objects. */
  min?: InputMaybe<NftMinAggregateFilter>;
  /** Population standard deviation aggregate over matching `Nft` objects. */
  stddevPopulation?: InputMaybe<NftStddevPopulationAggregateFilter>;
  /** Sample standard deviation aggregate over matching `Nft` objects. */
  stddevSample?: InputMaybe<NftStddevSampleAggregateFilter>;
  /** Sum aggregate over matching `Nft` objects. */
  sum?: InputMaybe<NftSumAggregateFilter>;
  /** Population variance aggregate over matching `Nft` objects. */
  variancePopulation?: InputMaybe<NftVariancePopulationAggregateFilter>;
  /** Sample variance aggregate over matching `Nft` objects. */
  varianceSample?: InputMaybe<NftVarianceSampleAggregateFilter>;
};

export type NftAverageAggregateFilter = {
  createdHeight?: InputMaybe<BigFloatFilter>;
  updatedHeight?: InputMaybe<BigFloatFilter>;
};

export type NftAverageAggregates = {
  __typename?: 'NftAverageAggregates';
  /** Mean average of createdHeight across the matching connection */
  createdHeight?: Maybe<Scalars['BigFloat']>;
  /** Mean average of updatedHeight across the matching connection */
  updatedHeight?: Maybe<Scalars['BigFloat']>;
};

export type NftDistinctCountAggregateFilter = {
  collectionId?: InputMaybe<BigIntFilter>;
  createdAt?: InputMaybe<BigIntFilter>;
  createdHeight?: InputMaybe<BigIntFilter>;
  id?: InputMaybe<BigIntFilter>;
  metadataId?: InputMaybe<BigIntFilter>;
  minterId?: InputMaybe<BigIntFilter>;
  ownerId?: InputMaybe<BigIntFilter>;
  paymentAddress?: InputMaybe<BigIntFilter>;
  sellerFee?: InputMaybe<BigIntFilter>;
  tokenId?: InputMaybe<BigIntFilter>;
  updatedAt?: InputMaybe<BigIntFilter>;
  updatedHeight?: InputMaybe<BigIntFilter>;
  uri?: InputMaybe<BigIntFilter>;
};

export type NftDistinctCountAggregates = {
  __typename?: 'NftDistinctCountAggregates';
  /** Distinct count of collectionId across the matching connection */
  collectionId?: Maybe<Scalars['BigInt']>;
  /** Distinct count of createdAt across the matching connection */
  createdAt?: Maybe<Scalars['BigInt']>;
  /** Distinct count of createdHeight across the matching connection */
  createdHeight?: Maybe<Scalars['BigInt']>;
  /** Distinct count of id across the matching connection */
  id?: Maybe<Scalars['BigInt']>;
  /** Distinct count of metadataId across the matching connection */
  metadataId?: Maybe<Scalars['BigInt']>;
  /** Distinct count of minterId across the matching connection */
  minterId?: Maybe<Scalars['BigInt']>;
  /** Distinct count of ownerId across the matching connection */
  ownerId?: Maybe<Scalars['BigInt']>;
  /** Distinct count of paymentAddress across the matching connection */
  paymentAddress?: Maybe<Scalars['BigInt']>;
  /** Distinct count of sellerFee across the matching connection */
  sellerFee?: Maybe<Scalars['BigInt']>;
  /** Distinct count of tokenId across the matching connection */
  tokenId?: Maybe<Scalars['BigInt']>;
  /** Distinct count of updatedAt across the matching connection */
  updatedAt?: Maybe<Scalars['BigInt']>;
  /** Distinct count of updatedHeight across the matching connection */
  updatedHeight?: Maybe<Scalars['BigInt']>;
  /** Distinct count of uri across the matching connection */
  uri?: Maybe<Scalars['BigInt']>;
};

/** A filter to be used against `Nft` object types. All fields are combined with a logical ‘and.’ */
export type NftFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<NftFilter>>;
  /** Filter by the object’s `collection` relation. */
  collection?: InputMaybe<CollectionFilter>;
  /** Filter by the object’s `collectionId` field. */
  collectionId?: InputMaybe<StringFilter>;
  /** Filter by the object’s `createdAt` field. */
  createdAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `createdHeight` field. */
  createdHeight?: InputMaybe<BigFloatFilter>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<StringFilter>;
  /** Filter by the object’s `metadata` relation. */
  metadata?: InputMaybe<NftMetadatumFilter>;
  /** A related `metadata` exists. */
  metadataExists?: InputMaybe<Scalars['Boolean']>;
  /** Filter by the object’s `metadataId` field. */
  metadataId?: InputMaybe<StringFilter>;
  /** Filter by the object’s `minter` relation. */
  minter?: InputMaybe<AccountFilter>;
  /** Filter by the object’s `minterId` field. */
  minterId?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<NftFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<NftFilter>>;
  /** Filter by the object’s `owner` relation. */
  owner?: InputMaybe<AccountFilter>;
  /** Filter by the object’s `ownerId` field. */
  ownerId?: InputMaybe<StringFilter>;
  /** Filter by the object’s `paymentAddress` field. */
  paymentAddress?: InputMaybe<StringFilter>;
  /** Filter by the object’s `sellerFee` field. */
  sellerFee?: InputMaybe<StringFilter>;
  /** Filter by the object’s `tokenId` field. */
  tokenId?: InputMaybe<StringFilter>;
  /** Filter by the object’s `updatedAt` field. */
  updatedAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `updatedHeight` field. */
  updatedHeight?: InputMaybe<BigFloatFilter>;
  /** Filter by the object’s `uri` field. */
  uri?: InputMaybe<StringFilter>;
};

export type NftMaxAggregateFilter = {
  createdHeight?: InputMaybe<BigFloatFilter>;
  updatedHeight?: InputMaybe<BigFloatFilter>;
};

export type NftMaxAggregates = {
  __typename?: 'NftMaxAggregates';
  /** Maximum of createdHeight across the matching connection */
  createdHeight?: Maybe<Scalars['BigFloat']>;
  /** Maximum of updatedHeight across the matching connection */
  updatedHeight?: Maybe<Scalars['BigFloat']>;
};

/** A connection to a list of `NftMetadatum` values. */
export type NftMetadataConnection = {
  __typename?: 'NftMetadataConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<NftMetadatumAggregates>;
  /** A list of edges which contains the `NftMetadatum` and cursor to aid in pagination. */
  edges: Array<NftMetadataEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<NftMetadatumAggregates>>;
  /** A list of `NftMetadatum` objects. */
  nodes: Array<Maybe<NftMetadatum>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `NftMetadatum` you could get from the connection. */
  totalCount: Scalars['Int'];
};


/** A connection to a list of `NftMetadatum` values. */
export type NftMetadataConnectionGroupedAggregatesArgs = {
  groupBy: Array<NftMetadataGroupBy>;
  having?: InputMaybe<NftMetadataHavingInput>;
};

/** A `NftMetadatum` edge in the connection. */
export type NftMetadataEdge = {
  __typename?: 'NftMetadataEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `NftMetadatum` at the end of the edge. */
  node?: Maybe<NftMetadatum>;
};

/** Grouping methods for `NftMetadatum` for usage during aggregation. */
export enum NftMetadataGroupBy {
  AnimationUrl = 'ANIMATION_URL',
  Attributes = 'ATTRIBUTES',
  Description = 'DESCRIPTION',
  Image = 'IMAGE',
  Name = 'NAME'
}

/** Conditions for `NftMetadatum` aggregates. */
export type NftMetadataHavingInput = {
  AND?: InputMaybe<Array<NftMetadataHavingInput>>;
  OR?: InputMaybe<Array<NftMetadataHavingInput>>;
};

/** Methods to use when ordering `NftMetadatum`. */
export enum NftMetadataOrderBy {
  AnimationUrlAsc = 'ANIMATION_URL_ASC',
  AnimationUrlDesc = 'ANIMATION_URL_DESC',
  AttributesAsc = 'ATTRIBUTES_ASC',
  AttributesDesc = 'ATTRIBUTES_DESC',
  DescriptionAsc = 'DESCRIPTION_ASC',
  DescriptionDesc = 'DESCRIPTION_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  ImageAsc = 'IMAGE_ASC',
  ImageDesc = 'IMAGE_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  NftsByMetadataIdAverageCollectionIdAsc = 'NFTS_BY_METADATA_ID_AVERAGE_COLLECTION_ID_ASC',
  NftsByMetadataIdAverageCollectionIdDesc = 'NFTS_BY_METADATA_ID_AVERAGE_COLLECTION_ID_DESC',
  NftsByMetadataIdAverageCreatedAtAsc = 'NFTS_BY_METADATA_ID_AVERAGE_CREATED_AT_ASC',
  NftsByMetadataIdAverageCreatedAtDesc = 'NFTS_BY_METADATA_ID_AVERAGE_CREATED_AT_DESC',
  NftsByMetadataIdAverageCreatedHeightAsc = 'NFTS_BY_METADATA_ID_AVERAGE_CREATED_HEIGHT_ASC',
  NftsByMetadataIdAverageCreatedHeightDesc = 'NFTS_BY_METADATA_ID_AVERAGE_CREATED_HEIGHT_DESC',
  NftsByMetadataIdAverageIdAsc = 'NFTS_BY_METADATA_ID_AVERAGE_ID_ASC',
  NftsByMetadataIdAverageIdDesc = 'NFTS_BY_METADATA_ID_AVERAGE_ID_DESC',
  NftsByMetadataIdAverageMetadataIdAsc = 'NFTS_BY_METADATA_ID_AVERAGE_METADATA_ID_ASC',
  NftsByMetadataIdAverageMetadataIdDesc = 'NFTS_BY_METADATA_ID_AVERAGE_METADATA_ID_DESC',
  NftsByMetadataIdAverageMinterIdAsc = 'NFTS_BY_METADATA_ID_AVERAGE_MINTER_ID_ASC',
  NftsByMetadataIdAverageMinterIdDesc = 'NFTS_BY_METADATA_ID_AVERAGE_MINTER_ID_DESC',
  NftsByMetadataIdAverageOwnerIdAsc = 'NFTS_BY_METADATA_ID_AVERAGE_OWNER_ID_ASC',
  NftsByMetadataIdAverageOwnerIdDesc = 'NFTS_BY_METADATA_ID_AVERAGE_OWNER_ID_DESC',
  NftsByMetadataIdAveragePaymentAddressAsc = 'NFTS_BY_METADATA_ID_AVERAGE_PAYMENT_ADDRESS_ASC',
  NftsByMetadataIdAveragePaymentAddressDesc = 'NFTS_BY_METADATA_ID_AVERAGE_PAYMENT_ADDRESS_DESC',
  NftsByMetadataIdAverageSellerFeeAsc = 'NFTS_BY_METADATA_ID_AVERAGE_SELLER_FEE_ASC',
  NftsByMetadataIdAverageSellerFeeDesc = 'NFTS_BY_METADATA_ID_AVERAGE_SELLER_FEE_DESC',
  NftsByMetadataIdAverageTokenIdAsc = 'NFTS_BY_METADATA_ID_AVERAGE_TOKEN_ID_ASC',
  NftsByMetadataIdAverageTokenIdDesc = 'NFTS_BY_METADATA_ID_AVERAGE_TOKEN_ID_DESC',
  NftsByMetadataIdAverageUpdatedAtAsc = 'NFTS_BY_METADATA_ID_AVERAGE_UPDATED_AT_ASC',
  NftsByMetadataIdAverageUpdatedAtDesc = 'NFTS_BY_METADATA_ID_AVERAGE_UPDATED_AT_DESC',
  NftsByMetadataIdAverageUpdatedHeightAsc = 'NFTS_BY_METADATA_ID_AVERAGE_UPDATED_HEIGHT_ASC',
  NftsByMetadataIdAverageUpdatedHeightDesc = 'NFTS_BY_METADATA_ID_AVERAGE_UPDATED_HEIGHT_DESC',
  NftsByMetadataIdAverageUriAsc = 'NFTS_BY_METADATA_ID_AVERAGE_URI_ASC',
  NftsByMetadataIdAverageUriDesc = 'NFTS_BY_METADATA_ID_AVERAGE_URI_DESC',
  NftsByMetadataIdCountAsc = 'NFTS_BY_METADATA_ID_COUNT_ASC',
  NftsByMetadataIdCountDesc = 'NFTS_BY_METADATA_ID_COUNT_DESC',
  NftsByMetadataIdDistinctCountCollectionIdAsc = 'NFTS_BY_METADATA_ID_DISTINCT_COUNT_COLLECTION_ID_ASC',
  NftsByMetadataIdDistinctCountCollectionIdDesc = 'NFTS_BY_METADATA_ID_DISTINCT_COUNT_COLLECTION_ID_DESC',
  NftsByMetadataIdDistinctCountCreatedAtAsc = 'NFTS_BY_METADATA_ID_DISTINCT_COUNT_CREATED_AT_ASC',
  NftsByMetadataIdDistinctCountCreatedAtDesc = 'NFTS_BY_METADATA_ID_DISTINCT_COUNT_CREATED_AT_DESC',
  NftsByMetadataIdDistinctCountCreatedHeightAsc = 'NFTS_BY_METADATA_ID_DISTINCT_COUNT_CREATED_HEIGHT_ASC',
  NftsByMetadataIdDistinctCountCreatedHeightDesc = 'NFTS_BY_METADATA_ID_DISTINCT_COUNT_CREATED_HEIGHT_DESC',
  NftsByMetadataIdDistinctCountIdAsc = 'NFTS_BY_METADATA_ID_DISTINCT_COUNT_ID_ASC',
  NftsByMetadataIdDistinctCountIdDesc = 'NFTS_BY_METADATA_ID_DISTINCT_COUNT_ID_DESC',
  NftsByMetadataIdDistinctCountMetadataIdAsc = 'NFTS_BY_METADATA_ID_DISTINCT_COUNT_METADATA_ID_ASC',
  NftsByMetadataIdDistinctCountMetadataIdDesc = 'NFTS_BY_METADATA_ID_DISTINCT_COUNT_METADATA_ID_DESC',
  NftsByMetadataIdDistinctCountMinterIdAsc = 'NFTS_BY_METADATA_ID_DISTINCT_COUNT_MINTER_ID_ASC',
  NftsByMetadataIdDistinctCountMinterIdDesc = 'NFTS_BY_METADATA_ID_DISTINCT_COUNT_MINTER_ID_DESC',
  NftsByMetadataIdDistinctCountOwnerIdAsc = 'NFTS_BY_METADATA_ID_DISTINCT_COUNT_OWNER_ID_ASC',
  NftsByMetadataIdDistinctCountOwnerIdDesc = 'NFTS_BY_METADATA_ID_DISTINCT_COUNT_OWNER_ID_DESC',
  NftsByMetadataIdDistinctCountPaymentAddressAsc = 'NFTS_BY_METADATA_ID_DISTINCT_COUNT_PAYMENT_ADDRESS_ASC',
  NftsByMetadataIdDistinctCountPaymentAddressDesc = 'NFTS_BY_METADATA_ID_DISTINCT_COUNT_PAYMENT_ADDRESS_DESC',
  NftsByMetadataIdDistinctCountSellerFeeAsc = 'NFTS_BY_METADATA_ID_DISTINCT_COUNT_SELLER_FEE_ASC',
  NftsByMetadataIdDistinctCountSellerFeeDesc = 'NFTS_BY_METADATA_ID_DISTINCT_COUNT_SELLER_FEE_DESC',
  NftsByMetadataIdDistinctCountTokenIdAsc = 'NFTS_BY_METADATA_ID_DISTINCT_COUNT_TOKEN_ID_ASC',
  NftsByMetadataIdDistinctCountTokenIdDesc = 'NFTS_BY_METADATA_ID_DISTINCT_COUNT_TOKEN_ID_DESC',
  NftsByMetadataIdDistinctCountUpdatedAtAsc = 'NFTS_BY_METADATA_ID_DISTINCT_COUNT_UPDATED_AT_ASC',
  NftsByMetadataIdDistinctCountUpdatedAtDesc = 'NFTS_BY_METADATA_ID_DISTINCT_COUNT_UPDATED_AT_DESC',
  NftsByMetadataIdDistinctCountUpdatedHeightAsc = 'NFTS_BY_METADATA_ID_DISTINCT_COUNT_UPDATED_HEIGHT_ASC',
  NftsByMetadataIdDistinctCountUpdatedHeightDesc = 'NFTS_BY_METADATA_ID_DISTINCT_COUNT_UPDATED_HEIGHT_DESC',
  NftsByMetadataIdDistinctCountUriAsc = 'NFTS_BY_METADATA_ID_DISTINCT_COUNT_URI_ASC',
  NftsByMetadataIdDistinctCountUriDesc = 'NFTS_BY_METADATA_ID_DISTINCT_COUNT_URI_DESC',
  NftsByMetadataIdMaxCollectionIdAsc = 'NFTS_BY_METADATA_ID_MAX_COLLECTION_ID_ASC',
  NftsByMetadataIdMaxCollectionIdDesc = 'NFTS_BY_METADATA_ID_MAX_COLLECTION_ID_DESC',
  NftsByMetadataIdMaxCreatedAtAsc = 'NFTS_BY_METADATA_ID_MAX_CREATED_AT_ASC',
  NftsByMetadataIdMaxCreatedAtDesc = 'NFTS_BY_METADATA_ID_MAX_CREATED_AT_DESC',
  NftsByMetadataIdMaxCreatedHeightAsc = 'NFTS_BY_METADATA_ID_MAX_CREATED_HEIGHT_ASC',
  NftsByMetadataIdMaxCreatedHeightDesc = 'NFTS_BY_METADATA_ID_MAX_CREATED_HEIGHT_DESC',
  NftsByMetadataIdMaxIdAsc = 'NFTS_BY_METADATA_ID_MAX_ID_ASC',
  NftsByMetadataIdMaxIdDesc = 'NFTS_BY_METADATA_ID_MAX_ID_DESC',
  NftsByMetadataIdMaxMetadataIdAsc = 'NFTS_BY_METADATA_ID_MAX_METADATA_ID_ASC',
  NftsByMetadataIdMaxMetadataIdDesc = 'NFTS_BY_METADATA_ID_MAX_METADATA_ID_DESC',
  NftsByMetadataIdMaxMinterIdAsc = 'NFTS_BY_METADATA_ID_MAX_MINTER_ID_ASC',
  NftsByMetadataIdMaxMinterIdDesc = 'NFTS_BY_METADATA_ID_MAX_MINTER_ID_DESC',
  NftsByMetadataIdMaxOwnerIdAsc = 'NFTS_BY_METADATA_ID_MAX_OWNER_ID_ASC',
  NftsByMetadataIdMaxOwnerIdDesc = 'NFTS_BY_METADATA_ID_MAX_OWNER_ID_DESC',
  NftsByMetadataIdMaxPaymentAddressAsc = 'NFTS_BY_METADATA_ID_MAX_PAYMENT_ADDRESS_ASC',
  NftsByMetadataIdMaxPaymentAddressDesc = 'NFTS_BY_METADATA_ID_MAX_PAYMENT_ADDRESS_DESC',
  NftsByMetadataIdMaxSellerFeeAsc = 'NFTS_BY_METADATA_ID_MAX_SELLER_FEE_ASC',
  NftsByMetadataIdMaxSellerFeeDesc = 'NFTS_BY_METADATA_ID_MAX_SELLER_FEE_DESC',
  NftsByMetadataIdMaxTokenIdAsc = 'NFTS_BY_METADATA_ID_MAX_TOKEN_ID_ASC',
  NftsByMetadataIdMaxTokenIdDesc = 'NFTS_BY_METADATA_ID_MAX_TOKEN_ID_DESC',
  NftsByMetadataIdMaxUpdatedAtAsc = 'NFTS_BY_METADATA_ID_MAX_UPDATED_AT_ASC',
  NftsByMetadataIdMaxUpdatedAtDesc = 'NFTS_BY_METADATA_ID_MAX_UPDATED_AT_DESC',
  NftsByMetadataIdMaxUpdatedHeightAsc = 'NFTS_BY_METADATA_ID_MAX_UPDATED_HEIGHT_ASC',
  NftsByMetadataIdMaxUpdatedHeightDesc = 'NFTS_BY_METADATA_ID_MAX_UPDATED_HEIGHT_DESC',
  NftsByMetadataIdMaxUriAsc = 'NFTS_BY_METADATA_ID_MAX_URI_ASC',
  NftsByMetadataIdMaxUriDesc = 'NFTS_BY_METADATA_ID_MAX_URI_DESC',
  NftsByMetadataIdMinCollectionIdAsc = 'NFTS_BY_METADATA_ID_MIN_COLLECTION_ID_ASC',
  NftsByMetadataIdMinCollectionIdDesc = 'NFTS_BY_METADATA_ID_MIN_COLLECTION_ID_DESC',
  NftsByMetadataIdMinCreatedAtAsc = 'NFTS_BY_METADATA_ID_MIN_CREATED_AT_ASC',
  NftsByMetadataIdMinCreatedAtDesc = 'NFTS_BY_METADATA_ID_MIN_CREATED_AT_DESC',
  NftsByMetadataIdMinCreatedHeightAsc = 'NFTS_BY_METADATA_ID_MIN_CREATED_HEIGHT_ASC',
  NftsByMetadataIdMinCreatedHeightDesc = 'NFTS_BY_METADATA_ID_MIN_CREATED_HEIGHT_DESC',
  NftsByMetadataIdMinIdAsc = 'NFTS_BY_METADATA_ID_MIN_ID_ASC',
  NftsByMetadataIdMinIdDesc = 'NFTS_BY_METADATA_ID_MIN_ID_DESC',
  NftsByMetadataIdMinMetadataIdAsc = 'NFTS_BY_METADATA_ID_MIN_METADATA_ID_ASC',
  NftsByMetadataIdMinMetadataIdDesc = 'NFTS_BY_METADATA_ID_MIN_METADATA_ID_DESC',
  NftsByMetadataIdMinMinterIdAsc = 'NFTS_BY_METADATA_ID_MIN_MINTER_ID_ASC',
  NftsByMetadataIdMinMinterIdDesc = 'NFTS_BY_METADATA_ID_MIN_MINTER_ID_DESC',
  NftsByMetadataIdMinOwnerIdAsc = 'NFTS_BY_METADATA_ID_MIN_OWNER_ID_ASC',
  NftsByMetadataIdMinOwnerIdDesc = 'NFTS_BY_METADATA_ID_MIN_OWNER_ID_DESC',
  NftsByMetadataIdMinPaymentAddressAsc = 'NFTS_BY_METADATA_ID_MIN_PAYMENT_ADDRESS_ASC',
  NftsByMetadataIdMinPaymentAddressDesc = 'NFTS_BY_METADATA_ID_MIN_PAYMENT_ADDRESS_DESC',
  NftsByMetadataIdMinSellerFeeAsc = 'NFTS_BY_METADATA_ID_MIN_SELLER_FEE_ASC',
  NftsByMetadataIdMinSellerFeeDesc = 'NFTS_BY_METADATA_ID_MIN_SELLER_FEE_DESC',
  NftsByMetadataIdMinTokenIdAsc = 'NFTS_BY_METADATA_ID_MIN_TOKEN_ID_ASC',
  NftsByMetadataIdMinTokenIdDesc = 'NFTS_BY_METADATA_ID_MIN_TOKEN_ID_DESC',
  NftsByMetadataIdMinUpdatedAtAsc = 'NFTS_BY_METADATA_ID_MIN_UPDATED_AT_ASC',
  NftsByMetadataIdMinUpdatedAtDesc = 'NFTS_BY_METADATA_ID_MIN_UPDATED_AT_DESC',
  NftsByMetadataIdMinUpdatedHeightAsc = 'NFTS_BY_METADATA_ID_MIN_UPDATED_HEIGHT_ASC',
  NftsByMetadataIdMinUpdatedHeightDesc = 'NFTS_BY_METADATA_ID_MIN_UPDATED_HEIGHT_DESC',
  NftsByMetadataIdMinUriAsc = 'NFTS_BY_METADATA_ID_MIN_URI_ASC',
  NftsByMetadataIdMinUriDesc = 'NFTS_BY_METADATA_ID_MIN_URI_DESC',
  NftsByMetadataIdStddevPopulationCollectionIdAsc = 'NFTS_BY_METADATA_ID_STDDEV_POPULATION_COLLECTION_ID_ASC',
  NftsByMetadataIdStddevPopulationCollectionIdDesc = 'NFTS_BY_METADATA_ID_STDDEV_POPULATION_COLLECTION_ID_DESC',
  NftsByMetadataIdStddevPopulationCreatedAtAsc = 'NFTS_BY_METADATA_ID_STDDEV_POPULATION_CREATED_AT_ASC',
  NftsByMetadataIdStddevPopulationCreatedAtDesc = 'NFTS_BY_METADATA_ID_STDDEV_POPULATION_CREATED_AT_DESC',
  NftsByMetadataIdStddevPopulationCreatedHeightAsc = 'NFTS_BY_METADATA_ID_STDDEV_POPULATION_CREATED_HEIGHT_ASC',
  NftsByMetadataIdStddevPopulationCreatedHeightDesc = 'NFTS_BY_METADATA_ID_STDDEV_POPULATION_CREATED_HEIGHT_DESC',
  NftsByMetadataIdStddevPopulationIdAsc = 'NFTS_BY_METADATA_ID_STDDEV_POPULATION_ID_ASC',
  NftsByMetadataIdStddevPopulationIdDesc = 'NFTS_BY_METADATA_ID_STDDEV_POPULATION_ID_DESC',
  NftsByMetadataIdStddevPopulationMetadataIdAsc = 'NFTS_BY_METADATA_ID_STDDEV_POPULATION_METADATA_ID_ASC',
  NftsByMetadataIdStddevPopulationMetadataIdDesc = 'NFTS_BY_METADATA_ID_STDDEV_POPULATION_METADATA_ID_DESC',
  NftsByMetadataIdStddevPopulationMinterIdAsc = 'NFTS_BY_METADATA_ID_STDDEV_POPULATION_MINTER_ID_ASC',
  NftsByMetadataIdStddevPopulationMinterIdDesc = 'NFTS_BY_METADATA_ID_STDDEV_POPULATION_MINTER_ID_DESC',
  NftsByMetadataIdStddevPopulationOwnerIdAsc = 'NFTS_BY_METADATA_ID_STDDEV_POPULATION_OWNER_ID_ASC',
  NftsByMetadataIdStddevPopulationOwnerIdDesc = 'NFTS_BY_METADATA_ID_STDDEV_POPULATION_OWNER_ID_DESC',
  NftsByMetadataIdStddevPopulationPaymentAddressAsc = 'NFTS_BY_METADATA_ID_STDDEV_POPULATION_PAYMENT_ADDRESS_ASC',
  NftsByMetadataIdStddevPopulationPaymentAddressDesc = 'NFTS_BY_METADATA_ID_STDDEV_POPULATION_PAYMENT_ADDRESS_DESC',
  NftsByMetadataIdStddevPopulationSellerFeeAsc = 'NFTS_BY_METADATA_ID_STDDEV_POPULATION_SELLER_FEE_ASC',
  NftsByMetadataIdStddevPopulationSellerFeeDesc = 'NFTS_BY_METADATA_ID_STDDEV_POPULATION_SELLER_FEE_DESC',
  NftsByMetadataIdStddevPopulationTokenIdAsc = 'NFTS_BY_METADATA_ID_STDDEV_POPULATION_TOKEN_ID_ASC',
  NftsByMetadataIdStddevPopulationTokenIdDesc = 'NFTS_BY_METADATA_ID_STDDEV_POPULATION_TOKEN_ID_DESC',
  NftsByMetadataIdStddevPopulationUpdatedAtAsc = 'NFTS_BY_METADATA_ID_STDDEV_POPULATION_UPDATED_AT_ASC',
  NftsByMetadataIdStddevPopulationUpdatedAtDesc = 'NFTS_BY_METADATA_ID_STDDEV_POPULATION_UPDATED_AT_DESC',
  NftsByMetadataIdStddevPopulationUpdatedHeightAsc = 'NFTS_BY_METADATA_ID_STDDEV_POPULATION_UPDATED_HEIGHT_ASC',
  NftsByMetadataIdStddevPopulationUpdatedHeightDesc = 'NFTS_BY_METADATA_ID_STDDEV_POPULATION_UPDATED_HEIGHT_DESC',
  NftsByMetadataIdStddevPopulationUriAsc = 'NFTS_BY_METADATA_ID_STDDEV_POPULATION_URI_ASC',
  NftsByMetadataIdStddevPopulationUriDesc = 'NFTS_BY_METADATA_ID_STDDEV_POPULATION_URI_DESC',
  NftsByMetadataIdStddevSampleCollectionIdAsc = 'NFTS_BY_METADATA_ID_STDDEV_SAMPLE_COLLECTION_ID_ASC',
  NftsByMetadataIdStddevSampleCollectionIdDesc = 'NFTS_BY_METADATA_ID_STDDEV_SAMPLE_COLLECTION_ID_DESC',
  NftsByMetadataIdStddevSampleCreatedAtAsc = 'NFTS_BY_METADATA_ID_STDDEV_SAMPLE_CREATED_AT_ASC',
  NftsByMetadataIdStddevSampleCreatedAtDesc = 'NFTS_BY_METADATA_ID_STDDEV_SAMPLE_CREATED_AT_DESC',
  NftsByMetadataIdStddevSampleCreatedHeightAsc = 'NFTS_BY_METADATA_ID_STDDEV_SAMPLE_CREATED_HEIGHT_ASC',
  NftsByMetadataIdStddevSampleCreatedHeightDesc = 'NFTS_BY_METADATA_ID_STDDEV_SAMPLE_CREATED_HEIGHT_DESC',
  NftsByMetadataIdStddevSampleIdAsc = 'NFTS_BY_METADATA_ID_STDDEV_SAMPLE_ID_ASC',
  NftsByMetadataIdStddevSampleIdDesc = 'NFTS_BY_METADATA_ID_STDDEV_SAMPLE_ID_DESC',
  NftsByMetadataIdStddevSampleMetadataIdAsc = 'NFTS_BY_METADATA_ID_STDDEV_SAMPLE_METADATA_ID_ASC',
  NftsByMetadataIdStddevSampleMetadataIdDesc = 'NFTS_BY_METADATA_ID_STDDEV_SAMPLE_METADATA_ID_DESC',
  NftsByMetadataIdStddevSampleMinterIdAsc = 'NFTS_BY_METADATA_ID_STDDEV_SAMPLE_MINTER_ID_ASC',
  NftsByMetadataIdStddevSampleMinterIdDesc = 'NFTS_BY_METADATA_ID_STDDEV_SAMPLE_MINTER_ID_DESC',
  NftsByMetadataIdStddevSampleOwnerIdAsc = 'NFTS_BY_METADATA_ID_STDDEV_SAMPLE_OWNER_ID_ASC',
  NftsByMetadataIdStddevSampleOwnerIdDesc = 'NFTS_BY_METADATA_ID_STDDEV_SAMPLE_OWNER_ID_DESC',
  NftsByMetadataIdStddevSamplePaymentAddressAsc = 'NFTS_BY_METADATA_ID_STDDEV_SAMPLE_PAYMENT_ADDRESS_ASC',
  NftsByMetadataIdStddevSamplePaymentAddressDesc = 'NFTS_BY_METADATA_ID_STDDEV_SAMPLE_PAYMENT_ADDRESS_DESC',
  NftsByMetadataIdStddevSampleSellerFeeAsc = 'NFTS_BY_METADATA_ID_STDDEV_SAMPLE_SELLER_FEE_ASC',
  NftsByMetadataIdStddevSampleSellerFeeDesc = 'NFTS_BY_METADATA_ID_STDDEV_SAMPLE_SELLER_FEE_DESC',
  NftsByMetadataIdStddevSampleTokenIdAsc = 'NFTS_BY_METADATA_ID_STDDEV_SAMPLE_TOKEN_ID_ASC',
  NftsByMetadataIdStddevSampleTokenIdDesc = 'NFTS_BY_METADATA_ID_STDDEV_SAMPLE_TOKEN_ID_DESC',
  NftsByMetadataIdStddevSampleUpdatedAtAsc = 'NFTS_BY_METADATA_ID_STDDEV_SAMPLE_UPDATED_AT_ASC',
  NftsByMetadataIdStddevSampleUpdatedAtDesc = 'NFTS_BY_METADATA_ID_STDDEV_SAMPLE_UPDATED_AT_DESC',
  NftsByMetadataIdStddevSampleUpdatedHeightAsc = 'NFTS_BY_METADATA_ID_STDDEV_SAMPLE_UPDATED_HEIGHT_ASC',
  NftsByMetadataIdStddevSampleUpdatedHeightDesc = 'NFTS_BY_METADATA_ID_STDDEV_SAMPLE_UPDATED_HEIGHT_DESC',
  NftsByMetadataIdStddevSampleUriAsc = 'NFTS_BY_METADATA_ID_STDDEV_SAMPLE_URI_ASC',
  NftsByMetadataIdStddevSampleUriDesc = 'NFTS_BY_METADATA_ID_STDDEV_SAMPLE_URI_DESC',
  NftsByMetadataIdSumCollectionIdAsc = 'NFTS_BY_METADATA_ID_SUM_COLLECTION_ID_ASC',
  NftsByMetadataIdSumCollectionIdDesc = 'NFTS_BY_METADATA_ID_SUM_COLLECTION_ID_DESC',
  NftsByMetadataIdSumCreatedAtAsc = 'NFTS_BY_METADATA_ID_SUM_CREATED_AT_ASC',
  NftsByMetadataIdSumCreatedAtDesc = 'NFTS_BY_METADATA_ID_SUM_CREATED_AT_DESC',
  NftsByMetadataIdSumCreatedHeightAsc = 'NFTS_BY_METADATA_ID_SUM_CREATED_HEIGHT_ASC',
  NftsByMetadataIdSumCreatedHeightDesc = 'NFTS_BY_METADATA_ID_SUM_CREATED_HEIGHT_DESC',
  NftsByMetadataIdSumIdAsc = 'NFTS_BY_METADATA_ID_SUM_ID_ASC',
  NftsByMetadataIdSumIdDesc = 'NFTS_BY_METADATA_ID_SUM_ID_DESC',
  NftsByMetadataIdSumMetadataIdAsc = 'NFTS_BY_METADATA_ID_SUM_METADATA_ID_ASC',
  NftsByMetadataIdSumMetadataIdDesc = 'NFTS_BY_METADATA_ID_SUM_METADATA_ID_DESC',
  NftsByMetadataIdSumMinterIdAsc = 'NFTS_BY_METADATA_ID_SUM_MINTER_ID_ASC',
  NftsByMetadataIdSumMinterIdDesc = 'NFTS_BY_METADATA_ID_SUM_MINTER_ID_DESC',
  NftsByMetadataIdSumOwnerIdAsc = 'NFTS_BY_METADATA_ID_SUM_OWNER_ID_ASC',
  NftsByMetadataIdSumOwnerIdDesc = 'NFTS_BY_METADATA_ID_SUM_OWNER_ID_DESC',
  NftsByMetadataIdSumPaymentAddressAsc = 'NFTS_BY_METADATA_ID_SUM_PAYMENT_ADDRESS_ASC',
  NftsByMetadataIdSumPaymentAddressDesc = 'NFTS_BY_METADATA_ID_SUM_PAYMENT_ADDRESS_DESC',
  NftsByMetadataIdSumSellerFeeAsc = 'NFTS_BY_METADATA_ID_SUM_SELLER_FEE_ASC',
  NftsByMetadataIdSumSellerFeeDesc = 'NFTS_BY_METADATA_ID_SUM_SELLER_FEE_DESC',
  NftsByMetadataIdSumTokenIdAsc = 'NFTS_BY_METADATA_ID_SUM_TOKEN_ID_ASC',
  NftsByMetadataIdSumTokenIdDesc = 'NFTS_BY_METADATA_ID_SUM_TOKEN_ID_DESC',
  NftsByMetadataIdSumUpdatedAtAsc = 'NFTS_BY_METADATA_ID_SUM_UPDATED_AT_ASC',
  NftsByMetadataIdSumUpdatedAtDesc = 'NFTS_BY_METADATA_ID_SUM_UPDATED_AT_DESC',
  NftsByMetadataIdSumUpdatedHeightAsc = 'NFTS_BY_METADATA_ID_SUM_UPDATED_HEIGHT_ASC',
  NftsByMetadataIdSumUpdatedHeightDesc = 'NFTS_BY_METADATA_ID_SUM_UPDATED_HEIGHT_DESC',
  NftsByMetadataIdSumUriAsc = 'NFTS_BY_METADATA_ID_SUM_URI_ASC',
  NftsByMetadataIdSumUriDesc = 'NFTS_BY_METADATA_ID_SUM_URI_DESC',
  NftsByMetadataIdVariancePopulationCollectionIdAsc = 'NFTS_BY_METADATA_ID_VARIANCE_POPULATION_COLLECTION_ID_ASC',
  NftsByMetadataIdVariancePopulationCollectionIdDesc = 'NFTS_BY_METADATA_ID_VARIANCE_POPULATION_COLLECTION_ID_DESC',
  NftsByMetadataIdVariancePopulationCreatedAtAsc = 'NFTS_BY_METADATA_ID_VARIANCE_POPULATION_CREATED_AT_ASC',
  NftsByMetadataIdVariancePopulationCreatedAtDesc = 'NFTS_BY_METADATA_ID_VARIANCE_POPULATION_CREATED_AT_DESC',
  NftsByMetadataIdVariancePopulationCreatedHeightAsc = 'NFTS_BY_METADATA_ID_VARIANCE_POPULATION_CREATED_HEIGHT_ASC',
  NftsByMetadataIdVariancePopulationCreatedHeightDesc = 'NFTS_BY_METADATA_ID_VARIANCE_POPULATION_CREATED_HEIGHT_DESC',
  NftsByMetadataIdVariancePopulationIdAsc = 'NFTS_BY_METADATA_ID_VARIANCE_POPULATION_ID_ASC',
  NftsByMetadataIdVariancePopulationIdDesc = 'NFTS_BY_METADATA_ID_VARIANCE_POPULATION_ID_DESC',
  NftsByMetadataIdVariancePopulationMetadataIdAsc = 'NFTS_BY_METADATA_ID_VARIANCE_POPULATION_METADATA_ID_ASC',
  NftsByMetadataIdVariancePopulationMetadataIdDesc = 'NFTS_BY_METADATA_ID_VARIANCE_POPULATION_METADATA_ID_DESC',
  NftsByMetadataIdVariancePopulationMinterIdAsc = 'NFTS_BY_METADATA_ID_VARIANCE_POPULATION_MINTER_ID_ASC',
  NftsByMetadataIdVariancePopulationMinterIdDesc = 'NFTS_BY_METADATA_ID_VARIANCE_POPULATION_MINTER_ID_DESC',
  NftsByMetadataIdVariancePopulationOwnerIdAsc = 'NFTS_BY_METADATA_ID_VARIANCE_POPULATION_OWNER_ID_ASC',
  NftsByMetadataIdVariancePopulationOwnerIdDesc = 'NFTS_BY_METADATA_ID_VARIANCE_POPULATION_OWNER_ID_DESC',
  NftsByMetadataIdVariancePopulationPaymentAddressAsc = 'NFTS_BY_METADATA_ID_VARIANCE_POPULATION_PAYMENT_ADDRESS_ASC',
  NftsByMetadataIdVariancePopulationPaymentAddressDesc = 'NFTS_BY_METADATA_ID_VARIANCE_POPULATION_PAYMENT_ADDRESS_DESC',
  NftsByMetadataIdVariancePopulationSellerFeeAsc = 'NFTS_BY_METADATA_ID_VARIANCE_POPULATION_SELLER_FEE_ASC',
  NftsByMetadataIdVariancePopulationSellerFeeDesc = 'NFTS_BY_METADATA_ID_VARIANCE_POPULATION_SELLER_FEE_DESC',
  NftsByMetadataIdVariancePopulationTokenIdAsc = 'NFTS_BY_METADATA_ID_VARIANCE_POPULATION_TOKEN_ID_ASC',
  NftsByMetadataIdVariancePopulationTokenIdDesc = 'NFTS_BY_METADATA_ID_VARIANCE_POPULATION_TOKEN_ID_DESC',
  NftsByMetadataIdVariancePopulationUpdatedAtAsc = 'NFTS_BY_METADATA_ID_VARIANCE_POPULATION_UPDATED_AT_ASC',
  NftsByMetadataIdVariancePopulationUpdatedAtDesc = 'NFTS_BY_METADATA_ID_VARIANCE_POPULATION_UPDATED_AT_DESC',
  NftsByMetadataIdVariancePopulationUpdatedHeightAsc = 'NFTS_BY_METADATA_ID_VARIANCE_POPULATION_UPDATED_HEIGHT_ASC',
  NftsByMetadataIdVariancePopulationUpdatedHeightDesc = 'NFTS_BY_METADATA_ID_VARIANCE_POPULATION_UPDATED_HEIGHT_DESC',
  NftsByMetadataIdVariancePopulationUriAsc = 'NFTS_BY_METADATA_ID_VARIANCE_POPULATION_URI_ASC',
  NftsByMetadataIdVariancePopulationUriDesc = 'NFTS_BY_METADATA_ID_VARIANCE_POPULATION_URI_DESC',
  NftsByMetadataIdVarianceSampleCollectionIdAsc = 'NFTS_BY_METADATA_ID_VARIANCE_SAMPLE_COLLECTION_ID_ASC',
  NftsByMetadataIdVarianceSampleCollectionIdDesc = 'NFTS_BY_METADATA_ID_VARIANCE_SAMPLE_COLLECTION_ID_DESC',
  NftsByMetadataIdVarianceSampleCreatedAtAsc = 'NFTS_BY_METADATA_ID_VARIANCE_SAMPLE_CREATED_AT_ASC',
  NftsByMetadataIdVarianceSampleCreatedAtDesc = 'NFTS_BY_METADATA_ID_VARIANCE_SAMPLE_CREATED_AT_DESC',
  NftsByMetadataIdVarianceSampleCreatedHeightAsc = 'NFTS_BY_METADATA_ID_VARIANCE_SAMPLE_CREATED_HEIGHT_ASC',
  NftsByMetadataIdVarianceSampleCreatedHeightDesc = 'NFTS_BY_METADATA_ID_VARIANCE_SAMPLE_CREATED_HEIGHT_DESC',
  NftsByMetadataIdVarianceSampleIdAsc = 'NFTS_BY_METADATA_ID_VARIANCE_SAMPLE_ID_ASC',
  NftsByMetadataIdVarianceSampleIdDesc = 'NFTS_BY_METADATA_ID_VARIANCE_SAMPLE_ID_DESC',
  NftsByMetadataIdVarianceSampleMetadataIdAsc = 'NFTS_BY_METADATA_ID_VARIANCE_SAMPLE_METADATA_ID_ASC',
  NftsByMetadataIdVarianceSampleMetadataIdDesc = 'NFTS_BY_METADATA_ID_VARIANCE_SAMPLE_METADATA_ID_DESC',
  NftsByMetadataIdVarianceSampleMinterIdAsc = 'NFTS_BY_METADATA_ID_VARIANCE_SAMPLE_MINTER_ID_ASC',
  NftsByMetadataIdVarianceSampleMinterIdDesc = 'NFTS_BY_METADATA_ID_VARIANCE_SAMPLE_MINTER_ID_DESC',
  NftsByMetadataIdVarianceSampleOwnerIdAsc = 'NFTS_BY_METADATA_ID_VARIANCE_SAMPLE_OWNER_ID_ASC',
  NftsByMetadataIdVarianceSampleOwnerIdDesc = 'NFTS_BY_METADATA_ID_VARIANCE_SAMPLE_OWNER_ID_DESC',
  NftsByMetadataIdVarianceSamplePaymentAddressAsc = 'NFTS_BY_METADATA_ID_VARIANCE_SAMPLE_PAYMENT_ADDRESS_ASC',
  NftsByMetadataIdVarianceSamplePaymentAddressDesc = 'NFTS_BY_METADATA_ID_VARIANCE_SAMPLE_PAYMENT_ADDRESS_DESC',
  NftsByMetadataIdVarianceSampleSellerFeeAsc = 'NFTS_BY_METADATA_ID_VARIANCE_SAMPLE_SELLER_FEE_ASC',
  NftsByMetadataIdVarianceSampleSellerFeeDesc = 'NFTS_BY_METADATA_ID_VARIANCE_SAMPLE_SELLER_FEE_DESC',
  NftsByMetadataIdVarianceSampleTokenIdAsc = 'NFTS_BY_METADATA_ID_VARIANCE_SAMPLE_TOKEN_ID_ASC',
  NftsByMetadataIdVarianceSampleTokenIdDesc = 'NFTS_BY_METADATA_ID_VARIANCE_SAMPLE_TOKEN_ID_DESC',
  NftsByMetadataIdVarianceSampleUpdatedAtAsc = 'NFTS_BY_METADATA_ID_VARIANCE_SAMPLE_UPDATED_AT_ASC',
  NftsByMetadataIdVarianceSampleUpdatedAtDesc = 'NFTS_BY_METADATA_ID_VARIANCE_SAMPLE_UPDATED_AT_DESC',
  NftsByMetadataIdVarianceSampleUpdatedHeightAsc = 'NFTS_BY_METADATA_ID_VARIANCE_SAMPLE_UPDATED_HEIGHT_ASC',
  NftsByMetadataIdVarianceSampleUpdatedHeightDesc = 'NFTS_BY_METADATA_ID_VARIANCE_SAMPLE_UPDATED_HEIGHT_DESC',
  NftsByMetadataIdVarianceSampleUriAsc = 'NFTS_BY_METADATA_ID_VARIANCE_SAMPLE_URI_ASC',
  NftsByMetadataIdVarianceSampleUriDesc = 'NFTS_BY_METADATA_ID_VARIANCE_SAMPLE_URI_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type NftMetadatum = Node & {
  __typename?: 'NftMetadatum';
  /** Reads and enables pagination through a set of `Account`. */
  accountsByNftMetadataIdAndMinterId: NftMetadatumAccountsByNftMetadataIdAndMinterIdManyToManyConnection;
  /** Reads and enables pagination through a set of `Account`. */
  accountsByNftMetadataIdAndOwnerId: NftMetadatumAccountsByNftMetadataIdAndOwnerIdManyToManyConnection;
  animationUrl?: Maybe<Scalars['String']>;
  attributes?: Maybe<Scalars['JSON']>;
  /** Reads and enables pagination through a set of `Collection`. */
  collectionsByNftMetadataIdAndCollectionId: NftMetadatumCollectionsByNftMetadataIdAndCollectionIdManyToManyConnection;
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  /** Reads and enables pagination through a set of `Nft`. */
  nftsByMetadataId: NftsConnection;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
};


export type NftMetadatumAccountsByNftMetadataIdAndMinterIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  distinct?: InputMaybe<Array<InputMaybe<Accounts_Distinct_Enum>>>;
  filter?: InputMaybe<AccountFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AccountsOrderBy>>;
};


export type NftMetadatumAccountsByNftMetadataIdAndOwnerIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  distinct?: InputMaybe<Array<InputMaybe<Accounts_Distinct_Enum>>>;
  filter?: InputMaybe<AccountFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AccountsOrderBy>>;
};


export type NftMetadatumCollectionsByNftMetadataIdAndCollectionIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  distinct?: InputMaybe<Array<InputMaybe<Collections_Distinct_Enum>>>;
  filter?: InputMaybe<CollectionFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<CollectionsOrderBy>>;
};


export type NftMetadatumNftsByMetadataIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  distinct?: InputMaybe<Array<InputMaybe<Nfts_Distinct_Enum>>>;
  filter?: InputMaybe<NftFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<NftsOrderBy>>;
};

/** A connection to a list of `Account` values, with data from `Nft`. */
export type NftMetadatumAccountsByNftMetadataIdAndMinterIdManyToManyConnection = {
  __typename?: 'NftMetadatumAccountsByNftMetadataIdAndMinterIdManyToManyConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<AccountAggregates>;
  /** A list of edges which contains the `Account`, info from the `Nft`, and the cursor to aid in pagination. */
  edges: Array<NftMetadatumAccountsByNftMetadataIdAndMinterIdManyToManyEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<AccountAggregates>>;
  /** A list of `Account` objects. */
  nodes: Array<Maybe<Account>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Account` you could get from the connection. */
  totalCount: Scalars['Int'];
};


/** A connection to a list of `Account` values, with data from `Nft`. */
export type NftMetadatumAccountsByNftMetadataIdAndMinterIdManyToManyConnectionGroupedAggregatesArgs = {
  groupBy: Array<AccountsGroupBy>;
  having?: InputMaybe<AccountsHavingInput>;
};

/** A `Account` edge in the connection, with data from `Nft`. */
export type NftMetadatumAccountsByNftMetadataIdAndMinterIdManyToManyEdge = {
  __typename?: 'NftMetadatumAccountsByNftMetadataIdAndMinterIdManyToManyEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** Reads and enables pagination through a set of `Nft`. */
  nftsMinted: NftsConnection;
  /** The `Account` at the end of the edge. */
  node?: Maybe<Account>;
};


/** A `Account` edge in the connection, with data from `Nft`. */
export type NftMetadatumAccountsByNftMetadataIdAndMinterIdManyToManyEdgeNftsMintedArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  distinct?: InputMaybe<Array<InputMaybe<Nfts_Distinct_Enum>>>;
  filter?: InputMaybe<NftFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<NftsOrderBy>>;
};

/** A connection to a list of `Account` values, with data from `Nft`. */
export type NftMetadatumAccountsByNftMetadataIdAndOwnerIdManyToManyConnection = {
  __typename?: 'NftMetadatumAccountsByNftMetadataIdAndOwnerIdManyToManyConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<AccountAggregates>;
  /** A list of edges which contains the `Account`, info from the `Nft`, and the cursor to aid in pagination. */
  edges: Array<NftMetadatumAccountsByNftMetadataIdAndOwnerIdManyToManyEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<AccountAggregates>>;
  /** A list of `Account` objects. */
  nodes: Array<Maybe<Account>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Account` you could get from the connection. */
  totalCount: Scalars['Int'];
};


/** A connection to a list of `Account` values, with data from `Nft`. */
export type NftMetadatumAccountsByNftMetadataIdAndOwnerIdManyToManyConnectionGroupedAggregatesArgs = {
  groupBy: Array<AccountsGroupBy>;
  having?: InputMaybe<AccountsHavingInput>;
};

/** A `Account` edge in the connection, with data from `Nft`. */
export type NftMetadatumAccountsByNftMetadataIdAndOwnerIdManyToManyEdge = {
  __typename?: 'NftMetadatumAccountsByNftMetadataIdAndOwnerIdManyToManyEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** Reads and enables pagination through a set of `Nft`. */
  nftsOwned: NftsConnection;
  /** The `Account` at the end of the edge. */
  node?: Maybe<Account>;
};


/** A `Account` edge in the connection, with data from `Nft`. */
export type NftMetadatumAccountsByNftMetadataIdAndOwnerIdManyToManyEdgeNftsOwnedArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  distinct?: InputMaybe<Array<InputMaybe<Nfts_Distinct_Enum>>>;
  filter?: InputMaybe<NftFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<NftsOrderBy>>;
};

export type NftMetadatumAggregates = {
  __typename?: 'NftMetadatumAggregates';
  /** Distinct count aggregates across the matching connection (ignoring before/after/first/last/offset) */
  distinctCount?: Maybe<NftMetadatumDistinctCountAggregates>;
  keys?: Maybe<Array<Scalars['String']>>;
};

/** A connection to a list of `Collection` values, with data from `Nft`. */
export type NftMetadatumCollectionsByNftMetadataIdAndCollectionIdManyToManyConnection = {
  __typename?: 'NftMetadatumCollectionsByNftMetadataIdAndCollectionIdManyToManyConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<CollectionAggregates>;
  /** A list of edges which contains the `Collection`, info from the `Nft`, and the cursor to aid in pagination. */
  edges: Array<NftMetadatumCollectionsByNftMetadataIdAndCollectionIdManyToManyEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<CollectionAggregates>>;
  /** A list of `Collection` objects. */
  nodes: Array<Maybe<Collection>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Collection` you could get from the connection. */
  totalCount: Scalars['Int'];
};


/** A connection to a list of `Collection` values, with data from `Nft`. */
export type NftMetadatumCollectionsByNftMetadataIdAndCollectionIdManyToManyConnectionGroupedAggregatesArgs = {
  groupBy: Array<CollectionsGroupBy>;
  having?: InputMaybe<CollectionsHavingInput>;
};

/** A `Collection` edge in the connection, with data from `Nft`. */
export type NftMetadatumCollectionsByNftMetadataIdAndCollectionIdManyToManyEdge = {
  __typename?: 'NftMetadatumCollectionsByNftMetadataIdAndCollectionIdManyToManyEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** Reads and enables pagination through a set of `Nft`. */
  nfts: NftsConnection;
  /** The `Collection` at the end of the edge. */
  node?: Maybe<Collection>;
};


/** A `Collection` edge in the connection, with data from `Nft`. */
export type NftMetadatumCollectionsByNftMetadataIdAndCollectionIdManyToManyEdgeNftsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  distinct?: InputMaybe<Array<InputMaybe<Nfts_Distinct_Enum>>>;
  filter?: InputMaybe<NftFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<NftsOrderBy>>;
};

export type NftMetadatumDistinctCountAggregates = {
  __typename?: 'NftMetadatumDistinctCountAggregates';
  /** Distinct count of animationUrl across the matching connection */
  animationUrl?: Maybe<Scalars['BigInt']>;
  /** Distinct count of attributes across the matching connection */
  attributes?: Maybe<Scalars['BigInt']>;
  /** Distinct count of description across the matching connection */
  description?: Maybe<Scalars['BigInt']>;
  /** Distinct count of id across the matching connection */
  id?: Maybe<Scalars['BigInt']>;
  /** Distinct count of image across the matching connection */
  image?: Maybe<Scalars['BigInt']>;
  /** Distinct count of name across the matching connection */
  name?: Maybe<Scalars['BigInt']>;
};

/** A filter to be used against `NftMetadatum` object types. All fields are combined with a logical ‘and.’ */
export type NftMetadatumFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<NftMetadatumFilter>>;
  /** Filter by the object’s `animationUrl` field. */
  animationUrl?: InputMaybe<StringFilter>;
  /** Filter by the object’s `attributes` field. */
  attributes?: InputMaybe<JsonFilter>;
  /** Filter by the object’s `description` field. */
  description?: InputMaybe<StringFilter>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<StringFilter>;
  /** Filter by the object’s `image` field. */
  image?: InputMaybe<StringFilter>;
  /** Filter by the object’s `name` field. */
  name?: InputMaybe<StringFilter>;
  /** Filter by the object’s `nftsByMetadataId` relation. */
  nftsByMetadataId?: InputMaybe<NftMetadatumToManyNftFilter>;
  /** Some related `nftsByMetadataId` exist. */
  nftsByMetadataIdExist?: InputMaybe<Scalars['Boolean']>;
  /** Negates the expression. */
  not?: InputMaybe<NftMetadatumFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<NftMetadatumFilter>>;
};

/** A filter to be used against many `Nft` object types. All fields are combined with a logical ‘and.’ */
export type NftMetadatumToManyNftFilter = {
  /** Aggregates across related `Nft` match the filter criteria. */
  aggregates?: InputMaybe<NftAggregatesFilter>;
  /** Every related `Nft` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<NftFilter>;
  /** No related `Nft` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<NftFilter>;
  /** Some related `Nft` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<NftFilter>;
};

export type NftMinAggregateFilter = {
  createdHeight?: InputMaybe<BigFloatFilter>;
  updatedHeight?: InputMaybe<BigFloatFilter>;
};

export type NftMinAggregates = {
  __typename?: 'NftMinAggregates';
  /** Minimum of createdHeight across the matching connection */
  createdHeight?: Maybe<Scalars['BigFloat']>;
  /** Minimum of updatedHeight across the matching connection */
  updatedHeight?: Maybe<Scalars['BigFloat']>;
};

export type NftStddevPopulationAggregateFilter = {
  createdHeight?: InputMaybe<BigFloatFilter>;
  updatedHeight?: InputMaybe<BigFloatFilter>;
};

export type NftStddevPopulationAggregates = {
  __typename?: 'NftStddevPopulationAggregates';
  /** Population standard deviation of createdHeight across the matching connection */
  createdHeight?: Maybe<Scalars['BigFloat']>;
  /** Population standard deviation of updatedHeight across the matching connection */
  updatedHeight?: Maybe<Scalars['BigFloat']>;
};

export type NftStddevSampleAggregateFilter = {
  createdHeight?: InputMaybe<BigFloatFilter>;
  updatedHeight?: InputMaybe<BigFloatFilter>;
};

export type NftStddevSampleAggregates = {
  __typename?: 'NftStddevSampleAggregates';
  /** Sample standard deviation of createdHeight across the matching connection */
  createdHeight?: Maybe<Scalars['BigFloat']>;
  /** Sample standard deviation of updatedHeight across the matching connection */
  updatedHeight?: Maybe<Scalars['BigFloat']>;
};

export type NftSumAggregateFilter = {
  createdHeight?: InputMaybe<BigFloatFilter>;
  updatedHeight?: InputMaybe<BigFloatFilter>;
};

export type NftSumAggregates = {
  __typename?: 'NftSumAggregates';
  /** Sum of createdHeight across the matching connection */
  createdHeight: Scalars['BigFloat'];
  /** Sum of updatedHeight across the matching connection */
  updatedHeight: Scalars['BigFloat'];
};

export type NftVariancePopulationAggregateFilter = {
  createdHeight?: InputMaybe<BigFloatFilter>;
  updatedHeight?: InputMaybe<BigFloatFilter>;
};

export type NftVariancePopulationAggregates = {
  __typename?: 'NftVariancePopulationAggregates';
  /** Population variance of createdHeight across the matching connection */
  createdHeight?: Maybe<Scalars['BigFloat']>;
  /** Population variance of updatedHeight across the matching connection */
  updatedHeight?: Maybe<Scalars['BigFloat']>;
};

export type NftVarianceSampleAggregateFilter = {
  createdHeight?: InputMaybe<BigFloatFilter>;
  updatedHeight?: InputMaybe<BigFloatFilter>;
};

export type NftVarianceSampleAggregates = {
  __typename?: 'NftVarianceSampleAggregates';
  /** Sample variance of createdHeight across the matching connection */
  createdHeight?: Maybe<Scalars['BigFloat']>;
  /** Sample variance of updatedHeight across the matching connection */
  updatedHeight?: Maybe<Scalars['BigFloat']>;
};

/** A connection to a list of `Nft` values. */
export type NftsConnection = {
  __typename?: 'NftsConnection';
  /** Aggregates across the matching connection (ignoring before/after/first/last/offset) */
  aggregates?: Maybe<NftAggregates>;
  /** A list of edges which contains the `Nft` and cursor to aid in pagination. */
  edges: Array<NftsEdge>;
  /** Grouped aggregates across the matching connection (ignoring before/after/first/last/offset) */
  groupedAggregates?: Maybe<Array<NftAggregates>>;
  /** A list of `Nft` objects. */
  nodes: Array<Maybe<Nft>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Nft` you could get from the connection. */
  totalCount: Scalars['Int'];
};


/** A connection to a list of `Nft` values. */
export type NftsConnectionGroupedAggregatesArgs = {
  groupBy: Array<NftsGroupBy>;
  having?: InputMaybe<NftsHavingInput>;
};

/** A `Nft` edge in the connection. */
export type NftsEdge = {
  __typename?: 'NftsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Nft` at the end of the edge. */
  node?: Maybe<Nft>;
};

/** Grouping methods for `Nft` for usage during aggregation. */
export enum NftsGroupBy {
  CollectionId = 'COLLECTION_ID',
  CreatedAt = 'CREATED_AT',
  CreatedAtTruncatedToDay = 'CREATED_AT_TRUNCATED_TO_DAY',
  CreatedAtTruncatedToHour = 'CREATED_AT_TRUNCATED_TO_HOUR',
  CreatedHeight = 'CREATED_HEIGHT',
  MetadataId = 'METADATA_ID',
  MinterId = 'MINTER_ID',
  OwnerId = 'OWNER_ID',
  PaymentAddress = 'PAYMENT_ADDRESS',
  SellerFee = 'SELLER_FEE',
  TokenId = 'TOKEN_ID',
  UpdatedAt = 'UPDATED_AT',
  UpdatedAtTruncatedToDay = 'UPDATED_AT_TRUNCATED_TO_DAY',
  UpdatedAtTruncatedToHour = 'UPDATED_AT_TRUNCATED_TO_HOUR',
  UpdatedHeight = 'UPDATED_HEIGHT',
  Uri = 'URI'
}

export type NftsHavingAverageInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  createdHeight?: InputMaybe<HavingBigfloatFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
  updatedHeight?: InputMaybe<HavingBigfloatFilter>;
};

export type NftsHavingDistinctCountInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  createdHeight?: InputMaybe<HavingBigfloatFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
  updatedHeight?: InputMaybe<HavingBigfloatFilter>;
};

/** Conditions for `Nft` aggregates. */
export type NftsHavingInput = {
  AND?: InputMaybe<Array<NftsHavingInput>>;
  OR?: InputMaybe<Array<NftsHavingInput>>;
  average?: InputMaybe<NftsHavingAverageInput>;
  distinctCount?: InputMaybe<NftsHavingDistinctCountInput>;
  max?: InputMaybe<NftsHavingMaxInput>;
  min?: InputMaybe<NftsHavingMinInput>;
  stddevPopulation?: InputMaybe<NftsHavingStddevPopulationInput>;
  stddevSample?: InputMaybe<NftsHavingStddevSampleInput>;
  sum?: InputMaybe<NftsHavingSumInput>;
  variancePopulation?: InputMaybe<NftsHavingVariancePopulationInput>;
  varianceSample?: InputMaybe<NftsHavingVarianceSampleInput>;
};

export type NftsHavingMaxInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  createdHeight?: InputMaybe<HavingBigfloatFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
  updatedHeight?: InputMaybe<HavingBigfloatFilter>;
};

export type NftsHavingMinInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  createdHeight?: InputMaybe<HavingBigfloatFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
  updatedHeight?: InputMaybe<HavingBigfloatFilter>;
};

export type NftsHavingStddevPopulationInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  createdHeight?: InputMaybe<HavingBigfloatFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
  updatedHeight?: InputMaybe<HavingBigfloatFilter>;
};

export type NftsHavingStddevSampleInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  createdHeight?: InputMaybe<HavingBigfloatFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
  updatedHeight?: InputMaybe<HavingBigfloatFilter>;
};

export type NftsHavingSumInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  createdHeight?: InputMaybe<HavingBigfloatFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
  updatedHeight?: InputMaybe<HavingBigfloatFilter>;
};

export type NftsHavingVariancePopulationInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  createdHeight?: InputMaybe<HavingBigfloatFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
  updatedHeight?: InputMaybe<HavingBigfloatFilter>;
};

export type NftsHavingVarianceSampleInput = {
  createdAt?: InputMaybe<HavingDatetimeFilter>;
  createdHeight?: InputMaybe<HavingBigfloatFilter>;
  updatedAt?: InputMaybe<HavingDatetimeFilter>;
  updatedHeight?: InputMaybe<HavingBigfloatFilter>;
};

/** Methods to use when ordering `Nft`. */
export enum NftsOrderBy {
  CollectionIdAsc = 'COLLECTION_ID_ASC',
  CollectionIdDesc = 'COLLECTION_ID_DESC',
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  CreatedHeightAsc = 'CREATED_HEIGHT_ASC',
  CreatedHeightDesc = 'CREATED_HEIGHT_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  MetadataIdAsc = 'METADATA_ID_ASC',
  MetadataIdDesc = 'METADATA_ID_DESC',
  MinterIdAsc = 'MINTER_ID_ASC',
  MinterIdDesc = 'MINTER_ID_DESC',
  Natural = 'NATURAL',
  OwnerIdAsc = 'OWNER_ID_ASC',
  OwnerIdDesc = 'OWNER_ID_DESC',
  PaymentAddressAsc = 'PAYMENT_ADDRESS_ASC',
  PaymentAddressDesc = 'PAYMENT_ADDRESS_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  SellerFeeAsc = 'SELLER_FEE_ASC',
  SellerFeeDesc = 'SELLER_FEE_DESC',
  TokenIdAsc = 'TOKEN_ID_ASC',
  TokenIdDesc = 'TOKEN_ID_DESC',
  UpdatedAtAsc = 'UPDATED_AT_ASC',
  UpdatedAtDesc = 'UPDATED_AT_DESC',
  UpdatedHeightAsc = 'UPDATED_HEIGHT_ASC',
  UpdatedHeightDesc = 'UPDATED_HEIGHT_DESC',
  UriAsc = 'URI_ASC',
  UriDesc = 'URI_DESC'
}

/** An object with a globally unique `ID`. */
export type Node = {
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['Cursor']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['Cursor']>;
};

/** The root query type which gives access points into the data universe. */
export type Query = Node & {
  __typename?: 'Query';
  _metadata?: Maybe<_Metadata>;
  account?: Maybe<Account>;
  /** Reads a single `Account` using its globally unique `ID`. */
  accountByNodeId?: Maybe<Account>;
  /** Reads and enables pagination through a set of `Account`. */
  accounts?: Maybe<AccountsConnection>;
  collection?: Maybe<Collection>;
  /** Reads a single `Collection` using its globally unique `ID`. */
  collectionByNodeId?: Maybe<Collection>;
  /** Reads and enables pagination through a set of `Collection`. */
  collections?: Maybe<CollectionsConnection>;
  fantoken?: Maybe<Fantoken>;
  /** Reads a single `Fantoken` using its globally unique `ID`. */
  fantokenByNodeId?: Maybe<Fantoken>;
  fantokenFavorite?: Maybe<FantokenFavorite>;
  /** Reads a single `FantokenFavorite` using its globally unique `ID`. */
  fantokenFavoriteByNodeId?: Maybe<FantokenFavorite>;
  /** Reads and enables pagination through a set of `FantokenFavorite`. */
  fantokenFavorites?: Maybe<FantokenFavoritesConnection>;
  /** Reads and enables pagination through a set of `FantokenMetadatum`. */
  fantokenMetadata?: Maybe<FantokenMetadataConnection>;
  fantokenMetadatum?: Maybe<FantokenMetadatum>;
  /** Reads a single `FantokenMetadatum` using its globally unique `ID`. */
  fantokenMetadatumByNodeId?: Maybe<FantokenMetadatum>;
  /** Reads and enables pagination through a set of `Fantoken`. */
  fantokens?: Maybe<FantokensConnection>;
  /** Reads and enables pagination through a set of `Launchparty`. */
  launchparties?: Maybe<LaunchpartiesConnection>;
  launchparty?: Maybe<Launchparty>;
  /** Reads a single `Launchparty` using its globally unique `ID`. */
  launchpartyByNodeId?: Maybe<Launchparty>;
  nft?: Maybe<Nft>;
  /** Reads a single `Nft` using its globally unique `ID`. */
  nftByNodeId?: Maybe<Nft>;
  /** Reads and enables pagination through a set of `NftMetadatum`. */
  nftMetadata?: Maybe<NftMetadataConnection>;
  nftMetadatum?: Maybe<NftMetadatum>;
  /** Reads a single `NftMetadatum` using its globally unique `ID`. */
  nftMetadatumByNodeId?: Maybe<NftMetadatum>;
  /** Reads and enables pagination through a set of `Nft`. */
  nfts?: Maybe<NftsConnection>;
  /** Fetches an object given its globally unique `ID`. */
  node?: Maybe<Node>;
  /** The root query type must be a `Node` to work well with Relay 1 mutations. This just resolves to `query`. */
  nodeId: Scalars['ID'];
  /**
   * Exposes the root query type nested one level down. This is helpful for Relay 1
   * which can only query top level fields if they are in a particular form.
   */
  query: Query;
};


/** The root query type which gives access points into the data universe. */
export type Query_MetadataArgs = {
  chainId?: InputMaybe<Scalars['String']>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAccountArgs = {
  id: Scalars['String'];
};


/** The root query type which gives access points into the data universe. */
export type QueryAccountByNodeIdArgs = {
  distinct?: InputMaybe<Array<InputMaybe<Accounts_Distinct_Enum>>>;
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryAccountsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  distinct?: InputMaybe<Array<InputMaybe<Accounts_Distinct_Enum>>>;
  filter?: InputMaybe<AccountFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AccountsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryCollectionArgs = {
  id: Scalars['String'];
};


/** The root query type which gives access points into the data universe. */
export type QueryCollectionByNodeIdArgs = {
  distinct?: InputMaybe<Array<InputMaybe<Collections_Distinct_Enum>>>;
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryCollectionsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  distinct?: InputMaybe<Array<InputMaybe<Collections_Distinct_Enum>>>;
  filter?: InputMaybe<CollectionFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<CollectionsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryFantokenArgs = {
  id: Scalars['String'];
};


/** The root query type which gives access points into the data universe. */
export type QueryFantokenByNodeIdArgs = {
  distinct?: InputMaybe<Array<InputMaybe<Fantokens_Distinct_Enum>>>;
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryFantokenFavoriteArgs = {
  id: Scalars['String'];
};


/** The root query type which gives access points into the data universe. */
export type QueryFantokenFavoriteByNodeIdArgs = {
  distinct?: InputMaybe<Array<InputMaybe<Fantoken_Favorites_Distinct_Enum>>>;
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryFantokenFavoritesArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  distinct?: InputMaybe<Array<InputMaybe<Fantoken_Favorites_Distinct_Enum>>>;
  filter?: InputMaybe<FantokenFavoriteFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<FantokenFavoritesOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryFantokenMetadataArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  distinct?: InputMaybe<Array<InputMaybe<Fantoken_Metadata_Distinct_Enum>>>;
  filter?: InputMaybe<FantokenMetadatumFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<FantokenMetadataOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryFantokenMetadatumArgs = {
  id: Scalars['String'];
};


/** The root query type which gives access points into the data universe. */
export type QueryFantokenMetadatumByNodeIdArgs = {
  distinct?: InputMaybe<Array<InputMaybe<Fantoken_Metadata_Distinct_Enum>>>;
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryFantokensArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  distinct?: InputMaybe<Array<InputMaybe<Fantokens_Distinct_Enum>>>;
  filter?: InputMaybe<FantokenFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<FantokensOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryLaunchpartiesArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  distinct?: InputMaybe<Array<InputMaybe<Launchparties_Distinct_Enum>>>;
  filter?: InputMaybe<LaunchpartyFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<LaunchpartiesOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryLaunchpartyArgs = {
  id: Scalars['String'];
};


/** The root query type which gives access points into the data universe. */
export type QueryLaunchpartyByNodeIdArgs = {
  distinct?: InputMaybe<Array<InputMaybe<Launchparties_Distinct_Enum>>>;
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryNftArgs = {
  id: Scalars['String'];
};


/** The root query type which gives access points into the data universe. */
export type QueryNftByNodeIdArgs = {
  distinct?: InputMaybe<Array<InputMaybe<Nfts_Distinct_Enum>>>;
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryNftMetadataArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  distinct?: InputMaybe<Array<InputMaybe<Nft_Metadata_Distinct_Enum>>>;
  filter?: InputMaybe<NftMetadatumFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<NftMetadataOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryNftMetadatumArgs = {
  id: Scalars['String'];
};


/** The root query type which gives access points into the data universe. */
export type QueryNftMetadatumByNodeIdArgs = {
  distinct?: InputMaybe<Array<InputMaybe<Nft_Metadata_Distinct_Enum>>>;
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryNftsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  distinct?: InputMaybe<Array<InputMaybe<Nfts_Distinct_Enum>>>;
  filter?: InputMaybe<NftFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<NftsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryNodeArgs = {
  nodeId: Scalars['ID'];
};

/** A filter to be used against String fields. All fields are combined with a logical ‘and.’ */
export type StringFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<Scalars['String']>;
  /** Not equal to the specified value, treating null like an ordinary value (case-insensitive). */
  distinctFromInsensitive?: InputMaybe<Scalars['String']>;
  /** Ends with the specified string (case-sensitive). */
  endsWith?: InputMaybe<Scalars['String']>;
  /** Ends with the specified string (case-insensitive). */
  endsWithInsensitive?: InputMaybe<Scalars['String']>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<Scalars['String']>;
  /** Equal to the specified value (case-insensitive). */
  equalToInsensitive?: InputMaybe<Scalars['String']>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<Scalars['String']>;
  /** Greater than the specified value (case-insensitive). */
  greaterThanInsensitive?: InputMaybe<Scalars['String']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars['String']>;
  /** Greater than or equal to the specified value (case-insensitive). */
  greaterThanOrEqualToInsensitive?: InputMaybe<Scalars['String']>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<Scalars['String']>>;
  /** Included in the specified list (case-insensitive). */
  inInsensitive?: InputMaybe<Array<Scalars['String']>>;
  /** Contains the specified string (case-sensitive). */
  includes?: InputMaybe<Scalars['String']>;
  /** Contains the specified string (case-insensitive). */
  includesInsensitive?: InputMaybe<Scalars['String']>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<Scalars['String']>;
  /** Less than the specified value (case-insensitive). */
  lessThanInsensitive?: InputMaybe<Scalars['String']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars['String']>;
  /** Less than or equal to the specified value (case-insensitive). */
  lessThanOrEqualToInsensitive?: InputMaybe<Scalars['String']>;
  /** Matches the specified pattern (case-sensitive). An underscore (_) matches any single character; a percent sign (%) matches any sequence of zero or more characters. */
  like?: InputMaybe<Scalars['String']>;
  /** Matches the specified pattern (case-insensitive). An underscore (_) matches any single character; a percent sign (%) matches any sequence of zero or more characters. */
  likeInsensitive?: InputMaybe<Scalars['String']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<Scalars['String']>;
  /** Equal to the specified value, treating null like an ordinary value (case-insensitive). */
  notDistinctFromInsensitive?: InputMaybe<Scalars['String']>;
  /** Does not end with the specified string (case-sensitive). */
  notEndsWith?: InputMaybe<Scalars['String']>;
  /** Does not end with the specified string (case-insensitive). */
  notEndsWithInsensitive?: InputMaybe<Scalars['String']>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<Scalars['String']>;
  /** Not equal to the specified value (case-insensitive). */
  notEqualToInsensitive?: InputMaybe<Scalars['String']>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<Scalars['String']>>;
  /** Not included in the specified list (case-insensitive). */
  notInInsensitive?: InputMaybe<Array<Scalars['String']>>;
  /** Does not contain the specified string (case-sensitive). */
  notIncludes?: InputMaybe<Scalars['String']>;
  /** Does not contain the specified string (case-insensitive). */
  notIncludesInsensitive?: InputMaybe<Scalars['String']>;
  /** Does not match the specified pattern (case-sensitive). An underscore (_) matches any single character; a percent sign (%) matches any sequence of zero or more characters. */
  notLike?: InputMaybe<Scalars['String']>;
  /** Does not match the specified pattern (case-insensitive). An underscore (_) matches any single character; a percent sign (%) matches any sequence of zero or more characters. */
  notLikeInsensitive?: InputMaybe<Scalars['String']>;
  /** Does not start with the specified string (case-sensitive). */
  notStartsWith?: InputMaybe<Scalars['String']>;
  /** Does not start with the specified string (case-insensitive). */
  notStartsWithInsensitive?: InputMaybe<Scalars['String']>;
  /** Starts with the specified string (case-sensitive). */
  startsWith?: InputMaybe<Scalars['String']>;
  /** Starts with the specified string (case-insensitive). */
  startsWithInsensitive?: InputMaybe<Scalars['String']>;
};

export type TableEstimate = {
  __typename?: 'TableEstimate';
  estimate?: Maybe<Scalars['Int']>;
  table?: Maybe<Scalars['String']>;
};

export type _Metadata = {
  __typename?: '_Metadata';
  chain?: Maybe<Scalars['String']>;
  dynamicDatasources?: Maybe<Scalars['String']>;
  evmChainId?: Maybe<Scalars['String']>;
  genesisHash?: Maybe<Scalars['String']>;
  indexerHealthy?: Maybe<Scalars['Boolean']>;
  indexerNodeVersion?: Maybe<Scalars['String']>;
  lastProcessedHeight?: Maybe<Scalars['Int']>;
  lastProcessedTimestamp?: Maybe<Scalars['Date']>;
  queryNodeVersion?: Maybe<Scalars['String']>;
  rowCountEstimate?: Maybe<Array<Maybe<TableEstimate>>>;
  specName?: Maybe<Scalars['String']>;
  startHeight?: Maybe<Scalars['Int']>;
  targetHeight?: Maybe<Scalars['Int']>;
};

export enum Accounts_Distinct_Enum {
  ChainId = 'CHAIN_ID',
  Id = 'ID',
  Verified = 'VERIFIED'
}

export enum Collections_Distinct_Enum {
  AdminId = 'ADMIN_ID',
  CodeId = 'CODE_ID',
  Cover = 'COVER',
  CreatedAt = 'CREATED_AT',
  CreatedHeight = 'CREATED_HEIGHT',
  CreatorId = 'CREATOR_ID',
  Description = 'DESCRIPTION',
  ExternalUrls = 'EXTERNAL_URLS',
  Id = 'ID',
  Image = 'IMAGE',
  Label = 'LABEL',
  Name = 'NAME',
  Symbol = 'SYMBOL',
  UpdatedAt = 'UPDATED_AT',
  UpdatedHeight = 'UPDATED_HEIGHT',
  Uri = 'URI',
  Verified = 'VERIFIED'
}

export enum Fantoken_Favorites_Distinct_Enum {
  AccountId = 'ACCOUNT_ID',
  FantokenId = 'FANTOKEN_ID',
  Id = 'ID'
}

export enum Fantoken_Metadata_Distinct_Enum {
  Biography = 'BIOGRAPHY',
  Id = 'ID',
  Image = 'IMAGE',
  Links = 'LINKS',
  ProjectInfo = 'PROJECT_INFO'
}

export enum Fantokens_Distinct_Enum {
  AuthorityId = 'AUTHORITY_ID',
  CreatedAt = 'CREATED_AT',
  CreatedHeight = 'CREATED_HEIGHT',
  CreatorId = 'CREATOR_ID',
  Id = 'ID',
  MaxSupply = 'MAX_SUPPLY',
  MetadataId = 'METADATA_ID',
  MinterId = 'MINTER_ID',
  Name = 'NAME',
  Supply = 'SUPPLY',
  Symbol = 'SYMBOL',
  UpdatedAt = 'UPDATED_AT',
  UpdatedHeight = 'UPDATED_HEIGHT',
  Uri = 'URI',
  Verified = 'VERIFIED'
}

export enum Launchparties_Distinct_Enum {
  CollectionId = 'COLLECTION_ID',
  CreatedAt = 'CREATED_AT',
  CreatedHeight = 'CREATED_HEIGHT',
  CreatorId = 'CREATOR_ID',
  Id = 'ID',
  MaxEditions = 'MAX_EDITIONS',
  Name = 'NAME',
  PaymentAddress = 'PAYMENT_ADDRESS',
  Price = 'PRICE',
  SellerFeeBps = 'SELLER_FEE_BPS',
  StartTime = 'START_TIME',
  Symbol = 'SYMBOL',
  UpdatedAt = 'UPDATED_AT',
  UpdatedHeight = 'UPDATED_HEIGHT'
}

export enum Nft_Metadata_Distinct_Enum {
  AnimationUrl = 'ANIMATION_URL',
  Attributes = 'ATTRIBUTES',
  Description = 'DESCRIPTION',
  Id = 'ID',
  Image = 'IMAGE',
  Name = 'NAME'
}

export enum Nfts_Distinct_Enum {
  CollectionId = 'COLLECTION_ID',
  CreatedAt = 'CREATED_AT',
  CreatedHeight = 'CREATED_HEIGHT',
  Id = 'ID',
  MetadataId = 'METADATA_ID',
  MinterId = 'MINTER_ID',
  OwnerId = 'OWNER_ID',
  PaymentAddress = 'PAYMENT_ADDRESS',
  SellerFee = 'SELLER_FEE',
  TokenId = 'TOKEN_ID',
  UpdatedAt = 'UPDATED_AT',
  UpdatedHeight = 'UPDATED_HEIGHT',
  Uri = 'URI'
}

export type GetFantokensQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']>;
  filter?: InputMaybe<FantokenFilter>;
}>;


export type GetFantokensQuery = { __typename?: 'Query', fantokens?: { __typename?: 'FantokensConnection', edges: Array<{ __typename?: 'FantokensEdge', cursor?: any | null, node?: { __typename?: 'Fantoken', id: string, symbol: string, name: string, supply: any, maxSupply: any, metadata?: { __typename?: 'FantokenMetadatum', image?: string | null } | null } | null }> } | null };

export type GetFantokenQueryVariables = Exact<{
  denom: Scalars['String'];
}>;


export type GetFantokenQuery = { __typename?: 'Query', fantoken?: { __typename?: 'Fantoken', id: string, symbol: string, name: string, supply: any, maxSupply: any, authorityId?: string | null, minterId?: string | null, creatorId: string, uri?: string | null, updatedHeight?: any | null, metadata?: { __typename?: 'FantokenMetadatum', image?: string | null, biography?: string | null, projectInfo?: string | null, links?: any | null } | null } | null };

export type GetCollectionsQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']>;
}>;


export type GetCollectionsQuery = { __typename?: 'Query', collections?: { __typename?: 'CollectionsConnection', totalCount: number, edges: Array<{ __typename?: 'CollectionsEdge', cursor?: any | null, node?: { __typename?: 'Collection', id: string, name: string, image?: string | null, verified: boolean } | null }> } | null };

export type GetVerifiedCollectionsQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']>;
}>;


export type GetVerifiedCollectionsQuery = { __typename?: 'Query', collections?: { __typename?: 'CollectionsConnection', totalCount: number, edges: Array<{ __typename?: 'CollectionsEdge', cursor?: any | null, node?: { __typename?: 'Collection', id: string, name: string, image?: string | null, verified: boolean } | null }> } | null };

export type GetUnverifiedCollectionsQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']>;
}>;


export type GetUnverifiedCollectionsQuery = { __typename?: 'Query', collections?: { __typename?: 'CollectionsConnection', totalCount: number, edges: Array<{ __typename?: 'CollectionsEdge', cursor?: any | null, node?: { __typename?: 'Collection', id: string, name: string, image?: string | null, verified: boolean } | null }> } | null };

export type GetCollectionsByUserQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']>;
  creator: Scalars['String'];
}>;


export type GetCollectionsByUserQuery = { __typename?: 'Query', collections?: { __typename?: 'CollectionsConnection', totalCount: number, edges: Array<{ __typename?: 'CollectionsEdge', cursor?: any | null, node?: { __typename?: 'Collection', id: string, name: string, image?: string | null, verified: boolean } | null }> } | null };

export type GetCollectionQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetCollectionQuery = { __typename?: 'Query', collection?: { __typename?: 'Collection', id: string, image?: string | null, cover?: string | null, symbol: string, name: string, description?: string | null, creatorId: string, adminId?: string | null, verified: boolean, nfts: { __typename?: 'NftsConnection', totalCount: number, edges: Array<{ __typename?: 'NftsEdge', node?: { __typename?: 'Nft', id: string, tokenId: string, collectionId: string, metadata?: { __typename?: 'NftMetadatum', name?: string | null, image?: string | null } | null } | null }> } } | null };

export type GetNftQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetNftQuery = { __typename?: 'Query', nft?: { __typename?: 'Nft', tokenId: string, collectionId: string, minterId: string, ownerId: string, sellerFee?: string | null, paymentAddress?: string | null, metadata?: { __typename?: 'NftMetadatum', name?: string | null, description?: string | null, image?: string | null, attributes?: any | null } | null, collection?: { __typename?: 'Collection', id: string, name: string, image?: string | null, creatorId: string, nfts: { __typename?: 'NftsConnection', totalCount: number, edges: Array<{ __typename?: 'NftsEdge', node?: { __typename?: 'Nft', id: string, tokenId: string, collectionId: string, metadata?: { __typename?: 'NftMetadatum', name?: string | null, image?: string | null } | null } | null }> } } | null } | null };

export type GetAccountQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetAccountQuery = { __typename?: 'Query', account?: { __typename?: 'Account', id: string, nftsOwned: { __typename?: 'NftsConnection', totalCount: number }, nftsMinted: { __typename?: 'NftsConnection', totalCount: number } } | null };

export type GetAccountNftOwnedQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetAccountNftOwnedQuery = { __typename?: 'Query', account?: { __typename?: 'Account', id: string, nftsOwned: { __typename?: 'NftsConnection', totalCount: number, edges: Array<{ __typename?: 'NftsEdge', node?: { __typename?: 'Nft', id: string, tokenId: string, collectionId: string, metadata?: { __typename?: 'NftMetadatum', name?: string | null, image?: string | null } | null } | null }> } } | null };

export type GetAccountNftMintedQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetAccountNftMintedQuery = { __typename?: 'Query', account?: { __typename?: 'Account', id: string, nftsMinted: { __typename?: 'NftsConnection', totalCount: number, edges: Array<{ __typename?: 'NftsEdge', node?: { __typename?: 'Nft', id: string, tokenId: string, collectionId: string, metadata?: { __typename?: 'NftMetadatum', name?: string | null, image?: string | null } | null } | null }> } } | null };

export type LaunchpartyByCollectionQueryVariables = Exact<{
  address: Scalars['String'];
}>;


export type LaunchpartyByCollectionQuery = { __typename?: 'Query', launchparties?: { __typename?: 'LaunchpartiesConnection', totalCount: number, edges: Array<{ __typename?: 'LaunchpartiesEdge', cursor?: any | null, node?: { __typename?: 'Launchparty', id: string, name: string, symbol: string, maxEditions: any, startTime: any, price: any, paymentAddress?: string | null, sellerFeeBps?: any | null, collection?: { __typename?: 'Collection', id: string, verified: boolean } | null, creator?: { __typename?: 'Account', id: string, verified: boolean } | null } | null }> } | null };


export const GetFantokensDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetFantokens"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"FantokenFilter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fantokens"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"EnumValue","value":"CREATED_HEIGHT_DESC"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"symbol"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"supply"}},{"kind":"Field","name":{"kind":"Name","value":"maxSupply"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetFantokensQuery, GetFantokensQueryVariables>;
export const GetFantokenDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetFantoken"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"denom"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fantoken"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"denom"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"symbol"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"supply"}},{"kind":"Field","name":{"kind":"Name","value":"maxSupply"}},{"kind":"Field","name":{"kind":"Name","value":"authorityId"}},{"kind":"Field","name":{"kind":"Name","value":"minterId"}},{"kind":"Field","name":{"kind":"Name","value":"creatorId"}},{"kind":"Field","name":{"kind":"Name","value":"uri"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"biography"}},{"kind":"Field","name":{"kind":"Name","value":"projectInfo"}},{"kind":"Field","name":{"kind":"Name","value":"links"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedHeight"}}]}}]}}]} as unknown as DocumentNode<GetFantokenQuery, GetFantokenQueryVariables>;
export const GetCollectionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCollections"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"collections"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"EnumValue","value":"CREATED_AT_DESC"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"verified"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetCollectionsQuery, GetCollectionsQueryVariables>;
export const GetVerifiedCollectionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetVerifiedCollections"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"collections"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"EnumValue","value":"CREATED_AT_DESC"}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"verified"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"equalTo"},"value":{"kind":"BooleanValue","value":true}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"verified"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetVerifiedCollectionsQuery, GetVerifiedCollectionsQueryVariables>;
export const GetUnverifiedCollectionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUnverifiedCollections"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"collections"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"EnumValue","value":"CREATED_AT_DESC"}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"verified"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"equalTo"},"value":{"kind":"BooleanValue","value":false}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"verified"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetUnverifiedCollectionsQuery, GetUnverifiedCollectionsQueryVariables>;
export const GetCollectionsByUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCollectionsByUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"creator"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"collections"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"EnumValue","value":"NAME_ASC"}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"creatorId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"equalTo"},"value":{"kind":"Variable","name":{"kind":"Name","value":"creator"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"verified"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetCollectionsByUserQuery, GetCollectionsByUserQueryVariables>;
export const GetCollectionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCollection"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"collection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"cover"}},{"kind":"Field","name":{"kind":"Name","value":"symbol"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"creatorId"}},{"kind":"Field","name":{"kind":"Name","value":"adminId"}},{"kind":"Field","name":{"kind":"Name","value":"verified"}},{"kind":"Field","name":{"kind":"Name","value":"nfts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"100"}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"EnumValue","value":"CREATED_AT_DESC"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"tokenId"}},{"kind":"Field","name":{"kind":"Name","value":"collectionId"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetCollectionQuery, GetCollectionQueryVariables>;
export const GetNftDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetNft"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nft"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tokenId"}},{"kind":"Field","name":{"kind":"Name","value":"collectionId"}},{"kind":"Field","name":{"kind":"Name","value":"minterId"}},{"kind":"Field","name":{"kind":"Name","value":"ownerId"}},{"kind":"Field","name":{"kind":"Name","value":"sellerFee"}},{"kind":"Field","name":{"kind":"Name","value":"paymentAddress"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"}}]}},{"kind":"Field","name":{"kind":"Name","value":"collection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"creatorId"}},{"kind":"Field","name":{"kind":"Name","value":"nfts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"6"}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"EnumValue","value":"CREATED_AT_DESC"}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"notEqualTo"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"tokenId"}},{"kind":"Field","name":{"kind":"Name","value":"collectionId"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetNftQuery, GetNftQueryVariables>;
export const GetAccountDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAccount"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"account"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"nftsOwned"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"nftsMinted"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}}]}}]} as unknown as DocumentNode<GetAccountQuery, GetAccountQueryVariables>;
export const GetAccountNftOwnedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAccountNftOwned"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"account"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"nftsOwned"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"100"}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"EnumValue","value":"CREATED_AT_DESC"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"tokenId"}},{"kind":"Field","name":{"kind":"Name","value":"collectionId"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetAccountNftOwnedQuery, GetAccountNftOwnedQueryVariables>;
export const GetAccountNftMintedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAccountNftMinted"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"account"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"nftsMinted"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"100"}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"EnumValue","value":"CREATED_AT_DESC"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"tokenId"}},{"kind":"Field","name":{"kind":"Name","value":"collectionId"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetAccountNftMintedQuery, GetAccountNftMintedQueryVariables>;
export const LaunchpartyByCollectionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"LaunchpartyByCollection"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"address"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"launchparties"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"collectionId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"equalTo"},"value":{"kind":"Variable","name":{"kind":"Name","value":"address"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"collection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"verified"}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"symbol"}},{"kind":"Field","name":{"kind":"Name","value":"maxEditions"}},{"kind":"Field","name":{"kind":"Name","value":"startTime"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"paymentAddress"}},{"kind":"Field","name":{"kind":"Name","value":"sellerFeeBps"}},{"kind":"Field","name":{"kind":"Name","value":"creator"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"verified"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<LaunchpartyByCollectionQuery, LaunchpartyByCollectionQueryVariables>;