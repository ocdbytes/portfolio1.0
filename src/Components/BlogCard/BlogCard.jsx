import React from "react";
import "./BlogCard.css";

const BlogCard = ({ data }) => {
  return (
    <div className="blog_card_main display__flex">
      <a
        href={data.link}
        target="_blank"
        rel="noreferrer"
        className="display__flex blog_card_link"
      >
        <img
          src={data.image}
          alt="blog_card_image"
          className="blog_card_image"
        ></img>
        <h3>{data.name}</h3>
      </a>
    </div>
  );
};

export default BlogCard;
