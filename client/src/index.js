import React from 'react';
import { App } from './app';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import './global.css';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
