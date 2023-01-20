import React from 'react'
import BannerTourism from '../components/Banner/BannerTourism'
import CardTourism from '../components/Card/CardTourism'
import {helmet} from 'react-helmet-async'
function Tourism() {
  return (
    <div>
    <helmet>
    <title>Tourism</title>
    <meta name="description" content="dubai link travel and tours, dubai link careers,food watch,food court,
    fast food near me,fast food restaurant,food and beverage companies in uae,eat & drink restaurant,daily restaurant,
    abu dhabi golf club,travel agency in dubai,travel agency near me,tourism companies in dubai,fast track travel and tourism,
    dubai travel and tourism" />
    <link rel="canonical" href="/tourism" />
    </helmet>
      <BannerTourism />
      <CardTourism />
  
    </div>
  )
}

export default Tourism
