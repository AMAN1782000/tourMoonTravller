import React from 'react';
import { Users, Compass, Clock, Calendar, ArrowRight } from 'lucide-react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const GroupTours = () => {
  // Pulling items from Redux
  const items = useSelector((state) => state.groupTours?.items || []);

  return (
    <div className="bg-slate-50 min-h-screen pb-20 pt-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
              Travel Better <span className="text-blue-600">Together.</span>
            </h1>
            <p className="mt-4 text-slate-500 font-medium">
              Join our curated batches and explore with a community.
            </p>
          </div>
          
          <div className="bg-white px-8 py-5 rounded-[2rem] shadow-sm border border-slate-100 text-center hidden lg:block">
            <p className="text-3xl font-black text-blue-600">{items.length}</p>
            <p className="text-[10px] font-black text-slate-400 uppercase">Active Batches</p>
          </div>
        </div>

        {/* The Loop */}
        {items.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {items.map((tour) => (
              <div key={tour.id} className="bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 group flex flex-col">
                <div className="relative h-64 overflow-hidden">
                  <img src={tour.image} alt={tour.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
                    <Users size={14} className="text-blue-600" />
                    <span className="text-xs font-bold text-slate-800">{tour.groupSize || 'Group'}</span>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-md">
                      {tour.tag || 'Expedition'}
                    </span>
                  </div>
                </div>

                <div className="p-8 flex-grow flex flex-col">
                  <h3 className="text-2xl font-bold text-slate-900 leading-tight group-hover:text-blue-600 transition-colors mb-3">
                    {tour.title}
                  </h3>
                  <div className="flex items-center gap-4 text-slate-500 text-xs font-bold uppercase tracking-wider mb-6">
                    <div className="flex items-center gap-1"><Clock size={16} className="text-blue-400" /> {tour.duration}</div>
                    <div className="flex items-center gap-1"><Calendar size={16} className="text-blue-400" /> {tour.nextBatch}</div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-6 border-t border-slate-50 mt-auto">
                    <div>
                      <p className="text-[10px] text-slate-400 uppercase font-black">Price Starts At</p>
                      <p className="text-2xl font-black text-slate-900">{tour.price}</p>
                    </div>
                    <Link to={`/group-tour/${tour.id}`} className="bg-slate-900 hover:bg-blue-600 text-white p-4 rounded-2xl transition-colors shadow-md">
                      <ArrowRight size={20} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-[3rem] border-2 border-dashed border-slate-100">
            <Compass className="mx-auto text-slate-200 mb-4" size={48} />
            <h3 className="text-xl font-bold text-slate-900">No Tours Found</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default GroupTours;