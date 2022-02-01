import React, { useEffect, useState } from "react";
import Typed from "typed.js";
import "./StatusCol.css";
const StatusCol = () => {
  const [hours, setHours] = useState("");
  const [minute, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");
  const [stats, setStats] = useState("");
  const [mode, setMode] = useState(0);
  const [active, setActive] = useState(0);

  const genrandom = () => {
    let mode_num = Math.floor(Math.random() * 10000) + 1000;
    setMode(mode_num);
    let active_num = Math.floor(Math.random() * 100) + 10;
    setActive(active_num);
  };

  const getDate = () => {
    setInterval(() => {
      const date = new Date();
      setHours(date.getHours());
      setMinutes(date.getMinutes());
      setSeconds(date.getSeconds());
      genrandom();
    }, 1000);
  };

  const typingCommands = () => {
    // eslint-disable-next-line
    var typed1 = new Typed("#hello__world__text", {
      strings: ["> Hello World"],
      typeSpeed: 100,
      backSpeed: 0,
      loop: false,
      showCursor: false,
      startDelay: 100,
    });
    // eslint-disable-next-line
    var typed2 = new Typed("#run__exploit__text", {
      strings: ["> .RUN exploit101.py -U user"],
      typeSpeed: 100,
      backSpeed: 0,
      loop: false,
      showCursor: false,
      startDelay: 2000,
    });
    // eslint-disable-next-line
    var typed3 = new Typed("#initialisation__text", {
      strings: [
        "> Initializing Sequence..../",
        "> Initializing Sequence....-",
        "> Initializing Sequence....\\",
        "> Initializing Sequence..../",
        "> Initializing Sequence....-",
        "> Initializing Sequence....\\",
        "> Sequence Initialised (OK)",
      ],
      typeSpeed: 50,
      backSpeed: 0,
      loop: false,
      showCursor: false,
      startDelay: 6000,
    });
    // eslint-disable-next-line
    var typed4 = new Typed("#running__text", {
      strings: ["> Running...."],
      typeSpeed: 100,
      backSpeed: 0,
      loop: false,
      showCursor: false,
      startDelay: 15500,
    });
    setTimeout(() => {
      setStats(true);
    }, 17500);
  };

  useEffect(() => {
    getDate();
    typingCommands();
    // eslint-disable-next-line
  }, []);
  return (
    <div className="status__main pixel__font">
      <p id="hello__world__text" className="status__font"></p>
      <p id="run__exploit__text" className="status__font"></p>
      <p id="initialisation__text" className="status__font"></p>
      <p id="running__text" className="status__font"></p>
      <div
        className={stats ? "status__running" : "status__running not__display"}
      >
        <p className="status__font">
          {" "}
          <span className="color__hp">mode:</span> {mode}
        </p>
        <p className="status__font">
          200:{active + " // "}
          <span className="color__nb"> ACTIVE</span>
        </p>
        <p className="status__font">
          Time : {hours} : {minute} : {seconds}
        </p>
      </div>
    </div>
  );
};

export default StatusCol;
