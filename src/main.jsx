import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.less';
// import 'antd/dist/antd.css';

import { Provider } from 'react-redux';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
