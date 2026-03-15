import React from 'react'
import './App.css'
import {Route , Routes} from 'react-router-dom'
import Home from './screen/HomeScreen.jsx'
import Footer from './component/footer.jsx'
import Header from './component/header.jsx'

import PackageGrid from './screen/PackageScreen.jsx'
import PackageDetails from './cards/PackageCard.jsx'
import HoneymoonScreen from './screen/HoneyMoonScreen.jsx'
import HoneymoonDetailsPage from './cards/HoneymoonCard.jsx'

import GroupTourDetails from './cards/GroupTourCard.jsx'
import GroupTours from './screen/TourGroupScreen.jsx'

const  App = () => {
  return (
   <div>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/packages" element={<PackageGrid />} />
      <Route path="/packages/:id" element={<PackageDetails />} />
      <Route path="/honeymoon" element={<HoneymoonScreen />} />
      <Route path="/honeymoon/:id" element={<HoneymoonDetailsPage />} />

      <Route path="/group-tours" element={<GroupTours />} />    
      <Route path="/group-tour/:id" element={<GroupTourDetails />} />
    </Routes>
    <Footer />
   </div>
  )
}

export default App
