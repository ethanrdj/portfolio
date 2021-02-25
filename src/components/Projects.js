import React from "react";

import authen from "../images/authen.png";
import kys from "../images/kys.png";
import sunny from "../images/sunny.png";
import ron from "../images/ron.png";
import mc from "../images/mc.png";
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
      <h1 className="main-projects-header">Projects</h1>

      <div className="project-container">
        <h3 className="indi-project-header">Authentication App</h3>

        <img className="screenshot" src={authen} alt="screenshot" />

        <div className="project-side">
          <p className="project-para">
            This project allows users to create an account and login. The login
            process authenticates the users details and alerts them if there is
            an error. The frontend is a build of React and SASS while the
            backend is built with Express, MongoDB, Mongoose and Bcrypt to hash
            the users password for added security.
          </p>
          <div className="buttons">
            <div className="view-code">
              <a
                className="project-link code"
                href="https://github.com/ethanrdj/authentication"
                target="blank"
              >
                View Code
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="project-container laptop">
        <h3 className="indi-project-header">Keep Your Space</h3>
        <div className="switch">
          <img className="screenshot" src={kys} alt="screenshot" />
          <div className="project-side">
            <p className="project-para">
              I built this app using React, CSS and NASAs open APOD API. You can
              see the Astronomical Picture Of The Day and learn about all of the
              planets in our Solar System.
            </p>
            <div className="buttons">
              <div className="view-site">
                <a
                  className="project-link site"
                  href="https://keep-your-space.vercel.app/"
                  target="blank"
                >
                  View Site
                </a>
              </div>
              <div className="view-code">
                <a
                  className="project-link code"
                  href="https://github.com/ethanrdj/astronomy-app"
                  target="blank"
                >
                  View Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="project-container mobile">
        <h3 className="indi-project-header mob">The Gang Finds an Episode</h3>

        <img className="screenshot" src={sunny} alt="screenshot" />

        <div className="project-side">
          <p className="project-para">
            I built this app to help me decide which episode of my favourite TV
            show to watch, as I must have watched each episode over 10 times. I
            built the full backend using Express and MongoDB, filling the
            database with over 100 episodes worth of information. Then built the
            frontend on React.
          </p>
          <div className="buttons">
            <div className="view-site">
              <a
                className="project-link site"
                href="https://sunny-ep-finder.vercel.app/"
                target="blank"
              >
                View Site
              </a>
            </div>
            <div className="view-code">
              <a
                className="project-link code"
                href="https://github.com/ethanrdj/sunny-ep-finder"
                target="blank"
              >
                View Code
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="project-container mobile">
        <h3 className="indi-project-header mob">Ron Swanson Quote Generator</h3>
        <div className="switch">
          <img className="screenshot" src={ron} alt="screenshot" />
          <div className="project-side">
            <p className="project-para">
              This app was built to enjoy the wise words from the man himself,
              Ron Swanson. I built this app on React using a public API that
              allows users to get a random quote, or search for a quote via a
              keyword.
            </p>
            <div className="buttons">
              <div className="view-site">
                <a
                  className="project-link site"
                  href="https://ronswanson.vercel.app/"
                  target="blank"
                >
                  View Site
                </a>
              </div>
              <div className="view-code">
                <a
                  className="project-link code"
                  href="https://github.com/ethanrdj/ronswanson"
                  target="blank"
                >
                  View Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="project-container">
        <h3 className="indi-project-header mob">Marvelous Cranes</h3>

        <img className="screenshot" src={mc} alt="screenshot" />

        <div className="project-side">
          <p className="project-para">
            This was my final project in which I worked with 3 others to create
            an app that allows users share their images of the metal giants,
            cranes. It was inspired by Roy Malloys' instagram, @marvelouscrane.
            It was built on React, Express and MongoDB. I focussed on building
            the dynamic frontend and linked the entirety to the backend.
          </p>
          <div className="buttons">
            <div className="view-site">
              <a
                className="project-link site"
                href="https://www.marvelouscranes.com/"
                target="blank"
              >
                View Site
              </a>
            </div>
            <div className="view-code">
              <a
                className="project-link code"
                href="https://github.com/jbram-js/marvelous-cranes"
                target="blank"
              >
                View Code
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="project-container laptop">
        <h3 className="indi-project-header">Surreal Estate</h3>
        <div className="switch">
          <img className="screenshot" src={surreal} alt="screenshot" />
          <div className="project-side">
            <p className="project-para">
              Surreal Estate is a estate agency website in which a user can add
              a property, view all properties or filter by the city. They can
              also login via Facebook and save their favourite properties. The
              site was built on React.
            </p>
            <div className="buttons">
              <div className="view-code">
                <a
                  className="project-link code"
                  href="https://github.com/ethanrdj/surreal-estate"
                  target="blank"
                >
                  View Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="project-container">
        <h3 className="indi-project-header mob">React Tech Test</h3>

        <img className="screenshot" src={nasa} alt="screenshot" />

        <div className="project-side">
          <p className="project-para">
            This was a project designed to prepare me for future tech tests that
            I may face. I needed to use a search API to create an app that
            allows a user to search for an inter-galactic object and display the
            results. The app was built on React.
          </p>
          <div className="buttons">
            <div className="view-code">
              <a
                className="project-link code"
                href="https://github.com/ethanrdj/react-tech-test"
                target="blank"
              >
                View Code
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="project-container laptop">
        <h3 className="indi-project-header">Music Library API</h3>
        <div className="switch">
          <img className="screenshot" src={music} alt="screenshot" />
          <div className="project-side">
            <p className="project-para">
              This project created a CRUD API which allows you to store
              information about artists, albums and songs. It was created using
              Express, a MySQL database and Sequelize to create the schemas.
              Tests were written using Mocha and Chai.
            </p>
            <div className="buttons">
              <div className="view-code">
                <a
                  className="project-link code"
                  href="https://github.com/ethanrdj/music-library-api-mysql"
                  target="blank"
                >
                  View Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <span className="scroll-button" onClick={() => handleScrollToTop()}>
        <FontAwesomeIcon icon={faChevronCircleUp} size="2x" />
      </span>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319">
        <path
          fill="#001e1e"
          fill-opacity="1"
          d="M0,64L40,58.7C80,53,160,43,240,80C320,117,400,203,480,218.7C560,235,640,181,720,181.3C800,181,880,235,960,224C1040,213,1120,139,1200,122.7C1280,107,1360,149,1400,170.7L1440,192L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};

export default Projects;
