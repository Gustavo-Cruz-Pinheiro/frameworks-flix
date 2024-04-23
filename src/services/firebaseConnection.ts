// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbksZDeBYs-_6_tO8yP2k9p2m-HwJRJ-0",
  authDomain: "atividade-frameworks-2.firebaseapp.com",
  projectId: "atividade-frameworks-2",
  storageBucket: "atividade-frameworks-2.appspot.com",
  messagingSenderId: "839455416446",
  appId: "1:839455416446:web:cbd71d769682239d0bf82f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db }