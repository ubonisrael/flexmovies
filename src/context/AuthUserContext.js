import useFirebaseAuth from "@/lib/useFirebaseAuth";

const { createContext, useContext } = require("react");


const authUserContext = createContext({
    user: null,
    loading: false
})

export function AuthUserProvider({children}) {
    const auth = useFirebaseAuth()

    return <authUserContext.Provider value={auth}>{children}</authUserContext.Provider>
}

//custom hook to use the authUserContext and access user and loading
export const useAuth = () => useContext(authUserContext)