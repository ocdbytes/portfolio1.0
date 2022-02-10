import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./TerminalBar.css";

const TerminalBar = () => {
  const [path, setPath] = useState("");
  const [popup, setPopup] = useState(false);
  const history = useNavigate();
  const gotopath = () => {
    const paths = ["about", "experience", "projects", "blogs", "achievements"];
    if (path === "../") {
      history("/");
    } else {
      if (!paths.includes(path.toLocaleLowerCase())) {
        setPopup(true);
        setTimeout(() => {
          setPopup(false);
        }, 2000);
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
      <p>choose any directory or use "../" for navigating to home</p>
      <div
        className={
          !popup ? "popup__wrong__cmd popup__translated" : "popup__wrong__cmd"
        }
      >
        <p>Sorry! Wrong Command</p>
        <p className="sub__text">Please write a valid directory to navigate</p>
      </div>
    </div>
  );
};

export default TerminalBar;
