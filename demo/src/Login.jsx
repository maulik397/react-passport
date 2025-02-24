import React from 'react'
import Google from './assets/google (1).png';
import Facebook from './assets/facebook.png'
import Github from './assets/github.png'
function Login() {

const google =() =>{
window.open('http://localhost:5000/auth/google',"_self")
}
const github =() =>{
    window.open('http://localhost:5000/auth/github',"_self")
    }

  return (
    <div className="login">
      <h1 className="loginTitle">choose login method </h1>
      <div className="wrapper">
      <div className="left">
        <div className="loginButton google" onClick={google}>
            <img src={Google} alt="" className="icon" />Google
        </div>
        <div className="loginButton facebook ">
            <img src={Facebook} alt="" className="icon" />FACEBOOK
        </div>
        <div className="loginButton github" onClick={github} >
            <img src={Github} alt="" className="icon" />Github
        </div>
      </div>
      <div className="center">
        <div className="line"/>
        <div className="or">OR</div>
    
      </div>
      <div className="right">
        <input type ="text"  placeholder ="username" />
        <input type ="text"  placeholder ="Password" />
        <button className="submit">Login</button>

      </div>
      </div>
    </div>
  )
}

export default Login
