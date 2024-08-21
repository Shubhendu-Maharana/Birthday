import React from "react";
import "./Sprinkles.css";
import Confetti from "./Confetti";

const getRandomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomColor = () => `hsl(${getRandomInt(0, 360)}, 100%, 50%)`;

const Sprinkles = () => {
  const sprinkles = [...Array(getRandomInt(3, 100))].map((_, index) => {
    const left = getRandomInt(0, 100);
    const size = getRandomInt(40, 400);
    const duration = getRandomInt(2, 5);
    const delay = getRandomInt(5, 10);

    const style = {
      left: `${left}%`,
      width: "180px",
      height: `${size}px`,
      animationDuration: `${duration}s`,
      animationDelay: `${delay}s`,
    };

    return (
      <div key={index} className="sprinkle" style={style}>
        <Confetti color={getRandomColor()} />
      </div>
    );
  });

  return <div className="sprinkles-container">{sprinkles}</div>;
};

export default Sprinkles;
