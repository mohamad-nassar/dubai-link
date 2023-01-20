import React from 'react'
import BannerPosition  from '../components/Banner/BannerPosition'
import CardApply from '../components/Card/CardApply'
import CardApplyfive from '../components/Card/CardApplyfive'
import {helmet} from 'react-helmet-async'
function ApplyFive() {
  return (
    <div>
    <helmet>
    <title>Sales-manager-gte-cairo</title>
    <meta name="description" content="dubai link careers" />
    <link rel="canonical" href="/sales-manager-gte-cairo" />
    </helmet>
      <BannerPosition />
      <CardApplyfive />
    </div>
  )
}

export default ApplyFive
