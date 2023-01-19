import React from 'react'
import { Link } from "react-router-dom";
import Slider from "react-slick";
function CardDetailslast() {
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
          slidesToShow: 4,
          slidesToScroll: 4,
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
      
<section className="mt-5 mb-5">
<div className="container ">
    <h2 className="text-capitalize text-center color-black-light">Things <span>to</span> Do <span>in</span> Turkey</h2>
    <p className="text-center mb-5">Not sure where to start your adventure? <br />Our Turkish best-selling tour packages offer you unique and unforgettable travel experiences in and of themselves. 
</p>

<Slider {...settings}>

<div>
<div className="item">
<div className="blog-card-gamma blog-card-gamma-margin">
    <div className="blog-thumb blog-thumb-details">
        <Link onClick={<scrollToTop />} to="/ephesus">
        <img src="assets/images/dubai/ephesus.jpg" alt="" />
        </Link>


        </div>


        <div className="media-content">
        <h2 className="text-uppercase">Ephesus and Virgin Mary's House Tour </h2>
        <div className="explore-i d-flex flex-column mt-2">
        <Link onClick={<scrollToTop />} to="/ephesus" className="text-capitalize">More Details</Link>
        <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
        </div>
    </div>

    </div>
</div>
</div>
<div>

<div className="item">
<div className="blog-card-gamma blog-card-gamma-margin">
    <div className="blog-thumb blog-thumb-details">
        <Link onClick={<scrollToTop />} to="/Cappadocia" >
        <img src="assets/images/dubai/capadoc.jpg" alt="" />
        </Link>
   

        </div>

        <div className="media-content">
        <h2 className="text-uppercase">Cappadocia</h2>
        <div className="explore-i d-flex flex-column mt-2">
        <Link onClick={<scrollToTop />} to="/Cappadocia" className="text-capitalize">More Details</Link>
        <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
        </div>
    </div>

    </div>
</div>
</div>
<div>
<div className="item">
<div className="blog-card-gamma blog-card-gamma-margin">
    <div className="blog-thumb blog-thumb-details">
        <Link onClick={<scrollToTop />} to="/prince" >
        <img src="assets/images/dubai/newone/prince.png" alt="" />
        </Link>
   

        </div>

        <div className="media-content">
        <h2 className="text-uppercase">Full-Day Princes’ Island Tour </h2>
        <div className="explore-i d-flex flex-column mt-2">
        <Link onClick={<scrollToTop />} to="/prince" className="text-capitalize">More Details</Link>
        <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
        </div>
    </div>

    </div>
</div>
</div>

<div>
<div className="item">
<div className="blog-card-gamma blog-card-gamma-margin">
    <div className="blog-thumb blog-thumb-details">
        <Link to="/kartep">
        <img src="assets/images/dubai/kartep.jpg" alt="" />
        </Link>
   

        </div>

        <div className="media-content">
        <h2 className="text-uppercase">Full-Day Tour Sapanca, Masukiye and Kartepe</h2>
        <div className="explore-i d-flex flex-column mt-2">
        <Link onClick={<scrollToTop />} to="/kartep" className="text-capitalize">More Details</Link>
        <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
        </div>
    </div>

    </div>
</div>
</div>

<div>
<div className="item">
<div className="blog-card-gamma blog-card-gamma-margin">
    <div className="blog-thumb blog-thumb-details">
        <Link onClick={<scrollToTop />} to="/troy">
        <img src="assets/images/dubai/troy.jpg" alt="" />
        </Link>
   

        </div>

        <div className="media-content">
        <h2 className="text-uppercase">Troy Tour Day Trip  </h2>
        <div className="explore-i d-flex flex-column mt-2">
        <Link onClick={<scrollToTop />} to="/troy" className="text-capitalize">More Details</Link>
        <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
        </div>
    </div>

    </div>
</div>




</div>

<div>

<div className="item">
<div className="blog-card-gamma blog-card-gamma-margin">
    <div className="blog-thumb blog-thumb-details">
        <Link onClick={<scrollToTop />} to="/troy">
        <img src="assets/images/dubai/istanbul.png" alt="" />
        </Link>
   

        </div>

        <div className="media-content">
        <h2 className="text-uppercase">Hagia Sophia, Blue Mosque, and Grand Bazaar Tour </h2>
        <div className="explore-i d-flex flex-column mt-2">
        <Link onClick={<scrollToTop />} to="/istanbul2" className="text-capitalize">More Details</Link>
        <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
        </div>
    </div>

    </div>
</div>
</div>
</Slider>
</div>
</section>


    </div>
  )
}

export default CardDetailslast
