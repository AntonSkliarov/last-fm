import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { ArtistTag } from '../ArtistTag';
import { fetchArtist } from '../../redux/actions/actions';

export function ArtistDetails({ match }) {
  const dispatch = useDispatch();
  const artist = useSelector(state => state.artist.artist);
  const artistImage = useSelector(state => state.artist.artistImage);

  useEffect(() => {
    dispatch(fetchArtist(match.params));
  }, [match.params.artistName]);

  return (
    <>
      {!!Object.keys(artist).length && (
        <div>
          <img src={artistImage['#text']} alt="" />
          <h3>{artist.name}</h3>
          <p>{artist.bio.content}</p>
          <p>Tags</p>
          {artist.tags.tag.map(tag => (
            <ArtistTag key={tag.name} tag={tag} />
          ))}
        </div>
      )}
    </>
  );
}

ArtistDetails.propTypes = PropTypes.shape({
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
}).isRequired;
