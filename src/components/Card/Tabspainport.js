import React from "react";
import { Link } from "react-router-dom";
import { BsCheck } from "react-icons/bs";

function Tabspainport() {
  return (
    <div>
      <div className="container">
        <ul className=" breadcrumbb mt-5 bread-padding-top">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li><Link  onClick={<scrollToTop />} to="/packagepending">Packages</Link></li>
          <li>Spain & Portugal</li>
        </ul>
      </div>
      <div className="container">
      <h2 class="text-capitalize text-center headingpackages">Spain & Portugal</h2>
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
       
                      <p>Arrival in Barcelona.</p>
                      <p>Private transfer to the hotel.</p>
                    </td>
                  </tr>

                  <tr>
                    <td className="color-blue-dark">Day 2</td>
                    <p>
                      Panoramic city tour to Barcelona’s main squares, avenues,
                      and monuments like Montjuic Mountain, Passeig de Gracia,
                      Old Port area, Gaudi`s buildings, etc. Optionally you can
                      visit Sagrada Familia or Park Guell.
                    </p>
                    <br />
                  </tr>

                  <tr>
                    <td className="color-blue-dark">Day 3</td>
                    <td>
                      <p>
                        Free day to visit Barcelona Aquarium, Spanish Village,
                        or flamenco show.
                      </p>
                    </td>
                  </tr>

                  <tr>
                    <td className="color-blue-dark">Day 4</td>
                    <p>
                      Transfer from the hotel to the train station. Trip from
                      Barcelona to Madrid on the AVE (a high‐speed train).
                    </p>
                    <p>Arrival in Madrid. </p>
                    <p>Transfer to the hotel.</p>
                  </tr>

                  <tr>
                    <td className="color-blue-dark">Day 5</td>
                    <td>
                      <p>Breakfast at the hotel.</p>
                      <p>
                        City tour of this legendary pilgrimage town: Royal
                        Palace, former residence of the Spanish Kings. Optional,
                        visit the Royal Palace or Prado Museum.
                      </p>
                    </td>
                  </tr>

                  <tr>
                    <td className="color-blue-dark">Day 6</td>
                    <td>
                      <p>
                        Transfer from the hotel to the bus station. Trip from
                        Madrid to Lisbon on the comfortable bus.
                      </p>
                      <br />
                      <p>Arrival in Lisbon.</p>
                      <br />
                      <p>Transfer to the hotel.</p>
                    </td>
                  </tr>

                  <tr>
                    <td className="color-blue-dark">Day 7</td>
                    <td>
                      <p>Breakfast at the hotel.</p>
                      <p>
                        Lisbon sightseeing tour to the most emblematic places of
                        the city like Eduardo VII park, Liberty Avenue, Belem
                        District, Commerce Square, etc.
                      </p>
                    </td>
                  </tr>

                  <tr className="color-blue-dark">
                    <td>Day 8</td>
                    <td>
                      <p>Private transfer to the airport</p>
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
                      3 nights double room accommodation in a 4* hotel in
                      Barcelona on a breakfast basis.
                    </li>
                    <li>
                      2 nights double room accommodation in a 4* hotel in Madrid
                      on a breakfast basis
                    </li>
                    <li>
                      2 nights double room accommodation in a 4* hotel in
                      Marbella on a breakfast basis.
                    </li>
                    <li>Arrival / Departure with transfer by private car.</li>
                    <li>Assistance guide upon arrival at the airport.</li>
                    <li>
                      Park Guell + Sagrada Familia Tour - 4hrs with an official
                      guide.
                    </li>
                    <li>Madrid City Tour - 4hrs with an official guide.</li>
                    <li>Lisbon Sightseeing Tour - 4hrs</li>
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
                    <li><p>Personal expenses (telephone, laundry, tips)</p>
                    </li>
                    <li><p>Tourist tax (direct payment at the hotel upon arrival).
                      </p>
                    </li>
                    <li><p>Tourist tax: Direct payment at the hotel upon arrival
                      </p>
                    </li>
                    <li><p>Beverages</p>
                    </li>
                    <li><p>Any meal not indicated in the itinerary.</p>
                    </li>
                    <li><p>Tickets to monuments such as Park Guell, Sagrada
                        Familia, Royal Palace, and Prado Museum.
                      </p>
                    </li>
                    <li><p>Travel insurance.</p>
                    </li>
                    <li><p>Any service that is not added in “The package
                        inclusions”.
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
                        booking
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
                        however we will provide the best possible assistance.
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

export default Tabspainport;
