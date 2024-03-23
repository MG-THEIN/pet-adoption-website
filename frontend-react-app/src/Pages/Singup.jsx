import React, { useState } from "react"
import "./CSS/Signup.css"
import { Link } from "react-router-dom"

const Singup = () => {
  const [formData, setFormData] = useState({})

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    })
  }

  console.log(formData)

  return (
    <form className="signup">
      <div className="signup__header">
        <p>Sign Up</p>
      </div>
      <div className="signup__container">
        <input
          type="text"
          placeholder="First Name"
          id="first_name"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Last Name"
          id="last_name"
          onChange={handleChange}
        />
        <select
          required
          defaultValue=""
          id="country_of_residence"
          onChange={handleChange}>
          <option value="" disabled>
            Country of Residence
          </option>
          <option>United State</option>
          <option>Mexico</option>
          <option>Canada</option>
        </select>
        <input
          type="text"
          placeholder="ZIP Code"
          id="zip_code"
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="Email"
          id="email"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          id="password"
          onChange={handleChange}
        />
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
    </form>
  )
}

export default Singup
