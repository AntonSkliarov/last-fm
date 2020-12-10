import React, { useState } from 'react';
import classNames from 'classnames';
import { getTrack } from '../../api/getTrack';

export function TrackSearch() {
  const [query, setQuery] = useState('');
  const [tracksForPreview, setTracksForPreview] = useState();
  const [searchError, setSearchError] = useState(false);

  const changeQuery = (event) => {
    setSearchError(false);
    setQuery(event.target.value);
    setTracksForPreview();
  };

  const trackSearch = async(event) => {
    event.preventDefault();
    const requestedTracks = await getTrack(query);

    const tracks = requestedTracks.results.trackmatches.track;

    if (tracks.length === 0) {
      setSearchError(true);

      return;
    }

    setSearchError(false);
    setTracksForPreview(tracks);
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

      <div className="container">
        {tracksForPreview && (
          <>
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
                  <tr>
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
            {console.log(tracksForPreview)}
          </>
        )}
      </div>
    </>
  );
}
