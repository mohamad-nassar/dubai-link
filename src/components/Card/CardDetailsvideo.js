import React from 'react'
import { Link } from "react-router-dom";
import background from '../../assets/banner/video-details.png';
function CardDetailsvideo() {
  return (
    <div>
    <section className="video-image"  style={{ backgroundImage: `url(${background})` }}>
    <div className="video-backg">
    <h2 className="text-capitalize">DISCOVER ISTANBUL</h2>
    <img src="assets/images/dubai/newone/Play.svg" className="play-btn" data-bs-toggle="modal" data-bs-target="#exampleModal" />
    </div>
    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
    aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div className="modal-content modal-content-video">
    
        <div className="modal-body">
    <video src="assets/images/dubai/newone/videoplayback.mp4" type="video/mp4" controls>
    
    </video>
        </div>
    
      </div>
    </div>
    </div>
    </section>
    </div>
  )
}

export default CardDetailsvideo
