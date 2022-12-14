import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getStorage } from "firebase/storage";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "react-chat-app-a8c6b.firebaseapp.com",
  projectId: "react-chat-app-a8c6b",
  storageBucket: "react-chat-app-a8c6b.appspot.com",
  messagingSenderId: "739989283555",
  appId: "1:739989283555:web:643d9cb1d233db5ac7dbd6"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage();
export const db = getFirestore();