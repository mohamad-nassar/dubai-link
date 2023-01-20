import React from 'react'
import BannerHospi from '../components/Banner/BannerHospi'
import CardHos from '../components/Card/CardHos'
import {helmet} from 'react-helmet-async'
function Hospitality() {
  return (
    <div>
    <helmet>
    <title>Hospitality</title>
    <meta name="description" content="hospitality jobs in dubai,hospitality jobs,hospitality companies in uae,hospitality groups in dubai    " />
    <link rel="canonical" href="/hospitality" />
    </helmet>
      <BannerHospi />
      <CardHos />

    </div>
  )
}

export default Hospitality
