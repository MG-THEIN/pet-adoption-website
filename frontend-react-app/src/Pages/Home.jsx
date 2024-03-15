import React from "react"
import "./CSS/Home.css"
import SearchBar from "../Components/SearchBar/SearchBar"
import HomePageLeft from "../Components/HomePageLeft/HomePageLeft"
import HomePageRight from "../Components/HomePageRight/HomePageRight"

const Home = () => {
  return (
    <div>
      <div className="home-wraper">
        <div className="home__search-bar">
          <SearchBar />
        </div>
        <div className="home">
          <HomePageLeft />
          <HomePageRight />
        </div>
      </div>
    </div>
  )
}

export default Home
