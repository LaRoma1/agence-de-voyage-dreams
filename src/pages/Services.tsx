import { motion } from 'framer-motion';
import HeroBackground from '../components/HeroBackground';
import ServiceCard from '../components/ServiceCard';

const Services = () => {
  const services = [
    {
      title: 'Voyages Sur Mesure',
      description: 'Des itinéraires personnalisés créés selon vos envies, votre budget et votre style de voyage.',
      image: 'https://images.unsplash.com/photo-1465310477141-6fb93167a273',
      icon: '✨'
    },
    {
      title: 'Circuits Guidés',
      description: 'Des circuits accompagnés par des guides experts pour découvrir les sites incontournables en petit groupe.',
      image: 'https://images.unsplash.com/photo-1527631746610-bca00a040d60',
      icon: '🧭'
    },
    {
      title: 'Séjours Balnéaires',
      description: 'Des séjours détente dans les plus beaux complexes hôteliers au bord des plages paradisiaques.',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
      icon: '🏝️'
    },
    {
      title: 'Voyages Aventure',
      description: 'Des expéditions excitantes pour les voyageurs en quête de sensations fortes et de défis.',
      image: 'https://images.unsplash.com/photo-1501555088652-021faa106b9b',
      icon: '🚵'
    },
    {
      title: 'Croisières',
      description: 'Des croisières luxueuses pour explorer plusieurs destinations tout en profitant d\'un confort exceptionnel.',
      image: 'https://images.unsplash.com/photo-1548574505-5e239809ee19',
      icon: '🚢'
    },
    {
      title: 'Lunes de Miel',
      description: 'Des voyages romantiques parfaitement orchestrés pour célébrer votre amour dans des cadres idylliques.',
      image: 'https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8',
      icon: '💖'
    }
  ];

  const specialOffers = [
    {
      title: 'Réduction Première Minute',
      description: 'Jusqu\'à 25% de réduction pour les réservations effectuées 6 mois à l\'avance.',
      image: 'https://images.unsplash.com/photo-1526772662000-3f88f10405ff',
      icon: '🕒'
    },
    {
      title: 'Offres Famille',
      description: 'Gratuité pour les enfants de moins de 12 ans sur une sélection de destinations.',
      image: 'https://images.unsplash.com/photo-1540479859555-17af45c78602',
      icon: '👨‍👩‍👧‍👦'
    },
    {
      title: 'Voyages de Groupe',
      description: '10% de réduction pour les groupes de 8 personnes ou plus sur tous nos circuits.',
      image: 'https://images.unsplash.com/photo-1539635278303-d4002c07eae3',
      icon: '👥'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroBackground 
        imageUrl="https://images.unsplash.com/photo-1502003148287-a82ef80a6abc"
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
              Nos Services
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Des prestations de qualité pour des voyages sur mesure et sans souci
            </p>
          </motion.div>
        </div>
      </HeroBackground>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold text-ocean-blue-800 text-center mb-16">
            Ce que nous proposons
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                image={service.image}
                icon={service.icon}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Advantage Section */}
      <section className="py-20 bg-ocean-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold text-ocean-blue-800 text-center mb-16">
            Pourquoi nous choisir
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Expertise Locale',
                description: 'Notre équipe connaît chaque destination dans les moindres détails pour vous garantir des conseils authentiques et pertinents.',
                icon: '🌍'
              },
              {
                title: 'Support 24/7',
                description: 'Un service d\'assistance disponible 24h/24 et 7j/7 pendant votre voyage pour une tranquillité d\'esprit totale.',
                icon: '📱'
              },
              {
                title: 'Prix Compétitifs',
                description: 'Grâce à nos partenariats privilégiés, nous vous proposons les meilleurs tarifs pour un rapport qualité-prix optimal.',
                icon: '💰'
              }
            ].map((advantage, index) => (
              <motion.div 
                key={index}
                className="bg-white p-8 rounded-xl shadow-md text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-5xl mb-4">{advantage.icon}</div>
                <h3 className="text-xl font-display font-bold text-ocean-blue-800 mb-3">
                  {advantage.title}
                </h3>
                <p className="text-gray-600">
                  {advantage.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold text-ocean-blue-800 text-center mb-16">
            Offres Spéciales
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {specialOffers.map((offer, index) => (
              <ServiceCard
                key={offer.title}
                title={offer.title}
                description={offer.description}
                image={offer.image}
                icon={offer.icon}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="py-16 bg-gradient-to-r from-ocean-blue-700 to-ocean-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-display font-bold mb-6">
            Prêt à planifier votre prochain voyage ?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Contactez-nous dès aujourd'hui et nos conseillers experts vous aideront à créer l'expérience de voyage parfaite.
          </p>
          <motion.button 
            className="px-8 py-3 bg-sand-gold-500 hover:bg-sand-gold-600 text-ocean-blue-900 rounded-lg font-semibold transition-all shadow-md hover:shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Nous Contacter
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default Services;
