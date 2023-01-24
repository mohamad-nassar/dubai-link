import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import axios from "axios";
import url from "../url";
import backgroundmobile from "../../assets/banner/banner10.jpg";
function MoreSectionn() {
  const [banner, setBanner] = useState([]);
  async function getbanners() {
    const response = await axios.get(`${url.baseURL}/home`);
    setBanner(response.data.banners);
  }
  useEffect(() => {
    getbanners();
  }, []);
  const renderHTML = (rawHTML) => React.createElement("div", { dangerouslySetInnerHTML: { __html: rawHTML } });
  const settings = {
    infinite: true,
    dots: true,
    autoplay: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const settingss = {
    infinite: true,
    dots: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <div className=" more-update-sectionnn  d-none d-md-block">
        <div className="container-fluid">
          <div className="row d-flex justify-content-center align-items-center gy-5">
            <div className="row more-rec more-rec-2">
              
              {banner.map((item)=>{
                return[
<div
                className="col-md-5 mb-5 mb-lg-0"
                data-aos="fade-up"
                data-aos-duration="3000"
              >
                <h2>{item.title1}</h2>
                <p className="text-center mt-4 htdr-sections">
                {renderHTML(item.description1)}
                </p>
                <div className="col-md-12 text-lg-center text-center pt-4">
                  <button
                    onClick={<scrollToTop />}
                    className="button-fill-primary update-btn2 slide"
                  >
                    {" "}
                    <Link to={item.link1}>Explore</Link>
                  </button>
                </div>
              </div>,
             
             
             
              <div
                className="col-md-2 text-center"
                data-aos="fade-up"
                data-aos-duration="3000"
              >
                <svg className="Rectangle_627">
                  <rect
                    id="Rectangle_627"
                    rx="0"
                    ry="0"
                    x="0"
                    y="0"
                    width="9"
                    height="163"
                  ></rect>
                </svg>
              </div>,
              
              
              <div
                className="col-md-5 mb-5 mb-lg-0"
                data-aos="fade-up"
                data-aos-duration="3000"
              >
                <h2>{item.title2}</h2>
                <p className="text-center mt-4 htdr-sections">
                  {renderHTML(item.description2)}
                </p>
                <div className="col-md-12 text-lg-center text-center pt-4">
                  <button
                    onClick={<scrollToTop />}
                    className="button-fill-primary update-btn2 slide"
                  >
                    {" "}
                    <Link to={item.link2}>Explore</Link>
                  </button>
                </div>
              </div>
                ]
              })[1]}
              



            </div>
          </div>
        </div>
      </div>

      <div className="destination-area testimonial-area-mob destination-style-two testimonial-area testimonial-style-three pt-lg-110 pb-lg-110 pt-2 d-block d-md-none">
        <Slider {...settings}>
          
        {banner.map((item)=>{
          return[
            <div>
            <div className="destination-card-style-two destination-card-style-two-mobile">
              <div className="testimonial-card-beta mx-auto">
                <div className="testimonial-card-body testimonial-card-body-home">
                  <div className="testimonial-info">
                    <div className="reviewr-info">
                      <div className="reviwer-info-cotn">
                        <h5 className="reviewer-name reviewer-name-mobile">
                          {item.title1}
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="review-texts">
                    <p className="mobile-p-home">
                      {renderHTML(item.description1)}
                    </p>
                    <div className="col-lg-12 text-lg-center text-center pt-4">
                      <Link onClick={<scrollToTop />} to={item.link1}>
                        {" "}
                        <button className="button-fill-primary update-btn2 update-btn2-mobile text-capitalize">
                          explore
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>,

          <div>
            <div className="destination-card-style-two destination-card-style-two-mobile">
              <div className="testimonial-card-beta mx-auto">
                <div className="testimonial-card-body testimonial-card-body-home">
                  <div className="testimonial-info">
                    <div className="reviewr-info">
                      <div className="reviwer-info-cotn">
                        <h5 className="reviewer-name reviewer-name-mobile">
                          {item.title2}
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="review-texts">
                    <p className="mobile-p-home">
                      {renderHTML(item.description2)}
                    </p>
                    <div className="col-lg-12 text-lg-center text-center pt-4">
                      <Link onClick={<scrollToTop />} to={item.link2}>
                        <button className="button-fill-primary update-btn2 update-btn2-mobile text-capitalize">
                          Explore
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          ];
        })}
         



        </Slider>
      </div>
    </div>
  );
}

export default MoreSectionn;
