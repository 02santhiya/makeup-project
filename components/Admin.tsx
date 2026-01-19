
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { LayoutDashboard, Image as ImageIcon, MessageSquare, Settings, LogOut, Trash2, Plus, Users } from 'lucide-react';
import { PortfolioImage, Testimonial, Service, Booking } from '../types';

interface Props {
  portfolio: PortfolioImage[];
  testimonials: Testimonial[];
  services: Service[];
  onUpdatePortfolio: (p: PortfolioImage[]) => void;
  onUpdateTestimonials: (t: Testimonial[]) => void;
}

const Admin: React.FC<Props> = ({ portfolio, testimonials, services, onUpdatePortfolio, onUpdateTestimonials }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState<'portfolio' | 'testimonials' | 'bookings'>('portfolio');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'admin123') { // Simple demo auth
      setIsAuthenticated(true);
    } else {
      alert('Invalid Password');
    }
  };

  const deletePortfolio = (id: string) => {
    onUpdatePortfolio(portfolio.filter(p => p.id !== id));
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-maroon flex items-center justify-center px-6">
        <div className="max-w-md w-full bg-white p-12 shadow-2xl">
          <div className="text-center mb-8">
            <h1 className="text-maroon font-serif text-3xl uppercase tracking-widest">Admin Access</h1>
            <p className="text-gray-400 text-xs mt-2 uppercase tracking-widest">JK Beautician Studio</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-[10px] uppercase tracking-widest text-gray-400 mb-2 font-bold">Password</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border-b border-gray-200 py-3 focus:outline-none focus:border-gold text-maroon"
                placeholder="••••••••"
              />
            </div>
            <button className="w-full bg-gold text-maroon py-4 uppercase tracking-widest text-sm font-bold hover:bg-gold-dark transition-all">
              Unlock Studio
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-maroon text-white flex flex-col">
        <div className="p-8 border-b border-white/10">
          <span className="text-xl font-serif text-gold tracking-widest uppercase">JK Admin</span>
        </div>
        <nav className="flex-1 p-4 space-y-2 mt-4">
          <button 
            onClick={() => setActiveTab('portfolio')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded text-sm tracking-widest uppercase transition-all ${activeTab === 'portfolio' ? 'bg-white/10 text-gold' : 'hover:bg-white/5'}`}
          >
            <ImageIcon size={18} /> Portfolio
          </button>
          <button 
            onClick={() => setActiveTab('testimonials')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded text-sm tracking-widest uppercase transition-all ${activeTab === 'testimonials' ? 'bg-white/10 text-gold' : 'hover:bg-white/5'}`}
          >
            <MessageSquare size={18} /> Reviews
          </button>
          <button 
            onClick={() => setActiveTab('bookings')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded text-sm tracking-widest uppercase transition-all ${activeTab === 'bookings' ? 'bg-white/10 text-gold' : 'hover:bg-white/5'}`}
          >
            <Users size={18} /> Bookings
          </button>
        </nav>
        <button 
          onClick={() => setIsAuthenticated(false)}
          className="p-8 text-white/50 hover:text-white flex items-center gap-3 text-xs uppercase tracking-widest border-t border-white/10"
        >
          <LogOut size={16} /> Logout
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-10 overflow-y-auto">
        <header className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-serif text-maroon capitalize">{activeTab} Management</h2>
          <button className="bg-gold text-maroon px-6 py-2 flex items-center gap-2 text-xs uppercase tracking-widest font-bold hover:bg-gold-dark transition-all shadow-lg">
            <Plus size={16} /> Add New {activeTab === 'portfolio' ? 'Image' : 'Entry'}
          </button>
        </header>

        {activeTab === 'portfolio' && (
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
            {portfolio.map(img => (
              <div key={img.id} className="bg-white border p-3 group relative shadow-sm">
                <img src={img.url} className="w-full aspect-square object-cover mb-3" />
                <p className="font-serif text-maroon">{img.title}</p>
                <p className="text-[10px] uppercase text-gray-400 tracking-widest">{img.category}</p>
                <button 
                  onClick={() => deletePortfolio(img.id)}
                  className="absolute top-6 right-6 p-2 bg-red-500 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'testimonials' && (
          <div className="space-y-4">
            {testimonials.map(t => (
              <div key={t.id} className="bg-white p-6 border flex justify-between items-center shadow-sm">
                <div>
                  <h4 className="font-serif text-maroon text-xl">{t.name}</h4>
                  <p className="text-xs text-gold uppercase tracking-widest mb-2">{t.role}</p>
                  <p className="text-gray-500 text-sm max-w-2xl italic">"{t.content}"</p>
                </div>
                <button className="text-red-400 hover:text-red-600">
                  <Trash2 size={20} />
                </button>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'bookings' && (
          <div className="bg-white border shadow-sm">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b bg-gray-50 text-[10px] uppercase tracking-widest text-gray-400">
                  <th className="p-4">Name</th>
                  <th className="p-4">Phone</th>
                  <th className="p-4">Service</th>
                  <th className="p-4">Date</th>
                  <th className="p-4">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-4 font-semibold text-maroon">Rhea Sharma</td>
                  <td className="p-4 text-gray-500">+91 99999 88888</td>
                  <td className="p-4"><span className="px-2 py-1 bg-gold/10 text-gold text-[10px] uppercase tracking-widest">Bridal</span></td>
                  <td className="p-4 text-gray-500">2024-12-15</td>
                  <td className="p-4"><span className="text-green-500 text-[10px] uppercase tracking-widest font-bold">New</span></td>
                </tr>
                {/* Mock bookings */}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;
