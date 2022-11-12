import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'
import { GloboStyle } from './GloboStyles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GloboStyle/>
    <App />
  </React.StrictMode>
);
