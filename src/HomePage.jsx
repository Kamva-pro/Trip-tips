import React from 'react'
import Header from './Header'
import './App.css';
import Data from './Data.js';
import Card from './Card.jsx';
import Header from './Header';

const HomePage = () => {
    const travelData = Data.map(travel => {
        return (
            <Card 
            {...travel}/>
        )
        })
  return (
    
    <main>
        <Header/>
        {travelData}

    </main>

  )
}

export default HomePage