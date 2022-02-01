import React from "react";
import "./DirectoriesPopup.css";

const DirectoriesPopup = () => {
  return (
    <div className="dir__main pixel__font">
      <h2>Directories -&gt;</h2>
      <div className="dir__box">
        <h2 className="dir__tags">Experience</h2>
        <h2 className="dir__tags">Projects</h2>
        <h2 className="dir__tags">About</h2>
        <h2 className="dir__tags">Blogs</h2>
        <h2 className="dir__tags">Achievements</h2>
      </div>
    </div>
  );
};

export default DirectoriesPopup;
