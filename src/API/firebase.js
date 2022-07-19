import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";


  // Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPKLUb1WPw3vY5TR7Bi5B0usdiDjgNPf8",
  authDomain: "mohammaditasmiya-18.firebaseapp.com",
  projectId: "mohammaditasmiya-18",
  storageBucket: "mohammaditasmiya-18.appspot.com",
  messagingSenderId: "214797430015",
  appId: "1:214797430015:web:d1820e8204e06ffc97f0ca"
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
export const storage = firebase.storage();
