import {
	ApolloClient,
	ApolloLink,
	HttpLink,
	InMemoryCache,
	Observable,
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import Storage from 'expo-sqlite/kv-store';

const TOKEN_EXPIRED_CODE = 'TOKEN_EXPIRED';

const getAccessToken = () => {
	return Storage.getItemSync('accessToken');
};

const getRefreshToken = () => {
	return '456';
};

let isRefreshing = false;
let refreshPromise: Promise<void> = Promise.resolve();

const getNewToken = async () => {
	isRefreshing = true;
	try {
		const refreshToken = getRefreshToken();
		// const result = await apolloClient.mutate<RefreshTokenMutation, RefreshTokenMutationVariables>({
		//     mutation: RefreshTokenDocument,
		//     variables: {
		//         refreshToken: refreshToken ?? "",
		//     },
		// });
		// const newToken = result.data?.refreshToken;
		if (refreshToken) {
			// await setItemInStorage(STORAGE_KEYS.TOKEN, newToken.access_token);
			// await setItemInStorage(STORAGE_KEYS.REFRESH_TOKEN, newToken.refresh_token);
		} else {
			throw new Error('Failed to refresh token: No new token received');
		}
	} catch (error) {
		console.error('Failed to refresh token:', error);
		// Handle failed refresh (e.g., logout user)
	} finally {
		isRefreshing = false;
	}
};

const httpLink = new HttpLink({
	uri: 'http://localhost:3456/graphql',
});

const errorLink = onError(({ operation, graphQLErrors, networkError }) => {
	const accessToken = getAccessToken();

	if (graphQLErrors) {
		graphQLErrors.forEach(({ message, extensions }) => {
			console.log(
				`[GraphQL error]: ${operation.operationName} - Message: ${message} - Code: ${extensions?.code}`,
			);
		});
	}
	if (networkError) {
		console.log(
			`[Network error]: ${operation.operationName} - ${networkError}`,
		);
	}
	if (
		graphQLErrors?.some(
			(error) => error.extensions?.code === TOKEN_EXPIRED_CODE,
		)
	) {
		if (accessToken && accessToken !== 'undefined') {
			if (!isRefreshing) {
				refreshPromise = getNewToken();
			}
			console.log('Token has expired, refreshing token');
			new Observable((observer) => {
				refreshPromise
					.then(() => {
						observer.next(operation);
						observer.complete();
					})
					.catch((error) => {
						observer.error(error);
					});
			});
		} else {
			console.log('Token has expired and no access token found');
		}
	}
});

const authLink = new ApolloLink((operation, forward) => {
	const accessToken = getAccessToken();

	operation.setContext(({ headers }: { headers: Record<string, string> }) => ({
		headers: {
			...headers,
			authorization: accessToken ? `Bearer ${accessToken}` : '',
		},
	}));

	return forward(operation);
});
export const apolloClient = new ApolloClient({
	cache: new InMemoryCache(),
	link: ApolloLink.from([errorLink, authLink, httpLink]),
});
