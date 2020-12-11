import React from 'react';
import { NavLink } from 'react-router-dom';

export function Navigation() {
  return (
    <nav className=" mb-4">
      <div className="navbar-brand container">
        <NavLink
          className="navbar-item is-tab"
          to="/"
          activeClassName="is-active"
          exact
        >
          Top Tracks
        </NavLink>

        <NavLink
          className="navbar-item is-tab"
          to="/track-search"
          activeClassName="is-active"
        >
          Track Search
        </NavLink>

        <NavLink
          className="navbar-item is-tab"
          to="/artist-details"
          activeClassName="is-active"
        >
          Artist Details
        </NavLink>
      </div>
    </nav>
  );
}
