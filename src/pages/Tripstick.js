import React from 'react'
import BannerTrip from '../components/Banner/BannerTrip'
import CardTrip from '../components/Card/CardTrip'
import {helmet} from 'react-helmet-async'
function Tripstick() {
  return (
    <div>
    <helmet>
    <title>Tripstick</title>
    <meta name="description" content="tripstick, dubai link llc " />
    <link rel="canonical" href="/tripstick" />
    </helmet>
      <BannerTrip />
      <CardTrip />

    </div>
  )
}

export default Tripstick
