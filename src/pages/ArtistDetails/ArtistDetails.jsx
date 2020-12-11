import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { fetchArtist } from '../../redux/actions/artist';
import { RequestError } from '../../components/RequestError';
import { ArtistInfo } from '../../components/ArtistInfo';

export function ArtistDetails({ match }) {
  const dispatch = useDispatch();
  const artist = useSelector(state => state.artist.artist);
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
        ? <ArtistInfo />
        : (
          <div className="notification is-info">
            Hey, wanna see some? Just click on the artist&apos;s
            name on the Top Tracks Page!
          </div>
        )}
    </>
  );
}

ArtistDetails.propTypes = PropTypes.shape({
  match: PropTypes.shape({
    params: PropTypes.shape({
      artistName: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
}).isRequired;
