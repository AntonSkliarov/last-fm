import React from 'react';
import PropTypes from 'prop-types';
import './TrackCard.scss';

export function TrackCard({ track }) {
  let trackImage = {};

  track.image.forEach((picture) => {
    if (picture.size === 'medium') {
      trackImage = picture;
    }
  });

  return (
    <div className="track-card card">
      <li>
        <div className="card-content">
          <img
            className="image is-64x64"
            src={trackImage['#text']}
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
  );
}

TrackCard.propTypes = {
  track: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.arrayOf(PropTypes.shape({
      '#text': PropTypes.string.isRequired,
      size: PropTypes.string.isRequired,
    }).isRequired).isRequired,
    artist: PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
