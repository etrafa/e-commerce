import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";

export const signOutUser = async (checkUserLogin, router) => {
  await signOut(auth)
    .then(() => checkUserLogin(false))
    .then(() =>
      setTimeout(() => {
        router.push("/");
      }, 2000)
    );
};
