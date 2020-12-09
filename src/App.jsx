import React, { useEffect, useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { getTracks } from './api/getTracks';
import './App.scss';
import { Navigation } from './components/Navigation';
import { TopTracks } from './components/TopTracks/TopTracks';

export function App() {
  const [topTracks, setTopTracks] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const requestedTracks = await getTracks();

      const songs = requestedTracks.tracks.track;

      const tracksWithIds = songs.map((song, i) => (
        {
          ...song,
          id: i,
        }
      ));

      setTopTracks(tracksWithIds);
    }

    fetchData();
  }, []);

  return (
    <>
      <Navigation />
      <div className="container">
        <Switch>
          <Route path="/artist-details">
            <h2>Artist Details</h2>
          </Route>

          <Route path="/track-search">
            <h2>Track Search</h2>
          </Route>

          <Route path="/" exact>
            <TopTracks tracks={topTracks} />
          </Route>

          <Redirect path="/home" to="/" />
        </Switch>
      </div>
    </>
  );
}
