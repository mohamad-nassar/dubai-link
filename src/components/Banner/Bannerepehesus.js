import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import background from '../../assets/banner/ephesusbanner.png';
import url from '../url';
function Bannerephesus() {
  const paramas = useParams();
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  async function gettour() {
    const response = await axios.get(
      `${url.baseURL}/package/tour/${paramas.id}`
    );
    setTitle(response.data.tour.title);
    setImage(url.mediaURL+"/"+response.data.tour.image);
  }
  useEffect(() => {
    gettour();
  },[]);
  return (
    <div>
    <div class="breadcrumb breadcrumb-style-one" style={{ backgroundImage: `url(${image})` }}>
    <div class="container">
    <div class="col-lg-12 text-center d-flex justify-content-center">
        <h2 class="bottom-0 text-capitalize back-gray d-none d-md-block">{title}</h2>

    </div>
    </div>

    </div>

    </div>
  )
}

export default Bannerephesus
