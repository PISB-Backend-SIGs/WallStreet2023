import React, { useState } from "react";
import { UseLogin } from "../Hooks/UseLogin";
import {toast} from 'react-toastify';


const Login1 = () => {

  const [username, setName] = useState("");
  const [password, setPass] = useState("");

  const { login, error, isLoading } = UseLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(isLoading){
      toast.info("Processing")
    }
    if(error){
      toast.error("Error occured")
    }
    if(!isLoading && !error){
      await login(username, password);
      toast.success("Logged in successfully !")
    }
    
  };

  return (
    <div className="login-page px-4">
      <form className="login-form shadow-lg">
        <h4>User Login</h4>
        <input className="my-4" type="text" placeholder="Username" onChange={(e) => setName(e.target.value)} value={username}/>
        <input className="my-4" type="password" placeholder="Password" onChange={(e) => setPass(e.target.value)} value={password}/>
        <input className="my-1" type="submit" value="Log In" onClick={handleSubmit} />
        {/* add the loader and error handling */}
      </form>
    </div>
  );
};

export default Login1;
