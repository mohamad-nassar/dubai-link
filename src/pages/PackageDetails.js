import React from 'react'
import BannerDetails from '../components/Banner/BannerDetails'
import CardDetailslast from '../components/Card/CardDetailslast'

import CardDetailsone from '../components/Card/CardDetailsone'
import CardDetailstwo from '../components/Card/CardDetailstwo'
import CardDetailsvideo from '../components/Card/CardDetailsvideo'

function PackageDetails() {
  return (
    <div>
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
