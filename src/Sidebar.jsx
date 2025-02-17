import { Link } from 'react-router-dom';
import Data from './Data.js';

const Sidebar = () => {
  return (
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
          {Data.slice(0, 4).map((travel) => (
            <li key={travel.id}>
              <Link to="/details" state={{ travelData: travel }}>
                {travel.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="sidebar-section">
    <h2>Categories</h2>
    <ul>
        {categories.map((category) => (
            <li key={category}>
                <Link to={`/explore/${category.toLowerCase()}`}>{category}</Link>
            </li>
        ))}
    </ul>
</div>

    </aside>
  );
};

export default Sidebar;
