import React from 'react'
import background from '../../assets/banner/aboutturkye.png';
import tourBadge from '../../assets/banner/tourlogo.png';
function BannerDetails() {
  return (
    <div>
    <div class="breadcrumb breadcrumb-style-one " style={{ backgroundImage: `url(${background})` }}>
    <div class="circle-div">
    <div className='blury-circle blury-circle-banner'></div>
    </div>
  <div className='log log-banner'>
  <img src={tourBadge} className="logo-rb" alt="royal"/>
</div>
</div>
    </div>
  )
}

export default BannerDetails
