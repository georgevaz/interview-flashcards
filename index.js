import React from 'react';
import { createRoot } from 'react-dom/client';
import './client/styles.scss';
import App from './client/App';

const rootContainer = document.getElementById('root');
const root = createRoot(rootContainer);

root.render(
    <App />
);