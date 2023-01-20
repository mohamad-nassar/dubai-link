import React from 'react'
import Bannerhospnia from '../components/Banner/Bannerhospnia'
import TabSix from '../components/Card/TabSix'
import {helmet} from 'react-helmet-async'

function Royal() {
  return (
    <div>
    <helmet>
    <title>Tripstick</title>
    <meta name="description" content="tripstick tripstick tripstick tripstick" />
    <link rel="canonical" href="/tripstick" />
    </helmet>
<Bannerhospnia />
<TabSix />
    </div>
  )
}

export default Royal
