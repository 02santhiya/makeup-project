
import React from 'react';
import { motion } from 'framer-motion';
import { Service } from '../types';
import { Sparkles, Camera, Heart, Star, Zap } from 'lucide-react';

interface Props {
  services: Service[];
}

const getIcon = (title: string) => {
  if (title.includes('Bridal')) return <Heart className="text-gold" size={32} />;
  if (title.includes('Party')) return <Sparkles className="text-gold" size={32} />;
  if (title.includes('Celebrity')) return <Star className="text-gold" size={32} />;
  if (title.includes('HD')) return <Zap className="text-gold" size={32} />;
  return <Camera className="text-gold" size={32} />;
};

const Services: React.FC<Props> = ({ services }) => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-gold uppercase tracking-[0.3em] text-xs font-semibold">Exquisite Offerings</span>
            <h2 className="text-maroon font-serif text-4xl md:text-6xl mt-4 mb-6">Our Signature Services</h2>
            <div className="w-24 h-[1px] bg-gold mx-auto"></div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-neutral-soft p-10 border border-gold/10 hover:border-gold transition-all duration-300 group flex flex-col items-center text-center shadow-sm"
            >
              <div className="mb-6 transform transition-transform group-hover:scale-110">
                {getIcon(service.title)}
              </div>
              <h3 className="text-maroon font-serif text-2xl mb-4">{service.title}</h3>
              <div className="w-8 h-[1px] bg-gold/30 mb-4 transition-all group-hover:w-16 group-hover:bg-gold"></div>
              <p className="text-gray-500 text-sm leading-relaxed mb-6 italic">
                {service.description}
              </p>
              <div className="mt-auto pt-4">
                 <span className="text-[10px] uppercase tracking-[0.2em] text-gold font-bold">Inquire Now</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
