import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./FindUs.css";

const FindUs = () => (
  <div className='app__bg app__wrapper section__padding' id='contact'>
    <div className='app__wrapper_info'>
      <SubHeading title='Contact' />
      <h1 className='headtext__cormorant'>Find Us</h1>
      <div className='app__wrapper-content'>
        <p className='p__opensans'>Rehoboth Beach, DE 19971</p>
        <p className='p__cormorant'>Opening Hours</p>
        <p className='p__opensans'>Mon - Fri: 11:00 am - 11:00 pm</p>
        <p className='p__opensans'>Sat - Sun: 11:00 am - 01:00 am</p>
      </div>
      <button type='button' className='custom__button'>
        Visit Us
      </button>
    </div>
    <div className='app__wrapper_img'>
      <img src={images.findus} alt='findus' />
    </div>
  </div>
);

export default FindUs;
