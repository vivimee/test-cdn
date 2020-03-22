/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import { render } from 'react-dom';
import App from './core/App';

const root = document.createElement('div');
document.body.appendChild(root);

render(<App />, root);

const h3 = document.createElement('h3');
h3.innerHTML = 'halo world';
document.body.appendChild(h3);

if (module.hot) {
  module.hot.accept('./core/App.jsx', () => {
    const NewApp = require('./core/App.jsx').default;
    render(<NewApp />, root);
  });
}
