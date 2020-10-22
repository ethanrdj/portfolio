import React from "react";
import me from "../images/me.png";

const About = () => {
  return (
    <div className="About">
      <img src={me} alt="me" className="ethan-pic"></img>
      <h1>Ethan Davis</h1>
      <h2>Junior Frontend Developer</h2>

      <p className="about-p">
        At the start of 2020, I decided to take the plunge and learn how to code
        with Manchester Codes Academy. I was taught by real Software Engineers
        and learnt best practices in full-stack development. I found that I had
        a real passion for creating user interfaces with React and I am now
        eager to begin a career as a Frontend Developer. <br />
        <br></br>
        <strong>Some of the skills I learnt are listed below:</strong>
        <br />
        JavaScript, React, Node.js, Express.js, MySQL, MongoDB, Sass/Scss,
        HTML5, CSS3, TDD.
      </p>
      <hr></hr>
    </div>
  );
};

export default About;
