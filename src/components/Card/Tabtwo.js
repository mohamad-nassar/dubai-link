import React from "react";
import { Link } from "react-router-dom";
import { BsCheck } from "react-icons/bs";

function Tabtwo() {
  return (
    <div>
      <div className="container">
        <ul className=" breadcrumbb mt-5 bread-padding-top">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li><Link  onClick={<scrollToTop />} to="/packagepending">Packages</Link></li>
          <li>Armenia</li>
        </ul>
      </div>
      <div className="container">
      <h2 class="text-capitalize text-center headingpackages">Armenia</h2>
        <section className="navtabfilter pb-5">
          <ul className="nav nav-pills mb-3 " id="pills-tab" role="tablist">
  
            <li className="nav-item" role="presentation">
              <button
                className="nav-link nav-days-block active"
                id="pills-home-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-home"
                type="button"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
              >
                ITINERARY
              </button>
            </li>

            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-contact-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-contact"
                type="button"
                role="tab"
                aria-controls="pills-contact"
                aria-selected="false"
              >
                PACKAGE INCLUSIONS
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-exclusion-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-exclusion"
                type="button"
                role="tab"
                aria-controls="pills-exclusion"
                aria-selected="false"
              >
                PACKAGE EXCLUSIONS
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-terms-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-terms"
                type="button"
                role="tab"
                aria-controls="pills-terms"
                aria-selected="false"
              >
                TERMS & CONDITIONS
              </button>
            </li>
          </ul>
          <div className="tab-content" id="pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="pills-home"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
            >
              <table className="table table-bordered table-days ">
                <tbody>
                  <tr>
                    <td className="color-blue-dark">Day 1</td>
                    <td>
                      <h6 style={{ color: "grey" }}>
       
                      </h6>
                      <h2 className="color-red">
                 
                      </h2>
                   
                      <p>
                        {" "}
                        Meet and greet at Zvartnots International Airport.{" "}
                      </p>
                      <p>Transfer to the hotel. </p>
                      <p>Overnight at the hotel in Yerevan.</p>
                    </td>
                  </tr>

                  <tr>
                    <td className="color-blue-dark">Day 2</td>
                    <p>
                      After a short rest at the hotel, we will proceed with
                      Yerevan City Sightseeing Tour.
                    </p>
                    <p>Overnight at the hotel in Yerevan. </p>
                    <ul class="ordered-list-disc">
                      <li><p>
                          We will go for a walk in the pink city of Yerevan.
                          This ancient city is 29 years older than Rome. We will
                          start walking in the most pleasant Republic Square
                          with Government Buildings, History Museum, and Marriot
                          Hotel surrounding it. Walking up one of the oldest
                          streets in Yerevan – Abovyan Street – we will appear
                          on the richest avenue in Yerevan – the Northern Avenue
                          with many brand shops, luxurious cafes, and
                          restaurants.
                        </p>
                      </li>
                      <li><p>Our next stop – the Opera, Ballet House, and Swan Lake
                          – faces Northern Avenue. Every winter the Swan Lake
                          transforms into a jolly outdoor ice rink where people
                          of all ages try to learn ice skating.
                        </p>
                      </li>
                      <li><p>Next is the Cascade Monument. Inside the Cascade,
                          underneath the exterior steps, are seven escalators
                          that rise along the length of the complex. There are
                          also exhibit halls connected to some of the landings
                          along the escalators which compose the Cafesjian
                          Museum of Art.
                        </p>
                      </li>
                      <li><p>Then we will go to the Park of Freedom. Here the whole
                          city seems to be in our hands.
                        </p>
                      </li>
                      <li><p>Winter Park will be our last stop. It is one of the
                          greatest entertainment centers to visit during winter.
                          The visitors will have a chance to visit Mr. Clause,
                          meet elves and reindeer, or just enjoy the beautiful
                          installations and sculptures scattered throughout the
                          park. There are cafes, ice rinks, and slides for
                          entertainment for both adults and children.
                        </p>
                      </li>
              </ul>
                  </tr>

                  <tr>
                    <td className="color-blue-dark">Day 3</td>
                    <td>
                      <p>Breakfast at the hotel</p>
                      <br />
                      <p>
                        Drive to the ski resort Tsaghkadzor. Skiing and
                        snowboarding in the high mountains have never been as
                        attractive as that in Tsaghkadzor. The mountains in
                        Tsaghkadzor are an ideal place for skiing and
                        snowboarding for both beginners and amateur sportsmen.
                        The beginners will have an instructor to help them. And
                        the 2900 meters ropeway will make you feel in the air
                        high above the half-white, half-brown trees, snow-white
                        rocks and mountains, and the modern handmade sights of
                        attraction, and will make you fully enjoy your vacation,
                        forgetting all the troubles in the world.
                      </p>
                      <br />
                      <p>
                        Visit the Kecharis monastery. It is a medieval monastery
                        complex built in the early–mid ages nearly in the 1050s.
                        It includes 4 churches, a courtyard, 2 chapels, and many
                        khachkars (cross-stones). It’s a perfect place for
                        thinking about life, nature, and everything.
                      </p>
                      <br />
                      <p>Overnight in Tsaghkadzor. </p>
                    </td>
                  </tr>

                  <tr>
                    <td className="color-blue-dark">Day 4</td>
                    <p>Breakfast at the hotel.</p>
                    <p>Free time for skiing. </p>
                    <p>
                      Overnight in Tsaghkadzor. (No guide and driver services){" "}
                    </p>
                  </tr>

                  <tr>
                    <td className="color-blue-dark">Day 5</td>
                    <td>
                      <p>Breakfast at the hotel</p>
                      <br />
                      <p>
                        Drive to Garni Temple where we will enjoy the
                        astonishing view of the gorges all around. Garni is a
                        pagan temple built in the 1st century, the only
                        surviving of the Hellenic epoch in the whole territory
                        of the Caucasus. We will enjoy the view of the “Symphony
                        of stones” from the top.{" "}
                      </p>
                      <br />
                      <p>
                        Proceed to the magnificent monastic complex Geghard,
                        which is inscribed in UNESCO World Heritage Site.
                        Transfer to Yerevan.
                      </p>
                      <br />
                      <p>Free time for shopping. </p>
                      <br />
                      <p>Overnight at the hotel in Yerevan. </p>
                    </td>
                  </tr>

                  <tr>
                    <td className="color-blue-dark">Day 6</td>
                    <td>
                      <p>Breakfast at the hotel</p>
                      <br />
                      <p>
                        Transfer to Zvartnots International Airport for
                        departure.
                      </p>
                      <br />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
  
            <div
              className="tab-pane fade"
              id="pills-contact"
              role="tabpanel"
              aria-labelledby="pills-contact-tab"
            >
              <div className="container">
                <p>
                  <ul>
                    <li>Accommodation at 4*hotel on a DBL basis</li>
                    <li>Breakfast in the hotel </li>
                    <li>Transfer to/from Zvartnots International Airport</li>
                    <li>Transfers during the tours</li>
                    <li>English-speaking guide services on tour days</li>
                    <li>All entrance fees</li>
                    <li>Ropeway ride in Tsaghkadzor</li>
                    <li>A bottle of mineral water per person per day</li>
                    <li>Maps of Armenia and Yerevan </li>
                    <li>24-hour service</li>
                  </ul>
                </p>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-exclusion"
              role="tabpanel"
              aria-labelledby="pills-exclusion-tab"
            >
              <div className="container">
                <h2 className="color-red">
                  WITH SIC BASIS TOURS + SIC BASIS TRANSFERS
                </h2>
                <p>
                <ul class="ordered-list-disc">
                <li><p>Airlines tickets </p>
                    </li>
                    <li><p>Personal expenses (telephone, laundry, tips) </p>
                    </li>
                    <li><p>Optional tours </p>
                    </li>
                    <li><p>Tourist tax: Direct payment at the hotel upon arrival
                      </p>
                    </li>
                    <li><p>Beverages </p>
                    </li>
                    <li><p>Travel Insurance </p>
                    </li>
                    <li><p>Any meal not indicated in the itinerary
                      </p>
                    </li>
                    <li><p>Entrance tickets</p>
                    </li>
                  </ul>
                </p>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-terms"
              role="tabpanel"
              aria-labelledby="pills-terms-tab"
            >
              <div className="container">
                <p>
                <ul class="ordered-list-disc">
                <li><p>The rates mentioned are per person on a double-sharing
                        basis.
                      </p>
                    </li>
                    <li><p>The package is subject to availability at the time of
                        booking
                      </p>
                    </li>
                    <li><p>The tour program is subject to changes. Guided tours
                        order is subject to changes
                      </p>
                    </li>
                    <li><p>The displayed rates do not apply during Christmas, New
                        Year, special events, peak season, and blackout dates.
                        Additional surcharges may apply.
                      </p>
                    </li>
                    <li><p>All Rooms & Offers are subject to availability at the
                        time of confirmation.
                      </p>
                    </li>
                    <li><p>COVID restrictions & PCR guidelines can change anytime
                        without notice.
                      </p>
                    </li>
                    <li><p>Rates for single/triple/quad occupancy will vary and can
                        be provided upon request. However, the rates and options
                        for increasing the pax are subject to availability.
                      </p>
                    </li>
                    <li><p>Passengers are solely responsible for meeting the
                        passport and visa requirements of the country they are
                        planning the travel to.
                      </p>
                    </li>
                    <li><p>The passport must be valid for at least six months from
                        the date of departure.
                      </p>
                    </li>
                    <li><p>The standard check-in time at the hotel is 14:00/15:00
                        while the check-out time is 11:00/12:00. Early check-in
                        and late check-out are subject to availability and will
                        incur extra costs.
                      </p>
                    </li>
                    <li><p>Due to several circumstances that remain out of our
                        control and jurisdiction like adverse currency
                        fluctuations, fuel surcharges, taxes, etc., the
                        displayed price tag is subject to change without any
                        prior notice.
                      </p>
                    </li>
                    <li><p>Under the immigration rules of the destination,
                        passengers are responsible for ensuring that they
                        possess a valid passport both before and during the
                        period of travel. The same applies to any visa
                        requirements that the traveler must obtain before
                        traveling to the country for which the package is being
                        booked.
                      </p>
                    </li>
                    <li><p>Dubai Link does not take any responsibility if the
                        passenger is unable to travel due to issues related to
                        their passport or visa. The cancellation policy will be
                        applicable as per the booking terms and conditions.
                      </p>
                    </li>
                    <li><p>Any overstay expenses due to delay or change or
                        cancellation in flight will be on the guest's own &
                        Dubai Link will not be held liable for such expenses
                        however we will provide the best possible assistance
                      </p>
                    </li>
                    <li><p>The above package is valid for travel till February 2023
                      </p>
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Tabtwo;
