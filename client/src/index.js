import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import myStore from './Redux/store';
import './index.css';
import App from './App';
import axios from 'axios';
import MyContext from './contexts/globalContexts';

axios.defaults.baseURL = 'http://localhost:3001';
axios.defaults.withCredentials = true;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={myStore}>
      <MyContext>
        <App />
      </MyContext>
    </Provider>
  </BrowserRouter>
);
