import React from 'react'
import BannerPosition  from '../components/Banner/BannerPosition'
import CardApply from '../components/Card/CardApply'
import {helmet} from 'react-helmet-async'
function Apply() {
  return (
    <div>
    <helmet>
    <title>Sales-manager-gte-dubai</title>
    <meta name="description" content="dubai link careers" />
    <link rel="canonical" href="/sales-manager-gte-dubai" />
    </helmet>
      <BannerPosition />
      <CardApply />
    </div>
  )
}

export default Apply
