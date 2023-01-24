import React,{useState,useEffect} from 'react'
import { Link } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import { toast } from "react-toastify";
import Swal from 'sweetalert2';
import axios from "axios";
import url from "../url.jsx";
function CardContact() {
  const [fname,setFname]=useState("");
  const [lname,setLname]=useState("");
  const [phone,setPhone]=useState("");  
  const [company,setCompany]=useState("");
  const [email,setEmail]=useState("");
  const [affiliation,setAffiliation]=useState("");
  const [msg,setMsg]=useState("");

  async function contactus(event)
  
  {
    event.preventDefault();
      try {
          const req={fname:fname,
          lname:lname,
        phone:phone,
      company:company,
    email:email,
    affiliation:affiliation,
    msg:msg
  };
          const response=await axios.post(`${url.baseURL}/contactus`,req);
          Swal.fire({
              title: 'Thank you for reaching out!',
              text: 'We appreciate your interest & will contact you soon.',
              icon: 'success',
              confirmButtonText: 'okay'
            })
      } catch (error) {
          Swal.fire({
              title: error.response.data,
              icon: 'error',
              confirmButtonText: 'okay'
            })
      }
  }

  function onChange(value) {
    console.log("Captcha value:", value);
  }

  return (
    <div>
    <div className="container">
    <ul className=" breadcrumbb bread-padding-top mt-5">
    <li><Link to="/">Home</Link></li>

    <li>Contact Us</li>
</ul>
</div>
    <div className="contact-wrapper mt-2 ">

    <div className="blog-wrapper pb-2">
    <h2 class="text-capitalize text-center headingpackages d-block d-md-none">Contact Us</h2>
    <div className="container">
    <h2 className="text-capitalize text-center">We’d love <span>to</span> hear <span>from</span> you</h2>
        <p className="text-center textp mb-lg-5">
        We’re ready to answer all of your questions and ease your concerns.
        </p>

</div>
</div>
<div className="full-width pb-5">
<div className="container">
        <form action="#" id="contact_form" onSubmit={contactus}>
            <div className="contact-form-wrap">
            <p class="text-center">Please complete the form below to stay connected and plan your next big adventure with ease.</p>
            <div className="row">
            <div className="col-lg-6">
             <div className="custom-input-group">
    
            <input type="text" onChange={(e)=>{setFname(e.target.value)}} placeholder="Your First Name" id="Name" />
            </div>
            </div>
            <div className="col-lg-6">
            <div className="custom-input-group">
      
            <input type="text" onChange={(e)=>{setLname(e.target.value)}}  placeholder="Your Last Name" id="Last Name" />
            </div>
            </div>
          
            <div className="col-lg-6">
                <div className="custom-input-group">
       
               <input type="text" onChange={(e)=>{setEmail(e.target.value)}}  placeholder="Your Email" id="email" />
               </div>
               </div>
               <div className="col-lg-6">
                <div className="custom-input-group">
       
               <input type="text" onChange={(e)=>{setPhone(e.target.value)}}  placeholder="Your Phone Number" id="Email" />
               </div>
               </div>
               <div className="col-lg-6">
                <div className="custom-input-group">
       
               <input type="text" onChange={(e)=>{setCompany(e.target.value)}}  placeholder="Your Company" id="Phone" />
               </div>
               </div>
               <div className="col-lg-6">
                <div className="custom-input-group">
       
               <input type="text" onChange={(e)=>{setAffiliation(e.target.value)}}  placeholder="Your Affiliation" id="Subject" />
               </div>
               </div>
            </div>
            <div className="custom-input-group mb-5">
                <textarea cols="20" onChange={(e)=>{setMsg(e.target.value)}}  rows="7" placeholder=" Your Message"></textarea>
                </div>
                <ReCAPTCHA
                sitekey="6LfI_B0kAAAAAIHipEa01yuClzSIgSxCdDs9ZXB0"
                onChange={onChange}
              />
                <div className="custom-input-group mt-5">
                <div className="submite-btn">
                <button type="submit" className="button-fill-primary btn-contact update-btn2 slide mt-5 mb-5">
                Submit</button>
                </div>
                </div>
            </div>
            </form>  
    </div>
    </div>
    </div>
</div>
 
  )
}

export default CardContact
