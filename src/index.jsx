import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { HashRouter } from 'react-router-dom';
import './index.css';
import { App } from './App';
import { rootReducer } from './redux/reducers/rootReducer';

/* eslint-disable no-underscore-dangle */
const store = createStore(rootReducer, compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
));
/* eslint-enable */

const app = (
  <Provider store={store}>
    <HashRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </HashRouter>
  </Provider>
);

ReactDOM.render(
  app,
  document.getElementById('root'),
);
