import { combineReducers } from 'redux';
import { appReducer } from './appReducer';
import { artistReducer } from './artistReducer';
import { topTracksReducer } from './topTracksReducer';
import { trackSearchReducer } from './trackSearchReducer';

export const rootReducer = combineReducers({
  topTracks: topTracksReducer,
  artist: artistReducer,
  tracksForPreview: trackSearchReducer,
  requestErrors: appReducer,
});
