import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Header.css";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    {/* Info */}
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavor" />
      <h1 className="app__header-h1">The Key to Fine Dining</h1>
      <p className="app__header-p p__opensans">
        Located in the heart of Delaware’s famed Rehoboth Beach, Chateau Chai is
        a fresh take on neighborhood fine dining, complete with an indoor bar,
        beer and wine, and an expansive outdoor garden patio.
      </p>
      <button type="button" className="custom__button">
        Explore Menu
      </button>
    </div>

    {/* Image */}
    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header img" />
    </div>
  </div>
);

export default Header;
