import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Hotels from './components/Hotels'
import AddComplainPage from './components/AddComplainPage';
import AddReviewPage from './components/AddReview';


import './index.css'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Hotels />
      <AddComplainPage />
      <AddReviewPage />
    </div>
  );
}

export default App;
