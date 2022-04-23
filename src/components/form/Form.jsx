import React from "react";

import map from "./images/map.png";

import FormStyle from "./form.module.css";

const Form = () => {
  return (
    <div className={FormStyle.container}>
      <img className={FormStyle.mapImage} src={map} alt="map" />
      <form className={FormStyle.form}>
        <h3 className={FormStyle.title}>Contact us</h3>
        <input type="text" placeholder="Name" />
        <input type="phone" placeholder="Phone" />
        <input type="email" placeholder="E-mail" />
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className={FormStyle.btn}>Send</button>
        <span className={FormStyle.policy}>Privacy policy</span>
      </form>
    </div>
  );
};
export default Form;
