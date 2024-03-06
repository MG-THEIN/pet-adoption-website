import React from "react"
import "./Pet.css"

const Pet = (props) => {
  return (
    <div className="pet">
      <img src={props.image} alt="" />

      <div className="pet__name">
        <p>{props.name}</p>
      </div>
      <div className="pet__age-breed">
        <p>
          {props.age} : {props.breed}
        </p>
      </div>
    </div>
  )
}

export default Pet
