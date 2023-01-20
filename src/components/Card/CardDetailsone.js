import React from 'react'
import { Link } from "react-router-dom";
function CardDetailsone() {

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
        <img className="img-fluid" src="assets/images/dubai/newone/details.png" alt="image" />
    </div>
    <div className="content-clip position-absolute ">
        <div className="row">
            <div className="col-lg-6">

  
      <div className="blog-lavel2 d-grid">
            <Link className="text-white-light" to="#">From </Link>
            <Link className="text-weight-bold" to="">$92</Link>
            </div>
            <div className="baner-det-content  baner-det-content-det mt-160">
        <h2 className="text-uppercase justify-content-center">PACKAGE HOLIDAYS</h2>
        <img className="small-image" src="assets/images/dubai/newone/Group 16735.svg" />
        <h2 className="justify-content-center text-capitalize">istanbul -cappadocia - istanbul</h2>
        <p>Turkey is a transcontinental country located in Southeastern Europe and Southwestern Asia bordering the Black Sea.</p>
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
