
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Admin', path: '/admin' },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" onClick={handleLinkClick} className="flex flex-col items-center">
          <span className={`text-2xl md:text-3xl font-serif font-bold tracking-widest uppercase ${isScrolled ? 'text-maroon' : 'text-gold'}`}>JK Beautician</span>
          <span className={`text-[10px] tracking-[0.3em] uppercase hidden md:block ${isScrolled ? 'text-gray-500' : 'text-white/80'}`}>Luxury Artistry</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-12">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm tracking-widest uppercase transition-colors ${location.pathname === link.path ? 'text-gold font-semibold' : isScrolled ? 'text-gray-700 hover:text-maroon' : 'text-white hover:text-gold'}`}
            >
              {link.name}
            </Link>
          ))}
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={`${isScrolled ? 'text-maroon' : 'text-gold'} hover:scale-110 transition-transform`}
          >
            <Instagram size={20} />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? <X className={isScrolled ? 'text-maroon' : 'text-white'} /> : <Menu className={isScrolled ? 'text-maroon' : 'text-white'} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-maroon z-40 flex flex-col items-center justify-center space-y-8 transition-transform duration-500 ${isOpen ? 'translate-y-0' : '-translate-y-full'} md:hidden`}>
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            onClick={handleLinkClick}
            className="text-2xl text-white font-serif tracking-widest uppercase hover:text-gold transition-colors"
          >
            {link.name}
          </Link>
        ))}
        <button onClick={() => setIsOpen(false)} className="absolute top-6 right-6 text-white">
          <X size={32} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
