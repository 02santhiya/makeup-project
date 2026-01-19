
import React from 'react';
import { Instagram, Twitter, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-maroon-dark text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center justify-center text-center space-y-8">
          <div className="flex flex-col items-center">
            <span className="text-3xl font-serif text-gold tracking-widest uppercase mb-2">JK Beautician</span>
            <div className="w-12 h-[1px] bg-gold/50"></div>
          </div>
          
          <p className="text-white/60 max-w-md text-sm italic">
            Empowering women through luxury makeup artistry. Your journey to timeless elegance begins with us.
          </p>

          <div className="flex space-x-6">
            <a href="#" className="hover:text-gold transition-colors"><Instagram size={20} /></a>
            <a href="#" className="hover:text-gold transition-colors"><Twitter size={20} /></a>
            <a href="#" className="hover:text-gold transition-colors"><Facebook size={20} /></a>
          </div>

          <div className="pt-8 border-t border-white/10 w-full flex flex-col md:flex-row items-center justify-between text-[10px] uppercase tracking-[0.2em] text-white/40">
            <p>© {new Date().getFullYear()} JK Beautician. All rights reserved.</p>
            <div className="flex space-x-8 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
