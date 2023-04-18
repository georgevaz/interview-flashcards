import React from 'react';
import { createRoot } from 'react-dom/client';
import BrowserRouter from 'react-router-dom/BrowserRouter'
import './styles.scss';
import App from './App';

const rootContainer = document.getElementById('root');
const root = createRoot(rootContainer);

root.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <App />
  </BrowserRouter>
);