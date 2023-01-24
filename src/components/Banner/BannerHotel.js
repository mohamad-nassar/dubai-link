import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import background from '../../assets/banner/hotel.jpg';
import hotelBadge from '../../assets/banner/hotellogoo.png';
import url from '../url';
function BannerRoyal() {
  const params=useParams();
  const [back,setBack]=useState("");
  const [title,setTitle]=useState("");
  async function gethotel()
  {
    const response=await axios.get(`${url.baseURL}/package/hotel/${params.id}`);
    setBack(url.mediaURL+"/"+response.data.hotel.image);
    setTitle(response.data.hotel.title);
  }
  useEffect(()=>{
    gethotel();
  },[])
  return (
    <div>
    <div class="breadcrumb breadcrumb-style-one" style={{ backgroundImage: `url(${back})` }}>
    <div class="container">
        <div class="col-lg-12 text-center d-flex justify-content-center">
            <h2 class="bottom-0 text-capitalize d-none d-md-block">{title}</h2>
        </div>
    </div>
    </div>
    </div>
  )
}

export default BannerRoyal
