import React, { useState } from 'react';
import BookingForm from './BookingForm';
import { ChevronUp } from 'lucide-react'; // Import the ChevronUp icon

const DiningExperience: React.FC = () => {
  const [showBookingForm, setShowBookingForm] = useState(false);

  const scrollToTop = () => {
    const heroSection = document.getElementById('hero-section'); // Target the Hero section by id
    if (heroSection) {
      heroSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <>
      <section className="bg-gray-50 py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <img
                src="https://images.pexels.com/photos/26756784/pexels-photo-26756784/free-photo-of-elegant-brunette-with-glass-of-white-wine-and-seafood-on-plate.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Elegant dining experience"
                className="w-full h-[600px] object-cover rounded-lg shadow-xl"
              />
            </div>
            <div className="w-full md:w-1/2 space-y-6">
              <h2 className="text-4xl font-serif font-bold text-gray-900">Experience Fine Dining</h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Indulge in an unforgettable dining experience at The Shell Bar. Our carefully curated menu, 
                paired with an extensive wine selection, creates the perfect atmosphere for any occasion.
              </p>
              <p className="text-xl text-gray-600 leading-relaxed">
                Whether it's an intimate dinner for two or a celebration with friends, our attentive staff 
                ensures every visit is memorable.
              </p>
              <button 
                onClick={() => setShowBookingForm(true)}
                className="bg-blue-900 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-800 transition-colors duration-300"
              >
                Make a Booking
              </button>
            </div>
          </div>
        </div>
      </section>

      {showBookingForm && <BookingForm onClose={() => setShowBookingForm(false)} />}

      {/* Scroll Up Icon */}
      <div className="fixed bottom-8 right-8">
        <button
          onClick={scrollToTop}
          className="bg-blue-900 text-white p-3 rounded-full shadow-lg hover:bg-blue-800 transition-all duration-300"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      </div>
    </>
  );
};

export default DiningExperience;