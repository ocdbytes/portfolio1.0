import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./DirectoriesPopup.css";

const DirectoriesPopup = () => {
  const [show, setShow] = useState(true);
  const scrollListener = () => {
    document.addEventListener("scroll", () => {
      var scrollTop =
        window.pageYOffset ||
        (document.documentElement || document.body.parentNode || document.body)
          .scrollTop;
      if (scrollTop > 10) {
        setShow(false);
      } else {
        setShow(true);
      }
    });
  };
  useEffect(() => {
    scrollListener();
  }, []);
  return (
    <div
      className={
        show ? "dir__main pixel__font" : "dir__main pixel__font translated_x"
      }
    >
      <h2>Directories -&gt;</h2>
      <div className="dir__box">
        <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
          <h2 className="dir__tags">Home</h2>
        </Link>
        <Link
          to="/experience"
          style={{ textDecoration: "none", color: "#fff" }}
        >
          <h2 className="dir__tags">Experience</h2>
        </Link>
        <Link to="/projects" style={{ textDecoration: "none", color: "#fff" }}>
          <h2 className="dir__tags">Projects</h2>
        </Link>
        <Link to="/about" style={{ textDecoration: "none", color: "#fff" }}>
          <h2 className="dir__tags">About</h2>
        </Link>
        <Link to="/blogs" style={{ textDecoration: "none", color: "#fff" }}>
          <h2 className="dir__tags">Blogs</h2>
        </Link>
        <Link
          to="/achievements"
          style={{ textDecoration: "none", color: "#fff" }}
        >
          <h2 className="dir__tags">Achievements</h2>
        </Link>
      </div>
    </div>
  );
};

export default DirectoriesPopup;
