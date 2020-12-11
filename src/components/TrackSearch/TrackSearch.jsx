import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
import {
  fetchSearchedTrack,
  clearSearchedTrack,
  clearSearchError,
} from '../../redux/actions/actions';

export function TrackSearch() {
  const dispatch = useDispatch();
  const tracksForPreview = useSelector(state => state.tracksForPreview.tracks);
  const searchError = useSelector(state => state.tracksForPreview.searchError);
  const [query, setQuery] = useState('');

  const changeQuery = (event) => {
    dispatch(clearSearchError());
    setQuery(event.target.value);
    dispatch(clearSearchedTrack());
  };

  const trackSearch = (event) => {
    event.preventDefault();
    dispatch(fetchSearchedTrack(query));
  };

  return (
    <>
      <form className="find-track">
        <div className="field">
          <label className="label" htmlFor="track-title">
            Track title
          </label>

          <div className="control">
            <input
              className={classNames('input', {
                'is-danger': searchError,
              })}
              type="text"
              id="track-title"
              placeholder="Enter a track title to search"
              value={query}
              onChange={changeQuery}
              autoComplete="off"
            />
          </div>
          {searchError && (
            <p className="help is-danger">
              Can&apos;t find a track with such a title
            </p>
          )}
        </div>

        <div className="field is-grouped">
          <div className="control">
            <button
              type="submit"
              className="button is-light"
              onClick={trackSearch}
            >
              Find a track
            </button>
          </div>
        </div>
      </form>

      {!!tracksForPreview.length && (
        <div className="container">
          <h3 className="title">Tracks Matches:</h3>
          <table className="table">
            <thead className="thead">
              <tr>
                <th>Track Title</th>
                <th>Artist</th>
                <th>Link to Last.fm</th>
              </tr>
            </thead>
            <tbody>
              {tracksForPreview.map(track => (
                <tr key={track.url}>
                  <td>{track.name}</td>
                  <td>{track.artist}</td>
                  <td>
                    <a
                      href={track.url}
                      rel="noreferrer"
                      target="_blank"
                    >
                      Listen
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}
