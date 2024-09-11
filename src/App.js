import React from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import "./index.css";
import Skill from "./components/skills/Skill";
import Projects from "./components/projects/Projects";
import Experience from "./components/experience/Experience";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="main_components">
        <Home />
        <Skill />
        <Projects />
        <Experience />
        <Contact />
        <About />
      </div>
    </>
  );
};

export default App;
