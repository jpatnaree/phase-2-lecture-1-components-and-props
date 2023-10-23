import React from "react"
import Pet from "./Pet"

function PetList({pets}) {
  // console.log(pets)
  return  <main>
            <ul className="pet-list">{
              //render Pet Component in here
              pets.map((pet) => {
                console.log(pet)
                return <Pet  pet={pet} key={pet.id}/>
              })
            }
            </ul>
          </main>
}

export default PetList