import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyAIuwoTsrITUGtOTaX3x5_MqgW0TpI7EEc',
	authDomain: 'dyplove-4b7b8.firebaseapp.com',
	projectId: 'dyplove-4b7b8',
	storageBucket: 'dyplove-4b7b8.firebasestorage.app',
	messagingSenderId: '937099286790',
	appId: '1:937099286790:web:cbbf7bf9807dea388fa687',
	measurementId: 'G-W2MVD7YMMB',
};

export const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth(firebaseApp);
