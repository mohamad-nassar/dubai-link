import axios from 'axios';
import React,{useState,useEffect} from 'react'
import { Link } from "react-router-dom";
import Slider from "react-slick";
import url from '../url';
function CardDest() {
    const settings = {
        infinite: true,
        dots:true,
        autoplay: true,
        speed: 1000,
        margin:30,
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
      const [banner,setBanner]=useState({
        title:"",
        description:"",
        values:[]
       })
       async function getdest(){
         const response=await axios.get(`${url.baseURL}/destination`);
         setBanner({
          title:response.data.dest.title,
          description:response.data.dest.description,
          values:response.data.values,
         })
       }
       useEffect(()=>{
        getdest()
       },[])
       const renderHTML = (rawHTML) => React.createElement("div", { dangerouslySetInnerHTML: { __html: rawHTML } });
  return (
    <div>
    <div className="container">
    <ul className=" breadcrumbb bread-padding-top mt-5">
    <li><Link to="/">Home</Link></li>

    <li>Destination Representation</li>
</ul>
</div>
    <div className="container-fluid mt-5">
    <div className="blog-wrapper  pb-5">
    <h2 class="text-capitalize text-center headingpackages d-block d-md-none">Destination Representation</h2>
    <div className="container">
        <h2 className="text-center text-capitalize">Unlock <span>a</span> New World</h2>
        <p className="text-center text-justify mb-5 ">{renderHTML(banner.description)}</p>
   
   </div>      
</div>
</div>
   
   <div className="full-width pb-5">
<div className="container-fluid">
<h2 className="text-center text-capitalize mb-5 text-blog-wrapper hr-lines ">Our Goals</h2>

<div className="row d-none d-md-flex mt-lg-5">


{banner.values.map((item)=>{
  return[
<div className="col-lg-3 col-md-6 col-12  mb-4 mb-md-2">
<div className="img-dest-card img-dest-card-1">
<div className="img-dest active">
<img className="img-fluid"  src={url.mediaURL+"/"+item.image} />
</div>
<div className="content-dest-text">
<p>{renderHTML(item.description)}</p>
</div>
</div>
</div>
  ];
})}


</div>
<div class="mobile-destination-slider d-block d-md-none">
<Slider {...settings}>
<div>
<div className="img-dest-card img-dest-card-1">
<div className="img-dest active">
<img className="img-fluid"  src="assets/images/dubai/newone/dest-one.png" />
</div>
<div className="content-dest-text">
<p>Linking cultures to enhance knowledge and connectivity between travelers and global/local service providers for which the travel industry is a “raison d’être”.</p>
</div>
</div>
</div>
<div>
<div className="img-dest-card img-dest-card-1">
<div className="img-dest ">
<img className="img-fluid" src="assets/images/dubai/newone/dest-two.png" />
</div>
<div className="content-dest-text">
<p>Creating an economic value for each destination and boosting the respective tourism sector by introducing this destination to a new market that can complement and support its growth.</p>
</div>
</div>
</div>


<div>

<div className="img-dest-card img-dest-card-1">
<div className="img-dest">
<img className="img-fluid"  src="assets/images/dubai/newone/dest-three.png" />
</div>
<div className="content-dest-text">
<p>Making sure that our expertise will extend tourism activities, ensuring year-round demand to increase revenues and pursuits in the entire country.</p>
</div>
</div>
</div>

<div>

<div className="img-dest-card img-dest-card-1">
<div className="img-dest">
<img className="img-fluid"  src="assets/images/dubai/newone/dest-four.png" />
</div>
<div className="content-dest-text">
<p>Developing an understanding of sustainability in tourism for both destinations and services.</p>
</div>
</div>
</div>
</Slider>
</div>
  
    </div>
    </div>
    </div>

  )
}

export default CardDest
