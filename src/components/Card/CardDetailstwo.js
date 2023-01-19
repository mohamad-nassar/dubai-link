import React from 'react'
import { Link } from "react-router-dom";
import Slider from "react-slick";
function CardDetailstwo() {
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
    <section className="mt-100 mb-80">
    <div className="container ">
        <h2 className="text-capitalize text-center color-black-light">Find Hotels <span>in</span> Turkey</h2>
        <p className="text-center mb-5 hotel-max-width">Looking for a holiday at a bargain? We’re here to help. We team up with the best across the globe to help you stay in comfy hotels.  
        Here are our best offers in one place, to save big and travel more. 
        </p>

    <Slider {...settings}>
    <div>
    <div className="item">
    <div className="blog-card-gamma blog-card-gamma-margin">
        <div className="blog-thumb blog-thumb-details">
        <Link onClick={<scrollToTop />} to="#">
        <img src="assets/images/dubai/newone/detailsimg1.png" alt="" />
        </Link>
        <div className="blog-lavel2 d-grid">
        <Link className="text-white-light" to="#">From </Link>
        <Link className="text-weight-bold" to="">$398</Link>
        </div>


 

        </div>

        <div className="media-content">
        <h2 className="text-uppercase">The Marmara Sisli Hotel</h2>
        <span>Osmanlı Sokak</span>
        <p>★★★★</p>
        <div className="explore-i d-flex flex-column mt-2">
        <Link onClick={<scrollToTop />} to="/marmara" className="text-capitalize">More Details</Link>
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
            <Link onClick={<scrollToTop />} to="#">
            <img src="assets/images/dubai/newone/detailsimg2.png" alt="" />
            </Link>
            <div className="blog-lavel2 d-grid">
            <Link className="text-white-light" to="#">From </Link>
            <Link className="text-weight-bold" to="">$92</Link>
            </div>

            </div>

            <div className="media-content">
            <h2 className="text-uppercase">Elysium Taksim Hotel</h2>
            <span>İnönü Mah, Harbiye Çayırı</span>
            <p>★★★★</p>
            <div className="explore-i d-flex flex-column mt-2">
            <Link onClick={<scrollToTop />} to="/package" className="text-capitalize">More Details</Link>
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
                    <Link onClick={<scrollToTop />} to="#">
                    <img src="assets/images/dubai/newone/detailsimg3.png" alt="" />
                    </Link>
                    <div className="blog-lavel2 d-grid">
                    <Link className="text-white-light" to="#">From </Link>
                    <Link className="text-weight-bold" to="">$111</Link>
                    </div>
   
                    </div>
            

                    <div className="media-content">
                    <h2 className="text-uppercase">CVK Park Bosphorus Hotel</h2>
                    <span>Gümüşsuyu Mah. İnönü</span>
                    <p>★★★★</p>
                    <div className="explore-i d-flex flex-column mt-2">
                    <Link onClick={<scrollToTop />} to="/CVK" className="text-capitalize">More Details</Link>
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
            <Link to="#">
            <img src="assets/images/dubai/newone/detailsimg2.png" alt="" />
            </Link>
            <div className="blog-lavel2 d-grid">
            <Link className="text-white-light" to="#">From </Link>
            <Link className="text-weight-bold" to="">$357</Link>
            </div>

            </div>
    

            <div className="media-content">
            <h2 className="text-uppercase">Elysium Taksim Hotel</h2>
            <span>İnönü Mah, Harbiye Çayırı</span>
            <p>★★★★</p>
            <div className="explore-i d-flex flex-column mt-2">
            <Link onClick={<scrollToTop />} to="/package" className="text-capitalize">More Details</Link>
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

export default CardDetailstwo
