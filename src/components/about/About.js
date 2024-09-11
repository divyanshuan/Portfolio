import React from "react";
import "./about.css";
import dp from "../../assets/images/divyanshu verma.jpg";
import { FacebookIcon, InstagramIcon } from "../../utility/avtaricons";

const About = () => {
  return (
    <div className="main_about" id="about">
      <div className="image_sec_about">
        <img src={dp} alt="Divyanshu Verma" />
        <div className="contact_icons">
          <a
            href="https://instagram.com/divyanshuanandverma?r=nametag"
            target="_blank"
            rel="noreferrer"
          >
            <InstagramIcon />
          </a>
          <a
            href="https://www.facebook.com/divyanshu.anandverma"
            target="_blank"
            rel="noreferrer"
          >
            <FacebookIcon />
          </a>
        </div>
      </div>
      <div className="content_sec_about">
        <h1>About Me</h1>
        <p>
          I am a full-stack web developer, pursuing my B.Tech in Computer
          Science & Engineering from Central University of Haryana. I strive to
          make meaningful websites with the best UI practices and I love to know
          about technologies and pretty much excited to learn new things of
          modern technical world.
        </p>
      </div>
    </div>
  );
};

export default About;
