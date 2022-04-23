import React from "react";

import FooterStyle from "./footer.module.css";

import logo from "./images/whiteLogo.png";
import stars from "./images/stars.png";

const Footer = () => {
  return (
    <div className={FooterStyle.container}>
      <img className={FooterStyle.logo} src={logo} alt="logo" />
      <div className={FooterStyle.title}>
        the best <span className={FooterStyle.thin}>real estate in Spain</span>
      </div>
      <div className={FooterStyle.info}>
        <div className={FooterStyle.menu}>
          <ul className={FooterStyle.list}>
            <li className={FooterStyle.item}>
              <a className={FooterStyle.link} href="#">
                All Cities
              </a>
            </li>
            <li className={FooterStyle.item}>
              <a className={FooterStyle.link} href="#">
                Blog
              </a>
            </li>
            <li className={FooterStyle.item}>
              <a className={FooterStyle.link} href="#">
                Video
              </a>
            </li>
            <li className={FooterStyle.item}>
              <a className={FooterStyle.link} href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={FooterStyle.infoContacts}>
        <div className={FooterStyle.contacts}>
          <h6 className={FooterStyle.header}>Contacts:</h6>
          <span className={FooterStyle.phone}>+34 (965) 020 - 784</span>
          <span className={FooterStyle.email}>sales@wtgspain.com</span>
          <span className={FooterStyle.location}>
            Centro Comercial «Playa Flamenca» C/ Niagara, 63 Local 60/PB, first
            floor, 03189 - Orihuela Costa (Alicante), Spain
          </span>
          <span className={FooterStyle.rating}>
            <span>
              Reating 4.9/5:{" "}
              <img className={FooterStyle.stars} src={stars} alt="stars" />
              <span>820 votes</span>
            </span>
          </span>
        </div>
        <div className={FooterStyle.type}>
          <h6 className={FooterStyle.header}>Types:</h6>
          <ul className={FooterStyle.typeList}>
            <li>Appartaments</li>
            <li>Penthouses</li>
            <li>Townhouses</li>
            <li>Commercial</li>
            <li>Bungalows</li>
            <li>Duplexses</li>
            <li>Villas</li>
          </ul>
        </div>
        <div className={FooterStyle.follow}>
          <h6 className={FooterStyle.header}>Follow ass:</h6>
          <table className={FooterStyle.table}>
            <tbody>
              <tr>
                <td className={FooterStyle.facebook}>Facebook</td>
                <td className={FooterStyle.youtube}>YouTube</td>
              </tr>
              <tr>
                <td className={FooterStyle.linkedin}>Linkedin</td>
                <td className={FooterStyle.instagram}>Instagram</td>
              </tr>
            </tbody>
          </table>
          <form className={FooterStyle.forma}>
            <p className={FooterStyle.text}>Subscribe to new objects</p>
            <input
              className={FooterStyle.input}
              type="text"
              name="subscribe"
              placeholder="Your email"
            />

            <button className={FooterStyle.btn}>Subscribe</button>
          </form>
        </div>
      </div>
      <p className={FooterStyle.company}>
        The company "WTG Spain" specializes in the investment and sale of real
        estate in Spain, and the provision of legal and consulting services. All
        rights reserved. "WTG Spain" - The Best Real Estate in Spain. ©
        Copyright 2007 - 2020.
      </p>
    </div>
  );
};
export default Footer;
