
import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-neutral-beige overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden border-[1px] border-gold p-4">
              <img 
                src="https://images.unsplash.com/photo-1594465919760-441fe5908ab0?q=80&w=1000" 
                alt="Artist at Work" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-maroon p-8 hidden lg:block">
              <p className="text-gold font-serif text-3xl">10+</p>
              <p className="text-white text-[10px] uppercase tracking-widest">Years of Artistry</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="mb-8">
              <span className="text-gold uppercase tracking-[0.3em] text-xs font-semibold">Our Story</span>
              <div className="w-12 h-[1px] bg-gold mt-2"></div>
            </div>
            <h2 className="text-maroon font-serif text-4xl md:text-5xl mb-8 leading-tight">Defining Luxury Through Precision</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              At JK Beautician, we believe that makeup is not just an application, but an art of storytelling. Every face is a unique canvas, and every stroke is intentional.
            </p>
            <p className="text-gray-600 leading-relaxed mb-10">
              Founded on the principles of elegance and professionalism, we've had the privilege of working with elite brides and renowned celebrities globally. Our mission is to provide an immersive luxury experience that leaves you feeling empowered and radiant.
            </p>
            
            <div className="grid grid-cols-2 gap-8 py-8 border-y border-gold/20">
              <div>
                <h4 className="font-serif text-xl text-maroon mb-1">Bridal Elite</h4>
                <p className="text-xs text-gray-500 uppercase tracking-widest">Global Expertise</p>
              </div>
              <div>
                <h4 className="font-serif text-xl text-maroon mb-1">Certified Pro</h4>
                <p className="text-xs text-gray-500 uppercase tracking-widest">Advanced HD Tech</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
