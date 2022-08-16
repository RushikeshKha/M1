import React from 'react'
import './Login.css'
function Login() {
  return (
    <>
    <div className="heading">
        <h1>M1</h1>
    </div>
    <div className="container">
        
        <div className="heading">
            LogIn
        </div>
        <div className="formm">
            <label>Username</label>
            <input type="text" name="username" id="user"/>
            <label>Password</label>
            <input type="text" name="password" id="pass"/>
            <button>LogIn</button>
        </div>
    </div></>
  )
}

export default Login