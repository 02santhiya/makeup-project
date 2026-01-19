
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Instagram, Send, CheckCircle2 } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    date: '',
    service: 'Bridal'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, send to Supabase
    console.log('Form Submitted:', formState);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
    setFormState({ name: '', phone: '', date: '', service: 'Bridal' });
  };

  return (
    <section id="contact" className="py-24 bg-neutral-beige">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-gold uppercase tracking-[0.3em] text-xs font-semibold">Get in Touch</span>
            <h2 className="text-maroon font-serif text-5xl mt-4 mb-8">Let's Create Magic Together</h2>
            <p className="text-gray-600 mb-12 max-w-md">
              Ready for your luxury transformation? Fill out the form or reach us directly via WhatsApp or Instagram.
            </p>

            <div className="space-y-8">
              <a href="https://wa.me/919876543210" target="_blank" className="flex items-center group">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border border-gold/30 group-hover:bg-gold transition-all">
                  <Phone size={20} className="text-gold group-hover:text-white" />
                </div>
                <div className="ml-4">
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest">WhatsApp & Call</p>
                  <p className="text-maroon font-semibold">+91 98765 43210</p>
                </div>
              </a>
              <a href="https://instagram.com" target="_blank" className="flex items-center group">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border border-gold/30 group-hover:bg-gold transition-all">
                  <Instagram size={20} className="text-gold group-hover:text-white" />
                </div>
                <div className="ml-4">
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest">Instagram Profile</p>
                  <p className="text-maroon font-semibold">@jkbeautician_luxury</p>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 border border-gold/10 shadow-xl"
          >
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center py-20 text-center">
                <CheckCircle2 size={64} className="text-green-500 mb-6" />
                <h3 className="text-2xl font-serif text-maroon mb-2">Request Received!</h3>
                <p className="text-gray-500">We will contact you shortly to confirm your slot.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-gray-400 mb-2 font-bold">Full Name</label>
                  <input 
                    required
                    type="text" 
                    value={formState.name}
                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                    placeholder="Enter your name" 
                    className="w-full border-b border-gray-200 py-3 focus:outline-none focus:border-gold transition-colors text-maroon"
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-gray-400 mb-2 font-bold">Phone Number</label>
                  <input 
                    required
                    type="tel" 
                    value={formState.phone}
                    onChange={(e) => setFormState({...formState, phone: e.target.value})}
                    placeholder="+91 00000 00000" 
                    className="w-full border-b border-gray-200 py-3 focus:outline-none focus:border-gold transition-colors text-maroon"
                  />
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-gray-400 mb-2 font-bold">Event Date</label>
                    <input 
                      required
                      type="date" 
                      value={formState.date}
                      onChange={(e) => setFormState({...formState, date: e.target.value})}
                      className="w-full border-b border-gray-200 py-3 focus:outline-none focus:border-gold transition-colors text-maroon"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-gray-400 mb-2 font-bold">Service Type</label>
                    <select 
                      value={formState.service}
                      onChange={(e) => setFormState({...formState, service: e.target.value})}
                      className="w-full border-b border-gray-200 py-3 focus:outline-none focus:border-gold transition-colors text-maroon bg-transparent"
                    >
                      <option>Bridal</option>
                      <option>Reception</option>
                      <option>Engagement</option>
                      <option>Celebrity</option>
                    </select>
                  </div>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-maroon text-gold py-4 uppercase tracking-[0.2em] text-sm font-bold hover:bg-maroon-dark transition-all flex items-center justify-center gap-2 group"
                >
                  Confirm Booking Request <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
