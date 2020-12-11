import React from 'react';
import { useSelector } from 'react-redux';
import { ArtistTag } from '../ArtistTag';

export function ArtistInfo() {
  const artist = useSelector(state => state.artist.artist);
  const artistImage = useSelector(state => state.artist.artistImage);

  return (
    <div>
      <img src={artistImage['#text']} alt="" />
      <h3>{artist.name}</h3>
      <p>{artist.bio.content}</p>
      <p>Tags</p>
      {artist.tags.tag.map(tag => (
        <ArtistTag key={tag.name} tag={tag} />
      ))}
    </div>
  );
}
