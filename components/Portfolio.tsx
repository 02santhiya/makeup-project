
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Category, PortfolioImage } from '../types';
import { X } from 'lucide-react';

interface Props {
  images: PortfolioImage[];
}

const Portfolio: React.FC<Props> = ({ images }) => {
  const [filter, setFilter] = useState<Category | 'All'>('All');
  const [selectedImage, setSelectedImage] = useState<PortfolioImage | null>(null);

  const categories: (Category | 'All')[] = ['All', 'Bridal', 'Party', 'Celebrity'];

  const filteredImages = filter === 'All' 
    ? images 
    : images.filter(img => img.category === filter);

  return (
    <div className="pt-32 pb-24 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-maroon font-serif text-5xl md:text-7xl mb-6">Masterpieces</h1>
          <p className="text-gray-400 uppercase tracking-[0.3em] text-xs">Curated Portfolio of Excellence</p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-8 py-2 text-[10px] uppercase tracking-[0.2em] border transition-all ${filter === cat ? 'bg-maroon text-gold border-maroon' : 'border-gray-200 text-gray-500 hover:border-gold hover:text-gold'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <motion.div 
          layout
          className="masonry"
        >
          <AnimatePresence>
            {filteredImages.map((img) => (
              <motion.div
                key={img.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="masonry-item group cursor-pointer"
                onClick={() => setSelectedImage(img)}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={img.url} 
                    alt={img.title} 
                    className="w-full grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-maroon/0 group-hover:bg-maroon/40 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="text-center p-6">
                      <p className="text-gold uppercase tracking-[0.2em] text-[10px] mb-2">{img.category}</p>
                      <h3 className="text-white font-serif text-xl">{img.title}</h3>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-lg flex items-center justify-center p-6"
              onClick={() => setSelectedImage(null)}
            >
              <button 
                className="absolute top-8 right-8 text-white hover:text-gold transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <X size={32} />
              </button>
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                className="max-w-5xl w-full flex flex-col items-center"
                onClick={e => e.stopPropagation()}
              >
                <img 
                  src={selectedImage.url} 
                  alt={selectedImage.title} 
                  className="max-h-[80vh] object-contain mb-6 shadow-2xl border border-white/10"
                />
                <div className="text-center">
                  <p className="text-gold uppercase tracking-[0.3em] text-xs mb-2 font-bold">{selectedImage.category}</p>
                  <h2 className="text-white font-serif text-3xl">{selectedImage.title}</h2>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Portfolio;
