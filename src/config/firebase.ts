// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWuH7vrNU6pkc2eU4kyxgsQS2UjGnqxOg",
  authDomain: "react-course-backend-7699c.firebaseapp.com",
  projectId: "react-course-backend-7699c",
  storageBucket: "react-course-backend-7699c.appspot.com",
  messagingSenderId: "432917143880",
  appId: "1:432917143880:web:b9a0aa5434f894bc08937d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);