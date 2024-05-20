import React from 'react';
import './App.css';
import HeroSection from './Components/HeroSection';
import NavigationBar from './Components/NavigationBar';
import AboutSection from './Components/AboutSection';
import Footer from './Components/Footer';
import Highlights from './Components/Highlights';
import Testimonials from './Components/Testimonials';


function App() {
  return (
    <>
      <NavigationBar />
      <HeroSection />
      <Highlights />
      <Testimonials />
      <AboutSection />
      <Footer />
    </>
  );
}

export default App;
