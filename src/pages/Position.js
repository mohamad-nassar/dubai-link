import React from 'react'
import BannerPosition from '../components/Banner/BannerPosition'
import CardPosition from '../components/Card/CardPosition'
import {helmet} from 'react-helmet-async'
function Position() {
  return (
    <div>
    <helmet>
    <title>Position</title>
    <meta name="description" content="position" />
    <link rel="canonical" href="/position" />
    </helmet>
    <BannerPosition />
    <CardPosition />

    </div>
  )
}

export default Position
