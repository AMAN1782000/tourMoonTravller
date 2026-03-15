import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { 
  Heart, Clock, MapPin, CheckCircle2, ArrowLeft, 
  Utensils, Sparkles, Camera, Send, User, Info 
} from 'lucide-react';
import { initiateBooking, updateUserDetails } from '../store/slices/BookingSlice.js';
import { Link } from 'react-router-dom';

const HoneymoonDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // 1. Get package details from Honeymoon Slice using the ID from URL
  const pkg = useSelector((state) => 
    state.honeymoon.items.find((item) => item.id === id)
  );

  // 2. Get Form Data from Booking Slice
  const { userDetails } = useSelector((state) => state.booking);

  // Sync the booking slice with this package on load
  useEffect(() => {
    if (pkg) {
      dispatch(initiateBooking(pkg));
    }
  }, [pkg, dispatch]);

  if (!pkg) return <div className="py-20 text-center font-bold">Package not found!</div>;

  const handleInputChange = (e) => {
    dispatch(updateUserDetails({ [e.target.name]: e.target.value }));
  };

  const handleWhatsApp = (e) => {
    e.preventDefault();
    
    const formDataObj = {
      packageId: pkg.id,
      packageName: pkg.title,
      price: pkg.price,
      ...userDetails
    };
    console.log("Form Submitted Data:", formDataObj);

    const message = `*HONEYMOON ENQUIRY*%0a` +
                    `*Package:* ${pkg.title}%0a` +
                    `*User:* ${userDetails?.name || 'N/A'}%0a` +
                    `*Phone:* ${userDetails?.phone || 'N/A'}%0a` +
                    `*Date:* ${userDetails?.travelDate || 'N/A'}%0a` +
                    `*Group:* ${userDetails?.adults || 2} Adults, ${userDetails?.children || 0} Children`;

    window.open(`https://wa.me/919560791644?text=${message}`, '_blank');
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <img src={pkg.image?.startsWith('http') ? pkg.image : `https://images.unsplash.com/${pkg.image}?auto=format&fit=crop&q=80&w=1600`} alt={pkg.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
         <Link to="/">
        <button 
          onClick={() => navigate('/')}
          className="absolute top-8 left-8 bg-white/20 backdrop-blur-md p-3 rounded-full text-white hover:bg-white/40 transition-all"
        ><ArrowLeft size={14} />   
        </button>
         </Link>
        
        <div className="absolute bottom-12 left-8 right-8 max-w-7xl mx-auto">
          <span className="bg-rose-600 text-white text-xs font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-full">
            {pkg.tag}
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-white mt-4">{pkg.title}</h1>
          <div className="flex gap-6 mt-4 text-rose-100 font-bold">
            <span className="flex items-center gap-2"><Clock size={20}/> {pkg.duration}</span>
            <span className="flex items-center gap-2"><MapPin size={20}/> Private Luxury Tour</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-3 gap-16">
        
        {/* Left Column: Details & Itinerary */}
        <div className="lg:col-span-2 space-y-12">
          <section>
            <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
              <Sparkles className="text-rose-500" /> Exclusive Honeymoon Perks
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {['Flower Bed Decoration', 'Candlelight Dinner', 'Honeymoon Cake', 'Private Cab'].map((perk) => (
                <div key={perk} className="flex items-center gap-3 p-4 bg-rose-50 rounded-2xl border border-rose-100 text-rose-900 font-bold text-sm">
                  <CheckCircle2 size={18} className="text-rose-500" /> {perk}
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-slate-900 mb-6">Experience Itinerary</h2>
            <div className="space-y-8">
              {pkg.itinerary?.map((item, idx) => (
                <div key={idx} className="relative pl-8 border-l-2 border-slate-100">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-rose-500 rounded-full border-4 border-white shadow-sm" />
                  <h4 className="font-black text-slate-900 text-lg">{item.day}</h4>
                  <p className="text-slate-500 mt-1 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right Column: Sticky Booking Form */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 bg-white rounded-[2.5rem] p-8 shadow-2xl border border-slate-100">
            <div className="mb-8">
              <p className="text-slate-400 text-xs font-black uppercase tracking-widest">Pricing Starts At</p>
              <h3 className="text-3xl font-black text-slate-900">{pkg.price}</h3>
            </div>

             <form onSubmit={handleWhatsApp} className="p-8 space-y-4">
               <div className="space-y-1">
                  <label className="text-[10px] font-black text-gray-400 uppercase ml-2">Plan Name</label>
                  <input readOnly value={pkg.title} className="w-full p-4 bg-gray-50 rounded-2xl border-none text-sm font-bold text-blue-600" />
                </div>
                 
                <div className="space-y-1">
                  <label className="text-[10px] font-black text-gray-400 uppercase ml-2">Your Name</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={16} />
                    <input required name="name" value={userDetails?.name || ''} onChange={handleInputChange} type="text" placeholder="Full Name" className="w-full pl-11 p-4 bg-gray-50 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none font-medium text-sm" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-black text-gray-400 uppercase ml-2">WhatsApp</label>
                    <input required name="phone" value={userDetails?.phone || ''} onChange={handleInputChange} type="tel" placeholder="+91" className="w-full p-4 bg-gray-50 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none font-medium text-sm" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-black text-gray-400 uppercase ml-2">Travel Date</label>
                    <input required name="travelDate" value={userDetails?.travelDate || ''} onChange={handleInputChange} type="date" className="w-full p-4 bg-gray-50 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none font-bold text-xs" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-black text-gray-400 uppercase ml-2">Adults</label>
                    <input required name="adults" value={userDetails?.adults || 2} onChange={handleInputChange} type="number" min="1" className="w-full p-4 bg-gray-50 rounded-2xl outline-none font-bold text-sm" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-black text-gray-400 uppercase ml-2">Children</label>
                    <input name="children" value={userDetails?.children || 0} onChange={handleInputChange} type="number" min="0" className="w-full p-4 bg-gray-50 rounded-2xl outline-none font-bold text-sm" />
                  </div>
                </div>

                <button type="submit" className="w-full bg-slate-900 hover:bg-blue-600 text-white font-black py-5 rounded-[2rem] flex items-center justify-center gap-3 transition-all active:scale-95 shadow-xl shadow-slate-200 mt-4">
                  <Send size={20} /> Request Details
                </button>

                <div className="p-4 bg-orange-50 rounded-2xl border border-orange-100 flex gap-3 mt-4">
                  <Info className="text-orange-500 shrink-0" size={16} />
                  <p className="text-[10px] text-orange-800 font-bold leading-tight uppercase">
                    Our team will contact you within 24 hours.
                  </p>
                </div>
              </form>
            <p className="text-center text-[10px] text-slate-400 mt-6 font-bold uppercase">No payment required now</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HoneymoonDetailsPage;