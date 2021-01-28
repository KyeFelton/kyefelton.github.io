import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import smoothScrollPolyfill from 'smoothscroll-polyfill';

smoothScrollPolyfill.polyfill();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
