import React,{useState,useEffect} from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';
import url from '../url';
function MoreAbout() {
  const renderHTML = (rawHTML) => React.createElement("div", { dangerouslySetInnerHTML: { __html: rawHTML } });
  const [mission,setMission]=useState("");
  const [vision,setVision]=useState("");
  async function getours()
  {
    const response=await axios.get(`${url.baseURL}/about`);
    setMission(response.data.ours.mission);
    setVision(response.data.ours.vision);
  }
  useEffect(()=>{
    getours();
  },[])
  return (
    <div>
    <div className="more-update-section more-update-section-about" >
    <div className="vision-full-width"  data-aos="fade-up"
    data-aos-duration="3000">
        <h2 className="m-auto pb-2 pt-5 text-white text-capitalize text-bold">Our Mission</h2>
        <p className="text-white  pb-5">{renderHTML(mission)}</p>
    </div>
    <div className="mission-full-width"  data-aos="fade-up"
    data-aos-duration="3000">
         <h2 className="m-auto pb-2 pt-5 text-white text-capitalize">Our Vision</h2>
         <p className="text-white pb-5">{renderHTML(vision)}</p>
    </div>

            </div>
    </div>
  )
}

export default MoreAbout
