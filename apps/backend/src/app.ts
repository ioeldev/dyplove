import http from 'node:http';
import { expressMiddleware } from '@as-integrations/express5';
import cors from 'cors';
import express from 'express';
import { context } from './graphql/context';
import { createApolloServer } from './server';

export function createApp() {
	const app = express();
	const httpServer = http.createServer(app);

	const server = createApolloServer(httpServer);

	server.startInBackgroundHandlingStartupErrorsByLoggingAndFailingAllRequests();

	// Configure GraphQL middleware
	app.use(
		'/graphql',
		cors<cors.CorsRequest>(),
		express.json(),
		expressMiddleware(server, {
			context,
		}),
	);

	return { app, httpServer };
}
