import { getTrack } from '../../api/getTrack';
import {
  FETCH_SEARCHED_TRACK,
  CLEAR_TRACK_PREVIEW,
  SET_SEARCH_ERROR,
  CLEAR_SEARCH_ERROR,
  SET_INPUT_ERROR,
  CLEAR_INPUT_ERROR,
  PAGE_NAMES,
} from '../constants/constants';
import { setRequestError } from './app';

export function fetchSearchedTrack(trackName) {
  return async(dispatch) => {
    try {
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
    } catch (error) {
      console.log('CONSOLE', error);
      dispatch(setRequestError(PAGE_NAMES.SEARCH_TRACK));
    }
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

export function setInputError() {
  return (dispatch) => {
    dispatch({
      type: SET_INPUT_ERROR,
    });

    setTimeout(() => {
      dispatch(clearInputError());
    }, 3000);
  };
}

export function clearInputError() {
  return (dispatch) => {
    dispatch({
      type: CLEAR_INPUT_ERROR,
    });
  };
}
