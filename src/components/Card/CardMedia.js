import React from 'react'
import { Link } from "react-router-dom";
function CardMedia() {
  return (
    <div>
    <div className="container">
    <ul className=" breadcrumbb mt-5">
    <li><Link to="/">Home</Link></li>

    <li>Media</li>
</ul>
</div>
    <div className="container mt-80">
    <div className="blog-wrapper pb-5">
    <div className="container">
        <h2 className="text-center text-capitalize catalonia mb-2">NEWS & ASSETS</h2>
        <p className="text-center textp  mt-4">Find the latest news from Dubai Link Group or browse our photo libraries, videos and more.</p>

        <div className="row mt-5">
            <div className="col-lg-4 col-md-6 col-12">
<div className="img-media">
    <img className="img-fluid" src="assets/images/dubai/newone/laptopww.png" />
</div>
<div className="media-content">
    <h2 className="text-uppercase">NEWS ROOM</h2>
    <p>Keep your finger on the pulse with the latest news and press .</p>
    <div className="explore-i d-flex flex-column mt-2">
    <Link onClick={<scrollToTop />}  to="/room">Explore</Link>
    <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
    </div>
</div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
                <div className="img-media">
                    <img  className="img-fluid" src="assets/images/dubai/newone/imagedubai.png" />
                </div>
                <div className="media-content">
                    <h2 className="text-uppercase">MEDIA LIBRARY</h2>
                    <p>Browse Dubai Link Group’s extensive image libraries, and videos.</p>
                    <div className="explore-i d-flex flex-column mt-2">
                    <Link onClick={<scrollToTop />}  to="#">Explore</Link>
                    <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                    </div>
                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="img-media">
                                    <img  className="img-fluid" src="assets/images/dubai/newone/Dubailinkprofile.png" />
                                </div>
                                <div className="media-content">
                                    <h2 className="text-uppercase">MARKETING COLLATERALS</h2>
                                    <p>Download Dubai Link Group’s company profile to get to know more about us.</p>
                                    <div className="explore-i d-flex flex-column mt-2">
                                    <Link onClick={<scrollToTop />}  to="#">Explore</Link>
                                    <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
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

export default CardMedia
