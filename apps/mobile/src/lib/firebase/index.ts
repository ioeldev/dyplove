import Storage from 'expo-sqlite/kv-store';
import { initializeApp } from 'firebase/app';
//@ts-ignore
import { getReactNativePersistence, initializeAuth } from 'firebase/auth';

// Optionally import the services that you want to use
// import {...} from 'firebase/auth';
// import {...} from 'firebase/database';
// import {...} from 'firebase/firestore';
// import {...} from 'firebase/functions';
// import {...} from 'firebase/storage';

// Initialize Firebase
const firebaseConfig = {
	apiKey: 'AIzaSyAIuwoTsrITUGtOTaX3x5_MqgW0TpI7EEc',
	authDomain: 'dyplove-4b7b8.firebaseapp.com',
	projectId: 'dyplove-4b7b8',
	storageBucket: 'dyplove-4b7b8.firebasestorage.app',
	messagingSenderId: '937099286790',
	appId: '1:937099286790:web:cbbf7bf9807dea388fa687',
	measurementId: 'G-W2MVD7YMMB',
};

const app = initializeApp(firebaseConfig);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
const auth = initializeAuth(app, {
	persistence: getReactNativePersistence(Storage),
});

export { auth };
