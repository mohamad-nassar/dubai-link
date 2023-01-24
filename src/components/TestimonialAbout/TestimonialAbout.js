import React,{useState,useEffect} from 'react'
import axios from 'axios';
import url from '../url';
import background from '../../assets/banner/banner2.png';
function TestimonialAbout() {
    const renderHTML = (rawHTML) => React.createElement("div", { dangerouslySetInnerHTML: { __html: rawHTML } });
    const [values,setValues]=useState("");
    const [val,setVal]=useState([]);
    async function getvalues()
  {
    const response=await axios.get(`${url.baseURL}/about`);
    setValues(response.data.ours.values);
    setVal(response.data.values);
  }
  useEffect(()=>{
    getvalues();
  },[])
  return (
    <div>
    <div class="testimonial-area testimonial-style-three pb-110"   data-aos="fade-up"
    data-aos-duration="3000">
    <div class="container-fluid">
    <div class="row d-flex justify-content-center align-items-center">
    <div class="col-lg-12 col-sm-12">
    <div class=" section-head-alpha-values text-center">
    <h2 class="text-white text-center text-capitalize ">Our Values</h2>
    <p className='text-white'>{renderHTML(values)}</p>
    </div>
    </div>
  
    </div>



    <div class="card-about about-cards mt-5 ">
        <div class="container-fluid">
            <div class="row justify-content-center">
               
               {val.map((item)=>{
                return[
                    <div class="card card-about-content" style={{width: "220px;"}}>
                    <img src={url.mediaURL+"/"+item.image} class="card-img-top" alt="..." />
                    <div class="card-body text-center">
                        <h5 class="card-title">{item.title}</h5>
                        <p class="card-text">{renderHTML(item.description)}</p>
                    </div>
                </div>
                ];
               })}
                

                {/* <div class="card card-about-content"  style={{width: "220px;"}}>
                    <img src="assets/images/lamp.gif" class="card-img-top" alt="..." />
                    <div class="card-body text-center">
                        <h5 class="card-title">Reliability</h5>
                        <p class="card-text">Our clients’ trust and loyalty are always the ultimate goal.</p>
                    </div>
                </div>
                <div class="card card-about-content"  style={{width: "220px;"}}>
                    <img src="assets/images/shake-hands.gif" class="card-img-top" alt="..." />
                    <div class="card-body text-center">
                        <h5 class="card-title">Diversity</h5>
                        <p class="card-text">Inclusivity and diversity are what make us special.</p>
                    </div>
                </div>
                <div class="card card-about-content"  style={{width: "220px;"}}>
                    <img src="assets/images/one-hand.gif" class="card-img-top" alt="..." />
                    <div class="card-body text-center">
                        <h5 class="card-title">Innovation</h5>
                        <p class="card-text">We introduced new concepts to the industry that help us deliver the best.</p>
                    </div>
                </div>
                <div class="card card-about-content" style={{width: "220px;"}}>
                    <img src="assets/images/eye.gif" class="card-img-top" alt="..." />
                    <div class="card-body text-center">
                        <h5 class="card-title">Enthusiasm</h5>
                        <p class="card-text">Our staff believes in the power of a positive attitude in the workspace.</p>
                    </div>
                </div> */}
            </div>
        </div>
    </div>
















</div> 
    </div>
    </div>
  )
}

export default TestimonialAbout
