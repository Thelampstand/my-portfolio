import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* basename must match the `base` in vite.config.js and your GitHub repo name */}
    <BrowserRouter basename="/my-portfolio">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
