import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// Global styles load first so component styles can override them
import './styles/variables.css';
import './styles/base.css';
import App from './App';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
