import React from "react";

const Home = () => {
  return (
    <div className="Home">
      <h3 className="home-headers home-name">Hi! I'm Ethan Davis</h3>
      <h1 className="home-headers home-role">Frontend Developer.</h1>

      <button className="home-button">Download CV</button>
      <svg
        className="curve"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1290 319"
      >
        <path
          fill="#fff"
          fillOpacity="1"
          d="M0,192L60,170.7C120,149,240,107,360,106.7C480,107,600,149,720,154.7C840,160,960,128,1080,101.3C1200,75,1320,53,1380,42.7L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};

export default Home;
