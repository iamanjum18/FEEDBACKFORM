// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrb-m0EoxjFObFnVFDwMTrNWBBWa_oLuk",
  authDomain: "feedbackformbuilder.firebaseapp.com",
  projectId: "feedbackformbuilder",
  storageBucket: "feedbackformbuilder.appspot.com",
  messagingSenderId: "213873945230",
  appId: "1:213873945230:web:36aa2e1db1f5ff1b7437df",
  measurementId: "G-49ZW2N9DDM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
