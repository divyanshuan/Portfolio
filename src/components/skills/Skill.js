import React from "react";
import "./skill.css";
import skillimage from "../../assets/images/skill.svg";
import {
  AntdesignIcon,
  BootstrapIcon,
  CplusplusIcon,
  CssIcon,
  HerokuIcon,
  HtmlIcon,
  JavascriptIcon,
  LaravelIcon,
  MaterialuiIcon,
  MysqlIcon,
  NetlifyIcon,
  NodejsIcon,
  PythonIcon,
  ReactjsIcon,
  VarcelIcon,
  FirebaseIcon,
  PostmanIcon,
  GitIcon,
  LinuxIcon,
  GithubIcon,
} from "../../utility/skillsicons";

const Skill = () => {
  return (
    <div className="main_skill_body" id="skill">
      <div className="skill_image">
        <h1>Skills</h1>
        <img src={skillimage} alt="skillimage" />
      </div>
      <div className="skill_main_content">
        <div className="skill_part">
          <h1>Language Known</h1>
          <div className="skill_logo">
            <JavascriptIcon />
            <PythonIcon />
            <CplusplusIcon />
            <HtmlIcon />
            <CssIcon />
            <LaravelIcon />
          </div>
        </div>

        <div className="skill_part">
          <h1>Frontend</h1>
          <div className="skill_logo">
            <ReactjsIcon />
            <VarcelIcon />
            <MaterialuiIcon />
            <AntdesignIcon />
            <NetlifyIcon />
            <BootstrapIcon />
          </div>
        </div>
        <div className="skill_part">
          <h1>Backend, Database, Cloud</h1>
          <div className="skill_logo">
            <LaravelIcon />
            <NodejsIcon />
            <MysqlIcon />
            <FirebaseIcon />
            <HerokuIcon />
          </div>
        </div>
        <div className="skill_part">
          <h1>Tools</h1>
          <div className="skill_logo">
            <PostmanIcon />
            <GithubIcon />
            <LinuxIcon />
            <GitIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
