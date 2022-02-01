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
        <img src={Logo} alt="logo" id="logo"></img>
      </div>
      <div className="navbar__right">
        <button
          class={
            showNav
              ? "hamburger hamburger--emphatic is-active"
              : "hamburger hamburger--emphatic"
          }
          type="button"
          onClick={() => setNav(!showNav)}
        >
          <span class="hamburger-box">
            <span class="hamburger-inner"></span>
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
        class={
          showNav
            ? "hamburger hamburger--emphatic is-active position__align"
            : "hamburger hamburger--emphatic position__align"
        }
        type="button"
        onClick={() => setNav(!showNav)}
      >
        <span class="hamburger-box">
          <span class="hamburger-inner"></span>
        </span>
      </button>
      <Link
        to="/"
        className="side__navbar__link"
        style={{ textDecoration: "none" }}
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
