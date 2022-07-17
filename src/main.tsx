import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

if (
  !new (class {
    x: any;
  })().hasOwnProperty('x')
)
  throw new Error('Transpiler is not configured correctly');

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
