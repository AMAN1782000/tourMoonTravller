import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    {
      id: 'spiti-summer-2024',
      title: 'Spiti Valley: The Middle Land Expedition',
      duration: '7N/8D',
      price: '₹18,999',
      groupSize: '12-15 slots',
      nextBatch: 'June 15, 2024',
      tag: 'Adventure',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1581791534721-e599df4417f7?auto=format&fit=crop&q=80&w=800',
      description: 'Traverse through the high-altitude desert, visiting ancient monasteries like Key and Dhankar.',
      itinerary: [
        { day: 'Day 1', desc: 'Arrival in Spiti & Check-in at Resort.' },
        { day: 'Day 2', desc: 'Local sightseeing & cultural visit.' },
        { day: 'Day 3', desc: 'Visit to Key Monastery & Dhankar Monastery.' }
      ]

    },
    {
      id: 'kashmir-great-lakes',
      title: 'Kashmir Great Lakes Trek',
      duration: '6N/7D',
      price: '₹15,500',
      groupSize: '10 slots',
      nextBatch: 'July 10, 2024',
      tag: 'Trekking',
      rating: 5.0,
      image: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&q=80&w=800',
      description: 'The prettiest trek in India. Witness 7 alpine lakes nestled in the heart of the Himalayas.',
      itinerary: [
        { day: 'Day 1', desc: 'Arrival in Kashmir & Check-in at Resort.' },
        { day: 'Day 2', desc: 'Local sightseeing & cultural visit.' },
        { day: 'Day 3', desc: 'Visit to Sheshnag & Chandanwadi Lakes.' }
      ]
    },
    {
      id: 'spiti-summer-2024',
      title: 'Spiti Valley: The Middle Land Expedition',
      duration: '7N/8D',
      price: '₹18,999',
      groupSize: '12-15 slots',
      nextBatch: 'June 15, 2024',
      tag: 'Adventure',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1581791534721-e599df4417f7?auto=format&fit=crop&q=80&w=800',
      description: 'Traverse through the high-altitude desert, visiting ancient monasteries like Key and Dhankar.',
      itinerary: [
        { day: 'Day 1', desc: 'Arrival in Spiti & Check-in at Resort.' },
        { day: 'Day 2', desc: 'Local sightseeing & cultural visit.' },
        { day: 'Day 3', desc: 'Visit to Key Monastery & Dhankar Monastery.' }
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
    }
  }
});

export const { setSelectedGroupTour } = groupTourSlice.actions;
export default groupTourSlice.reducer;
