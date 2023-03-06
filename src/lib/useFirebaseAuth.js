import { useEffect, useState } from "react"
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from "@/firebase"


const formatUser = (user) => ({
    uid: user.uid,
    email: user.email
})

export default function useFirebaseAuth() {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)


    //listen for changes in the auth state
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, user => {
        if (!user) {
            setUser(null)
            setLoading(false)

            return
        }

        setLoading(true)
        setUser(formatUser(user))
      })

      return unsubscribe
    }, [])

    return {
        user,
        loading
    }
    
}