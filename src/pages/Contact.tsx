import { motion } from 'framer-motion';
import HeroBackground from '../components/HeroBackground';
import { useState } from 'react';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formState);
    // Ici, on simulerait normalement l'envoi des données à un serveur
    setSubmitted(true);
    // Réinitialiser le formulaire après soumission
    setFormState({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    // Après 3 secondes, réinitialiser l'état de soumission
    setTimeout(() => setSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      title: 'Adresse',
      info: '123 Avenue des Voyages, 75008 Paris, France',
      icon: '📍'
    },
    {
      title: 'Email',
      info: 'contact@voyagedreams.fr',
      icon: '✉️'
    },
    {
      title: 'Téléphone',
      info: '+33 1 23 45 67 89',
      icon: '📞'
    },
    {
      title: 'Horaires',
      info: 'Lun-Ven: 9h-18h | Sam: 10h-16h',
      icon: '🕒'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroBackground 
        imageUrl="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
        height="h-[50vh]"
      >
        <div className="container mx-auto px-4 h-full flex items-center justify-center">
          <motion.div 
            className="text-center"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
              Contactez-Nous
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Notre équipe est à votre disposition pour répondre à toutes vos questions et planifier votre prochain voyage
            </p>
          </motion.div>
        </div>
      </HeroBackground>

      {/* Contact Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-display font-bold text-ocean-blue-800 mb-8">
                Envoyez-nous un Message
              </h2>
              
              {submitted ? (
                <motion.div 
                  className="bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded-lg mb-8"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="font-medium">Merci pour votre message !</p>
                  <p>Nous vous répondrons dans les plus brefs délais.</p>
                </motion.div>
              ) : null}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Nom Complet</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean-blue-500 focus:border-transparent"
                    placeholder="Votre nom"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean-blue-500 focus:border-transparent"
                    placeholder="votre.email@exemple.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Sujet</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean-blue-500 focus:border-transparent"
                  >
                    <option value="">Sélectionnez un sujet</option>
                    <option value="renseignement">Renseignement</option>
                    <option value="reservation">Réservation</option>
                    <option value="devis">Demande de devis</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean-blue-500 focus:border-transparent"
                    placeholder="Votre message..."
                  />
                </div>
                
                <motion.button
                  type="submit"
                  className="px-8 py-3 bg-ocean-blue-600 hover:bg-ocean-blue-700 text-white rounded-lg font-semibold transition-all shadow-md hover:shadow-lg"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Envoyer le Message
                </motion.button>
              </form>
            </motion.div>
            
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-display font-bold text-ocean-blue-800 mb-8">
                Informations de Contact
              </h2>
              
              <div className="space-y-8 mb-12">
                {contactInfo.map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start space-x-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-3xl text-ocean-blue-600">{item.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-1">{item.title}</h3>
                      <p className="text-gray-600">{item.info}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Map */}
              <div className="rounded-lg overflow-hidden shadow-lg h-80 bg-gray-200">
                <div className="w-full h-full bg-ocean-blue-100 flex items-center justify-center">
                  <p className="text-gray-600">Carte de localisation de l'agence (Intégration Google Maps)</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20 bg-ocean-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold text-ocean-blue-800 text-center mb-16">
            Questions Fréquentes
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "Comment puis-je réserver un voyage ?",
                answer: "Vous pouvez réserver un voyage en nous contactant par téléphone, email ou en remplissant notre formulaire de contact. Un conseiller vous recontactera sous 24h pour finaliser votre réservation."
              },
              {
                question: "Quels sont les modes de paiement acceptés ?",
                answer: "Nous acceptons les paiements par carte bancaire, virement bancaire, chèque et espèces pour les acomptes en agence. Pour les réservations en ligne, seules les cartes bancaires sont acceptées."
              },
              {
                question: "Est-ce que vous proposez des assurances voyage ?",
                answer: "Oui, nous proposons différentes formules d'assurances voyage (annulation, rapatriement, bagages, etc.). Nos conseillers vous guideront vers la formule la plus adaptée à votre voyage."
              },
              {
                question: "Puis-je annuler ou modifier ma réservation ?",
                answer: "Les conditions d'annulation et de modification dépendent de chaque prestataire. Nous vous recommandons de souscrire à une assurance annulation pour plus de flexibilité. Contactez-nous dès que possible pour toute modification."
              }
            ].map((faq, index) => (
              <motion.div 
                key={index}
                className="bg-white p-8 rounded-xl shadow-md"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-display font-bold text-ocean-blue-800 mb-4">
                  {faq.question}
                </h3>
                <p className="text-gray-600">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Vous avez d'autres questions ? N'hésitez pas à nous contacter !
            </p>
            <motion.button
              className="px-8 py-3 bg-sand-gold-500 hover:bg-sand-gold-600 text-ocean-blue-900 rounded-lg font-semibold transition-all shadow-md hover:shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contactez Notre Support
            </motion.button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
