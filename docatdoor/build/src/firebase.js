/* eslint-disable no-undef */
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: `${import.meta.env.REACT_APP_API_KEY}`,
  authDomain: `${import.meta.env.REACT_APP_API_KEY}`,
  projectId: `${import.meta.env.REACT_APP_API_KEY}`,
  storageBucket: `${import.meta.env.REACT_APP_API_KEY}`,
  messagingSenderId: `${import.meta.env.REACT_APP_API_KEY}`,
  appId: `${import.meta.env.REACT_APP_API_KEY}`

};
  

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const database = getFirestore(app);
