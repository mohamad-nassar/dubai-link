import React from 'react'
import background from '../../assets/banner/azerbaijan.png';
import background1 from '../../assets/banner/azerbaijanmobile.png';
function BannerAzerbaijan() {
  return (
    <div>
    <div class="breadcrumb breadcrumb-style-one d-none d-md-block" style={{ backgroundImage: `url(${background})` }}>
    <div class="container">
    <div class="col-lg-12 text-center d-flex justify-content-center">


    </div>
    </div>

    </div>


    <div class="breadcrumb breadcrumb-style-one d-md-none d-block " style={{ backgroundImage: `url(${background1})` }}>
    <div class="container">
    <div class="col-lg-12 text-center d-flex justify-content-center">


    </div>
    </div>

    </div>

    </div>
  )
}

export default BannerAzerbaijan
