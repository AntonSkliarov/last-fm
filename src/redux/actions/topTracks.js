import { getTopTracks } from '../../api/getTopTracks';
import { FETCH_TOP_TRACKS, PAGE_NAMES } from '../constants/constants';
import { setRequestError } from './app';

export function fetchTopTracks() {
  return async(dispatch) => {
    try {
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
    } catch (error) {
      dispatch(setRequestError(PAGE_NAMES.TOP_TRACKS));
    }
  };
}
