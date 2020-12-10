import React, { useEffect, useState } from 'react';
import { TrackCard } from '../TrackCard/TrackCard';
import { getTracks } from '../../api/getTracks';

export function TopTracks() {
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
    <div>
      <h2>TOP TRACKS PAGE</h2>
      <ul className="is-flex is-flex-wrap-wrap">
        {topTracks.map(track => (
          <TrackCard track={track} key={track.id} />
        ))}
      </ul>
    </div>
  );
}
