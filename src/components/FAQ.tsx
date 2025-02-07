import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqData: FAQItem[] = [
  {
    category: "Reservations",
    question: "How can I make a reservation?",
    answer: "You can make a reservation through our website's booking form, by calling us at (02) 9755-5568, or by emailing us at info@theshellbar.com. We recommend booking at least a week in advance for weekend dining."
  },
  {
    category: "Reservations",
    question: "What is your cancellation policy?",
    answer: "We kindly request 24 hours notice for cancellations. For groups of 6 or more, we require 48 hours notice. Late cancellations may incur a fee."
  },
  {
    category: "Dining",
    question: "Do you cater to dietary restrictions?",
    answer: "Yes, we accommodate various dietary requirements including gluten-free, dairy-free, and vegetarian options. Please inform us of any allergies or dietary restrictions when making your reservation."
  },
  {
    category: "Dining",
    question: "Is there a dress code?",
    answer: "We maintain a smart casual dress code. While we don't require formal attire, we ask that guests avoid beachwear, sportswear, and flip-flops."
  },
  {
    category: "Hours & Location",
    question: "What are your opening hours?",
    answer: "We're open Tuesday through Sunday. Lunch is served from 11:30 AM to 3:00 PM (4:00 PM on Sundays), and dinner from 5:00 PM to 9:30 PM (10:30 PM on Fridays and Saturdays). We're closed on Mondays."
  },
  {
    category: "Hours & Location",
    question: "Is parking available?",
    answer: "Yes, we offer complimentary parking for our guests in our dedicated lot. Street parking is also available nearby."
  },
  {
    category: "Events & Private Dining",
    question: "Do you host private events?",
    answer: "Yes, we offer private dining options for special occasions and corporate events. Our private dining room can accommodate up to 20 guests. Please contact us for more information about our event packages."
  },
  {
    category: "Events & Private Dining",
    question: "Can you accommodate large groups?",
    answer: "We can accommodate groups of up to 40 people in our main dining area. For groups larger than 8, we recommend making a reservation at least two weeks in advance and may require a set menu."
  },
  {
    category: "Menu & Pricing",
    question: "Do you have a children's menu?",
    answer: "Yes, we offer a special menu for children under 12, featuring smaller portions and kid-friendly options while maintaining our commitment to quality seafood."
  },
  {
    category: "Menu & Pricing",
    question: "Are prices on the menu inclusive of tax?",
    answer: "Yes, all prices listed on our menu include GST. A 10% surcharge applies on public holidays."
  }
];

const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = ["all", ...Array.from(new Set(faqData.map(item => item.category)))];

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const filteredFAQs = faqData.filter(item => 
    activeCategory === "all" || item.category === activeCategory
  );

  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <HelpCircle className="w-16 h-16 mx-auto mb-6 text-blue-900" />
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Find answers to common questions about dining at The Shell Bar
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-blue-900 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-600 hover:bg-blue-50'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {filteredFAQs.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover-lift animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-300"
              >
                <span className="text-lg font-medium text-gray-900">{item.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                    openItems.includes(index) ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openItems.includes(index) ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                  <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Call-to-Action */}
        <div className="mt-16 text-center animate-fade-in">
          <p className="text-gray-600 mb-4">
            Can't find what you're looking for?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-blue-900 text-white px-8 py-3 rounded-full hover:bg-blue-800 transition-colors duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;