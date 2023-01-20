import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import url from "../url";
function MoreSection() {
  const [banner, setBanner] = useState([]);
    async function getbanners()
    {
        const response=await axios.get(`${url.baseURL}/home`);
        setBanner(response.data.banners);
    }
    useEffect(()=>{
        getbanners();
    },[])
    const renderHTML = (rawHTML) => React.createElement("div", { dangerouslySetInnerHTML: { __html: rawHTML } });
  return (
    <div>
      <div className="more-update-section more-update-sectionn">
        <div className="container-fluid">
          <div className="row more-rec d-none d-md-flex ">
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
                        height="183"
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
                ];
            })[0]}
           



          </div>
        </div>
      </div>
    </div>
  );
}

export default MoreSection;
