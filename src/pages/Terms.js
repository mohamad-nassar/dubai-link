import React from 'react'
import BannerTerms from '../components/Banner/BannerTerms'
import CardTerms from '../components/Card/CardTerms'
import {helmet} from 'react-helmet-async'
function Terms() {
  return (
    <div>
    <helmet>
    <title>Terms and Conditions</title>
    <meta name="description" content="terms and condition" />
    <link rel="canonical" href="/terms" />
    </helmet>
<BannerTerms />
<CardTerms />
    </div>
  )
}

export default Terms
