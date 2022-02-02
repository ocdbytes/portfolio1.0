import React from "react";
import TerminalBar from "../../Components/TerminalBar/TerminalBar";
import "./AboutPage.css";
import abtdata from "./abtdata";
import parse from "html-react-parser";
const AboutPage = () => {
  //   const parse = HTMLReactParser();
  return (
    <div className="about__main">
      <div className="about__header page__headers pixel__font">
        <h1 className="page__header">
          Home / <span className="color__hp">About</span>
        </h1>
        <TerminalBar />
      </div>
      <div className="about__content page__contents">
        <p className="content__font">
          Myself Arun Jangra. I am a cyber security enthusiast, I am also a web
          developer and designer. I am currently persuing B.Tech in Computer
          Science Engineering. I am also interested in Blockchain Development
          and Crypto Fundamentals.
        </p>
        <div className="about__cards">
          {abtdata.map((card) => {
            const { title, id, technologies, content } = card;
            return (
              <div className="card__about" key={id}>
                <h2 className="pixel__font card__tile">{parse(title)}</h2>
                <div className="card__images">
                  {technologies.map((tech) => {
                    return (
                      <img
                        src={tech}
                        alt={tech}
                        className="skills__icon"
                        key={tech}
                      ></img>
                    );
                  })}
                </div>
                <p className="card__content">{content}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
