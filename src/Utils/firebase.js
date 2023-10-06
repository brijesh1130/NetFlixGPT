// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxff6R4CXfJmqGOBQRzxeNtD33R2vzFfM",
  authDomain: "netflixgpt-12e34.firebaseapp.com",
  projectId: "netflixgpt-12e34",
  storageBucket: "netflixgpt-12e34.appspot.com",
  messagingSenderId: "1004510444712",
  appId: "1:1004510444712:web:e6acb8ca95c8aa6603969d",
  measurementId: "G-Z12LBHT1P4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();