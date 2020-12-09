import React, { useEffect, useState } from 'react';
import { getTracks } from './api/getTracks';
import './App.scss';
import { Navigation } from './components/Navigation';

export function App() {
  const [topTracks, setTopTracks] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const requestedTracks = await getTracks();

      setTopTracks(requestedTracks.tracks.track);
    }

    fetchData();
  }, []);

  return (
    <>
      <Navigation />
      <div>
        Last FM
        <div>
          {topTracks.map(track => (
            <p>{track.name}</p>
          ))}
        </div>
      </div>
    </>
  );
}
