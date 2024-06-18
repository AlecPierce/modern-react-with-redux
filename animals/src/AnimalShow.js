import { useState } from "react";
import dog from "./svgs/dog.svg";
import cat from "./svgs/cat.svg";
import bird from "./svgs/bird.svg";
import horse from "./svgs/horse.svg";
import cow from "./svgs/cow.svg";
import gator from "./svgs/gator.svg";
import heart from "./svgs/heart.svg";
import "./AnimalShow.css";

const svgMap = { bird, cat, cow, dog, horse, gator };

function AnimalShow({ type }) {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks(clicks + 1);
  };

  return (
    <div className="animal-show" onClick={handleClick}>
      {/* <h1>{animal.name}</h1>
      <h2>{animal.species}</h2>
      <h3>{animal.age}</h3> */}
      <img className="animal" src={svgMap[type]} alt="animal" />
      <img
        className="heart"
        style={{
          width: 10 + 10 * clicks + "px",
          height: 10 + 10 * clicks + "px",
        }}
        src={heart}
        alt="heart"
      />
    </div>
  );
}

export default AnimalShow;
