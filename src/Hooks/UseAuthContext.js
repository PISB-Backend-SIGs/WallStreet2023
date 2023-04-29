import {AuthContext} from "../Context/AuthContext";
import { useContext } from "react";

// --- AUTHENTICATION CONTEXT HOOK ---
export const UseAuthContext = () => {
    const context = useContext(AuthContext)

    if(!context){
        throw Error('useAuthContext must be used inside an AuthContextProvider')
    }

    return context
}