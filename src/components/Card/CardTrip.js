import axios from 'axios';
import React,{useState,useEffect} from 'react'
import { Link } from "react-router-dom";
import url from '../url';
function CardTrip() {
    const [banner,setBanner]=useState({
        title:"",
        description:"",
        values:[],
        link:"",
      })
      async function getgte(){
        const response=await axios.get(`${url.baseURL}/trips`);
        setBanner({
          title:response.data.trips.title,
          description:response.data.trips.description,
          values:response.data.values,
          link:response.data.trips.link,
        })
      }
      useEffect(()=>{
        getgte()
      },[])
      const renderHTML = (rawHTML) => React.createElement("div", { dangerouslySetInnerHTML: { __html: rawHTML } });
  return (
    <div>
    <div className="container">
    <ul className=" breadcrumbb mt-5">
    <li><Link to="/">Home</Link></li>
    <li><Link to="/travel-and-tourism">Travel & Tourism</Link></li>
    <li>Tripstick</li>
</ul>
</div>
    <div className="container mt-80">
    <div className="blog-wrapper  pb-5" >
    <div className="container" >
        <h2 className="text-center text-capitalize">{banner.title}</h2>
        <p className="text-center  textp ">{renderHTML(banner.description)}</p>

           
            <div className="row mt-120 mb-5"  data-aos="fade-up"
            data-aos-duration="3000">


{banner.values.map((item)=>{
    return[
<div className="col-lg-3 col-12">
<div className="tripstick">
    <div id="n_47">
        <span>{item.title}</span>
    </div>
    <div>
       {renderHTML(item.description)}
    </div>
</div>
</div>
    ];
})}
                
 
    </div>
    
  <button className="button-fill-primary text-center d-flex justify-content-center m-auto update-btn2 slide mt-5 mb-5">
  <a  className="text-capitalize" href={banner.link}>Visit Website</a></button>
  
    </div>
    </div>
</div>
    </div>
  )
}

export default CardTrip
