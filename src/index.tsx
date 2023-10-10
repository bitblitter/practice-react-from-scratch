import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/app/app';

const $app = document.querySelector('#app');
if ($app) {
    const root = createRoot($app);
    root.render(<App />);
}