import React from 'react';
import PropTypes from 'prop-types';

export function TopTracks({ tracks }) {
  return (
    <div className="container">
      <h2>TOP TRACKS PAGE</h2>
      <ul>
        {tracks.map(track => (
          <div className="card">
            <li key={track.id}>
              <div className="card-content">
                <img
                  className="image is-64x64"
                  src={track.image[1]['#text']}
                  alt={`${track.artist.name} Album Cover`}
                />

                <div>
                  <h3>{track.name}</h3>
                  <h3>{track.artist.name}</h3>
                  <a href={track.artist.url}>Artist on Last FM</a>
                </div>
              </div>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}

TopTracks.propTypes = {
  tracks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
