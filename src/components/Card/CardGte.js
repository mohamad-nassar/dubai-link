import axios from 'axios';
import React,{useState,useEffect} from 'react'
import { Link } from "react-router-dom";
import url from '../url';
function CardGte() {
    const [banner,setBanner]=useState({
        title:"",
        description:"",
        values:[],
      })
      async function getgte(){
        const response=await axios.get(`${url.baseURL}/gte`);
        setBanner({
          title:response.data.gte.title,
          description:response.data.gte.description,
          values:response.data.values
        })
      }
      useEffect(()=>{
        getgte()
      },[])
      const renderHTML = (rawHTML) => React.createElement("div", { dangerouslySetInnerHTML: { __html: rawHTML } });
  return (
    <div>
    <div className="container">
    <ul className=" breadcrumbb mt-5">
    <li><Link to="/">Home</Link></li>
<li><Link to="/tourism">Travel & Tourism</Link></li>
    <li>GTE</li>
</ul>
</div>

    <div className="blog-wrapper pb-5">
    <div className="container">
        <h2  className="text-center text-capitalize catalonia mb-2">{banner.title}</h2>
        <p className="text-center textp  mt-4">{renderHTML(banner.description)} 
       </p>
  </div>
  </div>

  <div className="full-width pb-5">
<div className="container mt-features-100">
<h2 className="text-center text-capitalize hr-lines">Top features</h2>
            <div className="row mt-lg-5"   data-aos="fade-up"
            data-aos-duration="3000">


            {banner.values.map((item)=>{
                return[
                    <div className="col-lg-4 col-md-6 col-12">
                    <div className="blog-card-gamma blog-gte ">
                    <div className="blog-thumb blog-thumb2">
                    <Link to="#">
                    <img width="200" src={url.mediaURL+"/"+item.image} alt="" />
                    </Link>      
                    </div>
                    <div className="blog-content blog-content-3">
                    <h4 className="blog-title"><Link to="#">{item.title}</Link></h4>
                    </div>
                    </div>
                    </div>
                ];
            })}

            {/* <div className="col-lg-4 col-md-6 col-12">
                <div className="blog-card-gamma blog-gte ">
                <div className="blog-thumb blog-thumb2 ">
                <Link to="#">
                <img width="200" src="assets/images/dubai/exchange.gif" alt="" />
                </Link>      
                </div>
                <div className="blog-content blog-content-3">
                <h4 className="blog-title"><Link to="#"> Intuitive, fast, and stable<br /> online booking experience</Link></h4>
                </div>
                </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                    <div className="blog-card-gamma blog-gte ">
                    <div className="blog-thumb blog-thumb2">
                    <Link to="#">
                    <img width="200" src="assets/images/dubai/24-hours.gif" alt="" />
                    </Link>      
                    </div>
                    <div className="blog-content blog-content-3">
                    <h4 className="blog-title"><Link to="#"> Customer support<br /> around-the-clock</Link></h4>
                    </div>
                    </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="blog-card-gamma blog-gte ">
                        <div className="blog-thumb blog-thumb2">
                        <Link to="#">
                        <img width="200" src="assets/images/dubai/sales.gif" alt="" />
                        </Link>      
                        </div>
                        <div className="blog-content blog-content-3">
                        <h4 className="blog-title"><Link to="#"> Exclusive rates and offers<br /> for travel agents</Link></h4>
                        </div>
                        </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="blog-card-gamma blog-gte ">
                            <div className="blog-thumb blog-thumb2">
                            <Link to="#">
                            <img width="200" src="assets/images/dubai/credit-card.gif" alt="" />
                            </Link>      
                            </div>
                            <div className="blog-content blog-content-3">
                            <h4 className="blog-title"><Link to="#">Flexible booking<br /> and payment</Link></h4>
                            </div>
                            </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-12">
                            <div className="blog-card-gamma blog-gte ">
                            <div className="blog-thumb blog-thumb2">
                            <Link to="#">
                                <img width="200" src="assets/images/dubai/account.gif" alt="" />
                                </Link>      
                                </div>
                                <div className="blog-content blog-content-3">
                                <h4 className="blog-title"><Link to="#">Account management</Link></h4>
                                </div>
                                </div>
                                </div>
                                 */}
                
      
    </div>
  

<button className="button-fill-primary text-center d-flex justify-content-center m-auto update-btn2 slide mt-5 mb-5">
 <a  className="text-capitalize" href="https://www.gte.travel/login/?returnURL=%2Fdefault.aspx">Visit Website</a></button>
    </div>
</div>


    </div>


  )
}

export default CardGte
