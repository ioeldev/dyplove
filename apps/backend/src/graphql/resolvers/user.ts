import type { AuthContext } from '~/server';
import type { Resolvers } from '../generated/graphql';

export const userResolvers: Resolvers<AuthContext> = {
	Query: {
		authInfo: () => {
			return {
				emailVerifRequired: true,
			};
		},
		user: () => {
			return {
				id: '1',
				name: 'John Doe',
				age: 20,
			};
		},
	},
};
