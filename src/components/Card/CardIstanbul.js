import React from 'react'
import { Link } from "react-router-dom";
import {BsCheck} from 'react-icons/bs'
function CardIstanbul() {
  return (
    <div>
    <div className="container">
    <ul className=" breadcrumbb mt-5">
    <li><Link to="/">Home</Link></li>
    <li><Link onClick={<scrollToTop />} to="/packagedetails">Destination <span class="text-small">of the</span> month</Link></li>
    <li>Istanbul</li>
</ul>
</div>
    <div className="container mt-80">
        <section className="navtabfilter pb-5">
    <ul className="nav nav-pills mb-3 " id="pills-tab" role="tablist">

        <li className="nav-item" role="presentation">

          <button className="nav-link nav-days-block active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">ITINERARY</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">HOTELS</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">PACKAGE INCLUSIONS</button>
        </li>
        <li className="nav-item" role="presentation">
            <button className="nav-link" id="pills-exclusion-tab" data-bs-toggle="pill" data-bs-target="#pills-exclusion" type="button" role="tab" aria-controls="pills-exclusion" aria-selected="false">PACKAGE EXCLUSIONS</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="pills-terms-tab" data-bs-toggle="pill" data-bs-target="#pills-terms" type="button" role="tab" aria-controls="pills-terms" aria-selected="false">TERMS & CONDITIONS</button>
          </li>
      </ul>
      <div className="tab-content" id="pills-tabContent">
        <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">


            <table className="table table-bordered table-days ">
         <tbody>
            <tr>
                <td className="color-blue-dark">Day 1</td>
<td>
    <h2 className="color-red">ISTANBUL</h2>
    <p>Arrival to Istanbul IST or SAW Airport.</p>
    <p> Meeting by Dorak Tour English speaking assistant and transfer to your hotel.
        </p>
        <p> Check-in. </p>
        <p>Free time. </p>
        <p>Overnight in Istanbul (No Meals)</p>
</td>
            </tr>


            <tr>
                <td className="color-blue-dark">Day 2</td>
<td>
    <h2 className="color-red">ISTANBUL</h2>


    <p>    Depart for Full-Day Old City Tour.</p>
    <p>      Tour of “Sultan Ahmet Center”, the heart of the “Old City” from where the Byzantine and Ottoman Empires were ruled. 
        </p>
        <p> Hagia Sophia, the Church of Divine Wisdom, one of the greatest marvels of architecture, constructed as a basilica in the 6th century by Emperor Justinian. </p>
        <p>     Blue Mosque (the mosque visited from outside on Friday mornings because of noon prayer) facing Hagia Sophia, famous with its blue Iznik tiles and unique with 6 minarets, built in the name of Sultan Ahmet. Hippodrome, center of sportive events (chariot races, athletics) and political activities of the old city. Serpentine Column, Obelisk of Theodosius and German Fountain of Wilhelm II are the monuments decorating the Hippodrome. Then visit Topkapi Palace, one of the biggest museum of Turkey and the Balkan Peninsula. Then visit Grand Covered Bazaar, most attractive shopping center and the biggest “souk” in the world with nearly 4000 shops selling antiques, jewelry, gold, carpets, leatherware and souvenir.  </p>
        <p>    Overnight in Istanbul (Breakfast-Lunch)</p>
</td>
            </tr>


            <tr>
                <td className="color-blue-dark">Day 3</td>
<td>
    <h2 className="color-red">ISTANBUL – KAYSERI OR NEVSEHIR – CAPPADOCIA (BY FLIGHT)</h2>
   <p> Breakfast at the hotel, check out and you will be transferred to Istanbul Airport for your flight to Kayseri ASR or Nevsehir NAV.<br />
     Arrival Cappadocia and transfer to your hotel (appr. 1 hrs drive).<br />
     Check-in. Free time. Overnight in Cappadocia (Breakfast-Dinner)</p>
</td>
            </tr>

            <tr>
                <td className="color-blue-dark">Day 4</td>
<td>
    <h2 className="color-red">CAPPADOCIA</h2>
<p>Departure from the hotel for Goreme-North Cappadocia Tour. Visit to Uc Guzeller and Devrent Valley, has various types of fairy chimneys. <br />
    We will walk through the amazing valley. Drive to Avanos which is famous with pottery. <br />
    Then proceed to Goreme Open Air Museum, where this religious education was started. Last stop for photo taken Uchisar Castle and Esentepe. <br />
    End of the tour, return to your hotel. Overnight in Cappadocia (Breakfast-Lunch-Dinner)</p>
</td>
            </tr>

            <tr>
                <td className="color-blue-dark">Day 5</td>
<td>
    <h2 className="color-red">CAPPADOCIA – KAYSERI OR NEVSEHIR– ISTANBUL</h2>
<p>Check-out from hotel.<br />
     Drive to Kayseri ASR or Nevsehir NAV Airport. <br />
     Return flight to your home via Istanbul connection. (Breakfast)</p>
</td>
            </tr>

         </tbody>
              </table>



        </div>
        <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
            <div className="container">
                <h2 className="color-red">ISTANBUL – BLACK BIRD HOTEL 4*</h2>
                <p>(standard room) or similar on BB basis</p>
                <h2 className="color-red">CAPPADOCIA – MUSTAFA HOTEL 5*</h2>
                <p>(standard room) or similar on HB basis</p>
            </div>
        </div>
        <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
            <div className="container">
                <h2 className="color-red">WITH SIC BASIS TOURS + SIC BASIS TRANSFERS</h2>
              <p>
              <ul>
                <li>
              02 nights stay at the mentioned hotel or similar in Istanbul </li>
              <li> 02 nights stay at the mentioned hotel or similar in Cappadocia </li>
                <li> Daily breakfast at the hotels except on arrival day</li>
                <li>  02 local dinners at the hotel in Cappadocia 01 FD Istanbul </li>
                <li> Old City Tour with local lunch in Istanbul 01 FD Goreme-North Cappadocia Tour with local lunch in Cappadocia </li>
                    <li>All sightseeing tours on SIC basis with local English speaking guide asistance during the tours Airport </li>
                <li>   – Hotel – Airport Transfers on SIC basis in Cappadoccia Airport – Hotel – Airport </li>
                    <li>Return Transfer Services on SIC basis in Istanbul All VATS</li>
                    </ul>
                    </p>
           
            </div>
        </div>
        <div className="tab-pane fade" id="pills-exclusion" role="tabpanel" aria-labelledby="pills-exclusion-tab">
            <div className="container">
                <h2 className="color-red">WITH SIC BASIS TOURS + SIC BASIS TRANSFERS</h2>
           <p> 
           <ul>
           <li className="d-flex">  <BsCheck /> <p> Covid-19 PCR Test </p></li>
           <li className="d-flex">  <BsCheck /> <p> Any International & Internal flights </p></li>
           <li className="d-flex">  <BsCheck /> <p> Any Tips to Driver & Guide  </p></li>
           <li className="d-flex">  <BsCheck /> <p>Drinks at Meals </p></li>
           <li className="d-flex">  <BsCheck /> <p>Personal Expenses  </p></li>
           <li className="d-flex">  <BsCheck /> <p>Porterage </p> </li>
           
           <li className="d-flex">  <BsCheck /> <p>Surcharges as applicable </p> </li>
           <li className="d-flex">  <BsCheck /> <p>Visa Fees and Travel Insurance </p></li>
           <li className="d-flex">  <BsCheck /> <p>Any services not mentioned in the inclusions list </p> </li>
               
               
               </ul>
               <h2 className="color-red mt-5">  COVID-19 TRAVEL GUIDELINES AND REGULATIONS:</h2>
             <ul>
        
             <li className="d-flex">  <BsCheck /> <p>Passengers must have a medical certificate with a negative Coronavirus-19 (COVID-19) PCR test result. </p></li>
             <li className="d-flex">  <BsCheck /> <p>The test must have been taken at most 72 hours before departure from first embarkation point.</p>  </li>
             <li className="d-flex">  <BsCheck /> <p>Any customers arriving from Denmark, South Africa, United Kingdom should declare their residency address and stay in isolation for 14 days. </p> </li>
             <li className="d-flex">  <BsCheck /> <p>At the end of 14 days, passengers are required to undergo a second PCR test and if the test result is negative, the isolation period will end. </p>  </li>
             <li className="d-flex">  <BsCheck /> <p>If the test result is positive, the filiation teams are notified and the case will be closely followed by them. </p></li>
             <li className="d-flex">  <BsCheck /> <p> Wearing a mask is mandatory in Turkey. So please have a face mask with you always.</p>  </li>
             <li className="d-flex">  <BsCheck /> <p> PCR testing while visiting Turkey for foreigners is limited to those who have symptoms, or those who may have an entry requirement back to their home country. 
         </p>  </li>
         <li className="d-flex">  <BsCheck /> <p>esting is paid for by the traveler.  </p></li>
         <li className="d-flex">  <BsCheck /> <p>The service fee cost 35 USD per person. </p> </li>
            </ul>
            </p>
            </div>
        </div>
        <div className="tab-pane fade" id="pills-terms" role="tabpanel" aria-labelledby="pills-terms-tab">
            <div className="container">
       
<p>
<ul>
<li className="d-flex">  <BsCheck /> <p>Rates mentioned are for person on a double sharing basis. </p></li>
<li className="d-flex">  <BsCheck /> <p>The package is subject to availability at the time of booking.
<br/></p> </li>
<li className="d-flex">  <BsCheck /> <p> All Rooms & Offers are subject to availability at the time of confirmation . </p></li>
<li className="d-flex">  <BsCheck /> <p>COVID restrictions & PCR guidelines can change anytime without notice. </p> </li>
<li className="d-flex">  <BsCheck /> <p>Rates for single/triple/quad occupancy will vary and can be provided upon request. .However, the rates and options for increasing </p> </li>
<li className="d-flex">  <BsCheck /> <p> the pax are subject to availability.  </p></li>

<li className="d-flex">  <BsCheck /> <p>Passengers are solely responsible for meeting the passport and visa requirements of the country they are planning the travel too The passport must be valid for at least six months from the date of departure. </p> </li>
<li className="d-flex">  <BsCheck /> <p>The standard check-in time at the hotel is 1400/1500 hours while the check-out time is 1100/1200 hours. Early check-in and late check-out are subject to availability and will incur extra costs </p></li>
<li className="d-flex">  <BsCheck /> <p> Due to the several circumstances that remain out of our control and jurisdiction like adverse currency fluctuations, fuel surcharges, taxes, etc. The displayed price tag is subject to change without any prior notice. </p> </li>
<li className="d-flex">  <BsCheck /> <p> In accordance with the immigration rules of the destination, passengers are responsible for ensuring that they possess a valid passport both before and during the period of travel. </p> </li>
<li className="d-flex">  <BsCheck /> <p>The same applies to any visa requirements that the traveller must obtain before traveling to the country for which the package is being booked. </p> </li>
<li className="d-flex">  <BsCheck /> <p>Dubai Link does not take any responsibility if the passenger is unable to travel due to issues related to their passport or visa. The cancellation policy will be applicable as per the booking terms and conditions
</p></li>
<li className="d-flex">  <BsCheck /> <p> Any overstay expenses due to delay or change or cancellation in flight will be on the guests own & Dubai Link will not be held liable for such expenses however we will provide best possible assistance. </p></li>
    
    </ul>
    </p>
           
            </div>
        </div>
      </div>
  </section>
  </div>
    </div>
  )
}

export default CardIstanbul
