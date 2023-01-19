import React from 'react'
import { Link } from "react-router-dom";
import tripBadge from '../../assets/banner/Tripstiklogo.png';
import gteBadge from '../../assets/banner/GTELogo.png';
import tourBadge from '../../assets/banner/dubailogotour.png';
function CardTourism() {
  return (
    <div>
    <div className="container">
    <ul className=" breadcrumbb mt-5 bread-padding-top">
    <li><Link to="/">Home</Link></li>

    <li>Travel & Tourism</li>
</ul>
</div>


    <div className="blog-wrapper pb-5">
    <h2 class="text-capitalize text-center headingpackages d-block d-md-none">Travel & Tourism</h2>
    <div className="container">
        <h2 className="text-center text-capitalize text-mobile">Unforgettable holidays <span>at the</span> best rates</h2>
        <p className="text-center textp pb-100 mb-5 ">At Dubai Link Group , we pride ourselves in bringing two main players into the fast-tracking B2B travel booking industry, Dubai Link Travel & Tours and Global Travel Engine (GTE). Plan, book and enjoy unforgettable holidays with the most flexibility at the best rates with Tripstick, the cutting-edge B2C platform now at our customers' disposal.</p>
        </div>
        </div>
        <div className="full-width">
        <div className="container">
        <h2 className="text-center text-capitalize text-blog-wrapper hr-lines ">Subsidiaries We Trust</h2>
        <div className="row mt-lg-5">
                <div className="col-lg-4 col-md-6 col-12">
                <div className="box-tour">
                    <div className="blog-card-gamma logo-no-bottom blog-card-gamma-tourism-bottom">
                        <div className="blog-thumb">
                            <Link onClick={<scrollToTop />} to="/tour">
                                <img src="assets/images/dubai/ll.png" alt="" />
                            </Link>
                            <div className="hover-content mt-4">
                            <h5 data-bs-toggle="modal" data-bs-target="#exampleModal">Dubai Link Travel and Tours </h5>
                      
                            <button className="button-fill-primary update-btn2 slide "> <Link onClick={<scrollToTop />} to="/tour"> <i className="fa fa-long-arrow-right" aria-hidden="true"></i>More Details</Link></button>
                      
                            </div>
                        </div>
                </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                <div className="box-tour">
                    <div className="blog-card-gamma logo-no-bottom blog-card-gamma-tourism-bottom">
                        <div className="blog-thumb">
                            <Link onClick={<scrollToTop />} to="/gte">
                                <img src="assets/images/dubai/GTE_image_.png" alt="" /> 
                            </Link>
                            <div className="hover-content mt-4">
                            <h5 data-bs-toggle="modal" data-bs-target="#exampleModal">GTE</h5>
                      
                            <button className="button-fill-primary update-btn2 slide "> <Link onClick={<scrollToTop />} to="/gte"> <i className="fa fa-long-arrow-right" aria-hidden="true"></i>More Details</Link></button>
                      
                            </div>
               
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                <div className="box-tour">
                    <div className="blog-card-gamma blog-card-gamma-tourism-bottom">
                        <div className="blog-thumb">
                            <Link onClick={<scrollToTop />} to="/tripstick">
                                <img src="assets/images/dubai/Tripstickcard.png" alt="" />
                            </Link>
                            <div className="hover-content mt-4">
                            <h5 data-bs-toggle="modal" data-bs-target="#exampleModal">Tripstick</h5>
                      
                            <button className="button-fill-primary update-btn2 slide "> <Link onClick={<scrollToTop />} to="/tripstick"> <i className="fa fa-long-arrow-right" aria-hidden="true"></i>More Details</Link></button>
                      
                            </div>
               
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

export default CardTourism
