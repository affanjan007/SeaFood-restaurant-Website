import React from 'react';
import { MapPin, Clock, Phone } from 'lucide-react';

const IntroSection: React.FC = () => {
  return (
    <section id="intro-section" className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Location */}
          <div className="text-center space-y-4">
            <MapPin className="w-8 h-8 text-amber-400 mx-auto" />
            <div className="space-y-2">
              <p>3/56 Rabaul Road</p>
              <p>Georges Hall, NSW 2198</p>
              <p className="text-gray-600">(off Henry Lawson Drive)</p>
            </div>
          </div>

          {/* Hours */}
          <div className="text-center space-y-4">
            <Clock className="w-8 h-8 text-amber-400 mx-auto" />
            <div className="space-y-2">
              <div>
                <p className="font-semibold">Dinner</p>
                <p>Tue-Thur & Sun 5pm - 9:30pm</p>
                <p>Fri-Sat 5pm - 10:30pm</p>
              </div>
              <div className="mt-4">
                <p className="font-semibold">Lunch</p>
                <p>Tuesday - Sat 11:30pm - 3pm</p>
                <p>Sun: 11:30am - 4pm</p>
              </div>
              <p className="text-red-600 font-semibold">CLOSED MONDAY</p>
            </div>
          </div>

          {/* Phone */}
          <div className="text-center space-y-4">
            <Phone className="w-8 h-8 text-amber-400 mx-auto" />
            <p className="text-lg">(02) 9755-5568</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
