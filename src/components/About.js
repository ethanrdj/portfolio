import React from "react";
import me from "../images/me.png";
import { SocialIcon } from "react-social-icons";

import js from "../images/js.svg";
import react from "../images/react.svg";
import html from "../images/html.svg";
import css from "../images/css.svg";
import sass from "../images/sass.svg";
import node from "../images/node.svg";

const About = () => {
  return (
    <div className="About" id="about">
      <h1 className="about-header">About</h1>
      <div className="all-info">
        <div className="left">
          <img className="me-pic" src={me} alt="me" />
          <div className="details-list">
            <span className="list-item">
              <SocialIcon
                target="#"
                url="https://github.com/ethanrdj"
                network="github"
                bgColor="#000000"
                style={{ height: 25, width: 25 }}
              />
              &nbsp;&nbsp;
              <a
                className="social-links"
                href="https://www.github.com/ethanrdj"
                target="#"
              >
                github.com/ethanrdj
              </a>
            </span>
            <span className="list-item">
              <SocialIcon
                url="https://www.linkedin.com/in/ethanrdj/"
                target="#"
                network="linkedin"
                bgColor="#000000"
                style={{ height: 25, width: 25 }}
              />
              &nbsp;&nbsp;
              <a
                className="social-links"
                href="https://www.linkedin.com/in/ethanrdj/"
                target="#"
              >
                linkedin.com/in/ethanrdj
              </a>
            </span>
            <span className="list-item">
              <SocialIcon
                target="#"
                url="mailto: ethanrdavis96@gmail.com"
                network="mailto"
                bgColor="#000000"
                style={{ height: 25, width: 25 }}
              />
              &nbsp;&nbsp;
              <a
                className="social-links"
                href="mailto: ethanrdavis96@gmail.com"
                target="#"
              >
                ethanrdavis96@gmail.com
              </a>
            </span>
          </div>
        </div>
        <div className="right">
          <p className="about-para">
            I am a Business Management graduate who has always had a passion of
            technology and a love of being challenged and creative, so with this
            I decided to learn how to code and begin a career as a Software
            Developer. I chose to join Manchester Codes Academy so I could be
            taught by real developers and learn the latest industry best
            practices in full-stack development.
            <br />
            <br /> I found that I have a real passion for creating user
            interfaces with React and I am now eager to begin a career as a
            Frontend Developer.
          </p>
          <div className="icons">
            <img src={js} alt="js-icon" className="icon" />
            <img src={react} alt="react-icon" className="icon" />
            <img src={html} alt="html-icon" className="icon" />
            <img src={css} alt="css-icon" className="icon" />
            <img src={sass} alt="sass-icon" className="icon" />
            <img src={node} alt="node-icon" className="icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
