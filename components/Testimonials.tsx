
import React from 'react';
import { motion } from 'framer-motion';
import { Testimonial } from '../types';
import { Quote } from 'lucide-react';

interface Props {
  testimonials: Testimonial[];
}

const Testimonials: React.FC<Props> = ({ testimonials }) => {
  return (
    <section className="py-24 bg-maroon relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/5 rounded-full -ml-32 -mb-32"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-gold uppercase tracking-[0.3em] text-xs font-semibold">Client Love</span>
          <h2 className="text-white font-serif text-4xl md:text-5xl mt-4 mb-4">Praised by the Elite</h2>
          <div className="w-20 h-[1px] bg-gold mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="bg-white/5 backdrop-blur-sm p-8 border border-white/10 relative"
            >
              <Quote className="text-gold/20 absolute top-4 right-4" size={48} />
              <div className="flex mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <span key={i} className="text-gold text-lg">★</span>
                ))}
              </div>
              <p className="text-white/80 italic leading-relaxed mb-8 relative z-10">
                "{t.content}"
              </p>
              <div>
                <h4 className="text-white font-serif text-xl">{t.name}</h4>
                <p className="text-gold/60 text-[10px] uppercase tracking-widest">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
