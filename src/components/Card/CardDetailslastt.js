import React from 'react'
import { Link } from "react-router-dom";
import Slider from "react-slick";
function CardDetailslastt() {
  const settings = {
    infinite: true,
    dots:true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,

  };
  return (
    <div>
          



<Slider {...settings}>
<div>


<div className="item item-det-lastt">
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
            <div className="baner-det-content mt-100">
    <h2 className="text-uppercase justify-content-center mb-4 ">BEST HOLIDAY IN CAPPADOCIA</h2>
    <img className="small-image" src="assets/images/dubai/newone/Group 16735.svg" />
    <h2 className="justify-content-center mb-4 text-capitalize mb-4 mt-4">TÜRKIYE</h2>
    <p>Cappadocia is situated in the middle of Turkey, in central Antolia. The region is mostly known by the three popular towns of Goreme, Urgup and Uchisar but actually it is the name of the very big region spread through the cities of Nevsehir, Kirsehir, Nigde, Aksaray and Kayseri.Cappadocia is situated in the middle of Turkey, in central Antolia.</p>
</div>
</div>
</div>
<button onClick={<scrollToTop />} className="button-fill-primary update-btn5 btn-center mt-4"> <Link to="/">Find Out More</Link></button>

</div>


</div>



</div>




</Slider>

    </div>
  )
}

export default CardDetailslastt
