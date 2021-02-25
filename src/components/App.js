import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import Loader from "./Loader";

import "../styles/main.scss";

function App() {
  const [loaded, setLoaded] = useState(true);

  useEffect(() => {
    setInterval(() => {
      setLoaded(false);
    }, 3000);
  });
  return (
    <div className="App">
      {loaded && <Loader />}
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
