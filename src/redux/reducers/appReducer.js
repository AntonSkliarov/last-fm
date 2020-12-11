import {
  SET_REQUEST_TOP_TRACKS_ERROR,
  SET_REQUEST_SEARCH_TRACK_ERROR,
  SET_REQUEST_ARTIST_ERROR,
} from '../constants/constants';

const initialState = {
  requestErrors: {
    topTracksError: false,
    searchTrackError: false,
    artistError: false,
  },
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_REQUEST_TOP_TRACKS_ERROR:
      return {
        ...state,
        requestErrors: {
          ...state.requestErrors,
          topTracksError: true,
        },
      };
    case SET_REQUEST_SEARCH_TRACK_ERROR:
      return {
        ...state,
        requestErrors: {
          ...state.requestErrors,
          searchTrackError: true,
        },
      };
    case SET_REQUEST_ARTIST_ERROR:
      return {
        ...state,
        requestErrors: {
          ...state.requestErrors,
          artistError: true,
        },
      };
    default:
      return state;
  }
};
