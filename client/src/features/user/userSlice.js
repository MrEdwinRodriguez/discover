import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../../shared/baseUrl';


export const registerUser = createAsyncThunk(
    'user/register',
    async (payload) => {
        const response = await fetch(baseUrl + 'signup', {
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(payload)
        });
        if (!response.ok) {
            return Promise.reject('Unable to fetch, status: ' + response.status);
        }
        const data = await response.json();
        return data;
    }
);

const initialState = {
    currentUser: null
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setCurrentUser: (state, action) => {
            return {...state, currentUser: action.payload}
        }
    }
});

export const userReducer = userSlice.reducers;

export const { setCurrentUser } = userSlice.actions;

// export const selectCurrentUser = (state) => {
//     return state.user.currentUser;
// };