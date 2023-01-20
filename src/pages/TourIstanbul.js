import React from 'react'
import BannerIstanbul from '../components/Banner/BannerIstanbul'
import BannerKartep from '../components/Banner/BannerKartep'
import CardIstanbultour from '../components/Card/CardIstanbultour'

import CardPrinceFour from '../components/Card/CardPriceFour'
import {helmet} from 'react-helmet-async'

function TourIstanbul() {
  return (
    <div>
    <helmet>
    <title>Hagia sophia</title>
    <meta name="description" content="hagia sophia tour" />
    <link rel="canonical" href="/hagia-sophia" />
    </helmet>
<BannerIstanbul />
<CardIstanbultour />

    </div>
  )
}

export default TourIstanbul
