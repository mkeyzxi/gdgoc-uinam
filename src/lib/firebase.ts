 
// const FIREBASE_PROJECT_NAME = import.meta.env.VITE_FIREBASE_PROJECT_NAME;
const FIREBASE_PROJECT_ID = import.meta.env.VITE_FIREBASE_PROJECT_ID;
// const FIREBASE_PROJECT_NUMBER = import.meta.env.VITE_FIREBASE_PROJECT_NUMBER;
const FIREBASE_PROJECT_API_KEY = import.meta.env.VITE_FIREBASE_PROJECT_API_KEY;
const FIREBASE_PROJECT_AUTH_DOMAIN = import.meta.env.VITE_FIREBASE_AUTH_DOMAIN;
const FIREBASE_PROJECT_STORAGE_BUCKET = import.meta.env.VITE_FIREBASE_STORAGE_BUCKET;
const FIREBASE_PROJECT_MESSAGING_SENDER_ID = import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID;
const FIREBASE_PROJECT_APP_ID = import.meta.env.VITE_FIREBASE_PROJECT_APP_ID;
const FIREBASE_PROJECT_MEASUREMENT_ID = import.meta.env.VITE_FIREBASE_MEASUREMENT_ID;

/* eslint-disable @typescript-eslint/no-unused-vars */
// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: FIREBASE_PROJECT_API_KEY,
	authDomain: FIREBASE_PROJECT_AUTH_DOMAIN,
	projectId: FIREBASE_PROJECT_ID,
	storageBucket: FIREBASE_PROJECT_STORAGE_BUCKET,
	messagingSenderId: FIREBASE_PROJECT_MESSAGING_SENDER_ID,
	appId: FIREBASE_PROJECT_APP_ID,
	measurementId: FIREBASE_PROJECT_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {app, auth, db};
