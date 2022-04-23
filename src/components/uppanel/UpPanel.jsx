import React from "react";

import UpPanelStyle from "./uppanel.module.css";

import heart from "./images/heartActive.png";
import img24 from "./images/img24.png";
import flag from "./images/united-kingdom.png";

const UpPanel = () => {
  return (
    <div className={UpPanelStyle.container}>
      <div className={`${UpPanelStyle.item} ${UpPanelStyle.email}`}>
        sales@wtgspain.com
      </div>
      <div className={`${UpPanelStyle.item} ${UpPanelStyle.phone}`}>
        +34 965 020784
      </div>
      <div className={`${UpPanelStyle.item} ${UpPanelStyle.whatsapp}`}>
        WhatsApp
      </div>
      <div className={UpPanelStyle.image}>
        {" "}
        <img src={heart} alt=""></img>
        <div className={UpPanelStyle.heartContainer}>
          {" "}
          <img src={img24} alt="num"></img>
        </div>
      </div>
      <div className={UpPanelStyle.select} name="language">
        <img src={flag} alt="flag" />
      </div>
    </div>
  );
};

export default UpPanel;
