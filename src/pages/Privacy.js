import React from 'react'
import Bannerprivacy from '../components/Banner/Bannerprivacy'
import Cardprivacy from '../components/Card/Cardprivacy'
import {helmet} from 'react-helmet-async'
function Privacy() {
  return (
    <div>
    <helmet>
    <title>Privacy and Policies</title>
    <meta name="description" content="dubai link careers" />
    <link rel="canonical" href="/privacy" />
    </helmet>
      <Bannerprivacy />
      <Cardprivacy />
    </div>
  )
}

export default Privacy
