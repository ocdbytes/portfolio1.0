import React from "react";
import TerminalBar from "../../Components/TerminalBar/TerminalBar";
import blogsdat from "./blogsdat";
import "./BlogsPage.css";

const BlogsPage = () => {
  return (
    <div className="blogs__main">
      <div className="page__headers pixel__font blogs__header">
        <h1 className="page__header">
          Home / <span className="color__hp">Blogs</span>
        </h1>
        <TerminalBar />
      </div>
      <div className="blogs__content page__contents pixel__font">
        {blogsdat.map((data) => {
          return (
            <div className="blogs__data__card display__flex" key={data.id}>
              <div className="blogs__card__image__sec">
                <img
                  className="blogs__cd__image"
                  src={data.image}
                  alt={data.image}
                ></img>
              </div>
              <div className="blogs__card__details">
                <h3>{data.name}</h3>
                <a href={data.link} target={"_blank"} rel="noreferrer">
                  {data.link}
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BlogsPage;
