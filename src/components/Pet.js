import React from "react";

function Pet({pet}) {
    console.log(pet)
    return  <li className="pet">
              <img src={pet.image} alt={pet.name} />
              <h4>{pet.name}</h4>
            </li>
}

export default Pet