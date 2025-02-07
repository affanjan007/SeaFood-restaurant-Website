import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import IntroSection from './components/IntroSection';
import MenuSection from './components/MenuSection';
import DiningExperience from './components/DiningExperience';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <div className="page-transition">
              <Hero />
              <IntroSection />
              <MenuSection />
              <DiningExperience />
              <Footer />
            </div>
          } />
          <Route path="/about" element={
            <div className="page-transition">
              <AboutUs />
              <Footer />
            </div>
          } />
          <Route path="/contact" element={
            <div className="page-transition">
              <Contact />
              <Footer />
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;