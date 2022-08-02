import React, { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom'
// import './App.css';
import Landing from './components/Landing';
import Timeline from './features/timeline/TimelineList';
import Profile from './features/profile/Profile';

const App = () => {
  return (
    <div className='st-container'>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/timeline" element={<Timeline/>} />
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
    </div>
  );
}

export default App;
