//firebase
import { auth, googleProvider } from "../firebase/firebaseConfig";
import { signInWithPopup } from "firebase/auth";

export const signUpWithGoogleProvider = async (isUserLogedIn, router) => {
  await signInWithPopup(auth, googleProvider)
    .then(
      setTimeout(() => {
        isUserLogedIn(true);
        router.push("/");
      }, 5000)
    )
    .catch((err) => console.log(err.message));
};
