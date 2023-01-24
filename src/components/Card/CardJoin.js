import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import url from "../url";
function CardJoin() {
  const [region, setRegion] = useState("dubai");
  const [career, setCareer] = useState([]);
  async function getcareer(reg) {
    setCareer([]);
    const req = { region: reg };
    const response = await axios.post(`${url.baseURL}/about/career`, req);
    setCareer(response.data.careers);
  }
  useEffect(() => {
    getcareer(region);
  },[]);
  return (
    <div>
      <div className="container">
        <ul className=" breadcrumbb mt-5 bread-padding-top">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>Careers</li>
        </ul>
      </div>
      <div className="container mt-80">
        <div className="blog-wrapper  pb-5">
          <h2 class="text-capitalize text-center headingpackages d-block d-md-none">
            Careers
          </h2>
          <div className="container">
            <h2 className="text-capitalize text-center">
              Future-<span>proof</span> <span> Your </span> career plan{" "}
              <span>with </span> us
            </h2>
            <p className="text-center mt-4 d-block d-md-none">
              Join a diverse and innovative business <br /> and embark on a
              fulfilling future.
              <br /> We are investing in our colleagues to grow into the leaders
              of tomorrow. <br />
            </p>
            <p className="text-center mt-4 d-none d-md-block">
              Join a diverse and innovative business and embark on a fulfilling
              future. <br /> We are investing in our colleagues to grow into the
              leaders of tomorrow. <br />
            </p>

            <ul
              className="nav nav-pills nav-pills-center mb-3 mt-5 "
              id="pills-tab"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link nav-days-block active"
                  id="pills-dubai-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-dubai"
                  type="button"
                  role="tab"
                  aria-controls="pills-dubai"
                  aria-selected="true"
                  onClick={()=>{
                    getcareer("dubai")
                  }}
                >
                  Dubai
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-cairo-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-cairo"
                  type="button"
                  role="tab"
                  aria-controls="pills-cairo"
                  aria-selected="false"
                  onClick={()=>{
                    getcareer("cairo")
                  }}
                >
                  Cairo
                </button>
              </li>
            </ul>
            <div className="tab-content" id="pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="pills-dubai"
                role="tabpanel"
                aria-labelledby="pills-dubai-tab"
              >
                <div class="table-responsive ">
                  <table class="table table-striped">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th class="w-des-40">Title</th>
                        <th class="w-des-20">Department</th>
                        <th class="w-des-20">Facility</th>
                        <th>Posting Date</th>
                        <th>Action</th>
                      </tr>
                    </thead>

                    <tbody>
                      { career==null ? "" :career.map((item,itemindex) => {
                        return [
                          <tr>
                            <th scope="row">{itemindex+1}</th>
                            <td>
                              <Link onClick={<scrollToTop />} to="/applytwo">
                                {item.title}
                              </Link>
                            </td>
                            <td>{item.department}</td>
                            <td>{item.facility} </td>
                            <td>{new Date(item.created_at).toLocaleDateString("es-CL")}</td>
                            <td>
                              <div>
                                <button type="button" class="btn btn-dark">
                                  <Link
                                    onClick={<scrollToTop />}
                                    to="/applytwo"
                                  >
                                    Apply Now
                                  </Link>
                                </button>
                              </div>
                            </td>
                          </tr>,
                        ];
                      })}
                    </tbody>
                  </table>
                </div>
              </div>

              <div
                className="tab-pane fade"
                id="pills-cairo"
                role="tabpanel"
                aria-labelledby="pills-cairo-tab"
              >
                <div class="table-responsive">
                  <table class="table table-striped">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th class="w-des-40">Title</th>
                        <th class="w-des-20">Department</th>
                        <th class="w-des-20">Facility</th>
                        <th>Posting Date</th>
                        <th>Action</th>
                      </tr>
                    </thead>

                    <tbody>
                      { career==null ? "" :career.map((item,itemindex) => {
                        return [
                          <tr>
                            <th scope="row">{itemindex+1}</th>
                            <td>
                              <Link onClick={<scrollToTop />} to="/applytwo">
                                {item.title}
                              </Link>
                            </td>
                            <td>{item.department}</td>
                            <td>{item.facility} </td>
                            <td>{new Date(item.created_at).toLocaleDateString("es-CL")}</td>
                            <td>
                              <div>
                                <button type="button" class="btn btn-dark">
                                  <Link
                                    onClick={<scrollToTop />}
                                    to="/applytwo"
                                  >
                                    Apply Now
                                  </Link>
                                </button>
                              </div>
                            </td>
                          </tr>,
                        ];
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardJoin;
