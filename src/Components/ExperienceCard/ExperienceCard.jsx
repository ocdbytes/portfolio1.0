import React from "react";
import "./ExperienceCard.css";
const ExperienceCard = ({ data }) => {
  return (
    <div className="experiece_card_main normal__font">
      <div className="organisation display__flex">
        {data.Logo.includes("https:") === true ? (
          <img
            src={data.Logo}
            alt="data_logo_experience_card"
            className="organisation_logo_image"
          ></img>
        ) : (
          <h3 className="organisation_logo_text display__flex">{data.Logo}</h3>
        )}
        <h3 className="organisation_name">{data.Organisation}</h3>
      </div>
      <div className="roles_section_card">
        {data.Roles.map((role) => {
          return (
            <div className="roles_card">
              <p className="roles_card_title">{role.title}</p>
              <p className="roles_card_date">
                {role.from_date} - {role.to_date}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExperienceCard;
