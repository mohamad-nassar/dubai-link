import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom";
import background from '../../assets/banner/video-details.jpg';
import url from '../url';
function CardDetailsvideo() {
  const params=useParams();
  const [pack,setPack]=useState({
    image:"",
    logo:"",
    title:"",
    description:"",
    price:"",
})
async function getdestmonth()
{
    const response=await axios.get(`${url.baseURL}/package/${params.id}`);
    if(response.data.package)
    setPack({
        video:response.data.package.video,
    })
}
const renderHTML = (rawHTML) =>
React.createElement("div", {
  dangerouslySetInnerHTML: { __html: rawHTML },
});
useEffect(()=>{
    getdestmonth();
},[])
  return (
    <div>
    <section className="video-image"  style={{ backgroundImage: `url(${background})` }}>
    <div className="video-backg">
    <h2 className="text-capitalize">DISCOVER ISTANBUL</h2>
    <img src="/assets/images/dubai/newone/Play.svg" className="play-btn" data-bs-toggle="modal" data-bs-target="#exampleModal" />
    </div>
    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
    aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div className="modal-content modal-content-video">
    
        <div className="modal-body">
    <video src="assets/images/dubai/newone/videoplayback.mp4" type="video/mp4" controls>
    
    </video>
        </div>
    
      </div>
    </div>
    </div>
    </section>
    </div>
  )
}

export default CardDetailsvideo
