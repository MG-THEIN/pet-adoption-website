import React, { createContext } from "react"
import data from "../Components/Assets/data"

export const PetContext = createContext(null)

const PetContextProvider = (props) => {
  const contextValue = { data }

  return (
    <PetContext.Provider value={contextValue}>
      {props.children}
    </PetContext.Provider>
  )
}

export default PetContextProvider
