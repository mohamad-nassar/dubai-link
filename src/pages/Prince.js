import React from 'react'
import BannerPrince from '../components/Banner/BannerPrince'
import CardPrince from '../components/Card/CardPrince'
import {helmet} from 'react-helmet-async'

function Prince() {
  return (
    <div>
    <helmet>
    <title>Prince's Island Tour</title>
    <meta name="description" content="dubai to prague, dubai to prague flight,
    dubai to vienna,dubai vienna flights,dubai vienna flights,dubai to armenia flight,
    spain visa dubai,dubai to spain,dubai to spain flight,dubai to portugal,dubai to portugal flight ticket price,
    dubai to bosnia, fly dubai to bosnia " />
    <link rel="canonical" href="/prince" />
    </helmet>
      <BannerPrince />
      <CardPrince />

    </div>
  )
}

export default Prince
