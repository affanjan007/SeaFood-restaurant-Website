import React from 'react';
import { ChefHat, Shell } from 'lucide-react';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  category: 'Starters' | 'Main Course' | 'Desserts' | 'Drinks';
  isChefSpecial?: boolean;
}

const menuItems: MenuItem[] = [
  // Starters
  {
    id: 1,
    name: "Fresh Oysters",
    description: "Half dozen fresh local oysters served with mignonette sauce and lemon",
    price: "$24",
    image: "https://media.istockphoto.com/id/508810696/photo/oysters-on-the-ice-and-lemon.webp?a=1&b=1&s=612x612&w=0&k=20&c=lrYxR2szpra3FKdCfSVaYz9wwI-2aUbQN_0fTQlmLC0=",
    category: "Starters"
  },
  {
    id: 2,
    name: "Seafood Chowder",
    description: "Creamy soup with fresh fish, prawns, and vegetables",
    price: "$16",
    image: "https://images.unsplash.com/photo-1594756202469-9ff9799b2e4e?auto=format&fit=crop&w=800&q=80",
    category: "Starters",
    isChefSpecial: true
  },
  {
    id: 3,
    name: "Calamari Fritti",
    description: "Crispy fried calamari with garlic aioli and lemon",
    price: "$18",
    image: "https://plus.unsplash.com/premium_photo-1689596509991-fd47c16f3e7a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fENhbGFtYXJpJTIwRnJpdHRpfGVufDB8fDB8fHww",
    category: "Starters"
  },
  // Main Course
  {
    id: 4,
    name: "Grilled Atlantic Salmon",
    description: "Wild-caught salmon with citrus glaze, served with seasonal vegetables",
    price: "$32",
    image: "https://images.unsplash.com/photo-1485921325833-c519f76c4927?auto=format&fit=crop&w=800&q=80",
    category: "Main Course",
    isChefSpecial: true
  },
  {
    id: 5,
    name: "Seafood Linguine",
    description: "Fresh pasta tossed with prawns, mussels, and calamari in white wine sauce",
    price: "$28",
    image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&w=800&q=80",
    category: "Main Course"
  },
  {
    id: 6,
    name: "Lobster Thermidor",
    description: "Half lobster gratinated with brandy cream sauce and Gruyère cheese",
    price: "$40",
    image: "https://plus.unsplash.com/premium_photo-1719611418448-d77d769e8ede?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bG9ic3RlciUyMHRoZXJtaWRvcnxlbnwwfHwwfHx8MA%3D%3D",
    category: "Main Course",
    isChefSpecial: true
  },
  // Drinks
  {
    id: 7,
    name: "Signature Seafood Martini",
    description: "A refreshing blend of premium seafood, citrus zest, and a hint of spice served martini-style",
    price: "$14",
    image: "https://images.unsplash.com/photo-1601924381523-019b78541b95?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U2lnbmF0dXJlJTIwU2VhZm9vZCUyME1hcnRpbml8ZW58MHx8MHx8fDA%3D",
    category: "Drinks"
  },
  {
    id: 8,
    name: "Coastal Spritz",
    description: "Prosecco, Aperol, soda water, orange slice",
    price: "$16",
    image: "https://images.unsplash.com/photo-1560512823-829485b8bf24?auto=format&fit=crop&w=800&q=80",
    category: "Drinks"
  },
  {
    id: 9,
    name: "Ocean Breeze Mocktail",
    description: "Blue curacao syrup, coconut water, lime juice, mint",
    price: "$12",
    image: "https://images.unsplash.com/photo-1546171753-97d7676e4602?auto=format&fit=crop&w=800&q=80",
    category: "Drinks"
  },
  // Desserts
  {
    id: 10,
    name: "Crème Brûlée",
    description: "Classic French vanilla custard with caramelized sugar top",
    price: "$12",
    image: "https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?auto=format&fit=crop&w=800&q=80",
    category: "Desserts"
  },
  {
    id: 11,
    name: "Dark Chocolate Mousse",
    description: "Rich chocolate mousse with fresh berries and mint",
    price: "$15",
    image: "https://media.istockphoto.com/id/535412577/photo/homemade-dark-chocolate-mousse.webp?a=1&b=1&s=612x612&w=0&k=20&c=YbvT2iPY-ckm_pBMlcQ58oKuQytMqnk0tl2FXAaBMq4=",
    category: "Desserts",
    isChefSpecial: true
  }
];

const MenuSection: React.FC = () => {
  const categories = ['Starters', 'Main Course', 'Drinks', 'Desserts'] as const;

  return (
    <section id="menu-section" className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <Shell className="w-12 h-12 mx-auto mb-4 text-blue-900 hover:rotate-180 transition-transform duration-700" />
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">Our Menu</h2>
          <div className="w-24 h-1 bg-blue-900 mx-auto"></div>
        </div>

        {categories.map((category) => (
          <div key={category} className="mb-20 animate-fade-in">
            <h3 className="text-3xl font-serif font-bold text-gray-900 mb-12 text-center">{category}</h3>
            <div className="space-y-20">
              {menuItems
                .filter((item) => item.category === category)
                .map((item, index) => (
                  <div
                    key={item.id}
                    className={`flex flex-col md:flex-row items-center gap-8 group hover-lift ${
                      index % 2 === 1 ? 'md:flex-row-reverse' : ''
                    }`}
                  >
                    <div className="w-full md:w-1/2 relative overflow-hidden rounded-lg shadow-lg hover-3d">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-[300px] object-cover transform transition-all duration-500 group-hover:scale-110"
                      />
                      {item.isChefSpecial && (
                        <div className="absolute top-4 right-4 bg-blue-900 text-white px-4 py-2 rounded-full flex items-center gap-2 animate-scale-in">
                          <ChefHat className="w-4 h-4" />
                          <span className="text-sm font-medium">Chef's Special</span>
                        </div>
                      )}
                    </div>

                    <div className="w-full md:w-1/2 space-y-4">
                      <h4 className="text-3xl font-serif font-bold text-gray-900 transition-colors duration-300 group-hover:text-blue-900">{item.name}</h4>
                      <p className="text-gray-600 text-lg leading-relaxed">{item.description}</p>
                      <div className="flex items-center gap-4">
                        <span className="text-2xl font-bold text-blue-900 transition-transform duration-300 group-hover:scale-110">{item.price}</span>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MenuSection;