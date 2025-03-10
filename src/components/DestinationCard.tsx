import { motion } from 'framer-motion';

interface DestinationCardProps {
  image: string;
  title: string;
  description: string;
  price?: string;
  duration?: string;
  index?: number;
}

const DestinationCard = ({ 
  image = 'https://images.unsplash.com/photo-1682687982107-14492010e05e', 
  title, 
  description, 
  price, 
  duration,
  index = 0 
}: DestinationCardProps) => {
  return (
    <motion.div 
      className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col h-full"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -10, transition: { duration: 0.2 } }}
    >
      <div className="h-64 overflow-hidden">
        <div 
          className="h-full w-full bg-cover bg-center transform hover:scale-110 transition-transform duration-700"
          style={{ backgroundImage: `url(${image})` }}
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-display font-bold text-ocean-blue-800 mb-2">
          {title}
        </h3>
        <p className="text-gray-600 mb-4 flex-grow">
          {description}
        </p>
        {(price || duration) && (
          <div className="mt-auto">
            <div className="flex justify-between items-center mb-4">
              {price && <span className="text-ocean-blue-600 font-semibold">{price}</span>}
              {duration && <span className="text-gray-500">{duration}</span>}
            </div>
            <motion.button 
              className="w-full py-3 bg-sand-gold-500 hover:bg-sand-gold-600 text-ocean-blue-900 rounded-lg font-semibold transition-all"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Découvrir
            </motion.button>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default DestinationCard;
