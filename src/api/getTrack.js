import { BASE_URL, API_KEY } from './api';

export async function getTrack(title) {
  const getTrackURL
    = `?method=track.search&track=${title}&api_key=${API_KEY}&format=json`;

  const response = await fetch(`${BASE_URL}${getTrackURL}`);
  const result = await response.json();

  return result;
}
