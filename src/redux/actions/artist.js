import { getArtist } from '../../api/getArtist';
import { getImage } from '../../helpers/functions';
import {
  SET_ARTIST_IMAGE,
  FETCH_ARTIST,
  PAGE_NAMES,
} from '../constants/constants';
import { setRequestError } from './app';

export function fetchArtist({ artistName }) {
  return async(dispatch) => {
    try {
      const response = await getArtist(artistName);
      const { artist } = response;

      dispatch({
        type: FETCH_ARTIST,
        payload: artist,
      });
      dispatch(setArtistImage(artist.image));
    } catch (error) {
      dispatch(setRequestError(PAGE_NAMES.ARTIST));
    }
  };
}

export function setArtistImage(image) {
  return (dispatch) => {
    const imageType = 'artist';
    const imageForArtistPage = getImage(image, imageType);

    dispatch({
      type: SET_ARTIST_IMAGE,
      payload: imageForArtistPage,
    });
  };
}
