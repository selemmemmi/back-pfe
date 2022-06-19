import React from 'react'
import { Link } from 'react-router-dom'

import './style.css'

export default function SignUpPage() {

    return (
        <div className="text-center m-5-auto">
            <img src="./images/logo.jpg" alt="" />
            <h2>Join us</h2>
            <p>Create your personal account</p>
            <form action="/home" style={{  display: "inline-block",
                            background: "#f3f3f3" ,
                            border: "1px solid #ddd" ,
                            borderRadius: "2px" ,
                            padding: "2rem" ,
                            margin: "2rem 0 1rem 0" ,   }}>
                <p>
                    <label>Username</label><br/>
                    <input type="text" name="first_name" required />
                </p>
                <p>
                    <label>Email address</label><br/>
                    <input type="email" name="email" required />
                </p>
                <p>
                    <label>Password</label><br/>
                    <input type="password" name="password" requiredc />
                </p>
                <p>
                    <input type="checkbox" name="checkbox" id="checkbox" required /> <span>I agree all statements in <a href="https://google.com" target="_blank" rel="noopener noreferrer">terms of service</a></span>.
                </p>
                <p>
                    <button id="sub_btn" type="submit">Register</button>
                </p>
            </form>
            <footer>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
    )

}
