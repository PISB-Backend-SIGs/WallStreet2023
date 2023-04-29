import React, { useState } from 'react'
import { UseLogin } from '../Hooks/UseLogin'

const Login = () => {

    const [username, setName] = useState('')
    const [password, setPass] = useState('')
  
    const {login, error, isLoading} = UseLogin()
  
    const handleSubmit = async (e) => {
      e.preventDefault()
      await login(username, password)
    }
  
    return (
      <div>
        <div>
          <div className="title">Login</div>
          <form >
            <label>Username : </label>
            <input type="text" onChange={(e) => setName(e.target.value)} value={username}/>
            <label>Password : </label>
            <input type="password" onChange={(e) => setPass(e.target.value)} value={password}/>
            {error && <div className="error">Wrong username or password ! </div>}
            {isLoading && <div className="loading">Loading...</div>}
            <button onClick={handleSubmit}>Log In</button>
          </form>
        </div>
      </div>
    )
  }
  
  export default Login