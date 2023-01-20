import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Tour from './pages/Tour';
import Gte from './pages/Gte';
import Tripstick from './pages/Tripstick';
import Niu from './pages/Niu';
import LaCantina from './pages/LaCantina';
import Destination from './pages/Destination';
import Sts from './pages/Sts';
import Royal from './pages/Royal';
import Contact from './pages/Contact';
import Tourism from './pages/Tourism';
import Hospitality from './pages/Hospitality';
import PackagePending from './pages/PackagePending';
import PackageDetails from './pages/PackageDetails';
import Media from './pages/Media';
import Istanbul from './pages/Istanbul';
import Prince from './pages/Prince';
import Join from './pages/Join';
import Position from './pages/Position';
import Accomodation from './pages/Accomodation';
import Clients from './pages/Clients';
import Hotel from './pages/Hotel';
import Packages from './pages/Packages';
import Apply from './pages/Apply';
import Mapp from './pages/Mapp';
import AOS from 'aos';
import {useState, useEffect} from 'react';
import "swiper/css/bundle";
import Room from './pages/Room';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import TabTwo from './pages/TabTwo';
import Tabthree from './pages/Tabthree';
import Tabfour from './pages/Tabfour';
import Tabfive from './pages/Tabfive';
import Tabsix from './pages/Tabsix';
import Princetwo from './pages/Princetwo';
import Princethree from './pages/Princethree';
import Princefour from './pages/Princefour';
import Princefive from './pages/Princefive';
import Princesix from './pages/Princesix';
import Hotelone from './pages/Hotelone';
import Hoteltwo from './pages/Hoteltwo';
import Hotelthree from './pages/Hotelthree';
import Tabazarbijan from './pages/Tabazerbaijan';
import ApplyTwo from './pages/ApplyTwo';
import ApplyThree from './pages/ApplyThree';
import ApplyFour from './pages/ApplyFour';
import ApplyFive from './pages/ApplyFive';
import ApplySix from './pages/ApplySix';
import Quote from './pages/Quote';
import ApplyForm from './pages/ApplyForm';
import Tabspainport from './components/Card/Tabspainport';
import TabSpainPort from './pages/TabSpainPort';
import SiteMap from './pages/SiteMap';
import CardIstanbul from './components/Card/CardIstanbul';
import TourIstanbul from './pages/TourIstanbul';
import { ToastContainer,toast } from "react-toastify";
function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);


  return (
    <div>

    <ToastContainer />
    
      <Navbar />
      
      <Routes>
      
        <Route exact path="/" element={<Home /> } />
        <Route exact path="/about" element={<About /> } />
        <Route exact path="/tour" element={<Tour /> } />
        <Route exact path="/gte" element={<Gte /> } />
        <Route exact path="/tripstick" element={<Tripstick /> } />
        <Route exact path="/niu" element={<Niu /> } />
        <Route exact path="/lacantina" element={<LaCantina /> } />
        <Route exact path="/destination" element={<Destination /> } />
        <Route exact path="/sts" element={<Sts /> } />
        <Route exact path="/royal-lifestyle" element={<Royal /> } />
        <Route exact path="/contact" element={<Contact /> } />
        <Route exact path="/tourism" element={<Tourism /> } />
        <Route exact path="/hospitality" element={<Hospitality /> } />
        <Route exact path="/packages" element={<PackagePending /> } />
        <Route exact path="/package-details" element={<PackageDetails /> } />
        <Route exact path="/media" element={<Media /> } />
        <Route exact path="/istanbul" element={<Istanbul /> } />
        <Route exact path="/map" element={<Mapp /> } />
        <Route exact path="/prince" element={<Prince /> } />
        <Route exact path="/careers" element={<Join /> } />
        <Route exact path="/position" element={<Position /> } />
        <Route exact path="/accomodation" element={<Accomodation /> } />
        <Route exact path="/clients" element={<Clients /> } />
        <Route exact path="/hotel" element={<Hotel /> } />
        <Route exact path="/elysium-taksim-hotel" element={ <Packages /> } />
        <Route exact path="/sales-manager-gte-dubai" element={ <Apply /> } />
        <Route exact path="/sales-specialist-gte-dubai" element={ <ApplyTwo /> } />
        <Route exact path="/senior-business-development-executive-dubai" element={ <ApplyThree /> } />
        <Route exact path="/senior-business-development-executive-dubai" element={ <ApplyFour /> } />
        <Route exact path="/sales-manager-gte-cairo" element={ <ApplyFive /> } />
        <Route exact path="/sales-specialist-gte-cairo" element={ <ApplySix /> } />
        <Route exact path="/apply-now" element={ <ApplyForm /> } />
        <Route exact path="/room" element={ <Room /> } />
        <Route exact path="/privacy" element={ <Privacy /> } />
        <Route exact path="/terms" element={ <Terms /> } />
        <Route exact path="/quote" element={ <Quote /> } />
        <Route exact path="/armenia" element={ <TabTwo /> } />
        <Route exact path="/prague–vienna–budapest" element={ <Tabthree /> } />
        <Route exact path="/spain" element={ <Tabfour /> } />
        <Route exact path="/spain&portugal" element={ <TabSpainPort /> } />
        <Route exact path="/istanbul-cappadocia–istanbul" element={ <Tabfive /> } />
        <Route exact path="/bosnia&herzegovina" element={ <Tabsix /> } />
        <Route exact path="/azerbaijan" element={ <Tabazarbijan />} />
<Route exact path="/sitemap" element={<SiteMap />} />
        <Route exact path="/prince" element={ <Princetwo /> } />  
          <Route exact path="/hagia-sophia" element={ <TourIstanbul /> } />

        <Route exact path="/ephesus-and-virgin-mary's-house" element={ <Princethree /> } />
        <Route exact path="/tour-sapanaca-masukiye-and-kartepe" element={ <Princefour /> } />
        <Route exact path="/troy-tour" element={ <Princefive /> } />
        <Route exact path="/Cappadocia" element={ <Princesix /> } />

    
        <Route exact path="/marmara-hotel" element={ <Hotelone /> } />
        <Route exact path="/cvk-hotel" element={ <Hoteltwo /> } />

      </Routes>   
      <Footer /> 
    </div>
  );
}

export default App;
