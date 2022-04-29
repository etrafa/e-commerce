import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCOpU8YoGaq9-_zqbzaLLidWkt34qtixs",
  authDomain: "tshirt-app-34dfa.firebaseapp.com",
  projectId: "tshirt-app-34dfa",
  storageBucket: "tshirt-app-34dfa.appspot.com",
  messagingSenderId: "918595835974",
  appId: "1:918595835974:web:7d1ebe2c49e43faebf9247",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
