import React from "react"
import Header from "./Header"
import PetList from "./PetList"
// import Pet from "./Pet" >> No need, already inside PetList

function App() {

  const pets = [
    {
        id: 1,
        name: "Fido",
        image: "./images/dog.jpeg"
    },
    {
        id: 2,
        name: "Kitty",
        image: "./images/cat.png"
    },
    {
        id: 3,
        name: "Hammy",
        image: "./images/hamster.jpeg"
    },
    {
        id: 4,
        name: "Polly",
        image: "./images/parrot.jpeg"
    },
    {
        id: 5,
        name: "Angel",
        image: "./images/horse.jpeg"
    },
    {
        id: 6,
        name: "Fluffy",
        image: "./images/guinea-pig.jpeg"
    },
    {
        id: 7,
        name: "Goldie",
        image: "./images/fish.jpeg"
    }
  ]

  console.log(pets)

  return (
    <div className="app">
      <Header />
      <PetList pets={pets} />
    </div>
  );
}

export default App;