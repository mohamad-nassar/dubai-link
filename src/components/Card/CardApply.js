import React, { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom";
import {BsCheck} from 'react-icons/bs';
import axios from 'axios';
import url from '../url';
import $ from 'jquery';
function CardApply() {
  const params=useParams();
  const [title,setTitle]=useState("");
  const [desc,setDesc]=useState("");
  async function getinfo()
  {
    const response=await axios.get(`${url.baseURL}/about/career/${params.id}`);
    setTitle(response.data.careers.title);
    setDesc(response.data.careers.description);
  }
  useEffect(()=>{
    getinfo().then(()=>{
    });
  },[desc]);
  const renderHTML = (rawHTML) => React.createElement("div", { dangerouslySetInnerHTML: { __html: rawHTML } });
  return (
    <div>
    <div className="container">
    <ul className=" breadcrumbb mt-5 bread-padding-top">
    <li><Link to="/">Home</Link></li>

    <li><Link to="/careers">Careers</Link></li>
    <li>Apply</li>
</ul>
</div>
    <div className="container mt-60">
    <div className="blog-wrapper  pb-5">
    <h2 class="text-capitalize text-center headingpackages d-block d-md-none">Apply</h2>
    <div className="container">

        <div id='desc' style={{"text-transform":"text-capitalize !important"}}>
      {renderHTML(desc)}
        </div>

        <div class="d-flex justify-content-end mt-5">
        <button type="button" class="btn btn-dark "  ><Link onClick={<scrollToTop />} to={"/apply/form/"+params.id}>Apply Now</Link></button>
        </div>
</div>
</div>
    </div>
    </div>
  )
}

export default CardApply
