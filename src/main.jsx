import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import MainApp from './App.jsx';  // Change to import MainApp instead of App

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MainApp />
  </StrictMode>
);
