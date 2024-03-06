import React, { useContext } from "react"
import "./HomePageRight.css"
import Pet from "../Pet/Pet"
import { PetContext } from "../../Context/PetContext"

const HomePageRight = () => {
  const { data } = useContext(PetContext)

  return (
    <div className="home__right">
      {data.map((item, i) => {
        return (
          <Pet
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            breed={item.breed}
            age={item.age}
          />
        )
      })}
    </div>
  )
}

export default HomePageRight
