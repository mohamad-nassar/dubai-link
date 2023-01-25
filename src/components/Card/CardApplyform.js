import React,{useState,useEffect} from 'react'
import ReCAPTCHA from "react-google-recaptcha";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from 'sweetalert2';
import axios from "axios";
import url from "../url.jsx";
function CardApplyform() {
  const params=useParams();
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const[phone,setPhone]=useState("");
  const[country,setCountry]=useState("");
  const[msg,setMsg]=useState("");
  const [resume,setResume]=useState("");
async function apply(event)
{
event.preventDefault();
try{
  let form=new FormData();
  form.append("career_id",params.id);
  form.append("name",name);
  form.append("email",email);
  form.append("phone",phone);
  form.append("country",country);
  form.append("resume",document.getElementById("filePicker").files[0]);
const response=await axios.post(`${url.baseURL}/apply`,form);
Swal.fire({
  title:'Thank you for applying!',
  text:'We’ll review your application & will be in touch to discuss the next steps.',
  icon:'success',
  confirmButtonText:'okay'
})
}

catch (error) { 
Swal.fire({
  title:error.response.data,
  icon:'error',
  confirmButtonText:'okay'
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

    <li><Link to="/careers">Careers</Link></li>
    <li>Apply Now</li>
</ul>
</div>
    <div className="row mt-5">
 
    <div className="row mt-5">
    <form action="#" id="contact_form"  onSubmit={apply}>
        <div className="contact-form-wrap">
        <h2 class="text-center text-capitalize">Apply Now</h2>
        <div className="row">
        <div className="col-lg-6">
         <div className="custom-input-group">

        <input type="text"  onChange={(e)=>{setName(e.target.value)}} placeholder="Name" id="Name" />
        </div>
        </div>
        <div className="col-lg-6">
        <div className="custom-input-group">
  
        <input type="text" onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email" id="Lst Name" />
        </div>
        </div>
      
 
           <div className="col-lg-6">
            <div className="custom-input-group">
   
           <input type="text" onChange={(e)=>{setPhone(e.target.value)}} placeholder=" Phone Number" id="Phone" />
           </div>
           </div>
           <div className="col-lg-6">
            <div className="custom-input-group">
   
           <input type="text" onChange={(e)=>{setCountry(e.target.value)}} placeholder="Country" id="Positions" />
           </div>
           </div>
        </div>

            <div className="form-group">
            <label htmlFor="filePicker" id="filename" style={{ background:"white", color:"#000" , border:"1px solid #000" , margin:"20px" ,  padding:"5px 10px" }}>
     Upload CV
            </label>
            <input onChange={()=>{document.getElementById("filename").innerHTML=document.getElementById("filePicker").files[0].name}} id="filePicker" style={{visibility:"hidden"}} type={"file"} />
     
            </div>
            <ReCAPTCHA
            sitekey="6LdBWyEkAAAAABGzhkK_QOYUEIeTQRjPlW3Qhm8j"
            onChange={onChange}
          />
            <div className="custom-input-group mt-4">
            <div className="submite-btn">
            <button className="button-fill-primary text-center d-flex justify-content-center m-auto update-btn2 slide mt-2 mb-5">
            <a className="text-capitalize">Submit</a></button>
            </div>
            </div>
        </div>
        </form>  
</div>
</div>
    </div>
  )
}

export default CardApplyform
