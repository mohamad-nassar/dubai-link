import axios from 'axios';
import React,{useState,useEffect} from 'react'
import { Link } from "react-router-dom";
import url from '../url';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

function CardTour() {
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
      setIsOpen(!isOpen);
    }

    const closeLogin = () => {
      setIsOpen(false);
    };


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
    <li><Link to="/travel-and-tourism">Travel & Tourism</Link></li>
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
              {isOpen && <div className="overlay"></div>}
              <h5 onClick={togglePopup} className="rounded-1 bg-white login-red px-4">{item.title}</h5>
              <button onClick={togglePopup} className="button-fill-primary update-btn2 slide "> <Link data-bs-toggle="modal" data-bs-target={"#exampleModal"+item.id}> <i className="fa fa-long-arrow-right" aria-hidden="true"></i>More Details</Link></button>

              {isOpen && (
                <div className="popup-card">
                  <FontAwesomeIcon icon={faTimes} className="close-icon" onClick={closeLogin} />
                  <h5 className="modal-title">{item.title}</h5>
     
                  {renderHTML(item.description)}
                  <div className="content-popup m-auto">

     
<img className="img-fluid d-block mb-3" src="assets/images/dubai/phoneicon.png" />
<p> <a href={"tel:"+item.contact}>{item.contact}</a></p>
                  </div>
                </div>
                 )}


                 </div>
                 </div>
                 </div>
                 
                             </div>
              ];
            })}

         



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
    <button onClick={<scrollToTop />}  className="button-fill-primary update-btn2 slide "> <Link to="/packages"> <i className="fa fa-long-arrow-right" aria-hidden="true"></i>More Details</Link></button>

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
