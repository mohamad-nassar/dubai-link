import React from 'react'
import { Link } from "react-router-dom";
import cantinaBadge from '../../assets/banner/Lacantinalogo.png';
import nuiBadge from '../../assets/banner/nuiblack.png';
function Cardsite() {
  return (
    <div>
    <div className="container">
    <ul className=" breadcrumbb mt-5 bread-padding-top">
    <li><Link to="/">Home</Link></li>

    <li>SiteMap</li>
</ul>
</div>
    <div className="container mt-80">
    <div className="blog-wrapper pb-5">
    <div className="container">
        <h2 className=" text-capitalize">Site Map</h2>

    </div>

    <div class="row">

    <h2 class="sitemaptitle text-capitalize">Home Page</h2>
    <ul class="ordered-list-disc">
<li><p className=" text-capitalize">Introduction</p></li>
<li><p className=" text-capitalize"> Travel & Tourism</p></li>
<li><p className=" text-capitalize"> Hospitality</p></li>
<li><p className=" text-capitalize">Destination Representation</p></li>
<li><p className=" text-capitalize">Royal Lifestyle</p></li>
<li><p className=" text-capitalize">Destinations</p></li>
<li><p className=" text-capitalize">Testimonials</p></li>

    </ul>
    <h2 class="sitemaptitle text-capitalize ">About Page</h2>
    <ul class="ordered-list-disc">
    <li><p className=" text-capitalize">Subsidiaries</p></li>
    <li><p className=" text-capitalize">Mission</p></li>
    <li><p className=" text-capitalize">Vision</p></li>
    <li><p className=" text-capitalize">Values</p></li>
</ul>
  
    <h2 class="sitemaptitle text-capitalize">Travel & Tourism </h2>
    <ul class="ordered-list-disc">
    <li><p className=" text-capitalize">Dubai Link Travel And Tours</p></li>
    <li><p className=" text-capitalize">GTE</p></li>
    <li><p className=" text-capitalize">Tripstick</p></li>
    </ul>

    <h2 class="sitemaptitle text-capitalize">Hospitality</h2>
    <ul class="ordered-list-disc">
    <li><p>Niu Hotel</p></li>
    </ul>
    <h2 class="sitemaptitle text-capitalize">STS</h2>
    <h2  class="sitemaptitle text-capitalize">Destination Representation</h2>
    <h2  class="sitemaptitle text-capitalize">Royal Lifestyle</h2>
    <h2  class="sitemaptitle text-capitalize">Packages</h2>
    <ul class="ordered-list-disc">
    <li><p className=" text-capitalize">Packages Details</p></li>
    </ul>
    <h2  class="sitemaptitle text-capitalize">Contact Us</h2>

    <h2  class="sitemaptitle text-capitalize">Footer</h2>
    <ul class="ordered-list-disc">
    <li><p className=" text-capitalize">Careers</p></li>
    <li><p className=" text-capitalize">Terms & Conditions</p></li>
    <li><p className=" text-capitalize">Privacy Policy</p></li>
    </ul>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Cardsite
