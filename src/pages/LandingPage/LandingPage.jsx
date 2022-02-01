import React from "react";
import "./LandingPage.css";
import StatusCol from "../../Components/StatusCol/StatusCol";
import TerminalBar from "../../Components/TerminalBar/TerminalBar";
import CenterPicture from "../../Components/CenterPicture/CenterPicture";

const LandingPage = () => {
  return (
    <div className="landing__main display__flex">
      <div className="landing__page__box display__flex flex__flow__down">
        <CenterPicture />
        <TerminalBar />
      </div>
      <StatusCol />
    </div>
  );
};

export default LandingPage;
