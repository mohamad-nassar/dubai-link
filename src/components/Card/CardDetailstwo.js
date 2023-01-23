import axios from 'axios';
import React,{useState,useEffect} from 'react'
import { Link,useParams } from "react-router-dom";
import Slider from "react-slick";
import url from '../url';
function CardDetailstwo() {
  const params=useParams();
  const [pack,setPack]=useState({
    image:"",
    logo:"",
    title:"",
    description:"",
    price:"",
    hotels:[]
})
async function getdestmonth()
{
    const response=await axios.get(`${url.baseURL}/package/${params.id}`);
    if(response.data.package)
    setPack({
        id:response.data.package.id,
        image:url.mediaURL+"/"+response.data.package.image,
        logo:url.mediaURL+"/"+response.data.package.logo,
        title:response.data.package.title,
        description:response.data.package.description,
        price:response.data.package.price,
        footer:url.mediaURL+"/"+response.data.package.footer,
        hotels:response.data.package.hotels,
    })
}
const renderHTML = (rawHTML) =>
React.createElement("div", {
  dangerouslySetInnerHTML: { __html: rawHTML },
});
useEffect(()=>{
    getdestmonth();
},[])
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
        <h2 className="text-capitalize text-center color-black-light">Find Hotels <span>in</span> {pack.title}</h2>
        <p className="text-center mb-5 hotel-max-width">Looking for a holiday at a bargain? We’re here to help. We team up with the best across the globe to help you stay in comfy hotels.  
        Here are our best offers in one place, to save big and travel more. 
        </p>

    <Slider {...settings}>
    {pack.hotels.map((item)=>{
        return[
          <div>
          <div className="item">
          <div className="blog-card-gamma blog-card-gamma-margin">
              <div className="blog-thumb blog-thumb-details">
              <Link onClick={<scrollToTop />} to={"/package/hotel/"+item.id} >
              <img src={url.mediaURL+"/"+item.image} alt="" />
              </Link>
              <div className="blog-lavel2 d-grid">
              <Link className="text-white-light" to={"/package/hotel/"+item.id} >From </Link>
              <Link className="text-weight-bold" to="">{item.price}</Link>
              </div>
      
      
       
      
              </div>
      
              <div className="media-content">
              <h2 className="text-uppercase">{item.title}</h2>
              <p>★★★★</p>
              <div className="explore-i d-flex flex-column mt-2">
              <Link onClick={<scrollToTop />} to={"/package/hotel/"+item.id} className="text-capitalize">More Details</Link>
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
              </div>
          </div>
          
              </div>
      </div>
          </div>
        ]
    })}
   

  </Slider>
    </div>
    </section>
    </div>
  )
}

export default CardDetailstwo
