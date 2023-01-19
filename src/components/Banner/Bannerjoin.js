import React from 'react'
import background from '../../assets/banner/Joinus.png';
import background1 from '../../assets/banner/applynowbanner.png';
function Bannerjoin() {
  return (
    <div>
    <div class="breadcrumb  breadcrumb-style-one d-md-none d-block" style={{ backgroundImage: `url(${background})` }}>
    <div class="container">
        <div class="col-lg-12 text-center d-flex justify-content-center">
            <h2 class="bottom-0 text-capitalize d-none d-md-block">Careers</h2>
        </div>
    </div>
</div>


<div class="breadcrumb bread-join breadcrumb-style-one d-none d-md-block" style={{ backgroundImage: `url(${background1})` }}>
<div class="container">
    <div class="col-lg-12 text-center d-flex justify-content-center">
        <h2 class="bottom-0 text-capitalize d-none d-md-block">Careers</h2>
    </div>
</div>
</div>
    </div>
  )
}

export default Bannerjoin
