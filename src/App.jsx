import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.scss';
import { ArtistDetails } from './components/ArtistDetails';
import { Navigation } from './components/Navigation';
import { NotFoundPage } from './components/NotFoundPage/NotFoundPage';
import { TopTracks } from './components/TopTracks/TopTracks';
import { TrackSearch } from './components/TrackSearch/TrackSearch';

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
