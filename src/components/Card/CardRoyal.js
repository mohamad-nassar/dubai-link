import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import url from "../url";
function CardRoyal() {
  const [banner, setBanner] = useState({
    title: "",
    description: "",
    values: [],
  });
  async function getroyal() {
    const response = await axios.get(`${url.baseURL}/royal`);
    setBanner({
      title: response.data.royal.title,
      description: response.data.royal.description,
      values: response.data.values,
    });
  }
  useEffect(() => {
    getroyal();
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

          <li>Royal Lifestyle</li>
        </ul>
      </div>

      <div className="blog-wrapper pb-5">
        <div className="container-fluid">
          <h2 className="text-center text-capitalize royal-h2">
            {banner.title}
          </h2>
          <p className="text-center textp  mt-4">
            {renderHTML(banner.description)}
          </p>
        </div>
      </div>
      <div className="full-width pb-5">
        <div clas="container">
          <h6 className="text-capitalize text-blog-wrapper  text-center   mb-5 pb-md-2 hr-lines ">
            why choose Dubai Link Group?
          </h6>
          <div
            className="row mt-lg-5"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            {banner.values.map((item)=>{
                return[
                    <div className="col-lg-4 col-md-6 col-12">
              <div className="blog-card-gamma blog-card-gamma-image blog-card-gamma-clip blog-royal">
                <div className="blog-thumb blog-thumb2">
                  <Link to="#">
                    <img src={url.mediaURL+"/"+item.image} alt="" />
                  </Link>
                </div>
                <div className="blog-content blog-content-3">
                  <h4 className="blog-title">
                    <Link to="#">
                    {item.title}
                    </Link>
                  </h4>
                </div>
              </div>
            </div>
                ];
            })}
            

            {/* <div className="col-lg-4 col-md-6 col-12">
              <div className="blog-card-gamma blog-card-gamma-clip blog-royal">
                <div className="blog-thumb blog-thumb2">
                  <Link to="#">
                    <img
                      width="200"
                      src="assets/images/dubai/airplane.gif"
                      alt=""
                    />
                  </Link>
                </div>
                <div className="blog-content blog-content-3">
                  <h4 className="blog-title">
                    <Link to="#">
                      {" "}
                      Private charter or regular airline reservation
                    </Link>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="blog-card-gamma blog-card-gamma-clip blog-royal">
                <div className="blog-thumb blog-thumb2">
                  <Link to="#">
                    <img
                      width="200"
                      src="assets/images/dubai/tech-support.gif"
                      alt=""
                    />
                  </Link>
                </div>
                <div className="blog-content blog-content-3 ">
                  <h4 className="blog-title">
                    <Link to="#">
                      {" "}
                      Dedicated customer service line 24/7 live chat
                    </Link>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="blog-card-gamma blog-card-gamma-clip blog-royal">
                <div className="blog-thumb blog-thumb2">
                  <Link to="#">
                    <img
                      width="200"
                      src="assets/images/dubai/translation.gif"
                      alt=""
                    />
                  </Link>
                </div>
                <div className="blog-content blog-content-3">
                  <h4 className="blog-title">
                    <Link to="#">
                      {" "}
                      Exceptional multilingual concierge service <br />{" "}
                      dedicated to answering & catering to all <br /> the needs
                      of the golfers during their trip
                    </Link>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="blog-card-gamma blog-card-gamma-clip blog-royal">
                <div className="blog-thumb blog-thumb2">
                  <Link to="#">
                    <img
                      width="200"
                      src="assets/images/dubai/golf.gif"
                      alt=""
                    />
                  </Link>
                </div>
                <div className="blog-content blog-content-3">
                  <h4 className="blog-title">
                    <Link to="#">
                      Complimentary Jack Charles Golf Clubs set <br /> shipped
                      to your desired destination
                    </Link>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="blog-card-gamma blog-card-gamma-clip blog-royal">
                <div className="blog-thumb blog-thumb2">
                  <Link to="#">
                    <img
                      width="200"
                      src="assets/images/dubai/list.gif"
                      alt=""
                    />
                  </Link>
                </div>
                <div className="blog-content blog-content-3">
                  <h4 className="blog-title">
                    <Link to="#">
                      {" "}
                      Special access to a loyalty program with <br /> benefits
                      upon points accumulation
                    </Link>
                  </h4>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardRoyal;
