import React from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import "./index.css";
import Skill from "./components/skills/Skill";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="main_components">
        <Home />
        <Skill />
      </div>
    </>
  );
};

export default App;
