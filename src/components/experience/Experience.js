import React from "react";
import "./experience.css";
import experienceimg from "../../assets/images/experience.svg";
import projectdata from "../../utility/data.json";

const ExpCard = ({ data }) => {
  return (
    <div className="exp_card">
      <div className="exp_bacground"></div>
      <div className="exp_card_head">
        <h2>{data.companyname}</h2>
        <p>{data.description}</p>
      </div>

      <p>Duration: {data.duration}</p>
    </div>
  );
};
const Experience = () => {
  return (
    <div className="main_experience" id="experience">
      <div className="exp_img_sec">
        <h1>Experience</h1>
        <img src={experienceimg} alt="Experience" />
      </div>
      <div className="exp_detail_sec">
        {projectdata.experiencedetail.map((value, key) => {
          return <ExpCard key={key} data={value} />;
        })}
      </div>
    </div>
  );
};

export default Experience;
