import React from "react";
import "../styles/variables.scss";
import { SocialIcon } from "react-social-icons";

const Contact = () => {
  return (
    <div className="Contact" id="contact">
      <ul className="contact-list">
        <li className="contact-items">
          <SocialIcon
            url="https://www.linkedin.com/in/ethanrdj/"
            network="linkedin"
            bgColor="#383838"
          />
        </li>
        <li className="contact-items">
          <SocialIcon
            url="https://github.com/ethanrdj"
            network="github"
            bgColor="#383838"
          />
        </li>
        <li className="contact-items">
          <SocialIcon
            url="mailto: ethanrdavis96@gmail.com"
            network="mailto"
            bgColor="383838"
          />
        </li>
      </ul>
    </div>
  );
};

export default Contact;
