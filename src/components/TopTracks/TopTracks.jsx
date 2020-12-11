import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TrackCard } from '../TrackCard/TrackCard';
import { fetchTopTracks } from '../../redux/actions/topTracks';
import { RequestError } from '../RequestError/RequestError';

export function TopTracks() {
  const dispatch = useDispatch();
  const topTracks = useSelector(state => state.topTracks.tracks);
  const requestError = useSelector(state => (
    state.requestErrors.requestErrors.topTracksError
  ));

  useEffect(() => {
    dispatch(fetchTopTracks());
  }, []);

  if (requestError) {
    return (
      <>
        {requestError && <RequestError />}
      </>
    );
  }

  return (
    <div>
      <h2>TOP TRACKS:</h2>
      <ul className="is-flex is-flex-wrap-wrap">
        {topTracks.map(track => (
          <TrackCard track={track} key={track.id} />
        ))}
      </ul>
    </div>
  );
}
