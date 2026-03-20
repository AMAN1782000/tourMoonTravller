import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    {
      id: 'himachal-paradise-2026',
      title: 'Chalo Himachal-paradise',
      duration: '5N/6D',
      price: '₹5,499',
      groupSize: 'Adjustable',
      nextBatch: 'On demand',
      tag: 'Adventure',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1581791534721-e599df4417f7?auto=format&fit=crop&q=80&w=800',
      description: 'Traverse through the high-altitude, visiting ancient monasteries.',
      batchHighlights: [
        'Professional Captain', 
        'Verified Community', 
        'Premium Transportation', 
        'Shared Accomodation'
      ],
      itinerary: [
        { day: "Day 1", desc: "Evening departure from Delhi to Manali." },
        { day: "Day 2", desc: "Check-in & Local Sightseeing: Old Manali cafes." },
        { day: "Day 3", desc: "Snow Experience: Solang Valley & Atal Tunnel." },
        { day: "Day 4", desc: "Kullu Valley: Naggar Castle & Rafting." },
        { day: "Day 5", desc: "Nature & Spirituality: Kasol & Manikaran." },
        { day: "Day 6", desc: "Morning arrival in Delhi." }
      ]
    },
    {
      id: 'kashmir-great-lakes-2026',
      title: 'Kashmir Great Lakes Trek',
      duration: '6N/7D',
      price: '₹15,500',
      groupSize: '10 slots',
      nextBatch: 'July 10, 2026',
      tag: 'Trekking',
      rating: 5.0,
      image: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&q=80&w=800',
      description: 'The prettiest trek in India. Witness 7 alpine lakes.',
      batchHighlights: [
        'Professional Captain', 
        'Verified Community', 
        'Premium Transportation', 
        'Shared Accomodation'
      ],
      itinerary: [
        { day: 'Day 1', desc: 'Arrival in Srinagar & Houseboat check-in.' },
        { day: 'Day 2', desc: 'Srinagar to Sonamarg.' },
        { day: 'Day 3', desc: 'Trek to Nichnai via Sheshnag.' }
      ]
    },
    {
      id: 'spiti-expedition-2026',
      title: 'Spiti Valley: The Middle Land Expedition',
      duration: '8N/9D',
      price: '₹18,999',
      groupSize: '12-15 slots',
      nextBatch: 'Every Saturday',
      tag: 'Adventure',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1581791534721-e599df4417f7?auto=format&fit=crop&q=80&w=800',
      description: 'Traverse through the high-altitude desert.',
      batchHighlights: [
        'Professional Captain', 
        'Verified Community', 
        'Premium Transportation', 
        'Shared Accomodation'
      ],
      itinerary: [
        { day: 'Day 0', desc: 'DELHI → SHIMLA' },
        { day: 'Day 1', desc: 'SHIMLA → KALPA' },
        { day: 'Day 2', desc: 'KALPA → NAKO' },
        { day: 'Day 3', desc: 'NAKO → TABO → KAZA' },
        { day: 'Day 4', desc: 'KAZA SIGHTSEEING I' },
        { day: 'Day 5', desc: 'KAZA SIGHTSEEING II' },
        { day: 'Day 6', desc: 'KAZA → SANGLA' },
        { day: 'Day 7', desc: 'SANGLA → SHIMLA' },
        { day: 'Day 8', desc: 'SHIMLA → DELHI' }
      ]
    }
  ],
  selectedGroupPackage: null
};

const groupTourSlice = createSlice({
  name: 'groupTours',
  initialState,
  reducers: {
    setSelectedGroupTour: (state, action) => {
      state.selectedGroupPackage = action.payload;
    },
    clearSelectedTour: (state) => {
      state.selectedGroupPackage = null;
    }
  }
});

export const { setSelectedGroupTour, clearSelectedTour } = groupTourSlice.actions;
export default groupTourSlice.reducer;
