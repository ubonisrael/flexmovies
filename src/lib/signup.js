import { auth } from "@/firebase";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import { toast } from "react-toastify";
import { actionCodeSettings } from "./actionCodeSettings";

export default async function signUp(email, password, username) {
  let error;

  try {
    await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(auth.currentUser, {
      displayName: username,
    });
    await sendEmailVerification(auth.currentUser, actionCodeSettings);
    toast.success(
      `A confirmation mail has been sent to ${email}. Click on the link to verify your account.`,
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  } catch (e) {
    //use toastify to alert user sign up attempt has failed
    if (e.message === "Firebase: Error (auth/email-already-in-use).") {
      error = "Email already in use!";
    } else {
      error = "Error during sign up. Please try again later.";
    }
    toast.error(`Error during sign up. Please try again later.`, {
      position: toast.POSITION.TOP_CENTER,
    });
    // then return
  }

  return error;
}
