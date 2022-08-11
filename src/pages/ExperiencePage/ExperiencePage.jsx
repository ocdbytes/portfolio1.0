import React from "react";
import ExperienceCard from "../../Components/ExperienceCard/ExperienceCard";
import experiencedat from "./experiencedat";
import "./ExperiencePage.css";

const ExperiencePage = () => {
  return (
    <div className="experience__main">
      <div className="page__headers pixel__font experience__header">
        <h2 className="page__header">
          Home / <span className="color__hp">Experience</span>
        </h2>
      </div>
      <div className="page__contents">
        {experiencedat.map((experience_card_profile) => {
          return <ExperienceCard data={experience_card_profile} />;
        })}
      </div>
    </div>
  );
};

export default ExperiencePage;
