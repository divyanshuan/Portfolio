import React from "react";
import "./home.css";
import TypingEffect from "../../utility/typewriter";
import {
  GithubIcon,
  LeetcodeIcon,
  LinkedInIcon,
  MailIcon,
} from "../../utility/avtaricons";

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
          <a
            href="https://linkedin.com/in/divyanshuan"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
          </a>
          <a href="mailto:divyanshuvermaji@gmail.com">
            <MailIcon />
          </a>
          <a
            href="https://github.com/divyanshuan"
            target="_blank"
            rel="noreferrer"
          >
            <GithubIcon />
          </a>
          <a
            href="https://leetcode.com/divyanshuan/"
            target="_blank"
            rel="noreferrer"
          >
            <LeetcodeIcon />
          </a>
        </div>
      </div>
      <div className="image_sec">
        <img src={dp} alt="Divyanshu Verma" />
      </div>
    </div>
  );
};

export default Home;
