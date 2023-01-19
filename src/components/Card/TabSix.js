import React from "react";
import { Link } from "react-router-dom";
import { BsCheck } from "react-icons/bs";

function TabSix() {
  return (
    <div>
      <div className="container">
        <ul className=" breadcrumbb mt-5 bread-padding-top">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li><Link  onClick={<scrollToTop />} to="/packagepending">Packages</Link></li>
          <li>Bosnia & Herzegovina</li>
        </ul>
      </div>
      <div className="container ">
      <h2 class="text-capitalize text-center headingpackages">Bosnia & Herzegovina</h2>
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
                      <p>Arrival in Sarajevo.</p>
                      <p>Transfer to the hotel.</p>
                    </td>
                  </tr>

                  <tr>
                    <td className="color-blue-dark">Day 2</td>
                    <p>Sarajevo city tour & Mt. Trebevic</p>
                    <ul class="ordered-list-disc">
                     <li><p>Visit the Old town Bascarsija, Cathedral, Gazi Husrev
                          Bey’s mosque, Latin Bridge, etc. In each corner of the
                          city, you can find something interesting and learn
                          more about its rich history.
                        </p>
                      </li>
                      <span>
                      <li><p>Proceed to Mt. Trebević where you can hike, and have
                            a picnic or lunch in one of the restaurants. It is
                            known as the place with the best panoramic view of
                            Sarajevo. Sunnyland park has found its place on this
                            mountain. This amusement park has an Alpine coaster,
                            an indoor and outdoor playground as well a
                            restaurant.
                          </p>
                        </li>
                      </span>
                    </ul>
                  </tr>

                  <tr>
                    <td className="color-blue-dark">Day 3</td>
                    <td>
                      <p>Early breakfast. </p>
                      <p>Old Town Tour ( Sarajevo-Konjic-Mostar).</p>
                      <ul class="ordered-list-disc">
                      <li><p>Departure to Herzegovina. </p>
                      </li>
                      <li><p>On the way to Mostar, visit Konjic. Konjic is located
                          at the invisible/geographical crossing between the
                          regions of Herzegovina and Bosnia. Don’t miss having a
                          cup of coffee in one of the cafes next to the Old
                          Ćuprija and river Neretva.
                        </p>
                      </li>
                      <li><p>Upon arrival to Mostar, your guide will take you to
                          the Old town of Mostar. Mostar is the cultural and
                          economic center of the region, the city known for its
                          famous Old Bridge as well as for its vibrant
                          atmosphere, interesting architecture, and history.
                        </p>
                      </li>
                      </ul>
                    </td>
                  </tr>

                  <tr>
                    <td className="color-blue-dark">Day 4</td>
                    <p>
                      Herzegovina Tour Herzegovina region is indeed full of
                      magical places. Visit Počitelj, a small charming town, and
                      the picturesque village Blagaj which will show you the
                      best of Herzegovina – amazing nature and rich cultural
                      heritage.
                    </p>
                    <br />
                    <p>Arrival in Madrid and transfer to the hotel.</p>
                  </tr>

                  <tr>
                    <td className="color-blue-dark">Day 5</td>
                    <td>
                      <p>Transfer to Sarajevo.</p>
                      <p>
                        Visit the spring of river Bosna, a beautiful oasis
                        located near Sarajevo. This place is perfect for
                        relaxation, picnics, or walking in nature
                      </p>
                      <br />
                      <p>
                        Explore the Bosnian capital city – Sarajevo, often
                        called “European Jerusalem”. Visit the Old town
                        Bascarsija, Cathedral, Gazi Husrev Bey’s mosque, the
                        Latin bridge, etc.
                      </p>
                      <br />
                      <p>
                        Shopping time in one of the largest malls in Sarajevo.
                      </p>
                    </td>
                  </tr>

                  <tr>
                    <td className="color-blue-dark">Day 6</td>
                    <td>
                      <p>Breakfast at the hotel. </p>
                      <br />
                      <p>
                        Departure to the Olympic mountain Bjelašnica where you
                        will enjoy the fresh air and the beautiful natural
                        setting.
                      </p>
                      <br />
                      <p>
                        Besides Mt. Bjelašnica, don’t miss visiting another
                        Bosnian beauty - Mt. Igman and its famous “War mosque”.
                        The tour of War Mosque will teach you a bit more about
                        Bosnian history. Spring of river Bosna is a beautiful
                        oasis located near Sarajevo. This place is perfect for
                        relaxation, picnics, or walking in nature.
                      </p>
                    </td>
                  </tr>

                  <tr>
                    <td className="color-blue-dark">Day 7</td>
                    <td>
                      <p>Free day</p>
                    </td>
                  </tr>

                  <tr className="color-blue-dark">
                    <td>Day 8</td>
                    <td>
                      <p>Departure & transfer to the airport</p>
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
                    <li>
                      The above package is valid for travel till 25 March 2023
                    </li>
                    <li>Accommodation in a 4* hotel on a breakfast basis. </li>
                    <li>All taxes.</li>
                    <li>Airport transfers.</li>
                    <li>
                      Daily tour in a private vehicle (car sedan or minivan)
                      according to the itinerary.
                    </li>
                    <li>All tours mentioned in the program</li>
                    <li>English-speaking tour driver/guide</li>
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
                <p>
                   <ul class="ordered-list-disc">
                   <li><p>Airline Tickets </p>
                    </li>
                    <li><p>Hotel extra costs (minibar, smoking penalty, damage…)
                      </p>
                    </li>
                    <li><p>Any tours outside the above itinerary </p>
                    </li>
                    <li><p>Entrance fees </p>
                    </li>
                    <li><p>An additional cost of 10 euros per day for Arabic
                        speaking driver/guide (subject to availability)
                      </p>
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
                <li><p>Rates mentioned are per person on a double-sharing
                        basis.
                      </p>
                    </li>
                    <li><p>The package is subject to availability at the time of
                        booking.
                      </p>
                    </li>
                    <li><p>Check-in time is 14:00 depending on the hotel policy.
                      </p>
                    </li>
                    <li><p>Check-out time is noon depending on the hotel policy.
                      </p>
                    </li>
                    <li><p>Early check-in and late check-out are subject to
                        availability and will incur extra costs.
                      </p>
                    </li>
                    <li><p>In case any hotel rules have been broken (smoking fee,
                        property damages) we are not responsible, and the hotel
                        has the right to charge the guests directly.
                      </p>
                    </li>
                    <li><p>The displayed rates do not apply during Christmas, New
                        Year, special events, peak season, and blackout dates.
                        Additional surcharges may apply.
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
                    <li><p>Due to the several circumstances that remain out of our
                        control and jurisdiction like adverse currency
                        fluctuations, fuel surcharges, taxes, etc. The displayed
                        price tag is subject to change without any prior notice.
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
                    <li><p>Dubai Link Travel & Tours does not take any
                        responsibility if the passenger is unable to travel due
                        to issues related to their passport or visa. The
                        cancellation policy will be applicable as per the
                        booking terms and conditions.
                      </p>
                    </li>
                    <li><p>Any overstay expenses due to delay or change or
                        cancellation in flight will be on the guest's own &
                        Dubai Link Travel & Tours will not be held liable for
                        such expenses however we will provide the best possible
                        assistance.
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

export default TabSix;
