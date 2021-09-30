import React, { Fragment } from 'react';
import './App.css';
import TransactionList from './components/TransactionList';

function App() {
  return (
    //Fragment is used to accomodate any further addition of components
    <Fragment>
      <TransactionList />
    </Fragment>
 )
  }

export default App;