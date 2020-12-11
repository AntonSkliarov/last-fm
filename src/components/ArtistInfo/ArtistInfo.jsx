import React from 'react';
import { useSelector } from 'react-redux';
import { ArtistTag } from '../ArtistTag';
import { formatDescription } from '../../helpers/functions';
import './ArtistInfo.scss';

export function ArtistInfo() {
  const artist = useSelector(state => state.artist.artist);
  const artistImage = useSelector(state => state.artist.artistImage);

  const artistBio = formatDescription(artist.bio.content);

  return (
    <div className="artist-info">
      <img
        className="subtitle mb-4"
        src={artistImage['#text']}
        alt={artist.name}
      />
      <h2 className="subtitle mb-3 has-text-weight-semibold">{artist.name}</h2>
      <p className="mb-4">{artistBio}</p>
      {artist.tags.tag.map(tag => (
        <ArtistTag key={tag.name} tag={tag} />
      ))}
    </div>
  );
}
