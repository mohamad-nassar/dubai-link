import React from 'react'
import BannerDesti from '../components/Banner/BannerDesti'
import CardDest from '../components/Card/CardDest'
import {helmet} from 'react-helmet-async'
function Destination() {
  return (
    <div>
    <helmet>
    <title>Destination Representation</title>
    <meta name="description" content="Destination Representation , tourism sector,travel and tourism activities, " />
    <link rel="canonical" href="/destination" />
    </helmet>
      <BannerDesti />
      <CardDest />

    </div>
  )
}

export default Destination
