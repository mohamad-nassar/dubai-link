import React from 'react'
import { Link } from "react-router-dom";
import {BsCheck} from 'react-icons/bs';

function CardApplysix() {
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
        <h2 class="text-capitalize">Sales Specialist  -  GTE</h2>
        <h5 class="mb-4">We are looking to hire a sales specialist for our Cairo office with the below requirements: </h5>

     

<div class="row">
<div class="col-lg-12">
<h2>Key Duties and Responsibilities </h2>
<ul class="ordered-list-disc">
<li><p>Calling existing and potential customers to persuade them to register and use our GTE system. </p></li>
<li><p>Accurately record details of our agents.</p></li>
<li><p>Develop relationships with key accounts.</p></li>
<li><p>Processing all agents' sign-ups accordingly.</p></li>
<li><p>Generating promising leads.</p></li>
<li><p>Managing customer accounts by ensuring that existing agents remain satisfied with our system.</p></li>
<li><p>Developing in-depth knowledge of the GTE system to make suitable recommendations based on travelers' needs and preferences.</p></li>
</ul>
</div>


<div class="col-lg-12">
<h2>Skills, Experience & Educational Requirements  </h2>
<ul class="ordered-list-disc">
<li><p>Bachelor degree.</p></li>
<li><p>Strong database</p></li>
<li><p> 2 to 3 years of experience in corporative sales.</p></li>
<li><p>Excellent writing and verbal communication skills.</p></li>
<li><p>Ability to multi-task, organize and prioritize work.</p></li>
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

export default CardApplysix
