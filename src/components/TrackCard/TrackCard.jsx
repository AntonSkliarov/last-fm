import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
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
            <Link to={`/artist-details/${track.artist.name}`}>
              {track.artist.name}
            </Link>
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
