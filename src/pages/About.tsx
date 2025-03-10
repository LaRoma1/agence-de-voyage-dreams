import { motion } from 'framer-motion';
import HeroBackground from '../components/HeroBackground';

const teamMembers = [
  {
    id: 1,
    name: 'Sophie Dupont',
    role: 'Fondatrice & Directrice',
    bio: 'Passionnée de voyages depuis son plus jeune âge, Sophie a visité plus de 70 pays avant de créer cette agence avec une vision claire : offrir des expériences de voyage authentiques et inoubliables.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956'
  },
  {
    id: 2,
    name: 'Thomas Laurent',
    role: 'Responsable des Destinations Asie',
    bio: 'Expert en cultures asiatiques, Thomas a vécu 10 ans entre la Thaïlande, le Japon et l\'Indonésie. Il connaît les moindres recoins de ces destinations et partage sa passion avec nos clients.',
    image: 'https://images.unsplash.com/photo-1600486913747-55e5470d6f40'
  },
  {
    id: 3,
    name: 'Léa Martin',
    role: 'Spécialiste Voyages d\'Aventure',
    bio: 'Ancienne guide de trekking, Léa conçoit des itinéraires d\'exception pour les amateurs de sensations fortes et d\'exploration. Son expertise en voyage d\'aventure est inégalée.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2'
  },
  {
    id: 4,
    name: 'Alexandre Moreau',
    role: 'Conseiller Voyages de Luxe',
    bio: 'Avec son expérience dans l\'hôtellerie de luxe internationale, Alexandre sélectionne les meilleures adresses et expériences exclusives pour nos clients les plus exigeants.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d'
  }
];

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroBackground 
        imageUrl="https://images.unsplash.com/photo-1540541338287-41700207dee6"
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
              À Propos de Nous
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Découvrez notre histoire, nos valeurs et l'équipe qui rendra votre voyage inoubliable
            </p>
          </motion.div>
        </div>
      </HeroBackground>

      {/* Notre Histoire */}
      <motion.section 
        className="py-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-display font-bold text-ocean-blue-800 mb-6">
                Notre Histoire
              </h2>
              <p className="text-gray-600 mb-4">
                Fondée en 2010 par Sophie Dupont, passionnée de voyages et d'aventures, Voyage Dreams est née d'une vision simple : créer des expériences de voyage personnalisées et mémorables qui correspondent parfaitement aux aspirations de chaque voyageur.
              </p>
              <p className="text-gray-600 mb-4">
                Après des années passées à parcourir le monde et à travailler pour de grandes entreprises touristiques, Sophie a décidé de créer sa propre agence avec une approche différente - mettre l'authenticité, la personnalisation et l'expérience client au cœur de chaque voyage.
              </p>
              <p className="text-gray-600">
                Aujourd'hui, notre équipe de passionnés partage cette même vision et s'engage à vous faire vivre des aventures uniques à travers le monde, en prenant soin de chaque détail pour que vous n'ayez qu'à profiter pleinement de votre voyage.
              </p>
            </motion.div>
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1515041219749-89347f83291a" 
                  alt="L'équipe de Voyage Dreams" 
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Nos Valeurs */}
      <section className="py-20 bg-ocean-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold text-ocean-blue-800 text-center mb-16">
            Nos Valeurs
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Authenticité',
                description: 'Nous créons des voyages authentiques qui vous permettent de découvrir la véritable essence des destinations que vous visitez.',
                icon: '🌟'
              },
              {
                title: 'Excellence',
                description: 'Nous ne faisons aucun compromis sur la qualité de nos services et sélectionnons minutieusement chaque partenaire.',
                icon: '✨'
              },
              {
                title: 'Responsabilité',
                description: 'Nous nous engageons à promouvoir un tourisme responsable et respectueux des communautés locales et de l\'environnement.',
                icon: '🌍'
              }
            ].map((value, index) => (
              <motion.div 
                key={index}
                className="bg-white p-8 rounded-xl shadow-md text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-display font-bold text-ocean-blue-800 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Notre Équipe */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold text-ocean-blue-800 text-center mb-16">
            Notre Équipe
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div 
                key={member.id}
                className="bg-white rounded-xl shadow-md overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-display font-bold text-ocean-blue-800 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sand-gold-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-20 bg-ocean-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold text-ocean-blue-800 text-center mb-16">
            Ce que disent nos clients
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "Notre voyage au Japon organisé par cette agence a été simplement parfait. Chaque détail était soigneusement planifié et l'équipe a été réactive tout au long du séjour.",
                author: "Marie et Pierre L.",
                trip: "Circuit au Japon, 2024"
              },
              {
                quote: "Notre lune de miel aux Maldives restera gravée dans nos mémoires pour toujours. Merci pour ce service exceptionnel et ces petites attentions qui ont fait toute la différence !",
                author: "Emma et Julien B.",
                trip: "Lune de miel aux Maldives, 2023"
              },
              {
                quote: "Le circuit aventure au Costa Rica était parfaitement équilibré entre activités sportives, découvertes naturelles et moments de détente. Une expérience incroyable !",
                author: "Thomas D.",
                trip: "Aventure au Costa Rica, 2024"
              }
            ].map((testimonial, index) => (
              <motion.div 
                key={index}
                className="bg-white p-8 rounded-xl shadow-md"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl text-ocean-blue-300 mb-4">"</div>
                <p className="text-gray-700 italic mb-6">
                  {testimonial.quote}
                </p>
                <div>
                  <p className="font-bold text-ocean-blue-800">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-gray-500">
                    {testimonial.trip}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section CTA */}
      <motion.section 
        className="py-16 bg-ocean-blue-900 text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-display font-bold mb-4">
            Prêt à vivre votre propre aventure ?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Contactez notre équipe dès maintenant et commencez à planifier le voyage de vos rêves
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

export default About;
