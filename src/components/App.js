import React from "react";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

import "../styles/main.scss";

function App() {
  return (
    <div className="App">
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
