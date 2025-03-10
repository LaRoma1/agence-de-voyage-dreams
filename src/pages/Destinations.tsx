import { useState } from 'react';
import { motion } from 'framer-motion';
import HeroBackground from '../components/HeroBackground';
import DestinationCard from '../components/DestinationCard';

const Destinations = () => {
  const [filter, setFilter] = useState('all');

  const destinationsList = [
    {
      title: 'Bali, Indonésie',
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4',
      description: 'Plages paradisiaques, temples anciens et culture unique.',
      price: 'À partir de 1200€',
      duration: '10 jours',
      category: 'beach'
    },
    {
      title: 'Santorini, Grèce',
      image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff',
      description: 'Villages blancs pittoresques et couchers de soleil spectaculaires.',
      price: 'À partir de 1500€',
      duration: '7 jours',
      category: 'beach'
    },
    {
      title: 'Kyoto, Japon',
      image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e',
      description: 'Temples séculaires et jardins zen au cœur du Japon traditionnel.',
      price: 'À partir de 1800€',
      duration: '12 jours',
      category: 'culture'
    },
    {
      title: 'Costa Rica',
      image: 'https://images.unsplash.com/photo-1580819074169-9b2f971eb388',
      description: 'Forêts tropicales, volcans actifs et biodiversité exceptionnelle.',
      price: 'À partir de 1400€',
      duration: '9 jours',
      category: 'adventure'
    },
    {
      title: 'Marrakech, Maroc',
      image: 'https://images.unsplash.com/photo-1597212720318-78b3b25c181e',
      description: 'Médinas colorées, souks animés et richesse culturelle.',
      price: 'À partir de 950€',
      duration: '5 jours',
      category: 'culture'
    },
    {
      title: 'Alpes Suisses',
      image: 'https://images.unsplash.com/photo-1491555103944-7c647fd857e6',
      description: 'Paysages alpins majestueux idéaux pour le ski et la randonnée.',
      price: 'À partir de 1300€',
      duration: '8 jours',
      category: 'adventure'
    }
  ];

  const filteredDestinations = filter === 'all' 
    ? destinationsList 
    : destinationsList.filter(dest => dest.category === filter);

  const categories = [
    { id: 'all', name: 'Toutes' },
    { id: 'beach', name: 'Plages & Îles' },
    { id: 'culture', name: 'Culture & Histoire' },
    { id: 'adventure', name: 'Aventure & Nature' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroBackground 
        imageUrl="https://images.unsplash.com/photo-1496737018672-b1a6be2e949c"
        height="h-[60vh]"
      >
        <div className="container mx-auto px-4 h-full flex items-center justify-center">
          <motion.div 
            className="text-center"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
              Nos Destinations
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Explorez notre sélection de destinations de rêve à travers le monde
            </p>
          </motion.div>
        </div>
      </HeroBackground>

      {/* Destinations List Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center mb-12 gap-2">
            {categories.map(category => (
              <motion.button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  filter === category.id
                    ? 'bg-ocean-blue-600 text-white'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.name}
              </motion.button>
            ))}
          </div>

          {/* Destinations Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {filteredDestinations.map((destination, index) => (
              <DestinationCard
                key={destination.title}
                title={destination.title}
                description={destination.description}
                image={destination.image}
                price={destination.price}
                duration={destination.duration}
                index={index}
              />
            ))}
          </motion.div>

          {filteredDestinations.length === 0 && (
            <div className="text-center py-10">
              <h3 className="text-xl text-gray-600">
                Aucune destination trouvée pour cette catégorie.
              </h3>
            </div>
          )}
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="py-16 bg-ocean-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-display font-bold text-ocean-blue-800 mb-6">
            Vous ne trouvez pas votre destination idéale ?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Contactez notre équipe d'experts pour créer un voyage sur mesure répondant parfaitement à vos envies.
          </p>
          <motion.button 
            className="px-8 py-3 bg-sand-gold-500 hover:bg-sand-gold-600 text-ocean-blue-900 rounded-lg font-semibold transition-all shadow-md hover:shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Créer Mon Voyage Sur Mesure
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default Destinations;
