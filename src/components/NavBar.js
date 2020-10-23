import React from "react";
import { Link } from "react-scroll";

const NavBar = () => {
  return (
    <div className="NavBar">
      <ul className="nav-list">
        <li className="nav-items">
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            About
          </Link>
        </li>
        <li className="nav-items">
          <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            Projects
          </Link>
        </li>
        <li className="nav-items">
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
