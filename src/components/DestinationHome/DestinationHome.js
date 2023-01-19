import React,{useState,useEffect} from 'react'
import { Link } from "react-router-dom";
import Slider from "react-slick";
import {AiFillStar} from 'react-icons/ai'
import axios from "axios";
import url from "../url.jsx";
function DestinationHome() {
  const [testi,setTesti]=useState([]);
 
     async function gettesti()
      {
        const response= await axios.get(`${url.baseURL}/home`);
        // return response.data.testimonials;
        setTesti(response.data.testimonials);
      }
      useEffect(()=>{
        gettesti();
        // setTesti(gettesti());

      },[]);
      const renderHTML = (rawHTML) => React.createElement("div", { dangerouslySetInnerHTML: { __html: rawHTML } });
      const tests=testi.map((item)=>{
        return[
          <div>
          <div className="testimonial-card testimonial-card-alpha">
        
          <div className="testimonial-card-top">
        <img src={`${url.mediaURL}/${item.image}`} />
          </div>
          <div className="testimonial-body">
         
          {renderHTML(item.description)}
          <div className="testimonial-bottom">
          <div className="reviewer-info">
          <h4 className="reviewer-name">{item.title}</h4>
          <span>{item.created_at}</span>
          </div>
          <ul className="testimonial-rating">
          <li>
          <AiFillStar/></li>
          <li>
          <AiFillStar /></li>
          <li>
          <AiFillStar /></li>
          <li>
          <AiFillStar /></li>
          </ul>
          </div>
          </div>
          </div>
             </div>
        ]
      })
      var count=0;
      var show=0;
      count=testi.length;
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
  return (
    <div>
    <div className="destination-area destination-style-two testimonial-area testimonial-style-three p-dest pb-5" data-aos="zoom-out-down" >
    <div className="container-fluid">
<h2 className="section-head-alpha testimonial-text text-capitalize mb-4 text-center">Testimonials</h2>

  <Slider {...settings}>

    {tests}
  
         
   
  </Slider>


      </div>

    </div>

    </div>
  )
}

export default DestinationHome
