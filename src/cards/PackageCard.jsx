import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { 
  Calendar, Bed, Utensils, Bus, 
  Info, User, Send, ArrowLeft
} from 'lucide-react';
import { updateUserDetails, initiateBooking } from '../store/slices/BookingSlice.js';

const PackageDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // 1. SELECTOR: Get the specific package from Redux
  const pkg = useSelector((state) => 
    state.allPackages?.items?.find((item) => item.id === id)
  );

  // 2. SELECTOR: Get form state
  const { userDetails } = useSelector((state) => state.booking || { userDetails: {} });

  // Sync booking slice with this package on load
  useEffect(() => {
    if (pkg) {
      dispatch(initiateBooking(pkg));
    }
  }, [pkg, dispatch]);

  if (!pkg) {
    return (
      <div className="h-screen flex flex-col items-center justify-center space-y-4">
        <p className="text-slate-400 font-bold">Package not found...</p>
        <button onClick={() => navigate(-1)} className="text-blue-600 font-bold flex items-center gap-2">
          <ArrowLeft size={18} /> Go Back
        </button>
      </div>
    );
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateUserDetails({ [name]: value }));
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

    const message = `*PACKAGE ENQUIRY*%0a` +
                    `--------------------------%0a` +
                    `*Plan:* ${pkg.title}%0a` +
                    `--------------------------%0a` +
                    `*Name:* ${userDetails?.name || 'N/A'}%0a` +
                    `*Email:* ${userDetails?.email || 'N/A'}%0a` +
                    `*Phone:* ${userDetails?.phone || 'N/A'}%0a` +
                    `*Date:* ${userDetails?.travelDate || 'N/A'}%0a` +
                    `*Group:* ${userDetails?.adults || 0} Adults, ${userDetails?.children || 0} Children`;

    window.open(`https://wa.me/919560791644?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight">
               {pkg.title}
            </h1>
            <p className="text-blue-600 font-bold uppercase tracking-widest text-xs mt-1">
              {pkg.tag || 'Tour Package'}
            </p>
          </div>
          <button onClick={() => navigate(-1)} className="p-3 bg-white rounded-full shadow-sm border border-slate-100 hover:bg-slate-50 transition-all">
            <ArrowLeft size={20} className="text-slate-600" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* LEFT COLUMN: Data from Redux Selector */}
          <div className="lg:col-span-2 space-y-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
               <div className="flex flex-col items-center text-center">
                <Bus className="text-blue-500 mb-2" size={20} />
                <span className="text-[10px] text-gray-400 uppercase font-bold">Vehicle</span>
                <p className="font-bold text-xs">Pvt Car</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Utensils className="text-blue-500 mb-2" size={20} />
                <span className="text-[10px] text-gray-400 uppercase font-bold">Meal Plan</span>
                <p className="font-bold text-xs">MAP Plan</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Calendar className="text-blue-500 mb-2" size={20} />
                <span className="text-[10px] text-gray-400 uppercase font-bold">Duration</span>
                <p className="font-bold text-xs">{pkg.duration}</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Bed className="text-blue-500 mb-2" size={20} />
                <span className="text-[10px] text-gray-400 uppercase font-bold">Stay</span>
                <p className="font-bold text-xs">Luxury Hotel</p>
              </div>
            </div>

            {/* Itinerary Looped from Selector */}
            <section className="bg-white rounded-[2rem] shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-6 bg-slate-900">
                <h2 className="text-lg font-bold text-white uppercase tracking-wider">Day-Wise Experience</h2>
              </div>
              <div className="p-8 space-y-8">
                {pkg.itinerary?.map((item, idx) => (
                  <div key={idx} className="flex gap-6 group">
                    <div className="flex-shrink-0 w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center font-black text-sm group-hover:bg-blue-600 group-hover:text-white transition-all">
                      {idx + 1}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{item.title || `Day ${idx + 1}`}</h3>
                      <p className="text-gray-500 leading-relaxed text-sm">{item.desc || item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* RIGHT COLUMN: Booking Form */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white rounded-[2.5rem] shadow-2xl border border-gray-100 overflow-hidden">
              <div className="p-8 bg-blue-600 text-white">
                <p className="text-xs font-black uppercase tracking-widest opacity-80 mb-1">Starting Price</p>
                <h3 className="text-4xl font-black">{pkg.price}</h3>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageDetails;