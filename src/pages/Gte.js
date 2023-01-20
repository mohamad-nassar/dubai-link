import React from 'react'
import BannerGte from '../components/Banner/BannerGte'
import CardGte from '../components/Card/CardGte'
import {helmet} from 'react-helmet-async'
function Gte() {
  return (
    <div>
    <helmet>
    <title>GTE</title>
    <meta name="description" content="gte, GTE, dubai link llc" />
    <link rel="canonical" href="/gte" />
    </helmet>
      <BannerGte />
      <CardGte />

    </div>
  )
}

export default Gte
