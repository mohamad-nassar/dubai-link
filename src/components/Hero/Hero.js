import React, { useRef, useState,useEffect } from "react";
import { Link } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import background1 from "../../assets/banner/dubaiback.png";
import background from "../../assets/banner/stripslider.png";

import background2 from "../../assets/banner/Home15.png";
import backgroundgte from "../../assets/banner/Home12.jpg";
import backgroundstrip from "../../assets/banner/stripbannslider.png";
import background3 from "../../assets/banner/stripslider.png";
import background4 from "../../assets/banner/Home11.jpg";
import background5 from "../../assets/banner/royalslider.png";
import { CiPlay1 } from "react-icons/ci";
// Import Swiper styles
import axios from "axios";
import url from "../url";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Slider from "react-slick";

// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";

function Hero() {
  const settings = {
    dots: false,
    nav: true,
    fade: true,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
  
<div className="hero-area hero-style-four">

 
<div className="hero-main-wrapper position-relative d-none d-md-block">
<Swiper
loop={true}
spaceBetween={30}
effect={"fade"}
navigation={true}
autoplay={{
  delay: 3000,
  disableOnInteraction: false
}}
pagination={{
  clickable: true,
}}

modules={[Autoplay, EffectFade, Navigation, Pagination]}
className="mySwiper"
>
<SwiperSlide>
<div className="slider-bg-2"  style={{ backgroundImage: `linear-gradient(90deg,rgba(0,0,0,0.45),rgba(0,0,0,0.15)),url(${background})`}}>
<div className="container-fluid">
<div className="row d-flex justify-content-lg-start justify-content-center align-items-center">
<div className="col-xl-12 col-lg-12  col-md-12 col-6">
<div className="hero4-content d-block">
<h2 class="text-uppercase d-none d-md-block">Redefining Hospitality </h2>
<p class="text-uppercase d-block d-md-none">Building the hospitality industry for a better future so you can discover its wonders with us</p>
<p className=" d-none d-md-block">Building the hospitality industry for a better future so you can discover its wonders with us.</p>


</div>

</div>
</div>
</div>
</div>
</SwiperSlide>
<SwiperSlide>
<div className="slider-bg-2"  style={{ backgroundImage: `linear-gradient(90deg,rgba(0,0,0,0.45),rgba(0,0,0,0.15)),url(${background1})`}}>
<div className="container-fluid">
<div className="row d-flex justify-content-lg-start justify-content-center align-items-center">
<div className="col-xl-12 col-lg-12  col-md-12 col-6">
<div className="hero4-content">
<h2 class="text-capitalize d-none d-md-block text-uppercase">Fine Travel</h2>
<p class="d-block d-md-none text-uppercase">Experience unforgettable holidays at the best rates.</p>
<p className=" d-none d-md-block">Experience unforgettable holidays at the best rates.</p>
<Link onClick={<scrollToTop />} to="/tour"><button className="button-fill-primary  btn-hero">Explore</button></Link>


</div>

</div>
</div>
</div>
</div>
</SwiperSlide>

<SwiperSlide>
<div className="slider-bg-2"  style={{ backgroundImage: `linear-gradient(90deg,rgba(0,0,0,0.45),rgba(0,0,0,0.15)),url(${backgroundstrip})`} }>
<div className="container-fluid" style={{animation:"down-enter"}}>
<div className="row d-flex justify-content-lg-start justify-content-center align-items-center">
<div className="col-xl-12 col-lg-12  col-md-12 col-6">
<div className="hero4-content"  data-aos="fade-down"
data-aos-easing="linear"
data-aos-duration="1500">
<h2 class="text-capitalize d-none d-md-block text-uppercase"> Top-notch Booking</h2>
<p class="d-block d-md-none text-uppercase">Dig into a process of searching, comparing, and booking hotels.</p>
<p className=" d-none d-md-block">Dig into a process of searching, comparing, and booking hotels.</p>
<Link onClick={<scrollToTop />} to="/tripstick"><button className="button-fill-primary  btn-hero">Explore</button></Link>
</div>
</div>
</div>
</div>
</div>
</SwiperSlide>

<SwiperSlide>
<div className="slider-bg-2"  style={{ backgroundImage: `linear-gradient(90deg,rgba(0,0,0,0.45),rgba(0,0,0,0.15)),url(${backgroundgte})`}}>
<div className="container-fluid">
<div className="row d-flex justify-content-lg-start justify-content-center align-items-center">
<div className="col-xl-12 col-lg-12  col-md-12 col-6">
<div className="hero4-content">
<h2 class="text-capitalize d-none d-md-block text-uppercase">First-rate Solution</h2>
<p class="d-block d-md-none text-uppercase">Access a one-step solution for all your travel needs.</p>
<p className=" d-none d-md-block">Access a one-step solution for all your travel needs.</p>
<Link onClick={<scrollToTop />} to="/gte"><button className="button-fill-primary btn-hero">Explore</button></Link>
</div>
</div>
</div>
</div>
</div>
</SwiperSlide>

<SwiperSlide>
<div className="slider-bg-2"  style={{ backgroundImage: `linear-gradient(90deg,rgba(0,0,0,0.45),rgba(0,0,0,0.15)),url(${background5})`}}>
<div className="container-fluid">
<div className="row d-flex justify-content-lg-start justify-content-center align-items-center">
<div className="col-xl-12 col-lg-12  col-md-12 col-6">
<div className="hero4-content">
<h2 class="text-capitalize d-none d-md-block text-uppercase"> VIP Experience </h2>
<p class="d-block d-md-none text-uppercase">Unlock a premium holiday experience with exclusive golf packages at special rates.</p>
<p className="d-none d-md-block">Unlock a premium holiday experience with exclusive golf packages at special rates.</p>
<Link onClick={<scrollToTop />} to="/royal-lifestyle"><button className="button-fill-primary  btn-hero">Explore</button></Link>
</div>
</div>
</div>
</div>
</div>
</SwiperSlide>

<SwiperSlide>
<div className="slider-bg-2"  style={{ backgroundImage: `linear-gradient(90deg,rgba(0,0,0,0.45),rgba(0,0,0,0.15)),url(${background2})`}}>
<div className="container-fluid">
<div className="row d-flex justify-content-lg-start justify-content-center align-items-center">
<div className="col-xl-12 col-lg-12  col-md-12 col-6">
<div className="hero4-content">
<h2 class="text-capitalize d-none d-md-block text-uppercase">Premium Solution</h2>
<p class="d-block d-md-none text-uppercase">Discover smart travel solutions and special travel products.</p>
<p className=" d-none d-md-block">Discover smart travel solutions and special travel products.</p>
<Link onClick={<scrollToTop />} to="/sts"><button className="button-fill-primary btn-hero">Explore</button></Link>
</div>
</div>
</div>
</div>
</div>
</SwiperSlide>
<SwiperSlide>
<div className="slider-bg-2"  style={{ backgroundImage: `linear-gradient(90deg,rgba(0,0,0,0.45),rgba(0,0,0,0.15)),url(${background4})`}}>
<div className="container-fluid">
<div className="row d-flex justify-content-lg-start justify-content-center align-items-center">
<div className="col-xl-12 col-lg-12  col-md-12 col-6">
<div className="hero4-content">
<h2 class="text-capitalize d-none d-md-block text-uppercase">Luxurious Stay</h2>
<p class="d-block d-md-none text-uppercase">Enjoy a warm ambience, great facilities, and positive vibes.</p>
<p className=" d-none d-md-block">Enjoy a warm ambience, great facilities, and positive vibes.</p>
<Link onClick={<scrollToTop />} to="/niu"><button className="button-fill-primary  btn-hero">Explore</button></Link>
</div>
</div>
</div>
</div>
</div>
</SwiperSlide>

</Swiper>
  </div>


      <div className="hero-main-wrapper position-relative d-block d-md-none">
        <Swiper
          centeredSlides={true}
          nav={true}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <div>
            <SwiperSlide>
              <div
                className="slider-bg-2"
                style={{
                  backgroundImage: `linear-gradient(90deg,rgba(0,0,0,0.45),rgba(0,0,0,0.15)),url(${background})`,
                }}
              >
                <div className="container-fluid">
                  <div className="row d-flex justify-content-lg-start justify-content-center align-items-center">
                    <div className="col-xl-12 col-lg-12  col-md-12 col-6">
                      <div className="hero4-content d-block">
                        <h2 class="text-uppercase d-none d-md-block">
                          Redefining Hospitality{" "}
                        </h2>
                        <p class="text-uppercase d-block d-md-none">
                          Building the hospitality industry for a better future
                          so you can discover its wonders with us
                        </p>
                        <p className=" d-none d-md-block">
                          Building the hospitality industry for a better future
                          so you can discover its wonders with us.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </div>
          <div>
            <SwiperSlide>
              <div
                className="slider-bg-2"
                style={{
                  backgroundImage: `linear-gradient(90deg,rgba(0,0,0,0.45),rgba(0,0,0,0.15)),url(${background1})`,
                }}
              >
                <div className="container-fluid">
                  <div className="row d-flex justify-content-lg-start justify-content-center align-items-center">
                    <div className="col-xl-12 col-lg-12  col-md-12 col-6">
                      <div className="hero4-content">
                        <h2 class="text-capitalize d-none d-md-block text-uppercase">
                          Fine Travel
                        </h2>
                        <p class="d-block d-md-none text-uppercase">
                          Experience unforgettable holidays at the best rates.
                        </p>
                        <p className=" d-none d-md-block">
                          Experience unforgettable holidays at the best rates.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </div>
          <div>
            <SwiperSlide>
              <div
                className="slider-bg-2"
                style={{
                  backgroundImage: `linear-gradient(90deg,rgba(0,0,0,0.45),rgba(0,0,0,0.15)),url(${backgroundstrip})`,
                }}
              >
                <div
                  className="container-fluid"
                  style={{ animation: "down-enter" }}
                >
                  <div className="row d-flex justify-content-lg-start justify-content-center align-items-center">
                    <div className="col-xl-12 col-lg-12  col-md-12 col-6">
                      <div
                        className="hero4-content"
                        data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1500"
                      >
                        <h2 class="text-capitalize d-none d-md-block text-uppercase">
                          {" "}
                          Top-notch Booking
                        </h2>
                        <p class="d-block d-md-none text-uppercase">
                          Dig into a process of searching, comparing, and
                          booking hotels.
                        </p>
                        <p className=" d-none d-md-block">
                          Dig into a process of searching, comparing, and
                          booking hotels.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </div>
          <div>
            <SwiperSlide>
              <div
                className="slider-bg-2"
                style={{
                  backgroundImage: `linear-gradient(90deg,rgba(0,0,0,0.45),rgba(0,0,0,0.15)),url(${backgroundgte})`,
                }}
              >
                <div className="container-fluid">
                  <div className="row d-flex justify-content-lg-start justify-content-center align-items-center">
                    <div className="col-xl-12 col-lg-12  col-md-12 col-6">
                      <div className="hero4-content">
                        <h2 class="text-capitalize d-none d-md-block text-uppercase">
                          First-rate Solution
                        </h2>
                        <p class="d-block d-md-none text-uppercase">
                          Access a one-step solution for all your travel needs.
                        </p>
                        <p className=" d-none d-md-block">
                          Access a one-step solution for all your travel needs.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </div>
          <div>
            <SwiperSlide>
              <div
                className="slider-bg-2"
                style={{
                  backgroundImage: `linear-gradient(90deg,rgba(0,0,0,0.45),rgba(0,0,0,0.15)),url(${background5})`,
                }}
              >
                <div className="container-fluid">
                  <div className="row d-flex justify-content-lg-start justify-content-center align-items-center">
                    <div className="col-xl-12 col-lg-12  col-md-12 col-6">
                      <div className="hero4-content">
                        <h2 class="text-capitalize d-none d-md-block text-uppercase">
                          {" "}
                          VIP Experience{" "}
                        </h2>
                        <p class="d-block d-md-none text-uppercase">
                          Unlock a premium holiday experience with exclusive
                          golf packages at special rates.
                        </p>
                        <p className="d-none d-md-block">
                          Unlock a premium holiday experience with exclusive
                          golf packages at special rates.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </div>
          <div>
            <SwiperSlide>
              <div
                className="slider-bg-2"
                style={{
                  backgroundImage: `linear-gradient(90deg,rgba(0,0,0,0.45),rgba(0,0,0,0.15)),url(${background2})`,
                }}
              >
                <div className="container-fluid">
                  <div className="row d-flex justify-content-lg-start justify-content-center align-items-center">
                    <div className="col-xl-12 col-lg-12  col-md-12 col-6">
                      <div className="hero4-content">
                        <h2 class="text-capitalize d-none d-md-block text-uppercase">
                          Premium Solution
                        </h2>
                        <p class="d-block d-md-none text-uppercase">
                          Discover smart travel solutions and special travel
                          products.
                        </p>
                        <p className=" d-none d-md-block">
                          Discover smart travel solutions and special travel
                          products.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </div>

          <div>
            <SwiperSlide>
              <div
                className="slider-bg-2"
                style={{
                  backgroundImage: `linear-gradient(90deg,rgba(0,0,0,0.45),rgba(0,0,0,0.15)),url(${background4})`,
                }}
              >
                <div className="container-fluid">
                  <div className="row d-flex justify-content-lg-start justify-content-center align-items-center">
                    <div className="col-xl-12 col-lg-12  col-md-12 col-6">
                      <div className="hero4-content">
                        <h2 class="text-capitalize d-none d-md-block text-uppercase">
                          Luxurious Stay
                        </h2>
                        <p class="d-block d-md-none text-uppercase">
                          Enjoy a warm ambience, great facilities, and positive
                          vibes.
                        </p>
                        <p className=" d-none d-md-block">
                          Enjoy a warm ambience, great facilities, and positive
                          vibes.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </div>
        </Swiper>

        <div class="image-box-link d-flex">
          <Link onClick={<scrollToTop />} to="/tour">
            <img src="assets/images/dubai/dubaihome.png" />
          </Link>
          <Link onClick={<scrollToTop />} to="/tripstick">
            <img src="assets/images/dubai/tripstickhome.png" />
          </Link>
          <Link onClick={<scrollToTop />} to="/gte">
            <img src="assets/images/dubai/gtehome.png" />
          </Link>
          <Link onClick={<scrollToTop />} to="/royal-lifestyle">
            <img src="assets/images/dubai/royalhome.png" />
          </Link>
          <Link onClick={<scrollToTop />} to="/sts">
            <img src="assets/images/dubai/stshome.png" />
          </Link>
          <Link onClick={<scrollToTop />} to="/niu">
            <img src="assets/images/niu100.png" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
