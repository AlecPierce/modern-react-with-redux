import AnimalShow from "./AnimalShow";
import { useState } from "react";
import "./App.css";

function randomAnimal() {
  const animals = ["bird", "cat", "cow", "dog", "horse", "gator"];

  return animals[Math.floor(Math.random() * animals.length)];
}

function App() {
  const [animals, setAnimals] = useState([]);
  // const [count, setCount] = useState(0);

  const handleClick = () => {
    // setCount(count + 1);
    setAnimals([...animals, randomAnimal()]);
  };

  const renderedAnimals = animals.map((animal, index) => (
    <AnimalShow key={index} type={animal} />
  ));

  return (
    <div className="app">
      <h1>Animals</h1>
      <button onClick={handleClick}>Add Animal</button>
      <div className="animal-list">{renderedAnimals}</div>
      {/* <div>Number of Animals: {count}</div> */}
      {/* <AnimalShow animal={{ name: "Lion", species: "Panthera leo", age: 8 }} />
      <AnimalShow
        animal={{ name: "Elephant", species: "Loxodonta", age: 12 }}
      />
      <AnimalShow animal={{ name: "Giraffe", species: "Giraffa", age: 10 }} /> */}
    </div>
  );
}

export default App;
