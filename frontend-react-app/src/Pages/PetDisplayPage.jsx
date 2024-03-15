import React, { useContext } from "react"
import { useParams } from "react-router-dom"
import { PetContext } from "../Context/PetContext"
import PetDisplay from "../Components/PetDisplay/PetDisplay"

const PetDisplayPage = () => {
  const { data } = useContext(PetContext)
  const { petId } = useParams()
  const pet = data.find((e) => e.id === Number(petId))

  return (
    <div>
      <PetDisplay pet={pet} />
    </div>
  )
}

export default PetDisplayPage
