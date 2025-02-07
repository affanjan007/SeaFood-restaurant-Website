import React from 'react';
import { Shell, Phone, Clock, MapPin, Mail, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo and About */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Shell className="w-8 h-8" />
              <span className="text-2xl font-serif font-bold">The Shell Bar</span>
            </div>
            <p className="text-gray-400">
              Experience the finest seafood dining by the river, where every dish tells a story of freshness and flavor.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-blue-400" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-blue-400" />
                <span>info@theshellbar.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span>123 Riverside Drive, Seafood City</span>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Opening Hours</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-blue-400" />
                <span>Tuesday - Sunday</span>
              </div>
              <p className="pl-7">Lunch: Tuesday - Saturday, 11:30am - 3pm</p>
              <p className="pl-7">Lunch: Sunday, 11:30am - 4pm</p>
              <p className="pl-7">Dinner: Tuesday - Thursday & Sunday, 5pm - 9:30pm</p>
              <p className="pl-7">Dinner: Friday - Saturday, 5pm - 10:30pm</p>
              <p className="pl-7">Closed: Monday</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} The Shell Bar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;