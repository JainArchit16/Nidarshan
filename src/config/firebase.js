// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyDPDUVckUI60vEk_q0SYzmaphRwLVNuf4k",
  authDomain: "nidarshan-1.firebaseapp.com",
  projectId: "nidarshan-1",
  storageBucket: "nidarshan-1.appspot.com",
  messagingSenderId: "1031790305257",
  appId: "1:1031790305257:web:1d0db6a4aefe48e60b3578",
  measurementId: "G-EZM0DX1RGG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export default app;
export const db = getFirestore(app);
