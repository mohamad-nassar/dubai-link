import React from 'react'
import { Link } from "react-router-dom";
import {BsCheck} from 'react-icons/bs'


function CardPrinceSix() {
  return (
    <div>
    <div className="container">
    <ul className=" breadcrumbb mt-5 bread-padding-top">
    <li><Link to="/">Home</Link></li>
    <li><Link  onClick={<scrollToTop />} to="/package-details">Destination  <span class="text-small">of the</span> Month</Link></li>
    <li>Cappadocia</li>
</ul>
</div>
    <div className="container mb-5 h2-p accommodation-banner-h2-p mt-80">
    <h2 class="text-capitalize text-center headingpackages d-block d-md-none">Cappadocia</h2>
    <div className="blog-wrapper  mt-5 mt-lg-0">
    <p className="text-justify ">Whether traveling overnight by bus or taking the early morning flight to the region of Cappadocia, this is a golden opportunity to make a quick tour of this fascinating area while staying in Istanbul. Visiting some of the highlights of Cappadocia, this tour is a great introduction to the lunar-like landscape of troglodyte dwellings and centuries-old chapels carved out of the rock with beautiful, religious frescoes still visible on their walls.
Walk through the “Fairy Chimneys” in Devrent Valley, Paşabağ (Monks’) Valley, and practice pottery production with the ancient technique in Avanos. Visit Göreme, the "open-air museum“ holding the earliest churches and chapels carved in fairy chimneys presenting the finest examples of frescoes. Uçhisar Castle is the highest point in the region.
    </p>
    <p><strong class="mt-4">Note: </strong>By Plane: Pick up from hotel at 5 am for transfer to Istanbul airport and domestic flight to one of the two local airports in Cappadocia. Arrive approx. 9:15 am and transfer to Ürgüp to meet the guide for the day. The evening flight back to Istanbul departs around 7:35 pm then transfer back to the Istanbul hotel arriving approx. 10 pm
By Bus: Pick up from the hotel night before approx 8 pm for the bus journey to Ürgüp departing at 9 pm Arrive at Ürgüp around 8:15 am and meet the guide for the start of the day's tour. On return the same evening take the night bus leaving at 9 pm and arriving in Istanbul around 7 am the next day. Excludes drinks and transfers from the bus station to the hotel in İstanbul at the end of the tour.
</p>
</div>



<div className="accommodation-btns m-auto mt-5 mb-5">
    <div className="button rounded-1 text-center ">
        <Link onClick={<scrollToTop />} to="/quote" className="text-capitalize mt-3 visit-btn-prince">Request for Quotation</Link>
    </div>

</div>
</div>

    </div>
  )
}

export default CardPrinceSix
