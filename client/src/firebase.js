// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-f73f5.firebaseapp.com",
  projectId: "mern-estate-f73f5",
  storageBucket: "mern-estate-f73f5.firebasestorage.app",
  messagingSenderId: "263416885963",
  appId: "1:263416885963:web:da58d2c701a98bb136a14e",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
