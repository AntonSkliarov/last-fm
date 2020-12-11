import {
  SET_REQUEST_TOP_TRACKS_ERROR,
  SET_REQUEST_SEARCH_TRACK_ERROR,
  SET_REQUEST_ARTIST_ERROR,
  PAGE_NAMES,
  CLEAR_REQUEST_SEARCH_TRACK_ERROR,
} from '../constants/constants';

export function setRequestError(pageName) {
  return (dispatch) => {
    switch (pageName) {
      case PAGE_NAMES.TOP_TRACKS:
        dispatch({
          type: SET_REQUEST_TOP_TRACKS_ERROR,
        });
        break;

      case PAGE_NAMES.SEARCH_TRACK:
        dispatch({
          type: SET_REQUEST_SEARCH_TRACK_ERROR,
        });
        break;

      case PAGE_NAMES.ARTIST:
        dispatch({
          type: SET_REQUEST_ARTIST_ERROR,
        });
        break;

      default:
    }
  };
}

export function clearReuestSearchTrackError() {
  return (dispatch) => {
    dispatch({
      type: CLEAR_REQUEST_SEARCH_TRACK_ERROR,
    });
  };
}
