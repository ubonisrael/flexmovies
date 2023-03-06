import { auth } from "@/firebase";

export default async function LogOut() {
        await auth.signOut()
}