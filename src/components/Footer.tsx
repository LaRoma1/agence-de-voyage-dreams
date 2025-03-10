import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-ocean-blue-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo et Description */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <h2 className="font-display font-bold text-2xl text-white">Voyage Dreams</h2>
            </Link>
            <p className="text-gray-300 mb-6">
              Découvrez des expériences de voyage uniques et créez des souvenirs inoubliables avec notre agence de voyage experte.
            </p>
            <div className="flex space-x-4">
              {['facebook', 'instagram', 'twitter', 'pinterest'].map((social) => (
                <motion.a 
                  key={social}
                  href={`https://${social}.com`}
                  className="w-10 h-10 bg-ocean-blue-800 hover:bg-sand-gold-500 rounded-full flex items-center justify-center text-white hover:text-ocean-blue-900 transition-all"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">{social}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Liens Rapides */}
          <div>
            <h3 className="text-lg font-display font-bold mb-4 text-sand-gold-300">
              Liens Rapides
            </h3>
            <ul className="space-y-2">
              {[
                { text: 'Accueil', path: '/' },
                { text: 'Destinations', path: '/destinations' },
                { text: 'Services', path: '/services' },
                { text: 'À Propos', path: '/about' },
                { text: 'Contact', path: '/contact' },
                { text: 'Blog', path: '/blog' }
              ].map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="text-gray-300 hover:text-sand-gold-300 transition-colors"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations Populaires */}
          <div>
            <h3 className="text-lg font-display font-bold mb-4 text-sand-gold-300">
              Destinations Populaires
            </h3>
            <ul className="space-y-2">
              {[
                'Bali, Indonésie',
                'Santorini, Grèce',
                'Costa Rica',
                'Kyoto, Japon',
                'Marrakech, Maroc',
                'Machu Picchu, Pérou'
              ].map((destination) => (
                <li key={destination}>
                  <a 
                    href="#" 
                    className="text-gray-300 hover:text-sand-gold-300 transition-colors"
                  >
                    {destination}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact et Newsletter */}
          <div>
            <h3 className="text-lg font-display font-bold mb-4 text-sand-gold-300">
              Restez Informé
            </h3>
            <p className="text-gray-300 mb-4">
              Abonnez-vous à notre newsletter pour recevoir nos offres spéciales et conseils de voyage.
            </p>
            <form className="mb-4">
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Votre email" 
                  className="px-4 py-2 rounded-l-lg w-full focus:outline-none text-gray-900" 
                />
                <motion.button 
                  type="submit" 
                  className="bg-sand-gold-500 hover:bg-sand-gold-600 text-ocean-blue-900 font-medium px-4 py-2 rounded-r-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  OK
                </motion.button>
              </div>
            </form>
            <div className="text-gray-300">
              <p className="flex items-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-sand-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +33 (0)1 23 45 67 89
              </p>
              <p className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-sand-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                contact@voyage-dreams.com
              </p>
            </div>
          </div>
        </div>

        {/* Séparateur */}
        <div className="border-t border-ocean-blue-800 my-8"></div>

        {/* Copyright et Mentions Légales */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Voyage Dreams. Tous droits réservés.</p>
          <div className="mt-4 md:mt-0 space-x-4">
            <a href="#" className="hover:text-sand-gold-300 transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-sand-gold-300 transition-colors">Politique de confidentialité</a>
            <a href="#" className="hover:text-sand-gold-300 transition-colors">CGV</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
