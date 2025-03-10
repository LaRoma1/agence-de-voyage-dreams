import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import HeroBackground from '../components/HeroBackground';
import DestinationCard from '../components/DestinationCard';

const Home = () => {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [featuredRef, featuredInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const popularDestinations = [
    { 
      title: 'Bali, Indonésie', 
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4',
      description: 'Paradis tropical avec plages de sable fin et culture riche' 
    },
    { 
      title: 'Santorini, Grèce', 
      image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff',
      description: 'Îles enchanteresses avec vues spectaculaires sur la mer Égée' 
    },
    { 
      title: 'Costa Rica', 
      image: 'https://images.unsplash.com/photo-1580819074169-9b2f971eb388',
      description: 'Aventure écologique au cœur d\'une biodiversité exceptionnelle' 
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Section Hero avec parallaxe */}
      <motion.section 
        ref={heroRef}
        initial={{ opacity: 0 }}
        animate={heroInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
      >
        <HeroBackground imageUrl="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1">
          <div className="container mx-auto px-4 h-full flex items-center justify-center">
            <motion.div 
              className="text-center"
              initial={{ y: 100, opacity: 0 }}
              animate={heroInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">
                Explorez l'Extraordinaire
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
                Découvrez des destinations de rêve et créez des souvenirs inoubliables avec notre agence de voyage experte
              </p>
              <motion.button 
                className="px-8 py-4 bg-sand-gold-500 hover:bg-sand-gold-600 text-ocean-blue-900 rounded-lg text-lg font-semibold transition-all shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explorer Nos Destinations
              </motion.button>
            </motion.div>
          </div>
          
          <motion.div 
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <div className="w-8 h-12 border-2 border-white rounded-full flex justify-center items-start p-1">
              <motion.div 
                className="w-1 h-3 bg-white rounded-full"
                animate={{ 
                  y: [0, 10, 0],
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 1.5 
                }}
              />
            </div>
          </motion.div>
        </HeroBackground>
      </motion.section>

      {/* Section Destinations Populaires */}
      <motion.section 
        ref={featuredRef}
        className="py-20 bg-white"
        initial={{ opacity: 0, y: 50 }}
        animate={featuredInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold text-ocean-blue-800 text-center mb-16">
            Destinations Populaires
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularDestinations.map((destination, index) => (
              <DestinationCard
                key={index}
                title={destination.title}
                description={destination.description}
                image={destination.image}
                index={index}
              />
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <motion.button 
              className="px-6 py-3 bg-ocean-blue-600 hover:bg-ocean-blue-700 text-white rounded-lg font-semibold transition-all shadow-md hover:shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Voir Toutes Nos Destinations
            </motion.button>
          </div>
        </div>
      </motion.section>
      
      {/* Section Pourquoi Nous Choisir */}
      <section className="py-20 bg-ocean-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold text-ocean-blue-800 text-center mb-16">
            Pourquoi Nous Choisir
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Expertise Locale',
                description: 'Nos experts connaissent chaque destination comme leur poche',
                icon: '🌍'
              },
              {
                title: 'Service Personnalisé',
                description: 'Nous créons des voyages sur mesure adaptés à vos envies',
                icon: '✨'
              },
              {
                title: 'Support 24/7',
                description: 'Notre équipe est disponible à tout moment pendant votre voyage',
                icon: '🔄'
              }
            ].map((feature, index) => (
              <motion.div 
                key={index}
                className="bg-white p-8 rounded-xl shadow-md text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-display font-bold text-ocean-blue-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Section Call-to-Action */}
      <motion.section 
        className="py-20 bg-gradient-to-r from-ocean-blue-700 to-ocean-blue-900 text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-display font-bold mb-6">
            Prêt à Vivre une Aventure Extraordinaire ?
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10">
            Contactez-nous dès aujourd'hui pour commencer à planifier le voyage de vos rêves
          </p>
          <motion.button 
            className="px-8 py-4 bg-sand-gold-500 hover:bg-sand-gold-600 text-ocean-blue-900 rounded-lg text-lg font-semibold transition-all shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contactez-Nous
          </motion.button>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;
