import React from 'react';
import './App.css';
import Data from './Data.js';
import Card from './Card.jsx';
import { Link } from 'react-router-dom';
import { Header } from './Header.jsx';

const HomePage = () => {
  const travelData = Data.map((travel) => {
    return (
      <Link 
      className='no-underline'
        key={travel.id} 
        to="/details"
        state={{ travelData: travel }} 
      >
        <Card {...travel} />
      </Link>
    );
  });

  return (
    <main>
      <Header />
      {travelData}
    </main>
  );
}

export default HomePage;
