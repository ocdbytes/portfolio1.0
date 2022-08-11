import React from "react";
import "./LandingPage.css";
import StatusCol from "../../Components/StatusCol/StatusCol";
import CenterPicture from "../../Components/CenterPicture/CenterPicture";
import socials from "../AboutPage/socials";

const LandingPage = () => {
  return (
    <div className="landing__main display__flex">
      <div className="landing__page__box display__flex flex__flow__down">
        <CenterPicture />
        <div className="socials display__flex">
          {socials.map((soc) => {
            return (
              <a className="social" href={soc.link} key={soc.id}>
                <img src={soc.icon} alt={soc.icon}></img>
              </a>
            );
          })}
        </div>
      </div>
      <StatusCol />
    </div>
  );
};

export default LandingPage;
