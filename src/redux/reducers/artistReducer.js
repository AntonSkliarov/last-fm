import { FETCH_ARTIST, SET_ARTIST_IMAGE } from '../constants/constants';

const initialState = {
  artist: [],
  artistImage: {},
};

export const artistReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ARTIST:
      return {
        ...state,
        artist: action.payload,
      };
    case SET_ARTIST_IMAGE:
      return {
        ...state,
        artistImage: action.payload,
      };
    default:
      return state;
  }
};
