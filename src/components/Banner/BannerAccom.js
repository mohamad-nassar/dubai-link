import React from 'react'
import backgroundaccom from '../../assets/banner/accomodationbanner.png';
function BannerAccom() {
  return (
    <div>
    <div class="breadcrumb breadcrumb-style-one" style={{ backgroundImage: `url(${backgroundaccom})` }}>
    <div class="container">
        <div class="col-lg-12  text-center d-flex justify-content-center ">
            <h2 class="bottom-0 text-capitalize  d-none d-md-block">Accommodation</h2>
        </div>
    </div>
</div>

    </div>
  )
}

export default BannerAccom
