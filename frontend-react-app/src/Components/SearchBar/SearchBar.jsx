import React from "react"
import "./SearchBar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDog } from "@fortawesome/free-solid-svg-icons"

const SearchBar = () => {
  return (
    <div className="search-bar-wrapper">
      <div className="search-bar">
        <div className="search-bar__pet-type">
          <div className="search-bar__pet-type--dog-icon">
            <FontAwesomeIcon icon={faDog} />
          </div>
          <div>
            <select>
              <option>Dogs</option>
              <option>Cats</option>
              <option>Rabbit</option>
              <option>Birds</option>
            </select>
          </div>
        </div>
        <div className="search-bar__distance">
          <select>
            <option>10 miles</option>
            <option>20 miles</option>
            <option>30 miles</option>
            <option>Anywhere</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default SearchBar
