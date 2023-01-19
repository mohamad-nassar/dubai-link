import React from 'react'
import { Link } from "react-router-dom";
function CardLacan() {
  return (
    <div>
    <div class="container">
    <ul class=" breadcrumbb mt-5">
    <li><Link to="/">Home</Link></li>

    <li>La Cantina</li>
</ul>
</div>
    <div class="container mt-80">
    <div class="blog-wrapper  pb-5">
    <div class="container">
        <h2 class="text-center text-capitalize">Discover A Taste You’ll Never Forget</h2>
        <p class="text-center textp ">Indulge in some top-notch international menu items for breakfast, lunch, and dinner where you can build relationships and form communities in a special atmosphere and ambience. La Cantina promises nothing but exceptional food, delicious coffees, and cozy vibes. Both dine-in and delivery are available.</p>
   
        <div class="button rounded-1 text-center mt-5">
            <Link to="#" class="text-capitalize visit-web-button mt-3"> Visit Website</Link>
          </div>
        <div class="row mt-120">
        <div class="col-lg-3 col-md-6 col-12">
            <div class="blog-card-gamma">
                <div class="blog-thumb">
                    <Link to="#">
                        <img src="assets/images/dubai/catina.png" alt="" />
                    </Link>
                </div>
                <div class="blog-content">
                    <h4 class="blog-title blog-title-cantina"><Link to="#">Indoor & Outdoor Seating</Link></h4>
                </div>
            </div>
            </div>
            <div class="col-lg-3 col-md-6 col-12">
                <div class="blog-card-gamma">
                <div class="blog-thumb">
                <Link to="#">
                <img src="assets/images/dubai/dinner.png" alt="" />
                </Link>      
                </div>
                <div class="blog-content">
                <h4 class="blog-title blog-title-cantina"><Link to="#">Top notch international menu items</Link></h4>
                </div>
                </div>
                </div>
                <div class="col-lg-3 col-md-6 col-12">
                    <div class="blog-card-gamma">
                        <div class="blog-thumb">
                            <Link to="#">
                                <img src="assets/images/dubai/resto.png" alt="" />
                            </Link>
                        </div>
                        <div class="blog-content">
                            <h4 class="blog-title blog-title-cantina"><Link to="#">Blended design & magnificent lake view</Link></h4>
                        </div>
                    </div>
                    </div>

                    <div class="col-lg-3 col-md-6 col-12">
                        <div class="blog-card-gamma">
                            <div class="blog-thumb">
                                <Link to="#">
                                    <img src="assets/images/dubai/La_cantina_one.png" alt="" />
                                </Link>
                            </div>
                            <div class="blog-content">
                                <h4 class="blog-title blog-title-cantina"><Link to="#">Friendly Staff & Cosy Vibes</Link></h4>
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

export default CardLacan
