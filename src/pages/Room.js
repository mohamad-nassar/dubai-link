import React from 'react'
import BannerRoom from '../components/Banner/BannerRoom'
import CardNewsRoom from '../components/Card/CardNewsRoom'
import {helmet} from 'react-helmet-async'
function Room() {
  return (
    <div>
    <helmet>
    <title>Room</title>
    <meta name="description" content="room" />
    <link rel="canonical" href="/room" />
    </helmet>
<BannerRoom />
<CardNewsRoom />

    </div>
  )
}

export default Room