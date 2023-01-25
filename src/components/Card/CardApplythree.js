import React from 'react'
import { Link } from "react-router-dom";
import {BsCheck} from 'react-icons/bs';

function CardApplythree() {
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
        <h2 class="text-capitalize">Senior Business Development Executive</h2>
        <h5 class="mb-4">We are looking to hire a senior business development executive for our Dubai office with the below requirements: </h5>


<div class="row">
<div class="col-lg-12">
<h2>Key Duties and Responsibilities </h2>
<ul class="ordered-list-disc">
<li><p>Degree in marketing, administration, or similar.</p></li>
<li><p>Certified Travel Associate (CTA) or Certified Travel Counselor (CTC).</p></li>
<li><p>5 years minimum experience in Airline Ticketing, Holiday Packaging & Sales.</p></li>
<li><p>Develop relationships with key accounts.</p></li>
<li><p>Processing all agents' sign-ups accordingly.</p></li>
<li><p>Strong customer service & sales skills for generating leads.</p></li>
<li><p>Extensive knowledge of productivity tools & software.</p></li>
<li><p>Multi-tasking and time-management skills, with the ability to prioritize tasks.</p></li>
<li><p>Intuitive and insightful, particularly regarding human behavior.</p></li>
<li><p>Ability to generate revenue by suggesting suitable products or services.</p></li>
<li><p>Ability to work well under pressure in an agile, fast-paced environment.</p></li>
<li><p>Highly responsive and reliable.</p></li>
<li><p>Availability to work on a flexible schedule.</p></li>
</ul>
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

export default CardApplythree
