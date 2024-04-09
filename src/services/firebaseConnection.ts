// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgvQK12yRUFpTPpzUdnnN8FD61EjBA_QE",
  authDomain: "react-routes-8daff.firebaseapp.com",
  projectId: "react-routes-8daff",
  storageBucket: "react-routes-8daff.appspot.com",
  messagingSenderId: "706367460192",
  appId: "1:706367460192:web:07d241900d2a81b1610405"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db }