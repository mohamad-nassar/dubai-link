import axios from 'axios';
import React,{useEffect,useState} from 'react'
import { Link } from "react-router-dom";
import Slider from "react-slick";
import url from '../url';
function CardSts() {
    const settings = {
        infinite: true,
        dots:true,
        autoplay: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
      const [banner,setBanner]=useState({
        first:"",
        second:"",
        third:"",
        mission:"",
        vision:"",
       })
       async function getsts(){
         const response=await axios.get(`${url.baseURL}/sts`);
         setBanner({
        first:response.data.sts.first,
        second:response.data.sts.second,
        third:response.data.sts.third,
        mission:response.data.sts.mission,
        vision:response.data.sts.vision,
         })
       }
       useEffect(()=>{
        getsts()
       },[])
       const renderHTML = (rawHTML) => React.createElement("div", { dangerouslySetInnerHTML: { __html: rawHTML } });
  return (
    <div>
    <div className="container">
    <ul className=" breadcrumbb mt-5">
    <li><Link to="/">Home</Link></li>

    <li>STS</li>
</ul>
</div>
    <div className="container mt-80">
    <div className="blog-wrapper  pb-5">
    <div className="container">

     
          <section className="image-vision-mission">
            <div className="container-fluid">

                <h2 className="text-center mt-1 mb-2 text-capitalize">Shape <span>a</span> Better World</h2>
                <p className="text-center textp mb-5">Being a reliable partner of choice, STS offers a broad spectrum of services for the government  and corporate sectors</p>
<section className="card-number d-none   d-lg-block">
<div className="container">

<div className="row ">
<div className="col-lg-4">
<div className="card card-number-1">
    <div className="card-body">
        <div className="num-card"  style={{backgroundColor:"#03408F"}}><h2>1</h2></div>
      <p className="card-text card-text-sts">{renderHTML(banner.first)}</p>
    </div>
  </div>
</div>
<div className="col-lg-4">
<div className="card card-number-1">
    <div className="card-body">
        <div className="num-card "  style={{backgroundColor: "#773738" }}><h2>2</h2></div>
      <p className="card-text card-text-sts">{renderHTML(banner.second)}</p>

    </div>
  </div>
</div>
<div className="col-lg-4">
<div className="card card-number-1">
    <div className="card-body">
        <div className="num-card " style={{backgroundColor: "#94A249"}}><h2>3</h2></div>
      <p className="card-text card-text-sts">{renderHTML(banner.third)}</p>
    </div>
  </div>
</div>
</div>
</div>
</section>


<section class="mobile-sts d-block d-lg-none">
<div class="row">
<Slider {...settings}>
<div>
<div className="col-12">
<div className="card card-number-1">
    <div className="card-body">
        <div className="num-card"  style={{backgroundColor:"#03408F"}}><h2>1</h2></div>
      <p className="card-text card-text-sts">{renderHTML(banner.first)}</p>
    </div>
  </div>
</div>
</div>


<div>
<div className="col-12">
<div className="card card-number-1">
<div className="card-body">
<div className="num-card "  style={{backgroundColor: "#773738" }}><h2>2</h2></div>
<p className="card-text card-text-sts">{renderHTML(banner.second)}</p>

</div>
  </div>
</div>
</div>

<div>
<div className="col-12">
<div className="card card-number-1">
<div className="card-body">
<div className="num-card" style={{backgroundColor: "#94A249"}}><h2>3</h2></div>
<p className="card-text card-text-sts">{renderHTML(banner.third)}</p>
</div>
  </div>
</div>
</div>





</Slider>
</div>
</section>

</div>
</section>
</div>
<div className="second-sts mt-100 mb-5 d-none d-lg-block d-xl-block ">
<div className="container">
<div className="row d-flex ml-lg-50">
<div className="col-lg-2 d-flex justify-content-center align-items-center">
<div className="line-orange position-relative  ">
    <img  src="assets/images/dubai/Blue strip.png" />
</div>

<div className="line-content line-content-two position-absolute ">
    <h3 className="text-capitalize mission text-center text-white">Mission</h3>
</div>
</div>
<div className="col-lg-4 d-flex justify-content-center align-items-center position-relative">
    <div className="circle-orange d-none d-md-block">
        <img className="img-fluid" src="assets/images/dubai/Green Cirback.png" />
    </div>
    <div className="circle-content position-absolute d-none d-md-block">
        <p>{renderHTML(banner.mission)}</p>
    </div>
    </div>
    <div className="col-lg-2 d-flex justify-content-center align-items-center">
        <div className="line-orange line-orange-one position-relative ">
            <img  src="assets/images/dubai/Orange strip.png" />
        </div>
        
 
        <div className="line-content line-content-one position-absolute ">
            <h3 className="text-capitalize vision text-center text-white">Vision</h3>
        </div>
        
        
        </div>
        <div className="col-lg-4 d-flex justify-content-center align-items-center position-relative">
            <div className="circle-orange d-none d-md-block">
                <img className="img-fluid" src="assets/images/dubai/Orange Cirback.png" />
            </div>

            <div className="circle-content position-absolute d-none d-md-block">
                <p>{renderHTML(banner.vision)}</p>
            </div>
            </div>

</div>
</div>
</div>



<div class="sts-vision-mobile d-block d-lg-none">
<div class="container">
<h2 class="text-capitalize text-center font-weight-bold mt-5">Mission</h2>
<div class="mission-mobile">

<p>To Further develop and improve government corporate and VIP clients'travel services experience using smart travel solutions</p>
</div>

<h2 class="text-capitalize text-center font-weight-bold mt-5">Vision</h2>
<div class="mission-mobile">

<p>Lead by example within the travel industry</p>
</div>


</div>
</div>

<section className="third-sts  d-none d-md-block">
    <div className="image-sts-big">
        <img className="img-fluid" src="assets/images/dubai/infogsts.png" />


    </div>
</section>




<section className="d-block d-md-none mt-80">
<div className="destination-area destination-style-two testimonial-area testimonial-style-three pb-110">
<div className="container-fluid">

<h2 class="text-center mt-1 mb-2 text-capitalize text-font-black values-mobile-title">Values</h2>
<div className="row d-flex ml-lg-50">
    <div className="col-lg-2 d-flex justify-content-center align-items-center">
 
    


</div>
</div>

 <Slider {...settings}>
  <div>

  <div className="destination-card-style-two destination-card-style-two-sts">
      <div className="testimonial-card-beta mx-auto">
   
          <div className="testimonial-card-body">
          <div className="testimonial-info">
          <div className="reviewr-info">
          
          <div className="reviwer-info-cotn">
          <h5 className="reviewer-name text-capitalize text-sts">LEADERSHIP</h5>

          </div>
          </div>
          </div>
          <div className="review-texts">
              <p>
                  We take the initiative to implement smart solutions and set an example in the travel sector to confidently lead. STS starts where others  have finished
              </p>
          </div>
          </div>
          </div>

</div>
   </div>

   <div>
   <div className="destination-card-style-two destination-card-style-two-sts">
            <div className="testimonial-card-beta mx-auto">
            
                <div className="testimonial-card-body">
                <div className="testimonial-info">
                <div className="reviewr-info">
                
                <div className="reviwer-info-cotn">
                <h5 className="reviewer-name text-uppercase text-sts" >EXCELLENCE</h5>
       
           
                </div>
                </div>
                </div>
                <div className="review-texts">
                    <p>
                    The quality and precision in offering the services cannot be compromised. Hence, STS smart travel services shall always be unique and peerless, delivering a sense of excellence to all its clients.
                    
                    </p>
                </div>
                </div>
                </div>
        </div>
      </div>
   

      <div>

      <div className="destination-card-style-two destination-card-style-two-sts">
          <div className="testimonial-card-beta mx-auto">
        
              <div className="testimonial-card-body">
              <div className="testimonial-info">
              <div className="reviewr-info">
              
              <div className="reviwer-info-cotn ">
           
                  <h5 className="reviewer-name text-uppercase text-sts"> CREATIVITY</h5>
 
              </div>
              </div>
              </div>
              <div className="review-texts">
                  <p>
                      Thinking out of the box brings solutions to the table solutions that can ensure continuous improvement of our client's needs. Creativity is always encouraged at STS to go the extra mile which  many competitors may not dare to dread.
                  </p>
              </div>
              </div>
              </div>
  
  </div>
         </div>
      
         <div>
      
         <div className="destination-card-style-two destination-card-style-two-sts">
             <div className="testimonial-card-beta mx-auto">
          
                 <div className="testimonial-card-body">
                 <div className="testimonial-info">
                 <div className="reviewr-info">
                 
                 <div className="reviwer-info-cotn">
                 <h5 className="reviewer-name text-capitalize text-sts" >  RESPONSIBILITY</h5>
     
                 </div>
                 </div>
                 </div>
                 <div className="review-texts">
                     <p>
                     With power comes responsibility. With STS comes the responsibility to excel and satisfy.
                     </p>
                 </div>
                 </div>
                 </div>
       
     </div>
            </div>
         
   
  </Slider>
</div>
</div>

</section>




</div>
</div>

    </div>
  )
}

export default CardSts
