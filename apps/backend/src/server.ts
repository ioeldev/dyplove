import type { Server } from 'node:http';
import path from 'node:path';
import { ApolloServer } from '@apollo/server';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';

import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';
import { loadSchemaSync } from '@graphql-tools/load';
import { resolvers } from './graphql/resolvers';

export type AuthContext = {
	user: {
		id: string;
		name: string;
		age: number;
	};
};

export function createApolloServer(httpServer: Server) {
	const typeDefs = loadSchemaSync(
		path.join(process.cwd(), 'src/graphql/typeDefs/**/*.graphql'),
		{
			loaders: [new GraphQLFileLoader()],
		},
	);

	return new ApolloServer<AuthContext>({
		typeDefs: typeDefs,
		resolvers: resolvers,
		introspection: true,
		plugins: [
			ApolloServerPluginDrainHttpServer({ httpServer }),
			ApolloServerPluginLandingPageLocalDefault(),
		],
	});
}
