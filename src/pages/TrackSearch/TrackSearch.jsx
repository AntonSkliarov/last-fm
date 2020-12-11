import React from 'react';
import { useSelector } from 'react-redux';
import { RequestError } from '../../components/RequestError';
import { SearchForm } from '../../components/SearchForm';
import { TracksPreview } from '../../components/TracksPreview';

export function TrackSearch() {
  const tracksForPreview = useSelector(state => state.tracksForPreview.tracks);
  const requestError = useSelector(state => (
    state.requestErrors.requestErrors.searchTrackError
  ));

  return (
    <>
      <SearchForm />

      {requestError && <RequestError />}

      {!!tracksForPreview.length && <TracksPreview />}
    </>
  );
}
