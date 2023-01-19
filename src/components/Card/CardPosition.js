import React from 'react'
import { Link } from "react-router-dom";
function CardPosition() {
  return (
    <div>
    <div className="container">
    <ul className=" breadcrumbb mt-5">
    <li><Link to="/">Home</Link></li>

    <li>Open Position</li>
</ul>
</div>
    <div className="container mt-80">
    <div className="blog-wrapper pb-5">
    <div className="container">
        <h2 className="text-center text-capitalize">Open Positions</h2>
        <p className="text-center  textp mb-5">Find the perfect position</p>

    </div>
    </div>
    </div>
    </div>
  )
}

export default CardPosition
