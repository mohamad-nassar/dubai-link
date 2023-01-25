import React from 'react'
import { Link } from "react-router-dom";
import {BsCheck} from 'react-icons/bs'


function TabAzerbijan() {
  return (
    <div>
    <div className="container">
    <ul className=" breadcrumbb mt-5 bread-padding-top">
    <li><Link to="/">Home</Link></li>
    
    <li><Link  onClick={<scrollToTop />} to="/packagepending">Packages</Link></li>
    <li>Azerbaijan</li>
</ul>
</div>
    <div className="container">
    <h2 class="text-capitalize text-center headingpackages">Azerbaijan</h2>
        <section className="navtabfilter pb-5">
    <ul className="nav nav-pills mb-3 " id="pills-tab" role="tablist">
      
        <li className="nav-item" role="presentation">

          <button className="nav-link nav-days-block active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">ITINERARY</button>
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
    <ul>
        <li>Arrival to Baku</li>
        <li>Transfer to the hotel</li>
        <li>Check-in time at 15:00 (standard time)</li>
        <li>Overnight in Baku</li>
    </ul>
</td>
            </tr>


            <tr>
                <td className="color-blue-dark">Day 2</td>
            <td>
               <ul>
                    <li>Breakfast at the hotel</li>
                    <li>Baku City Tour includes the followings: </li>
               </ul> 

               <ul class="ordered-list-disc">
               <li><p>Visit Highland Park-Alley of Martyrs, The National Assembly- also transliterated as Milli Majlis, Flame towers-the tallest skyscraper in Baku. </p></li>
               <li><p>Walking through Baku Boulevard which stretches along a south-facing bay on the Caspian Sea. It traditionally starts at Freedom Square continuing west to the Old City and beyond. Since 2012, the Yeni Bulvar (New Boulevard) has virtually doubled the length to 3.75 km.</p></li>
               <li><p>Our tour program will continue with Old City or Inner City which is the historical core of Baku, the capital of Azerbaijan. The Old City is the most ancient part of Baku, which is surrounded by walls that were well protected. In December 2000, the Old City of Baku, including the Palace of the Shirvanshahs and Maiden Tower, became the first location in Azerbaijan to be classNameified as a World Heritage Site by UNESCO.</p></li>
               <li><p>The tour continues with a visit to the charming example of modern architecture -  The Heydar Aliyev Center - a 57,500 m2 building complex in Baku, Azerbaijan designed by Iraqi-British architect Zaha Hadid and noted for its distinctive architecture and flowing, curved style that eschews sharp angles. The center is named after Heydar Aliyev, the first secretary of Soviet Azerbaijan from 1969 to 1982, and president of the Azerbaijan Republic from October 1993 to October 2003.</p></li>
               </ul>

               <ul class="ordered-list-disc">
               <li><p>Departure to the hotel or drop off at any point in the city center</p></li>
               <li><p>Overnight in  Baku</p></li>
               </ul>
            </td>
            </tr>


            <tr>
                <td className="color-blue-dark">Day 3</td>
<td>
    <ul>
        <li>Breakfast at the hotel.</li>
        <li>Guba tour: 
        <ul class="ordered-list-disc">
        <li><p>In the morning, meet your driver at your hotel in Guba.</p> </li>
        <li><p>Depart north of the capital city. Firstly, you will be introduced to the spectacular view of Gechresh forests, mountains, and valleys. Reaching Mastargah waterfall, you will enjoy the beautiful landscape in Mastargah and can have your lunch there. The wonderful surrounding of Mastargah is perfect for a nature walk.</p></li>
        <li><p>Later, drive through Red Village (Krasnaya Sloboda), the biggest settlement of Mountain Jews in Azerbaijan, and get to know the unique local ethnicity in Azerbaijan. The village will meet you with its historical Synagogue along with a guide who will give interesting facts about the site. In the end, you will be taken back to your accommodation in Guba.</p></li>
            </ul>
        </li>
        <li>Back to the hotel.</li>
        <li>Overnight in Guba.</li>
    </ul>
</td>
            </tr>

            <tr>
                <td className="color-blue-dark">Day 4</td>
<td>

<p>Departure from the hotel for Goreme-North Cappadocia Tour. Visit to Uc Guzeller and Devrent Valley, has various types of Fairy chimneys. <br />
    We will walk through the amazing valley. Drive to Avanos which is famous with pottery. <br />
    Then proceed to Goreme Open Air Museum, where this religious education was started. Last stop for photo taken Uchisar Castle and Esentepe. <br />
    End of the tour, return to your hotel. Overnight in Cappadocia (Breakfast-Lunch-Dinner)</p>
</td>
            </tr>

            <tr>
                <td className="color-blue-dark">Day 5</td>
        <td>
            <ul>
                <li>Breakfast at the Hotel. </li>
                <li>Check out from the hotel at 12:00</li>
                <li>Transfer from Guba hotel to GYD Airport.</li>
            </ul>
        </td>
            </tr>

         </tbody>
              </table>
        </div>





        <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
            <div className="container">
                <ul>
                    <li>4 nights accommodation in 4* hotels on a breakfast basis.</li>
                    <li>All tours and transfers are on a private  basis  ( 1-2 pax sedan car, 3-4 pax MB Vito)</li>
                    <li>8-Hour tours between 10:00 -19:00 – Additional tour hours are not included and are chargeable.</li>
                </ul>           
            </div>
        </div>


        <div className="tab-pane fade" id="pills-exclusion" role="tabpanel" aria-labelledby="pills-exclusion-tab">
            <div className="container">
            <ul class="ordered-list-disc">
           <li><p>Airlines tickets   </p></li>
           <li><p>Personal expenses (telephone, laundry, tips) </p></li>
           <li><p>Optional tours   </p></li>
           <li><p>Tourist tax: Direct payment at the hotel upon arrival </p></li>
           <li><p>Beverages </p></li>
           <li><p>Porterage </p> </li>
           
           <li><p>Travel Insurance </p></li>
           <li><p>Any meal not indicated in the itinerary </p></li>
           <li><p>Any services not mentioned in the inclusions list </p> </li>
           <li><p>Entrance tickets</p> </li>      
            </ul>
            </div>
        </div>


        {/* Package exclusions : */}
        <div className="tab-pane fade" id="pills-terms" role="tabpanel" aria-labelledby="pills-terms-tab">
            <div className="container">
            <ul class="ordered-list-disc">
             <li><p>Airlines tickets</p></li>
             <li><p> Personal expenses (telephone, laundry, tips) </p></li>
             <li><p>Optional tours </p> </li>
             <li><p>Tourist tax: Direct payment at the hotel upon arrival</p> </li>
             <li><p> the pax are subject to availability.  </p></li>
             <li><p>Beverages</p> </li>
             <li><p>Travel Insurance </p></li>
             <li><p> Any meal not indicated in the itinerary</p> </li>
             <li><p> Entrance tickets</p> </li>
             <li><p>The same applies to any visa requirements that the traveller must obtain before traveling to the country for which the package is being booked. </p> </li>
             <li><p>Dubai Link does not take any responsibility if the passenger is unable to travel due to issues related to their passport or visa. The cancellation policy will be applicable as per the booking terms and conditions</p></li>      
                </ul>
            </div>
        </div>

        <div className="tab-pane fade" id="pills-terms" role="tabpanel" aria-labelledby="pills-terms-tab">
        <ul class="ordered-list-disc">
                <li>The rates mentioned are per person on a double-sharing basis.</li>
                <li>The package is subject to availability at the time of booking</li>
                <li>The tour program is subject to changes. Guided tours order is subject to changes</li>
                <li>The displayed rates do not apply during Christmas, New Year, special events, peak season, and blackout dates. Additional surcharges may apply.</li>
                <li>All Rooms & Offers are subject to availability at the time of confirmation</li>
                <li>COVID restrictions & PCR guidelines can change anytime without notice.</li>
                <li>Rates for single/triple/quad occupancy will vary and can be provided upon request. However, the rates and options for increasing the pax are subject to availability.</li>
                <li>Passengers are solely responsible for meeting the passport and visa requirements of the country they are planning the travel to.</li>
                <li>The passport must be valid for at least six months from the date of departure.</li>
                <li>The standard check-in time at the hotel is 14:00/15:00 while the check-out time is 11:00/12:00. Early check-in and late check-out are subject to availability and will incur extra costs.</li>
                <li>Due to several circumstances that remain out of our control and jurisdiction like adverse currency fluctuations, fuel surcharges, taxes, etc.,  the displayed price tag is subject to change without any prior notice.</li>
                <li>Following the immigration rules of the destination, passengers are responsible for ensuring that they possess a valid passport both before and during the period of travel. The same applies to any visa requirements that the traveler must obtain before traveling to the country for which the package is being booked.</li>
                <li>Dubai Link does not take any responsibility if the passenger is unable to travel due to issues related to their passport or visa. The cancellation policy will be applicable as per the booking terms and conditions.</li>
                <li>Any overstay expenses due to delay or change or cancellation in flight will be on the guest's own & Dubai Link will not be held liable for such expenses however we will provide the best possible assistance.</li>
                <li>The above package is valid for travel till 25 March 2023.</li>
            </ul>
        </div>
      </div>
  </section>
  </div>
    </div>
  )
}

export default TabAzerbijan