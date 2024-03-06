import React from "react"
import "./CSS/Home.css"
import HomePageLeft from "../Components/HomePageLeft/HomePageLeft"
import HomePageRight from "../Components/HomePageRight/HomePageRight"

const Home = () => {
  return (
    <div>
      <div className="home-wraper">
        <div className="home">
          <HomePageLeft />
          <HomePageRight />
        </div>
      </div>
    </div>
  )
}

export default Home
