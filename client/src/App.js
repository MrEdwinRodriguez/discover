import React, { Fragment } from 'react';
import { Counter } from './features/counter/Counter';
// import './App.css';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className='st-container'>
      <Navbar />
      <h1>App</h1>
    </div>
  );
}

export default App;
