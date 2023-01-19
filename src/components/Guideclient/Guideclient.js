import React from 'react'
import { Link } from "react-router-dom";
import Slider from "react-slick";


function Guideclient() {
  const settings = {
    infinite: true,
    dots:true,
    autoplay: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div>
      
    <div className="guide-area guide-style-one pt-110 mb-80">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
            <div className="section-head-gamma">
            <h2 className="text-capitalize">Leadership</h2>
            <p>Meet our key members who support the CEO in the preparation of strategic issues, while guiding the development <br /> of the Group’s processes, business operations, and common functions.</p>
            </div>
            </div>
            </div>
            <Slider {...settings}>
            <div>
            <div className="guide-card-gamma">
            <div className="guide-image">
            <img src="assets/images/dubai/dr.png" alt="" />
            <ul className="guide-social-links">
            <li><Link href="#"><i className="fa-brands fa-linkedin-in"></i></Link></li>
            </ul>
         
            </div>
            <div className="guide-content">
            <h4 className="guide-name" ><Link href="/clients">Dr haytham Alhajali</Link></h4>
            <h6 className="guide-designation">Group Chairman & CEO</h6>
            </div>
            </div>
            </div>
 
            <div className="guide-card-gamma">
            <div className="guide-image">
            <img src="assets/images/dubai/dummyleader.png" alt="" />
            <ul className="guide-social-links">
                <li><Link href="#"><i className="fa-brands fa-linkedin-in"></i></Link></li>
                </ul>
         
            </div>
            <div className="guide-content">
            <h4 className="guide-name"><Link href="#">Sara Orúe</Link></h4>
            <h6 className="guide-designation">NIU Hotel Manager, Spain</h6>
            </div>
            </div>
    
            <div>
            <div className="guide-card-gamma">
            <div className="guide-image">
            <img src="assets/images/dubai/dummyleader.png" alt="" />
            <ul className="guide-social-links">
                <li><Link href="#"><i className="fa-brands fa-linkedin-in"></i></Link></li>
                </ul>
         
            </div>
            <div className="guide-content">
            <h4 className="guide-name" ><Link href="#">Mr. Nassry Bedran</Link></h4>
            <h6 className="guide-designation">Dubai Link Managing Director</h6>
            </div>
            </div>
            </div>

            <div>
            <div className="guide-card-gamma">
            <div className="guide-image">
            <img src="assets/images/dubai/dummyleader.png" alt="" />
            <ul className="guide-social-links">
            <li><Link href="#"><i className="fa-brands fa-linkedin-in"></i></Link></li>
            </ul>
         
            </div>
            <div className="guide-content">
            <h4 className="guide-name" ><Link href="#">Dr haytham Alhajali</Link></h4>
            <h6 className="guide-designation">Group Chairman & CEO</h6>
            </div>
            </div>
            </div>
      
  
          </Slider>


    </div>
    </div>
    </div>
  )
}

export default Guideclient
