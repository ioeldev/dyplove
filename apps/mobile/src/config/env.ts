export const isLocal = true;

export const devConfig = {
	// apiUrl: 'http://localhost:3456/graphql',
	apiUrl: 'https://7dd409c50f95.ngrok-free.app/graphql',
};

export const prodConfig = {
	apiUrl: 'https://api.dyplove.com/graphql',
};

export const config = isLocal ? devConfig : prodConfig;
