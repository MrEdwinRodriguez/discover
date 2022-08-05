import { configureStore } from '@reduxjs/toolkit';
import { timelineReducer } from '../features/timeline/timelineSlice';
import { userReducer } from '../features/user/userSlice';

export const store = configureStore({
  reducer: {
    timeline: timelineReducer,
    user: userReducer
  },
});
