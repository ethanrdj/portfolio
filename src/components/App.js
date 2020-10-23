import React from "react";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import NavBar from "./NavBar";
import Headers from "./Headers";

import "../styles/main.scss";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Headers />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
