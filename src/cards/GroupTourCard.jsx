import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { 
  Users, Clock, Calendar, CheckCircle2, 
  ArrowLeft, Send, ShieldCheck, Zap, Mail, Phone, User, Info
} from 'lucide-react';
import { initiateBooking, updateUserDetails } from '../store/slices/BookingSlice.js';

const GroupTourDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const tour = useSelector((state) => 
    state.groupTours?.items?.find((item) => item.id === id)
  );

  const { userDetails } = useSelector((state) => state.booking || { userDetails: {} });

  useEffect(() => {
    if (tour) {
      dispatch(initiateBooking(tour));
    }
  }, [tour, dispatch]);

  if (!tour) return <div className="py-20 text-center font-bold text-slate-400">Tour not found!</div>;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateUserDetails({ [name]: value }));
  };

  const handleWhatsApp = (e) => {
    e.preventDefault();
    
    const formDataObj = {
      packageId: tour.id,
      packageName: tour.title,
      price: tour.price,
      ...userDetails
    };
    console.log("Form Submitted Data:", formDataObj);

    // Constructing a detailed message for Aman Thakur
    const message = `*GROUP EXPEDITION ENQUIRY*%0a` +
                    `--------------------------%0a` +
                    `*Package:* ${tour.title}%0a` +
                    `*Batch:* ${tour.nextBatch}%0a` +
                    `--------------------------%0a` +
                    `*Traveler:* ${userDetails?.name || 'N/A'}%0a` +
                    `*Email:* ${userDetails?.email || 'N/A'}%0a` +
                    `*Phone:* ${userDetails?.phone || 'N/A'}%0a` +
                    `*Travel Date:* ${userDetails?.travelDate || 'N/A'}%0a` +
                    `*Group Size:* ${userDetails?.adults || 0} Adults, ${userDetails?.children || 0} Children`;

    window.open(`https://wa.me/919560791644?text=${message}`, '_blank');
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Header */}
      <div className="relative h-[50vh] overflow-hidden">
        <img src={tour.image} alt={tour.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
        <button onClick={() => navigate(-1)} className="absolute top-8 left-8 bg-white/20 backdrop-blur-md p-3 rounded-full text-white hover:bg-white/40 transition-all">
          <ArrowLeft size={24} />
        </button>
        <div className="absolute bottom-10 left-8 right-8 max-w-7xl mx-auto">
          <span className="bg-blue-600 text-white text-[10px] font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-full">{tour.tag}</span>
          <h1 className="text-4xl md:text-6xl font-black text-white mt-4">{tour.title}</h1>
          <div className="flex flex-wrap gap-6 mt-4 text-blue-100 font-bold text-sm">
            <span className="flex items-center gap-2"><Clock size={18}/> {tour.duration}</span>
            <span className="flex items-center gap-2"><Users size={18}/> {tour.groupSize}</span>
            <span className="flex items-center gap-2"><Calendar size={18}/> {tour.nextBatch}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-3 gap-16">
        {/* Left Section: Itinerary */}
        <div className="lg:col-span-2 space-y-12">
          <section>
            <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3"><Zap className="text-blue-600" /> Batch Highlights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {['Professional Captain', 'Verified Community', 'Premium Transportation', 'Shared Accomodation'].map((perk) => (
                <div key={perk} className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100 text-slate-700 font-bold text-sm">
                  <CheckCircle2 size={18} className="text-emerald-500" /> {perk}
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-slate-900 mb-8">Trip Itinerary</h2>
            <div className="space-y-10">
              {tour.itinerary?.map((item, idx) => (
                <div key={idx} className="relative pl-10 border-l-2 border-blue-100">
                  <div className="absolute -left-[11px] top-0 w-5 h-5 bg-blue-600 rounded-full border-4 border-white shadow-md" />
                  <div className="bg-slate-50 p-6 rounded-3xl">
                    <h4 className="font-black text-blue-600 text-xs uppercase tracking-widest mb-1">Day {idx + 1}</h4>
                    <h3 className="font-bold text-slate-900 text-lg mb-2">{item.day}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right Section: Enhanced Booking Form */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 bg-white rounded-[2.5rem] p-8 shadow-2xl border border-slate-100">
            <div className="mb-6">
              <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-1">Package Price</p>
              <h3 className="text-3xl font-black text-slate-900">{tour.price}</h3>
            </div>

            <form onSubmit={handleWhatsApp} className="p-8 space-y-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-black text-gray-400 uppercase ml-2">Plan Name</label>
                  <input readOnly value={tour.title} className="w-full p-4 bg-gray-50 rounded-2xl border-none text-sm font-bold text-blue-600" />
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupTourDetails;