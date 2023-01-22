import React,{useState,useEffect} from 'react'
import { Link } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import {FaFacebookSquare } from 'react-icons/fa'
import {GrInstagram } from 'react-icons/gr'
import {BsTwitter } from 'react-icons/bs'
import {FaLinkedinIn } from 'react-icons/fa'
import {HiLocationMarker} from 'react-icons/hi'
import {FiMail} from 'react-icons/fi'
import {FiPhoneCall} from 'react-icons/fi'
import CookieConsent, { Cookies } from "react-cookie-consent";
import {HiChatBubbleLeftRight} from 'react-icons/hi2'
import { toast } from "react-toastify";
import Swal from 'sweetalert2';
import axios from "axios";
import url from "../url.jsx";
export default function Footer() {
    const [email,setEmail]=useState("");

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    async function subscribe()

    {
        if(email!=""){
        try {
            const req={email:email};
            const response=await axios.post(`${url.baseURL}/subscribe`,req);
            Swal.fire({
                title: 'Thank you for subscribing to our newsletter!',
                text: 'Check your inbox for special offers & packages.',
                icon: 'success',
                confirmButtonText: 'Done'
              })
        } catch (error) {
            Swal.fire({
                title: error.response.data,
                icon: 'error',
                confirmButtonText: 'Close'
              })
        }
       
        }
        else {
             
        Swal.fire({
            title: 'Please enter your email',
            icon: 'error',
            confirmButtonText: 'okay'
          })
        }
    }

    
    return (
  <div>

    <div className="fixed-img-banner d-flex">
  
    <img class="img-chat"  src="/assets/images/chatthree.png" />
    <img class="chaticon" src="/assets/images/Chaticoncolored.png" />


</div>

    <CookieConsent
    location="bottom"
    buttonText="Acccept Cookies!!"
    cookieName="myAwesomeCookieName2"
    style={{ background: "#2B373B" }}
    buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
    expires={150}
  >
    This website uses cookies to enhance the user experience.{" "}
    <span style={{ fontSize: "10px" }}></span>
  </CookieConsent>

<CookieConsent
  acceptOnScroll={true}
  acceptOnScrollPercentage={50}

>
This website uses cookies to enhance the user experience
</CookieConsent>
  

    <div className="footer-area " >
    <div className="container">
 
    <div className="row">
    
    <div className="banner accommodation-banner-img ">
    <div className="container container-subscribe-banner mt-5">
    <div className="row">
    <div className="col-lg-12 col-12">
        <h2 className="text-center">
        
            <strong className="text-center text-white">Keep <span>in</span> Touch</strong>
        </h2>
        <h6 className="text-white text-center">Subscribe to our newsletter for exclusive deals and endless adventures</h6>
 

        <form className="form-subscribe d-lg-flex" action="#">
            <div className="input-group">
                <input type="text" onChange={(e)=>{setEmail(e.target.value)}} className="form-control input-lg" placeholder="Your email address" />
            </div>
            <button type="button" onClick={subscribe} className="button-fill-primary banner3-btn btn-footer">Subscribe</button>
        </form>
        </div>
    </div>
    </div>
</div></div>
        <div className="row">
            <div className="col-lg-8 col-md-8">
                <div className="row">
                    <div className="col-lg-4 col-12">
                        <div className="footer-about">
                            <div className="footer-logo d-none d-md-block">
                                <a href="/"><img src="/assets/images/dubai/footer-logo.png" alt="logo" /></a>
                            </div>
                  
                 <ul className="social-links d-flex mb-2 mt-5 d-none">
                 <p class="text-white d-flex align-items-center">Follow Us:</p>
                 <li>
                 <a href="" className="facebookk" >
  
                 <FaFacebookSquare  style={{color:"rgb(24, 119, 242);"}} /></a>
                 </li>
                 <li>
                 <a href="" className="instagramm">
                 <GrInstagram  style={{color:"rgb(195, 42, 163);"}} /></a>
                 </li>
                 <li>
                 <a href="" className="twitterr">
                 <BsTwitter  style={{color:"rgb(29, 161, 242);"}} /></a>
                 </li>
                 <li>
                 <a href="" className="linkedinn">
                 <FaLinkedinIn  style={{color:"rgb(24, 119, 242);"}} /></a>
                 </li>
                 </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-6 d-flex justify-content-lg-center">
                        <div className="footer-widget">
                    
                            <div className="footer-links">
                                <ul className="link-list">
                                    <li onClick={<scrollToTop />}><a href="/about">About Us</a></li>
									<li onClick={<scrollToTop />}><a href="/careers">Careers</a></li>
                            
                                    <li  onClick={<scrollToTop />}><a href="/sitemap">Sitemap</a> </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                                            <div className="col-lg-4 col-md-4 col-6 d-flex justify-content-lg-center">
                            <div className="footer-widget">
                        
                                <div className="footer-links">
                                    <ul className="link-list">
                                    <li onClick={() => {
                                        window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}}><a href="/contact">Contact Us</a></li>
                                                                                    <li onClick={<scrollToTop />}><a href="/terms" class="d-none">Terms & Conditions</a></li>
                                                                                    <li onClick={<scrollToTop />}><a href="/privacy">Privacy Policy</a></li>
                                                                               
                                                                            </ul>
                                </div>
                            </div>
                        </div>
                                    </div>
            </div>
                        
            <div className="col-lg-4 col-md-4 col-12">
                <div className="footer-widget">
                <div className="widget contact-widget mb-50">
                  
                <div className="contact-lists">
                    <div className="contact-box">
                        <div className="icon">
                        <a href="tel:+971 4 448 8111">
                  <FiPhoneCall />
                  </a>
                        </div>
                        <div className="desc">
                            <h6 className="title">Phone Number</h6>
                            <a href="tel:+971 4 448 8111">+971 4 448 8111</a>
                        </div>
                    </div>
                    <div className="contact-box">
                        <div className="icon">
                        <a href="mailto://info@dubailink.ae">         
<FiMail />
</a>
                        </div>
                        <div className="desc">
                            <h6 className="title">Email Address</h6>
                            <a href="mailto:info@dubailink.ae">info@dubailink.ae</a>
                        </div>
                    </div>
                    <div className="contact-box last-contact-box">
                        <div className="icon">
                        <a  href="https://goo.gl/maps/GP2SvjwiiEorHDdq6" target="_blank">
      <HiLocationMarker />
      </a>
                        </div>
                        <div className="desc">
                            <h6 className="title">Address</h6>
                            <a  href="https://goo.gl/maps/GP2SvjwiiEorHDdq6" target="_blank">20th Floor, HDS Tower, Cluster F, JLT, P.O. Box 450078 Dubai, UAE</a>
                        </div>
                    </div>
                </div>
            </div>
                                    </div>
            </div>
                        
        </div>


        <button  class="btn scrollup"><Link onClick={<scrollToTop />}><i class="fa-solid fa-angles-up"></i></Link></button>
    </div>
</div>
</div>
  
    )
}
