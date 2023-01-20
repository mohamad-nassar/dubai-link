import React from 'react'
import BannerSts from '../components/Banner/BannerSts'
import CardSts from '../components/Card/CardSts'
import {helmet} from 'react-helmet-async'
function Sts() {
  return (
    <div>
    <helmet>
    <title>STS</title>
    <meta name="description" content="sts,corporate travel management limited,online corporate travel
    royal smart tourism" />
    <link rel="canonical" href="/sts" />
    </helmet>
      <BannerSts />
      <CardSts />

    </div>
  )
}

export default Sts
