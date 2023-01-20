import React from 'react'


import Bannerspainport from '../components/Banner/Bannerspainport'
import Tabspainport from '../components/Card/Tabspainport'
import {helmet} from 'react-helmet-async'
function TabSpainPort() {
  return (
    <div>
    <helmet>
    <title>Tripstick</title>
    <meta name="description" content="tripstick tripstick tripstick tripstick" />
    <link rel="canonical" href="/tripstick" />
    </helmet>
<Bannerspainport />
<Tabspainport />
    </div>
  )
}

export default  TabSpainPort
