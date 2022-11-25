import React from "react";

import { images } from "../../constants";
import "./About.css";

const About = () => (
  <div className="app__about app__bg flex__center section__padding" id="about">
    <div className="app__about-overlay flex__center">
      <img src={images.G} alt="g letter" />
    </div>
    <div className="app__about-content flex__center">
      {/* Left side */}
      <div className="app__about-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde alias
          debitis magni veniam, provident recusandae enim iusto dicta eius
          cumque.
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
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde alias
          debitis magni veniam, provident recusandae enim iusto dicta eius
          cumque.
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>
    </div>
  </div>
);

export default About;
