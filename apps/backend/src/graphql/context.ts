import type { Request } from 'express';
import jwt from 'jsonwebtoken';

export const context = async ({ req }: { req: Request }) => {
	if (req.body.operationName === 'IntrospectionQuery') {
		return { user: null };
	}

	const accessToken = req.headers.authorization?.split(' ')[1];
	if (!accessToken) {
		return { user: null };
	}

	const decodedToken = jwt.decode(accessToken);
	console.log('decodedToken>>', decodedToken);

	return {
		user: {
			id: '1',
			name: 'John Doe',
			age: 20,
		},
	};
};
