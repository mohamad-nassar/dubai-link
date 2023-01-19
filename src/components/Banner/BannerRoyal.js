import React,{useState,useEffect} from 'react'
import background from '../../assets/banner/royalbanner.png' ;
import tourBadge from '../../assets/banner/Roylalifestyllogo.svg';
import axios from "axios";
import url from '../url';
function BannerRoyal() {
  const [banner,setBanner]=useState({
    image:"",
    logo:""
  })
  async function getroyal()
  {
    const response=await axios.get(`${url.baseURL}/royal`);
    setBanner({
      image:url.mediaURL+"/"+response.data.royal.image,
      logo:url.mediaURL+"/"+response.data.royal.logo,
    })
  }
  useEffect(()=>{
    getroyal();
  },[])
  return (
    <div>
    <section>
    <div class="breadcrumb bred-tour breadcrumb-style-one"  style={{ backgroundImage: `url(${banner.image})` }}>
    <div class="circle-div">
    <div className='blury-circle blury-circle-banner'></div>
</div>
  <div className='log logg-royal log-banner'>
  <img src={banner.logo} className="logo-rb" alt="royal"/>
</div>
  </div>
  </section>
    </div>
  )
}

export default BannerRoyal
