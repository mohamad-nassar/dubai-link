import React from 'react'
import background from '../assets/banner/banner2.png';
import Cardlogo from '../components/Card/Cardlogo';

import Heroabout from '../components/Hero/Heroabout'
import MoreAbout from '../components/Moresectionabout/MoreAbout'
import TestimonialAbout from '../components/TestimonialAbout/TestimonialAbout'
import {helmet} from 'react-helmet-async'
function About() {
  return (
    <div>
    <helmet>
    <title>About Us</title>
    <meta name="description" content="hospitality in uae,hospitality companies in uae
    hospitality companies in uae,hospitality groups in uae,hospitality in dubai,customer centric product
    " />
    <link rel="canonical" href="/about" />
    </helmet>
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
