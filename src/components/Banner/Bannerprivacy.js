import axios from 'axios';
import React, { useEffect, useState } from 'react'
import background from '../../assets/banner/policies.png';
import url from '../url';
function Bannerprivacy() {
  const [image,setImage]=useState("");
  async function getimage()
  {
    const response=await axios.get(`${url.baseURL}/privacy`);
    setImage(url.mediaURL+"/"+response.data.privacy.image);
  }
  useEffect(()=>{
    getimage();
  })
  return (
    <div>
    <div class="breadcrumb breadcrumb-style-one" style={{ backgroundImage: `url(${image})` }}>
    <div class="container">
        <div class="col-lg-12 text-center d-flex justify-content-center">
            <h2 class="bottom-0 text-capitalize d-none d-md-block">Privacy Policy</h2>
        </div>
    </div>
</div>
    </div>
  )
}

export default Bannerprivacy
