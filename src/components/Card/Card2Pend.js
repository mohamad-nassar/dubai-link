import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import axios from "axios";
import url from "../url.jsx";
function Card2Pend() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [pack, setPack] = useState([]);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [packages, setPackages] = useState("");

  function onChange(value) {
    console.log("Captcha value:", value);
  }
  async function getpack() {
    const response = await axios.get(`${url.baseURL}/package`);
    setTitle(response.data.intro.title);
    setDesc(response.data.intro.description);
    setPack(response.data.packages);
  }
  const renderHTML = (rawHTML) =>
    React.createElement("div", {
      dangerouslySetInnerHTML: { __html: rawHTML },
    });
  async function contactus(event) {
    event.preventDefault();
    try {
      const req = {
        fname: fname,
        lname: lname,
        phone: phone,
        email: email,
        packages:packages,
        msg: msg,
      };
      const response = await axios.post(`${url.baseURL}/contact/package`, req);
      Swal.fire({
        title: "Thank you for reaching out!",
        text: "We appreciate your interest & will contact you soon.",
        icon: "success",
        confirmButtonText: "okay",
      });
    } catch (error) {
      Swal.fire({
        title: error.response.data,
        icon: "error",
        confirmButtonText: "okay",
      });
    }
  }

  useEffect(() => {
    getpack();
  });


  
  function onChange(value) {
    console.log("Captcha value:", value);
  }



  return (
    <div>
      <div className=" pt-1">
        <div className="container">
          <h2 className="mb-2 text-center text-capitalize font-weight-bold mt-5 h2-pending">
            {title}
          </h2>
          <p className="text-center mb-5">
           {renderHTML(desc)}
          </p>
          <div className="row">
            {/* <div className="col-lg-4 col-md-6">
              <div className="blog-card-gamma">
                <div className="blog-thumb">
                  <Link>
                    <img src="assets/images/dubai/newone/details1.png" alt="" />
                  </Link>
                  <div className="blog-lavel2 d-grid">
                    <Link className="text-white-light" to="#">
                      From{" "}
                    </Link>
                    <Link className="text-weight-bold" to="">
                      $398
                    </Link>
                  </div>
                </div>

                <div className="media-content">
                  <Link>
                    <h2
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModalToggle"
                      className="text-uppercase"
                    >
                      PRAGUE– VIENNA– BUDAPEST / 8 DAYS
                    </h2>
                  </Link>
                </div>
              </div>
            </div> */}

            {/* <div className="col-lg-4 col-md-6">
              <div className="blog-card-gamma">
                <div className="blog-thumb">
                  <Link>
                    <img src="assets/images/dubai/newone/details6.png" alt="" />
                  </Link>

                  <div className="blog-lavel2 d-grid">
                    <Link className="text-white-light" to="#">
                      From{" "}
                    </Link>
                    <Link className="text-weight-bold" to="">
                      $251
                    </Link>
                  </div>
                </div>

                <div className="media-content">
                  <Link>
                    <h2
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModalToggle"
                      className="text-uppercase"
                    >
                      ARMENIA / 6 DAYS
                    </h2>
                  </Link>
                </div>
              </div>
            </div> */}
            {pack.map((item)=>{
              return[
                <div className="col-lg-4 col-md-6">
                <div className="blog-card-gamma">
                  <div className="blog-thumb">
                    <Link>
                      <img src={url.mediaURL+"/"+item.image} alt=""  data-bs-toggle="modal"
                        data-bs-target={"#exampleModalToggle"+item.id} onClick={()=>{setPackages(item.id)}} />
                    </Link>
  
                    <div className="blog-lavel2 d-grid">
                      <Link className="text-white-light" to="#">
                        From{" "}
                      </Link>
                      <Link className="text-weight-bold" to="">
                        {item.price}
                      </Link>
                    </div>
                  </div>
  
                  <div className="media-content">
                    <Link>
                      <h2
                        data-bs-toggle="modal"
                        data-bs-target={"#exampleModalToggle"+item.id}
                        onClick={()=>{setPackages(item.id)}}
                        className="text-uppercase"
                      >
                        {item.title}
                      </h2>
                    </Link>
                  </div>
                </div>
              </div>,
               <div
               class="modal fade"
               id={"exampleModalToggle"+item.id}
               aria-hidden="true"
               aria-labelledby="exampleModalToggleLabel"
               tabindex="-1"
             >
               <div class="modal-dialog modal-dialog-centered modal-packages ">
                 <div class="modal-content">
                   <div class="modal-body">
                     <form action="#" id="contact_form" onSubmit={contactus}>
                       <button
                         type="button"
                         className="btn-close"
                         data-bs-dismiss="modal"
                         aria-label="Close"
                       ></button>
 
                       <h2 class="m-auto text-center mt-5 mb-2 font-weight-bold" style={{"textTransform":"capitalize"}}>
                         Thank you for choosing this package.
                       </h2>
                       <h5 class="text-center" style={{"textTransform":"capitalize"}}>
                         {" "}
                         we appreciate your trust in us. Kindly fill out the form
                         provided with your details for a smooth and seamless
                         experience.
                       </h5>
                       <div className="row">
                         <div className="col-lg-6">
                           <div className="custom-input-group">
                             <input
                               type="text"
                               onChange={(e) => {
                                 setFname(e.target.value);
                               }}
                               placeholder="First Name"
                               id="fname"
                             />
                           </div>
                         </div>

                         <div className="col-lg-6">
                           <div className="custom-input-group">
                             <input
                               type="text"
                               onChange={(e) => {
                                 setLname(e.target.value);
                               }}
                               placeholder="Last Name"
                               id="lname"
                             />
                           </div>
                         </div>
 
                         <div className="col-lg-6">
                           <div className="custom-input-group">
                             <input
                               type="text"
                               onChange={(e) => {
                                 setEmail(e.target.value);
                               }}
                               placeholder="Your Email"
                               id="email"
                             />
                           </div>
                         </div>

                         <div className="col-lg-6">
                           <div className="custom-input-group">
                             <input
                               type="text"
                               onChange={(e) => {
                                 setPhone(e.target.value);
                               }}
                               placeholder="Your Phone"
                               id="phone"
                             />
                           </div>
                         </div>

                       </div>
                       <div className="custom-input-group comments mb-4">
                         <textarea
                           cols="20"
                           onChange={(e) => {
                             setMsg(e.target.value);
                           }}
                           rows="7"
                           placeholder=" Your Message"
                         ></textarea>
                       </div>
 

                       <ReCAPTCHA
                       sitekey="6LdBWyEkAAAAABGzhkK_QOYUEIeTQRjPlW3Qhm8j"
                       onChange={onChange}
                     />


                       <div className="custom-input-group submit-packages mt-4">
                         <div className="submite-btn">
                           <button
                             type="submit"
                             className="button-fill-primary btn-contact update-btn2 slide mt-1 mb-1"
                           >
                             Submit
                           </button>
                         </div>
                       </div>
                     </form>
                   </div>
                   <div class="modal-footer"></div>
                 </div>
               </div>
             </div>
              ]
            })}
            {/* <div className="col-lg-4 col-md-6">
              <div className="blog-card-gamma">
                <div className="blog-thumb">
                  <Link>
                    <img src="assets/images/dubai/newone/details5.png" alt="" />
                  </Link>

                  <div className="blog-lavel2 d-grid">
                    <Link className="text-white-light" to="#">
                      From{" "}
                    </Link>
                    <Link className="text-weight-bold" to="">
                      $1450
                    </Link>
                  </div>
                </div>

                <div className="media-content">
                  <Link>
                    <h2
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModalToggle"
                      className="text-uppercase"
                    >
                      SPAIN & PORTUGAL / 8 DAYS
                    </h2>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="blog-card-gamma">
                <div className="blog-thumb">
                  <Link>
                    <img src="assets/images/dubai/newone/details2.png" alt="" />
                  </Link>

                  <div className="blog-lavel2 d-grid">
                    <Link className="text-white-light" to="#">
                      From{" "}
                    </Link>
                    <Link className="text-weight-bold" to="">
                      $1660
                    </Link>
                  </div>
                </div>

                <div className="media-content">
                  <Link>
                    <h2
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModalToggle"
                      className="text-uppercase"
                    >
                      SPAIN / 8 DAYS
                    </h2>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="blog-card-gamma">
                <div className="blog-thumb">
                  <Link>
                    <img
                      src="assets/images/dubai/newone/detasils3.png"
                      alt=""
                    />
                  </Link>

                  <div className="blog-lavel2 d-grid">
                    <Link className="text-white-light" to="#">
                      From{" "}
                    </Link>
                    <Link className="text-weight-bold" to="">
                      $470
                    </Link>
                  </div>
                </div>

                <div className="media-content">
                  <Link>
                    <h2
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModalToggle"
                      className="text-uppercase"
                    >
                      BOSNIA & HERZEGOVINA / 8 DAYS
                    </h2>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="blog-card-gamma">
                <div className="blog-thumb">
                  <Link>
                    <img src="assets/images/dubai/newone/details4.png" alt="" />
                  </Link>

                  <div className="blog-lavel2 d-grid">
                    <Link className="text-white-light" to="#">
                      From{" "}
                    </Link>
                    <Link className="text-weight-bold" to="">
                      $251
                    </Link>
                  </div>
                </div>

                <div className="media-content">
                  <Link>
                    <h2
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModalToggle"
                      className="text-uppercase"
                    >
                      AZERBAIJAN / 5 DAYS
                    </h2>
                  </Link>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card2Pend;
