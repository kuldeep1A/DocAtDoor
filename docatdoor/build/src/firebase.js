/* eslint-disable no-undef */
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';


const firebaseConfig = {
  apiKey: "AIzaSyCMToFQaTidTrazJkvVoNF5SHEhHDknJUM",
  authDomain: "docatdoor-1a.firebaseapp.com",
  projectId: "docatdoor-1a",
  storageBucket: "docatdoor-1a.appspot.com",
  messagingSenderId: "404197994812",
  appId: "1:404197994812:web:9bce7388b64a04a4abee39"

};
  

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const database = getFirestore(app);
