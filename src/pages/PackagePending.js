import React from 'react'
import BannerPending from '../components/Banner/BannerPending'
import Card2Pend from '../components/Card/Card2Pend'
import CardPending from '../components/Card/CardPending'
import {helmet} from 'react-helmet-async'
function PackagePending() {
  return (
    <div>
    <helmet>
    <title>Packages</title>
    <meta name="description" content="royal prague travel,dubai to prague
    dubai to prague flight,dubai to vienna,dubai vienna flights,dubai to armenia,dubai to armenia flight,
    spain visa dubai,dubai to spain,dubai to spain flight,dubai to portugal,dubai to portugal flight ticket price,
    dubai to bosnia,bosnia dubai,fly dubai to bosnia" />
    <link rel="canonical" href="/packages" />
    </helmet>
      <BannerPending />
      <CardPending />
      <Card2Pend />

    </div>
  )
}

export default PackagePending
