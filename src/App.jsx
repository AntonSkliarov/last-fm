import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.scss';
import { ArtistDetails } from './pages/ArtistDetails';
import { Navigation } from './components/Navigation';
import { NotFoundPage } from './pages/NotFoundPage';
import { TopTracks } from './pages/TopTracks';
import { TrackSearch } from './pages/TrackSearch';

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
          <Route path="/artist-details">
            <ArtistDetails />
          </Route>

          <Route path="/track-search">
            <TrackSearch />
          </Route>

          <Route path="/" exact>
            <TopTracks />
          </Route>

          <Redirect path="/home" to="/" />

          <NotFoundPage />
        </Switch>
      </div>
    </>
  );
}
