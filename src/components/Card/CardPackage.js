import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { json, Link, useParams } from "react-router-dom";
import url from '../url';
function CardPackage() {
  const params=useParams();
  const [back,setBack]=useState("");
  const [title,setTitle]=useState("");
  const [desc,setDesc]=useState("");
  const [prop,setProp]=useState([]);
  const [room,setRoom]=useState([]);
  const [web,setweb]=useState([]);
  const [loc,setLoc]=useState([]);
  async function gethotel()
  {
    const response=await axios.get(`${url.baseURL}/package/hotel/${params.id}`);
    setBack(url.mediaURL+"/"+response.data.hotel.image);
    setTitle(response.data.hotel.title);
    setDesc(response.data.hotel.description);
    setProp(response.data.hotel.prop);
    setRoom(response.data.hotel.room);
    setweb(response.data.hotel.website);
    setLoc(response.data.hotel.location);
  }
  useEffect(()=>{
    gethotel();
  },[])
  const renderHTML = (rawHTML) => React.createElement("div", { dangerouslySetInnerHTML: { __html: rawHTML } });
  return (
    <div>
    <div className="container">
    <ul className=" breadcrumbb mt-5 bread-padding-top">
    <li><Link to="/">Home</Link></li>
    <li><Link to="/package-details">Destination <span class="text-small">of the</span> month</Link></li>
    <li>{title}</li>
</ul>
</div>
    <div className="container mt-80">
    <div className="blog-wrapper-hotel  pb-5">
    <h2 className="text-center text-capitalize">{title}</h2>
    <p className=" paragraphotel text-center mb-1 ">
    {renderHTML(desc)}
    </p>
</div>
<div className="accommodation-btns d-block d-lg-flex">
<button className="button-fill-primary text-center d-flex justify-content-center m-auto update-btn2 slide mt-5 mb-5">
<a  className="text-capitalize" href="https://booking.com/">Book Now</a></button>
</div>

</div>
<section className="row-package mt-100">
<div className="container">
<div className="row">
<div className="col-lg-4 col-12">
<div className="package-p d-flex">
<h3>4.5</h3>
<span>Excellent</span>
<div className="progrs-img d-flex mt-4">
<img className="img-fluid h-20 mt-3" src="/assets/images/dubai/progrs-img.png" />
<h3  className="reviewmobile">731 reviews</h3>

</div>
</div>

<div className="p-last mt-4">
<p>#225 of 2,453 hotels in Istanbul</p>
</div>

<div className="prog mt-3">
<div className="prog-1 d-flex">
<h3>Location</h3>
<div className="div-prog d-flex">
<div className="w3-light-grey w3-round-xlarge mt-3 ml-2 ">
<div className="w3-container w3-gre w3-round-xlarge" style={{width:"65%"}}></div>

</div>
<div className="span-p mt-3 ml-2">
<span>4.3</span>
</div>
</div>
</div>


<div className="prog-1 d-flex">
<h3>Cleanliness</h3>
<div className="div-prog d-flex">
<div className="w3-light-grey w3-round-xlarge mt-3 ml-2 ">
<div className="w3-container w3-gre w3-round-xlarge" style={{width:"68%"}}></div>

</div>
<div className="span-p mt-3 ml-2">
<span>4.4</span>
</div>
</div>
</div>

<div className="prog-1 d-flex">
<h3>Service</h3>
<div className="div-prog d-flex">
<div className="w3-light-grey w3-round-xlarge mt-3 ml-2 ">
<div className="w3-container w3-gre w3-round-xlarge" style={{width:"60%"}}></div>

</div>
<div className="span-p mt-3 ml-2">
<span>4.1</span>
</div>
</div>
</div>

<div className="prog-1 d-flex">
<h3>Value</h3>
<div className="div-prog d-flex">
<div className="w3-light-grey w3-round-xlarge mt-3 ml-2 ">
<div className="w3-container w3-gre w3-round-xlarge" style={{width:"60%"}}></div>

</div>
<div className="span-p mt-3 ml-2">
<span>4.3</span>
</div>
</div>
</div>
</div>
</div>

<div className="col-md-8 d-md-flex col-12">
<div className="col-lg-6 col-12">
<h3 className="black-light">Property Amenities</h3>
<div className="icons-package mt-5">
<ul>
{
  prop=="" ? "" :
  new Map(Object.entries(JSON.parse(prop)).map(item=>{
    return[
      <li>{renderHTML(item[1])}</li>
    ]
  })
  )

}

{/* <li><img src="assets/images/dubai/parking.png" />
<Link className="a-icons">Parking</Link></li>
<li><img src="assets/images/dubai/wifi.png" />
<Link className="a-icons">Free internet</Link></li>

<li><img src="assets/images/dubai/parking.png" />
<Link className="a-icons">Fitness Center with gym / Workout Room</Link></li>
<li><img src="assets/images/dubai/alcool.png" />
<Link className="a-icons">Bar / Lounge</Link></li>
<li><img src="assets/images/dubai/business.png" />
<Link className="a-icons">Highchairs available</Link></li>
<li><img src="assets/images/dubai/car.png" />
<Link className="a-icons">Airport transportation</Link></li>
<li><img src="assets/images/dubai/globe.png" />
<Link className="a-icons">Business Center with internet Access</Link></li> */}

</ul>
</div>
</div>
<div className="col-lg-6 col-12">
<h3 className="black-light">Room Amenities</h3>
<div className="icons-package mt-5">
<ul>
{
    room=="" ? "" :
  new Map(Object.entries(JSON.parse(room)).map(item=>{
    return[
      <li>{renderHTML(item[1])}</li>
    ]
  })
  )

}
</ul>
</div>
</div>
</div>
</div>

<div className="row mt-5">

</div>
</div>
</section>

<section>
<div className="container mt-5">
<iframe src={loc} height="450" style={{width:"100%"}}></iframe>
</div>
</section>

<div className="accommodation-btns d-block d-lg-flex">

    <button className="button-fill-primary text-center d-flex justify-content-center m-auto update-btn2 slide mt-5 mb-5">
    <a  className="text-capitalize" href={web}>visit website</a></button>
</div>

    </div>
  )
}

export default CardPackage
