import { BASE_URL, API_KEY } from './api';

export async function getArtist(name) {
  const getArtistURL
    = `?method=artist.getinfo&artist=${name}&api_key=${API_KEY}&format=json`;

  const response = await fetch(`${BASE_URL}${getArtistURL}`);
  const result = await response.json();

  return result;
}
