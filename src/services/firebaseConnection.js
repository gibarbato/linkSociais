// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDmAXYvITXXHkPl5sBncabGRHr0JsCKxfc",
  authDomain: "devlinks-a2353.firebaseapp.com",
  projectId: "devlinks-a2353",
  storageBucket: "devlinks-a2353.appspot.com",
  messagingSenderId: "93267552322",
  appId: "1:93267552322:web:e9a3a9233b4d245db5e5db",
  measurementId: "G-5B5XQVTQKJ"
};

const firebaseApp = initializeApp(firebaseConfig)

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };
