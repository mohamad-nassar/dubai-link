import React, { useState } from "react"
import { Link } from "react-router-dom";
import {FaFacebookSquare } from 'react-icons/fa'
import {GrInstagram } from 'react-icons/gr'
import {BsTwitter } from 'react-icons/bs'
import {FaLinkedinIn } from 'react-icons/fa'
import "./Navbar.css";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [showNav, setShowNav] = useState(false);
    const [showHosp, setShowHosp] = useState(false);
    return (
        <div>
    

        <header>

<div className="header-area header-style-three position-fixed w-100">
<div className="container-fluid">
<div className="row">
<div className="col-xxl-2 col-xl-2 col-lg-12 col-md-12 col-sm-12 col-xs-12 align-items-center d-xl-flex d-lg-block">
<div className="nav-logo d-flex justify-content-between align-items-center">
<Link to="/"><img src="/assets/images/dubai/logo.png" alt="logo" /></Link>
<div className="mobile-menu d-flex ">
<div className="d-flex align-items-center">

    <div
    className={`nav-toggle ${isOpen && "open"}`}
    onClick={() => setIsOpen(!isOpen)}
  >
    <div className="bar"></div>
  </div>
</div>
</div>
</div>
</div>
<div className="col-xxl-9 col-xl-9 col-lg-10 col-md-8 col-sm-6 col-xs-6">
    <div className={`nav-items ${isOpen && "open"}`}>
<nav className={`main-nav ${isOpen && "open"}`}>
<div className="inner-logo d-xl-none text-center">
<Link to="#"><img src="/assets/images/dubai/logo.png" alt="" /></Link>
</div>
<ul>
    <li onClick={<scrollToTop />}><Link to="/" onClick={() => setIsOpen(!isOpen)}>Home</Link></li>
    <li onClick={<scrollToTop />}>
        <Link to="/about" onClick={() => setIsOpen(!isOpen)}>About Us</Link>
    </li>
    <li className="has-child-menu">
        <Link  onClick={() =>{if(showNav) setShowNav(false); else setShowNav(true);}}>Travel & Tourism</Link>
        <i onClick={() =>{if(showNav) setShowNav(false); else setShowNav(true);}} className="fl flaticon-plus">{ showNav ? '-':'+' }</i>
        <ul className="sub-menu sub-travel" style={{display: showNav ? 'block' : 'none'}} id="ultravel">
            <h2><Link to="/travel-and-tourism" onClick={() => setIsOpen(!isOpen)}>Travel & Tourism</Link></h2>
            <div className="underline-nav"></div>
            <li onClick={<scrollToTop />}><Link to="/dubai-link-travel-and-tours" onClick={() => setIsOpen(!isOpen)}>Dubai Link Travel & Tours</Link></li>
            <div className="underline-nav"></div>
            <li onClick={<scrollToTop />}><Link className="text-uppercase" to="/gte" onClick={() => setIsOpen(!isOpen)}>GTE</Link></li>
            <div className="underline-nav"></div>
            <li onClick={<scrollToTop />}><Link to="/tripstick" onClick={() => setIsOpen(!isOpen)}>Tripstick</Link></li>
        </ul>
    </li>
    <li className="has-child-menu">
        <Link onClick={() =>{if(showHosp) setShowHosp(false); else setShowHosp(true);}}>Hospitality</Link>
        <i onClick={() =>{if(showHosp) setShowHosp(false); else setShowHosp(true);}}className="fl flaticon-plus">{ showHosp ? '-':'+' }</i>
        <ul className="sub-menu sub-travel" style={{display: showHosp ? 'block' : 'none'}}>

            <li onClick={<scrollToTop />}><Link to="/niu" onClick={() => setIsOpen(!isOpen)}>NIU Hotel</Link></li>
   
        </ul>
    </li>
    <li onClick={<scrollToTop />}><Link className="text-uppercase" to="/sts" onClick={() => setIsOpen(!isOpen)}>STS</Link></li>
    <li onClick={<scrollToTop />}><Link to="/destination" onClick={() => setIsOpen(!isOpen)}>Destination Representation</Link></li>
    <li onClick={<scrollToTop />}><Link to="/royal-lifestyle" onClick={() => setIsOpen(!isOpen)}>Royal Lifestyle</Link></li>
    <li onClick={<scrollToTop />}><Link to="/packages" onClick={() => setIsOpen(!isOpen)}>Packages</Link></li>
    <li onClick={<scrollToTop />}><Link to="/contact" onClick={() => setIsOpen(!isOpen)}>Contact Us</Link></li>
    <li onClick={<scrollToTop />} className="d-block d-xl-none"><Link to="/map" onClick={() => setIsOpen(!isOpen)}>Map</Link></li>
</ul>
<div className="inner-contact-options d-xl-none">
<div className="contact-box-inner">
    
</div>

</div>
</nav>
</div>
</div>
<div className="col-xxl-1 col-xl-1 col-lg-1">
<div className="nav-right d-xl-flex d-none">

<div className="nav-right-icons gap-5">
<div className="header-search search-btn">
    <div id="Group_3792">
        <Link onClick={<scrollToTop />} to="/map">
        <svg className="Path_38408" viewBox="382.451 68.317 23.416 7.593">
            <path id="Path_38408" d="M 405.8671875 71.93608093261719 C 405.8671875 74.56175231933594 399.9773559570312 75.90968322753906 394.1587524414062 75.90968322753906 C 388.3401489257812 75.90968322753906 382.4509887695312 74.56175231933594 382.4509887695312 71.93608093261719 C 382.4509887695312 69.77128601074219 386.2473754882812 68.7427978515625 388.482666015625 68.31700134277344 L 388.7659301757812 69.80674743652344 C 385.1121215820312 70.44597625732422 383.9411010742188 71.51101684570312 383.9411010742188 71.93608093261719 C 383.9411010742188 72.823486328125 387.808349609375 74.45539855957031 394.1587524414062 74.45539855957031 C 400.5094604492188 74.45539855957031 404.3771362304688 72.823486328125 404.3771362304688 71.93608093261719 C 404.3771362304688 71.47483825683594 403.3478393554688 70.48143005371094 399.5518798828125 69.80674743652344 L 399.8004150390625 68.31700134277344 C 403.8091430664062 69.06259155273438 405.8671875 70.26907348632812 405.8671875 71.93608093261719 L 405.8671875 71.93608093261719 Z">
            </path>
        </svg>
        <svg className="Path_38409" viewBox="398.436 24.478 11.85 20.366">
            <path id="Path_38409" d="M 404.3609619140625 24.47800254821777 C 401.0967712402344 24.47800254821777 398.4360046386719 27.13876724243164 398.4360046386719 30.40404319763184 C 398.4360046386719 35.54794692993164 404.3609619140625 44.84381103515625 404.3609619140625 44.84381103515625 C 404.3609619140625 44.84381103515625 410.2859191894531 35.44158935546875 410.2859191894531 30.40404319763184 C 410.2859191894531 27.13876724243164 407.6251525878906 24.47800254821777 404.3609619140625 24.47800254821777 Z M 404.3609619140625 32.3897590637207 C 403.2615966796875 32.3897590637207 402.3741760253906 31.50343704223633 402.3741760253906 30.40404319763184 C 402.3741760253906 29.33901214599609 403.2615966796875 28.45160675048828 404.3609619140625 28.45160675048828 C 405.4256591796875 28.45160675048828 406.3123168945312 29.33901214599609 406.3123168945312 30.40404319763184 C 406.3123168945312 31.50343704223633 405.4256591796875 32.3897590637207 404.3609619140625 32.3897590637207 Z">
            </path>
        </svg>
        </Link>
    </div>
</div>

</div>
</div>
</div>
</div>
</div>
</div>
</header>
        <div
          className={`nav-toggle ${isOpen && "open"}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="bar"></div>
        </div>
   
      </div>


    );
  };

  function openclose(){
    
 };
 
export default Navbar;