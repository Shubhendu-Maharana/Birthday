import React from "react";
import Balloons from "./components/Balloons";
import Sprinkles from "./components/Sprinkles";
import Notebook from "./Notebook";

const Homepage = () => {
  return (
    <div className="h-screen bg-[url('/src/assets/hero2.jpg')] bg-cover bg-no-repeat scale-in-center overflow-hidden">
      <div className="min-h-screen flex items-start justify-center p-4 snap-center">
        <Balloons />
        <Sprinkles />
        <Notebook />
      </div>
    </div>
  );
};

export default Homepage;
