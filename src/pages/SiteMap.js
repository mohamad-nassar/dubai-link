import React from 'react'
import BannerRoom from '../components/Banner/BannerRoom'
import Bannersitemap from '../components/Banner/Bannersitemap'
import CardNewsRoom from '../components/Card/CardNewsRoom'
import Cardsite from '../components/Card/Cardsite'
import {helmet} from 'react-helmet-async'
function SiteMap() {
  return (
    <div>
    <helmet>
    <title>Sitemap</title>
    <meta name="description" content="sitemap" />
    <link rel="canonical" href="/sitemap" />
    </helmet>
<Bannersitemap />
<Cardsite />

    </div>
  )
}

export default SiteMap