import React from 'react';
import ReactDom from 'react-dom';
import App from './components/app';

const $app = document.querySelector('#app');
if ($app) {
    ReactDom.render(<App />, $app);
}