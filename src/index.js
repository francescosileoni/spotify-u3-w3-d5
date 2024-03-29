import React from 'react';
import ReactDOM from 'react-dom/client'; // Importa createRoot da 'react-dom/client'
import { Provider } from 'react-redux';
import store from './redux/store/index';

import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);
