import { useState } from 'react'
import { UseAuthContext } from './UseAuthContext'

// --- LOGIN FUNCTION ---
/* 
This function post's the user's credentials and stores the response in the local
storage.
*/ 
export const UseLogin = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const {dispatch} = UseAuthContext()

    const login = async (username, password) => {
        setIsLoading(true)
        setError(null)

        const response = await fetch('http://127.0.0.1:8000/auth/token/login/', {
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({username, password})
        })
        const json = await response.json()

        if(!response.ok){
            setIsLoading(false)
            setError(json.error)
        }
        if(response.ok){
            //Save the user to local storage
            localStorage.setItem('user', JSON.stringify(json))
            //Update AuthContext
            dispatch({type: 'LOGIN', payload: json})
            setIsLoading(false)
        }

    }

    return {login, error, isLoading}

}