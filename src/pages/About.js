import React from 'react'
import background from '../assets/banner/banner2.png';
import Cardlogo from '../components/Card/Cardlogo';

import Heroabout from '../components/Hero/Heroabout'
import MoreAbout from '../components/Moresectionabout/MoreAbout'
import TestimonialAbout from '../components/TestimonialAbout/TestimonialAbout'
function About() {
  return (
    <div>
    <Heroabout />
    <Cardlogo />
    <div class="about-section-image"  style={{ backgroundImage: `linear-gradient(90deg,rgba(0,0,0,0.75),rgba(0,0,0,0.15)),url(${background})`}}>
    <MoreAbout />
    <TestimonialAbout />
 

    </div>
    </div>
  )
}

export default About
