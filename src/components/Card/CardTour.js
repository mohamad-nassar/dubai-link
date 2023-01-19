import axios from 'axios';
import React,{useState,useEffect} from 'react'
import { Link } from "react-router-dom";
import url from '../url';

function CardTour() {
  const renderHTML = (rawHTML) => React.createElement("div", { dangerouslySetInnerHTML: { __html: rawHTML } });
  const [title,setTitle]=useState("");
  const [desc,setDesc]=useState("");
  const [values,setValues]=useState([]);
  async function gettour()
  {
    const response=await axios.get(`${url.baseURL}/tour`);
    setTitle(response.data.tour.title)
    setDesc(response.data.tour.description)
    setValues(response.data.values)
  }
  useEffect(()=>{
    gettour();
  },[])
  return (
    <div>
    <div className="container">
    <ul className=" breadcrumbb mt-5">
    <li><Link to="/">Home</Link></li>
    <li><Link to="/tourism">Travel & Tourism</Link></li>
    <li>Dubai Link Travel & Tours</li>
</ul>
</div>
    <div className="container mt-80">
    <div className="blog-wrapper pb-5">

        <h2 className="text-center text-capitalize">{title}</h2>
        <p className="text-center textp mt-2">{renderHTML(desc)}</p>
        </div>
        </div>
        <div className="full-width pb-5">
<div className="container">
<div className="row justify-content-center">
<h2 className="text-center text-capitalize text-blog-wrapper hr-lines ">Services we do</h2>
<div className="col-lg-12">
            <div className="row mb-2">

            {values.map((item)=>{
              return[
<div className="col-lg-4 col-md-6 col-12">
                <div className="box-tour">
  <div className="img-media">
      <img className="img-fluid mt-3" src={url.mediaURL+"/"+item.image} />
  </div>
  <div className="media-content">
 
      <div className="hover-content mt-4">
      <h5 data-bs-toggle="modal" data-bs-target="#exampleModal">{item.title}</h5>

      <button className="button-fill-primary update-btn2 slide "> <Link data-bs-toggle="modal" data-bs-target={"#exampleModal"+item.id}> <i className="fa fa-long-arrow-right" aria-hidden="true"></i>More Details</Link></button>

      </div>
  </div>
  </div>
  
              </div>,
              <div className="modal fade" id={"exampleModal"+item.id} tabindex="-1" aria-labelledby="exampleModalLabel"
              aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">{item.title}</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                  {renderHTML(item.description)}
                    <div className="content-popup m-auto">
  
       
 <img className="img-fluid d-block mb-3" src="assets/images/dubai/phoneicon.png" />
 <p> <a href={"tel:"+item.contact}>{item.contact}</a></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
              ];
            })}

              {/* <div className="col-lg-4 col-md-6 col-12">
                <div className="box-tour">
  <div className="img-media">
      <img className="img-fluid mt-3" src="assets/images/dubai/plane.png" />
  </div>
  <div className="media-content">
 
      <div className="hover-content mt-4">
      <h5 data-bs-toggle="modal" data-bs-target="#exampleModal">Airbone luxury</h5>

      <button className="button-fill-primary update-btn2 slide "> <Link data-bs-toggle="modal" data-bs-target="#exampleModal"> <i className="fa fa-long-arrow-right" aria-hidden="true"></i>More Details</Link></button>

      </div>
  </div>
  </div>
  
              </div>
              <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
              aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Airbone luxury</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                  Dubai Link provides worldwide superlative private jet charter arrangements. Customers can choose from a wide range of turboprops, helicopters, light jets, and sophisticated business jets, apart from dedicated midsize jets and larger long-range charters. Each facility is perfectly delivered to individuals with nothing but an exceptional level of service, ultimate dedication, and topmost knowledge with total discretion.
                    <div className="content-popup m-auto">
  
       
 <img className="img-fluid d-block mb-3" src="assets/images/dubai/phoneicon.png" />
 <p> <a href="tel:+971 4 448 8111">+971 4 448 8111</a></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="box-tour">
<div className="img-media">

<img  className="img-fluid mt-3" src="assets/images/dubai/pc-typing.png" />
</div>
<div className="media-content">

    <div className="hover-content mt-4">
    <h5 data-bs-toggle="modal" data-bs-target="#exampleModal1">Airline Ticketing</h5>
    <button className="button-fill-primary update-btn2 slide "> <Link data-bs-toggle="modal" data-bs-target="#exampleModal1"> <i className="fa fa-long-arrow-right" aria-hidden="true"></i>More Details</Link></button>

    </div>
</div>
</div>

            </div>
            <div className="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel1"
            aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel1">Airline Ticketing</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                Dubai Link travel & tours offers its thoroughly professional and highly-reliable ticketing services for worldwide destinations, by partnering with an enviable list of trusted airline partners.
                  <div className="content-popup m-auto">
          
         
                  <img className="img-fluid d-block mb-3" src="assets/images/dubai/phoneicon.png" />
                  <p> <a href="tel:+971 4 448 8111">+971 4 448 8111</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="box-tour">
<div className="img-media">

<img  className="img-fluid mt-3" src="assets/images/dubai/event.png" />
</div>
<div className="media-content">

    <div className="hover-content mt-4">
    <h5 data-bs-toggle="modal" data-bs-target="#exampleModal2">Event Organization</h5>
    <button className="button-fill-primary update-btn2 slide "> <Link data-bs-toggle="modal" data-bs-target="#exampleModal2"> <i className="fa fa-long-arrow-right" aria-hidden="true"></i>More Details</Link></button>

    </div>
</div>
</div>

            </div>
            <div className="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel2"
            aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel2">Event Organization</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                Dubai Link provides complete assistance for large corporate requirements or large community events. Our team is ready to help you select the best venue, schedule your events, organize transportation, accommodate delegates, and support the staff and on-site logistics. No matter the complexity and the size of the hosting, Dubai Link has the width and depth of expertise, and experience to make any event a complete success.
                  <div className="content-popup m-auto">
    
 
                  <img className="img-fluid d-block mb-3" src="assets/images/dubai/phoneicon.png" />
                  <p> <a href="tel:+971 4 448 8111">+971 4 448 8111</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="box-tour">
<div className="img-media">

<img className="img-fluid mt-3" src="assets/images/dubai/ground.png" />
</div>
<div className="media-content">

    <div className="hover-content mt-4">
    <h5 data-bs-toggle="modal" data-bs-target="#exampleModal3">Ground Handling Services</h5>
    <button className="button-fill-primary update-btn2 slide "> <Link data-bs-toggle="modal" data-bs-target="#exampleModal12"> <i className="fa fa-long-arrow-right" aria-hidden="true"></i>More Details</Link></button>

    </div>
</div>
</div>

            </div>
            <div className="modal fade" id="exampleModal12" tabindex="-1" aria-labelledby="exampleModalLabel3"
            aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel3">Ground Handling Services</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                From the enthusiastic welcomes at touchdown to the wistful farewells at take-off, we make sure that your clients’ stay in any destination is an enchanting, fulfilling, and completely satisfying experience. We provide complete visa issuance assistance, meet-and-assist services to most airports worldwide, limousine transfers, easy check-in to hotels, and chauffeur-driven transport and much more.
                  <div className="content-popup m-auto">

         
                  <img className="img-fluid d-block mb-3" src="assets/images/dubai/phoneicon.png" />
                  <p> <a href="tel:+971 4 448 8111">+971 4 448 8111</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div> */}


            <div className="col-lg-4 col-md-6 col-12">
              <div className="box-tour">
<div className="img-media">

<img className="img-fluid mt-3" src="assets/images/dubai/acoom.png" />
</div>
<div className="media-content">

    <div className="hover-content mt-4">
    <h5 data-bs-toggle="modal" data-bs-target="#exampleModal4">Accommodation</h5>
    <button onClick={<scrollToTop />}  className="button-fill-primary update-btn2 slide "> <Link to="/accomodation"> <i className="fa fa-long-arrow-right" aria-hidden="true"></i>More Details</Link></button>

    </div>
</div>
</div>

            </div>

            <div className="col-lg-4 col-md-6 col-12">
              <div className="box-tour">
<div className="img-media">

<img className="img-fluid mt-3" src="assets/images/dubai/holiday.png" />
</div>
<div className="media-content">

    <div className="hover-content mt-4">
    <h5>Packages</h5>
    <button onClick={<scrollToTop />}  className="button-fill-primary update-btn2 slide "> <Link to="/packagepending"> <i className="fa fa-long-arrow-right" aria-hidden="true"></i>More Details</Link></button>

    </div>
</div>
</div>

            </div>
    
          </div>
</div>
              </div>
            </div>
      </div>
  

    </div>
  )
}

export default CardTour
