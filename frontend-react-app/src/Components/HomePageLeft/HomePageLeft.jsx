import React from "react"
import "./HomePageLeft.css"

const HomePageLeft = () => {
  return (
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
  )
}

export default HomePageLeft
