import { StrictMode } from 'react'
// import ReactDOM from 'react-dom/client';
// ..........import styles............
// @import 'variables';
// @import 'mixins';
// @import 'globals';
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
