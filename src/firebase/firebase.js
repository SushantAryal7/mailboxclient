// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFunctions } from "firebase/functions";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtdvIRKlpZrhIhQSHoJaYi26eSJstmWio",
  authDomain: "mailboxclient-6dcde.firebaseapp.com",
  projectId: "mailboxclient-6dcde",
  storageBucket: "mailboxclient-6dcde.firebasestorage.app",
  messagingSenderId: "965341167548",
  appId: "1:965341167548:web:94e27c18113aba4458b5b9",
  measurementId: "G-9LPPZCXGQJ",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
