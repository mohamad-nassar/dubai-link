import React from 'react'
import BannerDetails from '../components/Banner/BannerDetails'
import CardDetailslast from '../components/Card/CardDetailslast'

import CardDetailsone from '../components/Card/CardDetailsone'
import CardDetailstwo from '../components/Card/CardDetailstwo'
import CardDetailsvideo from '../components/Card/CardDetailsvideo'
import {helmet} from 'react-helmet-async'
function PackageDetails() {
  return (
    <div>
    <helmet>
    <title>Package Details</title>
    <meta name="description" content="royal prague travel,dubai to prague
    dubai to prague flight,dubai to vienna,dubai vienna flights,dubai to armenia,dubai to armenia flight,
    spain visa dubai,dubai to spain,dubai to spain flight,dubai to portugal,dubai to portugal flight ticket price,
    dubai to bosnia,bosnia dubai,fly dubai to bosnia" />
    <link rel="canonical" href="/package-details" />
    </helmet>
      <BannerDetails />
      <CardDetailsone />
      <CardDetailstwo />
      <CardDetailsvideo />
      <CardDetailslast />
      {/* <CardDetailslastt /> */}

    </div>
  )
}

export default PackageDetails
