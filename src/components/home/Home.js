import React from "react";
import "./home.css";
import TypingEffect from "../../utility/typewriter";
import { GithubIcon, LinkedInIcon, MailIcon } from "../../utility/avtaricons";

import dp from "../../assets/images/divyanshu verma.jpg";

const Home = () => {
  return (
    <div id="home" className="home_main">
      <div className="name_sec">
        <h1>
          Hi, I'm <br />
          Divyanshu Verma
        </h1>
        <div className="typingeffect">
          <TypingEffect />
        </div>
        <div className="contact_icons">
          <a href="https://www.google.com/" target="_blank" rel="noreferrer">
            <LinkedInIcon />
          </a>
          <MailIcon />
          <GithubIcon />
        </div>
      </div>
      <div className="image_sec">
        <img src={dp} alt="Divyanshu Verma" />
      </div>
    </div>
  );
};

export default Home;
