import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
function Cardvideo() {
    const videoEl = useRef(null);

    const attemptPlay = () => {
      videoEl &&
        videoEl.current &&
        videoEl.current.play().catch(error => {
          console.error("Error attempting to play", error);
        });
    };
  
    useEffect(() => {
      attemptPlay();
    }, []);
  return (
    <div>
    <div className="video-section2 position-relative">


    <video poster="/images/w3html5.gif"
    style={{ maxWidth: "100%", margin: "0 auto" }}
    playsInline
    loop
    muted
    controls
    alt="All the devices"
    src="assets/images/dubai/dubailinkvideo.mp4" 
    ref={videoEl}
  />

    </div>
    </div>
  )
}

export default Cardvideo
