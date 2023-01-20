import React from 'react'
import BannerArmenia from '../components/Banner/BannerArmenia'
import Tabtwo from '../components/Card/Tabtwo'

import {helmet} from 'react-helmet-async'
function TabTwo() {
  return (
    <div>
    <helmet>
    <title>Tripstick</title>
    <meta name="description" content="tripstick tripstick tripstick tripstick" />
    <link rel="canonical" href="/tripstick" />
    </helmet>
<BannerArmenia />

<Tabtwo />
    </div>
  )
}

export default TabTwo
