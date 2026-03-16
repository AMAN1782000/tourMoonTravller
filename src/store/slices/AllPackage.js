import { createSlice } from '@reduxjs/toolkit';
import kheer from '../../resourse/kheer.avif';

const initialState = {
  items: [
    {
      id: 'kasol-kheerganga',
      title: 'Kasol & Kheerganga Trek',
      duration: '3N/4D',
      price: 'N/A',
      tag: 'Backpacker',
      image: kheer,
      category: 'Trekking',
      description: 'Experience the magic of Manali with a stay in a premium snow-view suite.',
      itinerary: [
        { day: 'Day 1', desc: 'Arrival in Manali & Candlelight Dinner.' },
        { day: 'Day 2', desc: 'Solang Valley & Rohtang Pass adventure.' },
        { day: 'Day 3', desc: 'Local sightseeing & shopping at Mall Road.' }
      ]
    },
    {
      id: 'rishikesh-rafting',
      title: 'Rishikesh Rafting Camp',
      duration: '2N/3D',
      price: 'N/A',
      tag: 'Weekend',
      image: 'https://images.unsplash.com/photo-1530713707191-910406609914',
      category: 'Adventure',
      description: 'Enjoy the thrill of rafting in the Ganges with expert guides.',
       itinerary: [
        { day: 'Day 1', desc: 'Arrival in Manali & Candlelight Dinner.' },
        { day: 'Day 2', desc: 'Solang Valley & Rohtang Pass adventure.' },
        { day: 'Day 3', desc: 'Local sightseeing & shopping at Mall Road.' }
      ]
    },
    {
      id: 'corbett-wildlife',
      title: 'Corbett Jungle Safari',
      duration: '2N/3D',
      price: 'N/A',
      tag: 'Wildlife',
      image: 'https://images.unsplash.com/photo-1581012733671-5085e64814c7',
      category: 'Nature',
      description: 'Explore the rich biodiversity of Corbett National Park with expert guides.',
      itinerary: [
        { day: 'Day 1', desc: 'Arrival in Corbett & Check-in at Resort.' },
        { day: 'Day 2', desc: 'Full Day Jungle Safari & Wildlife Photography.' },
        { day: 'Day 3', desc: 'Local Culture & Village Visit.' }
      ]
    }
  ],
  filteredItems: [],
  searchQuery: ''
};

const allPackagesSlice = createSlice({
  name: 'allPackages',
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
      state.filteredItems = state.items.filter(pkg => 
        pkg.title.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
    filterByCategory: (state, action) => {
      state.filteredItems = state.items.filter(pkg => pkg.category === action.payload);
    }
  }
});

export const { setSearchQuery, filterByCategory } = allPackagesSlice.actions;
export default allPackagesSlice.reducer;
