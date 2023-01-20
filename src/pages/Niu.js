import React from 'react'
import BannerNiu from '../components/Banner/BannerNiu'
import CardNiu from '../components/Card/CardNiu'
import {helmet} from 'react-helmet-async'
function Niu() {
  return (
    <div>
    <helmet>
    <title>NIU</title>
    <meta name="description" content="niu" />
    <link rel="canonical" href="/niu" />
    </helmet>
      <BannerNiu />
      <CardNiu />

    </div>
  )
}

export default Niu
