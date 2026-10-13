import React,{useState} from 'react'
import './Login.css'
export default function Login()
{
const [email,setEmail]=useState("")
const [password,setPassword]=useState("")
return (
    <div className="login-container">
    <form className="login-form">
    <h2>Login</h2>
    <input type="email" placeholder="Email" value={email} onChange={(event)=>setEmail(event.target.value)}></input>
    <input type="password" placeholder="Password" value={password}onChange={(event)=>setPassword(event.target.value)}></input>
    <button type="submit">Login</button>
    </form>
    </div>
);
}