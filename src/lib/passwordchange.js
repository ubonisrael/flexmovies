import { auth } from "@/firebase";
import { EmailAuthProvider, reauthenticateWithCredential, updatePassword } from "firebase/auth";
import { toast } from "react-toastify";

export default async function passwordChange(email, oldPassword, newPassword) {
  try {

    const credential = EmailAuthProvider.credential(email, oldPassword);

    await reauthenticateWithCredential(auth.currentUser, credential)
    await updatePassword(auth.currentUser, newPassword);

    toast.success(`Password changed successfully`, {
      position: "top-center",
    });
  } catch (e) {
    toast.error("Password change unsuccessfully. Please try again.", {
      position: toast.POSITION.TOP_CENTER,
    });
    console.log(e);
  }
}
