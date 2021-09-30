import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from "redux";
import rootReducer from "./reducers/transactionReducer";
import { Provider } from "react-redux";

if (localStorage.getItem('transactions') == null)//check if any data in local storage
    localStorage.setItem('transactions', JSON.stringify([]))//set item in local storage in JSON format
let initialState = {//initial state
    currentIndex: -1,
    category: '',
    list: JSON.parse(localStorage.getItem('transactions'))//items in local storage
}
const store = createStore(rootReducer, initialState)//store is created

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));//Provider is used to make redux store available to all the nested components that need to access store.
