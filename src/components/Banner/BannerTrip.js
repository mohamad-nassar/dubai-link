import axios from 'axios';
import React,{useState,useEffect} from 'react'
import background from '../../assets/banner/tripstick3.png';
import tripBadge from '../../assets/banner/Tripstiklogo.png';
import url from '../url';
function BannerTrip() {
  const [banner,setBanner]=useState({
    image:"",
    logo:"",
  })
  async function gettrips(){
    const response=await axios.get(`${url.baseURL}/trips`);
    setBanner({
      image:url.mediaURL+"/"+response.data.trips.image,
      logo:url.mediaURL+"/"+response.data.trips.logo,
    })
  }
  useEffect(()=>{
    gettrips()
  },[])
  return (
    <div>
    <div class="breadcrumb breadcrumb-style-one" style={{ backgroundImage: `url(${banner.image})` }}>
    <div class="circle-div">
    <div className='blury-circle blury-circle-banner'></div>
</div>
  <div className='log log4 log-banner'>
  <img src={banner.logo} className="logo-rb" alt="royal"/>
</div>
  <div id="Group_3903">
    <svg class="Rectangle_527">
        <rect id="Rectangle_527" rx="0" ry="0" x="0" y="0" width="217" height="59">
        </rect>
    </svg>
    <svg class="Rectangle_528">
        <rect id="Rectangle_528" rx="0" ry="0" x="0" y="0" width="199" height="43">
        </rect>
    </svg>
    <div id="Coming_Soon">
        <span>Coming Soon</span>
    </div>
</div>
  </div>

    </div>
  )
}

export default BannerTrip
