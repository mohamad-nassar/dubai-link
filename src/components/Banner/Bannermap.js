import React from 'react'
import backgroundmap from '../../assets/banner/mapbanner.png';
function Bannermap() {
  return (
    <div>
    <div class="breadcrumb breadcrumb-style-one" style={{ backgroundImage: `url(${backgroundmap})` }}>
    <div class="container">
        <div class="col-lg-12 text-center d-flex justify-content-center">
        <h2 class="bottom-0 text-capitalize d-none d-md-block">our offices</h2>

        </div>
    </div>
</div>
    </div>
  )
}

export default Bannermap
