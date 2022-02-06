import React, { useEffect } from "react";
import Typed from "typed.js";
import TerminalBar from "../../Components/TerminalBar/TerminalBar";
import "./BlogsPage.css";

const BlogsPage = () => {
  const writecommands = () => {
    // eslint-disable-next-line
    var typed1 = new Typed("#coming__soon", {
      strings: [
        "Blogs Coming Soon /",
        "Blogs Coming Soon -",
        "Blogs Coming Soon \\",
        "Blogs Coming Soon /",
        "Blogs Coming Soon -",
        "Blogs Coming Soon \\",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
      showCursor: false,
      startDelay: 0,
    });
  };
  useEffect(() => {
    writecommands();
  }, []);
  return (
    <div className="blogs__main">
      <div className="page__headers pixel__font blogs__header">
        <h1 className="page__header">
          Home / <span className="color__hp">Blogs</span>
        </h1>
        <TerminalBar />
      </div>
      <div className="blogs__content page__contents pixel__font">
        <p id="coming__soon"></p>
      </div>
    </div>
  );
};

export default BlogsPage;
