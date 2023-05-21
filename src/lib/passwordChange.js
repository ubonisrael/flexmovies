import { auth } from "@/firebase"
import { updatePassword } from "firebase/auth"

export default async function passwordChange(password) {
    let error
    try {
        await updatePassword(auth.currentUser, password)
    } catch(e) {
        error = e
    }
    return error
}
