import React from 'react'
import Hero from '../components/Hero/Hero'
import UpcomingTour from '../components/UpcomingTour/UpcomingTour'
import MoreSection from '../components/MoreSection/MoreSection'
import MoreSectionn from '../components/MoreSectionn/MoreSectionn'
import DestinationHome from '../components/DestinationHome/DestinationHome'
import CardBlog from '../components/Card/CardBlog';
import Cardvideo from '../components/Card/Cardvideo';
import CardHomePackage from '../components/Card/CardHomePackage';
import {helmet} from 'react-helmet-async'
function Home() {
  return (
    <div>
    <helmet>
    <title>Home</title>
    <meta name="description" content="dubai link,dubai link tours,dubai link llc,dubai link tourism,dubai travel and tourism,
    travel and tourism companies in dubai,travel and tourism jobs in dubai,your destination
,destination dubai" />
    <link rel="canonical" href="/home" />
    </helmet>
<Hero />

<UpcomingTour />


<Cardvideo />
<div class="section-home-image" >

<MoreSection />
<MoreSectionn />

</div>

<CardHomePackage />
<DestinationHome />
<CardBlog />


    </div>
  )
}

export default Home
