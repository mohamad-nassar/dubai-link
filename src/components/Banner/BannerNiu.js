import React,{useState,useEffect} from 'react'
import background from '../../assets/banner/niiubanner.png';
import niuBadge from '../../assets/banner/nuiblack.png';
import axios from "axios";
import url from '../url';
function BannerNiu() {
  const [banner,setBanner]=useState({
   logo:"",
   image:""
  })
  async function getgte(){
    const response=await axios.get(`${url.baseURL}/niu`);
    setBanner({
     image:url.mediaURL+"/"+response.data.niu.image,
     logo:url.mediaURL+"/"+response.data.niu.logo,
    })
  }
  useEffect(()=>{
    getgte()
  },[])
  const renderHTML = (rawHTML) => React.createElement("div", { dangerouslySetInnerHTML: { __html: rawHTML } });
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

export default BannerNiu
