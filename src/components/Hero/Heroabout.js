import React from "react";
// Import Swiper React components

import { Link } from "react-router-dom";
import background1 from '../../assets/banner/aboutimagebanner.png';


import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination } from "swiper";



function Hero() {



  return (
<div>


  <div className="image-about-background">
  <div className="slider-bg-1 slider-bg-about" style={{ backgroundImage: `linear-gradient(90deg,rgba(0,0,0,0.45),rgba(0,0,0,0.15)),url(${background1})`} }>
<div className="container-fluid">
<div className="row d-flex justify-content-lg-start justify-content-center align-items-center">
<div className="col-xl-12 col-lg-12  col-12 justify-content-center">
<div className="hero4-content hero-content-about hero-content-about-txt"><h1 className="text-uppercase ml-2">Building a hospitality solution empire</h1>
</div>
</div>

      </div>
  </div>
  </div>
  </div>

  </div>
  )
}

export default Hero
