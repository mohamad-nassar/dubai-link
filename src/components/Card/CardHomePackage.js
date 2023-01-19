import React from 'react'
import { Link } from "react-router-dom";
import Slider from "react-slick";
import background from '../../assets/banner/feature-bg-1.png';
function CardHomePackage() {
  const settings = {
    infinite: true,
    dots:true,
    


    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [

      
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 2,
          slidesToScrolls: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          margin:10
     
        }
      }
    ]
  };
  return (
    <div>


<div className="home4-video-area" style={{ backgroundImage: `url(${background})` }}>
    <div className="video-batch">
    <div className="container-fluid">
    <div className="row">
        <div className="col-lg-12 col-12  d-lg-block">
          <div className="pack-banner-home">
    
             <p className="text-capitalize">Discover <span>the</span> Best Destinations With Us</p>
      
  
                </div>

                <div className="row">
                <Slider {...settings}>
                <div>
             <div className="feature-card">
<div className="feature-img">
<img src="assets/images/dubai/newone/details2.png" alt="" className="img-fluid" />

</div>
<div className="feature-content">
<Link onClick={<scrollToTop />} to="/spain" className="title">Spain</Link>
<Link class="atwo" onClick={<scrollToTop />} to="/spain">More Details</Link>
</div>
</div>
</div>
<div>
<div className="feature-card">
<div className="feature-img">
<img src="assets/images/dubai/newone/details4.png" alt="" className="img-fluid" />

</div>
<div className="feature-content ">
<Link onClick={<scrollToTop />} to="/azerbaijan" className="title">Azerbaijan</Link>
<Link class="atwo" onClick={<scrollToTop />} to="/azerbaijan">More Details</Link>
</div>
</div>
</div>
<div>
<div className="feature-card">
<div className="feature-img">
<img src="assets/images/dubai/newone/details6.png" alt="" className="img-fluid" />
</div>
<div className="feature-content">
<Link onClick={<scrollToTop />} to="/armenia" className="title">Armenia</Link>
<Link class="atwo" onClick={<scrollToTop />} to="/armenia">More Details</Link>
</div>
</div>
</div>
    <div>
    <div className="feature-card">
    <div className="feature-img">
    <img src="assets/images/dubai/newone/details5.png" alt="" className="img-fluid" />
    </div>
    <div className="feature-content ">
    <Link onClick={<scrollToTop />} to="/BOSNIA&HERZEGOVINA" className="title">BOSNIA & HERZEGOVINA</Link>
    <Link class="atwo" onClick={<scrollToTop />} to="/BOSNIA&HERZEGOVINA">More Details</Link>
    </div>
    </div>
    </div>







    
             <div>
             <div className="feature-card">
             <div className="feature-img">
             <img src="assets/images/dubai/newone/details1.png" alt="" className="img-fluid" />
             </div>
             <div className="feature-content ">
             <Link onClick={<scrollToTop />} to="/PRAGUE–VIENNA–BUDAPEST" className="title">PRAGUE – VIENNA – BUDAPEST</Link>
             <Link class="atwo" onClick={<scrollToTop />} to="/PRAGUE–VIENNA–BUDAPEST">More Details</Link>
             </div>
             </div>
                      </div>
             </Slider>
                </div>
        </div>

</div>
    </div>
    </div>

    </div>
    </div>
  )
}

export default CardHomePackage
