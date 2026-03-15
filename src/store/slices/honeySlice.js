import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    // real data 
    {
      id: "moon-traveller-manali",
      title: "Romantic Manali Retreat",
      duration: "4N/5D",
      price: "Price on Request",
      tag: "Honeymoon Special",
      image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&q=80&w=1000",
      description: "A curated 4-day journey for couples featuring the best of Manali, from the spiritual Hadimba Temple to the snowy heights of Solang Valley and Atal Tunnel.",
      perks: [
        "Flower Decorated Bed & Honeymoon Cake",
        "Candle Light Dinner & Kesar Milk",
        "MAP Plan (Breakfast & Dinner Buffet)",
        "Pvt Car for Local Sightseeing"
      ],
      itinerary: [
        {
          "day": "Day 1",
          "desc": "Departure from Delhi via Volvo (6:30 PM) for an overnight journey to the mountains."
        },
        {
          day: "Day 2",
          desc: "Arrival in Manali, check-in, and local tour: Hadimba Temple, Manali Gompa, Tibetan Monastery, and shopping at Mall Road."
        },
        {
          day: "Day 3",
          desc: "Full day excursion to Solang Valley, Atal Tunnel, and Sissu. Experience snow adventure sports like paragliding and zorbing."
        },
        {
          day: "Day 4",
          desc: "Explore Kullu: Visit Vaishno Devi Mata Mandir, National Park, and Naggar Castle. Evening departure for Delhi."
        },
        {
          day: "Day 5",
          desc: "Early morning arrival at Delhi. Tour ends with sweet memories."
        }
  ]

    },
    {
    id: "manali-honeymoon-starter",
    title: "Manali Romantic Escape",
    duration: "4N/5D",
    price: "₹6,999",
    tag: "Honeymoon Package 1",
    image: "https://images.unsplash.com/photo-1621532024806-258046b0a944?auto=format&fit=crop&q=80&w=1000",
    description: "A budget-friendly yet romantic getaway to the heart of the Himalayas, featuring essential honeymoon treats and iconic Manali sightseeing.",
    perks: [
      "Flower Bed Decoration",
      "Candle Light Dinner & Cake",
      "2 Glasses of Kesar Milk",
      "MAP Plan (2 Breakfast & 2 Dinner)"
    ],
    itinerary: [
      { day: "Day 1", desc: "Evening departure from Delhi for an overnight journey to Manali." },
      { day: "Day 2", desc: "Arrival & Local Sightseeing: Hidimba Temple, Vashisht Temple, Jogini Waterfall, Van Vihar, Old Manali Cafes, and Mall Road." },
      { day: "Day 3", desc: "Snow Exploration: Visit Solang Valley, Atal Tunnel, and Sissu. Enjoy snow activities at own cost." },
      { day: "Day 4", desc: "Kullu Adventure: Visit Vaishno Devi Temple, National Park, and Naggar Castle. Optional Paragliding/Rafting. Evening departure for Delhi." },
      { day: "Day 5", desc: "Morning arrival in Delhi. Tour ends with sweet memories." }
    ]
    },
    {
      id: "kasol-manikaran-honeymoon",
      title: "Kasol & Manikaran Romantic Retreat",
      duration: "5N/6D",
      price: "₹7,999",
      tag: "Extended Nature Tour",
      image: "https://images.unsplash.com/photo-1605649440416-43f94262f602?auto=format&fit=crop&q=80&w=1000",
      description: "An extended romantic journey covering the best of Manali plus the serene vibes of Kasol and the spiritual warmth of Manikaran hot springs.",
      perks: [
        "Kasol & Manikaran Excursion",
        "Full Honeymoon Inclusions (Cake/Decor/Dinner)",
        "MAP Meal Plan (3 Breakfast & 3 Dinner)",
        "Private Car for Sightseeing"
      ],
      itinerary: [
        { day: "Day 1", desc: "Evening departure from Delhi to Manali (Overnight journey)." },
        { day: "Day 2", desc: "Check-in & Local Sightseeing: Old Manali cafes, Hidimba Temple, and Van Vihar." },
        { day: "Day 3", desc: "Snow Experience: Solang Valley, Atal Tunnel, and Sissu sightseeing." },
        { day: "Day 4", desc: "Kullu Valley: Visit Naggar Castle and adventure sports like Paragliding/Rafting." },
        { day: "Day 5", desc: "Nature & Spirituality: Kasol local sightseeing and Manikaran Sahib hot springs. Evening departure." },
        { day: "Day 6", desc: "Morning arrival in Delhi." }
      ]
    }
  ],
  selectedPackage: null,
};

const honeymoonSlice = createSlice({
  name: 'honeymoon',
  initialState,
  reducers: {
    setSelectedHoneymoon: (state, action) => {
      state.selectedPackage = action.payload;
    },
    clearSelection: (state) => {
      state.selectedPackage = null;
    }
  }
});

export const { setSelectedHoneymoon, clearSelection } = honeymoonSlice.actions;
export default honeymoonSlice.reducer;