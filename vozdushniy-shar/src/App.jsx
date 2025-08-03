import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import WellcomeBlock from "./components/WellcomeBlock";
import BurgerMenu from "./components/BurgerMenu";
import AboutFly from "./components/AboutFly.jsx";
import FormatBlock from "./components/FormatBlock";
import GalleryVideo from "./components/GalleryVideo.jsx";
import Gallery from "./components/Gallery.jsx";
import ContactCard from "./components/ContactCard.jsx";
import Map from "./components/Map.jsx";
import Footer from "./components/Footer.jsx";


function App() {
  useEffect(() => {
    const handleClick = (e) => {
      if (e.target.tagName === 'A' && e.target.getAttribute('href')?.startsWith('#')) {
        const id = e.target.getAttribute('href').slice(1);
        const el = document.getElementById(id);
        if (el) {
          e.preventDefault();
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <Router>
      <BurgerMenu />
      <WellcomeBlock />
      <div id="about-fly">
        <AboutFly />
      </div>
      <div id="formatblock">
        <FormatBlock />
      </div>
      <GalleryVideo />
      <Gallery />
      <div id="contact-card">
        <ContactCard />
      </div>
      <Map />
      <Footer />
    </Router>
  )
}

export default App
