export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  JSON: { input: any; output: any; }
};

export type AuthInfo = {
  __typename?: 'AuthInfo';
  emailVerifRequired: Scalars['Boolean']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  _dummy?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  _dummy?: Maybe<Scalars['String']['output']>;
  authInfo?: Maybe<AuthInfo>;
  user?: Maybe<User>;
};

export type User = {
  __typename?: 'User';
  age: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};
