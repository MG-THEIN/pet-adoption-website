import React from "react"
import "./Navbar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart } from "@fortawesome/free-solid-svg-icons"
import logo from "../Assets/paw-logo-last.png"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="navbar-wrapper">
      <div className="navbar">
        <div className="navbar__left">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
          <Link style={{ textDecoration: "none" }} to="/">
            <p>PawsCupid</p>
          </Link>
        </div>
        <div className="navbar__right">
          <div className="navbar__right--icon">
            <Link to="/save">
              <FontAwesomeIcon icon={faHeart} />
            </Link>
          </div>
          <div className="navbar__right--login">
            <Link to="/signup">
              <button>Sign Up</button>
            </Link>
            <Link to="/login">
              <button>Log In</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
