import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Globalprovider from './context/GlobalProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Globalprovider>
      <App />
  </Globalprovider>
);
