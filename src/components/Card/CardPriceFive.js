import React from 'react'
import { Link } from "react-router-dom";
import {BsCheck} from 'react-icons/bs'


function CardPrinceFive() {
  return (
    <div>
    <div className="container">
    <ul className=" breadcrumbb mt-5 bread-padding-top">
    <li><Link to="/">Home</Link></li>
    <li><Link  onClick={<scrollToTop />} to="/packagedetails">Destination  <span class="text-small">of the</span> Month</Link></li>
    <li>Troy Tour</li>
</ul>
</div>
    <div className="container h2-p accommodation-banner-h2-p mt-80">
    <h2 class="text-capitalize text-center headingpackages d-block d-md-none">Troy Tour</h2>
    <div className="blog-wrapper mt-5 mt-lg-0">
    <p className=" text-justify ">Visit the ancient city of Troy and learn about its significance in Greek mythology as the main battlefield in the Trojan War. 
On the journey from Istanbul, stop for lunch in the coastal town of Eceabat, and then enjoy a walking tour around the archaeological site of Troy lasting approximately a couple of hours. 
Learn about the different eras that stamped their mark on the fascinating settlement and see the famous Trojan Horse statue before returning to Istanbul.<br />
At the end of the tour, you will be transferred back to Istanbul and will be dropped off at your hotel in Istanbul.
    </p>
    <div class="center-prince-width mt-5">
    <h3 class="note mt-5 pb-4">On the tour, you will see:</h3>

    <ul class="ordered-list-disc">
        <li><p>The Trojan Horse</p></li>
        <li><p>Sacrificial Altars</p></li>
        <li><p>The 3700-year-old city walls</p></li>
        <li><p>Houses of Troy I, 3000 B.C. – 2500 B.C</p></li>
        <li><p>he Bouleuterium (Senate Building)</p></li>
        <li><p>The Odeon (Concert Hall)</p></li>
        <li><p>Current excavations in progress</p></li>
        <li><p>Remains of the various cities from Troy I through to Troy IX</p></li>
    </ul>

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

export default CardPrinceFive
