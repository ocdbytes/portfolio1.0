import React from "react";
import pjtdata from "./pjtdata";
import "./ProjectsPage.css";
import GithubLogo from "../../assets/svgs/github.svg";
const ProjectsPage = () => {
  return (
    <div className="projects__main">
      <div className="page__headers pixel__font blogs__header">
        <h2 className="page__header">
          Home / <span className="color__hp">Projects</span>
        </h2>
      </div>
      <div className="projects__content page__contents">
        {pjtdata.map((project) => {
          const { name, team, description, tech, icon, github } = project;
          return (
            <div className="project__card normal__font" key={github}>
              {team ? <div className="team__tag">Team</div> : ""}
              <img
                className="project__card__icon"
                src={icon}
                alt="p_card_logo"
              ></img>
              <div className="project__card__up">
                <p className="project__head">{name}</p>
                <p className="project__disc">{description}</p>
                <div className="project__tech">
                  <p className="color__nb">Tech Used :</p>
                  <br></br>
                  <ul>
                    {tech.map((technology, i) => {
                      return <li key={technology}>{technology}</li>;
                    })}
                  </ul>
                </div>
              </div>
              <div className="project__card__down">
                <a
                  href={github}
                  className="git__link"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <img src={GithubLogo} alt="github_logo"></img>
                  <p>&nbsp;Link -&gt;</p>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsPage;
