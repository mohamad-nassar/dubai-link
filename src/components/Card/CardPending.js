import React,{useState,useEffect} from 'react'
import { Link } from "react-router-dom";
import Slider from "react-slick";
import axios from 'axios';
import url from '../url';
function CardPending() {
    const [pack,setPack]=useState({
        id:"",
        image:"",
        logo:"",
        title:"",
        description:"",
        price:"",
    })
    async function getdestmonth()
    {
        const response=await axios.get(`${url.baseURL}/package`);
        if(response.data.packmonth)
        setPack({
            id:response.data.packmonth.id,
            image:url.mediaURL+"/"+response.data.packmonth.image,
            logo:url.mediaURL+"/"+response.data.packmonth.logo,
            title:response.data.packmonth.title,
            description:response.data.packmonth.description,
            price:response.data.packmonth.price,
        })
    }
    const renderHTML = (rawHTML) =>
    React.createElement("div", {
      dangerouslySetInnerHTML: { __html: rawHTML },
    });
    useEffect(()=>{
        getdestmonth();
    },[])
  return (
    <div>
    <div className="container">
    <ul className=" breadcrumbb mt-5">
    <li><Link to="/">Home</Link></li>
<li><Link to="/tour">Dubai Link Travel & Tours</Link></li>
    <li>Packages</li>
</ul>
</div>
<div className="container mt-5">
    <div>

    <div className="item item-details-one position-relative">
    <div className="card-clip position-relative">
        <img className="img-fluid" src={pack.image} alt="image" />
    </div>
    <div className="content-clip position-absolute ">
        <div className="row">
            <div className="col-lg-6">

  
      <div className="blog-lavel2 d-grid">
            <Link className="text-white-light" to="#">From </Link>
            <Link className="text-weight-bold" to="">{pack.price}</Link>
            </div>
            <div className="baner-det-content mt-100">
        <h2 className="text-uppercase justify-content-center">DESTINATION &nbsp;<span class="text-small"> of the </span> &nbsp; Month</h2>
        <img className="small-image" src="assets/images/dubai/newone/Group 16735.svg" />
        <h2 className="justify-content-center text-capitalize">{pack.title}</h2>
        <p>{renderHTML(pack.description)}</p>
    </div>
    </div>
</div>
<button className="button-fill-primary text-center button-details d-flex justify-content-center m-auto update-btn2 slide mt-5 mb-5">
<Link  className="text-capitalize" to={"/package/"+pack.id}>More Details</Link></button>
    </div>
    

</div>


    </div>

  </div>

    </div>
  )
}

export default CardPending
