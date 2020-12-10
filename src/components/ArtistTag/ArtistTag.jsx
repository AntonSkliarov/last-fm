import React from 'react';
import PropTypes from 'prop-types';

export const ArtistTag = ({ tag }) => (
  <a
    href={tag.url}
    target="_blank"
    rel="noreferrer"
  >
    {tag.name}
  </a>
);

ArtistTag.propTypes = {
  tag: PropTypes.shape({
    url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};
