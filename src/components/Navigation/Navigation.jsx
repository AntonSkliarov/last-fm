import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.scss';

export const Navigation = () => (
  <nav className=" mb-4">
    <div className="navbar-brand container is-fluid">
      <NavLink
        className="navbar-item is-tab has-text-weight-bold"
        to="/"
        activeClassName="is-active"
        exact
      >
        Top Tracks
      </NavLink>

      <NavLink
        className="navbar-item is-tab has-text-weight-bold"
        to="/track-search"
        activeClassName="is-active"
      >
        Track Search
      </NavLink>

      <NavLink
        className="navbar-item is-tab has-text-weight-bold"
        to="/artist-details"
        activeClassName="is-active"
      >
        Artist Details
      </NavLink>
    </div>
  </nav>
);
