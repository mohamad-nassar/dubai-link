import React from 'react'
import BannerTour from '../components/Banner/BannerTour'

import CardTour from '../components/Card/CardTour'
import {helmet} from 'react-helmet-async'
function Tour() {
  return (
    <div>
    <helmet>
    <title>Dubai Link Travel and Tours</title>
    <meta name="description" content="dubai link, dubai link tours, dubai link llc, dubai link travel and tours" />
    <link rel="canonical" href="/tour" />
    </helmet>
      <BannerTour />
      <CardTour />

    </div>
  )
}

export default Tour
