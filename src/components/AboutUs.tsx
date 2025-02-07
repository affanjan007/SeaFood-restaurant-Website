import React from 'react';
import { Shell, Clock, Award, Users } from 'lucide-react';
import FAQ from './FAQ';

const AboutUs: React.FC = () => {
  const timelineEvents = [
    {
      year: '2020',
      title: 'The Beginning',
      description: 'The Shell Bar opened its doors, bringing fresh seafood to Georges Hall.'
    },
    {
      year: '2021',
      title: 'First Award',
      description: 'Recognized as the Best Seafood Restaurant in Western Sydney.'
    },
    {
      year: '2022',
      title: 'Expansion',
      description: 'Renovated and expanded our dining space to accommodate more guests.'
    },
    {
      year: '2023',
      title: 'Innovation',
      description: 'Launched our signature seafood platters and seasonal menu.'
    },
    {
      year: '2024',
      title: 'Excellence',
      description: 'Awarded Three Hats and recognized for sustainable seafood practices.'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[60vh]">
        <img
          src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Restaurant interior"
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white animate-fade-in">
            <Shell className="w-16 h-16 mx-auto mb-6 hover:rotate-180 transition-transform duration-700" />
            <h1 className="text-5xl font-serif font-bold mb-4 animate-slide-left">Our Story</h1>
            <p className="text-xl font-light animate-slide-right">A journey of flavors since 2020</p>
          </div>
        </div>
      </div>

      {/* About Content */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-fade-in">
            <h2 className="text-4xl font-serif font-bold mb-6">Welcome to The Shell Bar</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Nestled in the heart of Georges Hall, The Shell Bar has been serving the finest seafood 
              since 2020. Our commitment to quality, freshness, and exceptional service has made us 
              a beloved destination for seafood enthusiasts.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Every dish we serve is crafted with care, using the freshest ingredients sourced from 
              local suppliers. Our chefs combine traditional techniques with innovative approaches 
              to create memorable dining experiences.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 animate-fade-in">
            <img
              src="https://images.pexels.com/photos/2532439/pexels-photo-2532439.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Restaurant ambiance"
              className="rounded-lg shadow-lg hover-3d transition-transform duration-300 hover:scale-105"
            />
            <img
              src="https://images.pexels.com/photos/4253320/pexels-photo-4253320.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Chef preparing food"
              className="rounded-lg shadow-lg mt-8 hover-3d transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <h2 className="text-4xl font-serif font-bold text-center mb-12 animate-fade-in">Our Journey</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-900"></div>
            
            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <div
                  key={event.year}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  <div className="w-1/2 px-8">
                    <div
                      className={`bg-white p-6 rounded-lg shadow-lg hover-lift ${
                        index % 2 === 0 ? 'text-right animate-slide-right' : 'text-left animate-slide-left'
                      }`}
                    >
                      <div className="text-2xl font-bold text-blue-900 mb-2">{event.year}</div>
                      <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                      <p className="text-gray-600">{event.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-900 rounded-full transition-transform duration-300 hover:scale-150"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="mb-16">
          <h2 className="text-4xl font-serif font-bold text-center mb-12 animate-fade-in">Experience The Shell Bar</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="aspect-w-16 aspect-h-9 animate-fade-in">
              <img
                src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Restaurant ambiance"
                className="w-full h-[300px] rounded-lg shadow-lg object-cover hover-3d transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="aspect-w-16 aspect-h-9 animate-fade-in">
              <img
                src="https://images.pexels.com/photos/3217156/pexels-photo-3217156.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Behind the scenes"
                className="w-full h-[300px] rounded-lg shadow-lg object-cover hover-3d transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* Photo Gallery */}
        <div className="mb-16">
          <h2 className="text-4xl font-serif font-bold text-center mb-12 animate-fade-in">Our Ambiance</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              'https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=800',
              'https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=800',
              'https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=800',
              'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800',
              'https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&w=800',
              'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800'
            ].map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Restaurant ambiance ${index + 1}`}
                className="w-full h-64 object-cover rounded-lg shadow-lg hover-3d transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              />
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <FAQ />
      </div>
    </div>
  );
};

export default AboutUs;