import React from 'react'
import { Link } from "react-router-dom";
function CardHotel() {
  return (
    <div>
    <div className="container">
    <ul className=" breadcrumbb mt-5 bread-padding-top">
    <li><Link to="/">Home</Link></li>
    <li><Link onClick={<scrollToTop />} to="/packagedetails">Destination <span class="text-small">of the</span> month</Link></li>
    <li>Hotel</li>
</ul>
</div>
    <div className="container mt-5">
    <div className="blog-wrapper-hotel pb-5">
    <h2 className="text-center text-capitalize">THE ELYSIUM TAKSIM</h2>
    <p className="text-center paragraphotel text-justify mb-1 ">
    The Elysium Taksim is a paradise where luxury and comfort come together, located in the heart of Taksim, surrounded by shopping,
     entertainment and centers, right in the middle of Istanbul’s historical monuments. Located in the heart of Istanbul, the hotel
     provides easy access to the city’s popular cultural sites, gastronomic and shopping venues. Here you can discover the spirit
    and history of the city. The hotel offers excellent 
    facilities and convenient services to make every vacation or business stay an unforgettable experience.
    </p>
</div>


<div className="accommodation-btns d-block d-lg-flex">
    <div className="button rounded-1 text-center mt-5">
        <a href="#" className="text-capitalize visit-web-button mt-3 visit-btn-hotel"> Book Now</a>
    </div>
</div>


<div className="image-hotel d-none d-lg-block">
  <img className="img-fluid" src="assets/images/dubai/imagehotel.png"></img>
</div>


<div className="image-hotel d-block d-lg-none">
  <img className="img-fluid" src="assets/images/dubai/col-hotel (1).png"></img>
  <img className="img-fluid" src="assets/images/dubai/col-hotel (2).png"></img>
  <img className="img-fluid" src="assets/images/dubai/col-hotel (3).png"></img>
  <img className="img-fluid" src="assets/images/dubai/col-hotel (4).png"></img>
</div>

</div>

    </div>
  )
}

export default CardHotel