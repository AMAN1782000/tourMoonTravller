import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { User, Phone, Calendar, Users, Send, ArrowLeft, ShieldCheck } from 'lucide-react';
import { updateUserDetails, setBookingStatus } from '../store/slices/BookingSlice.js';

const BookingScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  // Grab data from our Booking Microservice
  const { activeEnquiry, userDetails } = useSelector((state) => state.booking);

  // Guard clause: If someone navigates here directly without picking a package
  if (!activeEnquiry.packageId) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
        <h2 className="text-2xl font-bold mb-4">No Package Selected</h2>
        <button onClick={() => navigate('/')} className="text-blue-600 font-bold underline">Go back to explore</button>
      </div>
    );
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateUserDetails({ [name]: value }));
  };

  const handleWhatsAppOpen = (e) => {
    e.preventDefault();
    dispatch(setBookingStatus('submitting'));

    const message = `*NEW BOOKING ENQUIRY*%0a` +
                    `*Package:* ${activeEnquiry.packageName}%0a` +
                    `*Type:* ${activeEnquiry.packageType}%0a` +
                    `--------------------------%0a` +
                    `*Name:* ${userDetails.name}%0a` +
                    `*Phone:* ${userDetails.phone}%0a` +
                    `*Date:* ${userDetails.travelDate}%0a` +
                    `*Travelers:* ${userDetails.adults} Adults, ${userDetails.children || 0} Children`;

    window.open(`https://wa.me/919560791644?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-20 pt-10">
      <div className="max-w-2xl mx-auto px-6">
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-slate-400 font-bold text-xs uppercase mb-8 hover:text-slate-900 transition-colors">
          <ArrowLeft size={16} /> Back to Details
        </button>

        {/* 1. Pre-filled Header (From Redux) */}
        <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white shadow-2xl mb-8 relative overflow-hidden">
          <div className="relative z-10">
            <span className="bg-blue-600 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
              {activeEnquiry.packageType}
            </span>
            <h1 className="text-3xl font-black mt-4 leading-tight">{activeEnquiry.packageName}</h1>
            <p className="text-slate-400 mt-2 font-medium">Starting from {activeEnquiry.price}</p>
          </div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 blur-3xl rounded-full"></div>
        </div>

        {/* 2. User Form (Updates Redux userDetails) */}
        <div className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-sm border border-slate-100">
          <h3 className="text-xl font-black text-slate-900 mb-8">Traveler Details</h3>
          
          <form onSubmit={handleWhatsAppOpen} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-slate-400 ml-1">Your Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                  <input required name="name" value={userDetails.name} onChange={handleInputChange} type="text" placeholder="John Doe" className="w-full pl-12 pr-4 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none font-medium text-slate-900" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-slate-400 ml-1">WhatsApp Number</label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                  <input required name="phone" value={userDetails.phone} onChange={handleInputChange} type="tel" placeholder="95607 91644" className="w-full pl-12 pr-4 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none font-medium text-slate-900" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-slate-400 ml-1">Travel Date</label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                  <input required name="travelDate" value={userDetails.travelDate} onChange={handleInputChange} type="date" className="w-full pl-12 pr-4 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none font-bold text-slate-900 text-sm" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-slate-400 ml-1">Adults</label>
                <div className="relative">
                  <Users className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                  <select name="adults" value={userDetails.adults} onChange={handleInputChange} className="w-full pl-12 pr-4 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none font-bold text-slate-900 appearance-none">
                    <option value="1">1 Person</option>
                    <option value="2">2 Persons</option>
                    <option value="4">4+ Persons</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-100 flex items-center gap-3">
              <ShieldCheck className="text-emerald-600" />
              <p className="text-[10px] text-emerald-800 font-bold uppercase tracking-tight">Your inquiry will be sent directly to Aman Thakur.</p>
            </div>

            <button type="submit" className="w-full bg-[#25D366] hover:bg-emerald-600 text-white py-5 rounded-[2rem] font-black text-lg flex items-center justify-center gap-3 transition-all active:scale-95 shadow-xl shadow-emerald-100">
              Confirm on WhatsApp <Send size={20} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingScreen;