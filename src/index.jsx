import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { HashRouter } from 'react-router-dom';
import './index.css';
import { App } from './App';
import { rootReducer } from './redux/reducers/rootReducer';

const store = createStore(rootReducer, compose(
  applyMiddleware(thunk),
));

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
