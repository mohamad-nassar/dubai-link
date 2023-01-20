import React from 'react'
import Bannerjoin from '../components/Banner/Bannerjoin'
import CardJoin from '../components/Card/CardJoin'
import {helmet} from 'react-helmet-async'

function Join() {
  return (
    <div>
    <helmet>
    <title>Careers</title>
    <meta name="description" content="dubai link careers" />
    <link rel="canonical" href="/careers" />
    </helmet>
      <Bannerjoin />
      <CardJoin />
  
    </div>
  )
}

export default Join
