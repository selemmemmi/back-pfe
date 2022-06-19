import React from 'react'
import { Link } from 'react-router-dom'

import './style.css'

export default function ForgetPasswordPage() {
    return (
        <div className="text-center m-5-auto">
            <img src="./images/logo.jpg" alt="" />
            <h2>Reset your password</h2>
            <p>Enter your email address and we will send you a new password</p>
            <form action="/login" style={{  display: "inline-block",
                            background: "#f3f3f3" ,
                            border: "1px solid #ddd" ,
                            borderRadius: "2px" ,
                            padding: "2rem" ,
                            margin: "2rem 0 1rem 0" ,   }}>
                <p>
                    <label id="reset_pass_lbl">Email address</label><br/>
                    <input type="email" name="email" required />
                </p>
                <p>
                    <button id="sub_btn" type="submit">Send password reset email</button>
                </p>
            </form>
            <footer>
                <p>First time? <Link to="/register">Create an account</Link>.</p>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
    )
}
