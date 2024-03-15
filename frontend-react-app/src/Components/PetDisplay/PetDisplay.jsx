import React from "react"
import "./PetDisplay.css"

const PetDisplay = (props) => {
  const { pet } = props
  return (
    <div className="pet-display">
      <div className="pet-display__top-bar--wrapper">
        <div className="pet-display__top-bar">
          <button>Previous Pet</button>
          <button>Next Pet</button>
        </div>
      </div>
      <div className="pet-display__images">
        <img src={pet.image} alt="" />
      </div>
      <div className="pet-display__about">
        <h2>About</h2>
        <p>{pet.name}</p>
        <p>{pet.age}</p>
        <p>{pet.coat}</p>
        <p>{pet.breed}</p>
      </div>
    </div>
  )
}

export default PetDisplay
