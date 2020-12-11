import React, { useState } from 'react';
import classNames from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import {
  clearSearchError,
  clearInputError,
  clearSearchedTrack,
  setInputError,
  fetchSearchedTrack,
} from '../../redux/actions/trackSearch';
import { clearReuestSearchTrackError } from '../../redux/actions/app';
import './SearchForm.scss';

export function SearchForm() {
  const dispatch = useDispatch();
  const searchError = useSelector(state => state.tracksForPreview.searchError);
  const inputError = useSelector(state => (
    state.tracksForPreview.inputError
  ));
  const [query, setQuery] = useState('');

  const changeQuery = (event) => {
    dispatch(clearSearchError());
    dispatch(clearInputError());
    setQuery(event.target.value);
    dispatch(clearSearchedTrack());
  };

  const trackSearch = (event) => {
    event.preventDefault();
    if (query.trim().length === 0) {
      dispatch(setInputError());

      return;
    }

    dispatch(clearReuestSearchTrackError());
    dispatch(fetchSearchedTrack(query));
  };

  return (
    <form className="find-track mb-4">
      <div className="field">
        <label className="label" htmlFor="track-title">
          Track title
        </label>

        <div className="control">
          <input
            className={classNames('input ', {
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

        {inputError && (
          <p className="help is-danger">
            Search field cannot be empty
          </p>
        )}

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
  );
}
