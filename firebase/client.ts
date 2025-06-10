// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDK3sBcr-TFcxdfEziTA1nEgB3WZaa-O7g",
  authDomain: "interviewprep-782c5.firebaseapp.com",
  projectId: "interviewprep-782c5",
  storageBucket: "interviewprep-782c5.firebasestorage.app",
  messagingSenderId: "449760286191",
  appId: "1:449760286191:web:1d01bf6b856475fabe521a",
  measurementId: "G-QRTGG34YSE"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
