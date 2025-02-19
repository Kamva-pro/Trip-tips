import React from 'react';
import '../App.css';
import  data  from '../Data.js';
import Card from '../components/Card.jsx';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header.jsx';

const HomePage = () => {
  const travelData = data.map((travel) => {
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
