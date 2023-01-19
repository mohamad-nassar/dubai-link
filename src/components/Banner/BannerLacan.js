import React from 'react'
import background from '../../assets/banner/cantinaback.png';
import lacantinaBadge from '../../assets/banner/Lacantinalogo.png';
function BannerLacan() {
  return (
    <div>
    <div class="breadcrumb breadcrumb-style-one" style={{ backgroundImage: `url(${background})` }}>
    <div class="circle-div">
    <div className='blury-circle blury-circle-banner'></div>
</div>
  <div className='log log3 log-banner'>
  <img src={lacantinaBadge} className="logo-rb" alt="royal"/>
</div>
  </div>
    </div>
  )
}

export default BannerLacan
