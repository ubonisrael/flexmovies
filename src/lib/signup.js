import { auth } from "@/firebase";
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";

export default async function signUp(email, password) {
    let error

    try {
        await createUserWithEmailAndPassword(auth, email, password)
        await sendEmailVerification(auth.currentUser, {
            url: "http://www.flexmovies.vercel.app"
        })
        await auth.signOut()
    } catch(e) {
        error = e
    }

    return {error}
}