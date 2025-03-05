// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey : import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "fooddeliveryreact-a7dd7.firebaseapp.com",
  projectId: "fooddeliveryreact-a7dd7",
  storageBucket: "fooddeliveryreact-a7dd7.firebasestorage.app",
  messagingSenderId: "1056856167323",
  appId: "1:1056856167323:web:39674ff72d098e13dd473e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export { auth };

const db = getFirestore(app);
export { db };