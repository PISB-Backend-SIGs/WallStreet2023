import { UseAuthContext } from "./UseAuthContext";

// --- LOGOUT FUNCTION ---
/* 
This function deletes the user data from the local storage.
*/ 
export const UseLogout = () => {

    const {dispatch} = UseAuthContext()

    const logout = () => {
        //Remove user from storage
        localStorage.removeItem('user')

        //Dispatch logout
        dispatch({type: 'LOGOUT'})
    }

    return {logout}
}