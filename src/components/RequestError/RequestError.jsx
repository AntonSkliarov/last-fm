import React from 'react';

export const RequestError = () => (
  <div className="message is-danger">
    <div className="message-header">
      <p>Oops, something went wrong</p>
    </div>
    <div className="message-body">
      Sorry for the inconvenience.
      Please try to reload the page or contact the support team.
    </div>
  </div>
);
