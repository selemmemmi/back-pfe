import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { AuthClient, login } from '../../JS/actions/Auth'

import './style.css'

export default function SignInPage() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [Auth, setAuth] = useState()
    const Handelchange=(e)=>{
        setAuth({...Auth ,[e.target.name]:e.target.value})
    }
    console.log(Auth)
   
    return (
        
        <div className="text-center m-5-auto">
            <img src="./images/logo.jpg" alt="" />
            <h2>Welcome</h2>
            <p>Sign in to your account for license information, subscriptions, onboarding services, and more.</p>
            <form action="/home" style={{  display: "inline-block",
                            background: "#f3f3f3" ,
                            border: "1px solid #ddd" ,
                            borderRadius: "2px" ,
                            padding: "2rem" ,
                            margin: "2rem 0 1rem 0" ,   }}>
                <p>
                    <label>Username or email address</label><br/>
                    <input type="text" name="adress" required onChange={Handelchange}/>
                </p>
                <p>
                    <label>Password</label>
                    <Link to="/forget-password"><label className="right-label">Forget password?</label></Link>
                    <br/>
                    <input type="password" name="password" required  onChange={Handelchange}/>
                </p>
                <p>
                <button
                  type="submit"
                  className="btn btn-blue text-center"
                  onClick={() => dispatch(login(Auth,navigate))}
                >
                  SignIn
                </button>
                </p>
            </form>
            <footer>
                <p>First time? <Link to="/register">Create an account</Link>.</p>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
    )
}
