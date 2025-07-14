import type { FooContext } from '~/server';
import type { Resolvers } from '../generated/graphql';

export const userResolvers: Resolvers<FooContext> = {
	Query: {
		user: () => {
			return {
				id: '1',
				name: 'John Doe',
				age: 20,
			};
		},
	},
};
