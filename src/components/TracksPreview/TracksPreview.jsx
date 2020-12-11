import React from 'react';
import { useSelector } from 'react-redux';

export function TracksPreview() {
  const tracksForPreview = useSelector(state => state.tracksForPreview.tracks);

  return (
    <div className="container">
      <h3 className="title">
        {`Tracks found: ${tracksForPreview.length}`}
      </h3>
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
  );
}
