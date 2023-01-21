import React from 'react'
import { Link } from "react-router-dom";
import background from '../../assets/banner/feature-bg-1.png';
function CardHomePackagetwo() {

  return (
    <div>


<div className="home4-video-area" style={{ backgroundImage: `url(${background})` }}>
<div className="blog-area blog-style-two pt-110">
<div className="container">
<div className="row">
<div className="col-7">
<div className="section-head-gamma text-start">
<h2 class="text-capitalize">Blogs</h2>
<p class="text-white blog-p">Loreum loreum ipsum loreum ipsum loreum ipsum loreum ispum.</p>
</div>
</div>
<div className="col-5">
<div className="blog-btn text-lg-end"><Link className="button-fill-round  slide">View All</Link></div>
</div>
</div>

<div class="row mb-5" >
<div class="col-lg-6 col-12">
<div class="d-flex blog-box">
<div class="flex-shrink-0">
<Link  onClick={<scrollToTop />} to="/blog">
    <img src="assets/images/dubai/img5.png" alt="Sample Image" />
    </Link>
</div>
<div class="flex-grow-1 ms-3">
    <h5>Jhon Carter</h5>
    <p>Excellent feature! I love it. One day I'm definitely going to put this Bootstrap component into use and I'll let you know once I do.</p>
</div>
</div>
</div>




<div class="col-lg-6 col-12">
<div class="d-flex blog-box">
<div class="flex-shrink-0">
<Link  onClick={<scrollToTop />} to="/blog">
    <img src="assets/images/dubai/img5.png" alt="Sample Image" />
    </Link>
</div>
<div class="flex-grow-1 ms-3">
    <h5>Jhon Carter</h5>
    <p>Excellent feature! I love it. One day I'm definitely going to put this Bootstrap component into use and I'll let you know once I do.</p>
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

export default CardHomePackagetwo
