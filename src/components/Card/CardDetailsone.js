import axios from 'axios';
import React,{useState,useEffect} from 'react'
import { Link,useParams } from "react-router-dom";
import url from '../url';
function CardDetailsone() {
  const params=useParams();
  const [pack,setPack]=useState({
    image:"",
    logo:"",
    title:"",
    description:"",
    price:"",
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
    <ul className=" breadcrumbb mt-3">
    <li><Link to="/">Home</Link></li>
    <li><Link to="/packages">Packages</Link></li>
    <li className="text-capitalize">Destination <span class="text-small">of the</span> month</li>
</ul>
</div>
<div className="container mt-5">

    <div>

    <div className="item item-banner-det  position-relative">
    <div className="card-clip position-relative">
        <img className="img-fluid" src={pack.footer} alt="image" />
    </div>
    <div className="content-clip position-absolute ">
        <div className="row">
            <div className="col-lg-6">

  
      <div className="blog-lavel2 d-grid">
            <Link className="text-white-light" to="#">From </Link>
            <Link className="text-weight-bold" to="">{pack.price}</Link>
            </div>
            <div className="baner-det-content  baner-det-content-det mt-160">
        <h2 className="text-uppercase justify-content-center">PACKAGE HOLIDAYS</h2>
        <img className="small-image" src={pack.logo} />
        <h2 className="justify-content-center text-capitalize">{pack.title}</h2>
        <p>{renderHTML(pack.description)}</p>
    </div>
    </div>
</div>

    </div>
</div>


    </div>

  </div>

    </div>
  )
}

export default CardDetailsone
