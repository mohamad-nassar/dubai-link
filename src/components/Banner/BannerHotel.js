import React from 'react'
import background from '../../assets/banner/hotel.png';
import hotelBadge from '../../assets/banner/hotellogoo.png';
function BannerRoyal() {
  return (
    <div>
    <div class="breadcrumb breadcrumb-style-one" style={{ backgroundImage: `url(${background})` }}>
    <div class="container">
        <div class="col-lg-12 text-center d-flex justify-content-center">
            <h2 class="bottom-0 text-capitalize d-none d-md-block">the elysium taksim</h2>
        </div>
    </div>
    </div>
    </div>
  )
}

export default BannerRoyal
