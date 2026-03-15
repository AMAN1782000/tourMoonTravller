import React from 'react';
import { MapPin, Clock, Star, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
// Ensure this matches the action name in your allPackagesSlice
import { setSearchQuery, filterByCategory } from '../store/slices/AllPackage.js'; 

const PackageGrid = () => {
  // 1. Pulling items from Redux State
  const { items } = useSelector((state) => state.allPackages);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleViewDetails = (pkg) => {
    // You could also dispatch a 'setSelectedPackage' action here if needed
    // dispatch(setSelectedPackage(pkg));
    navigate(`/packages/${pkg.id}`);
  };

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Popular <span className="text-blue-600">Packages</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Handpicked Himalayan journeys tailored for every traveler. 
            Choose your escape with Moon Traveller.
          </p>
        </div>

        {/* Grid - Now mapping from Redux 'items' */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((pkg) => (
            <div 
              key={pkg.id} 
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 flex flex-col"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={pkg.image} 
                  alt={pkg.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-md text-blue-600 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-sm">
                    {pkg.tag}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4 bg-blue-600 text-white font-bold px-4 py-1 rounded-lg">
                  {pkg.price}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center gap-1 text-xs font-bold text-slate-400">
                    <Clock size={14} className="text-blue-500" />
                    {pkg.duration}
                  </div>
                  <div className="flex items-center gap-1 text-xs font-bold text-amber-500">
                    <Star size={14} fill="currentColor" />
                    {pkg.rating || 5.0}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {pkg.title}
                </h3>
                
                <div className="flex items-center gap-1 text-slate-500 text-sm mb-6">
                  <MapPin size={14} />
                  <span>North India / Himalayas</span>
                </div>

                {/* Using a button for cleaner navigation control */}
                <button 
                  onClick={() => handleViewDetails(pkg)}
                  className="mt-auto flex items-center justify-center gap-2 w-full py-3 bg-slate-900 text-white rounded-xl font-bold hover:bg-blue-600 transition-all active:scale-95"
                >
                  View Details <ArrowRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackageGrid;