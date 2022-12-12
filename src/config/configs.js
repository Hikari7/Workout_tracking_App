//firebaseの初期化

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN_KEY,
  projectId: import.meta.env.VITE_PROJECT_ID_KEY,
  storageBucket: import.meta.env.VITE_STORAGE_BACKET_KEY,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID_KEY,
  appId: import.meta.env.VITE_APP_ID_KEY,
};

console.log(import.meta.env.VITE_API_KEY);

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
