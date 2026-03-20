import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    {
      id: 'spiti-summer-2026',
      title: 'Chalo Himachal-paradise',
      duration: '3N/4D',
      price: '₹5,499',
      groupSize: 'Adjustable',
      nextBatch: 'On demand',
      tag: 'Adventure',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1581791534721-e599df4417f7?auto=format&fit=crop&q=80&w=800',
      description: 'Traverse through the high-altitude, visiting ancient monasteries.',
      itinerary: [
       { day: "Day 1", desc: "Evening departure from Delhi to Manali (Overnight journey)." },
        { day: "Day 2", desc: "Check-in & Local Sightseeing: Old Manali cafes, Hidimba Temple, and Van Vihar." },
        { day: "Day 3", desc: "Snow Experience: Solang Valley, Atal Tunnel, and Sissu sightseeing." },
        { day: "Day 4", desc: "Kullu Valley: Visit Naggar Castle and adventure sports like Paragliding/Rafting." },
        { day: "Day 5", desc: "Nature & Spirituality: Kasol local sightseeing and Manikaran Sahib hot springs. Evening departure." },
        { day: "Day 6", desc: "Morning arrival in Delhi." }
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
      id: 'spiti-summer-2026',
      title: 'Spiti Valley: The Middle Land Expedition',
      duration: '6N/7D',
      price: '₹18,999',
      groupSize: '12-15 slots',
      nextBatch: 'Every saturday',
      tag: 'Adventure',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1581791534721-e599df4417f7?auto=format&fit=crop&q=80&w=800',
      description: 'Traverse through the high-altitude desert, visiting ancient monasteries like Key and Dhankar.',
      itinerary: [
        { day: 'Day 0', desc: 'Let the adventure begin,DELHI → SHIMLA' },
        { day: 'Day 1', desc: ': Arrival at Shimla,
                                SHIMLA → KALPA' },
        { day: 'Day 2', desc: 'Entering the Spiti Valley,
                                KALPA → NAKO' },
        { day: 'Day 3', desc: ': Arrival at Kaza via Dhankar
                                NAKO →TABO → KAZA.' },
        { day: 'Day 4', desc: ': Kaza : High Altitude Villages Tour
                                KAZA SIGHTSEEING I.' },
        { day: 'Day 5', desc: 'Kaza exploration
                                KAZA SIGHTSEEING II.' },
        { day: 'Day 6', desc: ': Downhill drive & Giu Monastery
                                KAZA → SANGLA.' },
        { day: 'Day 7', desc: ':Farewell to the kinnaur region
                                SANGLA → SHIMLA.' },
        { day: 'Day 8', desc: ':: The Adventure Concludes
                                SHIMLA → DELHI.' }
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
export default groupTourSlice.reducer;import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    {
      id: 'spiti-summer-2026',
      title: 'Chalo Himachal-paradise',
      duration: '3N/4D',
      price: '₹5,499',
      groupSize: 'Adjustable',
      nextBatch: 'On demand',
      tag: 'Adventure',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1581791534721-e599df4417f7?auto=format&fit=crop&q=80&w=800',
      description: 'Traverse through the high-altitude, visiting ancient monasteries.',
      itinerary: [
       { day: "Day 1", desc: "Evening departure from Delhi to Manali (Overnight journey)." },
        { day: "Day 2", desc: "Check-in & Local Sightseeing: Old Manali cafes, Hidimba Temple, and Van Vihar." },
        { day: "Day 3", desc: "Snow Experience: Solang Valley, Atal Tunnel, and Sissu sightseeing." },
        { day: "Day 4", desc: "Kullu Valley: Visit Naggar Castle and adventure sports like Paragliding/Rafting." },
        { day: "Day 5", desc: "Nature & Spirituality: Kasol local sightseeing and Manikaran Sahib hot springs. Evening departure." },
        { day: "Day 6", desc: "Morning arrival in Delhi." }
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
