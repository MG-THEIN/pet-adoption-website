import React from "react"
import "./CSS/Signup.css"
import { Link } from "react-router-dom"

const Singup = () => {
  return (
    <div className="signup">
      <div className="signup__header">
        <p>Sign Up</p>
      </div>
      <div className="signup__container">
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
        <select required>
          <option value="" disabled selected>
            Country of Residence
          </option>
          <option>United State</option>
          <option>Mexico</option>
          <option>Canada</option>
        </select>
        <input type="text" placeholder="ZIP Code" />
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Password" />
        <div className="signup__container--user-agreement">
          <input type="checkbox" name="" id="" />
          <p>
            I agree to the <Link to="/term_of_use">terms of use</Link> &{" "}
            <Link to="/privacy_policy">privacy policy</Link>.
          </p>
        </div>
        <button>SIGN UP</button>
      </div>
      <div className="signup__have-account">
        <p>
          Already have an account?{" "}
          <Link to="/login">
            <span>Log in</span>
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Singup
