import React from 'react'
import BannerMedia from '../components/Banner/BannerMedia'
import CardMedia from '../components/Card/CardMedia'
import {helmet} from 'react-helmet-async'
function Media() {
  return (
    <div>
    <helmet>
    <title>Media</title>
    <meta name="description" content="media" />
    <link rel="canonical" href="/media" />
    </helmet>
      <BannerMedia />
      <CardMedia />
  
    </div>
  )
}

export default Media
