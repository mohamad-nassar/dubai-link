import axios from 'axios';
import React, { useEffect, useState } from 'react'
import background from '../../assets/banner/tourismback.jpg';
import url from '../url';
function BannerTourism() {
  const [image,setImage]=useState("");
  async function getimage()
  {
    const response=await axios.get(`${url.baseURL}/travel`);
    setImage(url.mediaURL+"/"+response.data.travel.image);
  }
  useEffect(()=>{
    getimage();
  },[])
  return (
    <div>
    <div class="breadcrumb breadcrumb-style-one" style={{ backgroundImage: `url(${image})` }}>
            <div class="container">
            <div class="col-lg-12 text-center d-flex justify-content-center">
            <h2 class="bottom-0 text-capitalize d-none d-md-block">Travel & Tourism</h2>
        
            </div>
            </div>
            </div>
        
    </div>
  )
}

export default BannerTourism
