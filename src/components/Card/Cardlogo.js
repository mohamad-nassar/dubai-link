import React from 'react'
import { Link } from "react-router-dom";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Slider from "react-slick";
function Cardlogo() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    autoplay:true,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScrolls: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
     
        }
      }
    ]
  };
  return (
    <div>

      <section>
      <div class="logo-section-about mt-5">
      <Slider {...settings}>

      <div>
      <div class="logo-about">
      <a href="/dubai-link-travel-and-tours" onClick={<scrollToTop />}>
      <img class="img-fluid" src="assets/images/dubai/DUbaiLink.svg" />
      </a>
      </div>
            </div>

            <div>
            <div class="logo-about">
            <a href="/tripstick" onClick={<scrollToTop />}>
            <img class="img-fluid" src="assets/images/dubai/TRIPstick.svg" />
            </a>
            </div>
                  </div>
                  <div>
                  <div class="logo-about">
                  <a href="/gte" onClick={<scrollToTop />}>
                  <img class="img-fluid" src="assets/images/dubai/GTE.svg" />
                  </a>
                  </div>
                        </div>

                        <div>
                        <div class="logo-about">
                        <a href="/royal-lifestyle" onClick={<scrollToTop />}>
                        <img class="img-fluid" src="assets/images/dubai/RLF.svg" />
                        </a>
                        </div>
                              </div>
            <div>
            <div class="logo-about">
            <a href="/sts" onClick={<scrollToTop />}>
            <img class="img-fluid" src="assets/images/dubai/STS.svg" />
            </a>
            </div>
                  </div>
                  <div>
                  <div class="logo-about">
                  <a href="/niu" onClick={<scrollToTop />}>
                  <img class="img-fluid" src="assets/images/niuaboutversion.png" />
                  </a>
                  </div>
                        </div>

                  
                  
    </Slider>
    </div>
      
      </section>

    </div>
  )
}

export default Cardlogo
