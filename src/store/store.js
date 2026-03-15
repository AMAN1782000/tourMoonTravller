import {configureStore} from '@reduxjs/toolkit';
import honeymoonReducer from './slices/honeySlice.js';
import groupTourReducer from './slices/groupSlice.js';
import allPackagesReducer from './slices/AllPackage.js';
import bookingReducer from './slices/BookingSlice.js';

 const store = configureStore({
  reducer: {
    honeymoon: honeymoonReducer,
    groupTours: groupTourReducer,
    allPackages: allPackagesReducer,
    booking: bookingReducer,
  },
});

export default store;