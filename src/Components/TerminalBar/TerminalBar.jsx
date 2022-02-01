import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./TerminalBar.css";

const TerminalBar = () => {
  const [path, setPath] = useState("");
  const history = useNavigate();
  const gotopath = () => {
    history(`/${path}`);
  };
  return (
    <div className="terminal__bar pixel__font">
      <div className="terminal__box display__flex">
        <p>cd </p>
        <input
          type="text"
          className="terminal__input pixel__font"
          onChange={(e) => setPath(e.target.value)}
          value={path}
        />
        <button
          className="terminal__button pixel__font"
          onClick={() => gotopath()}
        >
          Run&gt;_
        </button>
      </div>
      <p>choose any folder from directory</p>
    </div>
  );
};

export default TerminalBar;
