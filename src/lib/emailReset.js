import { auth } from "@/firebase"
import { sendPasswordResetEmail } from "firebase/auth"

export default async function ResetEmail(email) {
    let error

    try {
        await sendPasswordResetEmail(auth, email, {
            url: 'http://www.flexmovies.vercel.app'
        })
    } catch (e) {
        error = e
    }

    return error
}