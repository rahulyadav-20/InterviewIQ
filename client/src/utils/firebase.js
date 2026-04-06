// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewiq-2520f.firebaseapp.com",
  projectId: "interviewiq-2520f",
  storageBucket: "interviewiq-2520f.firebasestorage.app",
  messagingSenderId: "85100310610",
  appId: "1:85100310610:web:69875fa8cf15dc5e386f8b",
  measurementId: "G-DEQ4JDXJ67"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth =getAuth(app)

const provider =new GoogleAuthProvider()

export {auth, provider}
