import React, { useEffect, useState } from 'react';
import { getTracks } from './api/getTracks';
import './App.scss';

export function App() {
  const [topTracks, setTopTracks] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const requestedTracks = await getTracks();

      setTopTracks(requestedTracks.tracks.track);
    }

    fetchData();
  }, []);

  console.log(topTracks);

  return (
    <div>
      Last FM
    </div>
  );
}
