import React from 'react'
import { Link } from "react-router-dom";
import {FaUserCircle} from 'react-icons/fa'
import {SlCalender} from 'react-icons/sl' 
function CardBlog() {
  return (
    <div>
      
    <div className="blog-area blog-style-two pt-110">
    <div className="container">
    <div className="row">
    <div className="col-lg-7">
    <div className="section-head-gamma text-start">
    <h2 class="text-capitalize">Blogs</h2>
    </div>
    </div>
    <div className="col-lg-5">
    <div className="blog-btn text-lg-end"><Link className="button-fill-round">View All</Link></div>
    </div>
    </div>
    <div className="row">
    <div className="col-lg-4 col-md-6">
    <div className="blog-card-gamma">
    <div className="blog-thumb">
    <Link>
    <img src="assets/images/dubai/newone/detailsimg2.png" alt="" />
    </Link>
 
    </div>
    <div className="blog-content">
    <div className="blog-body-top">
    <Link to="#" className="blog-writer">
    <FaUserCircle /> By John Smith </Link>
    <Link to="#" className="blog-comments">
    <SlCalender />  Novembar 13, 2022</Link>
    </div>
    <h4 className="blog-title"><Link>vitae tempor convallis, mi ligula an
    suscipit nunc, ornare suscipit.</Link></h4>
    </div>
    </div>
    </div>
    <div className="col-lg-4 col-md-6">
    <div className="blog-card-gamma">
    <div className="blog-thumb">
    <Link>
    <img src="assets/images/dubai/newone/detailsimg2.png" alt="" />
    </Link>

    </div>
    <div className="blog-content">
    <div className="blog-body-top">
    <Link to="#" className="blog-writer">
    <FaUserCircle /> By John Smith </Link>
    <Link to="#" className="blog-comments">
    <SlCalender />  Novembar 13, 2022</Link>
    </div>
    <h4 className="blog-title"><Link >Mauris commodo massa vel diamnat
    feugiat sagittis Nunc maxim.</Link></h4>
    </div>
    </div>
    </div>
    <div className="col-lg-4 col-md-6">
    <div className="blog-card-gamma">
    <div className="blog-thumb">
    <Link>
    <img src="assets/images/dubai/newone/detailsimg2.png" alt="" />
    </Link>

    </div>
    <div className="blog-content">
    <div className="blog-body-top">
    <Link to="#" className="blog-writer">
    <FaUserCircle /> By John Smith </Link>
    <Link to="#" className="blog-comments">
    <SlCalender />  Novembar 13, 2022</Link>
    </div>
    <h4 className="blog-title"><Link>Nulla urna leo, volutpat eu maurisa eget
    luctus malesuada urna.</Link></h4>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>



    </div>
  )
}

export default CardBlog
