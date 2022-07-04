import { initializeApp } from "firebase/app";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";

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
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

//signup with email
export const signUpWithEmail = async (email, password, name) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(auth.currentUser, { displayName: name });
    const userID = auth?.currentUser?.uid;
    await setDoc(doc(db, "users", userID), { id: userID });
    window.location.reload();
  } catch (err) {
    console.log(err);
  }
};

export const signInWithEmail = async (email, password, modal) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    modal(true);
  }
};

//signin with google
export const signInWithGoogleProvider = async () => {
  const googleProvider = new GoogleAuthProvider();
  await signInWithPopup(auth, googleProvider);
  const userID = auth?.currentUser?.uid;
  await setDoc(doc(db, "users", userID), { id: userID });
  window.location.reload();
};

//logout
export const logOut = async () => {
  await signOut(auth);
  window.location.reload();
};

//tracking user
export const useAuth = () => {
  const [currentUser, setCurrentUser] = useState("");

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => setCurrentUser(user));
    return unsub;
  }, []);

  return currentUser;
};
