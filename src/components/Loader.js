import React from "react";
import rocket from "../images/rocket.svg";
import moon from "../images/moon.svg";

const Loader = () => {
  return (
    <div className="Loader">
      <div className="rocket-container">
        <img src={rocket} alt="rocket" className="rocket"></img>
      </div>
    </div>
  );
};

export default Loader;
