import React from "react";
import mc from "../images/mc.jpeg";
import sunny from "../images/sunny.jpeg";
import ron from "../images/ron.jpeg";
import surreal from "../images/surreal.png";
import nasa from "../images/nasa.png";
import music from "../images/music.png";
import { animateScroll } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleUp } from "@fortawesome/free-solid-svg-icons";

const Projects = () => {
  const handleScrollToTop = () => {
    animateScroll.scrollToTop();
  };
  return (
    <div className="Projects" id="projects">
      <h2 className="projects-header">Projects</h2>
      <div className="all-projects">
        <div className="project-box">
          <img className="project-image" src={sunny} alt="mc"></img>
          <div className="project-info">
            <h3 className="project-title">The Gang Finds an Episode</h3>
            <p className="project-para">
              I built this app to help me decide which episode of my favourite
              TV show to watch, as I must have watched each episode over 10
              times. I built the full backend using Express and MongoDB, filling
              the database with over 100 episodes worth of information. Then
              built the frontend on React.
            </p>
            <a href="https://sunny-ep-finder.vercel.app/">
              <button className="project-button">Visit Site</button>
            </a>
            <a href="https://github.com/ethanrdj/sunny-ep-finder">
              <button className="project-button">Visit Code</button>
            </a>
          </div>
        </div>
        <div className="project-box">
          <img className="project-image" src={ron} alt="mc"></img>
          <div className="project-info">
            <h3 className="project-title">Ron Swanson Quote Generator</h3>
            <p className="project-para">
              This app was built to enjoy the wise words from the man himself,
              Ron Swanson. I built this app on React using a public API that
              allows users to get a random quote, or search for a quote via a
              keyword.
            </p>
            <a href="https://ronswanson.vercel.app/">
              <button className="project-button">Visit Site</button>
            </a>
            <a href="https://github.com/ethanrdj/ronswanson">
              <button className="project-button">Visit Code</button>
            </a>
          </div>
        </div>
        <div className="project-box">
          <img className="project-image" src={mc} alt="mc"></img>
          <div className="project-info">
            <h3 className="project-title">Marvelous Cranes</h3>
            <p className="project-para">
              This was my final project in which I worked with 3 others to
              create an app that allows users share their images of the metal
              giants, cranes. It was inspired by Roy Malloys' instagram,
              @marvelouscrane. It was built on React, Express and MongoDB. I
              focussed on building the dynamic frontend and linked the entirety
              to the backend.
            </p>
            <a href="https://www.marvelouscranes.com/">
              <button className="project-button">Visit Site</button>
            </a>
            <a href="https://github.com/jbram-js/marvelous-cranes">
              <button className="project-button">Visit Code</button>
            </a>
          </div>
        </div>
        <div className="project-box">
          <img className="project-image landscape" src={surreal} alt="mc"></img>
          <div className="project-info">
            <h3 className="project-title">Surreal Estate</h3>
            <p className="project-para">
              Surreal Estate is a estate agency website in which a user can add
              a property, view all properties or filter by the city. They can
              also login via Facebook and save their favourite properties. The
              site was built on React.
            </p>
            <a href="https://github.com/ethanrdj/surreal-estate">
              <button className="project-button">Visit Code</button>
            </a>
          </div>
        </div>
        <div className="project-box">
          <img className="project-image" src={nasa} alt="mc"></img>
          <div className="project-info">
            <h3 className="project-title">React Tech Test</h3>
            <p className="project-para">
              This was a project designed to prepare me for future tech tests
              that I may face. I needed to use a search API to create an app
              that allows a user to search for an inter-galactic object and
              display the results. The app was built on React.
            </p>
            <a href="https://github.com/ethanrdj/react-tech-test">
              <button className="project-button">Visit Code</button>
            </a>
          </div>
        </div>
        <div className="project-box">
          <img className="project-image landscape" src={music} alt="mc"></img>
          <div className="project-info">
            <h3 className="project-title">Music Library API</h3>
            <p className="project-para">
              This project created a CRUD API which allows you to store
              information about artists, albums and songs. It was created using
              Express, a MySQL database and Sequelize to create the schemas.
              Tests were written using Mocha and Chai.
            </p>
            <a href="https://github.com/ethanrdj/music-library-api-mysql">
              <button className="project-button">Visit Code</button>
            </a>
          </div>
        </div>
      </div>
      <span className="scroll-button" onClick={() => handleScrollToTop()}>
        <FontAwesomeIcon icon={faChevronCircleUp} size="2x" />
      </span>
    </div>
  );
};

export default Projects;
