import axios from 'axios';
import React,{useState,useEffect} from 'react'
import background from '../../assets/banner/tourbanner.png' ;
import tourBadge from '../../assets/banner/tourlogo.png';
import url from '../url';

function BannerTour() {
  const [back,setBack]=useState("");
  const [logo,setLogo]=useState("");
  async function gettour()
  {
    const response=await axios.get(`${url.baseURL}/tour`);
    setBack(url.mediaURL+"/"+response.data.tour.image)
    setLogo(url.mediaURL+"/"+response.data.tour.logo)
  }
  useEffect(()=>{
    gettour();
  },[])
  return (
    <div>
    <section>
    <div class="breadcrumb bred-tour breadcrumb-style-one"  style={{ backgroundImage: `url(${back})` }}>
    <div class="circle-div">
    <div className='blury-circle blury-circle-banner'></div>
</div>
  <div className='log log-banner'>
  <img src={logo} className="logo-rb" alt="royal"/>
</div>
  </div>
  </section>
    </div>
  )
}

export default BannerTour
