import React from "react";
import TerminalBar from "../../Components/TerminalBar/TerminalBar";
import "./ExperiencePage.css";
const ExperiencePage = () => {
  return (
    <div className="experience__main">
      <div className="page__headers pixel__font experience__header">
        <h1 className="page__header">
          Home / <span className="color__hp">Experience</span>
        </h1>
        <TerminalBar />
      </div>
      <div className="page__contents">
        <div className="experience__card">
          <h2 className="pixel__font">
            <span className="color__nb">Web</span> Developer - DS Community
          </h2>
          <div className="experience__card__main normal__font display__flex">
            <img
              className="org__logo"
              src="https://drive.google.com/uc?export=view&id=14ghH2_R8Oimt34ivB-pZcSYQXlJAB9d3"
              alt="org__logo"
            ></img>
            <div className="experience__content">
              <p>2020 - Present</p>
              <h3>Technical associate</h3>
              <p>Web Developer</p>
            </div>
          </div>
        </div>
        <div className="experience__card">
          <h2 className="pixel__font">
            <span className="color__nb">Web</span> Developer - CCSC SRM
          </h2>
          <div className="experience__card__main normal__font display__flex">
            <img
              className="org__logo"
              src="https://drive.google.com/uc?export=view&id=134JhlGtwGwtY8DENfVbqq6a5BgWqfUe_"
              alt="org__logo"
            ></img>
            <div className="experience__content">
              <p>2020 - Present</p>
              <h3>Technical associate</h3>
              <p>Web Developer</p>
            </div>
          </div>
        </div>
        <div className="experience__card">
          <h2 className="pixel__font">
            <span className="color__nb">Cyber</span> Security
          </h2>
          <div className="experience__card__main normal__font" id="thm">
            <iframe
              title="thm"
              className="tag__frame"
              srcDoc={`
              <script src="https://tryhackme.com/badge/698591"></script>
              `}
            ></iframe>
            <div>
              <p className="exp__para">
                I have been practising machines on TryHackMe, VulnHub and
                HackTheBox on the daily basis
              </p>
              <p className="p__link display__flex">
                <a
                  href="https://tryhackme.com/p/arun.89creator"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <b>THM Profile -&gt;</b>{" "}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;
