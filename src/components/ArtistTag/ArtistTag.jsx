import React from 'react';
import PropTypes from 'prop-types';

export const ArtistTag = ({ tag }) => (
  <button type="button" className="button is-link is-light is-small mr-2">
    <a
      href={tag.url}
      target="_blank"
      rel="noreferrer"
    >
      {tag.name}
    </a>
  </button>
);

ArtistTag.propTypes = {
  tag: PropTypes.shape({
    url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};
