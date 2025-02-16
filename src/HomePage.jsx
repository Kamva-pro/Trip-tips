import React from 'react'
import Header from './Header'
import './App.css';
import Data from './Data.js';
import Card from './Card.jsx';
import Header from './Header';
import { Link } from 'react-router-dom';

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
        <Link to={'/details'}>
        {travelData}
        </Link>

    </main>

  )
}

export default HomePage