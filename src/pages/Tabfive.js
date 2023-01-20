import React from 'react'
import BannerIstanbul from '../components/Banner/BannerIstanbul'
import TabFive from '../components/Card/TourFive'
import {helmet} from 'react-helmet-async'

function Royal() {
  return (
    <div>
    <helmet>
    <title>Tripstick</title>
    <meta name="description" content="tripstick tripstick tripstick tripstick" />
    <link rel="canonical" href="/tripstick" />
    </helmet>
      <BannerIstanbul />
<TabFive />
    </div>
  )
}

export default Royal
