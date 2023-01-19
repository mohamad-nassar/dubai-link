import axios from 'axios';
import React,{useState,useEffect} from 'react'
import background from '../../assets/banner/stsbanner.png';
import stsBadge from '../../assets/banner/STSlogo.png';
import url from '../url';
function BannerSts() {
  const [banner,setBanner]=useState({
    logo:"",
    image:""
   })
   async function getsts(){
     const response=await axios.get(`${url.baseURL}/sts`);
     setBanner({
      image:url.mediaURL+"/"+response.data.sts.image,
      logo:url.mediaURL+"/"+response.data.sts.logo,
     })
   }
   useEffect(()=>{
    getsts()
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

export default BannerSts
