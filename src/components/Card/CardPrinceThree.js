import React from 'react'
import { Link } from "react-router-dom";
function CardPrinceThree() {
  return (
    <div>
    <div className="container">
    <ul className=" breadcrumbb mt-5 bread-padding-top">
    <li><Link to="/">Home</Link></li>
    <li><Link  onClick={<scrollToTop />} to="/package-details">Destination  <span class="text-small">of the</span>  Month</Link></li>
    <li>Ephesus <span>and</span> Virgin Mary's House</li>
</ul>
</div>
    <div className="container h2-p accommodation-banner-h2-p mt-80">
    <h2 class="text-capitalize text-center headingpackages d-block d-md-none">Ephesus <span>and</span> Virgin Mary's House</h2>
    <div className="blog-wrapper  mt-5 mt-lg-0">
    <p className="text-justify ">
    Second in size only to Rome in antiquity, Ephesus is a treasure trove of ruins that include one of the seven wonders of the ancient world and the last home of the Virgin Mary. This full-day tour will allow you to explore this vast outdoor museum that has been at the crossroads of history for thousands of years.
Ephesus is in the southwest of Turkey; to reach it, you can choose either an early morning flight to Izmir or a coach journey to Kusadasi the night before.
At Ephesus, which was a major city in ancient Greece and rose to even greater prominence during Roman times, we will stroll along the Marble Street, the Odeon theatre, Odeon, the Bouleuterion, the Temple of Hadrian and Serapis, the Agoras, the Library of Celsus, the Great Theatre – believed to have been the largest in the ancient world - the Double Church, the Arcadian Way, the Gate of Magnesia and much more.
Then we’ll visit Mount Koressos to see the house that is believed to have been the last home of Our Lady. It is now a shrine and there is also a wishing wall where the faithful and the not-so-faithful leave requests.
We’ll take a break for lunch at Selcuk, the city close to these ancient sites, before continuing the tour at the historic Isabey Mosque and the ruins of the Temple of Artemis, one of the seven wonders of the ancient world.
Afterward, you will return to Izmir for an evening flight or to Kusadasi for the night bus to Istanbul.
    </p>

    <div class="center-prince-width mt-4">
    <p>
        <b>Note: </b> The tour Includes round-trip plane or bus tickets, transfers to and from central hotels, an English-speaking professional guide (other languages are available on request), lunch, and a museum entrance. Excludes drinks and transfer from the bus station to the hotel (in the bus package) in Istanbul at the end of the tour.
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

export default CardPrinceThree
