import React from "react";
import TerminalBar from "../../Components/TerminalBar/TerminalBar";
import achievementsdata from "./achievementsdata";
import "./AchievementsPage.css";
import CertCard from "./CertCard/CertCard";

const AchievementsPage = () => {
  return (
    <div className="achievements__main">
      <div className="about__header page__headers pixel__font">
        <h1 className="page__header">
          Home / <span className="color__hp">Achievements</span>
        </h1>
        <TerminalBar />
      </div>
      <div className="page__contents achievements__content">
        {achievementsdata.map((data) => {
          return <CertCard data={data} key={data.id} />;
        })}
      </div>
    </div>
  );
};

export default AchievementsPage;
