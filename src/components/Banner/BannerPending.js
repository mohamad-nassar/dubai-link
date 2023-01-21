import React,{useState,useEffect} from 'react'
import background from '../../assets/banner/detailscrumb.png';
import tourBadge from '../../assets/banner/tourlogo.png';
import axios from "axios";
import url from '../url';
function BannerPending() {
  const [banner,setBanner]=useState({
    image:"",
    logo:""
  })
  async function getgeneral()
  {
    const response=await axios.get(`${url.baseURL}/package`);
    setBanner({
      image:url.mediaURL+"/"+response.data.intro.image,
      logo:url.mediaURL+"/"+response.data.intro.logo
    })
  }
  useEffect(()=>{
    getgeneral();
  },[])
  return (
    <div>
    <div class="breadcrumb breadcrumb-style-one" style={{ backgroundImage: `url(${banner.image})` }}>
    <div class="circle-div">
    <div className='blury-circle blury-circle-banner'></div>
    </div>
  <div className='log log-banner'>
  <img src={banner.logo} className="logo-rb" alt="royal"/>
</div>
    </div>


    </div>
  )
}

export default BannerPending
