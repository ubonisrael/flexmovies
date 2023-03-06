import { auth } from "@/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default async function signUp(email, password) {
    let result, error

    try {
        result = await createUserWithEmailAndPassword(auth, email, password)
    } catch(e) {
        error = e
    }

    return {result, error}
}