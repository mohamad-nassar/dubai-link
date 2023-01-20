import React from 'react'
import BannerAzerbaijan from '../components/Banner/BannerAzerbaijan'

import TabAzerbijan from '../components/Card/TabAzarbijan'

import {helmet} from 'react-helmet-async'
function Tabazarbijan() {
  return (
    <div>
    <helmet>
    <title>azerbaijan</title>
    <meta name="description" content="azerbaijan" />
    <link rel="canonical" href="/azerbaijan" />
    </helmet>
<BannerAzerbaijan />
<TabAzerbijan />
    </div>
  )
}

export default Tabazarbijan
