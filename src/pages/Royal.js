import React from 'react'
import BannerRoyal from '../components/Banner/BannerRoyal'
import CardRoyal from '../components/Card/CardRoyal'
import {helmet} from 'react-helmet-async'
function Royal() {
  return (
    <div>
    <helmet>
    <title>Royal LifeStyle</title>
    <meta name="description" content="best golf clubs for slow swing speed, best women's golf clubs,jack charles" />
    <link rel="canonical" href="/royal-lifestyle" />
    </helmet>
      <BannerRoyal />
      <CardRoyal />

    </div>
  )
}

export default Royal
