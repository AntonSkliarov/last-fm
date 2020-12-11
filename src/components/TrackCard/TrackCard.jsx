import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './TrackCard.scss';
import { getImage } from '../../helpers/functions';

export function TrackCard({ track }) {
  const trackImage = getImage(track.image);

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
            <div>
              <Link to={`/artist-details/${track.artist.name}`}>
                {track.artist.name}
              </Link>
            </div>
            <a
              href={track.artist.url}
              rel="noreferrer"
              target="_blank"
            >
              Artist on Last.fm
            </a>
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
