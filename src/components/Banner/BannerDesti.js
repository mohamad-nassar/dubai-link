import axios from 'axios';
import React,{useState,useEffect} from 'react'
import background from '../../assets/banner/destbanner.png';
import url from '../url';
function BannerDesti() {
  const [banner,setBanner]=useState({
    image:""
   })
   async function getdest(){
     const response=await axios.get(`${url.baseURL}/destination`);
     setBanner({
      image:url.mediaURL+"/"+response.data.dest.image,
     })
   }
   useEffect(()=>{
    getdest()
   },[])

  return (
    <div>
    <div class="breadcrumb breadcrumb-style-one " style={{ backgroundImage: `url(${banner.image})` }}>
    <div class="container">
    <div class="col-lg-12 text-center d-flex justify-content-center">
    <h2 class="bottom-0 text-capitalize green-back d-none d-md-block"  style={{backgroundColor:"#315517 !important" }}>Destination Representation</h2>

    </div>
    </div>
    </div>
    </div>
  )
}

export default BannerDesti
