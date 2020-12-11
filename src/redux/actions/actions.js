import { getArtist } from '../../api/getArtist';
import { getTopTracks } from '../../api/getTopTracks';
import { getTrack } from '../../api/getTrack';
import { getImage } from '../../helpers/functions';
import {
  FETCH_TOP_TRACKS,
  SET_ARTIST_IMAGE,
  FETCH_ARTIST,
  FETCH_SEARCHED_TRACK,
  CLEAR_TRACK_PREVIEW,
  SET_SEARCH_ERROR,
  CLEAR_SEARCH_ERROR,
} from '../constants/constants';

export function fetchTopTracks() {
  return async(dispatch) => {
    const response = await getTopTracks();
    const tracks = response.tracks.track;
    const tracksWithIds = tracks.map((track, i) => (
      {
        ...track,
        id: i,
      }
    ));

    dispatch({
      type: FETCH_TOP_TRACKS,
      payload: tracksWithIds,
    });
  };
}

export function fetchArtist({ artistName }) {
  return async(dispatch) => {
    const response = await getArtist(artistName);
    const { artist } = response;

    dispatch({
      type: FETCH_ARTIST,
      payload: artist,
    });
    dispatch(setArtistImage(artist.image));
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

export function fetchSearchedTrack(trackName) {
  return async(dispatch) => {
    const response = await getTrack(trackName);
    const tracks = response.results.trackmatches.track;

    if (tracks.length === 0) {
      dispatch(setSearchError());

      return;
    }

    dispatch({
      type: FETCH_SEARCHED_TRACK,
      payload: tracks,
    });
  };
}

export function clearSearchedTrack() {
  return (dispatch) => {
    dispatch({
      type: CLEAR_TRACK_PREVIEW,
    });
  };
}

export function setSearchError() {
  return (dispatch) => {
    dispatch({
      type: SET_SEARCH_ERROR,
    });
  };
}

export function clearSearchError() {
  return (dispatch) => {
    dispatch({
      type: CLEAR_SEARCH_ERROR,
    });
  };
}

// TODO: add fetch error
