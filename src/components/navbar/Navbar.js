import React, { useState } from "react";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import "./header.css";
import resume from "../../assets/pdf/Divyanshu_Resume.pdf";

const Navbar = () => {
  const [showham, setShowham] = useState(false);
  return (
    <>
      <nav className="main_nav">
        <div className={showham ? "menu_link_mobile" : "menu_link"}>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#skill">Skills</a>
            </li>
            <li>
              <a href="#project">Projects</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li className="donotshow">
              <a href="#about">About</a>
            </li>
          </ul>
        </div>
        <div className="resume">
          {/* download={resume} */}
          <a href={resume} download={resume}>
            <button variant="primary">my resume</button>
          </a>
        </div>
        <div className="hamburger_menu">
          <div onClick={() => setShowham(!showham)}>
            <MenuRoundedIcon />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
