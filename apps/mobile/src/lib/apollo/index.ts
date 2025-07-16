import { ApolloClient, ApolloLink, HttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import { config } from '~/config/env';
import { auth } from '../firebase';

const httpLink = new HttpLink({
	uri: config.apiUrl,
});

const errorLink = onError(({ operation, forward, graphQLErrors, networkError }) => {
	if (graphQLErrors) {
		graphQLErrors.forEach(({ message, extensions }) => {
			console.log(`[GraphQL error]: ${operation.operationName} - Message: ${message} - Code: ${extensions?.code}`);
		});
	}
	if (networkError) {
		console.log(`[Network error]: ${operation.operationName} - ${networkError}`);
	}

	return forward(operation);
});

const authLink = setContext(async (_, { headers }) => {
	const accessToken = await auth.currentUser?.getIdToken();
	return {
		headers: {
			...headers,
			authorization: accessToken ? `Bearer ${accessToken}` : '',
		},
	};
});

export const apolloClient = new ApolloClient({
	cache: new InMemoryCache(),
	link: ApolloLink.from([errorLink, authLink, httpLink]),
});
