import React from 'react'
import CardContact from '../components/Card/CardContact'
import BannerContact  from '../components/Banner/BannerContact'
import {helmet} from 'react-helmet-async'
function Contact() {
  return (
    <div>
    <helmet>
    <title>Contact Us</title>
    <meta name="description" content="Contact Us" />
    <link rel="canonical" href="/contact" />
    </helmet>
<BannerContact />
      <CardContact />

    </div>
  )
}

export default Contact
