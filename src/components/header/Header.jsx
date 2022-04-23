import React from "react";

import HeaderStyle from "./headerStyle.module.css";

import logo from "./images/logo.png";

const Header = () => {
  return (
    <div className={HeaderStyle.container}>
      <img className={HeaderStyle.logo} src={logo} alt="logo" />
      <ul className={HeaderStyle.menu}>
        <li className={HeaderStyle.arrow}>
          <a href="#">Cities</a>
        </li>
        <li className={HeaderStyle.arrow}>
          <a href="#">Properties</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
        <li>
          <a href="#">Video</a>
        </li>
        <li>
          <a href="#">Contacts</a>
        </li>
      </ul>
      <div className={HeaderStyle.login}>
        <span>
          <a href="#">Log in</a>
        </span>
        |
        <span>
          <a href="#">Sing up</a>
        </span>
      </div>
    </div>
  );
};

export default Header;
