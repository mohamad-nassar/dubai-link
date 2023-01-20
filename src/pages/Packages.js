import React from 'react'
import BannerHotel from '../components/Banner/BannerHotel'
import CardPackage from '../components/Card/CardPackage'
import {helmet} from 'react-helmet-async'
function Packages() {
  return (
    <div>
    <helmet>
    <title>Elysium-taksim-hotel</title>
    <meta name="description" content="royal prague travel,dubai to prague
    dubai to prague flight,dubai to vienna,dubai vienna flights,dubai to armenia,dubai to armenia flight,
    spain visa dubai,dubai to spain,dubai to spain flight,dubai to portugal,dubai to portugal flight ticket price,
    dubai to bosnia,bosnia dubai,fly dubai to bosnia" />
    <link rel="canonical" href="/elysium-taksim-hotel" />
    </helmet>
      <BannerHotel />
<CardPackage />

    </div>
  )
}

export default Packages
