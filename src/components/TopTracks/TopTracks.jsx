import React from 'react';
import PropTypes from 'prop-types';
import { TrackCard } from '../TrackCard/TrackCard';

export function TopTracks({ tracks }) {
  return (
    <div>
      <h2>TOP TRACKS PAGE</h2>
      <ul className="is-flex is-flex-wrap-wrap">
        {tracks.map(track => (
          <TrackCard track={track} key={track.id} />
        ))}
      </ul>
    </div>
  );
}

TopTracks.propTypes = {
  tracks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};
