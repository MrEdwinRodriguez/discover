import React, { Fragment } from 'react';
import { Counter } from './features/counter/Counter';
// import './App.css';
import Sidebar from './components/Sidebar';
// import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Main from './components/layout/Main';

const App = () => {
  return (
    <div className='st-container'>
      <Sidebar />
      <Main />
      <Landing />
      <h1>App</h1>
    </div>
  );
}

export default App;
