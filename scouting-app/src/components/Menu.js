import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <div>
      <Link to="/setup">
        <button>Setup</button>
      </Link>
      <Link to="/team-info">
        <button>Team Info</button>
      </Link>
      <Link to="/auton">
        <button>Auton</button>
      </Link>
      <Link to="/teleop">
        <button>Teleop</button>
      </Link>
      <button onClick={() => {
        if ('serviceWorker' in navigator) {
          caches.keys().then(function (cacheNames) {
            cacheNames.forEach(function (cacheName) {
              caches.delete(cacheName);
            });
          });
        }
        window.location.reload(true);
      }}>Update</button>
    </div>
  );
};

export default Menu;