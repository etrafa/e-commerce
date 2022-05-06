import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";

export const signUp = async (
  email,
  password,
  modalMessage,
  errorModal,
  successModal
) => {
  await createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      modalMessage("Successful! You can login into your account.");
      successModal(true);
    })
    .catch((err) => {
      modalMessage(err.message.slice(10, -1) + " Please try again...");
      errorModal(true);
    });
};
