import React from 'react'
import Bannermarma from '../components/Banner/Bannermarma'
import CardPackageHotel from '../components/Card/CardPackageHotel'
import {helmet} from 'react-helmet-async'

function Hotelone() {
  return (
    <div>
    <helmet>
    <title>Marmara-hotel</title>
    <meta name="description" content="royal prague travel,dubai to prague
    dubai to prague flight,dubai to vienna,dubai vienna flights,dubai to armenia,dubai to armenia flight,
    spain visa dubai,dubai to spain,dubai to spain flight,dubai to portugal,dubai to portugal flight ticket price,
    dubai to bosnia,bosnia dubai,fly dubai to bosnia" />
    <link rel="canonical" href="/marmara-hotel" />
    </helmet>
<Bannermarma />
      <CardPackageHotel />
    </div>
  )
}

export default Hotelone
