import React from 'react'
import { Link } from "react-router-dom";
import {BsCheck} from 'react-icons/bs';

function CardApply() {
  return (
    <div>
    <div className="container">
    <ul className=" breadcrumbb mt-5 bread-padding-top">
    <li><Link to="/">Home</Link></li>

    <li><Link to="/careers">Careers</Link></li>
    <li>Apply</li>
</ul>
</div>
    <div className="container mt-60">
    <div className="blog-wrapper  pb-5">
    <h2 class="text-capitalize text-center headingpackages d-block d-md-none">Apply</h2>
    <div className="container">

        <div class="apply-text text-align-left mt-5">
        <h2 class="text-capitalize">Sales Manager - GTE</h2>
        <h5 class="mb-4">We are looking to hire a sales manager for our Dubai office with the below requirements: </h5>


<div class="row">
<div class="col-lg-12">
<h2>Key Duties and Responsibilities </h2>
<ul class="ordered-list-disc">
<li><p>Qualifying, developing, and closing sales opportunities within a defined territory. </p></li>
<li><p>Tracking sales opportunities and achieving sales targets.</p></li>
<li><p>Understanding industry trends, product capabilities, and customer requirements.</p></li>
<li><p>Establishing a long-term customer relationship for future cross-selling and up-selling opportunities.</p></li>
<li><p>Delivering a solid knowledge of our online booking system to our clients during sales visits.</p></li>
</ul>
</div>


<div class="col-lg-12">
<h2>Skills, Experience & Educational Requirements  </h2>
<ul class="ordered-list-disc">
<li><p>Bachelor degree.</p></li>
<li><p>A minimum of 2 years experience in corporate travel.</p></li>
<li><p>Excellent writing and verbal communication skills.</p></li>
</ul>
<h6>The Candidate must be a resident of the UAE.</h6>
</div>
</div>

        </div>

        <div class="d-flex justify-content-end mt-5">
        <button type="button" class="btn btn-dark "  ><Link onClick={<scrollToTop />} to="/applyform">Apply Now</Link></button>
        </div>
</div>
</div>
    </div>
    </div>
  )
}

export default CardApply
