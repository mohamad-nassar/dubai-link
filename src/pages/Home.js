import React from 'react'
import Hero from '../components/Hero/Hero'
import UpcomingTour from '../components/UpcomingTour/UpcomingTour'
import MoreSection from '../components/MoreSection/MoreSection'
import MoreSectionn from '../components/MoreSectionn/MoreSectionn'
import DestinationHome from '../components/DestinationHome/DestinationHome'
import CardBlog from '../components/Card/CardBlog';
import Cardvideo from '../components/Card/Cardvideo';
import CardHomePackage from '../components/Card/CardHomePackage';
function Home() {
  return (
    <div>

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
