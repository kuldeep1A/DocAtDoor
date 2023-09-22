/* eslint-disable no-undef */
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: `${import.meta.env.REACT_APP_API_KEY}`,
  authDomain: `${import.meta.env.REACT_APP_AUTH_DOMAIN}`,
  projectId: `${import.meta.env.REACT_APP_PROJECT_ID}`,
  storageBucket: `${import.meta.env.REACT_APP_STORAGE_BUCKET}`,
  messagingSenderId: `${import.meta.env.REACT_APP_MESSAGING_SENDER_ID}`,
  appId: `${import.meta.env.REACT_APP_APP_ID}`
};
  

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const database = getFirestore(app);



