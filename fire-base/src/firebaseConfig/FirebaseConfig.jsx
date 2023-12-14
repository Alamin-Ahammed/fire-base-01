// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-Ujv9K7hp41pGO8x7KsHDGYGIMBWrN00",
  authDomain: "fire-base-01-ahammed.firebaseapp.com",
  projectId: "fire-base-01-ahammed",
  storageBucket: "fire-base-01-ahammed.appspot.com",
  messagingSenderId: "365223456627",
  appId: "1:365223456627:web:5e5debfb90aeacefcedf06",
  measurementId: "G-G2ZTTCCZDL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);