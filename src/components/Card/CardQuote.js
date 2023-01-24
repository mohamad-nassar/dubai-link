import React,{useState,useEffect} from 'react'
import ReCAPTCHA from "react-google-recaptcha";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from 'sweetalert2';
import axios from "axios";
import url from "../url.jsx";
function CardQuote() {

  const [fname,setFname]=useState("");
  const [lname,setLname]=useState("");
  const [email,setEmail]=useState("");
  const [phone,setPhone]=useState("");  
  const [nadults,setNadults]=useState("");
  const [nchildren,setNchildren]=useState("");
  const[tourdate,setTourdate]=useState("");
  async function getquote(event)
  
  {
    event.preventDefault();
      try {
          const req={fname:fname,
          lname:lname,
          email:email,
        phone:phone,
      nadults:nadults,
      nchildren:nchildren,
      tourdate:tourdate
  };
          const response=await axios.post(`${url.baseURL}/getquote`,req);
          Swal.fire({
              title: 'Thank you for submitting your quote request!',
              text: 'Our team will follow up with you shortly.',
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
    <ul className=" breadcrumbb mt-5 bread-padding-top">
    <li><Link to="/">Home</Link></li>

    <li>Get <span>a</span> Quote </li>
</ul>
</div>
    <div className="contact-wrapper mt-5 ">

    <div className="blog-wrapper  pb-5">
    <div className="container">
    <h2 className="text-capitalize text-center d-block d-md-none">Get <span class="text-small">a</span> Quote</h2>
</div>
</div>
<div className="full-width pb-5">
<div className="container">
        <form action="#" id="contact_form" onSubmit={getquote}>
            <div className="contact-form-wrap">
            <div className="row">
            <div className="col-lg-6">
             <div className="custom-input-group">
    
            <input type="text" onChange={(e)=>{setFname(e.target.value)}} placeholder="Your First name" id="Name" />
            </div>
            </div>
            <div className="col-lg-6">
            <div className="custom-input-group">
      
            <input type="text" onChange={(e)=>{setLname(e.target.value)}} placeholder="Your Last Name" id="Last Name" />
            </div>
            </div>
          
            <div className="col-lg-6">
                <div className="custom-input-group">
       
               <input type="text" onChange={(e)=>{setEmail(e.target.value)}} placeholder="Your Email" id="email" />
               </div>
               </div>
               <div className="col-lg-6">
                <div className="custom-input-group">
       
               <input type="text" onChange={(e)=>{setPhone(e.target.value)}} placeholder="Your Phone Number" id="Email" />
               </div>
               </div>
               <div className="col-lg-6">
                <div className="custom-input-group">
       
               <input type="text" onChange={(e)=>{setNadults(e.target.value)}} placeholder="Number of Adults" id="Phone" />
               </div>
               </div>
               <div className="col-lg-6">
                <div className="custom-input-group">
       
               <input type="text" onChange={(e)=>{setNchildren(e.target.value)}} placeholder="Number of Children " id="Subject" />
               </div>
               </div>


               <div className="col-lg-6 ">
               <div className="d-flex-check-label d-md-flex ">

               <div className="custom-input-group ">
               <input type="text" class="d-none d-md-block" placeholder="Tour Requested Date:" id="Phone"/>
               <input type="text" onChange={(e)=>{setTourdate(e.target.value)}} class="d-block d-md-none " placeholder="Tour Requested Date:(e.g:mm/dd/year)" id="Phone"/>
               </div>
          
        
               <div className="custom-input-group d-none d-md-block ml-1">
               <input onChange={(e)=>{setTourdate(e.target.value)}} type="date" class="date"  />
         
               </div>
               </div>
               </div>

            </div>
            <ReCAPTCHA
            sitekey="6LdBWyEkAAAAABGzhkK_QOYUEIeTQRjPlW3Qhm8j"
            onChange={onChange}
          />
                <div className="custom-input-group mt-4">
                <div className="submite-btn">
                <button className="button-fill-primary text-center d-flex justify-content-center m-auto update-btn2 slide mt-5 mb-5">
                <Link  className="text-capitalize">Send</Link></button>
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

export default CardQuote
