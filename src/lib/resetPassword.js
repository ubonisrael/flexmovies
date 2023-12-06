import { auth } from "@/firebase";
import { sendPasswordResetEmail } from "firebase/auth";
import { toast } from "react-toastify";
import { actionCodeSettings } from "./actionCodeSettings";

export default async function resetPassword(email) {
  let error;
  try {
    await sendPasswordResetEmail(auth, email, actionCodeSettings);
    //alert that reset email has been sent to user's mail
    toast.success(`Email to reset password has been sent to ${email}`, {
      position: toast.POSITION.TOP_CENTER,
    });
  } catch (e) {
    if (e.message == "Firebase: Error (auth/user-not-found).") {
      error = 'User not found.'
    } else {
      error = "Error. Please try again.";
    }
  }

  return error;
}
