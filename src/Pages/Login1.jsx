import React, { useState } from "react";
import { UseLogin } from "../Hooks/UseLogin";
import {toast} from 'react-toastify';
import { UseAuthContext } from './../Hooks/UseAuthContext'

const Login1 = () => {

  const [username, setName] = useState("");
  const [password, setPass] = useState("");

  // const { login, error, isLoading } = UseLogin();

  const {dispatch} = UseAuthContext()
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // const [error, setError] = useState(null)
    let error =null
    let isLoading = null

    const login = async (username, password) => {
      const id = toast.loading("Please wait...");
        isLoading=(true)
        error=(null)

        const event = "wallstreet";
        const is_team = "";

        //change this later
        const localLoginUrl = 'http://127.0.0.1:8000/auth/token/login/';
        const remoteLoginUrl = 'https://api.credenz.in/api/verify/user/';
        const localCreateUserUrl = 'https://api.wallstreet.credenz.in/api/register/';

        const localResponse = await fetch(localLoginUrl, {
            method: 'POST',
            body: JSON.stringify({ username, password}),
            headers: { 'Content-Type': 'application/json' }
          });
        
          if (localResponse.ok) {
            const data = await localResponse.json();
            
            localStorage.setItem('user', JSON.stringify(data))
            dispatch({type: 'LOGIN', payload: data})
            isLoading=false
            error=(null)
            toast.update(id, { render: "Logged in successfully !", type: "success", isLoading: false, autoClose:5000 })
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
              const localResponse = await fetch(localLoginUrl, {
                method: 'POST',
                body: JSON.stringify({ username, password}),
                headers: { 'Content-Type': 'application/json' }
              })

            const data = await localResponse.json();
            
            localStorage.setItem('user', JSON.stringify(data))
            dispatch({type: 'LOGIN', payload: data})
            isLoading=(false)
            error=(null)
            //logintoast
            toast.update(id, { render: "Logged in successfully !", type: "success", isLoading: false, autoClose:5000 })
            return data.auth_token
            } else {
        
              isLoading=(false)
              error=(data.detail)
              //error toast
              toast.update(id, { render: error, type: "error", isLoading: false, autoClose:5000 })
              return 'Invalid credentials';
            }
          } else {
            // Login failed in both databases.
            const data = await remoteResponse.json();
          
            isLoading=(false)
            error=(data.detail)
        
            //error toast
            toast.update(id, { render: error, type: "error", isLoading: false, autoClose:5000 })
            return 'Invalid credentials';
          }

    }
    // if(isLoading){
    //   toast.info("Processing")
    // }
    // if(error){
    //   toast.error("Error occured")
    // }
    // if(!isLoading && error===null){
    //   try{
    //     await login(username, password);
    //     toast.success("Logged in successfully !")
    //   }
    //   catch(error){
    //     toast.error("Error ")
    //   }
      
    // }
    await login(username, password);
    
  };

  return (
    <div className="login-page px-4">
      <form className="login-form shadow-lg">
        <h4>User Login</h4>
        <input className="my-4" type="text" placeholder="Username" onChange={(e) => setName(e.target.value)} value={username}/>
        <input className="my-4" type="password" placeholder="Password" onChange={(e) => setPass(e.target.value)} value={password}/>
        <input className="my-1" type="submit" value="Log In" onClick={(e)=>handleSubmit(e)} />
        {/* add the loader and error handling */}
      </form>
    </div>
  );
};

export default Login1;
