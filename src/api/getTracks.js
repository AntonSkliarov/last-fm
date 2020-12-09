import { BASE_URL, API_KEY } from './api';

const getTopTracksURL
  = `/?method=chart.gettoptracks&api_key=${API_KEY}&format=json`;

export async function getTracks() {
  const response = await fetch(`${BASE_URL}${getTopTracksURL}`);
  const result = await response.json();

  return result;
}
