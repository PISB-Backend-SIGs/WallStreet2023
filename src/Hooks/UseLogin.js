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
        // setError(null)

        const event = "wallstreet";
        const is_team = "";

        const localLoginUrl = 'https://api.wallstreet.credenz.in/auth/token/login/';
        const remoteLoginUrl = 'https://api.credenz.in/api/verify/user/';
        const localCreateUserUrl = 'https://api.wallstreet.credenz.in/api/register/';

        const localResponse = await fetch(localLoginUrl, {
            method: 'POST',
            body: JSON.stringify({ username, password}),
            headers: { 'Content-Type': 'application/json' }
          });
          
          if (localResponse.ok) {
            const data = await localResponse.json();
            // console.log(data)
            localStorage.setItem('user', JSON.stringify(data))
            dispatch({type: 'LOGIN', payload: data})
            setIsLoading(false)
            setError(null)
            return data.auth_token
          }
          
          const remoteResponse = await fetch(remoteLoginUrl, {
            method: 'POST',
            body: JSON.stringify({ username, password, event, is_team}),
            headers: { 'Content-Type': 'application/json' }
          });
          
          if (remoteResponse.ok) {
            const data = await remoteResponse.json();

            const first_name = data.user.first_name + " " + data.user.last_name
            const email = data.user.email
            const phone = data.user.phone
            
            const createUserResponse = await fetch(localCreateUserUrl, {
              method: 'POST',
              body: JSON.stringify({ username, password, first_name, email, phone}),
              headers: { 'Content-Type': 'application/json' }
            });
            if (createUserResponse.ok) {
              const createUserData = await createUserResponse.json();
            //   console.log(createUserData);
              const localResponse = await fetch(localLoginUrl, {
                method: 'POST',
                body: JSON.stringify({ username, password}),
                headers: { 'Content-Type': 'application/json' }
              })

            const data = await localResponse.json();
            // console.log(data)
            localStorage.setItem('user', JSON.stringify(data))
            dispatch({type: 'LOGIN', payload: data})
            setIsLoading(false)
            setError(null)
            return data.auth_token
            } else {
            //   console.log(data);
              setIsLoading(false)
              setError(data.detail)
              return 'Invalid credentials';
            }
          } else {
            // Login failed in both databases.
            const data = await remoteResponse.json();
            // console.log(data);
            setIsLoading(false)
            setError(data.detail)
            return 'Invalid credentials';
          }

    }

    return {login, error, isLoading}

}