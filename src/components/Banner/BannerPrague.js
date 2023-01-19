import React from 'react'
import background1 from '../../assets/banner/praqueone.png';
import background2 from '../../assets/banner/praquetwo.png';
import background3 from '../../assets/banner/praquethree.png';
import Slider from "react-slick";
function BannerPraque() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
<div>
    <Slider {...settings}>
    <div>
    <div className="image-about-background">
    <div className="slider-bg-1 slider-bg-about" style={{ backgroundImage: `linear-gradient(90deg,rgba(0,0,0,0.45),rgba(0,0,0,0.15)),url(${background1})`} }>
  <div className="container-fluid">
  <div className="row d-flex justify-content-lg-start justify-content-center align-items-center">
  <div className="col-xl-12 col-lg-12  col-12 justify-content-center">

  </div>
  
        </div>
    </div>
    </div>
    </div>
    </div>

    <div>
    <div className="image-about-background">
    <div className="slider-bg-1 slider-bg-about" style={{ backgroundImage: `linear-gradient(90deg,rgba(0,0,0,0.45),rgba(0,0,0,0.15)),url(${background2})`} }>
  <div className="container-fluid">
  <div className="row d-flex justify-content-lg-start justify-content-center align-items-center">
  <div className="col-xl-12 col-lg-12  col-12 justify-content-center">

  </div>
  
        </div>
    </div>
    </div>
    </div>
    </div>

    <div>
    <div className="image-about-background">
    <div className="slider-bg-1 slider-bg-about" style={{ backgroundImage: `linear-gradient(90deg,rgba(0,0,0,0.45),rgba(0,0,0,0.15)),url(${background3})`} }>
  <div className="container-fluid">
  <div className="row d-flex justify-content-lg-start justify-content-center align-items-center">
  <div className="col-xl-12 col-lg-12  col-12 justify-content-center">
 
  </div>
  
        </div>
    </div>
    </div>
    </div>
    </div>
    </Slider>
    </div>
  )
}

export default BannerPraque
