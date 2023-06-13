// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAc1U3CH-XocQVvOWwiEglkSC9MlsdyVIc",
  authDomain: "data-salt.firebaseapp.com",
  projectId: "data-salt",
  storageBucket: "data-salt.appspot.com",
  messagingSenderId: "64555370869",
  appId: "1:64555370869:web:69b8a945651a7c9933eb3c",
  measurementId: "G-NJ8QVTKM6L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db=getFirestore(app);