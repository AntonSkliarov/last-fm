import { FETCH_TOP_TRACKS } from '../constants/constants';

const initialState = {
  tracks: [],
};

export const topTracksReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TOP_TRACKS:
      return {
        ...state,
        tracks: action.payload,
      };
    default:
      return state;
  }
};
