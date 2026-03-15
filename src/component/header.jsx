import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Map, Plane, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Packages', icon: <Map size={18} /> },
    { name: 'Honeymoon', icon: <Heart size={18} /> },
    { name: 'Group-Tours', icon: <Plane size={18} /> },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-md py-3' 
        : 'bg-gradient-to-b from-black/50 to-transparent py-5' // Added gradient for visibility
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* Logo */}
        <Link to='/'>
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="bg-blue-600 p-2 rounded-xl group-hover:rotate-12 transition-transform shadow-lg shadow-blue-500/20">
              <Plane className="text-white w-5 h-5" />
            </div>
            <span className={`text-2xl font-black tracking-tighter transition-colors duration-300 ${
              isScrolled ? 'text-slate-900' : 'text-white'
            }`}>
              MOON<span className="text-blue-600">TRAVELLER</span>
            </span>
          </div>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link // Changed from <a> to <Link> for React Router
              key={link.name}
              to={`/${link.name.toLowerCase()}`}
              className={`flex items-center gap-2 font-bold text-sm transition-all hover:text-blue-500 hover:-translate-y-0.5 ${
                isScrolled ? 'text-slate-700' : 'text-white drop-shadow-md'
              }`}
            >
              {link.icon}
              {link.name}
            </Link>
          ))}
          
          <div className={`h-6 w-[1px] transition-colors ${
            isScrolled ? 'bg-slate-200' : 'bg-white/30'
          }`} />
          
          <a 
            href="tel:9560791644"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full font-bold text-sm shadow-lg shadow-blue-500/30 transition-all active:scale-95"
          >
            <Phone size={16} />
            Contact Aman
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className={`md:hidden p-2 rounded-lg transition-colors ${
            isScrolled ? 'text-slate-900 bg-slate-100' : 'text-white bg-white/10'
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-slate-900 z-50 transition-transform duration-500 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      } md:hidden flex flex-col items-center justify-center space-y-8`}>
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-6 right-6 p-2 text-white/50 hover:text-white"
        >
          <X size={32} />
        </button>

        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={`/${link.name.toLowerCase()}`}
            onClick={() => setIsOpen(false)}
            className="text-3xl font-bold text-white hover:text-blue-500 transition-colors"
          >
            {link.name}
          </Link>
        ))}
        
        <a 
          href="tel:9560791644"
          className="mt-4 bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-xl flex items-center gap-3 shadow-2xl"
        >
          <Phone /> Call Aman Thakur
        </a>
      </div>
    </nav>
  );
};

export default Header;