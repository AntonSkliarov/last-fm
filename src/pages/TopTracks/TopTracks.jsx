import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TrackCard } from '../../components/TrackCard';
import { fetchTopTracks } from '../../redux/actions/topTracks';
import { RequestError } from '../../components/RequestError';

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
      <RequestError />
    );
  }

  return (
    <div>
      <ul className="is-flex is-flex-wrap-wrap is-justify-content-center">
        {topTracks.map(track => (
          <TrackCard track={track} key={track.id} />
        ))}
      </ul>
    </div>
  );
}
