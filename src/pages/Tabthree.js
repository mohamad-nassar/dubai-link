import React from 'react'
import BannerPraque from '../components/Banner/BannerPrague'
import TabThree from '../components/Card/TabThree'
import {helmet} from 'react-helmet-async'

function Royal() {
  return (
    <div>
    <helmet>
    <title>Tripstick</title>
    <meta name="description" content="tripstick tripstick tripstick tripstick" />
    <link rel="canonical" href="/tripstick" />
    </helmet>
<BannerPraque />
<TabThree />
    </div>
  )
}

export default Royal
