import { motion } from 'framer-motion';

interface ServiceCardProps {
  image: string;
  icon?: string;
  title: string;
  description: string;
  index?: number;
}

const ServiceCard = ({ 
  image = 'https://images.unsplash.com/photo-1682687982107-14492010e05e', 
  icon, 
  title, 
  description, 
  index = 0 
}: ServiceCardProps) => {
  return (
    <motion.div 
      className="bg-white rounded-xl shadow-lg overflow-hidden h-full flex flex-col"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -7, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)', transition: { duration: 0.2 } }}
    >
      <div className="h-48 overflow-hidden relative">
        <div 
          className="h-full w-full bg-cover bg-center transform hover:scale-110 transition-transform duration-700"
          style={{ backgroundImage: `url(${image})` }}
        />
        {icon && (
          <div className="absolute top-4 left-4 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-3xl shadow-lg">
            {icon}
          </div>
        )}
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-display font-bold text-ocean-blue-800 mb-3">
          {title}
        </h3>
        <p className="text-gray-600 flex-grow">
          {description}
        </p>
        <motion.button 
          className="mt-4 py-2 px-4 bg-ocean-blue-600 hover:bg-ocean-blue-700 text-white rounded-lg font-medium transition-all w-full"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          En savoir plus
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
