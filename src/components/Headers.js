import React from "react";
import me from "../images/me.png";

const Headers = () => {
  return (
    <div className="Headers">
      <img src={me} alt="me" className="ethan-pic"></img>
      <h1 className="name">Ethan Davis</h1>
      <h2 className="role">Junior Frontend Developer</h2>
      <hr></hr>
    </div>
  );
};

export default Headers;
