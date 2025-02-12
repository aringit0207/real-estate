// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-0207.firebaseapp.com",
  projectId: "real-estate-0207",
  storageBucket: "real-estate-0207.firebasestorage.app",
  messagingSenderId: "259680513523",
  appId: "1:259680513523:web:0c86e2b504ffc50f63b686"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);