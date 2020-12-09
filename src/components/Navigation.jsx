import React from 'react';
import { Link } from 'react-router-dom';

export function Navigation() {
  return (
    <nav className="navbar">
      <div className="navbar-brand container">
        <Link className="navbar-item" to="/">
          Top Tracks
        </Link>
        <Link className="navbar-item" to="/track-search">
          Track Search
        </Link>
        <Link className="navbar-item" to="/artist-details">
          Artist Details
        </Link>
      </div>
    </nav>
  );
}
