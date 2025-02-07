import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToMenu = () => {
    if (location.pathname === '/') {
      const menuSection = document.getElementById('menu-section');
      if (menuSection) {
        menuSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.href = '/#menu-section';
    }
  };

  return (
    <nav className={`fixed top-0 w-full p-6 z-50 transition-all duration-300 ${
      scrolled ? 'bg-black/90 backdrop-blur-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-serif font-bold hover:scale-110 transition-transform duration-300">TSB</Link>
        <div className="flex gap-8">
          <button
            onClick={scrollToMenu}
            className="text-white hover:text-blue-200 transition-all duration-300 hover:-translate-y-1"
          >
            Menu
          </button>
          <Link
            to="/about"
            className="text-white hover:text-blue-200 transition-all duration-300 hover:-translate-y-1"
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className="text-white hover:text-blue-200 transition-all duration-300 hover:-translate-y-1"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;