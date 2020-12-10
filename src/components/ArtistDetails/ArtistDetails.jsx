import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getArtist } from '../../api/getArtist';
import { ArtistTag } from '../ArtistTag';

export function ArtistDetails({ match }) {
  const [artist, setArtist] = useState({});
  const [artistImage, setArtistImage] = useState('');

  useEffect(() => {
    async function fetchData() {
      const { artistName } = match.params;
      const requestedArtist = await getArtist(artistName);

      setArtist(requestedArtist.artist);

      requestedArtist.artist.image.forEach((picture) => {
        if (picture.size === 'extralarge') {
          setArtistImage(picture);
        }
      });
    }

    fetchData();
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
          {console.log(artist)}
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
