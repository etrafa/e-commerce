import { initializeApp } from "firebase/app";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  getFirestore,
  onSnapshot,
  query,
  setDoc,
  updateDoc,
} from "firebase/firestore";
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

//signin with email
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

//add items to user's cart
export const addItemToCart = async (props, user, productSize) => {
  const q = query(collection(db, "users"));
  const querySnapShot = await getDocs(q);
  const queryData = querySnapShot.docs.map((detail) => ({
    ...detail.data(),
    id: detail.id,
  }));

  queryData.map(async () => {
    await setDoc(doc(db, `users/${user?.uid}/shopping-cart`, props.uid), {
      ...props,
      productSize: productSize,
    });
  });
};

//remove items from user's cart
export const removeItemFromCart = async (props) => {
  const q = query(collection(db, "users"));
  const querySnapShot = await getDocs(q);
  const queryData = querySnapShot.docs.map((detail) => ({
    ...detail.data(),
    id: detail.id,
  }));

  queryData.map(async (v) => {
    await deleteDoc(doc(db, `users/${v.id}/shopping-cart`, props.uid));
  });
};

//show user's cart data from DB

//add item to user's wishlist
export const addItemToWishList = async (props, user) => {
  const q = query(collection(db, "users"));
  const querySnapShot = await getDocs(q);
  const queryData = querySnapShot.docs.map((detail) => ({
    ...detail.data(),
    id: detail.id,
  }));

  queryData.map(async () => {
    await setDoc(doc(db, `users/${user?.uid}/wish-list`, props.uid), {
      ...props,
    });
  });
};

//remove item from user's wishlist
export const removeItemFromWishList = async (props) => {
  const q = query(collection(db, "users"));
  const querySnapShot = await getDocs(q);
  const queryData = querySnapShot.docs.map((detail) => ({
    ...detail.data(),
    id: detail.id,
  }));

  queryData.map(async (v) => {
    await deleteDoc(doc(db, `users/${v.id}/wish-list`, props.uid));
  });
};

//show user's wishlist data from DB
export const useFetchData = (url) => {
  const currentUser = useAuth();

  const [fetchedData, setFetchedData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const q = query(collection(db, "users"));
      const snapshot = await getDocs(q);
      const data = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      data.map(async () => {
        const likesQ = query(collection(db, `users/${currentUser.uid}/${url}`));
        const unsub = onSnapshot(likesQ, (snapshot) => {
          let result = [];
          snapshot.docs.forEach((doc) => {
            result.push(doc.data());
          });
          setFetchedData(result);
        });
        return () => unsub();
      });
    };
    getData();
  }, [currentUser]);
  return { fetchedData };
};

//update item's size
export const updateItemSize = async (props, user, size) => {
  const q = query(collection(db, "users"));
  const querySnapShot = await getDocs(q);
  const queryData = querySnapShot.docs.map((detail) => ({
    ...detail.data(),
    id: detail.id,
  }));

  queryData.map(async () => {
    await setDoc(doc(db, `users/${user?.uid}/shopping-cart`, props.uid), {
      ...props,
      productSize: size,
    });
  });
};
