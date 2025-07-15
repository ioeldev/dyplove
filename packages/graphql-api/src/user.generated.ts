import * as Types from './types.generated';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type UserQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type UserQuery = { __typename?: 'Query', user?: { __typename?: 'User', id: string, name: string, age: number } | null };

export type AuthInfoQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type AuthInfoQuery = { __typename?: 'Query', authInfo?: { __typename?: 'AuthInfo', emailVerifRequired: boolean } | null };


export const UserDocument = gql`
    query User {
  user {
    id
    name
    age
  }
}
    `;

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserQuery(baseOptions?: Apollo.QueryHookOptions<UserQuery, UserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserQuery, UserQueryVariables>(UserDocument, options);
      }
export function useUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserQuery, UserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserQuery, UserQueryVariables>(UserDocument, options);
        }
export function useUserSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<UserQuery, UserQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<UserQuery, UserQueryVariables>(UserDocument, options);
        }
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserSuspenseQueryHookResult = ReturnType<typeof useUserSuspenseQuery>;
export type UserQueryResult = Apollo.QueryResult<UserQuery, UserQueryVariables>;
export const AuthInfoDocument = gql`
    query AuthInfo {
  authInfo {
    emailVerifRequired
  }
}
    `;

/**
 * __useAuthInfoQuery__
 *
 * To run a query within a React component, call `useAuthInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useAuthInfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAuthInfoQuery({
 *   variables: {
 *   },
 * });
 */
export function useAuthInfoQuery(baseOptions?: Apollo.QueryHookOptions<AuthInfoQuery, AuthInfoQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AuthInfoQuery, AuthInfoQueryVariables>(AuthInfoDocument, options);
      }
export function useAuthInfoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AuthInfoQuery, AuthInfoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AuthInfoQuery, AuthInfoQueryVariables>(AuthInfoDocument, options);
        }
export function useAuthInfoSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<AuthInfoQuery, AuthInfoQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<AuthInfoQuery, AuthInfoQueryVariables>(AuthInfoDocument, options);
        }
export type AuthInfoQueryHookResult = ReturnType<typeof useAuthInfoQuery>;
export type AuthInfoLazyQueryHookResult = ReturnType<typeof useAuthInfoLazyQuery>;
export type AuthInfoSuspenseQueryHookResult = ReturnType<typeof useAuthInfoSuspenseQuery>;
export type AuthInfoQueryResult = Apollo.QueryResult<AuthInfoQuery, AuthInfoQueryVariables>;