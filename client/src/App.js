import React, { Fragment } from 'react';
// import './App.css';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Jumbotron from './components/Jumbotron';
import Timeline from './features/timeline/TimelineList';

const App = () => {
  return (
    <div className='st-container'>
      <Sidebar />
      <div className="st-pusher" id="content">
        <div className="st-content">
            <div className="st-content-inner">
                <Navbar/>
                <Jumbotron/>
                <Timeline/>
            </div>
        </div>
      </div>
      <Landing />
    </div>
  );
}

export default App;
