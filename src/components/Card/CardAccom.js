import React from 'react'
import { Link } from "react-router-dom";
function CardAccom() {
  return (
    <div>
    
    <div className="container">
    <ul className=" breadcrumbb mt-5 bread-padding-top">
    <li><Link to="/">Home</Link></li>

    <li><Link to="/dubai-link-travel-and-tours">Dubai Link Travel & Tours</Link></li>
    <li>Accomodation</li>
</ul>
</div>
    <div className="container mt-5">
    <div className="blog-wrapper pb-5">
    <h2 class="text-capitalize text-center headingpackages d-block d-md-none">Accomodation</h2>
    <h2 className="text-center text-capitalize">A legendary welcome, every time</h2>
    <p className="text-center text-justify ">Welcome to Dubai Link Travel & Tours, the place where you’ll find the most comprehensive range of accommodation – online and offline!
    Looking to spend a little more time away on your next adventure? Dubai Link Travel and Tours offers you the widest range of budget-friendly hotels available that allow you to secure the right hotel room for your budget, needs, and preferences every time.
     <br /><br />Our network covers everything from luxury hotels to airport hotels – all at the best rates.
     If you’re looking to book at a luxury hotel, Dubai Link Travel and Tours can provide a wealth of options among top hotel brands such as Hilton, Four Seasons, Marriott and , many more. Not to mention that our extensive range of airport hotels with parking deals are not only carefully selected to save time and stress, but they're also a fantastic value for money!
     <br /><br /> Thanks to our hotel network, we are able also able to bring you incredible hotel deals at a budget, allowing you to enjoy an affordable trip in total comfort.<br /><br />And if you need additional assistance, Dubai Link Travel and Tours Customer Service representatives are available 24 hours a day to help you lift any concern you may have when booking your hotel.
     
    </p>
</div>


<div className="accommodation-btns d-block d-md-flex">



    <button className="button-fill-primary text-center d-flex justify-content-center update-btn2 slide mt-5 mb-5">
    <a  className="text-capitalize" href="https://www.gte.travel/login/?returnURL=%2Fdefault.aspx" >travel agency</a></button>

    <button className="button-fill-primary text-center d-flex justify-content-center  update-btn2 slide mt-5 mb-5">
    <a  className="text-capitalize"  href="https://tripstick.com">individual traveler</a></button>
</div>



</div>

    </div>
  )
}

export default CardAccom
