import { auth } from "@/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export default async function signIn(email, password) {
  let error;
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (e) {
    //use toastify to alert user login attempt has failed
    if (
      e.message ==
      "Firebase: Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later. (auth/too-many-requests)"
    ) {
      error =
        "Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later.";
    } else {
      error = "Email or password incorrect."
    }
  }
  return error;
}
