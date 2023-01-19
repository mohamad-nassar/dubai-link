import React from 'react'
import { Link } from "react-router-dom";
import Slider from "react-slick";
function CardClient() {

    const settings = {
        infinite: true,
        dots:true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          }
        ]
      };
  return (

    <div>




    <Slider {...settings}>
    <div class="slider-bg-client">
    <div class="container"> 
    <div class="row d-flex justify-content-lg-start justify-content-center align-items-center">
    <div class="col-xl-7 col-lg-7">
    <div class="hero4-content content-client">
        <h2 class="text-capitalize text-white">Dr. Haytham Alhajali </h2>
        <h4  class="text-capitalize text-white mb-5">Group Chairman & CEO</h4>
        <p>Mr. Nassry Bedran, Managing Director of Dubai Link Travel & Tours, is an industry veteran with over three decades of experience in the Middle East where he assumed leadership positions with renowned DMCs & travel companies in the region. Mr. Bedran joined Dubai Link in 2017, successfully repositioning the company’s growth strategy, diversifying its products and services offering, and securing new global strategic partnerships.</p>
      <div class="social-clients d-flex ml-0 mt-3">
        <ul class="d-flex ml--30">
          <li class="ml-0"><Link to="#"><i class="bx bxl-instagram"></i></Link></li>
          <li><Link to="#"><i class="bx bxl-facebook"></i></Link></li>
          <li><Link to="#"><i class="bx bxl-twitter"></i></Link></li>
          <li><Link to="#"><i class="bx bxl-whatsapp"></i></Link></li>
          <li><Link to="#"><i class='bx bxl-pinterest-alt'></i></Link></li>
        </ul>
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

export default CardClient
