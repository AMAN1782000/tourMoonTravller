import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // Details of the package being booked
  activeEnquiry: {
    packageId: null,
    packageName: '',
    packageType: '', // e.g., 'Honeymoon' or 'Group'
    price: '',
  },
  // User's personal details
  userDetails: {
    name: '',
    phone: '',
    email: '',
    address: '',
    travelDate: '',
    adults: 2,
    children: 0,
  },
  status: 'idle', // 'idle' | 'submitting' | 'success'
};

const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    // Call this when user clicks "Book Now" on any card
    initiateBooking: (state, action) => {
      const { id, title, tag, price } = action.payload;
      state.activeEnquiry = {
        packageId: id,
        packageName: title,
        packageType: tag,
        price: price,
      };
      state.status = 'idle';
    },
    
    // Call this as the user types in the form
    updateUserDetails: (state, action) => {
      state.userDetails = { ...state.userDetails, ...action.payload };
    },

    // Call this when WhatsApp is opened
    setBookingStatus: (state, action) => {
      state.status = action.payload;
    },

    resetBooking: () => initialState,
  },
});

export const { initiateBooking, updateUserDetails, setBookingStatus, resetBooking } = bookingSlice.actions;
export default bookingSlice.reducer;