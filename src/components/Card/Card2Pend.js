import React from 'react'
import { Link } from "react-router-dom";
function Card2Pend() {
  return (
    <div>

    <div className=" pt-1">
    <div className="container">
        <h2 className="mb-2 text-center text-capitalize font-weight-bold mt-5 h2-pending">Reimagine Your Next Experience</h2>
        <p className="text-center mb-5 ">The next step of your journey starts here.
        Browse our special holiday packages, filled with everything you need to
        know in order to start planning your perfect trip! 
        </p>
    <div className="row">
        <div className="col-lg-4 col-md-6">
            <div className="blog-card-gamma">
            <div className="blog-thumb">
            <Link to="/packagedetails">
            <img src="assets/images/dubai/newone/details1.png" alt="" />
            </Link>
            <div className="blog-lavel2 d-grid">
            <Link className="text-white-light" to="#">From </Link>
            <Link className="text-weight-bold" to="">$398</Link>
            </div>
    
            </div>
        


            <div className="media-content">
    <h2 className="text-uppercase">PRAGUE– VIENNA– BUDAPEST / 8 DAYS</h2>
    <div className="explore-i d-flex flex-column mt-2">
    <Link onClick={<scrollToTop />} to="/PRAGUE–VIENNA–BUDAPEST" className="text-capitalize">More Details</Link>
    <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
    </div>
</div>
        
            </div>
            </div>
            <div className="col-lg-4 col-md-6">
                <div className="blog-card-gamma">
                <div className="blog-thumb">
                <Link to="/istanbul">
                <img src="assets/images/dubai/newone/details6.png" alt="" />
                </Link>
       
                <div className="blog-lavel2 d-grid">
                    <Link className="text-white-light" to="#">From </Link>
                    <Link className="text-weight-bold" to="">$251</Link>
                    </div>
        
                </div>


                <div className="media-content">
                <h2 className="text-uppercase">ARMENIA / 6 DAYS</h2>
                <div className="explore-i d-flex flex-column mt-2">
                <Link onClick={<scrollToTop />} to="/armenia" className="text-capitalize">More Details</Link>
                <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                </div>
            </div>
            
                </div>
                </div>
        <div className="col-lg-4 col-md-6">
            <div className="blog-card-gamma">
            <div className="blog-thumb">
            <Link to="#">
            <img src="assets/images/dubai/newone/details5.png" alt="" />
            </Link>
      
            <div className="blog-lavel2 d-grid">
                <Link className="text-white-light" to="#">From </Link>
                <Link className="text-weight-bold" to="">$1450</Link>
                </div>
 
            </div>
        

            <div className="media-content">
    <h2 className="text-uppercase">SPAIN & PORTUGAL / 8 DAYS</h2>
    <div className="explore-i d-flex flex-column mt-2">
    <Link onClick={<scrollToTop />} to="/spain&portugal" className="text-capitalize">More Details</Link>
    <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
    </div>
</div>

            </div>
            </div>
            <div className="col-lg-4 col-md-6">
                <div className="blog-card-gamma">
                <div className="blog-thumb">
                <Link onClick={<scrollToTop />} to="/spain&portugal">

                <img src="assets/images/dubai/newone/details2.png" alt="" />
                </Link>
      
                <div className="blog-lavel2 d-grid">
                    <Link className="text-white-light" to="#">From </Link>
                    <Link className="text-weight-bold" to="">$1660</Link>
                    </div>

                </div>
            

                <div className="media-content">
                <h2 className="text-uppercase">SPAIN / 8 DAYS</h2>
                <div className="explore-i d-flex flex-column mt-2">
                <Link onClick={<scrollToTop />} to="/spain" className="text-capitalize">More Details</Link>
                <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                </div>
            </div>
                </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="blog-card-gamma">
                    <div className="blog-thumb">
                    <Link to="#">
                    <img src="assets/images/dubai/newone/detasils3.png" alt="" />
                    
                    </Link>
        
                    <div className="blog-lavel2 d-grid">
                        <Link className="text-white-light" to="#">From </Link>
                        <Link className="text-weight-bold" to="">$470</Link>
                        </div>
           
                    </div>

                    <div className="media-content">
                    <h2 className="text-uppercase">BOSNIA & HERZEGOVINA / 8 DAYS</h2>
                    <div className="explore-i d-flex flex-column mt-2">
                    <Link onClick={<scrollToTop />} to="/BOSNIA&HERZEGOVINA" className="text-capitalize">More Details</Link>
                    <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                    </div>
                </div>
                
                    </div>
                    </div>
            <div className="col-lg-4 col-md-6">
                <div className="blog-card-gamma">
                <div className="blog-thumb">
                <Link to="#">
                <img src="assets/images/dubai/newone/details4.png" alt="" />
                </Link>
       
                <div className="blog-lavel2 d-grid">
                    <Link className="text-white-light" to="#">From </Link>
                    <Link className="text-weight-bold" to="">$251</Link>
                    </div>
        
                </div>

                <div className="media-content">
                <h2 className="text-uppercase">AZERBAIJAN / 5 DAYS</h2>
                <div className="explore-i d-flex flex-column mt-2">
                <Link onClick={<scrollToTop />} to="/azerbaijan" className="text-capitalize">More Details</Link>
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

export default Card2Pend
