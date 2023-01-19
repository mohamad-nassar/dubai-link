import React from 'react'
import { Link } from "react-router-dom";
import {BsCheck} from 'react-icons/bs'

function CardPrinceFour() {
  return (
    <div>
    <div className="container">
    <ul className=" breadcrumbb mt-5 bread-padding-top">
    <li><Link to="/">Home</Link></li>
    <li><Link  onClick={<scrollToTop />} to="/packagedetails">Destination  <span class="text-small">of the</span> Month</Link></li>
    <li>Tour Sapanaca , Masukiye and Kartepe</li>
</ul>
</div>
    <div className="container h2-p accommodation-banner-h2-p mt-80">
    <h2 class="text-capitalize text-center headingpackages d-block d-md-none">Tour Sapanaca , Masukiye and Kartepe</h2>
    <div className="blog-wrapper  mt-5 mt-lg-0">
    <p className=" text-justify ">Fall in love with the beauty of Turkey as you discover Turkey’s stunning countryside and scenery on a full-day tour to Sapanca Lake, Masukiye, and Kartepe from Istanbul. Leave the hustle and bustle of Istanbul behind as you experience the serenity of a weekend retreat.
Stroll along the picture-perfect lake shore, befriend the animals at the zoo, then get a glimpse of local life in the village of Masukiye.
Enjoy a serene outdoor lunch by a shady waterfall, before exploring Kartepe Mountain. If you wish, there is the option to join a ski lift tour before heading back to the city.
    </p>

    <div class="center-prince-width">
    <h3 class="mt-5 pb-4">Tour’s Highlights:</h3>

    <ul class="ordered-list-disc">
    <li><p>See the Bosphorus Bridge, officially known as the July 15th Martyrs' Bridge, which connects two continents.</p></li>
    <li><p>Travel between two continents, Europe and Asia</p></li>
    <li><p>Visit Sapanca, considered to be one of the most beautiful places in the Asian part of Turkey.</p></li>
    <li><p>Visit the Masukiye region, acclaimed for its nature, waterfalls, and rivers.</p></li>
    <li><p>Discover Sapanca Lake, the largest lake in the Marmara region.</p></li>
    <li><p>Make friends with the animals at Darica Zoo, the largest zoo in the Marmara region.</p></li>
    <li><p>Fall in love with the local scenery on Kartepe Hill and have a great time in the snow.</p></li>
    <li><p> Indulge yourself at the Istanbul shopping mall and tickle your taste buds at the Turkish delight shop in Masukiye.</p></li>
    </ul>

    <p class="note pt-4"><b>Note: </b>There may be visit restrictions to Darica Zoo In December, January, and February.
    The visit to Kartepe Hill takes place only takes place between December and February.
    </p>
    </div>



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

export default CardPrinceFour
