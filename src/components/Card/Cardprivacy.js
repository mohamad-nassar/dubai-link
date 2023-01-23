import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import {BsCheck} from 'react-icons/bs'
import axios from 'axios';
import url from '../url';
function Cardprivacy() {
  const [text,setText]=useState("");
  async function gettext()
  {
    const response=await axios.get(`${url.baseURL}/privacy`);
    setText(response.data.privacy.text);
  }
  useEffect(()=>{
    gettext();
  })
  const renderHTML = (rawHTML) =>
React.createElement("div", {
  dangerouslySetInnerHTML: { __html: rawHTML },
});
  return (
    <div>
    <div className="container">
    <ul className=" breadcrumbb mt-5 bread-padding-top">
    <li><Link to="/">Home</Link></li>

    <li>Privacy Policy </li>
</ul>
</div>
    <div className="container mt-80">
    <div className="blog-wrappe  pb-5">
    <div className="container">
    <h2 className="text-capitalize">Privacy Policy</h2>
    <span className="font-weight-bold">Dubai Link Group LLC</span>


        <div className="row mt-5 icon-check">
        {renderHTML(text)}
</div>
</div>
</div>
    </div>
    </div>
  )
}

export default Cardprivacy
