import axios from "axios";
import React,{useState,useEffect} from "react";
import { Link,useParams } from "react-router-dom";
import Slider from "react-slick";
import url from "../url";
function CardDetailslast() {
  const [slid,setSlid]=useState([]);
  const params=useParams();
  async function getslider()
  {
    const response=await axios.get(`${url.baseURL}/package/${params.id}`);
    setSlid(response.data.package.sliders);
  }
  useEffect(()=>{
    getslider();
  },[])
  var count=0;
  var show=0;
  count=slid.length;
  if(count>3) show=3;
  else show=count;
  const settings = {
    infinite: true,
    dots:true,
    autoplay: true,
    speed: 1000,
    slidesToShow: show,
    slidesToScroll: 1,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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
  const sld=slid.map((item)=>{
    return[
      <div>
      <div className="item">
        <div className="blog-card-gamma blog-card-gamma-margin">
          <div className="blog-thumb blog-thumb-details">
            <Link
              onClick={<scrollToTop />}
              to={"/package/tour/"+item.id}
            >
              <img src={url.mediaURL+"/"+item.image} alt="" />
            </Link>
          </div>

          <div className="media-content">
            <Link
              onClick={<scrollToTop />}
              to={"/package/tour/"+item.id}
            >
              <h2 className="text-uppercase">
                {item.title}
              </h2>
            </Link>
            <div className="explore-i d-flex flex-column mt-2">
              <Link
                onClick={<scrollToTop />}
                to={"/package/tour/"+item.id}
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
    </div>
    ]
  });
  return (
    <div>
      <section className="mt-5 mb-5">
        <div className="container ">
          <h2 className="text-capitalize text-center color-black-light">
            Things <span>to</span> Do <span>in</span> Turkey
          </h2>
          <p className="text-center mb-5">
            Not sure where to start your adventure? <br />
            Our Turkish best-selling tour packages offer you unique and
            unforgettable travel experiences in and of themselves.
          </p>

          <Slider {...settings}>
            {sld}
           

            {/* <div>
              <div className="item">
                <div className="blog-card-gamma blog-card-gamma-margin">
                  <div className="blog-thumb blog-thumb-details">
                    <Link onClick={<scrollToTop />} to="/Cappadocia">
                      <img src="/assets/images/dubai/capadoc.png" alt="" />
                    </Link>
                  </div>

                  <div className="media-content">
                    <Link onClick={<scrollToTop />} to="/Cappadocia">
                      <h2 className="text-uppercase">Cappadocia</h2>
                    </Link>
                    <div className="explore-i d-flex flex-column mt-2">
                      <Link
                        onClick={<scrollToTop />}
                        to="/Cappadocia"
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
            </div>

            <div>
              <div className="item">
                <div className="blog-card-gamma blog-card-gamma-margin">
                  <div className="blog-thumb blog-thumb-details">
                    <Link onClick={<scrollToTop />} to="/prince">
                      <img
                        src="/assets/images/dubai/newone/prince.png"
                        alt=""
                      />
                    </Link>
                  </div>

                  <div className="media-content">
                    <Link onClick={<scrollToTop />} to="/prince">
                      <h2 className="text-uppercase">
                        Full-Day Princes’ Island Tour{" "}
                      </h2>
                    </Link>
                    <div className="explore-i d-flex flex-column mt-2">
                      <Link
                        onClick={<scrollToTop />}
                        to="/prince"
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
            </div>

            <div>
              <div className="item">
                <div className="blog-card-gamma blog-card-gamma-margin">
                  <div className="blog-thumb blog-thumb-details">
                    <Link
                      onClick={<scrollToTop />}
                      to="/tour-sapanaca-masukiye-and-kartepe"
                    >
                      <img src="/assets/images/dubai/kartep.png" alt="" />
                    </Link>
                  </div>

                  <div className="media-content">
                    <Link
                      onClick={<scrollToTop />}
                      to="/tour-sapanaca-masukiye-and-kartepe"
                    >
                      <h2 className="text-uppercase">
                        Full-Day Tour Sapanca, Masukiye and Kartepe
                      </h2>
                    </Link>
                    <div className="explore-i d-flex flex-column mt-2">
                      <Link
                        onClick={<scrollToTop />}
                        to="/tour-sapanaca-masukiye-and-kartepe"
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
            </div>

            <div>
              <div className="item">
                <div className="blog-card-gamma blog-card-gamma-margin">
                  <div className="blog-thumb blog-thumb-details">
                    <Link onClick={<scrollToTop />} to="/troy-tour">
                      <img src="/assets/images/dubai/troy.png" alt="" />
                    </Link>
                  </div>

                  <div className="media-content">
                    <Link onClick={<scrollToTop />} to="/troy-tour">
                      <h2 className="text-uppercase">Troy Tour Day Trip </h2>
                    </Link>
                    <div className="explore-i d-flex flex-column mt-2">
                      <Link
                        onClick={<scrollToTop />}
                        to="/troy-tour"
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
            </div> */}

            {/* <div>
              <div className="item">
                <div className="blog-card-gamma blog-card-gamma-margin">
                  <div className="blog-thumb blog-thumb-details">
                    <Link onClick={<scrollToTop />} to="/hagia-sophia">
                      <img src="/assets/images/dubai/istanbul.png" alt="" />
                    </Link>
                  </div>

                  <div className="media-content">
                    <Link onClick={<scrollToTop />} to="/hagia-sophia">
                      <h2 className="text-uppercase">
                        Hagia Sophia, Blue Mosque, and Grand Bazaar Tour{" "}
                      </h2>
                    </Link>
                    <div className="explore-i d-flex flex-column mt-2">
                      <Link
                        onClick={<scrollToTop />}
                        to="/hagia-sophia"
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
            </div> */}
          </Slider>
        </div>
      </section>
    </div>
  );
}

export default CardDetailslast;
