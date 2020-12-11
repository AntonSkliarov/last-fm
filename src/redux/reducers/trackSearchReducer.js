import {
  FETCH_SEARCHED_TRACK,
  CLEAR_TRACK_PREVIEW,
  SET_SEARCH_ERROR,
  CLEAR_SEARCH_ERROR,
} from '../constants/constants';

const initialState = {
  tracks: [],
  searchError: false,
};

export const trackSearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SEARCHED_TRACK:
      return {
        ...state,
        tracks: action.payload,
      };
    case CLEAR_TRACK_PREVIEW:
      return {
        ...state,
        tracks: [],
      };
    case SET_SEARCH_ERROR:
      return {
        ...state,
        searchError: true,
      };
    case CLEAR_SEARCH_ERROR:
      return {
        ...state,
        searchError: false,
      };
    default:
      return state;
  }
};
