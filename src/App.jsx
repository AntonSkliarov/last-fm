import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.scss';
import { ArtistDetails } from './components/ArtistDetails';
import { Navigation } from './components/Navigation';
import { TopTracks } from './components/TopTracks/TopTracks';

export function App() {
  return (
    <>
      <Navigation />
      <div className="container">
        <Switch>
          <Route
            path="/artist-details/:artistName"
            component={ArtistDetails}
          />

          <Route path="/track-search">
            <h2>Track Search</h2>
          </Route>

          <Route path="/" exact>
            <TopTracks />
          </Route>

          <Redirect path="/home" to="/" />
        </Switch>
      </div>
    </>
  );
}
