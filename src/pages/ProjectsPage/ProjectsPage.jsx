import React from "react";
import TerminalBar from "../../Components/TerminalBar/TerminalBar";
import pjtdata from "./pjtdata";
import "./ProjectsPage.css";

const ProjectsPage = () => {
  return (
    <div className="projects__main">
      <div className="page__headers pixel__font blogs__header">
        <h1 className="page__header">
          Home / <span className="color__hp">Projects</span>
        </h1>
        <TerminalBar />
      </div>
      <div className="projects__content page__contents">
        {pjtdata.map((project) => {
          const { id, name, team, description, tech, icon, github } = project;
          return (
            <div className="project__card normal__font" key={id}>
              {team ? <div className="team__tag">Team</div> : ""}
              <img
                className="project__card__icon"
                src={icon}
                alt="p_card_logo"
              ></img>
              <div className="project__card__up">
                <h2 className="pixel__font project__head">{name}</h2>
                <p className="project__disc">{description}</p>
                <div className="project__tech">
                  {tech.map((technology) => {
                    return (
                      <img
                        src={technology}
                        alt="tech_used"
                        height={"20px"}
                        className="technology__logo"
                      ></img>
                    );
                  })}
                </div>
              </div>
              <div className="project__card__down">
                <a
                  href={github}
                  className="git__link"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    data-name="Layer 1"
                    viewBox="0 0 24 24"
                    fill="#fff"
                  >
                    <path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z" />
                  </svg>
                  <p>Github Link -&gt;</p>
                </a>
              </div>
            </div>
          );
        })}
      </div>
      <div className="github__banner normal__font display__flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          data-name="Layer 1"
          viewBox="0 0 24 24"
          fill="#fff"
          className="github__banner__icon"
        >
          <path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z" />
        </svg>
        <div className="github__banner__content">
          <a
            href="https://github.com/Arun89-crypto"
            target={"_blank"}
            rel="noreferrer"
          >
            <h1>Check out more projects on my github &#8599;</h1>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
