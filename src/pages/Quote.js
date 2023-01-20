import React from 'react'
import BannerQuote from '../components/Banner/BannerQuote'
import CardQuote from '../components/Card/CardQuote'
import {helmet} from 'react-helmet-async'
function Quote() {
  return (
    <div>
    <helmet>
    <title>Get a Quote</title>
    <meta name="description" content="Get a Quote , Quote" />
    <link rel="canonical" href="/quote" />
    </helmet>
<BannerQuote />
      <CardQuote />
    </div>
  )
}

export default Quote
