import React from 'react'
import { Link } from "react-router-dom";
import cantinaBadge from '../../assets/banner/Lacantinalogo.png';
import nuiBadge from '../../assets/banner/nuiblack.png';
function CardHos() {
  return (
    <div>
    <div className="container">
    <ul className=" breadcrumbb mt-5 bread-padding-top">
    <li><Link to="/">Home</Link></li>

    <li>Hospitality</li>
</ul>
</div>
    <div className="container mt-80">
    <div className="blog-wrapper pb-5">
    <h2 class="text-capitalize text-center headingpackages d-block d-md-none">Hospitality</h2>
    <div className="container">
        <h2 className="text-center text-capitalize">Perfect getaways <span>at Your </span> disposal</h2>
        <p className="text-center  textp mb-120 ">Perfect Getaways at Your Disposal
        Beautiful stays, delicious breakfasts,  and a sunny Mediterranean climate make the perfect getaway. As the up-and-coming group of hospitality in Dubai, we believe that customers are our sole focus; which is why we seek to provide the best experiences. If you’re looking for new ways to inspire your next holiday, come in to book your trip away in a comfortable, relaxed atmosphere. As proud pioneers in the hospitality industry, we offer you one of the best attractions to date, NIU Hotel.</p>

    </div>
    </div>
    </div>
    </div>
  )
}

export default CardHos
