import React from 'react'
import BannerAccom from '../components/Banner/BannerAccom'
import CardAccom from '../components/Card/CardAccom'
import {helmet} from 'react-helmet-async'

function Accomodation() {
  return (
    <div>
    <helmet>
    <title>Accomodation</title>
    <meta name="description" content="Accomodation" />
    <link rel="canonical" href="/accomodation" />
    </helmet>
      <BannerAccom />
      <CardAccom />

    </div>
  )
}

export default Accomodation
