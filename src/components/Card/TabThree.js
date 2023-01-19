import React from "react";
import { Link } from "react-router-dom";
import { BsCheck } from "react-icons/bs";

function TabThree() {
  return (
    <div>
      <div className="container">
        <ul className=" breadcrumbb mt-5 bread-padding-top">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li><Link  onClick={<scrollToTop />} to="/packagepending">Packages</Link></li>
          <li>Prague– Vienna– Budapest</li>
        </ul>
      </div>
      <div className="container">
      <h2 class="text-capitalize text-center headingpackages">Prague– Vienna– Budapest</h2>
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
                      <p>Arrival in Prague. </p>
                      <p>Meeting with the driver at the airport. </p>
                      <p>Check-in at the hotel. </p>
                      <p>Free time.</p>
                    </td>
                  </tr>

                  <tr>
                    <td className="color-blue-dark">Day 2</td>
                    <p>Breakfast at the hotel.</p>
                    <p>Prague bus-walking city tour The sightseeing tour includes
                      both a bus ride and a walking tour of the best places in
                      the Czech capital. You will visit the greatness of one of
                      the most beautiful capitals in Europe. The bus part serves
                      to take you to Prague Castle in comfort and to visit
                      numerous sights on the way. The walking tour will start
                      from the city of Prague Castle and its courtyards.
                    </p>
                  </tr>

                  <tr>
                    <td className="color-blue-dark">Day 3</td>
                    <td>
                      <p>Arrival in Vienna, </p>
               
                      <p>Vienna sightseeing tour </p>
                 
                      <p>Free time </p>
              
                      <p>Departure to Budapest </p>
                      <p>Overnight at the hotel.</p>
                    </td>
                  </tr>

                  <tr>
                    <td className="color-blue-dark">Day 4</td>
                    <p>Breakfast at the hotel.</p>
                    <p>Budapest sightseeing tour</p>
                    <p>Free time </p>
                    <p>Departure to Prague. </p>
                  </tr>

                  <tr>
                    <td className="color-blue-dark">Day 5</td>
                    <td>
                      <p>Breakfast at the hotel.</p>
                      <p>Free time.</p>
                    </td>
                  </tr>

                  <tr>
                    <td className="color-blue-dark">Day 6</td>
                    <td>
                      <p>
                        Night walking tour “OLD PRAGUE LEGENDS” This unique
                        walk will allow you to better understand the history and
                        cultural characteristics of this country full of
                        mysteries.
                      </p>
                    </td>
                  </tr>

                  <tr>
                    <td className="color-blue-dark">Day 7</td>
                    <td>
                      <p>Breakfast at the hotel.</p>
                  
                      <p>Free time. </p>
          
                      <p>
                        Optional: Český Krumlov and Hluboká nad Vltavou Castle
                        at the cost of 49 € per pax.
                      </p>
                    </td>
                  </tr>

                  <tr className="color-blue-dark">
                    <td>Day 8</td>
                    <td>
                      <p>Breakfast at the hotel.</p>
                   
                      <p>Transfer to Prague Airport.</p>
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
                      Double room accommodation in a 4* hotel in Prague and
                      Budapest on a breakfast basis
                    </li>
                    <li>Arrival/Departure with transfer by private car.</li>
                    <li>
                      Tours according to the City Tour program, Old Prague
                      Legends, group tour Vienna – Budapest
                    </li>
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
                        time of confirmation .
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

export default TabThree;
