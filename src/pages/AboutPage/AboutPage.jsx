import React from "react";
import "./AboutPage.css";
import abtdata from "./abtdata";
import parse from "html-react-parser";
import socials from "./socials";

const AboutPage = () => {
  return (
    <div className="about__main">
      <div className="about__header page__headers pixel__font">
        <h2 className="page__header">
          Home / <span className="color__hp">About</span>
        </h2>
      </div>
      <div className="about__content page__contents normal__font">
        <p className="about__page__header">
          I am a BTech CSE student, a cyber security and blockchain enthusiast.
          I am also a full stack developer and web designer.
        </p>
        <div className="social__links">
          {socials.map((soc) => {
            return (
              <a className="social" href={soc.link} key={soc.id}>
                <img src={soc.icon} alt={soc.icon}></img>
              </a>
            );
          })}
        </div>
        <div className="about__cards">
          {abtdata.map((card) => {
            const { title, id, technologies, content } = card;
            return (
              <div className="card__about normal__font" key={id}>
                <h2 className="card__tile">{parse(title)}</h2>
                <p className="card__content">{parse(content)}</p>
                <ul className="techs__about__card">
                  {technologies.map((tech) => {
                    return <li>{tech}</li>;
                  })}
                </ul>
                {card.profile_links && (
                  <div className="profiles">
                    <p>Profiles :</p>
                    {card.profile_links.map((profile) => {
                      return (
                        <a
                          href={profile.link}
                          className="profile__card__cs display__flex"
                        >
                          <img src={profile.icon} alt="profile__icon"></img>
                          <p>{profile.platform}</p>
                        </a>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
