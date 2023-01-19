import React from 'react'
import { Link } from "react-router-dom";
function CardPrince() {
  return (
    <div>
    <div className="container">
    <ul className=" breadcrumbb mt-5 bread-padding-top">
    <li><Link to="/">Home</Link></li>
    <li><Link  onClick={<scrollToTop />} to="/packagedetails">Destination  <span class="text-small">of the</span> Month</Link></li>
    <li>Princes’ Islands Tour</li>
</ul>
</div>
    <div className="container h2-p accommodation-banner-h2-p mt-80">
    <div className="blog-wrapper ">
    <h2 className="text-center text-capitalize ">A DAY ON PRINCES' ISLAND</h2>
    <p className=" text-justify ">Take a step back in time and exchange the hustle and bustle of the city for a day of tranquility on Princes’ Islands. Just a short ferry ride from Istanbul, you will find the Princes’ Islands, a chain of small islands in the Sea of Marmara. These motor-free charming and unique islands offer an oasis of peace and quiet to all.
    Begin the day after being picked up from your hotel and transferred to the ferry terminal for a cruise on the Sea of Marmara heading for Büyükada, the largest of the nine islands making up the archipelago. On the way, you’ll be able to enjoy great views of the Topkapi Palace, Leander’s Tower, and Üsküdar on Istanbul’s Asian shore. Büyükada is a popular resort for the locals in the summer with its white sandy beaches and fragrant pine forests, but it was once a place of exile for Byzantine Emperors (and Leon Trotsky) as well as a popular retreat for wealthy Istanbulites in the first half of the 20th Century. You’ll be enchanted by this small slice of traffic-free paradise. When you explore some of the islands’ quiet back streets, you will feel as if you have found your way back to the late 19th century and an Istanbul that no longer exists on the mainland. Why not have lunch in one of the island’s many pleasant restaurants if you fancy it. Return to Istanbul in the afternoon. This full-day tour includes a return boat ride to the island of Büyükada with a guided tour.

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

export default CardPrince
