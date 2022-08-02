import React, { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom'
// import './App.css';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Jumbotron from './components/Jumbotron';
import Timeline from './features/timeline/TimelineList';

const App = () => {
  return (
    <div className='st-container'>
      {/* <Routes>
        <Route path="/" element={<Landing />} /> */}

        <Navbar/>
        <Timeline/>

      {/* </Routes> */}
    </div>
  );
}

export default App;
