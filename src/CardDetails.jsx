// CardDetails.jsx
import React from 'react';
import { Header } from './Header';
import { useLocation } from 'react-router-dom';
import './CardDetails.css';
import Navbar from './Navbar';

const CardDetails = () => {
  const location = useLocation();
  const { travelData } = location.state || {};

  if (!travelData) {
    return <p>No travel data available.</p>;
  }

  return (
    <main>
      <Navbar defaultSticky />
      {/* Optionally include a header if needed */}
      {/* <Header /> */}
      <div className="card-details-container">
        <div className="blog-post-content">
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
                  <span role="img" aria-label="location">📍</span>{' '}
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
              <p className="blog-card-description">
                {travelData.description}
              </p>
            </div>
          </div>
        </div>
        <aside className="sidebar">
          <div className="sidebar-section">
            <h2>About This Blog</h2>
            <p>
              Welcome to Trip Tips! We share travel adventures and tips to inspire your next getaway.
              Join us on our journey as we explore the best destinations around the world.
            </p>
          </div>
          <div className="sidebar-section">
            <h2>Recent Posts</h2>
            <ul>
              <li><a href="#">Island Hopping in the Caribbean</a></li>
              <li><a href="#">Exploring the Alps</a></li>
              <li><a href="#">Urban Escapes</a></li>
              <li><a href="#">A Taste of Asia</a></li>
            </ul>
          </div>
          <div className="sidebar-section">
            <h2>Categories</h2>
            <ul>
              <li><a href="#">Beaches</a></li>
              <li><a href="#">Mountains</a></li>
              <li><a href="#">Cities</a></li>
              <li><a href="#">Culture</a></li>
            </ul>
          </div>
        </aside>
      </div>
    </main>
  );
};

export default CardDetails;
