
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax-like feel */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=2000" 
          alt="Luxury Makeup" 
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-maroon/60 via-maroon/40 to-maroon/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="text-gold font-serif text-5xl md:text-8xl mb-6 tracking-tight leading-none">
            JK Beautician
          </h1>
          <p className="text-white/90 font-sans text-lg md:text-2xl tracking-[0.2em] uppercase font-light mb-12">
            Luxury Bridal & Celebrity Makeup Artistry
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gold text-maroon px-10 py-4 rounded-none text-sm tracking-widest uppercase font-semibold transition-all hover:bg-gold-light"
            >
              Book Appointment
            </motion.a>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/portfolio"
                className="border border-white/50 text-white px-10 py-4 rounded-none text-sm tracking-widest uppercase hover:bg-white/10 transition-all backdrop-blur-sm"
              >
                View Portfolio
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }} 
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gold/60"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-gold to-transparent mx-auto"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
