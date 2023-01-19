import React from 'react'
import { Link } from "react-router-dom";
function CardJoin() {
  return (
    <div>
    <div className="container">
    <ul className=" breadcrumbb mt-5 bread-padding-top">
    <li><Link to="/">Home</Link></li>

    <li>Careers</li>
</ul>
</div>
    <div className="container mt-80">
    <div className="blog-wrapper  pb-5">
    <h2 class="text-capitalize text-center headingpackages d-block d-md-none">Careers</h2>
    <div className="container">
    <h2 className="text-capitalize text-center">Future-<span>proof</span> <span> Your </span> career plan <span>with </span> us</h2>
        <p className="text-center mt-4 d-block d-md-none">Join a diverse and innovative business <br/> and embark on a fulfilling future.<br /> We are investing in our colleagues to grow into the leaders of tomorrow. <br/>
        </p>
        <p className="text-center mt-4 d-none d-md-block">Join a diverse and innovative business and embark on a fulfilling future. <br /> We are investing in our colleagues to grow into the leaders of tomorrow. <br/>
        </p>





<ul className="nav nav-pills nav-pills-center mb-3 mt-5 " id="pills-tab" role="tablist">
<li className="nav-item" role="presentation">

  <button className="nav-link nav-days-block active" id="pills-dubai-tab" data-bs-toggle="pill" data-bs-target="#pills-dubai" type="button" role="tab" aria-controls="pills-dubai" aria-selected="true">Dubai</button>
</li>
<li className="nav-item" role="presentation">
  <button className="nav-link" id="pills-cairo-tab" data-bs-toggle="pill" data-bs-target="#pills-cairo" type="button" role="tab" aria-controls="pills-cairo" aria-selected="false">Cairo</button>
</li>


</ul>
<div className="tab-content" id="pills-tabContent">
<div className="tab-pane fade show active" id="pills-dubai" role="tabpanel" aria-labelledby="pills-dubai-tab">
<div class="table-responsive ">
  
<table class="table table-striped">


  <thead>
    <tr>
      <th>#</th>
      <th class="w-des-40">Title</th>
      <th class="w-des-20">Department</th>
      <th class="w-des-20">Facility</th>
      <th>Description</th>
      <th>Posting Date</th>
      <th>Action</th>


    </tr>
  </thead>

  <tbody>
    <tr>
      <th scope="row">1</th>
      <td><Link onClick={<scrollToTop />} to="/applytwo">Sales Specialist</Link></td>
      <td>Sales Department</td>
      <td>GTE </td>
      <td>We are looking to hire a sales specialist for...</td>
      <td>5 October, 2022</td>
      <td>
      <div>

      <button type="button" class="btn btn-dark"><Link onClick={<scrollToTop />} to="/applytwo">Apply Now</Link></button>
      </div></td>

    </tr>
    <tr>
      <th scope="row">2</th>
      <td><Link onClick={<scrollToTop />} to="/apply">Sales Manager </Link></td>
      <td>Sales Department</td>
      <td>GTE </td>
      <td>We are looking to hire a sales manager for...</td>
      <td>5 October, 2022</td>
      <div>
<button type="button" class="btn btn-dark"><Link onClick={<scrollToTop />} to="/apply">Apply Now</Link></button>
</div>

    </tr>
    <tr>
      <th scope="row">3</th>
      <td><Link onClick={<scrollToTop />} to="/applythree">Senior Business Development Executive</Link></td>
      <td>Sales & Marketing Department</td>
      <td>Dubai Link Travel & Tous </td>
      <td>We are looking to hire Senior Business Development Executive for...</td>
      <td>17 November 20,22</td>
      <td>
      <div>
      <button type="button" class="btn btn-dark"><Link onClick={<scrollToTop />} to="/applythree">Apply Now</Link></button>
      </div>
      </td>

    </tr>
  </tbody>

</table>

</div>


</div>

<div className="tab-pane fade" id="pills-cairo" role="tabpanel" aria-labelledby="pills-cairo-tab">
<div class="table-responsive">
<table class="table table-striped">
  <thead>
    <tr>
      <th>#</th>
      <th class="w-des-40">Title</th>
      <th class="w-des-20">Department</th>
      <th class="w-des-20">Facility</th>
      <th>Description</th>
      <th>Posting Date</th>
      <th>Action</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <th scope="row">1</th>
      <td><Link onClick={<scrollToTop />} to="/applysix">Sales Specialist</Link></td>
      <td>Sales Department</td>
      <td>GTE </td>
      <td>We are looking to hire a sales specialist for...</td>
      <td>15 December, 2022</td>
      <td><div>
      <button type="button" class="btn btn-dark"><Link onClick={<scrollToTop />} to="/applysix">Apply Now</Link></button>
      </div></td>

    </tr>
    <tr>
      <th scope="row">2</th>
      <td><Link onClick={<scrollToTop />} to="/applyfive">Sales Manager</Link></td>
      <td>Sales Department</td>
      <td>GTE </td>
      <td>We are looking to hire a sales manager for...</td>
      <td> 15 October, 2022</td>
      <td>
      <div>
<button type="button" class="btn btn-dark"><Link onClick={<scrollToTop />} to="/applyfive">Apply Now</Link></button>
</div>
</td>
    </tr>

  </tbody>

</table>

</div>



</div>
</div>





</div>
</div>
    </div>
    </div>
  )
}

export default CardJoin
