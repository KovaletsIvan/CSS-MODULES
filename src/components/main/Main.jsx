import React from "react";

import MainStyle from "./main.module.css";

import cloud1 from "./images/cloud1.png";
import svg1 from "./images/svg1.png";

const Main = () => {
  return (
    <div className={MainStyle.main}>
      <img className={MainStyle.cloud} src={cloud1} alt="cloud" />
      <img className={MainStyle.mainImage} src={svg1} alt="cloud" />
      <div>
        <div className={MainStyle.heading}>
          <div className={MainStyle.headingFirstTitle}>
            <span className={MainStyle.blueLine}></span>
            <h3 className={MainStyle.litleTitle}>WTG SPAIN</h3>
          </div>
          <h1 className={MainStyle.bigTitle}>
            Do you need <span className={MainStyle.blueText}>some help</span>?
          </h1>
          <p className={MainStyle.text}>
            Contact us right now and our team will do everything to help you.
          </p>
          <a className={MainStyle.linkBtn} href="#">
            Contact us
          </a>
        </div>
      </div>
    </div>
  );
};
export default Main;
