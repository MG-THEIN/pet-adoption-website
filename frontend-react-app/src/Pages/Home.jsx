import React from "react"
import "./CSS/Home.css"

const Home = () => {
  return (
    <div>
      <div className="home-wraper">
        <div className="home">
          <div className="home__left">
            <div className="home__left--button">
              <p>BREED</p>
              <select>
                <option>Any</option>
                <option>Other</option>
              </select>
            </div>
            <div className="home__left--button">
              <p>AGE</p>
              <select>
                <option>Any</option>
                <option>Other</option>
              </select>
            </div>
            <div className="home__left--button">
              <p>SIZE</p>
              <select>
                <option>Any</option>
                <option>Other</option>
              </select>
            </div>
            <div className="home__left--button">
              <p>GENDER</p>
              <select>
                <option>Any</option>
                <option>Other</option>
              </select>
            </div>
            <div className="home__left--button">
              <p>COLOR</p>
              <select>
                <option>Any</option>
                <option>Other</option>
              </select>
            </div>
            <div className="home__left--button">
              <p>GOOD WITH</p>
              <select>
                <option>Any</option>
                <option>Other</option>
              </select>
            </div>
            <div className="home__left--button">
              <p>COAT LENGTH</p>
              <select>
                <option>Any</option>
                <option>Other</option>
              </select>
            </div>
            <div className="home__left--button">
              <p>DAYS ON PAWCUPID</p>
              <select>
                <option>Any</option>
                <option>Other</option>
              </select>
            </div>
          </div>
          <div className="home__right">
            <p>HOME RIGHT</p>
            <label>
              Type
              <select>
                <option>dog</option>
                <option>cat</option>
                <option>fish</option>
                <option>bird</option>
                <option>croc</option>
              </select>
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
