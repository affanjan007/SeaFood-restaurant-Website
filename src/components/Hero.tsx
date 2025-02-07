import React from 'react';
import { Shell, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToIntro = () => {
    const introSection = document.getElementById('intro-section');
    if (introSection) {
      introSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <div id="hero-section" className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/24405875/pexels-photo-24405875/free-photo-of-hand-of-person-holding-and-eating-shrimps.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Fresh seafood"
          className="w-full h-screen object-cover transition-transform duration-700 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent"></div>
      </div>
      
      <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16 lg:px-24">
        <div className="max-w-3xl animate-fade-in">
          <Shell className="w-16 h-16 mb-6 text-white animate-pulse hover:rotate-180 transition-transform duration-700" />
          <h1 className="text-6xl font-serif font-bold mb-4 text-white animate-slide-left">The Shell Bar</h1>
          <p className="text-2xl mb-8 font-light text-white/90 animate-slide-right">Fresh seafood by the river</p>
        </div>
      </div>

      <div className="absolute bottom-8 left-8">
        <button
          onClick={scrollToIntro}
          className="bg-blue-900 text-white p-3 rounded-full shadow-lg hover:bg-blue-800 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
        >
          <ChevronDown className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default Hero;