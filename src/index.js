import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import { BrowserRouter } from 'react-router-dom';

import './styles/fonts/fonts.scss';
import './styles/layout/settings.scss';

import App from "App";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
)