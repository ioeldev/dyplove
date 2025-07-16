import { createApp } from './app';

const API_URL = process.env.API_URL;

const { app } = createApp();

app.listen(3456, () => {
	console.log(`Server is running at ${API_URL}`);
});
