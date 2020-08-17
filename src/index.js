import React from 'react';
import ReactDOM from 'react-dom';
import Background from './components/fundoWhats.png';

import 'materialize-css/dist/css/materialize.min.css';
import './index.css';

import App from './App';

ReactDOM.render(
  <div
    style={{
      background: `url(${Background})`,
      marginTop: '-39px',
    }}
  >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </div>,
  document.getElementById('root')
);
