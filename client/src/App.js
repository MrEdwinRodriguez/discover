import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import React, { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom'
// import './App.css';
import Landing from './components/Landing';
import Timeline from './features/timeline/TimelineList';
import Profile from './features/profile/Profile';
import Login from './features/user/UserLoginForm';
import Signup from './features/user/UserSignup';
import Recording from './features/recordings/Recording';
import { fetchBlocks } from './features/timeline/timelineSlice';
// import { Store } from 'tough-cookie';
import { loadUser } from './features/user/userSlice';
import { store} from './app/store';
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    // store.dispatch(loadUser())
    dispatch(loadUser())
  }, [dispatch]);

  return (
    <div className='st-container'>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/timeline" element={<Timeline/>} />
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/record" element={<Recording/>}/>
      </Routes>
    </div>
  );
}

export default App;
