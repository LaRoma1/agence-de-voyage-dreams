import { motion } from 'framer-motion';

interface HeroBackgroundProps {
  imageUrl?: string;
  overlay?: boolean;
  children?: React.ReactNode;
  height?: string;
}

const HeroBackground = ({ 
  imageUrl = 'https://images.unsplash.com/photo-1682687982107-14492010e05e', 
  overlay = true, 
  children,
  height = 'h-screen'
}: HeroBackgroundProps) => {
  return (
    <div className={`relative ${height} overflow-hidden`}>
      {/* Image de fond avec parallaxe */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10 }}
      />
      
      {/* Overlay pour améliorer la lisibilité du texte */}
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-b from-ocean-blue-900/30 to-ocean-blue-900/80 z-10"></div>
      )}
      
      {/* Contenu */}
      <div className="relative z-20 h-full">
        {children}
      </div>
    </div>
  );
};

export default HeroBackground;
