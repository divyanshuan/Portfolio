import React from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import "./index.css";
import Skill from "./components/skills/Skill";
import Projects from "./components/projects/Projects";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="main_components">
        <Home />
        <Skill />
        <Projects />
      </div>
    </>
  );
};

export default App;
