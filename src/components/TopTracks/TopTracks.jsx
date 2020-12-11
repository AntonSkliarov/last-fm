import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TrackCard } from '../TrackCard/TrackCard';
import { fetchTopTracks } from '../../redux/actions/actions';

export function TopTracks() {
  const dispatch = useDispatch();
  const topTracks = useSelector(state => state.topTracks.tracks);

  useEffect(() => {
    dispatch(fetchTopTracks());
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
