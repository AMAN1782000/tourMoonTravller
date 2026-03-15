import React from 'react';
import { Heart, Star, Clock, MapPin, ArrowRight, Sparkles, UtensilsCrossed, Camera } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// Import the action from your honeymoon slice
import { setSelectedHoneymoon } from '../store/slices/honeySlice.js'; 

const HoneymoonScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // 1. Pulling the data directly from your Redux store
  const { items } = useSelector((state) => state.honeymoon);

  const handleBooking = (pkg) => {
    // 2. Dispatching the selection to Redux before moving to the next screen
    dispatch(setSelectedHoneymoon(pkg));
    navigate(`/book/${pkg.id}`);
  };

  return (
    <div className="bg-rose-50/30 min-h-screen pb-20">
      {/* Hero Banner */}
      <div className="relative h-[400px] flex items-center justify-center">
        <img 
          src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1600" 
          className="absolute inset-0 w-full h-full object-cover"
          alt="Romantic Background"
        />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
        <div className="relative z-10 text-center px-4">
          <div className="flex justify-center mb-4">
            <Heart className="text-rose-400 fill-rose-400 animate-pulse" size={48} />
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight">Romantic Getaways</h1>
          <p className="text-rose-100 text-lg md:text-xl font-medium max-w-2xl mx-auto">
            Handcrafted experiences for your new beginning.
          </p>
        </div>
      </div>

      {/* Trust Bar */}
      <div className="max-w-7xl mx-auto px-6 -mt-10 relative z-20">
        <div className="bg-white rounded-2xl shadow-xl p-6 grid grid-cols-2 md:grid-cols-4 gap-6 border border-rose-100">
          {[
            { icon: <UtensilsCrossed size={20} />, text: "Candlelight Dinner" },
            { icon: <Sparkles size={20} />, text: "Bed Decoration" },
            { icon: <Camera size={20} />, text: "Couples Shoot" },
            { icon: <Heart size={20} />, text: "Honeymoon Cake" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 text-rose-600 font-bold text-sm">
              <span className="bg-rose-50 p-2 rounded-lg">{item.icon}</span>
              {item.text}
            </div>
          ))}
        </div>
      </div>

      {/* Packages Grid - Now using Redux Data */}
      <div className="max-w-7xl mx-auto px-6 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {items.map((pkg) => (
            <div key={pkg.id} className="bg-white rounded-[2rem] overflow-hidden border border-rose-100 shadow-sm hover:shadow-xl transition-all duration-500 group">
              <div className="relative h-72 overflow-hidden">
                <img 
                  src={pkg.image?.startsWith('http') ? pkg.image : `https://images.unsplash.com/${pkg.image}?auto=format&fit=crop&q=80&w=1600`} 
                  alt={pkg.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
                  <Star size={14} className="text-amber-500 fill-amber-500" />
                  <span className="text-xs font-bold text-slate-800">{pkg.rating || '5.0'}</span>
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-rose-600 text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full">
                    {pkg.tag}
                  </span>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 leading-tight group-hover:text-rose-600 transition-colors mb-3">
                  {pkg.title}
                </h3>
                
                <div className="flex items-center gap-4 text-slate-500 text-xs font-bold uppercase tracking-wider mb-4">
                  <div className="flex items-center gap-1">
                    <Clock size={16} className="text-rose-400" /> {pkg.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin size={16} className="text-rose-400" /> Private Tour
                  </div>
                </div>

                <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-2 italic">
                  {pkg.description || "Customizable romantic experience for couples."}
                </p>

                <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                  <div>
                    <p className="text-[10px] text-slate-400 uppercase font-black">Price Starts At</p>
                    <p className="text-2xl font-black text-slate-900">{pkg.price}</p>
                  </div>
                    {/* Changed from Link to button for Redux Logic */}
                    
                      <Link to={`/honeymoon/${pkg.id}`} 
                        className="bg-rose-600 text-white p-4 rounded-2xl"
                      >
                        <ArrowRight size={20} />
                      </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HoneymoonScreen;