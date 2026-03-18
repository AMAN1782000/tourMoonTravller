import React from 'react';
import { 
  Phone, Mail, MapPin, Facebook, Instagram, 
  Twitter, Youtube, Send, ArrowUpRight 
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Top Section: Brand & Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 pb-12 border-b border-slate-800">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Send className="text-white w-6 h-6 -rotate-12" />
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">Moon Traveller</span>
            </div>
            <p className="text-slate-400 max-w-sm leading-relaxed">
              Crafting unforgettable journeys since 2026. Specializing in honeymoon packages and adventure tours across Manali and beyond.
            </p>
            <div className="flex gap-4 pt-2">
              {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-8">
            {/* Quick Links */}
            <div>
              <h4 className="text-white font-bold mb-6">Quick Links</h4>
              <ul className="space-y-4 text-sm">
                <li><a href="/" className="hover:text-blue-400 transition-colors">Home</a></li>
                <li><a href="/packages" className="hover:text-blue-400 transition-colors">Tour Packages</a></li>
              </ul>
            </div>

            {* Support
            <div>
              <h4 className="text-white font-bold mb-6">Support</h4>
              <ul className="space-y-4 text-sm">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Terms & Conditions</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Cancellation Policy</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Booking Guide</a></li>
              </ul>
            </div> *}

            {/* Contact Info */}
            <div className="col-span-2 md:col-span-1">
              <h4 className="text-white font-bold mb-6">Get In Touch</h4>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <Phone size={18} className="text-blue-500 shrink-0" />
                  <div>
                    <p className="text-white font-medium">Aman Thakur</p>
                    <a href="tel:9560791644" className="hover:text-blue-400">+91 95607 91644</a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail size={18} className="text-blue-500 shrink-0" />
                  <a href="mailto:bookmoontraveler.com" className="hover:text-blue-400">bookmoontraveler.com</a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="text-blue-500 shrink-0" />
                  <span>North East Delhi , India</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 font-medium">
          <p>© 2026 Moon Traveller. All rights reserved.</p>
          <div className="flex gap-6">
            <p>Designed for Manali Tourism</p>
            <p className="text-slate-400 uppercase tracking-widest italic">Safe Travels</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
