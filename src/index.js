import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import allReducers from './reducers';

let cards = [{
    id: 1,
    number: "4654-1234-1234-1234",
    expireDate: "02/22",
    name: "John Doe"
},
{
    id: 2,
    number: "5654-1234-1234-1234",
    expireDate: "02/22",
    name: "John Doe"
},
{
    id: 3,
    number: "6654-1234-1234-1234",
    expireDate: "02/22",
    name: "John Doe"
}];

// let cards = localStorage.getItem("cards");

const store = createStore(allReducers, { cards: cards });

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
