
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Admin from './components/Admin';
import { INITIAL_PORTFOLIO, INITIAL_SERVICES, INITIAL_TESTIMONIALS, INITIAL_SETTINGS } from './constants';
import { PortfolioImage, Testimonial } from './types';

// Scroll to top component for route changes
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const HomePage = ({ portfolio, services, testimonials }: any) => (
  <main>
    <Hero />
    <About />
    <Services services={services} />
    <Testimonials testimonials={testimonials} />
    <Contact />
  </main>
);

const App: React.FC = () => {
  const [portfolio, setPortfolio] = useState<PortfolioImage[]>(INITIAL_PORTFOLIO);
  const [testimonials, setTestimonials] = useState<Testimonial[]>(INITIAL_TESTIMONIALS);

  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route 
              path="/" 
              element={<HomePage portfolio={portfolio} services={INITIAL_SERVICES} testimonials={testimonials} />} 
            />
            <Route 
              path="/portfolio" 
              element={<Portfolio images={portfolio} />} 
            />
            <Route 
              path="/admin" 
              element={
                <Admin 
                  portfolio={portfolio} 
                  testimonials={testimonials} 
                  services={INITIAL_SERVICES}
                  onUpdatePortfolio={setPortfolio}
                  onUpdateTestimonials={setTestimonials}
                />
              } 
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
