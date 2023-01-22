import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom";
import url from '../url';
function CardPrinceThree() {
    const paramas = useParams();
    const [desc, setDesc] = useState("");
    async function gettour() {
      const response = await axios.get(
        `${url.baseURL}/package/tour/${paramas.id}`
      );
      setDesc(response.data.tour.description);
    }
    useEffect(() => {
      gettour();
    },[]);
    const renderHTML = (rawHTML) => React.createElement("div", { dangerouslySetInnerHTML: { __html: rawHTML } });
  return (
    <div>
    <div className="container">
    <ul className=" breadcrumbb mt-5 bread-padding-top">
    <li><Link to="/">Home</Link></li>
    <li><Link  onClick={<scrollToTop />} to="/package-details">Destination  <span class="text-small">of the</span>  Month</Link></li>
    <li>Ephesus <span>and</span> Virgin Mary's House</li>
</ul>
</div>
    <div className="container h2-p accommodation-banner-h2-p mt-80">
    <h2 class="text-capitalize text-center headingpackages d-block d-md-none">Ephesus <span>and</span> Virgin Mary's House</h2>
    <div className="blog-wrapper  mt-5 mt-lg-0">
    {renderHTML(desc)}

</div>
</div>


<div className="accommodation-btns m-auto mt-5 mb-5">
    <div className="button rounded-1 text-center ">
        <Link onClick={<scrollToTop />} to="/quote" className="text-capitalize mt-3 visit-btn-prince">Request for Quotation</Link>
    </div>

</div>



</div>
  )
}

export default CardPrinceThree
