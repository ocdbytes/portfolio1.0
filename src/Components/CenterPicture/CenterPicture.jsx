import React, { useEffect } from "react";
import Typed from "typed.js";

import "./CenterPicture.css";
const CenterPicture = () => {
  const typingIntro = () => {
    // eslint-disable-next-line
    var typedIntro = new Typed("#intro", {
      strings: ["  Hey!!👋 Myself Arun Jangra"],
      typeSpeed: 100,
      backSpeed: 0,
      loop: false,
      showCursor: false,
      startDelay: 100,
    });
    // eslint-disable-next-line
    var typedSubIntro = new Typed("#subintro", {
      strings: ["Click on any of the directories to know more ->"],
      typeSpeed: 50,
      backSpeed: 0,
      loop: false,
      showCursor: false,
      startDelay: 3500,
    });
  };
  useEffect(() => {
    typingIntro();
  }, []);
  return (
    <div className="center__picture__main">
      <div className="monitor1">
        <div className="monitor1_window1 pixel__font">
          <p className="window__text" id="intro"></p>
          <p className="window__text" id="subintro"></p>
        </div>
      </div>
      <div className="monitor2">
        <div className="monitor2_window1">
          <svg id="footer-logo" viewBox="0 0 135.47 135.47">
            <path
              className="kali__logo"
              fill="none"
              d="m71.766 36.352s-10.212-.6795-27.602 4.7619c-17.722 5.5452-27.773 13.405-27.773 13.405s26.414-14.748 56.228-15.586zm38.09 16.035 1.3276-.08664s-7.6062-9.2286-22.165-13.724c8.1839 3.3267 15.307 7.7345 20.837 13.81zm2.1727 3.8344c.20411-.3539.86302 1.1243 1.3634 1.7453.0212.124.0564.19967-.23373.13998-.0244-.12747-.0665-.16444-.0665-.16444s-.70029-.41667-.91499-.71224c-.21487-.29556-.253-.81255-.14825-1.0086zm17.867 43.93s1.6147-18.538-27.511-22.812c-3.6915-.54163-8.3599-.9585-13.082-.97044-23.344.30865-24.195-26.924-6.6044-28.299 7.2901-.60152 15.995 3.3311 24.505 7.2941-.0316 1.0569.0121 1.9961.70646 2.864.69414.86762 3.3607 1.8142 4.2128 2.3031.85203.48907 3.5816 2.2245 5.2543 4.4017.36275-.67854 3.3921-2.6504 3.3921-2.6504s-.72571.01579-2.414-.61519c-1.6885-.63098-3.6921-2.5401-3.7395-2.6504-.0473-.11052-.0788-.28401.31578-.36295.2996-.25224-.37893-1.0727-.67874-1.3723-.2996-.2998-2.3036-3.7073-2.3508-3.7863-.0473-.07894-.0632-.1577-.20507-.25243-.4419-.1421-2.3826.20506-2.3826.20506s-2.9847-1.4659-4.0135-4.6264c.015.55358-.5118 1.158.0 2.4298-1.5562-.65832-2.8929-1.7811-3.9472-4.5557-.62751 1.5781.0 2.5815.0 2.5815s-3.6646-1.024-4.2509-4.4036c-.6435 1.5171.0 2.4296.0 2.4296s-5.9742-3.1172-15.901-3.1624c-6.646-.60961-8.0296-12.301-7.4139-14.269.0.0-9.586-5.0521-28.456-7.2841-18.87-2.2322-34.346-.33638-34.346-.33638s33.421-1.6039 60.195 9.2356c.91018 4.0709 3.6482 10.851 5.1229 14.11-4.2197 2.9175-8.9781 5.6609-9.7191 15.391-.74074 9.7297 7.6245 18.288 17.998 18.552 9.8502.52469 16.656.59921 24.905 4.8759 7.8739 4.3537 14.33 17.62 14.969 29.551.69008-8.8524-2.632-27.889-18.134-33.669 21.667 3.7917 23.573 19.854 23.573 19.854zm-58.64-65.253-.77963-2.5147s-12.864-2.2844-30.16-1.055c-17.296 1.2294-34.759 7.2839-34.759 7.2839s35.732-8.991 65.698-3.7143"
            ></path>
          </svg>
        </div>
        <div className="monitor2_window2 display__flex">
          <h2
            className="pixel__font window__text2"
            style={{ fontSize: "20px" }}
          >
            &lt;/&gt;
          </h2>
        </div>
      </div>
      <div className="keyboard"></div>
      <div className="coffee"></div>
    </div>
  );
};

export default CenterPicture;
