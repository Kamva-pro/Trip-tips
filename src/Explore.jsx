import React from "react";
import { Link } from "react-router-dom";
import Data from './Data.js';

const categories = [
    "Beaches",
    "Cities",
    "Culture",
    "History",
    "Nature"
];

const Explore = () => {
    return (
        <main className="explore-page">
            <h1>Explore Travel Destinations</h1>
            <div className="categories">
                {categories.map((category) => (
                    <div key={category} className="category-card">
                        <h2>{category}</h2>
                        <ul>
                            {Data
                                .filter((item) => item.category === category)
                                .map((item) => (
                                    <li key={item.id}>
                                        <Link to={`/details`} state={{ Data: item }}>
                                            {item.title} - {item.location}
                                        </Link>
                                    </li>
                                ))}
                        </ul>
                    </div>
                ))}
            </div>
        </main>
    );
};

export default Explore;
