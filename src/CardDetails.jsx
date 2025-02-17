import React from 'react';
import { Header } from './Header';
import { useLocation } from 'react-router-dom';
import './CardDetails.css';
import Navbar from './Navbar';


const CardDetails = () => {


  // var nav = document.getElementsByClassName("nav");
  // nav.classList("sticky")
  const location = useLocation();
  // Retrieve the passed travel data from the Link's state
  const { travelData } = location.state || {};

  if (!travelData) {
    return <p>No travel data available.</p>;
  }

  return (
    <main>
      <Navbar />
    <div className="card-details-container">
      <div className="blog-card">
        <img
          src={travelData.img}
          alt={travelData.title}
          className="blog-card-image"
        />
        <div className="blog-card-content">
          <h1 className="blog-card-title">{travelData.title}</h1>
          <div className="blog-card-meta">
            <span className="blog-card-location">
              <span role="img" aria-label="location">
                📍
              </span>{' '}
              <a
                href={travelData.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {travelData.location}
              </a>
            </span>
            <span className="blog-card-dates">

              {travelData.startDate} - {travelData.endDate}
            </span>
          </div>
          <p className="blog-card-description">{travelData.description}</p>
        </div>
      </div>
    </div>
    </main>

  );
};

export default CardDetails;
