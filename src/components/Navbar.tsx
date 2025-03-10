import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { text: 'Accueil', path: '/' },
    { text: 'Destinations', path: '/destinations' },
    { text: 'Services', path: '/services' },
    { text: 'À Propos', path: '/about' },
    { text: 'Contact', path: '/contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Ferme le menu mobile quand on change de page
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <motion.div
              className={`font-display font-bold text-2xl ${
                scrolled ? 'text-ocean-blue-800' : 'text-white'
              }`}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              Voyage Dreams
            </motion.div>
          </Link>

          {/* Navigation Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <Link 
                key={link.path} 
                to={link.path} 
                className={`relative font-medium ${
                  scrolled ? 'text-gray-700' : 'text-white'
                } hover:text-sand-gold-500 transition-colors`}
              >
                <motion.span
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                >
                  {link.text}
                </motion.span>
                {location.pathname === link.path && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-sand-gold-500 mt-1"
                    layoutId="navbar-underline"
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </Link>
            ))}
            <motion.button 
              className="px-4 py-2 bg-sand-gold-500 hover:bg-sand-gold-600 text-ocean-blue-900 rounded-lg font-medium transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Réserver
            </motion.button>
          </div>

          {/* Bouton menu mobile */}
          <button 
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-md focus:outline-none z-20"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          >
            <motion.span 
              className={`block h-0.5 w-6 rounded-full ${isOpen ? 'bg-white' : scrolled ? 'bg-ocean-blue-800' : 'bg-white'} transition-all duration-300`}
              animate={{ 
                rotate: isOpen ? 45 : 0,
                translateY: isOpen ? 2 : 0
              }}
            />
            <motion.span 
              className={`block h-0.5 w-6 rounded-full ${isOpen ? 'bg-white' : scrolled ? 'bg-ocean-blue-800' : 'bg-white'} my-1 transition-all duration-300`}
              animate={{ 
                opacity: isOpen ? 0 : 1
              }}
            />
            <motion.span 
              className={`block h-0.5 w-6 rounded-full ${isOpen ? 'bg-white' : scrolled ? 'bg-ocean-blue-800' : 'bg-white'} transition-all duration-300`}
              animate={{ 
                rotate: isOpen ? -45 : 0,
                translateY: isOpen ? -2 : 0
              }}
            />
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="md:hidden fixed inset-0 bg-ocean-blue-900/95 backdrop-blur-sm z-10 pt-20"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 py-8">
              <div className="flex flex-col space-y-6 items-center">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <Link 
                      to={link.path} 
                      className="text-white text-2xl font-medium hover:text-sand-gold-500 transition-colors"
                    >
                      {link.text}
                    </Link>
                  </motion.div>
                ))}
                <motion.button 
                  className="mt-4 px-6 py-3 bg-sand-gold-500 hover:bg-sand-gold-600 text-ocean-blue-900 rounded-lg font-medium text-lg transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  Réserver
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
