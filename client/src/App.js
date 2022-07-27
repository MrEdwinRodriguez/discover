import React, { Fragment } from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <h1>App</h1>
    </Fragment>
  );
}

export default App;
