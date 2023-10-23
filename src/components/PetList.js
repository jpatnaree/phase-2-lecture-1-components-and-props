import React from "react"
import Pet from "./Pet"

function PetList({pets}) {
  // console.log(pets)
  return  <main>
            <ul className="pet-list">{
              pets.map((pet) => {
                return <Pet  pet={pet} key={pet.id}/>
              })
            }
            </ul>
          </main>
}

export default PetList