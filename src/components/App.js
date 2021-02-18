import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";

import "../styles/main.scss";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
    </div>
  );
}

export default App;
