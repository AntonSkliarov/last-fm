import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { ArtistTag } from '../../components/ArtistTag';
import { fetchArtist } from '../../redux/actions/artist';
import { RequestError } from '../../components/RequestError/RequestError';

export function ArtistDetails({ match }) {
  const dispatch = useDispatch();
  const artist = useSelector(state => state.artist.artist);
  const artistImage = useSelector(state => state.artist.artistImage);
  const requestError = useSelector(state => (
    state.requestErrors.requestErrors.artistError
  ));

  if (match !== undefined) {
    useEffect(() => {
      dispatch(fetchArtist(match.params));
    }, [match.params.artistName]);
  }

  if (requestError) {
    return (
      <RequestError />
    );
  }

  return (
    <>
      {artist
        ? (
          <div>
            <img src={artistImage['#text']} alt="" />
            <h3>{artist.name}</h3>
            <p>{artist.bio.content}</p>
            <p>Tags</p>
            {artist.tags.tag.map(tag => (
              <ArtistTag key={tag.name} tag={tag} />
            ))}
          </div>
        )
        : (
          <div className="notification is-info">
            Hey, wanna see some? Just click on the artist`s
            name on the Top Tracks Page!
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
