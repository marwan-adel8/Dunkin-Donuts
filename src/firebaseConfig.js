// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfePOM_Fm2tzYuIu-xH-GD-HMZHuXfGwQ",
  authDomain: "dunkindonuts-f1054.firebaseapp.com",
  projectId: "dunkindonuts-f1054",
  storageBucket: "dunkindonuts-f1054.firebasestorage.app",
  messagingSenderId: "87257931791",
  appId: "1:87257931791:web:204d9b6f3e0f696a99437a",
  measurementId: "G-KHEVQ91LHR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;