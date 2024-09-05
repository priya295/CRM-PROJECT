import React from 'react';
import ReactDOM from 'react-dom';
import 'tailwindcss/tailwind.css';
import App from './App'; // Importing the App component from App.js
import './index.css'; // You can import CSS files or any other assets here

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
