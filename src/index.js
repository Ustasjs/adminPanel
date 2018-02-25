import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import createStore from './store';

import './styles/fonts/fonts.scss';
import './styles/layout/settings.scss';

import App from 'App';

const store = createStore();

ReactDOM.render(
  <BrowserRouter basename="/adminpanel">
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
