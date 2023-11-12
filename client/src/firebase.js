// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-e92ac.firebaseapp.com",
  projectId: "mern-estate-e92ac",
  storageBucket: "mern-estate-e92ac.appspot.com",
  messagingSenderId: "779490946615",
  appId: "1:779490946615:web:f5bb855bdbfb37316359b2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);