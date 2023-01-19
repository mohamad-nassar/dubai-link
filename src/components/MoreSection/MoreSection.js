import React from 'react'
import { Link } from "react-router-dom";
function MoreSection() {

  return (
    <div>
    <div className="more-update-section more-update-sectionn" >
<div className="container-fluid">
<div className="row more-rec d-none d-md-flex ">
<div className="col-md-5 mb-5 mb-lg-0"  data-aos="fade-up"
data-aos-duration="3000">
    <h2>Travel & Tourism</h2>
    <p className="text-center mt-4 htdr-sections">Not only do our platforms provide remarkable paramount services that help business partners grant their clients an outstanding travel experience, but they also help travelers plan, book and enjoy unforgettable holidays at the best rates.
    </p>
    <div className="col-md-12 text-lg-center text-center pt-4">
        <button onClick={<scrollToTop />} className="button-fill-primary update-btn2 slide"> <Link to="/tourism">Explore</Link></button>
        </div>
</div>
    <div className="col-md-2 text-center"  data-aos="fade-up"
    data-aos-duration="3000">
        <svg className="Rectangle_627" >
            <rect id="Rectangle_627" rx="0" ry="0" x="0" y="0" width="9" height="183">
            </rect>
        </svg>
    </div>


    <div className="col-md-5 mb-5 mb-lg-0"  data-aos="fade-up"
    data-aos-duration="3000">
<h2>Hospitality</h2>
<p className="text-center mt-4 htdr-sections">In an industry of constant change, we continue to strive towards ensuring customer-oriented experiences, providing comfortable accommodations, convenient services and fine dining. Our aim is to offer all travelers a home away from home.</p>
<div className="col-md-12 text-lg-center text-center pt-4">
    <button onClick={<scrollToTop />} className="button-fill-primary update-btn2 slide"> <Link to="/hospitality">Explore</Link></button>
    </div>
    </div>

</div>
</div>
    </div>



 
    </div>
  )
}

export default MoreSection
