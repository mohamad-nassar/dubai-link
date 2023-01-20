import React from 'react'
import BannerIstanbul from '../components/Banner/BannerIstanbul'
import CardIstanbul from '../components/Card/CardIstanbul'
import {helmet} from 'react-helmet-async'
function Istanbul() {
  return (
    <div>
    <helmet>
    <title>Istanbul</title>
    <meta name="description" content="Istanbul" />

    </helmet>
      <BannerIstanbul />
      <CardIstanbul />

    </div>
  )
}

export default Istanbul
