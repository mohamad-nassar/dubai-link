import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import url from "../url";
function Card2Pend() {
    const [banner,setBanner]=useState({
        title:"",
        description:"",
        packages:[]
    })
    async function getpackage()
    {
        const response=await axios.get(`${url.baseURL}/package`);
        setBanner({
            title:response.data.intro.title,
            description:response.data.intro.description,
            packages:response.data.packages
        })
    }
    useEffect(()=>{
        getpackage();
    },[]);
    const renderHTML = (rawHTML) => React.createElement("div", { dangerouslySetInnerHTML: { __html: rawHTML } });
  return (
    <div>
      <div className=" pt-1">
        <div className="container">
          <h2 className="mb-2 text-center text-capitalize font-weight-bold mt-5 h2-pending">
            {banner.title}
          </h2>
          <p className="text-center mb-5 ">
           {renderHTML(banner.description)}
          </p>
          <div className="row">
            {banner.packages.map((item)=>{
                return[
                    <div className="col-lg-4 col-md-6">
                    <div className="blog-card-gamma">
                      <div className="blog-thumb">
                        <Link to="#">
                          <img src={url.mediaURL+"/"+item.image} alt="" />
                        </Link>
                        <div className="blog-lavel2 d-grid">
                          <Link className="text-white-light" to="#">
                            From{" "}
                          </Link>
                          <Link className="text-weight-bold" to="">
                            {item.price}
                          </Link>
                        </div>
                      </div>
      
                      <div className="media-content">
                        <h2 className="text-uppercase">
                         {item.title}
                        </h2>
                        <div className="explore-i d-flex flex-column mt-2">
                          <Link
                            onClick={<scrollToTop />}
                            to="#"
                            className="text-capitalize"
                          >
                            More Details
                          </Link>
                          <i
                            className="fa fa-long-arrow-right"
                            aria-hidden="true"
                          ></i>
                        </div>
                      </div>
                    </div>
                  </div>
                ];
            })}
           


            {/* <div className="col-lg-4 col-md-6">
              <div className="blog-card-gamma">
                <div className="blog-thumb">
                  <Link to="/istanbul">
                    <img src="assets/images/dubai/newone/details6.png" alt="" />
                  </Link>

                  <div className="blog-lavel2 d-grid">
                    <Link className="text-white-light" to="#">
                      From{" "}
                    </Link>
                    <Link className="text-weight-bold" to="">
                      $251
                    </Link>
                  </div>
                </div>

                <div className="media-content">
                  <h2 className="text-uppercase">ARMENIA / 6 DAYS</h2>
                  <div className="explore-i d-flex flex-column mt-2">
                    <Link
                      onClick={<scrollToTop />}
                      to="/armenia"
                      className="text-capitalize"
                    >
                      More Details
                    </Link>
                    <i
                      className="fa fa-long-arrow-right"
                      aria-hidden="true"
                    ></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="blog-card-gamma">
                <div className="blog-thumb">
                  <Link to="#">
                    <img src="assets/images/dubai/newone/details5.png" alt="" />
                  </Link>

                  <div className="blog-lavel2 d-grid">
                    <Link className="text-white-light" to="#">
                      From{" "}
                    </Link>
                    <Link className="text-weight-bold" to="">
                      $1450
                    </Link>
                  </div>
                </div>

                <div className="media-content">
                  <h2 className="text-uppercase">SPAIN & PORTUGAL / 8 DAYS</h2>
                  <div className="explore-i d-flex flex-column mt-2">
                    <Link
                      onClick={<scrollToTop />}
                      to="/spain&portugal"
                      className="text-capitalize"
                    >
                      More Details
                    </Link>
                    <i
                      className="fa fa-long-arrow-right"
                      aria-hidden="true"
                    ></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="blog-card-gamma">
                <div className="blog-thumb">
                  <Link onClick={<scrollToTop />} to="/spain&portugal">
                    <img src="assets/images/dubai/newone/details2.png" alt="" />
                  </Link>

                  <div className="blog-lavel2 d-grid">
                    <Link className="text-white-light" to="#">
                      From{" "}
                    </Link>
                    <Link className="text-weight-bold" to="">
                      $1660
                    </Link>
                  </div>
                </div>

                <div className="media-content">
                  <h2 className="text-uppercase">SPAIN / 8 DAYS</h2>
                  <div className="explore-i d-flex flex-column mt-2">
                    <Link
                      onClick={<scrollToTop />}
                      to="/spain"
                      className="text-capitalize"
                    >
                      More Details
                    </Link>
                    <i
                      className="fa fa-long-arrow-right"
                      aria-hidden="true"
                    ></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="blog-card-gamma">
                <div className="blog-thumb">
                  <Link to="#">
                    <img
                      src="assets/images/dubai/newone/detasils3.png"
                      alt=""
                    />
                  </Link>

                  <div className="blog-lavel2 d-grid">
                    <Link className="text-white-light" to="#">
                      From{" "}
                    </Link>
                    <Link className="text-weight-bold" to="">
                      $470
                    </Link>
                  </div>
                </div>

                <div className="media-content">
                  <h2 className="text-uppercase">
                    BOSNIA & HERZEGOVINA / 8 DAYS
                  </h2>
                  <div className="explore-i d-flex flex-column mt-2">
                    <Link
                      onClick={<scrollToTop />}
                      to="/BOSNIA&HERZEGOVINA"
                      className="text-capitalize"
                    >
                      More Details
                    </Link>
                    <i
                      className="fa fa-long-arrow-right"
                      aria-hidden="true"
                    ></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="blog-card-gamma">
                <div className="blog-thumb">
                  <Link to="#">
                    <img src="assets/images/dubai/newone/details4.png" alt="" />
                  </Link>

                  <div className="blog-lavel2 d-grid">
                    <Link className="text-white-light" to="#">
                      From{" "}
                    </Link>
                    <Link className="text-weight-bold" to="">
                      $251
                    </Link>
                  </div>
                </div>

                <div className="media-content">
                  <h2 className="text-uppercase">AZERBAIJAN / 5 DAYS</h2>
                  <div className="explore-i d-flex flex-column mt-2">
                    <Link
                      onClick={<scrollToTop />}
                      to="/azerbaijan"
                      className="text-capitalize"
                    >
                      More Details
                    </Link>
                    <i
                      className="fa fa-long-arrow-right"
                      aria-hidden="true"
                    ></i>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card2Pend;
