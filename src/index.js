import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import AppState from './contexts/AppState';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppState>
        <App />
      </AppState>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
