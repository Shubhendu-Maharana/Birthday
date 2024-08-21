import React from "react";
import "./Balloons.css";
import Balloon from "./Balloon";

const getRandomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomColor = () => `hsl(${getRandomInt(0, 360)}, 100%, 50%)`;

const Balloons = () => {
  const balloons = [...Array(getRandomInt(5, 15))].map((_, index) => {
    const size = getRandomInt(40, 150);
    const left = getRandomInt(0, 100);
    const duration = getRandomInt(4, 10);

    const style = {
      width: `${size}px`,
      height: `${size * 1.4}px`,
      left: `${left}%`,
      animationDuration: `${duration}s`,
    };

    return (
      <div key={index} className="balloon" style={style}>
        <Balloon color={getRandomColor()} />
      </div>
    );
  });

  return <div className="balloon-container">{balloons}</div>;
};

export default Balloons;
