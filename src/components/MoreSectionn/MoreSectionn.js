import React from 'react'
import { Link } from "react-router-dom";
import Slider from "react-slick";
import backgroundmobile from '../../assets/banner/banner10.png';
function MoreSectionn() {
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
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 2
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
      const settingss = {
        infinite: true,
        dots:true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
    
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
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
  return (
    <div>
    <div className=" more-update-sectionnn  d-none d-md-block">
    <div className="container-fluid">
    <div className="row d-flex justify-content-center align-items-center gy-5">
     
<div className="row more-rec more-rec-2">
    <div className="col-md-5 mb-5 mb-lg-0"   data-aos="fade-up"
    data-aos-duration="3000">
<h2>Destination Representation</h2>
<p className="text-center mt-4 htdr-sections">Being solely focused on supporting all welcoming destinations, we aim to introduce all travelers to the root of every culture, allowing them to experience and meet people who give every destination its uniqueness and authenticity.  
</p>
<div className="col-md-12 text-lg-center text-center pt-4">
    <button onClick={<scrollToTop />} className="button-fill-primary update-btn2 slide"> <Link to="/destination">Explore</Link></button>
    </div>
    </div>
    <div className="col-md-2 text-center"  data-aos="fade-up"
    data-aos-duration="3000">
        <svg className="Rectangle_627">
            <rect id="Rectangle_627" rx="0" ry="0" x="0" y="0" width="9" height="163">
            </rect>
        </svg>
    </div>
    <div className="col-md-5 mb-5 mb-lg-0"  data-aos="fade-up"
    data-aos-duration="3000">
        <h2>Royal lifestyle</h2>
        <p className="text-center mt-4 htdr-sections">In collaboration with our partner, The Royal Lifestyle, we facilitate a growing international community of golf enthusiasts by offering equipment and services with unmatched results - the players come first.
        </p>
        <div className="col-md-12 text-lg-center text-center pt-4">
            <button onClick={<scrollToTop />} className="button-fill-primary update-btn2 slide"> <Link to="/royal">Explore</Link></button>
            </div>
    </div>
</div>
    </div>
    </div>
    </div>

    <div className="destination-area testimonial-area-mob destination-style-two testimonial-area testimonial-style-three pt-lg-110 pb-lg-110 pt-2 d-block d-md-none" >
   
   
  
   
    <Slider {...settings}>
    <div>
    <div className="destination-card-style-two destination-card-style-two-mobile">
    <div className="testimonial-card-beta mx-auto">

        <div className="testimonial-card-body testimonial-card-body-home">
        <div className="testimonial-info">
        <div className="reviewr-info">
        
        <div className="reviwer-info-cotn">
        <h5 className="reviewer-name reviewer-name-mobile">
         Hospitality
          </h5>
        </div>
        </div>
        </div>
        <div className="review-texts">
        <p className="mobile-p-home">In an industry of constant change, we continue to strive towards ensuring customer-oriented experiences, providing comfortable accommodations, convenient services and fine dining. Our aim is to offer all travelers a home away from home.</p>
        <div className="col-lg-12 text-lg-center text-center pt-4">
           <Link onClick={<scrollToTop />} to="/hospitality"> <button className="button-fill-primary update-btn2 update-btn2-mobile text-capitalize">explore</button></Link>
            </div>
    </div>
        </div>
        </div>
</div>
     </div>
  
     <div>
     <div className="destination-card-style-two destination-card-style-two-mobile">
     <div className="testimonial-card-beta mx-auto">
        
         <div className="testimonial-card-body testimonial-card-body-home">
         <div className="testimonial-info">
         <div className="reviewr-info">
         
         <div className="reviwer-info-cotn">
         <h5 className="reviewer-name reviewer-name-mobile">Travel & Tourism</h5>

   
         </div>
         </div>
         </div>
         <div className="review-texts">
         <p className="mobile-p-home">Not only do our platforms provide remarkable paramount services that help business partners grant their clients an outstanding travel experience, but they also help travelers plan, book and enjoy unforgettable holidays at the best rates.</p>
         <div className="col-lg-12 text-lg-center text-center pt-4">
             <Link onClick={<scrollToTop />} to="/tourism"><button className="button-fill-primary update-btn2 update-btn2-mobile text-capitalize">
                Explore</button></Link>
             </div>   
     </div>
         </div>
         </div>
 </div>

        </div>
     
  
        <div>

        <div className="destination-card-style-two destination-card-style-two-mobile">
        <div className="testimonial-card-beta mx-auto">
       
            <div className="testimonial-card-body testimonial-card-body-home">
            <div className="testimonial-info">
            <div className="reviewr-info">
            
            <div className="reviwer-info-cotn">
            <h5 className="reviewer-name reviewer-name-mobile">Destination Representation</h5>

      
            </div>
            </div>
            </div>
            <div className="review-texts">
            <p className="mobile-p-home">Being solely focused on supporting all welcoming destinations, we aim to introduce all travelers to the root of every culture, allowing them to experience and meet people who give every destination its uniqueness and authenticity.</p>
            <div className="col-lg-12 text-lg-center text-center pt-4">
                <Link onClick={<scrollToTop />} to="/destination"><button className="button-fill-primary update-btn2 update-btn2-mobile text-capitalize">
                    Explore</button></Link>
                </div>    
        </div>
            </div>
            </div>

</div>
           </div>
        
           <div>
           <div className="destination-card-style-two destination-card-style-two-mobile">
           <div className="testimonial-card-beta mx-auto">
         
               <div className="testimonial-card-body testimonial-card-body-home">
               <div className="testimonial-info">
               <div className="reviewr-info">
               
               <div className="reviwer-info-cotn">
               <h5 className="reviewer-name reviewer-name-mobile">Royal Lifestyle</h5>

         
               </div>
               </div>
               </div>
               <div className="review-texts">
               <p  className="mobile-p-home">In collaboration with our partner, The Royal Lifestyle, we facilitate a growing international community of golf enthusiasts by offering equipment and services with unmatched results - the players come first.</p>
               <div className="col-lg-12 text-lg-center text-center pt-4">
                   <Link onClick={<scrollToTop />} to="/royal"> <button className="button-fill-primary update-btn2 update-btn2-mobile text-capitalize">
                       Explore</button></Link>
                   </div>    
           </div>
               </div>
               </div>
       </div>
              </div>
           
     
    </Slider>

    </div>
    </div>
  )
}

export default MoreSectionn
