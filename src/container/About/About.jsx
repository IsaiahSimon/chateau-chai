import React from "react";

import { images } from "../../constants";
import "./About.css";

const About = () => (
  <div className="app__about app__bg flex__center section__padding" id="about">
    <div className="app__about-overlay flex__center">
      <img src={images.C} alt="c letter" />
    </div>
    <div className="app__about-content flex__center">
      {/* Left side */}
      <div className="app__about-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          Located in the heart of Delaware’s famed Rehoboth Beach, Chateau Chai
          is a fresh take on neighborhood fine dining, complete with an indoor
          bar, beer and wine, and an expansive outdoor garden patio.
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>

      {/* Knife */}
      <div className="app__about-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      {/* Right side */}
      <div className="app__about-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          Marcus Ray’s Chateau Chai began in 2012 with a goal of serving bold,
          global flavors to our local community and vistors alike. Since then,
          our desire to treat guests like family has remained the same, but our
          seasonal flavors, cocktails, wine and locally-crafted beer are
          ever-changing.
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>
    </div>
  </div>
);

export default About;
