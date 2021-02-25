import React, { useState } from "react";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <nav className="Navbar">
      <div
        className={clicked ? "menu-icon active" : "menu-icon"}
        onClick={() => setClicked(!clicked)}
      >
        <FontAwesomeIcon icon={clicked ? faTimes : faBars} />
      </div>

      <ul className={clicked ? "nav-menu active" : "nav-menu"}>
        <Link
          className="nav-item"
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          onClick={() => setClicked(false)}
        >
          <li>About</li>
        </Link>

        <Link
          className="nav-item"
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          onClick={() => setClicked(false)}
        >
          <li>Projects</li>
        </Link>

        <Link
          className="nav-item"
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          onClick={() => setClicked(false)}
        >
          <li>Contact</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
