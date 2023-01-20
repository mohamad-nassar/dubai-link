import React from 'react'

import Bannerspain from '../components/Banner/Bannerspain'
import TabFour from '../components/Card/TabFour'
import {helmet} from 'react-helmet-async'
function Royal() {
  return (
    <div>
    <helmet>
    <title>Tripstick</title>
    <meta name="description" content="tripstick tripstick tripstick tripstick" />
    <link rel="canonical" href="/tripstick" />
    </helmet>
<Bannerspain />
<TabFour />
    </div>
  )
}

export default Royal
