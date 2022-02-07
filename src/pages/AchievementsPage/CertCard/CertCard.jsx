import React, { useState } from "react";
import "./CertCard.css";
const CertCard = ({ data }) => {
  const [show, setShow] = useState(false);
  const { image, title, id } = data;
  return (
    <div className="cert__card__main" key={id}>
      <div className="cert__card" onClick={() => setShow(true)}>
        <img src={image} alt="cert_image" className="cert__image"></img>
        <div className="cert__title">
          <h2 className="pixel__font">{title}</h2>
        </div>
      </div>
      {show && <Popup setShow={setShow} image={image} title={title} />}
    </div>
  );
};

const Popup = ({ image, title, setShow }) => {
  return (
    <div className="cert__popup__main display__flex">
      <div className="cert__popup">
        <div className="cert__popup__title display__flex pixel__font">
          <h2>{title}</h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            className="close__popup__btn"
            onClick={() => {
              setShow(false);
            }}
          >
            <path
              fill="#000"
              d="M2.39705176,2.55378835 L2.46966991,2.46966991 C2.73593648,2.20340335 3.15260016,2.1791973 3.44621165,2.39705176 L3.53033009,2.46966991 L8,6.939 L12.4696699,2.46966991 C12.7625631,2.1767767 13.2374369,2.1767767 13.5303301,2.46966991 C13.8232233,2.76256313 13.8232233,3.23743687 13.5303301,3.53033009 L9.061,8 L13.5303301,12.4696699 C13.7965966,12.7359365 13.8208027,13.1526002 13.6029482,13.4462117 L13.5303301,13.5303301 C13.2640635,13.7965966 12.8473998,13.8208027 12.5537883,13.6029482 L12.4696699,13.5303301 L8,9.061 L3.53033009,13.5303301 C3.23743687,13.8232233 2.76256313,13.8232233 2.46966991,13.5303301 C2.1767767,13.2374369 2.1767767,12.7625631 2.46966991,12.4696699 L6.939,8 L2.46966991,3.53033009 C2.20340335,3.26406352 2.1791973,2.84739984 2.39705176,2.55378835 L2.46966991,2.46966991 L2.39705176,2.55378835 Z"
            />
          </svg>
        </div>
        <img
          src={image}
          alt="cert__popup__image"
          className="cert__popup__image"
        ></img>
      </div>
    </div>
  );
};

export default CertCard;
