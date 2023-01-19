import React from 'react'
import { Link } from "react-router-dom";
import {BsCheck} from 'react-icons/bs'


function CardIstanbultour() {
  return (
    <div>
    <div className="container">
    <ul className=" breadcrumbb mt-5 bread-padding-top">
    <li><Link to="/">Home</Link></li>
    <li><Link  onClick={<scrollToTop />} to="/packagedetails">Destination  <span class="text-small">of the</span> Month</Link></li>
    <li>Hagia Sophia, Blue Mosque, And Grand Bazaar</li>
</ul>
</div>
    <div className="container h2-p accommodation-banner-h2-p mt-5">
    <h2 class="text-capitalize text-center headingpackages d-block d-md-none">Hagia Sophia, Blue Mosque, And Grand Bazaar</h2>
    <div className="blog-wrapper mt-5 mt-lg-0">
    <p className=" text-justify ">It’s where East meets West, and a city whose architecture and culture are as diverse as its history. Come and discover Istanbul, its sights and sounds with this combined tour by land and water.
    </p>

    <p className="text-justify ">We start in the heart of the Old City, in the Sultanahmet center, from where our voyage into the history of Istanbul begins. The Byzantine and Ottoman Empires were ruled from here, and no other area can compare in terms of grandness. Step into the beauty of the Hagia Sophia, one of the greatest marvels of architecture, before laying eyes on the vivid colors that define the Blue Mosque; famous for its İznik tiles and unique six minarets. The historical center also boasts the Hippodrome and Serpentine Column that your guide will point out.</p>
    <p className="text-justify ">Afterward, we make our way to one of the largest covered markets in the world, the incredible Grand Bazaar. Sneak a peek at artisans at work and marvel at the 4,000 shops selling antiques, jewelry, gold, carpets, and many more things. We stop for lunch at a typical Turkish restaurant before embarking on a leisurely cruise along the mighty Bosphorus, the waterway separating two continents. Then we hop aboard the bus to see the Golden Horn and residential areas for Byzantine Jews, Italian traders, and other non-Muslim minorities before driving along the traces of history at Balat and taking the cable car up to Pierre Loti Coffee House.</p>

<p className="text-justify "><strong>Note:Grand Covered Bazaar is closed on Sundays and replaced with authentic shops around Grand Bazaar.</strong></p>

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

export default CardIstanbultour
