import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./TerminalBar.css";

const TerminalBar = () => {
  const [path, setPath] = useState("");
  const history = useNavigate();
  const gotopath = () => {
    const paths = ["about", "experience", "projects", "blogs", "achievements"];
    if (path === "../") {
      history("/");
    } else {
      if (!paths.includes(path.toLocaleLowerCase())) {
        console.log("wrong path"); // Add a popup here
      } else {
        history(`/${path}`);
      }
    }
  };
  const addListeners = () => {
    const run_btn = document.getElementById("run_btn");
    document.addEventListener("keypress", (event) => {
      if (event.code === "Enter") {
        event.preventDefault();
        run_btn.click();
      }
    });
  };
  useEffect(() => {
    addListeners();
  }, []);
  return (
    <div className="terminal__bar pixel__font">
      <div className="terminal__box display__flex">
        <p>cd </p>
        <input
          type="text"
          className="terminal__input pixel__font"
          onChange={(e) => setPath(e.target.value)}
          value={path}
          autoFocus
          id="input_term"
        />
        <button
          className="terminal__button pixel__font"
          onClick={() => gotopath()}
          id="run_btn"
        >
          Run&gt;_
        </button>
      </div>
      <p>choose any folder from directory or use "." for navigating to home</p>
    </div>
  );
};

export default TerminalBar;
