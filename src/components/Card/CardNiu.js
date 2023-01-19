import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import url from "../url";
function CardNiu() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const [banner, setBanner] = useState({
    title: "",
    description: "",
    values: [],
    link: "",
  });
  async function getniu() {
    const response = await axios.get(`${url.baseURL}/niu`);
    setBanner({
      title: response.data.niu.title,
      description: response.data.niu.description,
      link: response.data.niu.link,
      values: response.data.values,
    });
  }
  useEffect(() => {
    getniu();
  }, []);
  const renderHTML = (rawHTML) =>
    React.createElement("div", {
      dangerouslySetInnerHTML: { __html: rawHTML },
    });
  return (
    <div>
      <div className="container">
        <ul className=" breadcrumbb mt-5">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>NIU</li>
        </ul>
      </div>

      <div className="blog-wrapper  pb-5">
        <div className="container">
          <h2 className="text-center text-capitalize catalonia mb-2">
            {banner.title}
          </h2>
          <p className="text-center textp  mt-4">
            {renderHTML(banner.description)}
          </p>
        </div>
      </div>
      <div className="full-width pb-5">
        <div className="container">
          <h2 className="text-center text-capitalize catalonia mb-5 text-blog-wrapper hr-lines ">
            {" "}
            Top Highlights
          </h2>

          <div className="row mt-lg-5 d-none d-md-flex">
           
          {banner.values.map((item)=>{
            return[
              <div className="col-lg-3 col-md-6 col-12">
              <div className="blog-card-gamma niu-gamma-res">
                <div className="blog-thumb">
                  <Link to="#">
                    <img
                      src={url.mediaURL+"/"+item.image}
                      alt=""
                    />
                  </Link>
                </div>
                <div className="blog-content">
                  <h4 className="blog-title">
                    <Link to="#">{item.title}</Link>
                  </h4>
                </div>
              </div>
            </div>
            ]
          })}

           


          </div>

          <div class="mobile-niu d-block d-md-none">
            <Slider {...settings}>

            {banner.values.map((item)=>{
            return[
              <div>
              <div className="blog-card-gamma blog-gmma-niu">
                <div className="blog-thumb">
                  <Link to="#">
                    <img
                     src={url.mediaURL+"/"+item.image}
                      alt=""
                    />
                  </Link>
                </div>
                <div className="blog-content">
                  <h4 className="blog-title">
                  <Link to="#">{item.title}</Link>
                  </h4>
                </div>
              </div>
            </div>
            ]
          })}

            
            </Slider>
          </div>
          <button className="button-fill-primary text-center d-flex justify-content-center m-auto update-btn2 slide mt-5 mb-5">
            <a className="text-capitalize" href={banner.link}>
              Visit Website
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardNiu;
