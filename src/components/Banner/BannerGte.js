import axios from 'axios';
import React,{useState,useEffect} from 'react'
import backgroundgte from '../../assets/banner/gteimagebanner.png';
import gteBadge from '../../assets/banner/GTELogo.png';
import url from '../url';
function BannerGte() {
  const [banner,setBanner]=useState({
    image:"",
    logo:"",
  })
  async function getgte(){
    const response=await axios.get(`${url.baseURL}/gte`);
    setBanner({
      image:url.mediaURL+"/"+response.data.gte.image,
      logo:url.mediaURL+"/"+response.data.gte.logo,
    })
  }
  useEffect(()=>{
    getgte()
  },[])
  return (
    <div>
      
    <div class="breadcrumb breadcrumb-style-one" style={{ backgroundImage: `url(${banner.image})` }}>
    <div class="circle-div">
    <div className='blury-circle blury-circle-banner'></div>
</div>
    <div className='log log3 log-banner'>
    <img src={banner.logo} className="logo-rb" alt="royal"/>
  </div>

  </div>

    </div>
  )
}

export default BannerGte;