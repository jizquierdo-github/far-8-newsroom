import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import storeFactory from "./store/store";

//Custom components
import App from './App';

const store = storeFactory();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
