import React from 'react'
import background from '../../assets/banner/bannerquote.jpg';
import background1 from '../../assets/banner/bannerquote.jpg';
function BannerQuote() {
  return (
    <div>
    <div class="breadcrumb  breadcrumb-style-one d-md-none d-block" style={{ backgroundImage: `url(${background})` }}>
    <div class="container">
        <div class="col-lg-12 text-center d-flex justify-content-center">
            <h2 class="bottom-0 text-capitalize d-none d-md-block">Get <span>a</span> Quote</h2>
        </div>
    </div>
</div>


<div class="breadcrumb  breadcrumb-style-one d-none d-md-block" style={{ backgroundImage: `url(${background1})` }}>
<div class="container">
    <div class="col-lg-12 text-center d-flex justify-content-center">
    <h2 class="bottom-0 text-capitalize d-none d-md-block">Get <span>a</span> Quote</h2>
    </div>
</div>
</div>
    </div>
  )
}

export default BannerQuote
