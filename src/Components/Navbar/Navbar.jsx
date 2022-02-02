import React, { useState } from "react";
import "./Navbar.css";
import "./Hamburger.css";
import Logo from "../../assets/svgs/logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showNav, setNav] = useState(false);
  return (
    <div className="navbar__main display__flex display__spacebetween">
      <div className="navbar__left">
        <Link to={"/"}>
          <img src={Logo} alt="logo" id="logo"></img>
        </Link>
      </div>
      <div className="navbar__right">
        <button
          className={
            showNav
              ? "hamburger hamburger--emphatic is-active"
              : "hamburger hamburger--emphatic"
          }
          type="button"
          onClick={() => setNav(!showNav)}
        >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
        <SideNavbar showNav={showNav} setNav={setNav} />
      </div>
    </div>
  );
};

const SideNavbar = ({ showNav, setNav }) => {
  return (
    <div
      className={
        !showNav
          ? "side__navbar__main pixel__font display__flex flex__flow__down navbar__translated"
          : "side__navbar__main pixel__font display__flex flex__flow__down"
      }
    >
      <button
        className={
          showNav
            ? "hamburger hamburger--emphatic is-active position__align"
            : "hamburger hamburger--emphatic position__align"
        }
        type="button"
        onClick={() => setNav(!showNav)}
      >
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>
      <Link
        to="/about"
        className="side__navbar__link"
        style={{ textDecoration: "none" }}
        onClick={() => setNav(false)}
      >
        About
      </Link>
      <Link
        to="/"
        className="side__navbar__link"
        style={{ textDecoration: "none" }}
      >
        Projects
      </Link>
      <Link
        to="/"
        className="side__navbar__link"
        style={{ textDecoration: "none" }}
      >
        Experience
      </Link>
      <Link
        to="/"
        className="side__navbar__link"
        style={{ textDecoration: "none" }}
      >
        Blogs
      </Link>
      <Link
        to="/"
        className="side__navbar__link"
        style={{ textDecoration: "none" }}
      >
        Achievments
      </Link>
    </div>
  );
};

export default Navbar;
