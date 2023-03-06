import { auth } from "@/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export default async function signIn(email, password) {
    let result, error

    try {
        result = await signInWithEmailAndPassword(auth, email, password)
    } catch(e) {
        error = e
    }

    return {result, error}
}