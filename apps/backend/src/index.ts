import 'dotenv/config';
import { createApp } from './app';
import jwt from 'jsonwebtoken';
const API_URL = process.env.API_URL;

const { app } = createApp();

app.listen(3456, () => {
	const token = jwt.sign(
		{
			exp: Math.floor(Date.now() / 1000) + 30 * 24 * 60 * 60,
			iat: Math.floor(Date.now() / 1000),
		},
		process.env.JWT_SECRET,
	);
	console.log(token);
	console.log(`Server is running at ${API_URL}`);
});
