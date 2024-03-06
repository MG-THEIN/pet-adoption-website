import React from "react"
import "./CSS/Login.css"
import { Link } from "react-router-dom"

const LoginSignup = () => {
  return (
    <div className="login">
      <div className="login__header">
        <p>Log In</p>
      </div>
      <div className="login__container">
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Password" />
        <button>LOG IN</button>
      </div>
      <div className="login__forgot-password">
        <Link to="/password-recovery">
          <p>Forgot password?</p>
        </Link>
      </div>
      <div className="login__no-account">
        <p>
          Don't have an account?{" "}
          <Link to="/signup">
            <span>Sign up</span>
          </Link>
        </p>
      </div>
    </div>
  )
}

export default LoginSignup
