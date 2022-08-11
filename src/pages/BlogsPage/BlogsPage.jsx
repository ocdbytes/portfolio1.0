import React from "react";
import BlogCard from "../../Components/BlogCard/BlogCard";
import blogsdat from "./blogsdat";
import "./BlogsPage.css";

const BlogsPage = () => {
  return (
    <div className="blogs__main">
      <div className="page__headers pixel__font blogs__header">
        <h2 className="page__header">
          Home / <span className="color__hp">Blogs</span>
        </h2>
      </div>
      <div className="blogs__content page__contents normal__font">
        {blogsdat.map((data) => {
          return <BlogCard data={data} />;
        })}
      </div>
    </div>
  );
};

export default BlogsPage;
