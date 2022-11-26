import React from "react";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

import { FooterOverlay, Newsletter } from "../../components";
import { images } from "../../constants";
import "./Footer.css";

const today = new Date();

const Footer = () => (
  <div className="app__footer section__padding">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">123 Mulberry Ln, West Hanover, CT 12031</p>
        <p className="p__opensans">+1 234-567-8901</p>
        <p className="p__opensans">+1 234-555-8901</p>
      </div>
      <div className="app__footer-links_logo">
        <img src={images.chateauChai} alt="footer_logo" />
        <p className="p__opensans">
          "The best way to find yourself is to lose yourself in the service of
          others."
        </p>
        <img src={images.spoon} alt="spoon" className="spoon__img" />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>
      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday - Friday:</p>
        <p className="p__opensans">11:00 am - 11:00 pm</p>
        <p className="p__opensans">Saturday - Sunday:</p>
        <p className="p__opensans">11:00 am - 01:00 am</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">
        Copyright © {today.getFullYear()} <span>Chateau Chai</span>. All Rights
        reserved. Crafted by
        <a href="https://isimon.dev/" target="_blank" rel="noreferrer">
          {" "}
          Isaiah Simon | iSimonDev
        </a>
      </p>
    </div>
  </div>
);

export default Footer;
