import type { Request } from 'express';
import { GraphQLError } from 'graphql';
import jwt from 'jsonwebtoken';

export const context = async ({ req }: { req: Request }) => {
	if (req.body.operationName === 'IntrospectionQuery') {
		return { user: null };
	}
	console.log(req.body);
	const accessToken = req.headers.authorization?.split(' ')[1];

	if (!accessToken) {
		return { user: null };
	}

	const decodedToken = jwt.verify(accessToken, process.env.JWT_SECRET);
	console.log(decodedToken);
	const isExpired = decodedToken.exp < Date.now() / 1000;
	if (isExpired) {
		throw new GraphQLError('Token expired', {
			extensions: {
				code: 'TOKEN_EXPIRED',
			},
		});
	}
	return {
		user: {
			id: '1',
			name: 'John Doe',
			age: 20,
		},
	};
};
