import React from "react"
import { Link } from "react-router-dom"
import "./Pet.css"

const Pet = (props) => {
  return (
    <Link to={`/pet/${props.id}`} style={{ textDecoration: "none" }}>
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
    </Link>
  )
}

export default Pet
