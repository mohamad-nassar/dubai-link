import axios from 'axios';
import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import background from '../../assets/banner/aboutturkye.jpg';
import tourBadge from '../../assets/banner/tourlogo.png';
import url from '../url';
function BannerDetails() {
  const params=useParams();
  const [banner,setBanner]=useState({
    image:"",
    logo:"",
  });
  async function getbanner(){
    const response=await axios.get(`${url.baseURL}/package/${params.id}`);
    setBanner({
      image:url.mediaURL+"/"+response.data.package.image,
      logo:url.mediaURL+"/"+response.data.package.logo
    })
  }
  useEffect(()=>{
    getbanner();
  })
  return (
    <div>
    <div class="breadcrumb breadcrumb-style-one " style={{ backgroundImage: `url(${banner.image})` }}>
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
