import React from 'react'
import BannerPosition  from '../components/Banner/BannerPosition'

import CardApplyform from '../components/Card/CardApplyform'
import {helmet} from 'react-helmet-async'
function ApplyForm() {
  return (
    <div>
    <helmet>
    <title>Apply Now</title>
    <meta name="description" content="dubai link careers" />
    <link rel="canonical" href="/apply-now" />
    </helmet>
      <BannerPosition />
  <CardApplyform />
    </div>
  )
}

export default ApplyForm
