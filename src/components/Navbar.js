import React, { useState } from "react";
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
        <li className="nav-item">About</li>
        <li className="nav-item">Projects</li>
        <li className="nav-item">Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
