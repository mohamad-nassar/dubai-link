import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Bannerephesus from "../components/Banner/Bannerepehesus";
import CardPrinceThree from "../components/Card/CardPrinceThree";
import { helmet } from "react-helmet-async";
import axios from "axios";
import url from "../components/url";

function Prince3() {
  const paramas = useParams();
  const [title, setTile] = useState("");
  async function gettour() {
    const response = await axios.get(
      `${url.baseURL}/package/tour/${paramas.id}`
    );
    setTile(response.data.tour.title);
  }
  useEffect(() => {
    gettour();
  },[]);
  return (
    <div>
      <helmet>
        <title>{title}</title>
        <meta
          name="description"
          content="dubai to prague, dubai to prague flight,
    dubai to vienna,dubai vienna flights,dubai vienna flights,dubai to armenia flight,
    spain visa dubai,dubai to spain,dubai to spain flight,dubai to portugal,dubai to portugal flight ticket price,
    dubai to bosnia, fly dubai to bosnia "
        />
        <link rel="canonical" href="/ephesus-and-virgin-mary's-house" />
      </helmet>
      <Bannerephesus />
      <CardPrinceThree />
    </div>
  );
}

export default Prince3;
